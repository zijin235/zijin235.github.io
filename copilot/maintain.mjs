/**
 * Copilot 自动维护脚本
 * - 用 @github/copilot-sdk 在 CI 中运行 Copilot coding agent
 * - agent 读取仓库根 AGENTS.md 与 app/data/*.ts，执行维护并尽量自证构建通过
 * - 依赖认证（任选其一）：
 *   1) COPILOT_GITHUB_TOKEN 环境变量（带 Copilot 权限的 token）
 *   2) GITHUB_TOKEN（Actions 默认，视订阅/配置而定）
 *   3) BYOK：见 https://github.com/github/copilot-sdk 的 BYOK 文档
 */
import { CopilotClient, approveAll } from '@github/copilot-sdk'

const client = new CopilotClient()
await client.start()

const session = await client.createSession({
  model: process.env.COPILOT_MODEL || 'gpt-5',
  onPermissionRequest: approveAll,
})

const done = new Promise((resolve) => {
  session.on('session.idle', resolve)
  session.on('assistant.message', (event) => {
    console.log('[copilot]', event.data.content)
  })
  session.on('session.error', (event) => {
    console.error('[copilot:error]', event)
  })
})

const prompt = `You are maintaining the personal homepage repository in the current working directory.

Follow these steps:
1. Read AGENTS.md at the repository root and follow it strictly (it is the authoritative maintenance handbook).
2. Inspect the current state: git status, recent commits, app/data/site.ts and app/data/content.ts.
3. Perform reasonable maintenance such as:
   - adding/list/updating News entries (keep newest dates on top),
   - updating author/social info if clearly outdated,
   - fixing typos or wrong field formats in app/data/*.ts,
   - ensuring newly referenced images exist under public/.
4. Do NOT change styling, layout, or components unless obviously necessary. All edits must respect the visual rules in AGENTS.md.
5. Verify your changes by running \`npm run generate\` (dependencies are pre-installed). Fix any errors you introduced.
6. When done, print a short summary of changes made (or "NO_CHANGES" if nothing needed).`

try {
  const sent = session.send({ prompt, timeout: 10 * 60 * 1000 })
  await Promise.race([done, sent])
} catch (err) {
  console.error('Copilot session failed:', err)
  process.exitCode = 1
} finally {
  await session.disconnect()
  await client.stop()
}
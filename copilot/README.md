# Copilot 自动维护（在线 & 本地）

本仓库支持让 **GitHub Copilot 直接维护个人主页**，一条内容更新无需再拷贝到本地手动操作。
有三条路径，从「零配置」到「全自动」：

## 路径 1：Copilot 自动读取维护手册（零配置，立即可用）✅

已在仓库中放置两个文件，Copilot（IDE 或 cloud agent）打开本仓库时会**自动加载**：

| 文件 | 作用 |
|---|---|
| `AGENTS.md`（仓库根） | 权威维护手册：内容维护指南、字段说明、视觉约束、验证/提交规范（**Claude Code / Codex 同样自动读取**） |
| `.github/copilot-instructions.md` | Copilot 专用指令（要点 + 安全边界） |

用法：打开仓库（IDE 的 Copilot Chat / Copilot coding agent），直接说
「帮我更新 News，加一条 2025 年 1 月的新动态」即可 —— Copilot 会照着 `AGENTS.md` 改 `app/data/*.ts`、验证、提 PR。

## 路径 2：本地 agent + skill（克隆到本地后即用）✅

仓库内 `.pi/skills/homepage-maintenance/SKILL.md` 是 pi（及兼容 agent）的项目级 skill：

- 克隆仓库 → 本地 pi 打开 → 自动发现该 skill（`/skill:homepage-maintenance`）
- 直接说「在 news 里加一条 XXX」→ agent 按 skill 修改 `app/data/content.ts` → `npm run generate` 验证 → 提交推送
- 需要视觉/组件改动的任务，配合全局 skill：`/skill:nuxt-ui`、`/skill:frontend-design`（组件 API 查 Nuxt UI MCP）

## 路径 3：workflow 定时跑 Copilot（全自动，需订阅 + token）⏰

`copilot-maintain.yml`（每周一 04:00 UTC 或手动触发）用官方
[GitHub Copilot SDK](https://github.com/github/copilot-sdk)（npm `@github/copilot-sdk`）
在 CI 里运行 Copilot coding agent：读 `AGENTS.md` → 检查/更新内容 → `npm run generate` 自证 →
有改动则自动提交并开 PR 等人工 review。

**启用前提**：

1. 有 GitHub Copilot 订阅（Free/Pro 含 CLI 使用额度；也可 [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) 自带 LLM key）
2. 配置认证（二选一）：
   - 仓库 Settings → Secrets and variables → Actions → New secret：`COPILOT_GITHUB_TOKEN`，
     值为一个有 Copilot 权限的 token（GitHub → Settings → Developer settings → Personal access tokens，
     Fine-grained，权限勾选 Copilot / repo）
   - 或 BYOK：在 secret 中配置你的 LLM provider key 并去掉 workflow 里的注释
3. 手动触发测试：Actions → **Copilot Maintain** → Run workflow

## 路径 4：Claude / Codex 在 workflow 里自动维护 🚀

`agent-maintain.yml`（带 `workflow_dispatch`，选择 agent）用 **headless CLI** 在 CI 里运行
Claude Code 或 OpenAI Codex（两者都会自动读取 `AGENTS.md`）：

| Agent | 实现 | 认证 secret |
|---|---|---|
| **Claude Code** | `@anthropic-ai/claude-code` CLI + `claude -p ... --dangerously-skip-permissions` | `ANTHROPIC_API_KEY` |
| **OpenAI Codex** | `@openai/codex` CLI + `codex exec --sandbox workspace-write --full-auto` | `OPENAI_API_KEY` |

启用：Actions → **Agent Maintain** → Run workflow → 选 claude/codex →（可选填额外指令）。
有改动自动开 PR 等 review（不直接推 main）。

> 也可用 Anthropic 官方 `anthropics/claude-code-action`（GitHub Action，需装 Claude GitHub App），
> 见其仓库 README 的 Scheduled Maintenance 示例；本项目默认用更可控的 headless CLI 方式。

## 常用命令（本地）

```bash
node --check copilot/maintain.mjs          # 语法检查
npm ci --prefix copilot                    # 安装 SDK（workflow 会自动做）
```

> 说明：路径 3 生成的改动都会以 **PR** 形式提交，经你确认后合并，不会直接推 `main`；
> 这与 `deploy.yml`（push main → 部署）配合，保证线上只出现你 review 过的内容。
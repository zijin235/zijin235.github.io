# Repository Instructions for GitHub Copilot

本项目是一个 Nuxt 4 + TypeScript + @nuxt/ui 的个人主页，通过 GitHub Actions 部署到 `gh-pages` 分支。

## 维护时的铁律

1. **内容维护 = 只改 `app/data/`**：个人信息/社交链接在 `app/data/site.ts`，新闻/论文/荣誉/教育/讲座/实习在 `app/data/content.ts`。字段定义见 `app/types/index.ts`。
2. **不要改样式和版面**：视觉与原版 1:1（品牌色 `#224b8d`），除非用户明确要求。
3. **验证后提交**：任何改动必须 `npm run generate` 构建通过；不能在本机构建时，用 `npx nuxt generate` 或检查语法与字段类型一致性。
4. **提交信息规范**：`content:` / `fix:` / `chore:` / `docs:` 前缀。
5. **组件开发**：只用 @nuxt/ui v4 语义色组件，不手写 CSS 造轮子；数据自动填充引用数用 `scholarId` 字段。

完整维护手册见仓库根目录 **`AGENTS.md`** —— Copilot 会自动读取，按其中"内容维护指南"和"检查清单"操作。

## 安全边界

- 不要改动 `google_scholar_crawler/`（自动化爬虫）
- 不要提交 `node_modules/`、`.output/`、`.nuxt/`（已 gitignore）
- 涉及样式/结构的改动，先向用户说明影响再动手
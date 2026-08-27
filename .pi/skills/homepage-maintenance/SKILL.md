---
name: homepage-maintenance
description: 维护本站点（个人主页，Nuxt 4 + TypeScript + @nuxt/ui）。更新个人信息、新闻、论文、荣誉、教育、讲座、实习等内容时使用；也用于帮助部署、构建验证或改动组件。覆盖 AGENTS.md 中定义的维护流程、提交规范与视觉约束。
---

# 个人主页维护（Nuxt 4 + TS + Nuxt UI）

这是仓库 `weii.github.io` 的维护操作指引。**权威手册在仓库根 `AGENTS.md`**（本 skill 的浓缩版 + 全部细节），动手前先读它。

## 1. 先了解现状

```bash
# 快速盘点
ls app/data/ app/components/ app/pages/ public/ && cat package.json | grep -A6 '"scripts"'
git log --oneline -5
```

## 2. 常见维护任务

### 改个人信息 / 社交链接 → `app/data/site.ts`
`site.title/description`、`author{name,avatar,bio,location,employer,email}`、`socialLinks[]`。

### 增删新闻/荣誉/教育/讲座/实习 → `app/data/content.ts`
每项是 `{ date, text, links? }`，在对应数组**尾部追加**，日期保持从新到旧。

### 增删论文 → `app/data/content.ts` → `publications`
- 置顶：`featured: true` + `image`（放 `public/`）+ `badge` + `links`
- 普通：`title/authors/venue/links`
- 引用数自动显示：填 `scholarId`（取自 scholar 链接 `citation_for_view=XXXX`）

> 所有字段类型以 `app/types/index.ts` 为准。

## 3. 验证（必须）

```bash
npm run generate        # 静态构建必须通过
npx serve .output/public  # 可选：预览产物，curl 确认 200
```

构建报 rolldown binding 缺失时：`npm install @rolldown/binding-linux-x64-gnu --no-save`
（或 `npm ci --registry=https://registry.npmjs.org`）。

## 4. 提交与部署

```bash
git add -A
git commit -m "content: <改动摘要>"   # 前缀：content/fix/chore/docs
git push                              # 自动触发 deploy.yml → gh-pages
```

## 5. 组件/样式改动时的约束（重要）

1. 只用 **@nuxt/ui v4** 组件（UApp/UHeader/UNavigationMenu/UAvatar/UBadge/UButton/ULink/UFooter），不手写 HTML/CSS 造轮子
2. 颜色只用语义色（`text-primary`/`bg-elevated`/`border-muted`…），不硬编码色值；品牌色 `#224b8d` 已在 `app/assets/css/main.css` 的 `brand` 色阶中
3. 组件 API 查 **Nuxt UI MCP**（`mcp({ server: 'nuxt-ui' })`，工具 `search-components`/`get-component`）；Nuxt 框架文档查 **Nuxt MCP**（`mcp({ server: 'nuxt' })`）
4. **视觉与原版 1:1**：不要擅自改版面、颜色、间距；确有必要先说明
5. 新图片放 `public/`，路径以 `/` 开头

## 6. 检查清单（提交前）

- [ ] 改动仅涉及 `app/data/`（内容）或按要求在组件层
- [ ] `npm run generate` 通过
- [ ] 提交信息规范
- [ ] 未误改 `google_scholar_crawler/`、未提交 `node_modules/.nuxt/.output`
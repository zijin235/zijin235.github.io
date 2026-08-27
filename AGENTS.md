# AGENTS.md — 个人主页维护手册

本文件是仓库的**权威维护指引**，GitHub Copilot、本地 agent（pi / Claude Code 等）会自动读取。
核心原则：**内容全部通过编辑 `app/data/*.ts` 维护，不修改组件与样式（除非有明确需求）**。

## 项目概览

- **技术栈**：Nuxt 4（SSG，`app/` 目录结构）+ TypeScript + @nuxt/ui v4 + Tailwind CSS v4
- **部署**：GitHub Actions `deploy.yml` → `npm run generate` → 推送 `gh-pages` 分支
- **产物**：`.output/public`（纯静态），用户站点部署在根路径，无 `app.baseURL`
- **样式要求**：视觉与原版 Jekyll 站点 1:1（品牌色 `#224b8d`、容器 1160px、顶栏 56px、圆角 3px），**不要随意改样式或版面**

## 目录结构与职责

```
app/
├── data/site.ts        ← 站点/作者/社交链接配置（最常改）
├── data/content.ts     ← 新闻、论文、荣誉、教育、讲座、实习内容
├── types/index.ts      ← 数据模型（字段类型定义）
├── components/         ← 页面组件（一般不动）
├── pages/index.vue     ← 主页面组装
├── composables/useScholarStats.ts  ← 拉取 Google Scholar 引用数据
└── assets/css/main.css ← 主题色阶 / 布局样式
public/                 ← 静态资源（头像、论文图、favicon）
google_scholar_crawler/ ← 引用数据爬虫（由 Action 运行，不要改）
```

## 内容维护指南（日常操作）

所有内容字段的完整定义见 `app/types/index.ts`，以下为常用操作：

### 1. 修改个人信息 / 社交链接（`app/data/site.ts`）

- `site.title` / `site.description`：站点标题和简介
- `author`：`name`、`avatar`（相对 `/public` 的路径）、`bio`、`location`、`employer`、`email`
- `socialLinks`：数组每一项 `{ id, label, url }`，`id` 唯一即可；不想要的就删掉该项

### 2. 加一篇新闻（`app/data/content.ts` → `news` 数组）

```ts
{ date: '2025.01', text: '🎉 论文被 AAAI 2025 接收！' },
```

在**数组尾部**追加，保持日期从新到旧。`text` 中可用 emoji，不要写 HTML。

### 3. 加一篇论文（`app/data/content.ts` → `publications` 数组）

- 置顶论文：`featured: true` + `image`（图放 `public/`）+ `badge`（如 `CVPR 2025`）+ `links`
- 普通论文：`title` + `authors` + `venue` + `links`
- 作者列表用 `**名字**` 包住自己会加粗（第一作者高亮）；`venueDetail` 写会议/期刊全名行；`ccf` 写等级标签（如 `CCF A`）
- 引用数自动填充：填 `scholarId`（Google Scholar 论文 ID，从 citations 链接的 `citation_for_view=XXXX` 取），显示为 "Citations: N"

### 4. 其他时间线（荣誉/教育/讲座/实习）

`honors` / `education` / `talks` / `internships` 数组，格式同 `news`（`date` + `text`，可带 `links`）。

### 5. 提交规范

内容改动按以下流程，**必须在本地验证构建成功后再提交**：

```bash
npm run dev          # 开发预览（改动即时生效）
npm run generate     # 静态构建验证 —— 必须通过
git add -A && git commit -m "content: update news/publications ..."
git push             # 触发部署 workflow，1-2 分钟后线上更新
```

> 提交信息前缀约定：`content:`（内容）、`chore:`（工具/依赖）、`fix:`（修复）、`docs:`（文档）。

## 视觉与组件规范（改动组件时）

1. 组件一律用 **@nuxt/ui v4** 组件（`UApp`/`UHeader`/`UBadge`/`UButton`/`ULink`/`UAvatar` 等），不要手写 HTML/CSS 造轮子
2. 颜色只用**语义色**（`text-primary`、`bg-elevated`、`border-muted` 等），不要硬编码色值；品牌色已在 `app/assets/css/main.css` 的 `brand` 色阶定义
3. 组件 API 以 **Nuxt UI 官方 skill / Nuxt UI MCP**（`https://ui.nuxt.com/mcp`，工具：`search-components`/`get-component`）为准；Nuxt 框架文档用 Nuxt MCP（`https://nuxt.com/mcp`）
4. 新布局必须与现有设计语言一致（Trebuchet MS 字体栈、1160px 容器、3px 圆角）
5. 改组件后用 `npm run generate` 验证产物，检查 `index.html` 关键区块渲染正常

## 部署

- `deploy.yml`（push main 触发）：`npm ci --registry=https://registry.npmjs.org` → `generate` → 推 `gh-pages`
- Google Scholar 数据：`google_scholar_crawler.yaml` 每天 08:00 UTC 更新 `google-scholar-stats` 分支的 `gs_data.json`，页面运行时拉取，无需手动干预

## 维护检查清单（agent 修改前后）

- [ ] 修改均在 `app/data/`（内容）或按要求在组件层
- [ ] 新图片已加入 `public/` 且路径正确
- [ ] `npm run generate` 通过
- [ ] 预览 `.output/public` 返回 200
- [ ] 提交信息规范、变更最小化
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Nuxt UI v4（组件库）
  modules: ['@nuxt/ui'],

  // 静态站点生成 (SSG)：`npm run generate` 产出纯静态文件，可直接部署到 GitHub Pages
  ssr: true,

  // 运行时配置（可在 .env 或 CI 中覆盖），类型安全地注入到客户端
  runtimeConfig: {
    public: {
      // Google Scholar 数据由 crawler Action 生成在 google-scholar-stats 分支
      scholarStatsBaseUrl: 'https://cdn.jsdelivr.net/gh/zijin235/zijin235.github.io@',
      scholarStatsFile: 'google-scholar-stats/gs_data.json',
      scholarStatsShieldFile: 'google-scholar-stats/gs_data_shieldsio.json',
    },
  },

  app: {
    // GitHub Pages 用户主页：https://zijin235.github.io/
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Cheng Wei',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'HandheldFriendly', content: 'True' },
        { name: 'description', content: 'M.S. student in AI Security and Agent Security at the College of Computer Science and Technology / School of Software, Nanjing University of Aeronautics and Astronautics.' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
    // 如需构建时类型检查：npm i -D vue-tsc 后改为 true
    typeCheck: false,
  },
})
// Nuxt UI 主题配置 —— 对齐原站点品牌色（#224b8d，见 main.css 里定义的 brand 色阶）
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'slate',
    },
    header: {
      slots: {
        root: 'border-b border-muted bg-white',
      },
    },
  },
})
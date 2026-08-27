/** 为 public/ 静态资源补上 Nuxt app.baseURL，兼容 GitHub Pages 项目子路径。 */
export function sitePath(path: string): string {
  const baseURL = useRuntimeConfig().app.baseURL
  return `${baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

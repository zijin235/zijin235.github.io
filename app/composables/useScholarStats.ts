import type { ScholarStats } from '~/types'

/** 构建期默认值：用于 SEO 预渲染与网络不可用时的兜底展示 */
const FALLBACK_STATS: ScholarStats = {
  citedby: 260000,
  publications: {},
}

/**
 * 用类型安全的 fetch 替代旧版 jQuery `$.getJSON('.../gs_data.json')`：
 * - useState 保证多组件间共享同一份数据，只请求一次
 * - 加载失败自动回退到构建期内置数据，页面不会白屏
 */
export function useScholarStats() {
  const { public: config } = useRuntimeConfig()

  const stats = useState<ScholarStats>('scholar-stats', () => FALLBACK_STATS)
  const loading = useState<boolean>('scholar-stats-loading', () => false)
  const error = useState<string | null>('scholar-stats-error', () => null)

  async function refresh() {
    if (loading.value) return
    loading.value = true
    error.value = null
    try {
      const url = `${config.scholarStatsBaseUrl}${config.scholarStatsFile}`
      const data = await $fetch<ScholarStats>(url)
      if (data && typeof data.citedby === 'number') {
        stats.value = data
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : String(e)
      // 保留 fallback，页面可正常展示
    } finally {
      loading.value = false
    }
  }

  /** 按 Google Scholar paper id 取引用数；无数据返回 null（组件侧显示占位） */
  function citationsFor(paperId?: string): number | null {
    if (!paperId) return null
    const p = stats.value.publications?.[paperId]
    return typeof p?.num_citations === 'number' ? p.num_citations : null
  }

  /** shields.io 引用数 badge 的完整 URL（对应旧站 <img> 里的 endpoint） */
  function scholarBadgeUrl(): string {
    const endpoint = `${config.scholarStatsBaseUrl}${config.scholarStatsShieldFile}`
    const q = new URLSearchParams({
      url: endpoint,
      logo: 'Google Scholar',
      labelColor: 'f6f6f6',
      color: '9cf',
      style: 'flat',
      label: 'citations',
    })
    return `https://img.shields.io/endpoint?${q.toString()}`
  }

  return { stats, loading, error, refresh, citationsFor, scholarBadgeUrl }
}
import type { Locale } from '~/data/i18n'
import { messages } from '~/data/i18n'

/**
 * 轻量中英文切换：
 * - useState 全局共享；localStorage 持久化（刷新保持）
 * - 默认 en（SEO/SSG 首屏英文），客户端挂载后同步本地偏好
 */
export function useLocale() {
  const locale = useState<Locale>('locale', () => 'en')

  function t(key: string): string {
    return messages[locale.value][key] ?? messages.en[key] ?? key
  }

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'zh' : 'en'
    if (import.meta.client) {
      localStorage.setItem('locale', locale.value)
    }
  }

  function setLocale(l: Locale) {
    locale.value = l
    if (import.meta.client) {
      localStorage.setItem('locale', l)
    }
  }

  // 客户端水合后同步本地偏好
  if (import.meta.client && typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('locale')
    if (saved === 'zh' || saved === 'en') {
      locale.value = saved
    }
  }

  return { locale, t, toggleLocale, setLocale }
}
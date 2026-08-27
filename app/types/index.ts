/**
 * 全站类型定义 —— 把旧的 _config.yml + about.md 里的自由文本变成类型安全的数据模型
 */

/** 作者信息（对应旧 _config.yml 的 author:） */
export interface AuthorProfile {
  name: string
  avatar: string
  bio?: string
  location?: string
  employer?: string
  email?: string
  googlescholar?: string
}

/** 社交链接 */
export interface SocialLink {
  id: string
  label: string
  url?: string
}

/** 带日期的条目（News / Honors / Education / Talks / Internships 通用） */
export interface TimelineEntry {
  date: string
  text: string
  links?: { label: string; url: string }[]
}

/** 出版物 */
export interface PublicationLink {
  label: string
  url: string
}

export interface Publication {
  /** Google Scholar paper id，用于自动填充引用数（对应旧站 <span class='show_paper_citations' data='...'>） */
  scholarId?: string
  title: string
  authors?: string
  venue?: string
  badge?: string
  image?: string
  imageAlt?: string
  description?: string
  links?: PublicationLink[]
  /** 是否为置顶图文展示（paper-box） */
  featured?: boolean
}

/** Google Scholar 统计数据（github action 自动更新） */
export interface PaperCitationStats {
  num_citations?: number
  citedby?: number
}

export interface ScholarStats {
  citedby: number
  updated?: string
  publications: Record<string, PaperCitationStats>
}
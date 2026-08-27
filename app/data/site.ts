import type { AuthorProfile, SocialLink } from '~/types'

/** 站点级配置（对应旧 _config.yml 的 Site Settings） */
export const site = {
  title: '程伟',
  description:
    'AI 安全 / Agent 安全方向硕士研究生，南京航空航天大学计算机科学与技术学院/软件学院',
  repository: 'zijin235/weii.github.io',
  googlescholar: 'https://scholar.google.com/citations?user=DhtAFkwAAAAJ',
} as const

/** 作者信息（对应旧 _config.yml 的 author:） */
export const author: AuthorProfile = {
  name: '程伟',
  avatar: '/android-chrome-512x512.png',
  bio: '硕士研究生 | 南京航空航天大学',
  location: '南京, 中国',
  employer: '计算机科学与技术学院/软件学院',
  email: '', // 补充真实邮箱后会自动显示；留空则不显示
}

/** 社交链接（对应旧 author-profile.html 里的一堆 if 分支） */
export const socialLinks: SocialLink[] = [
  { id: 'google-scholar', label: 'Google Scholar', url: site.googlescholar },
  { id: 'github', label: 'GitHub', url: 'https://github.com/' },
  // 补充邮箱后可恢复：{ id: 'email', label: 'Email', url: `mailto:${author.email}` }
  // 需要更多就继续加：DBLP / ResearchGate / Twitter / ORCID ...
]
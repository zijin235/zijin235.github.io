import type { AuthorProfile, SocialLink } from '~/types'

/** 站点级配置（对应旧 _config.yml 的 Site Settings） */
export const site = {
  title: 'Cheng Wei',
  description: 'Research interests: AI Security and Agent Security',
  repository: 'zijin235/weii.github.io',
} as const

/** 作者信息（对应旧 _config.yml 的 author:） */
export const author: AuthorProfile = {
  name: 'Cheng Wei',
  avatar: '/android-chrome-512x512.png',
  bio: 'M.S. Student · NUAA',
  location: 'Nanjing, China',
  employer: 'College of Computer Science and Technology / School of Software',
  email: 'chengweii@nuaa.edu.cn',
}

/** 社交链接（对应旧 author-profile.html 里的一堆 if 分支） */
export const socialLinks: SocialLink[] = [
  // 地图定位：南京航空航天大学 将军路校区
  {
    id: 'map',
    label: 'Jiangjunlu Campus (NUAA)',
    url: 'https://maps.google.com/?q=南京航空航天大学将军路校区',
  },
  { id: 'email', label: 'Email', url: `mailto:${author.email}` },
  { id: 'github', label: 'GitHub', url: 'https://github.com/' },
  // 创建 Google Scholar 账号后可恢复：
  // { id: 'google-scholar', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=YOUR_ID' }
  // 需要更多就继续加：DBLP / ResearchGate / Twitter / ORCID ...
]
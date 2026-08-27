import type { AuthorProfile, SocialLink } from '~/types'

/** 站点级配置（对应旧 _config.yml 的 Site Settings） */
export const site = {
  title: 'Lorem ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.',
  repository: 'zijin235/weii.github.io',
  googlescholar: 'https://scholar.google.com/citations?user=DhtAFkwAAAAJ',
} as const

/** 作者信息（对应旧 _config.yml 的 author:） */
export const author: AuthorProfile = {
  name: 'Lorem ipsum',
  avatar: '/android-chrome-512x512.png',
  bio: 'Lorem ipsum College',
  location: 'Beijing, China',
  employer: '',
  email: 'Lorem@ipsum.com',
}

/** 社交链接（对应旧 author-profile.html 里的一堆 if 分支） */
export const socialLinks: SocialLink[] = [
  { id: 'google-scholar', label: 'Google Scholar', url: site.googlescholar },
  { id: 'email', label: 'Email', url: `mailto:${author.email}` },
  { id: 'github', label: 'GitHub', url: 'https://github.com/' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  // 需要更多就继续加：DBLP / ResearchGate / Twitter / ORCID ...
]
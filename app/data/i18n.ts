export type Locale = 'en' | 'zh'

/** 双语 UI 文案字典（扁平键：如 'nav.about'） */
export const messages: Record<Locale, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.publications': 'Publications',
    'nav.internships': 'Internships',

    'site.bio': 'M.S. Student · NUAA',
    'site.description': 'Research interests: AI Security and Agent Security',
    'site.location': 'Nanjing, China',
    'site.employer': 'College of Computer Science and Technology / School of Software',

    'section.researchInterests': 'Research Interests',
    'section.representativePublications': 'Representative Publications',
    'section.news': 'News',
    'section.honors': 'Honors and Awards',
    'section.education': 'Educations',
    'section.talks': 'Invited Talks',
    'section.internships': 'Internships',

    'pub.title': 'Publications',
    'pub.intro':
      'Representative publications (first author) are highlighted below; the full list is also presented here.',
    'pub.representative': 'Representative Publications',
    'pub.others': 'Other Publications',
    'pub.viewAll': 'View All Publications',
    'pub.back': '← Back to Home',

    'intern.title': 'Internships',
    'intern.intro': 'Past internship experiences.',
    'intern.back': '← Back to Home',

    'locale.switch': '中文',
  },
  zh: {
    'nav.about': '个人简介',
    'nav.publications': '论文',
    'nav.internships': '实习',

    'site.bio': '硕士研究生 · 南航',
    'site.description': '研究方向：AI 安全与 Agent 安全',
    'site.location': '南京, 中国',
    'site.employer': '计算机科学与技术学院/软件学院',

    'section.researchInterests': '研究方向',
    'section.representativePublications': '代表性论文（第一作者）',
    'section.news': '新闻',
    'section.honors': '荣誉与奖励',
    'section.education': '教育经历',
    'section.talks': '特邀报告',
    'section.internships': '实习经历',

    'pub.title': '论文发表',
    'pub.intro': '以下为代表性论文（第一作者）高亮展示，并附完整论文列表。',
    'pub.representative': '代表性论文',
    'pub.others': '其他论文（第二作者及以上）',
    'pub.viewAll': '查看全部论文',
    'pub.back': '← 返回首页',

    'intern.title': '实习经历',
    'intern.intro': '过往实习经历。',
    'intern.back': '← 返回首页',

    'locale.switch': 'EN',
  },
}
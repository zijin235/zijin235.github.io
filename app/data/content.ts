import type { Publication, TimelineEntry } from '~/types'

/**
 * About 段落（支持 <strong> 等简单 HTML 标签），
 * 首页渲染：身份 → 研究总述 → 开放交流
 */
export const about: string[] = [
  // 身份：院校 / 导师
  'I am an M.S. student at the College of Computer Science and Technology / School of Software, Nanjing University of Aeronautics and Astronautics (NUAA), advised by Prof. zhouyu.',
  // 研究方向总述
  'My research centers on the <strong>safety and security of AI systems and autonomous agents</strong>, with a focus on understanding and defending against the failure modes that emerge when large language models are built into real-world applications.',
  // 开放交流
  'I am open to discussion and collaboration on these topics — feel free to reach out via email.',
]

/** 🔬 Research Interests（独立小节，参考 NUAA 同学站点的列表式呈现） */
export const researchInterests: { title: string; description: string }[] = [
  {
    title: 'AI Security',
    description:
      'Adversarial robustness of deep learning: adversarial attacks and defenses, backdoor and data-poisoning threats, and reliable security evaluation for large language models.',
  },
  {
    title: 'Agent Security',
    description:
      'Security of LLM-based agents: prompt injection and indirect prompt injection, tool-calling and permission misuse, sandbox boundaries, risks in multi-agent collaboration, and safety alignment of autonomous agents.',
  },
]

/** 🔥 News（对应旧 about.md 的 News 一节） */
export const news: TimelineEntry[] = [
  {
    date: '2022.02',
    text: '🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.',
  },
  {
    date: '2022.02',
    text: '🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.',
  },
]

/** 📝 Publications（对应旧 about.md 的 Publications 一节） */
export const publications: Publication[] = [
  {
    scholarId: 'DhtAFkwAAAAJ:ALROH1vI_8AC',
    title: 'Deep Residual Learning for Image Recognition',
    authors: 'Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun',
    venue: 'CVPR 2016',
    badge: 'CVPR 2016',
    image: '/500x300.png',
    imageAlt: 'paper teaser',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.',
    featured: true,
    links: [
      {
        label: 'Paper',
        url: 'https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf',
      },
      {
        label: 'Project',
        url: 'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC',
      },
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    authors: '**A**, B, C',
    venue: 'CVPR 2020',
    ccf: 'CCF A',
    links: [{ label: 'GitHub', url: 'https://github.com' }],
  },
]

/** 🎖 Honors and Awards */
export const honors: TimelineEntry[] = [
  { date: '2021.10', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { date: '2021.09', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

/** 📖 Educations */
export const education: TimelineEntry[] = [
  { date: '2019.06 - 2022.04 (now)', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { date: '2015.09 - 2019.06', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

/** 💬 Invited Talks */
export const talks: TimelineEntry[] = [
  { date: '2021.06', text: 'Lorem ipsum dolor sit amet.', links: [{ label: 'video', url: 'https://github.com/' }] },
  { date: '2021.03', text: 'Lorem ipsum dolor sit amet.', links: [{ label: 'video', url: 'https://github.com/' }] },
]

/** 💻 Internships */
export const internships: TimelineEntry[] = [
  { date: '2019.05 - 2020.02', text: 'Lorem ipsum dolor sit amet.', links: [{ label: 'Lorem', url: 'https://github.com/' }] },
]
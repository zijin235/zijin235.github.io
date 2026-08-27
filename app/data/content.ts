import type { Publication, TimelineEntry } from '~/types'

/**
 * About 段落（支持 <strong> / <a> 等简单 HTML 标签），
 * 首页渲染：身份 → 研究总述 → 开放交流
 */
export const about: string[] = [
  // 身份：院校 / 导师（关联 Yu Zhou 教授主页）
  'I am an M.S. student at the College of Computer Science and Technology / School of Software, Nanjing University of Aeronautics and Astronautics (NUAA), advised by <a href="https://csyuzhou.github.io/" target="_blank" rel="noopener noreferrer" class="text-primary">Prof. Yu Zhou</a>.',
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

/** 📝 Publications（对应旧 about.md 的 Publications 一节；**名字** 表示加粗自己） */
export const publications: Publication[] = [
  // ── 置顶卡片（featured）：用户一作论文，配图占位，后续可换真实 teaser ──
  {
    title: 'Defending Neural Code Understanding Models by Eliminating Backdoors',
    authors: '**Wei Cheng**, Yu Zhou, Guang Yang, Xiangyu Zhang, Wenhua Yang, Taolue Chen',
    venue: 'ASE Journal 2026',
    venueDetail: 'Automated Software Engineering Journal, Vol.33, 2026.',
    ccf: 'CCF B',
    badge: 'ASE Journal 2026',
    image: '/500x300.png',
    imageAlt: 'paper teaser placeholder',
    description:
      'We defend neural code understanding models by eliminating backdoors, improving their robustness against backdoor attacks.',
    featured: true,
    links: [{ label: 'Paper', url: 'https://doi.org/10.1007/s10515-026-00645-6' }],
  },
  // ── 列表（按 CCF 等级排序）──
  {
    title: 'Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation',
    authors: 'Xiangyu Zhang, Yu Zhou, Guang Yang, **Wei Cheng**, Taolue Chen',
    venue: 'ACL 2025',
    venueDetail: 'In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL), 2025.',
    ccf: 'CCF A',
    links: [{ label: 'Paper', url: 'https://doi.org/10.18653/v1/2025.acl-long.308' }],
  },
  {
    title: 'Less Is More: DocString Compression in Code Generation',
    authors: 'Guang Yang, Yu Zhou, **Wei Cheng**, Xiangyu Zhang, Xiang Chen, Terry Yue Zhuo, Ke Liu, Xin Zhou, David Lo, Taolue Chen',
    venue: 'TOSEM 2026',
    venueDetail: 'ACM Transactions on Software Engineering and Methodology, Vol.35, No.2, pp:1-31, 2026.',
    ccf: 'CCF A',
    links: [{ label: 'Paper', url: 'https://doi.org/10.1145/3735636' }],
  },
  {
    title: 'Less is More: Towards Green Code Large Language Models via Unified Structural Pruning',
    authors: 'Guang Yang, Yu Zhou, Xiangyu Zhang, **Wei Cheng**, Ke Liu, Xiang Chen, Terry Yue Zhuo, Taolue Chen',
    venue: 'IP&M 2026',
    venueDetail: 'Information Processing & Management, Vol.63(4), 104580, 2026.',
    ccf: 'CCF B',
    links: [{ label: 'Paper', url: 'https://doi.org/10.1016/j.ipm.2025.104580' }],
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
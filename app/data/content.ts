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

// ---- 中文版 ----
export const aboutZh: string[] = [
  '我是南京航空航天大学计算机科学与技术学院/软件学院的硕士研究生，导师为<a href="https://csyuzhou.github.io/" target="_blank" rel="noopener noreferrer" class="text-primary">周宇教授 (Prof. Yu Zhou)</a>。',
  '我的研究聚焦于<strong>AI 系统与自主智能体（Agent）的安全</strong>，关注大语言模型被集成到真实应用时出现的各类失效模式，并探索相应的防护手段。',
  '欢迎就相关主题交流与合作 —— 可通过邮箱联系我。',
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

// ---- 中文版 ----
export const researchInterestsZh: { title: string; description: string }[] = [
  {
    title: 'AI 安全',
    description: '深度学习的对抗鲁棒性：对抗攻击与防御、后门与数据投毒威胁，以及大语言模型的可靠安全评估。',
  },
  {
    title: 'Agent 安全',
    description: 'LLM 智能体的安全：提示注入与间接提示注入、工具调用与权限滥用、沙箱边界、多智能体协作风险，以及自主智能体的安全对齐。',
  },
]

/** 🔥 News（2025 至今的论文接收情况） */
export const news: TimelineEntry[] = [
  {
    date: '2026',
    text: '🎉🎉 One paper is accepted by ISSTA 2026: Insecure Coding Preferences in Long-Term Memory: Security Risks for LLM-based Code Generation.',
  }
  {
    date: '2026',
    text: '🎉🎉 One paper is accepted by ASE 2026: Breaking Customized LLMs for Coding: Automated Red Teaming for Instruction Backdoor Attacks.',
  }
  {
    date: '2026',
    text: '🎉🎉 One paper is accepted by Automated Software Engineering Journal: Defending Neural Code Understanding Models by Eliminating Backdoors.',
  }
  {
    date: '2025',
    text: '🎉🎉 One paper is accepted by ACL 2025: Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation.',
  }
]

// ---- 中文版 ----
export const newsZh: TimelineEntry[] = [
  {
    date: '2026',
    text: '🎉🎉 一篇论文被 ISSTA 2026 录用：Insecure Coding Preferences in Long-Term Memory: Security Risks for LLM-based Code Generation。',
  }
  {
    date: '2026',
    text: '🎉🎉 一篇论文被 ASE 2026 录用：Breaking Customized LLMs for Coding: Automated Red Teaming for Instruction Backdoor Attacks。',
  }
  {
    date: '2026',
    text: '🎉🎉 一篇论文被 Automated Software Engineering Journal 录用：Defending Neural Code Understanding Models by Eliminating Backdoors。',
  }
  {
    date: '2025',
    text: '🎉🎉 一篇论文被 ACL 2025 录用：Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation。',
  }
]

/**
 * 📝 Publications —— 拆分为「代表性（一作，卡片）」与「其他（二作及以上，列表）」，
 * 全量展示在 /publications 页面；主页只显示代表性卡片 + 入口。
 * 作者列表用 **名字** 加粗自己。
 */

/** 代表性论文（一作，featured 卡片，带图 + 简介） */
export const representativePublications: Publication[] = [
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
]

// ---- 中文版（论文标题/作者/venue 保持英文原文，仅简介翻译） ----
export const representativePublicationsZh: Publication[] = [
  {
    ...representativePublications[0],
    description:
      '我们通过消除代码理解模型中的后门来实现防御，提升模型面对后门攻击的鲁棒性。',
  },
]

/** 其他论文（二作及以上，列表，按时间倒序） */
export const otherPublications: Publication[] = [
  {
    title: 'Insecure Coding Preferences in Long-Term Memory: Security Risks for LLM-based Code Generation',
    authors: 'Yuchen Chen, **Wei Cheng**, Yuan Xiao, Zhou Yang, Weifeng Sun, Chunrong Fang, Xiang Chen, Baowen Xu, David Lo, Zhenyu Chen',
    venue: 'ISSTA 2026',
    venueDetail: 'In Proceedings of the ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA), 2026.',
    ccf: 'CCF A',
  },
  {
    title: 'Breaking Customized LLMs for Coding: Automated Red Teaming for Instruction Backdoor Attacks',
    authors: 'Yuchen Chen, **Wei Cheng**, Yuan Xiao, Weisong Sun, Chunrong Fang, Yang Liu, Zhenyu Chen, Baowen Xu',
    venue: 'ASE 2026',
    venueDetail: 'In Proceedings of the 41st IEEE/ACM International Conference on Automated Software Engineering (ASE), 2026.',
    ccf: 'CCF A',
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
  {
    title: 'Beyond Sequences: Two-dimensional Representation and Dependency Encoding for Code Generation',
    authors: 'Xiangyu Zhang, Yu Zhou, Guang Yang, **Wei Cheng**, Taolue Chen',
    venue: 'ACL 2025',
    venueDetail: 'In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL), 2025.',
    ccf: 'CCF A',
    links: [{ label: 'Paper', url: 'https://doi.org/10.18653/v1/2025.acl-long.308' }],
  },
]

/** 🎖 Honors and Awards（来自个人简历） */
export const honors: TimelineEntry[] = [
  { date: '2025', text: 'First-class Graduate Scholarship, Nanjing University of Aeronautics and Astronautics' },
  { date: '2024', text: 'National Scholarship' },
  { date: '2023', text: 'Merit Student of Nantong City' },
  { date: '2023', text: 'First-class Scholarship, Nantong University' },
]

// ---- 中文版 ----
export const honorsZh: TimelineEntry[] = [
  { date: '2025', text: '南京航空航天大学研究生一等奖学金' },
  { date: '2024', text: '国家奖学金' },
  { date: '2023', text: '南通市三好学生' },
  { date: '2023', text: '南通大学校一等奖学金' },
]

/** 📖 Educations（来自个人简历） */
export const education: TimelineEntry[] = [
  {
    date: '2024.09 - now',
    text: 'College of Computer Science and Technology / School of Software, Nanjing University of Aeronautics and Astronautics (NUAA), M.S. in Software Engineering (advised by Prof. Yu Zhou)',
  },
  { date: '2020.09 - 2024.06', text: 'School of Information Science and Technology, Nantong University, B.S. in Software Engineering' },
]

// ---- 中文版 ----
export const educationZh: TimelineEntry[] = [
  {
    date: '2024.09 - 至今',
    text: '南京航空航天大学 计算机科学与技术学院/软件学院，软件工程硕士（导师：周宇教授）',
  },
  { date: '2020.09 - 2024.06', text: '南通大学 信息科学技术学院，软件工程学士' },
]

/** 💻 Internships（来自个人简历：中国电科 28 所） */
export const internships: TimelineEntry[] = [
  {
    date: '2025.12 - 2026.07',
    text: 'Smart Application Group, The 28th Research Institute of China Electronics Technology Group Corporation (CETC 28) — multi-agent cooperative decision-making and action-planning research; designed and implemented a multi-agent reinforcement learning framework with cooperative training, developed an intelligent agent application (~90% action-planning accuracy).',
  },
]

// ---- 中文版 ----
export const internshipsZh: TimelineEntry[] = [
  {
    date: '2025.12 - 2026.07',
    text: '中国电子科技集团第二十八研究所（智能应用方向）——面向智能体应用开展多智能体协同决策与行动规划研究；负责多智能体强化学习框架的设计与实现，构建高效协同训练机制，开发智能应用系统（行动规划准确率约 90%）。',
  },
]
import {
  about,
  aboutZh,
  education,
  educationZh,
  honors,
  honorsZh,
  internships,
  internshipsZh,
  news,
  newsZh,
  otherPublications,
  representativePublications,
  representativePublicationsZh,
  researchInterests,
  researchInterestsZh,
} from '~/data/content'
import { useLocale } from '~/composables/useLocale'

/**
 * 按当前语言（en/zh）返回内容数据。
 * 论文标题/作者/venue 保持英文原文，中英共用；可翻译的简介/描述走各自语言版本。
 */
export function useContent() {
  const { locale } = useLocale()
  const zh = computed(() => locale.value === 'zh')

  return {
    about: computed(() => (zh.value ? aboutZh : about)),
    researchInterests: computed(() => (zh.value ? researchInterestsZh : researchInterests)),
    news: computed(() => (zh.value ? newsZh : news)),
    representativePublications: computed(() =>
      zh.value ? representativePublicationsZh : representativePublications,
    ),
    // 论文标题/作者不可译，中英共用同一列表
    otherPublications,
    honors: computed(() => (zh.value ? honorsZh : honors)),
    education: computed(() => (zh.value ? educationZh : education)),
    internships: computed(() => (zh.value ? internshipsZh : internships)),
  }
}
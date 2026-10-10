export type SupportedLanguage = 'ha' | 'yo' | 'ig';

export interface LocalizedSectionContent {
  title: string;
  summary: string;
  fullText: string;
  misali: string; // Real life street allegory / example
  hukunci: string; // Legal decree / penalty / remedy
  voiceScript: string;
  category: string;
  tags: string[];
}

export interface TriLingualSection {
  id: string;
  sectionNumber: number;
  englishTitle: string;
  chapter: number;
  chapterTitleEn: string;
  cartoonImage?: string;
  cartoonCaption?: {
    ha: string;
    yo: string;
    ig: string;
  };
  ha: LocalizedSectionContent;
  yo: LocalizedSectionContent;
  ig: LocalizedSectionContent;
}

export interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  appName: string;
  tagline: string;
  voiceLang: string;
  flag: string;
}

export const LANGUAGE_CONFIGS: Record<SupportedLanguage, LanguageConfig> = {
  ha: {
    code: 'ha',
    name: 'Hausa',
    nativeName: 'Harshen Hausa',
    appName: 'KUNDIN TSARIN MULKIN NIGERIA - HAUSA AI',
    tagline: 'Constitution a Harshen Hausa Zalla - AVAR Royal Family Access',
    voiceLang: 'ha-NG',
    flag: '🇳🇬'
  },
  yo: {
    code: 'yo',
    name: 'Yoruba',
    nativeName: 'Èdè Yorùbá',
    appName: 'IWE OFIN ORILE-EDE NAIJIRIA - YORUBA AI',
    tagline: 'Ofin Naijiria ni Ede Yoruba Rorun - AVAR Royal Family Access',
    voiceLang: 'yo-NG',
    flag: '🇳🇬'
  },
  ig: {
    code: 'ig',
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
    appName: 'AKWUKWO IWU NIGERIA - IGBO AI',
    tagline: 'Usoro Iwu Naijiria n’Asusu Igbo Di Mfe - AVAR Royal Family Access',
    voiceLang: 'ig-NG',
    flag: '🇳🇬'
  }
};

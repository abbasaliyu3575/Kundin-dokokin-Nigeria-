import { SupportedLanguage } from '../types/constitution';

export interface UiStrings {
  appName: string;
  appBadge: string;
  subTagline: string;
  founderBadge: string;
  supportEmail: string;
  supportPhone: string;
  metaDetector: string;
  
  // Navigation
  navSections: string;
  navBulletin: string;
  navAiChat: string;
  navFavorites: string;
  navPrint: string;
  btnWhistleblower: string;

  // Hero
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  btnListenHero: string;
  btnAskAiHero: string;

  // Search & Filters
  searchPlaceholder: string;
  resultsCount: string;
  noResultsTitle: string;
  noResultsDesc: string;
  btnResetSearch: string;
  cats: {
    all: string;
    humanRights: string;
    peaceSecurity: string;
    economy: string;
    whistleblower: string;
    powerAbuse: string;
    governance: string;
  };

  // Section Card
  lblSimpleTranslation: string;
  lblExample: string;
  lblVerdict: string;
  lblFullDetails: string;
  btnListen: string;
  btnPause: string;
  btnResume: string;
  btnMore: string;
  btnLess: string;
  btnBookmark: string;
  btnShare: string;
  btnOpenCartoon: string;
  shareCopied: string;

  // Whistleblower Modal
  whistleblowerTitle: string;
  whistleblowerSubtitle: string;
  whistleblowerReward: string;
  whistleblowerDesc: string;
  whistleblowerAgenciesTitle: string;
  whistleblowerFormTitle: string;
  whistleblowerPlaceholder: string;
  whistleblowerAnonymity: string;
  btnCopyReport: string;
  btnSendDirect: string;
  reportCopied: string;

  // AI Chat
  aiHeroTitle: string;
  aiHeroDesc: string;
  aiQuickTitle: string;
  aiInputPlaceholder: string;
  aiThinking: string;
  aiSectionRef: string;
  aiPracticalAdvice: string;

  // Print PDF
  printActionTitle: string;
  printActionDesc: string;
  btnPrint: string;
  printSpecialEdition: string;
  printSubtitle: string;

  // Footer
  footerDesc: string;
}

export const UI_TRANSLATIONS: Record<SupportedLanguage, UiStrings> = {
  ha: {
    appName: 'KUNDIN MULKI AI',
    appBadge: '1999',
    subTagline: 'Tsarin Mulkin Nigeria · AVAR Royal Family',
    founderBadge: 'AVAR ROYAL FAMILY ACCESS | Founder: King Abbas Aliyu',
    supportEmail: 'avarroyalfamily@gmail.com',
    supportPhone: '+2347033840619',
    metaDetector: 'Meta AI Managing Detector',

    navSections: 'Sashe 1 - 320',
    navBulletin: 'Mujallar Doka',
    navAiChat: 'AI Mai Tambaya',
    navFavorites: 'Wadanda Na Fi So',
    navPrint: 'Buga PDF',
    btnWhistleblower: 'Tona Asiri Yanzu!',

    heroTag: '✨ Sabon Tsarin AI na Hausa Zalla',
    heroTitle: 'KUNDIN TSARIN MULKIN NIGERIA',
    heroSubtitle: 'Fassara Mai Sauki Ta Harshen Hausa Da Muryar AI Reader',
    heroDesc: 'An tsara wannan kundi ne domin ɗan Nigeria ya san hakkokinsa na asali: Daga Sashe na 34 (Ba za a mayar da kai kare ba), zuwa Sashe na 14 (Waye ke haddasa zaman banza), da yadda zaka tona asirin barayin kasa ka samu lada 5%!',
    btnListenHero: 'Saurara Bayani da Hausa 🔊',
    btnAskAiHero: 'Tambayi Malamin Doka da AI',

    searchPlaceholder: 'Nemo Doka a Hausa... (misali: zaman banza, kare, sata, beli, dan sanda, fili, Section 34)',
    resultsCount: 'An samu sassa:',
    noResultsTitle: 'Babu Sashen Da Ya Dace',
    noResultsDesc: 'Bamu samu sashen dokar da ya dace ba. Gwada neman wata kalmar kamar "kare", "beli", ko "tsaro".',
    btnResetSearch: 'Duba Dukkan Sassan',
    cats: {
      all: 'Duka',
      humanRights: 'Hakkin Dan Adam',
      peaceSecurity: 'Zaman Lafiya',
      economy: 'Tattalin Arziki',
      whistleblower: 'Maisanya Ido',
      powerAbuse: 'Masu Rusa Kasa',
      governance: 'Ikon Hukuma'
    },

    lblSimpleTranslation: 'Fassara Mai Sauki (Kowane Ɗan Nigeria Zai Gane)',
    lblExample: '💡 Misali Na Gida (Labarin Kasuwa & Titin Unguwa):',
    lblVerdict: '⚖️ Hukunci & Abin Da Doka Ta Tanada:',
    lblFullDetails: 'Karin Bayani a Rubuce:',
    btnListen: 'SAURARA DA HAUSA 🔊',
    btnPause: 'DAKATA DA MURYA ⏸️',
    btnResume: 'CI GABA DA SAURARA ▶️',
    btnMore: 'Karin Bayanin Doka',
    btnLess: 'Rage Bayani',
    btnBookmark: 'Adana Wannan Sashe',
    btnShare: 'Raba a WhatsApp',
    btnOpenCartoon: 'Bude Hoto',
    shareCopied: 'An Kwafi Rubutun!',

    whistleblowerTitle: 'TONA ASIRI YANZU!',
    whistleblowerSubtitle: 'Maisanya Ido · Kariya Daga Doka',
    whistleblowerReward: 'Kariya da Lada: Za Ka Samu Kashi 5% Na Kudin Da Aka Kwato!',
    whistleblowerDesc: 'Sashe na 39 da dokar Freedom of Information (FOI) Act 2011 da tsarin Whistleblower na Najeriya sun baka cikakkiyar damar tona asirin barayin gwamnati da masu karbar kudin haram ba tare da an taba ka ba!',
    whistleblowerAgenciesTitle: 'Hukumomin Da Zaka Kai Kara Kai Tsaye:',
    whistleblowerFormTitle: 'Rubuta Bayanin Tona Asiri (A Boye / Sirri):',
    whistleblowerPlaceholder: 'Misali: A Ma\'aikatar Ilimi ta Jiha, an ba da kwangilar gyaran makaranta ta miliyan hamsin amma babu abin da aka yi, kudaden an raba su ne a asirce...',
    whistleblowerAnonymity: 'Ba a bayyana sunanka ba. Asirinka a rufe yake.',
    btnCopyReport: 'Kofi Rahoton',
    btnSendDirect: 'Tura Kai Tsaye',
    reportCopied: 'An Kwafi Rahoton!',

    aiHeroTitle: 'AI Mai Tambaya - Nemi Amsar Doka da Hausa Zalla!',
    aiHeroDesc: 'Tambayi kowacce irin tambaya: Daga zaman banza, hakkin dan adam, zuwa tona asirin barayin gwamnati. AI zai fassara maka a Hausa mai sauki tare da Sashen da doka ta tanada!',
    aiQuickTitle: 'Tambayoyi Masu Muhimmanci (Danna Daya):',
    aiInputPlaceholder: 'Rubuta tambayarka a nan (misali: Waye yake janyo zaman banza?)...',
    aiThinking: 'Malamin Doka yana bincika kundin tsarin mulki...',
    aiSectionRef: 'Sashen Dokar Da Ta Shafa:',
    aiPracticalAdvice: '📌 Shawara Mai Amfani:',

    printActionTitle: 'Kundin Tsarin Mulki - Sigar Rubutu & Buga PDF',
    printActionDesc: 'Zaka iya saukewa ko buga shi a takarda (PDF) kai tsaye domin karatun gida ko makaranta.',
    btnPrint: 'Buga / Sauke PDF Yanzu',
    printSpecialEdition: 'AVAR ROYAL FAMILY SPECIAL EDITION - HAUSA',
    printSubtitle: 'FASSARA MAI SAUKI A HARSHEN HAUSA ZALLA DA AI',

    footerDesc: 'An samar da wannan manhaja ce domin wayar da kan ɗan Nigeria a harshen Hausa zalla bisa dokar koli ta 1999.'
  },

  yo: {
    appName: 'IWE OFIN AI',
    appBadge: '1999',
    subTagline: 'Ofin Naijiria 1999 · AVAR Royal Family',
    founderBadge: 'AVAR ROYAL FAMILY ACCESS | Oludasile: King Abbas Aliyu',
    supportEmail: 'avarroyalfamily@gmail.com',
    supportPhone: '+2347033840619',
    metaDetector: 'Meta AI Managing Detector',

    navSections: 'Abala 1 - 320',
    navBulletin: 'Iroyin Ofin',
    navAiChat: 'AI Bere Lọwọ Ofin',
    navFavorites: 'Àwọn tí Mo Fẹ́ràn',
    navPrint: 'Tẹ̀wé PDF',
    btnWhistleblower: 'Tú Àṣírí Jáde Nísinsìnyí!',

    heroTag: '✨ Eto AI Titun ni Ede Yoruba Rorun',
    heroTitle: 'IWE OFIN ORILE-EDE NAIJIRIA',
    heroSubtitle: 'Itumọ Rọrùn ni Èdè Yorùbá pẹlu Ohùn AI Reader',
    heroDesc: 'A kọ iwe ofin yi ki gbogbo ọmọ Naijiria le mọ ẹtọ rẹ: Lati Abala 34 (Eniyan ko ni di aja! Ọlá rẹ jẹ dandan), de Abala 14 (Tani n fa aisi aabo?), ati bi o ṣe le tú àṣírí awọn olè ijọba ki o si gba 5% ere!',
    btnListenHero: 'Gbọ Alaye ni Èdè Yorùbá 🔊',
    btnAskAiHero: 'Bère Lọwọ Olukọ Ofin pẹlu AI',

    searchPlaceholder: 'Wa Ofin ni Yoruba... (apẹẹrẹ: aja, igbekun, olopa, ile, ifisun, Abala 34)',
    resultsCount: 'Abala ti a ri:',
    noResultsTitle: 'Ko ri Abala Ofin Kan Kan',
    noResultsDesc: 'A ko ri ofin ti o ba ọrọ rẹ mu. Gbiyanju ọrọ miiran bi "ẹto", "olopa", tabi "aabo".',
    btnResetSearch: 'Wo Gbogbo Abala Ofin',
    cats: {
      all: 'Gbogbo Re',
      humanRights: 'Ẹtọ Ọmọniyan',
      peaceSecurity: 'Aabo ati Alaafia',
      economy: 'Ọrọ Aje',
      whistleblower: 'Olutọju Oju',
      powerAbuse: 'Awọn ti n Pa Ilu Run',
      governance: 'Aṣẹ Ijọba'
    },

    lblSimpleTranslation: 'Itumọ Rọrùn (Ki Ọmọ Ọja Lè Ye)',
    lblExample: '💡 Apẹẹrẹ Lati Ita (Itan Oja ati Adugbo):',
    lblVerdict: '⚖️ Idajọ ati Ohun ti Ofin Sọ:',
    lblFullDetails: 'Alaye Kikun ti Ofin:',
    btnListen: 'GBỌ NI ÈDÈ YORÙBÁ 🔊',
    btnPause: 'DÁ OHÙN DÚRO ⏸️',
    btnResume: 'TẸ SIWAJU LATI GBỌ ▶️',
    btnMore: 'Kika Alaye sii',
    btnLess: 'Din Alaye Ku',
    btnBookmark: 'Fi Abala yi Pamọ',
    btnShare: 'Pin lori WhatsApp',
    btnOpenCartoon: 'Wo Aworan Kere',
    shareCopied: 'A ti daakọ ọrọ na!',

    whistleblowerTitle: 'TÚ ÀṢÍRÍ JÁDE NÍSINSÌNYÍ!',
    whistleblowerSubtitle: 'Olutọju Oju · Idaabobo Lati Owo Ofin',
    whistleblowerReward: 'Idaabobo ati Ere: Wà á gba 5% ti owo ti a ba gba pada!',
    whistleblowerDesc: 'Abala 39 ati ofin Freedom of Information (FOI) Act 2011 pẹlu eto Whistleblower ti orilẹ-ede Naijiria fun ọ ni aṣẹ kikun lati tú àṣírí awọn olè ijọba laisi iberu kankan!',
    whistleblowerAgenciesTitle: 'Àwọn Ile-Iṣẹ ti O le Fi Ẹsun Kan Lẹsẹkẹsẹ:',
    whistleblowerFormTitle: 'Kọ Alaye Asiri ti O Fẹ Tú Jade:',
    whistleblowerPlaceholder: 'Apẹẹrẹ: Ni Ile-Iṣẹ Eto Ẹkọ ti Ipinlẹ, wọn fun kontirakito ni miliọnu aadọta lati tun ile-iwe ṣe ṣugbọn ko ṣe nkankan, wọn pin owo na...',
    whistleblowerAnonymity: 'A ko ni sọ orukọ rẹ jade. Àṣírí rẹ wa ni pipamọ.',
    btnCopyReport: 'Daakọ Ijabọ na',
    btnSendDirect: 'Fi Ransẹ Lẹsẹkẹsẹ',
    reportCopied: 'A ti daakọ ijabọ na!',

    aiHeroTitle: 'AI Olukọ Ofin - Wa Idahun Ofin ni Èdè Yorùbá!',
    aiHeroDesc: 'Bère ibeere eyikeyi: Lati aisi aabo, ẹtọ ọmọniyan, de titú àṣírí awọn oloye. AI yoo se alaye rẹ ni Yoruba rọrùn pẹlu Abala ofin to daju!',
    aiQuickTitle: 'Àwọn Ibeere Pataki (Tẹ Ọkan):',
    aiInputPlaceholder: 'Kọ ibeere rẹ si ibi (apẹẹrẹ: Tani n fa aisi aabo?)...',
    aiThinking: 'Olukọ Ofin n wa inu iwe ofin...',
    aiSectionRef: 'Abala Ofin ti O Kàn:',
    aiPracticalAdvice: '📌 Imọran Wulo:',

    printActionTitle: 'Iwe Ofin Naijiria - Ẹya Titẹwe & Gbigba PDF',
    printActionDesc: 'O le gba a silẹ tabi tẹ ẹ sita bi PDF fun kika ni ile tabi ile-ẹkọ.',
    btnPrint: 'Tẹwe / Gba PDF Nisisiyi',
    printSpecialEdition: 'AVAR ROYAL FAMILY SPECIAL EDITION - YORUBA',
    printSubtitle: 'ITUMỌ RỌRÙN NI ÈDÈ YORÙBÁ PẸLU AI',

    footerDesc: 'A ṣe agbekalẹ ohun elo yii lati fẹ oju ọmọ Naijiria mọ ni ede Yoruba rọrùn labẹ iwe ofin 1999.'
  },

  ig: {
    appName: 'AKWUKWO IWU AI',
    appBadge: '1999',
    subTagline: 'Usoro Iwu Naijiria 1999 · AVAR Royal Family',
    founderBadge: 'AVAR ROYAL FAMILY ACCESS | Onye Ntọala: King Abbas Aliyu',
    supportEmail: 'avarroyalfamily@gmail.com',
    supportPhone: '+2347033840619',
    metaDetector: 'Meta AI Managing Detector',

    navSections: 'Ngalaba 1 - 320',
    navBulletin: 'Akụkọ Iwu',
    navAiChat: 'AI Jụọ Ọka Iwu',
    navFavorites: 'Ndị M Hụrụ n’Anya',
    navPrint: 'Bipụta PDF',
    btnWhistleblower: 'Gba Otu Ohi n’Anwụ Ugbua!',

    heroTag: '✨ Usoro AI Ọhụrụ n’Asụsụ Igbo Dị Mfe',
    heroTitle: 'AKWUKWO IWU NIGERIA',
    heroSubtitle: 'Nkọwa Dị Mfe n’Asụsụ Igbo Ya na Olu AI Na-Agụ',
    heroDesc: 'E debere akwụkwọ iwu a ka onye nkịtị mata ikike ya: Malite na Ngalaba 34 (Agaghị eme gị ka nkịta! Nsọpụrụ gị dị mkpa), ruo na Ngalaba 14 (Ònye na-ebute enweghị nchekwa?), na otu ị ga-esi gba ndị ohi gọọmenti n’anwụ nweta 5% ụgwọ ọrụ!',
    btnListenHero: 'Gee Ntị n’Asụsụ Igbo 🔊',
    btnAskAiHero: 'Jụọ Ọka Iwu Ajụjụ na AI',

    searchPlaceholder: 'Chọọ Iwu n’Igbo... (dịka: nkita, ndọrọ ndọrọ, ndị uwe ojii, ulo, Ngalaba 34)',
    resultsCount: 'Ngalaba achọtara:',
    noResultsTitle: 'Enweghị Ngalaba Iwu Ahụrụ',
    noResultsDesc: 'Anyị ahụghị iwu dabara n’ihe ị chọrọ. Nwalee okwu ọzọ dịka "ikike", "nchekwa", ma ọ bụ "ndị uwe ojii".',
    btnResetSearch: 'Lelee Ngalaba Nile',
    cats: {
      all: 'Ha Nile',
      humanRights: 'Ikike Mmadụ',
      peaceSecurity: 'Udo na Nchekwa',
      economy: 'Akụ na Ụba',
      whistleblower: 'Onye Na-Eche Nche',
      powerAbuse: 'Ndị Na-Ebibi Obodo',
      governance: 'Ike Ọchịchị'
    },

    lblSimpleTranslation: 'Nkọwa Dị Mfe (Ka Onye Ọ bụla Ghọta)',
    lblExample: '💡 Ihe Nlereanya n’Ama (Akụkọ Ahịa na Obodo):',
    lblVerdict: '⚖️ Ikpe na Ihe Iwu Kwuru:',
    lblFullDetails: 'Nkọwa zuru ezu:',
    btnListen: 'GEE NTỊ N’ASỤSỤ IGBO 🔊',
    btnPause: 'KWALITE OLU ⏸️',
    btnResume: 'GAA N’IRU N’ỊGỤ ▶️',
    btnMore: 'Hụ Nkọwa Ọzọ',
    btnLess: 'Mbelata Nkọwa',
    btnBookmark: 'Chekwaa Ngalaba A',
    btnShare: 'Kekọrịta na WhatsApp',
    btnOpenCartoon: 'Meghee Foto Cartoon',
    shareCopied: 'Edepụtaghachiri ozi a!',

    whistleblowerTitle: 'GBA OTU OHI N’ANWỤ UGBUA!',
    whistleblowerSubtitle: 'Onye Nche Obodo · Nchedo Site n’Iwu',
    whistleblowerReward: 'Nchedo na Ụgwọ Ọrụ: Ị ga-enweta 5% nke ego e nwetaghachiri!',
    whistleblowerDesc: 'Ngalaba 39 na iwu Freedom of Information (FOI) Act 2011 tinyere usoro Whistleblower nke Naijiria nyere gị ikike zuru oke ikpughe ndị ohi gọọmentị na-enweghị ụjọ ọ bụla!',
    whistleblowerAgenciesTitle: 'Ụlọ Ọrụ Ndị Ị Ga-Akpọ Ozugbo:',
    whistleblowerFormTitle: 'Dee Ozi Nzuzo Banyere Ihe Ọjọọ:',
    whistleblowerPlaceholder: 'Dịka: N’Ụlọ Ọrụ Mmụta nke Steeti, e nyere onye ọrụ ngo nde iri ise maka idozi ụlọ akwụkwọ mana o meghị ihe ọ bụla, ha kesara ego ahụ...',
    whistleblowerAnonymity: 'Agaghị ekpughere aha gị. Ihe niile bụ nzuzo.',
    btnCopyReport: 'Detuo Akụkọ A',
    btnSendDirect: 'Ziga Ozugbo',
    reportCopied: 'Edepụtaghachiri akụkọ a!',

    aiHeroTitle: 'AI Ọka Iwu - Chọta Azịza Iwu n’Asụsụ Igbo!',
    aiHeroDesc: 'Jụọ ajụjụ ọ bụla: Site na nchekwa, ikike mmadụ, ruo n’ikpughe ndị ohi ego obodo. AI ga-akọwara gị ya n’asụsụ Igbo dị mfe yana Ngalaba Iwu kwesịrị ekwesị!',
    aiQuickTitle: 'Ajụjụ Ndị Dị Mkpa (Pịa Otu):',
    aiInputPlaceholder: 'Dee ajụjụ gị ebe a (dịka: Ònye na-ebute enweghị nchekwa?)...',
    aiThinking: 'Ọka Iwu na-enyocha akwụkwọ iwu...',
    aiSectionRef: 'Ngalaba Iwu Metụtara Ya:',
    aiPracticalAdvice: '📌 Ndụmọdụ Dị Mkpa:',

    printActionTitle: 'Akwụkwọ Iwu Naijiria - Mbipụta & Budata PDF',
    printActionDesc: 'Ị nwere ike ibudata ma ọ bụ bipụta ya dịka PDF maka ọgụgụ n’ụlọ ma ọ bụ n’ụlọ akwụkwọ.',
    btnPrint: 'Bipụta / Budata PDF Ugbua',
    printSpecialEdition: 'AVAR ROYAL FAMILY SPECIAL EDITION - IGBO',
    printSubtitle: 'NKỌWA DỊ MFE N’ASỤSỤ IGBO YA NA AI',

    footerDesc: 'Emepụtara ngwa a iji kụziere onye nkịtị ihe n’asụsụ Igbo dị mfe n’okpuru akwụkwọ iwu 1999.'
  }
};

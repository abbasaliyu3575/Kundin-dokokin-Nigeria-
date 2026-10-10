import { TRI_LINGUAL_SECTIONS } from '../data/triLingualData';
import { TriLingualSection, SupportedLanguage } from '../types/constitution';

export interface AiAnswer {
  question: string;
  answerText: string;
  citedSections: TriLingualSection[];
  practicalAdvice: string;
  whistleblowerAdvised: boolean;
}

export interface FaqQuestion {
  question: string;
  shortAnswer: string;
  relevantSection: number;
}

export const POPULAR_QUESTIONS_BY_LANG: Record<SupportedLanguage, FaqQuestion[]> = {
  ha: [
    {
      question: 'Waye yake janyo zaman banza?',
      shortAnswer: 'Gwamnati ce ke da alhakin tsaro a Sashe na 14(2)(b). Idan ta gaza, ita ce sanadiyar zaman banza.',
      relevantSection: 14
    },
    {
      question: 'Shin ba za a iya maidani kare ba?',
      shortAnswer: 'Tabbas! Sashe na 34 ya ce mutuncinka dole ne a girmama shi, ba kai kare ba ne!',
      relevantSection: 34
    },
    {
      question: 'Shin dan sanda na da ikon bincika wayata a titi?',
      shortAnswer: 'A\'a! Sashe na 37 ya kare sirrin wayarka da sakonninka sai da izinin kotu (Warrant).',
      relevantSection: 37
    },
    {
      question: 'Shin beli kyauta ne a Najeriya?',
      shortAnswer: 'Kwarai kuwa! Sashe na 35 da dokar ACJA sun ce beli kyauta ne.',
      relevantSection: 35
    },
    {
      question: 'Me zan samu idan na tona asirin barawon gwamnati?',
      shortAnswer: 'Za ka samu kashi 2.5% zuwa 5% na kudaden da gwamnati ta kwato tare da kariya!',
      relevantSection: 39
    }
  ],
  yo: [
    {
      question: 'Tani n fa aisi aabo ni ilu?',
      shortAnswer: 'Ijọba lo ni ojuṣe aabo labẹ Abala 14(2)(b). Ti wọn ba kuna, wọn lo n fa aisi aabo.',
      relevantSection: 14
    },
    {
      question: 'Ṣe eniyan ko ni di aja labẹ ofin?',
      shortAnswer: 'Dajudaju! Abala 34 sọ pe: Eniyan ko ni di aja! Ọlá rẹ jẹ dandan.',
      relevantSection: 34
    },
    {
      question: 'Ṣe ọlọpa lẹtọ lati wo foonu mi lójú títì?',
      shortAnswer: 'Rara! Abala 37 daabobo aṣiri foonu ati WhatsApp rẹ ayafi pẹlu aṣẹ kootu.',
      relevantSection: 37
    },
    {
      question: 'Ṣe beli jẹ ọfẹ ni orilẹ-ede Naijiria?',
      shortAnswer: 'Bẹẹni! Abala 35 ati ofin ACJA sọ pe beli jẹ ọfẹ laisi sisan owo.',
      relevantSection: 35
    },
    {
      question: 'Kini ere ti n ó ri ti mo ba tú àṣírí awọn olè?',
      shortAnswer: 'Wà á gba 5% ti gbogbo owo ti a ba gba pada pẹlu aabo to daju!',
      relevantSection: 39
    }
  ],
  ig: [
    {
      question: 'Ònye na-ebute enweghị nchekwa n’obodo?',
      shortAnswer: 'Gọọmentị nwere ọrụ nchekwa n’okpuru Ngalaba 14(2)(b). Ọ bụrụ na ha daa, ha na-ebute ya.',
      relevantSection: 14
    },
    {
      question: 'Agaghị eme m ka nkịta n’okpuru iwu?',
      shortAnswer: 'N’ezie! Ngalaba 34 kwuru: Agaghị eme gị ka nkịta! Nsọpụrụ gị dị mkpa.',
      relevantSection: 34
    },
    {
      question: 'Ndị uwe ojii hà nwere ikike inyocha ekwentị m?',
      shortAnswer: 'Mba! Ngalaba 37 na-echebe nzuzo ekwentị gị ma ọ bụghị site n’akwụkwọ ikpe.',
      relevantSection: 37
    },
    {
      question: 'Mgbapụta (Bail) ọ̀ bụ n’efu na Naịjirịa?',
      shortAnswer: 'Kpamkpam! Ngalaba 35 na iwu ACJA kwuru na mgbapụta bụ n’efu.',
      relevantSection: 35
    },
    {
      question: 'Gịnị ka m ga-enweta ma m kpughee ndị ohi ego obodo?',
      shortAnswer: 'Ị ga-enweta 5% nke ego e nwetaghachiri yana nchedo pụrụ iche!',
      relevantSection: 39
    }
  ]
};

export function askConstitutionAi(query: string, lang: SupportedLanguage): AiAnswer {
  const normalized = query.toLowerCase().trim();
  const matchedSections: TriLingualSection[] = [];

  // Keyword Matching
  if (
    normalized.includes('zaman banza') ||
    normalized.includes('tsaro') ||
    normalized.includes('aabo') ||
    normalized.includes('nchekwa')
  ) {
    const s14 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 14);
    const s33 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 33);
    if (s14) matchedSections.push(s14);
    if (s33) matchedSections.push(s33);
  }

  if (
    normalized.includes('kare') ||
    normalized.includes('aja') ||
    normalized.includes('nkita') ||
    normalized.includes('mutunci') ||
    normalized.includes('dignity')
  ) {
    const s34 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 34);
    if (s34 && !matchedSections.includes(s34)) matchedSections.push(s34);
  }

  if (
    normalized.includes('dan sanda') ||
    normalized.includes('olopa') ||
    normalized.includes('ndị uwe ojii') ||
    normalized.includes('beli') ||
    normalized.includes('bail') ||
    normalized.includes('tsare')
  ) {
    const s35 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 35);
    const s34 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 34);
    if (s35 && !matchedSections.includes(s35)) matchedSections.push(s35);
    if (s34 && !matchedSections.includes(s34)) matchedSections.push(s34);
  }

  if (
    normalized.includes('asiri') ||
    normalized.includes('sata') ||
    normalized.includes('ohi') ||
    normalized.includes('ole') ||
    normalized.includes('cin hanci') ||
    normalized.includes('ibaje') ||
    normalized.includes('nruru')
  ) {
    const s15 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 15);
    const s39 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 39);
    const s308 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 308);
    if (s15 && !matchedSections.includes(s15)) matchedSections.push(s15);
    if (s39 && !matchedSections.includes(s39)) matchedSections.push(s39);
    if (s308 && !matchedSections.includes(s308)) matchedSections.push(s308);
  }

  if (
    normalized.includes('waya') ||
    normalized.includes('foonu') ||
    normalized.includes('ekwenti') ||
    normalized.includes('whatsapp') ||
    normalized.includes('sirri') ||
    normalized.includes('nzuzo')
  ) {
    const s37 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 37);
    if (s37 && !matchedSections.includes(s37)) matchedSections.push(s37);
  }

  if (matchedSections.length === 0) {
    const s34 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 34)!;
    const s14 = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === 14)!;
    matchedSections.push(s34, s14);
  }

  let answerText = '';
  let practicalAdvice = '';
  let whistleblowerAdvised = false;

  const targetSec = matchedSections[0];
  const langContent = targetSec[lang];

  if (lang === 'ha') {
    if (normalized.includes('zaman banza') || normalized.includes('tsaro')) {
      answerText = `Sarki! Sashe na 14(2)(b) ya bayyana cewa: "Tsaro da jin dadin rayuwar talakawa shi ne babban dalilin da ya sa aka kafa gwamnati!"\n\nIdan gwamnati ta kasa samar da makarantu, aikin yi da kare lafiyar al'umma, ita ce ke da alhakin rashin tsaro da zaman banza.`;
      practicalAdvice = `Shawarar Gida: Hada kai da al'umma ku nemi dan majalisar ku (Sashe na 4) ya kawo tsaro, ko a fara kiran sa (Recall) idan ya gaza.`;
    } else if (normalized.includes('kare') || normalized.includes('mutunci')) {
      answerText = `Hahahaha! Sashe na 34(1)(a) ya ce karara: "BA ZA A MAIDAKA KARE BA! Mutuncinka dole ne!" Ba a barin soja ko dan sanda ya wulakanta ka ko ya sa ka aikin bauta.`;
      practicalAdvice = `Shawarar Gida: Idan aka ci mutuncinka, nemo shaidu ka shigar da kara a Babbar Kotu (Sashe na 46).`;
    } else if (normalized.includes('asiri') || normalized.includes('sata')) {
      whistleblowerAdvised = true;
      answerText = `Tulu ya fashe! Sashe na 39 tare da FOI Act 2011 da dokar Whistleblower sun ba ka damar tona asirin barayin gwamnati kuma za ka samu kashi 5% na kudaden da aka kwato!`;
      practicalAdvice = `Danna jan madannin "Tona Asiri Yanzu" don samun lambobin EFCC da ICPC.`;
    } else {
      answerText = `Bisa ga dokar ${langContent.title}:\n\n${langContent.summary}\n\n${langContent.misali}`;
      practicalAdvice = `Abin yi: ${langContent.hukunci}`;
    }
  } else if (lang === 'yo') {
    if (normalized.includes('aabo') || normalized.includes('aisan')) {
      answerText = `Abala 14(2)(b) sọ kedere pé: "Aabo ati idunnu awọn tálákà ni idi akọkọ ti a fi da ijọba silẹ!"\n\nNigba ti ijọba ba kuna lati pese iṣẹ fun awọn ọdọ ati daabobo ilu, wọn lo n fa aisi aabo.`;
      practicalAdvice = `Imọran Wulo: Ẹ darapọ mọ awọn ara ilu lati beere lọwọ aṣoju yin ni ile-igbimọ (Abala 4) ki o gbe igbese.`;
    } else if (normalized.includes('aja') || normalized.includes('iyi')) {
      answerText = `Abala 34(1)(a) sọ kedere pé: "ENIYAN KO NI DI AJA! Ọlá rẹ jẹ dandan!" Ọlọpa tabi ológun ko lẹtọ lati tẹ̀ ọ́ lójú tabi da ọ looro.`;
      practicalAdvice = `Imọran Wulo: Ti wọn ba ba ọlá rẹ jẹ, pe agbẹjọro rẹ ki o si fi ẹsun kan ile-ẹjọ giga labẹ Abala 46.`;
    } else if (normalized.includes('asiri') || normalized.includes('ole')) {
      whistleblowerAdvised = true;
      answerText = `Ìkòkò ti fọ́! Abala 39 pẹlu ofin FOI Act 2011 fun ọ ni aṣẹ lati tú àṣírí awọn olè ijọba jade, wà á si gba 5% ti owo ti a ba gba pada!`;
      practicalAdvice = `Tẹ bọtini pupa "Tú Àṣírí Jáde" lati pe EFCC tabi ICPC lẹsẹkẹsẹ.`;
    } else {
      answerText = `Gẹgẹ bi ofin ${langContent.title}:\n\n${langContent.summary}\n\n${langContent.misali}`;
      practicalAdvice = `Ohun ti o yẹ ki o ṣe: ${langContent.hukunci}`;
    }
  } else {
    // Igbo
    if (normalized.includes('nchekwa')) {
      answerText = `Ngalaba 14(2)(b) kwuru n’ụzọ doro anya: "Nchekwa na ọdịmma nke ndị mmadụ bụ isi ihe mere e ji nwee gọọmentị!"\n\nỌ bụrụ na gọọmentị adaa n’inye ndị mmadụ ọrụ na nchekwa, ọ bụ ha na-ebute enweghị nchekwa.`;
      practicalAdvice = `Ndụmọdụ Dị Mkpa: Kpọọ onye nnọchiteanya gị n’ụlọ omeiwu (Ngalaba 4) ka o mee ihe kwesịrị ekwesị.`;
    } else if (normalized.includes('nkita') || normalized.includes('nsopuru')) {
      answerText = `Ngalaba 34(1)(a) kwuru: "AGAGHI EME GI KA NKITA! Nsọpụrụ gị dị mkpa!" Ndị agha ma ọ bụ ndị uwe ojii enweghị ikike imegbu gị ma ọ bụ weda gị ala.`;
      practicalAdvice = `Ndụmọdụ Dị Mkpa: Ọ bụrụ na a kparịrị gị, kọọ akụkọ ahụ n’Ụlọ Ikpe Kasị Elu n’okpuru Ngalaba 46.`;
    } else if (normalized.includes('ohi') || normalized.includes('asiri') || normalized.includes('kpughee')) {
      whistleblowerAdvised = true;
      answerText = `Ite agbawaala! Ngalaba 39 na iwu FOI Act 2011 nyere gị ikike ikpughe ndị ohi gọọmentị, ị ga-enwetakwa 5% nke ego e nwetaghachiri!`;
      practicalAdvice = `Pịa bọtịnụ na-acha uhie uhie "Gba Otu Ohi n'Anwụ" iji kpọọ EFCC ma ọ bụ ICPC ozugbo.`;
    } else {
      answerText = `Dịka iwu si dị na ${langContent.title}:\n\n${langContent.summary}\n\n${langContent.misali}`;
      practicalAdvice = `Ihe ị ga-eme: ${langContent.hukunci}`;
    }
  }

  return {
    question: query,
    answerText,
    citedSections: matchedSections.slice(0, 3),
    practicalAdvice,
    whistleblowerAdvised
  };
}

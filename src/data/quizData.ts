import { SupportedLanguage } from '../types/constitution';

export interface QuizQuestion {
  id: string;
  sectionNumber: number;
  question: {
    ha: string;
    yo: string;
    ig: string;
    en: string;
  };
  options: {
    ha: string[];
    yo: string[];
    ig: string[];
    en: string[];
  };
  correctIndex: number;
  explanation: {
    ha: string;
    yo: string;
    ig: string;
    en: string;
  };
}

export const SECTION_QUIZZES: Record<number, QuizQuestion[]> = {
  // SECTION 34: Mutuncin Dan Adam / Dignity
  34: [
    {
      id: 'q-34-1',
      sectionNumber: 34,
      question: {
        ha: 'Menene babban tanadin Sashe na 34(1)(a) na Kundin Tsarin Mulki?',
        yo: 'Kini aṣẹ pataki ti o wa ninu Abala 34(1)(a) ti Iwe Ofin?',
        ig: 'Gịnị bụ isi ihe Ngalaba 34(1)(a) nke Akwụkwọ Iwu kwuru?',
        en: 'What is the core provision of Section 34(1)(a) of the Constitution?'
      },
      options: {
        ha: [
          'Ba za a azabtar da dan adam da wulakanci ko bauta kamar dabba ba',
          'Kowa dole ne ya biya haraji duk wata',
          'Sojoji suna da ikon dukan kowa a titi',
          'Gwamna ne kadai ke da mutunci'
        ],
        yo: [
          'A ko gbọdọ da eniyan looro tabi sọ ọ di ẹrú tabi aja',
          'Gbogbo eniyan gbọdọ san owo-ori loṣooṣu',
          'Awọn ọmọ ogun lẹtọ lati na eniyan loju titi',
          'Gomina nikan lo ni iyi'
        ],
        ig: [
          'Agaghị ata mmadụ ahụhụ ma ọ bụ mee ya ohu ma ọ bụ nkịta',
          'Onye ọ bụla ga-akwụ ụtụ isi kwa ọnwa',
          'Ndị agha nwere ikike iti onye ọ bụla ihe n’okporo ụzọ',
          'Ọ bụ naanị gọvanọ nwere nsọpụrụ'
        ],
        en: [
          'No person shall be subjected to torture, inhuman treatment, or slavery',
          'Everyone must pay income tax monthly',
          'Soldiers have the right to beat citizens in public',
          'Only Governors are entitled to human dignity'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 34 ya tabbatar da cewa: Ba za a maidaka kare ba! Mutuncin ɗan Nigeria abin girmamawa ne.',
        yo: 'Abala 34 sọ pe: Eniyan ko ni di aja! Ọlá rẹ jẹ dandan labẹ ofin.',
        ig: 'Ngalaba 34 kwuru: Agaghị eme gị ka nkịta! Nsọpụrụ gị dị mkpa.',
        en: 'Section 34 protects the right to dignity of every human person.'
      }
    },
    {
      id: 'q-34-2',
      sectionNumber: 34,
      question: {
        ha: 'Idan oga ko jami\'in tsaro ya tilasta maka yin aikin bauta ba tare da shari\'a ba, wane sashe ya karya?',
        yo: 'Bí ọ̀gá tàbí ọlọ́pàá bá fipá mú ọ ṣe iṣẹ́ ẹrú, abala wo ló tẹ̀ lójú?',
        ig: 'Ọ bụrụ na nna ukwu ma ọ bụ onye uwe ojii amanye gị ịrụ ọrụ ike dịka ohu, ngalaba dị aṅaa ka o mebiri?',
        en: 'If an official or employer forces you into unpaid slave labor, which Section is violated?'
      },
      options: {
        ha: ['Sashe na 34(1)(c)', 'Sashe na 1', 'Sashe na 14', 'Sashe na 308'],
        yo: ['Abala 34(1)(c)', 'Abala 1', 'Abala 14', 'Abala 308'],
        ig: ['Ngalaba 34(1)(c)', 'Ngalaba 1', 'Ngalaba 14', 'Ngalaba 308'],
        en: ['Section 34(1)(c)', 'Section 1', 'Section 14', 'Section 308']
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 34(1)(c) ya haramta aikin tilas ko na dole.',
        yo: 'Abala 34(1)(c) kọ gbogbo iṣẹ ipá ati iṣẹ ẹrú.',
        ig: 'Ngalaba 34(1)(c) machibidoro ọrụ ike ma ọ bụ ọrụ ohu.',
        en: 'Section 34(1)(c) explicitly prohibits forced or compulsory labour.'
      }
    },
    {
      id: 'q-34-3',
      sectionNumber: 34,
      question: {
        ha: 'Wane mataki doka ta tanada idan an ci mutuncinka?',
        yo: 'Igbese wo ni ofin la kalẹ ti wọn ba ba iyi rẹ jẹ?',
        ig: 'Kedu ihe iwu kwuru ị ga-eme ma a kparịa nsọpụrụ gị?',
        en: 'What legal recourse does a citizen have if their dignity is violated?'
      },
      options: {
        ha: [
          'Shigar da kara a Babbar Kotu a karkashin Sashe na 46 don neman diyya',
          'Hakura a bar maganar ba tare da daukar mataki ba',
          'Daukar bindiga a je a rama da kanka',
          'Biya dan sandan kudi don ya kyale ka'
        ],
        yo: [
          'Gbe ẹjọ lọ si Ile-Ẹjọ Giga labẹ Abala 46 lati beere fun owo ẹsan',
          'Gbàgbé ọ̀rọ̀ náà láìṣe nkankan',
          'Gba ibon ki o lọ gbẹsan funra rẹ',
          'San owo fun ọlọpa ki o le fi ọ silẹ'
        ],
        ig: [
          'Gaa n’Ụlọ Ikpe Kasị Elu n’okpuru Ngalaba 46 maka nkwụghachi ụgwọ',
          'Hapụ okwu ahụ n’emeghị ihe ọ bụla',
          'Wepụta égbè ka ị gaa bọọ ọbọ n’onwe gị',
          'Nye ndị uwe ojii ego ka ha hapụ gị'
        ],
        en: [
          'File an action in High Court under Section 46 for damages and compensation',
          'Do nothing and surrender your rights',
          'Take unlawful violent revenge',
          'Pay bribes to the offending officer'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 46 ya baiwa Babbar Kotu ikon zartar da biyan tara da diyya mai tsoka ga wanda aka wulakanta.',
        yo: 'Abala 46 fun Ile-ẹjọ giga ni aṣẹ lati gba owo ẹsan fun ẹ.',
        ig: 'Ngalaba 46 nyere Ụlọ Ikpe Kasị Elu ikike inye iwu maka nkwụghachi ụgwọ.',
        en: 'Section 46 provides access to the High Court for fundamental rights enforcement.'
      }
    }
  ],

  // SECTION 14: Tsaro da Jin Dadi / Welfare & Security
  14: [
    {
      id: 'q-14-1',
      sectionNumber: 14,
      question: {
        ha: 'Bisa ga Sashe na 14(2)(b), menene ainihin babban aikin kowace gwamnati a Najeriya?',
        yo: 'Gẹgẹ bi Abala 14(2)(b), kini idi akọkọ ti a fi da ijọba silẹ ni Naijiria?',
        ig: 'Dịka Ngalaba 14(2)(b) si kwuo, gịnị bụ isi ọrụ gọọmentị na Naịjirịa?',
        en: 'According to Section 14(2)(b), what is the primary purpose of government in Nigeria?'
      },
      options: {
        ha: [
          'Tsaro da jin dadin rayuwar talakawa (Security and welfare of the people)',
          'Siyan manyan motocin alfarma ga shugabanni',
          'Tafiya yawon shakatawa a kasashen waje',
          'Karbar haraji kawai ba tare da yin aiki ba'
        ],
        yo: [
          'Aabo ati iranlọwọ igbesi aye awọn ara ilu',
          'Rira awọn ọkọ ayọkẹlẹ nla fun awọn oloye',
          'Rin irin-ajo lọ si ilu okeere fun isinmi',
          'Gbigba owo-ori lasan laiṣe iṣẹ'
        ],
        ig: [
          'Nchekwa na ọdịmma nke ndị mmadụ',
          'Ịzụrụ ndị isi ala ụgbọ ala dị oke ọnụ',
          'Ịga njem ezumike na mba ofesi',
          'Ịnakọta ụtụ isi na-arụghị ọrụ ọ bụla'
        ],
        en: [
          'The security and welfare of the people',
          'Buying luxury cars for political leaders',
          'Traveling abroad on private vacations',
          'Collecting taxes without rendering services'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Kundin tsarin mulki ya ce tsaro da jin dadin jama\'a shi ne babban dalilin da ya sa aka kafa gwamnati.',
        yo: 'Ofin sọ pe aabo ati alafia awọn ara ilu ni idi akọkọ ti ijọba fi wa.',
        ig: 'Akwụkwọ iwu kwuru na nchekwa na ọdịmma ndị mmadụ bụ isi ọrụ gọọmentị.',
        en: 'Section 14(2)(b) states that security and welfare is the primary purpose of government.'
      }
    },
    {
      id: 'q-14-2',
      sectionNumber: 14,
      question: {
        ha: 'A hannun waye asalin iko da mulkin kasar Najeriya yake?',
        yo: 'Lọwọ tani aṣẹ ati agbara orilẹ-ede Naijiria wa gan-an?',
        ig: 'N’aka onye ka ike na ọchịchị Naịjirịa nọ n’ezie?',
        en: 'In whom does the sovereign power and authority of Nigeria originate?'
      },
      options: {
        ha: [
          'A hannun al\'ummar Najeriya (The people of Nigeria)',
          'A hannun sojoji masu bindiga',
          'A hannun bankuna da kamfanoni',
          'A hannun kasashen waje'
        ],
        yo: [
          'Lọwọ awọn ara ilu Naijiria',
          'Lọwọ awọn ọmọ ogun pẹlu ibọn',
          'Lọwọ awọn ile-ifowopamọ',
          'Lọwọ awọn orilẹ-ede ajeji'
        ],
        ig: [
          'N’aka ndị mmadụ Naịjirịa',
          'N’aka ndị agha nwere égbè',
          'N’aka ụlọ akụ na ụlọ ọrụ',
          'N’aka mba ndị ọzọ'
        ],
        en: [
          'The people of Nigeria from whom government derives all power',
          'The military with weapons',
          'Commercial banks and corporate monopolies',
          'Foreign governments'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 14(2)(a) ya ce dukkan iko daga al\'umma yake fitowa.',
        yo: 'Abala 14(2)(a) sọ pe agbara ijọba wa lati ọwọ awọn eniyan.',
        ig: 'Ngalaba 14(2)(a) kwuru na ikike niile sitere n’aka ndị mmadụ.',
        en: 'Sovereignty belongs to the people of Nigeria under Section 14(2)(a).'
      }
    },
    {
      id: 'q-14-3',
      sectionNumber: 14,
      question: {
        ha: 'Menene dalilin da ke haddasa zaman banza a Najeriya bisa ga doka?',
        yo: 'Kini ohun ti o n fa aisi aabo ati ainise ni Naijiria gẹgẹ bi ofin?',
        ig: 'Gịnị na-ebute enweghị nchekwa na enweghị ọrụ na Naịjirịa dịka iwu si kwuo?',
        en: 'What causes insecurity and idle poverty according to constitutional principles?'
      },
      options: {
        ha: [
          'Rashin sauke nauyin tsaro da rashin samar da aikin yi da makarantu ga matasa',
          'Saboda talakawa ba sa son zama lafiya',
          'Saboda babu ruwan sama a kasar',
          'Saboda kowa yana da mota'
        ],
        yo: [
          'Ikuna ijọba lati pese aabo, iṣẹ ati ile-ẹkọ fun awọn ọdọ',
          'Nitori awọn talaka ko fẹ alaafia',
          'Nitori ojo ko rọ',
          'Nitori gbogbo eniyan ni ọkọ'
        ],
        ig: [
          'Ọdịda gọọmentị n’inye nchekwa, ọrụ na ụlọ akwụkwọ maka ndị ntorobịa',
          'N’ihi na ndị ogbenye achọghị udo',
          'N’ihi na mmiri ozuzo ezoghị',
          'N’ihi na onye ọ bụla nwere ụgbọ ala'
        ],
        en: [
          'Failure of authorities to guarantee security, jobs, and schools for youths',
          'Because citizens dislike peaceful living',
          'Because of weather conditions',
          'Because everyone owns a car'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Gwamnatin da ta kasa samar da tsaro da makarantu ita ce ke haddasa zaman banza.',
        yo: 'Ijọba ti o ba kuna ninu aabo ati ẹkọ lo n fa aisi aabo.',
        ig: 'Gọọmentị na-enweghị ike inye nchekwa na agụmakwụkwọ na-ebute nsogbu.',
        en: 'Failing Section 14 welfare obligations directly produces insecurity and social unrest.'
      }
    }
  ],

  // SECTION 35: Personal Liberty & Bail
  35: [
    {
      id: 'q-35-1',
      sectionNumber: 35,
      question: {
        ha: 'Tsawon wane lokaci doka ta yarda a tsare mutum a caji ofis kafin a kai shi kotu?',
        yo: 'Bawo ni akoko ti ofin gba laaye lati ti eniyan mọ ago ọlọpa ki a to gbe e lọ si kootu?',
        ig: 'Ogologo oge ole ka iwu kwere ka a kpọchie mmadụ n’ụlọ ndị uwe ojii tupu e buga ya n’ụlọ ikpe?',
        en: 'What is the maximum constitutional detention period before an arrested person must be brought to court?'
      },
      options: {
        ha: [
          'Sa\'o\'i 24 zuwa 48 kacal (Awa daya zuwa biyu idan akwai kotu a kusa)',
          'Wata guda a kulle',
          'Shekara daya ba tare da kotu ba',
          'Har sai lokacin da dan sanda ya ga dama'
        ],
        yo: [
          'Wakati 24 si 48 nikan',
          'Oṣu kan ni pipade',
          'Ọdun kan laisi kootu',
          'Titi di igba ti ọlọpa ba fẹ'
        ],
        ig: [
          'Awa 24 ruo 48 naanị',
          'Otu ọnwa n’ụlọ mkpọrọ',
          'Otu afọ na-enweghị ụlọ ikpe',
          'Ruo mgbe ndị uwe ojii chọrọ'
        ],
        en: [
          'Within 24 to 48 hours (a reasonable period prescribed by Section 35(4))',
          'One month indefinitely',
          'One full year without court appearance',
          'Indefinitely at the discretion of the police'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 35(4) ya tilasta a kai mutum kotu a cikin sa\'o\'i 24 zuwa 48, in ba haka ba a ba shi beli.',
        yo: 'Abala 35(4) sọ pe a gbọdọ gbe eniyan lọ si kootu laarin wakati 24 si 48.',
        ig: 'Ngalaba 35(4) kwuru na a ga-ebuga mmadụ n’ụlọ ikpe n’ime awa 24 ruo 48.',
        en: 'Section 35(4) guarantees presentation before a court within 24 to 48 hours.'
      }
    },
    {
      id: 'q-35-2',
      sectionNumber: 35,
      question: {
        ha: 'Shin beli na kudi ne ko kyauta ne a Najeriya?',
        yo: 'Ṣe beli jẹ ti owo tabi ọfẹ ni orilẹ-ede Naijiria?',
        ig: 'Mgbapụta (Bail) ọ̀ bụ maka ego ka ọ bụ n’efu na Naịjirịa?',
        en: 'Is bail supposed to be paid for with cash or is it legally free in Nigeria?'
      },
      options: {
        ha: [
          'Beli kyauta ne a doka, karbar kudi cin hanci ne!',
          'Dole ne a biya miliyan daya kafin a bada beli',
          'Kudin DPO ne na aljihu',
          'Kowa dole ya sayar da gida don beli'
        ],
        yo: [
          'Beli jẹ ọfẹ labẹ ofin, gbigba owo jẹ abẹtẹlẹ!',
          'O di dandan lati san miliọnu kan',
          'Owo apo DPO ni',
          'Gbogbo eniyan gbọdọ ta ile fun beli'
        ],
        ig: [
          'Mgbapụta bụ n’efu n’okpuru iwu, ịnara ego bụ aka azụ!',
          'A ga-akwụrịrị otu nde tupu a gbapụta mmadụ',
          'Ọ bụ ego akpa DPO',
          'Onye ọ bụla ga-ere ụlọ maka mgbapụta'
        ],
        en: [
          'Bail is constitutionally free; demanding money for bail is an act of corruption!',
          'Bail requires mandatory payment of 1 million Naira',
          'Bail money belongs to the police DPO personally',
          'Family members must sell real estate to secure bail'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Dokar ACJA 2015 da Sashe na 35 sun tabbatar da cewa beli kyauta ne.',
        yo: 'Ofin Naijiria fidi ẹ mulẹ pe beli jẹ ọfẹ laisi sisan owo.',
        ig: 'Iwu Naịjirịa kwuru na mgbapụta bụ n’efu n’akwụghị ụgwọ ọ bụla.',
        en: 'Police bail is free by statutory provision and ACJA 2015.'
      }
    }
  ],

  // SECTION 37: Privacy / Phones
  37: [
    {
      id: 'q-37-1',
      sectionNumber: 37,
      question: {
        ha: 'Shin dan sanda na da ikon karbar wayarka ya karanta sakonnin WhatsApp a titi?',
        yo: 'Ṣe ọlọpa lẹtọ lati gba foonu rẹ ki o ka awọn ifiranṣẹ WhatsApp loju titi?',
        ig: 'Ndị uwe ojii hà nwere ikike ịnapụ gị ekwentị gị ma gụọ ozi WhatsApp gị n’okporo ụzọ?',
        en: 'Does a law enforcement officer have the legal right to seize your phone and read your WhatsApp messages on the street without a warrant?'
      },
      options: {
        ha: [
          'A\'a! Sashe na 37 ya kare sirrin wayarka sai da takardar izinin kotu (Warrant)',
          'I! Dan sanda na da ikon bincika komai a wayarka ko yaushe',
          'Sai dai idan wayar tana da fasinja',
          'Eh, idan wayar iPhone ce'
        ],
        yo: [
          'Rara! Abala 37 daabobo aṣiri foonu rẹ ayafi pẹlu aṣẹ kootu (Warrant)',
          'Bẹẹni! Ọlọpa lẹtọ lati wo gbogbo nkan nigbakugba',
          'Nikan ti foonu ba ni arinrin-ajo',
          'Bẹẹni, ti o ba jẹ iPhone'
        ],
        ig: [
          'Mba! Ngalaba 37 na-echebe nzuzo ekwentị gị ma ọ bụghị site n’akwụkwọ ikpe (Warrant)',
          'Ee! Ndị uwe ojii nwere ikike ilele ihe niile oge ọ bụla',
          'Naanị ma ekwentị nwere ndị njem',
          'Ee, ma ọ bụrụ iPhone'
        ],
        en: [
          'No! Section 37 guarantees privacy of citizens and electronic communications without a court warrant',
          'Yes, police officers can search any phone at any time without reason',
          'Only if the phone is connected to WiFi',
          'Yes, but only for iPhone devices'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 37 ya kare sirrin waya da sadarwa. Binciken wayar mutum ba bisa ka\'ida ba haramun ne.',
        yo: 'Abala 37 ṣe idaniloju aabo fun aṣiri foonu ati ibaraẹnisọrọ.',
        ig: 'Ngalaba 37 na-echebe nzuzo ekwentị na nkwukọrịta niile.',
        en: 'Section 37 guarantees privacy of citizen homes and telephone communications.'
      }
    }
  ],

  // SECTION 39: Whistleblowing & 5% Reward
  39: [
    {
      id: 'q-39-1',
      sectionNumber: 39,
      question: {
        ha: 'Menene kason ladan da mai tona asiri (Whistleblower) zai samu idan an kwato kudaden sata?',
        yo: 'Ere melo ni olutọju oju (Whistleblower) yoo gba ti a ba gba owo ole pada?',
        ig: 'Ụgwọ ọrụ ole ka onye na-ekpughe ohi (Whistleblower) ga-enweta ma a nwetaghachi ego ohi?',
        en: 'What percentage financial reward is an eligible whistleblower entitled to receive upon recovery of stolen public funds?'
      },
      options: {
        ha: [
          'Kashi 2.5% zuwa 5% na kudaden da aka kwato',
          'Ba shi da komai sai duka',
          'Kashi 90% na dukkan kudin kasa',
          'Burodi guda daya kawai'
        ],
        yo: [
          '2.5% si 5% ti gbogbo owo ti a gba pada',
          'Ko ni gba nkankan afi ijiya',
          '90% ti gbogbo owo ilu',
          'Buredi kan lasan'
        ],
        ig: [
          '2.5% ruo 5% nke ego niile e nwetaghachiri',
          'Ọ gaghị enweta ihe ọ bụla ma ọ bụghị ihe mgbu',
          '90% nke ego obodo niile',
          'Naanị otu achịcha'
        ],
        en: [
          'Between 2.5% and 5% of the total recovered loot under the Whistleblower Policy',
          'Nothing whatsoever except punishment',
          '90% of the entire national treasury',
          'A single loaf of bread'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Tsarin Whistleblower da Sashe na 39 sun tanadi samun tsakanin 2.5% zuwa 5% tare da cikakkiyar kariya.',
        yo: 'Eto olutọju oju fun ọ ni aṣẹ lati gba 2.5% si 5% pẹlu aabo to daju.',
        ig: 'Usoro Whistleblower kwuru na ị ga-enweta 2.5% ruo 5% yana nchedo pụrụ iche.',
        en: 'Federal Whistleblower Policy entitles informants to between 2.5% and 5% of recovered assets.'
      }
    }
  ],

  // SECTION 308: Immunity Clause
  308: [
    {
      id: 'q-308-1',
      sectionNumber: 308,
      question: {
        ha: 'Yaushe ne rigakafin shari\'a (Immunity) na Shugaban Kasa da Gwamnoni yake faduwa?',
        yo: 'Igba wo ni aabo lọwọ ẹjọ (Immunity) ti Ààrẹ ati Gómìnà n pari?',
        ig: 'Olee mgbe nchebe pụọ n’ikpe (Immunity) nke Onye Isi Ala na ndị Gọvanọ na-akwụsị?',
        en: 'When does the constitutional immunity against criminal prosecution for a Governor or President expire?'
      },
      options: {
        ha: [
          'Da zarar sun sauka daga kujerar mulki (Wa\'adinsu ya kare)',
          'Baya taba faduwa har abada',
          'Idan sun tafi birnin Landan',
          'Idan sun sayi sabuwar mota'
        ],
        yo: [
          'Ni kete ti akoko iṣẹ wọn ba pari lori alefa',
          'Ko ni pari laelae',
          'Nigba ti wọn ba lọ si ilu London',
          'Nigba ti wọn ba ra ọkọ tuntun'
        ],
        ig: [
          'Ozugbo oge ọchịchị ha gwụrụ ma ha rịdata n’oche ha',
          'Ọ gaghị akwụsị ma ọlị ruo mgbe ebighị ebi',
          'Mgbe ha gara obodo London',
          'Mgbe ha zụrụ ụgbọ ala ọhụrụ'
        ],
        en: [
          'Immediately their tenure of office expires upon vacating the seat',
          'Never; immunity protects them eternally',
          'Only while traveling to London',
          'Whenever they purchase a new vehicle'
        ]
      },
      correctIndex: 0,
      explanation: {
        ha: 'Sashe na 308(3) ya nuna cewa rigakafi yana aiki ne kawai YAYIN DA SUKE KAN MULKI. Da zarar sun sauka, za a iya gurfanar da su!',
        yo: 'Abala 308(3) fi han pe aabo wa nikan nigba ti wọn wa lori ijọba. Ni kete ti wọn ba sọkalẹ, a le pe wọn lẹjọ!',
        ig: 'Ngalaba 308(3) kwuru na nchebe na-adị irè naanị mgbe ha nọ n’ọchịchị. Ozugbo ha rịdatara, a ga-ekpe ha ikpe!',
        en: 'Section 308(3) limits immunity strictly to the period during which the office is held.'
      }
    }
  ]
};

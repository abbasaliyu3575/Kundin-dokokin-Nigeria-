export interface ConstitutionSection {
  id: string;
  sectionNumber: number;
  subSection?: string;
  englishTitle: string;
  hausaTitle: string;
  chapter: number;
  chapterTitle: string;
  category: 'Hakkin Dan Adam' | 'Zaman Lafiya' | 'Tattalin Arziki' | 'Maisanya Ido' | 'Masu Rusa Kasa' | 'Ikon Hukuma';
  hausaSummary: string;
  hausaFullText: string;
  misaliNaGida: string;
  hukunci: string;
  cartoonImage?: string;
  cartoonCaption?: string;
  voiceScript: string;
  tags: string[];
}

export const CONSTITUTION_SECTIONS: ConstitutionSection[] = [
  // CHAPTER I: KOLI DA IKON KUNDIN TSARIN MULKI
  {
    id: 'sec-1',
    sectionNumber: 1,
    englishTitle: 'Supremacy of the Constitution',
    hausaTitle: 'Sashe na 1: Koli da Ikon Kundin Tsarin Mulki - Babu Wani da Ya Fi Doka!',
    chapter: 1,
    chapterTitle: 'Babi na I: Sharuddan Gaba Daya (General Provisions)',
    category: 'Ikon Hukuma',
    hausaSummary: 'Duk wani shugaban kasa, gwamna, sanata, soja ko dan sanda yana karkashin wannan kundin tsarin mulki ne. Duk dokar da ta ci karo da wannan kundi, banza ce!',
    hausaFullText: 'Sashe na 1(1) ya tabbatar da cewa: Wannan Kundin Tsarin Mulki shi ne babban dokar koli a Tarayyar Najeriya. Dokarsa ta wajaba a kan dukkan hukumomi da mutane a fadin Najeriya.\n\nSashe na 1(2): Ba za a karbi ikon mulkin Najeriya ta hanyar bindiga ko juyin mulki ba, sai dai bisa tanadin wannan kundi.\n\nSashe na 1(3): Idan wata doka da majalisa ta kafa ta saba wa wannan kundi, wannan kundi ne zai yi aiki, waccan dokar kuma ta zama batacciya.',
    misaliNaGida: 'Misalin "Tulu Ya Fashe a Fadar Sarki": Idan gwamna ya wayi gari ya buga dokar cewa kowa ya rufe bakinsa ko kuma ya kwace filin talakawa ba tare da biyan kudi ba, wannan kundi ya ce: "Gwamna ka tafka kuskure, dokarka shirme ce!"',
    hukunci: 'Duk dokar da wani jami\'i ya yi wadda ta saba wa Kundin Tsarin Mulki, kotu za ta soke ta nan take a matsayin haramtacciya.',
    cartoonImage: '/src/assets/images/sardauna_cartoon_law_1791335062500.jpg',
    cartoonCaption: 'Sardauna da dattawan kasa suna koyar da cewa doka tafi kowa karfi.',
    voiceScript: 'Barka da zuwa Sashe na Daya na Kundin Tsarin Mulkin Najeriya. Wannan sashe ya tabbatar da cewa Kundin Tsarin Mulki shi ne gatan kowa a Najeriya. Babu shugaba ko soja da ya fi karfin doka. Duk dokar da ta zalunci dan kasa, wannan kundi ya soke ta.',
    tags: ['doka', 'koli', 'shugabanci', 'ikon kasa', 'tsarin mulki']
  },
  {
    id: 'sec-4',
    sectionNumber: 4,
    englishTitle: 'Legislative Powers',
    hausaTitle: 'Sashe na 4: Ikon Yin Doka - Aikin Yan Majalisa Ba Aikin Karya Ba Ne!',
    chapter: 1,
    chapterTitle: 'Babi na I: Sharuddan Gaba Daya',
    category: 'Ikon Hukuma',
    hausaSummary: 'Yan Majalisar Tarayya da na Jiha sune ke da alhakin yin dokoki don tabbatar da zaman lafiya, oda, da kyakkyawan shugabanci ga yan kasa.',
    hausaFullText: 'Ikon yin dokoki na Tarayyar Najeriya yana hannun Majalisar Dokoki ta Kasa (National Assembly), wanda ya kunshi Majalisar Dattawa (Senate) da Majalisar Wakilai (House of Reps).',
    misaliNaGida: 'Misalin "Wakilin Kasuwa": Idan dan majalisarka ya tafi Abuja yana kwanciyar bacci ba tare da ya kawo dokar gyara hanyoyi da asibitin garinku ba, ya saba wa amana da doka.',
    hukunci: 'Sashe na 69 ya ba al\'umma damar kiran dan majalisar da ya gaza (Recall) idan bai wakilce su yadda ya kamata ba.',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: 'Mizanin shari\'a da ikon majalisa na yin adalci ga talakawa.',
    voiceScript: 'Sashe na hudu: Ikon yin doka yana hannun yan majalisa. Ba don su ci kudi ba, domin su kare talakawa da zaman lafiya ne aka zabe su.',
    tags: ['majalisa', 'doka', 'wakilci', 'senate', 'rep']
  },

  // CHAPTER II: MANUFOFIN GWAMNATI DA TSARO
  {
    id: 'sec-14',
    sectionNumber: 14,
    englishTitle: 'The Government and the People - Security and Welfare',
    hausaTitle: 'Sashe na 14: Waye Yake Janyo Zaman Banza? Tsaro da Jin Dadin Talakawa!',
    chapter: 2,
    chapterTitle: 'Babi na II: Manufofin Shugabanci (Fundamental Objectives)',
    category: 'Zaman Lafiya',
    hausaSummary: 'Section 14(2)(b) ya bayyana karara: Tsaro da jin dadin rayuwar talakawa shi ne babban makasudin kowace gwamnati a Najeriya!',
    hausaFullText: 'Sashe na 14(1): Jamhuriyar Tarayyar Najeriya jiha ce da aka kafa bisa manufar dimokuradiyya da adalci na zamantakewa.\n\nSashe na 14(2)(a): Iko da ikon mallakar kasa na al\'ummar Najeriya ne, kuma daga garesu ne gwamnati ke samun dukkan ikonta.\n\nSashe na 14(2)(b): Tsaro da jin dadin jama\'a shi ne babban dalilin da ya sa aka kafa gwamnati (Primary purpose of government).\n\nSashe na 14(3): Dole ne a tabbatar da tsarin Federal Character wajen raba mukamai ba tare da son kai ba.',
    misaliNaGida: 'Misalin "Kare vs Barayi a Kasuwa": Idan gwamnati ta ki tura tsaro kasuwar kurmi ko kauyenka har barayi suka kwace muku shanu da kayan abinci, gwamnati ta gaza a ainihin aikin da Sashe na 14 ya daura mata!',
    hukunci: 'Duk lokacin da shugaba ya kasa kare rayukan mutanensa, ya keta ainihin rantsuwar kama aiki da manufofin kafa gwamnati.',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: 'Dan talakawa yana tambaya: Waye zai kare min kaya na da kaina a kasuwa?',
    voiceScript: 'Sashe na Sha Hudu: Waye ke janyo zaman banza? Kundin tsarin mulki a sashe na goma sha hudu ya ce, ainihin aikin gwamnati shi ne tsaron lafiyarka da jin dadin ka. Iko na jama\'a ne ba na sarakuna ko shugabanni kadai ba.',
    tags: ['tsaro', 'zaman banza', 'jin dadi', 'talakawa', 'gwamnati', 'adalci']
  },
  {
    id: 'sec-15',
    sectionNumber: 15,
    englishTitle: 'Political Objectives - Eradication of Corruption',
    hausaTitle: 'Sashe na 15: Hana Cin Hanci da Rashawa - Tulu Ya Fashe!',
    chapter: 2,
    chapterTitle: 'Babi na II: Manufofin Shugabanci',
    category: 'Maisanya Ido',
    hausaSummary: 'Sashe na 15(5) ya tilasta wa gwamnati: Dole ne a kawar da dukkan nau\'o\'in cin hanci da rashawa da kuma rashin amfani da karfin mulki!',
    hausaFullText: 'Sashe na 15(5): Dole ne jihar Najeriya ta kawar da dukkan ayyukan cin hanci da rashawa tare da ladabtar da duk wanda ya ci amanar ofis ko dukiyar al\'umma.',
    misaliNaGida: 'Misalin "Tulu Ya Fashe da Kudaden Asibiti": Lokacin da aka ba kwamishina kudin siyan magunguna ya je ya sayi gidaje a Dubai, wannan sashe ne ya ba EFCC da ICPC ikon damke shi ya dawo da kudin talakawa!',
    hukunci: 'Kayan da aka sata na gwamnati dole ne a kwato su, a kuma daure mai laifi a gidan yari.',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: 'Tulu ya fashe: Kudaden sata sun fito fili, masu boye asiri sun tona!',
    voiceScript: 'Sashe na goma sha biyar: Gwamnati dole ta yaki cin hanci da rashawa. Ba za a bari wani ya sace kudin makaranta ko asibiti ba.',
    tags: ['cin hanci', 'rashawa', 'efcc', 'icpc', 'tona asiri']
  },
  {
    id: 'sec-16',
    sectionNumber: 16,
    englishTitle: 'Economic Objectives',
    hausaTitle: 'Sashe na 16: Tattalin Arzikin Kasa - Arziki Ba Na Mutum Biyar Ba Ne!',
    chapter: 2,
    chapterTitle: 'Babi na II: Manufofin Shugabanci',
    category: 'Tattalin Arziki',
    hausaSummary: 'Gwamnati dole ta gudanar da tattalin arziki ta yadda arzikin kasa ba zai taru a hannun tsirarun mutane ko barayi ba, har talakawa su sha wahala.',
    hausaFullText: 'Sashe na 16(2)(c): Dole ne a tabbatar da cewa tattalin arziki bai mayar da arzikin al\'umma ko hanyoyin samar da arziki a hannun wasu tsirarun daidaikun mutane ba.',
    misaliNaGida: 'Misalin "Gari Daya Mai Burodi": Idan mutum daya ne kacal aka ba damar shigo da shinkafa da siminti yana tsawwala farashi yadda ya ga dama, ya saba wa ruhin Sashe na 16.',
    hukunci: 'Dole ne a bude kofofin kasuwanci domin kowa ya samu abinci, aiki, da saukin rayuwa.',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: 'Daidaita arzikin kasa don kowa ya samu abinci da sutura.',
    voiceScript: 'Sashe na goma sha shida: Arzikin Najeriya na kowa ne. Kada a bar mutum daya ya mamaye man fetur ko kasuwanci har talaka ya rasa abinci.',
    tags: ['tattalin arziki', 'kasuwa', 'sauki', 'abinci', 'arziki']
  },

  // CHAPTER IV: FUNDAMENTAL HUMAN RIGHTS (HAKKIN DAN ADAM - 33 ZUWA 46)
  {
    id: 'sec-33',
    sectionNumber: 33,
    englishTitle: 'Right to Life',
    hausaTitle: 'Sashe na 33: Hakkin Rayuwa - Babu Mai Kashe Ka Ba Tare Da Doka Ba!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam (Fundamental Human Rights)',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Kowane mutum yana da hakkin rayuwa. Babu wanda ke da izinin kashe ka—ko soja, ko dan sanda, ko dan daban siyasa—sai dai idan kotu ce ta yanke hukuncin kisa bisa doka.',
    hausaFullText: 'Sashe na 33(1): Kowane mutum yana da hakkin rayuwa, kuma ba za a hana wani ransa da gangan ba, sai dai wajen zartar da hukuncin kisa da kotu ta yanke bayan an same shi da laifin da doka ta tanadi kisa a kai.',
    misaliNaGida: 'Misalin "Kare vs Harbin Kan Mai Uwa da Wabi": Idan dan sanda ya harbi dan acaba a kan rashin bayar da na-goro (hamsin ko dari), wannan dan sanda ya aikata babban laifin kisan kai kuma kotu za ta daure shi.',
    hukunci: 'Hukuncin kisa ko daurin rai-da-rai ga duk wanda ya kashe dan adam ba bisa ka\'idar doka ba.',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: 'Kare rayuwar kowane dan kasa babban hakki ne a gaban shari\'a.',
    voiceScript: 'Sashe na Talatin da Uku: Hakkin Rayuwa. Babu wanda ya isa ya dauki ranka a banza. Doka ta kare ka, jinin ɗan Nigeria ba ruwa ba ne.',
    tags: ['rayuwa', 'kisa', 'dan sanda', 'kariya', 'hakki']
  },
  {
    id: 'sec-34',
    sectionNumber: 34,
    englishTitle: 'Right to Dignity of Human Person',
    hausaTitle: 'Sashe na 34: BA ZA A MAIDAKA KARE BA! Mutuncinka Dole Ne!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Section 34(1)(a) - BA ZA A MAIDAKA KARE BA! Mutuncinka dole ne! Ba za a azabtar da kai ba, ko a ci mutuncinka, ko a bautar da kai kamar dabba.',
    hausaFullText: 'Sashe na 34(1): Kowane mutum yana da hakkin a girmama mutuncinsa a matsayin dan adam, saboda haka:\n(a) Ba za a azabtar da kowane mutum da azaba ko wulakanci ko rashin mutuntaka ba;\n(b) Ba za a rike kowane mutum a matsayin bawa ko bauta ba;\n(c) Ba za a tilasta wa kowane mutum yin aikin tilas ko na dole ba.',
    misaliNaGida: 'Misalin "Kare vs Makaranta": Idan dan sanda ko sojoji suka ce ka yi tsugunnon biri, ko ka sha ruwan kwata a kan titi, ko kuma oga ya rike ka ba ya ba ka albashi yana dukan ka: Wannan take dokar Sashe na 34 ne! Ba kai kare ba ne, dan adam ne!',
    hukunci: 'Kotu na da ikon yanke hukuncin biyan tara mai tsoka ga duk jami\'in da ya wulakanta mutuncin dan kasa, tare da hukunta shi a aikace.',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: 'Section 34: Ba za a maidaka kare ba! Mutuncin ɗan Nigeria abin girmamawa ne.',
    voiceScript: 'Sashe na Talatin da Hudu. Ba za a maida ka kare ba! Mutuncinka dole ne a girmama shi. Ba za a azabtar da kai da duka ko wulakanci ba, kuma ba za a sa ka aikin bauta ba.',
    tags: ['mutunci', 'ba kare ba', 'duka', 'azaba', 'bauta', 'dignity']
  },
  {
    id: 'sec-35',
    sectionNumber: 35,
    englishTitle: 'Right to Personal Liberty',
    hausaTitle: 'Sashe na 35: Hakkin Samun Yanci - Ba Za A Tsare Ka a Gidan Kaso Banza Ba!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Kowane mutum yana da hakkin yancin kansa. Idan an kama ka, dole a sanar da kai laifinka a cikin sa\'o\'i ashirin da hudu (24), kuma ba za a tsare ka sama da sa\'o\'i 24 zuwa 48 ba tare da an kai ka gaban kotu ba!',
    hausaFullText: 'Sashe na 35(1): Kowane mutum yana da hakkin yancin kansa, ba za a hana shi wannan yanci ba sai dai bisa dalilai da doka ta tanada.\n\nSashe na 35(2): Duk wanda aka kama yana da hakkin ya yi shiru har sai ya nemi lauya ba tare da an matsa masa ba.\n\nSashe na 35(3): Duk wanda aka kama dole a gaya masa dalilin kamun cikin harshen da yake ganewa a cikin sa\'o\'i 24.\n\nSashe na 35(4): Idan an kama mutum, dole a kai shi kotu a cikin sa\'o\'i 24 ko 48 (idan akwai kotu a kusa), in ba haka ba a ba shi beli.',
    misaliNaGida: 'Misalin "Daren Juma\'a a Caji Ofis": Idan dan sanda ya kama ka a kan hanyar komawa gida ranar Juma\'a yana cewa "sai ranar Litinin za ka ga DPO", ka tuna masa: Sashe na 35 ya ce beli kyauta ne, kuma tsare mutum ba bisa ka\'ida ba haramun ne!',
    hukunci: 'Sashe na 35(6) ya ce: Duk wanda aka kama ko aka tsare ba bisa ka\'ida ba, yana da hakkin a ba shi hakuri a fili da kuma biyan shi diyyar kudi mai kauri!',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: 'Yancin dan kasa: Ba za a kulle ka a caji ofis ba tare da laifi ba.',
    voiceScript: 'Sashe na Talatin da Biyar: Hakkin samun yanci. Ba za a tsare ka a gidan kaso ko caji ofis ba tare da an fada maka dalili ba. Beli hakkin ka ne, kuma idan an zalunce ka, kotu za ta sa a biya ka diyya.',
    tags: ['beli', 'caji ofis', 'tsarewa', 'lauya', 'yanci', 'liberty']
  },
  {
    id: 'sec-36',
    sectionNumber: 36,
    englishTitle: 'Right to Fair Hearing',
    hausaTitle: 'Sashe na 36: Hakkin Samun Shari\'a Mai Adalci - Kowa Da Lauyansa!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Kafin a yanke maka hukunci, dole ne a ba ka damar kare kanka a gaban kotu mai adalci. Ana daukar ka mara laifi har sai an tabbatar da laifinka a gaban shari\'a!',
    hausaFullText: 'Sashe na 36(1): Wajen tantance hakkokin mutum da wajibcinsa, kowane mutum yana da hakkin a saurare shi cikin adalci da lokaci mai kyau a gaban kotu ko kwamitin da doka ta kafa.\n\nSashe na 36(5): Kowane mutum da aka zarga da aikata laifi ana daukarsa mara laifi (presumed innocent) har sai an tabbatar da laifinsa.\n\nSashe na 36(6): Kana da hakkin samun fassarar yare idan ba ka jin Turanci, da hakkin lauya, da kuma kiran shaidun ka.',
    misaliNaGida: 'Misalin "Hukuncin Daji a Kasuwa": Ba a taba zargin mutum da sata a ce an lakada masa duka ko an yanke masa hukunci ba tare da ya je kotu ya fadi gaskiyar lamari ba.',
    hukunci: 'Duk wani hukunci da aka yanke wa mutum ba tare da an saurare shi ba, kotun koli za ta watsar da shi domin rashin adalci.',
    cartoonImage: '/src/assets/images/sardauna_cartoon_law_1791335062500.jpg',
    cartoonCaption: 'Shari\'a mai adalci: Kowa na da damar yin magana da kare kansa.',
    voiceScript: 'Sashe na Talatin da Shida: Adalci a shari\'a. Kowa ana daukarsa mara laifi har sai kotu ta tabbatar. Kana da hakkin lauya da fassara da kuma kiran shaidunka.',
    tags: ['shari\'a', 'kotu', 'adalci', 'lauya', 'fair hearing']
  },
  {
    id: 'sec-37',
    sectionNumber: 37,
    englishTitle: 'Right to Private and Family Life',
    hausaTitle: 'Sashe na 37: Hakkin Sirrin Rayuwa - Kada Wani Ya Bude Woyarka Ko Gidanka!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Sirrin gidanka, wayarka, sakonnin WhatsApp, da wasikunka na sirri ne. Babu mai ikon shiga gidanka ko bincikar wayarka ba tare da izinin kotu (Search Warrant) ba!',
    hausaFullText: 'Sashe na 37: An tabbatar da kariya ga sirrin yan kasa, gidajensu, wasikunsu, tattaunawar waya da sadarwar telegiram.',
    misaliNaGida: 'Misalin "Tsayarwa a Titin Shiga Gari": Idan jami\'in tsaro ya tsayar da kai yana cewa: "Miko wayarka in duba sakonnin WhatsApp da hotunanka", wannan ya ci karo da Sashe na 37! Ba shi da wannan ikon sai da takardar izinin kotu.',
    hukunci: 'Shiga gidan mutum ko binciken wayarsa ba bisa ka\'ida ba babban laifi ne da za a iya maka jami\'in a kotu.',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: 'Sirrin wayarka da gidanka hakkin ka ne, babu mai kutsawa.',
    voiceScript: 'Sashe na Talatin da Bakwai: Sirrin rayuwa da gida. Wayarka da sakonninka na sirri ne. Ba wanda ya isa ya bincika ba tare da izinin kotu ba.',
    tags: ['sirri', 'waya', 'gida', 'whatsapp', 'bincike']
  },
  {
    id: 'sec-38',
    sectionNumber: 38,
    englishTitle: 'Right to Freedom of Thought, Conscience and Religion',
    hausaTitle: 'Sashe na 38: Yancin Addini da Akida - Kowa Yana Da Yancin Bautar Ubangiji!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Kowane dan Najeriya yana da yancin zabar addininsa, ya yi bauta a fili ko a boye, ya koyar da addininsa ba tare da wani ya tsangwame shi ba.',
    hausaFullText: 'Sashe na 38(1): Kowane mutum yana da hakkin yancin tunani, lamiri da addini, gami da yancin canza addininsa ko imaninsa, da yancin bayyana addininsa ta hanyar koyarwa, aiki da ibada.',
    misaliNaGida: 'Misalin "Makwabtaka Mai Albarka": Musulmi da Kirista a unguwa daya kowa yana gudanar da ibadarsa cikin kwanciyar hankali ba tare da tsangwama ko hantara ba.',
    hukunci: 'Hana mutum yin addininsa ko tilasta masa wani addini ya saba wa dokar kasa kai tsaye.',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: 'Yancin yin addini da tunani cikin zaman lafiya da mutunta juna.',
    voiceScript: 'Sashe na Talatin da Takwas: Yancin addini da akida. Kowa na da ikon zabar addinin da ya ga dama ya kuma yi ibadarsa cikin lumana.',
    tags: ['addini', 'imani', 'ibada', 'yanci', 'zaman lafiya']
  },
  {
    id: 'sec-39',
    sectionNumber: 39,
    englishTitle: 'Right to Freedom of Expression and the Press',
    hausaTitle: 'Sashe na 39: Yancin Fadin Albarkacin Baki da Tona Asiri!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Maisanya Ido',
    hausaSummary: 'Kowane dan kasa yana da hakkin fadin ra\'ayinsa, tofa albarkacin bakinsa, da karbar labarai. Wannan sashe tare da dokar FOI Act 2011 sun baka ikon tona asirin duk wani maras gaskiya!',
    hausaFullText: 'Sashe na 39(1): Kowane mutum yana da hakkin yancin bayyana ra\'ayi, gami da yancin rike ra\'ayoyi da karba da yada bayanai da ra\'ayoyi ba tare da tsangwama ba.',
    misaliNaGida: 'Misalin "Tona Asirin Dan Kwangilar Karya": Idan ka ga an ba dan kwangila miliyan dari don gyara asibiti amma bai yi ba, ka rubuta labarin ka bayyana gaskiya, doka tana tare da kai! Ba za a kulle ka ba.',
    hukunci: 'Kare duk wani mai tona asiri (Whistleblower protection) da ba shi kaso 5% na kudin da aka kwato kamar yadda dokar tona asiri ta tanada.',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: 'Yancin magana: Fadi gaskiya komai dacinta, tulu ya fashe!',
    voiceScript: 'Sashe na Talatin da Tara: Yancin fadin albarkacin baki da tona asiri. Kana da ikon fadin ra\'ayinka da tona asirin azzalumai da barayin gwamnati.',
    tags: ['magana', 'fadin albarkacin baki', 'tona asiri', 'jarida', 'gaskiya']
  },
  {
    id: 'sec-40',
    sectionNumber: 40,
    englishTitle: 'Right to Peaceful Assembly and Association',
    hausaTitle: 'Sashe na 40: Yancin Haduwa da Zama Kungiya - Jam\'iyya ko Kungiyar Kwadago!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Kana da yancin haduwa da sauran jama\'a cikin lumana, ka shiga jam\'iyyar siyasa, kungiyar kwadago, ko kungiyar matasa ba tare da an hana ka ba.',
    hausaFullText: 'Sashe na 40: Kowane mutum yana da hakkin ya hadu cikin lumana kuma ya hada kai da wasu mutane, musamman zai iya kafa ko shiga kowace jam\'iyyar siyasa, kungiyar kwadago ko wata kungiya domin kare muradunsa.',
    misaliNaGida: 'Misalin "Zanga-zangar Lumana": Idan matasa ko kungiyar ma\'aikata sun fito zanga-zangar lumana don neman saukin farashin man fetur, doka ta basu wannan yanci matukar ba su tada fitina ba.',
    hukunci: 'Hana zanga-zangar lumana ko watsa taron lumana ya saba wa wannan kundi.',
    cartoonImage: '/src/assets/images/sardauna_cartoon_law_1791335062500.jpg',
    cartoonCaption: 'Haduwar lumana domin neman ci gaban al\'umma da kare hakki.',
    voiceScript: 'Sashe na Arba\'in: Yancin haduwa da zama kungiya. Kana da hakkin shiga kungiyar kwadago ko siyasa ko yin taron lumana don kare hakkin ka.',
    tags: ['kungiya', 'lumana', 'zanga zanga', 'siyasa', 'haduwa']
  },
  {
    id: 'sec-41',
    sectionNumber: 41,
    englishTitle: 'Right to Freedom of Movement',
    hausaTitle: 'Sashe na 41: Yancin Ziyara da Zama a Kowace Jiha ta Najeriya!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Kana da yancin tafiya ko\'ina a Najeriya, ka zauna a Kano, Legas, Maiduguri, Enugu, ko Fatakwal ba tare da wani ya ce ba ka da asali a can ba.',
    hausaFullText: 'Sashe na 41(1): Kowane dan kasa yana da hakkin ya zagaya cikin yardar kansa a duk fadin Najeriya kuma ya zauna a kowane bangare na Najeriya, kuma ba za a kori kowane dan kasa daga Najeriya ko a hana shi shigowa ba.',
    misaliNaGida: 'Misalin "Dan Kasuwar Kano a Legas": Dan kasuwa daga Kano yana da damar zama a Alaba ko Agege yana kasuwanci kamar yadda dan Legas zai iya zama a Sabon Gari Kano yana harkarsa.',
    hukunci: 'Kora ko tsangwamar dan kasa a wata jiha saboda kabila haramun ne.',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: 'Kowace jiha gidanka ce a Najeriya, kana da yancin motsi.',
    voiceScript: 'Sashe na Arba\'in da Daya: Yancin motsi da zama a ko\'ina a Najeriya. Babu wanda ya isa ya kore ka daga wata jiha saboda ba dan can ba ne kai.',
    tags: ['motsi', 'tafiya', 'jiha', 'zama', 'najeriya']
  },
  {
    id: 'sec-42',
    sectionNumber: 42,
    englishTitle: 'Right to Freedom from Discrimination',
    hausaTitle: 'Sashe na 42: Hana Nuna Bambanci - Hausa, Igbo, Yoruba, Mata ko Maza!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Ba za a nuna maka wariya ko bambanci ba a kan kabilarka, yankinka, addininka, ko jinsinka (mace ko namiji) wajen aiki, makaranta, ko shiga gwamnati.',
    hausaFullText: 'Sashe na 42(1): Ba za a nuna wa dan Najeriya bambanci ko tauye masa hakki saboda al\'ummarsa, kabilarsa, wurin asalinsa, jinsinsa, addininsa ko ra\'ayin siyasarsa ba.\n\nSashe na 42(2): Ba za a nuna wa wani dan kasa wariya saboda yanayin haihuwarsa ba.',
    misaliNaGida: 'Misalin "Neman Aikin Gwamnati": Idan aka ki daukar mace ko wani mutum aikin soja ko kwastam saboda kabilarsa ko kuma don mace ce duk da ta fi kowa kwazo, an karya Sashe na 42!',
    hukunci: 'Kotu na iya soke duk wani daukar aiki ko tsari da aka yi bisa nuna wariya ko kabilanci.',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: 'Kowa daidai yake: Babu nuna wariya a kabilanci ko addini.',
    voiceScript: 'Sashe na Arba\'in da Biyu: Hana nuna bambanci. Ko kai Bahaushe ne ko Bayarabe ko Inyamuri, kowa dan kasa ne mai daraja daidai.',
    tags: ['bambanci', 'wariya', 'kabila', 'mace', 'namiji', 'aiki']
  },
  {
    id: 'sec-43',
    sectionNumber: 43,
    englishTitle: 'Right to Acquire and Own Immovable Property',
    hausaTitle: 'Sashe na 43: Hakkin Mallakar Filaye da Gidaje a Ko\'ina!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Tattalin Arziki',
    hausaSummary: 'Kowane dan Najeriya yana da cikakken ikon mallakar fili, gida, da dukiya a kowace jiha ta kasar nan ba tare da wani ya hana shi ba.',
    hausaFullText: 'Sashe na 43: Kowane dan kasa yana da hakkin ya mallaki dukiya da ba a iya motsawa (kamar gida ko fili) a ko\'ina a fadin Najeriya.',
    misaliNaGida: 'Misalin "Sayen Filin Gona": Idan ka sayi filinka da halalinka a Abuja ko Kaduna, babu wani hakimi ko mai sarauta da zai ce zai kwace saboda ba kai dan asalin garin ba ne.',
    hukunci: 'Kare mallakar fili da diyya mai tsoka idan wani ya yi yunkurin kwace dukiya.',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: 'Mallakar gida da fili hakkin kowane dan kasa ne a kowace jiha.',
    voiceScript: 'Sashe na Arba\'in da Uku: Hakkin mallakar fili da gida. Kana da ikon siyan dukiya a ko\'ina a Najeriya ba tare da wani ya kwace maka ba.',
    tags: ['fili', 'gida', 'dukiya', 'mallaka', 'ardiya']
  },
  {
    id: 'sec-44',
    sectionNumber: 44,
    englishTitle: 'Compulsory Acquisition of Property',
    hausaTitle: 'Sashe na 44: Kwace Filin Talakawa - Dole a Biya Diyya Nan Take!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Tattalin Arziki',
    hausaSummary: 'Idan har gwamnati na son kwace filinka ko gidanka don aikin al\'umma (kamar asibiti ko titi), doka ta tilasta mata ta biya ka diyyar kudi cikin gaggawa kuma daidai da kudin filin a kasuwa!',
    hausaFullText: 'Sashe na 44(1): Ba za a karbi mallakar wata dukiya ko hakki a kan wata dukiya da karfi ba, sai dai bisa tanadin doka wadda ta tanadi biyan diyya cikin gaggawa, da kuma ba wa mai filin damar zuwa kotu idan ba a yi masa adalci ba.',
    misaliNaGida: 'Misalin "Fasashewar Gidajen Hanya": Idan gwamna ya zo da buldoza ya rushe shagonka ko gidanka yana cewa zai yi hanya amma bai biya ka ko sisin kobo ba: Sashe na 44 ya ba ka damar tsayar da shi a kotu!',
    hukunci: 'Kotu na iya dakatar da aikin gwamnati da kuma tilasta musu biyan diyyar gaggawa ga masu dukiya.',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: 'Kada a kwace filin talaka a banza: Diyya dole ce a gaban doka.',
    voiceScript: 'Sashe na Arba\'in da Hudu: Hana kwace fili ba tare da diyya ba. Idan gwamnati za ta karbi filinka, dole ta biya ka diyya nan take kuma a farashin kasuwa.',
    tags: ['diyya', 'fili', 'rusau', 'gwamna', 'kudi']
  },
  {
    id: 'sec-46',
    sectionNumber: 46,
    englishTitle: 'Special Jurisdiction of High Court and Legal Aid',
    hausaTitle: 'Sashe na 46: Makomar Talaka a Kotu - Hanyar Karbar Hakki!',
    chapter: 4,
    chapterTitle: 'Babi na IV: Muhimman Hakkokin Dan Adam',
    category: 'Hakkin Dan Adam',
    hausaSummary: 'Idan wani shugaba, soja, ko dan sanda ya zalunce ka a karkashin Sashe na 33 zuwa 45, wannan Sashe na 46 ya baka damar kai tsaye ka shigar da kara a Babbar Kotu (High Court) kuma a saurare ka cikin gaggawa!',
    hausaFullText: 'Sashe na 46(1): Duk wanda ya zargi cewa an karya wani tanadi na wannan Babi (Chapter IV), ko ana kokarin karya shi a kansa, yana da damar shigar da kara a Babbar Kotu ta Jiha (High Court) domin neman kariya.\n\nSashe na 46(2): Babbar Kotu tana da cikakken ikon bayar da umarni (Orders, Writs, Injunctions) domin tilasta mutunta hakkin dan adam.\n\nSashe na 46(4): Majalisa za ta samar da kudaden taimakon lauya kyauta (Legal Aid Council) ga ɗan Nigeria wanda ba shi da kudin daukar lauya.',
    misaliNaGida: 'Misalin "Alkalin Talakawa": Ba sai kana da miliyoyin kudi ba. Hukumar Legal Aid Council tana nan don ba wa ɗan Nigeria lauya kyauta ya kwato hakkinsa a karkashin Sashe na 46!',
    hukunci: 'Babbar Kotu za ta ba da umarnin sako mutum nan take da kuma biyan shi diyyar miliyoyin kudi idan an zalunce shi.',
    cartoonImage: '/src/assets/images/sardauna_cartoon_law_1791335062500.jpg',
    cartoonCaption: 'Babbar Kotu ita ce garkuwar talakawa domin kwato hakkinsu.',
    voiceScript: 'Sashe na Arba\'in da Shida: Makomar talaka a kotu. Idan an take maka hakki, kana da damar zuwa Babbar Kotu kai tsaye. Kuma akwai lauyoyin kyauta da za su tsaya maka.',
    tags: ['kotu', 'lauya kyauta', 'legal aid', 'high court', 'kara']
  },

  // CHAPTER VI & VII: EXECUTIVE & JUDICIARY CONTROLS
  {
    id: 'sec-308',
    sectionNumber: 308,
    englishTitle: 'Restrictions on Legal Proceedings (Immunity Clause)',
    hausaTitle: 'Sashe na 308: Rigakafin Shari\'a - Shugaban Kasa da Gwamnoni Ba Alloli Ba Ne!',
    chapter: 6,
    chapterTitle: 'Babi na VI: Bangaren Zartarwa (The Executive)',
    category: 'Masu Rusa Kasa',
    hausaSummary: 'Ba za a iya maka Shugaban Kasa, Mataimakinsa, Gwamna, ko Mataimakin Gwamna a gaban kotun farar hula ko ta laifi ba YAYIN DA SUKE KAN MULKI. Amma da zarar sun sauka daga mulki, tulu ya fashe! Za a iya daure su!',
    hausaFullText: 'Sashe na 308(1): Ba za a kafa ko a ci gaba da wata kara ta laifi ko ta farar hula a kan mutumin da yake rike da ofishin Shugaban Kasa, Mataimakin Shugaban Kasa, Gwamna ko Mataimakin Gwamna a lokacin da yake kan mulki ba.\n\nSashe na 308(2): Ba za a kama su ko a daure su da sunan wani umarnin kotu ba a wannan lokacin.\n\nSashe na 308(3): Wannan rigakafi yana aiki ne kawai a kan mutumin a yayin da yake kan kujerar mulki. Da zarar wa\'adinsa ya kare, kariya ta fadi!',
    misaliNaGida: 'Misalin "Ranar Sauka Daga Karagar Mulki": Lokacin da gwamna yake mulki yana ta kwasar kudi yana zaton ya tsira. Amma da karfe 12:01 na ranar 29 ga Mayu da zarar ya sauka, jami\'an EFCC na jiransa a waje domin rigakafin ya kare!',
    hukunci: 'Ana bincikar su a asirce yayin da suke kan mulki, ana kuma gurfanar da su a gaban kotu da zarar sun sauka.',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: 'Rigakafin mulki ba zai dawwama ba: Ranar sauka tulu ya fashe!',
    voiceScript: 'Sashe na Dari Uku da Takwas: Rigakafin shari\'a na shugabanni. Shugaban kasa da gwamnoni ba a maka su kotu yayin da suke kan mulki, amma da zarar wa\'adinsu ya kare, doka za ta kama su idan sun saci dukiyar al\'umma.',
    tags: ['rigakafi', 'gwamna', 'shugaban kasa', 'immunity', 'efcc', 'mulki']
  }
];

export interface WhistleblowerAgency {
  name: string;
  hausaDesc: string;
  hotline: string;
  email: string;
  website: string;
  rewardText: string;
  whatsapp?: string;
}

export const WHISTLEBLOWER_AGENCIES: WhistleblowerAgency[] = [
  {
    name: 'EFCC (Hukumar Yaki Da Yiwa Tattalin Arziki Zagon Kasa)',
    hausaDesc: 'Wurin kai rahoton sata, karkatar da kudaden gwamnati, da kudaden kwangila.',
    hotline: '+2348093322644 / 08031230333',
    email: 'info@efcc.gov.ng',
    website: 'https://efcc.gov.ng',
    rewardText: 'Za ka iya samun tsakanin 2.5% zuwa 5% na kudaden da aka kwato!',
    whatsapp: '+2348093322644'
  },
  {
    name: 'ICPC (Hukumar Yaki da Cin Hanci da Rashawa)',
    hausaDesc: 'Domin kai karar ma\'aikatan gwamnati da ke karbar na-goro da kudin cin hanci.',
    hotline: '0800-CALL-ICPC (0800-2255-4272)',
    email: 'info@icpc.gov.ng',
    website: 'https://icpc.gov.ng',
    rewardText: 'Kare asirin mai tona asiri a karkashin Sashe na 64 na Dokar ICPC Act 2000.'
  },
  {
    name: 'NHRC (Hukumar Kare Hakkin Dan Adam ta Kasa)',
    hausaDesc: 'Domin shigar da karar duka, tsarewa ba bisa ka\'ida ba, ko zaluncin jami\'an tsaro.',
    hotline: '0800-6472-4357 / +2349091929394',
    email: 'info@nhrc.gov.ng',
    website: 'https://nhrc.gov.ng',
    rewardText: 'Lauyoyi kyauta da kuma binciken zalunci a karkashin Sashe na 46.'
  },
  {
    name: 'Police CRU (Sashen Korafe-Korafe na Rundunar Yan Sandan Najeriya)',
    hausaDesc: 'Domin kai karar dan sandan da ya karbi na-goro, ya doke ka, ko ya ki ba da beli kyauta.',
    hotline: '+2348057000001 / +2348057000002',
    email: 'complaint@npf.gov.ng',
    website: 'https://npf.gov.ng',
    rewardText: 'Daukar matakin ladabtarwa da kuma dawo da kudin da aka karba.',
    whatsapp: '+2348057000003'
  }
];

export interface FaqQuestion {
  question: string;
  shortAnswer: string;
  relevantSection: number;
  fullExplanation: string;
}

export const POPULAR_HAUSA_QUESTIONS: FaqQuestion[] = [
  {
    question: 'Waye yake janyo zaman banza?',
    shortAnswer: 'Gwamnati ce ke da alhakin tsaro a Sashe na 14(2)(b). Idan ta gaza, ita ce sanadiyar zaman banza.',
    relevantSection: 14,
    fullExplanation: 'Kundin tsarin mulki ya ce: "Tsaro da jin dadin rayuwar talakawa shi ne babban makasudin kowace gwamnati." Idan babu aikin yi, babu makarantu, babu adalci a kotuna, hakan ne yake haddasa zaman banza da rashin tsaro.'
  },
  {
    question: 'Meyasa Nigeria takasa kare yan kasa?',
    shortAnswer: 'Rashin bin Sashe na 14 da rashin hukunta masu cin hanci a Sashe na 15.',
    relevantSection: 14,
    fullExplanation: 'Matsalar ba rashin kudi ba ce ko rashin doka. Matsalar ita ce rashin kishin kasa da cin hanci da rashawa da ke hana kayan aikin tsaro kaiwa ga sojoji da yan sanda a fagen fama.'
  },
  {
    question: 'Shin dan sanda na da ikon bincika wayata a titi?',
    shortAnswer: 'A\'a! Sashe na 37 ya kare sirrin wayarka da sakonninka sai da izinin kotu (Warrant).',
    relevantSection: 37,
    fullExplanation: 'Sashe na 37 na Kundin Tsarin Mulki ya tabbatar da sirrin sadarwar waya. Binciken wayar mutum ba bisa ka\'idar doka ba take hakki ne wanda za a iya maka dan sanda a kotu a Sashe na 46.'
  },
  {
    question: 'Shin beli kyauta ne a Najeriya?',
    shortAnswer: 'Kwarai kuwa! Sashe na 35 da dokar ACJA 2015 sun ce beli kyauta ne.',
    relevantSection: 35,
    fullExplanation: 'Duk dan sandan da ya ce ka kawo kudi kafin a ba da belin wani dan uwanka da aka kama, ya aikata laifin cin hanci. Sashe na 35 ya ba da damar fitowa a beli idan ba laifin kisa ko ta\'addanci ba ne.'
  },
  {
    question: 'Me zan samu idan na tona asirin barawon gwamnati?',
    shortAnswer: 'Za ka samu kashi 2.5% zuwa 5% na kudaden da gwamnati ta kwato, tare da kariya!',
    relevantSection: 39,
    fullExplanation: 'A karkashin tsarin Whistleblower Policy da Sashe na 39 tare da Freedom of Information Act 2011, duk wanda ya bayar da tabbataccen bayanin da ya sa aka kwato kudaden sata na kasa yana da hakkin samun kashi 5% na kudin.'
  },
  {
    question: 'Shin ba za a iya maidani kare ba?',
    shortAnswer: 'Tabbas! Sashe na 34 ya ce mutuncinka dole ne a girmama shi, ba kai kare ba ne!',
    relevantSection: 34,
    fullExplanation: 'Sashe na 34(1)(a) ya ce kowane dan adam yana da mutunci. Ba za a azabtar da kai da duka, tsugunno, ko kowanne wulakanci ba.'
  }
];

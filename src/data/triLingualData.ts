import { TriLingualSection } from '../types/constitution';

export const TRI_LINGUAL_SECTIONS: TriLingualSection[] = [
  // SECTION 1
  {
    id: 'sec-1',
    sectionNumber: 1,
    englishTitle: 'Supremacy of the Constitution',
    chapter: 1,
    chapterTitleEn: 'Chapter I: General Provisions',
    cartoonImage: '/src/assets/images/sardauna_cartoon_law_1791335062500.jpg',
    cartoonCaption: {
      ha: 'Sardauna da dattawan kasa suna koyar da cewa doka tafi kowa karfi.',
      yo: 'Àwọn àgbàlagbà ń kọ́ wa pé òfin ló ga ju gbogbo adarí lọ.',
      ig: 'Ndị okenye na-akụzi na iwu kachasị onye ndu ọ bụla ike.'
    },
    ha: {
      title: 'Sashe na 1: Koli da Ikon Kundin Tsarin Mulki - Babu Wani da Ya Fi Doka!',
      summary: 'Duk wani shugaban kasa, gwamna, sanata, soja ko dan sanda yana karkashin wannan kundin tsarin mulki ne. Duk dokar da ta ci karo da wannan kundi, banza ce!',
      fullText: 'Sashe na 1(1): Wannan Kundin Tsarin Mulki shi ne babban dokar koli a Tarayyar Najeriya. Dokarsa ta wajaba a kan dukkan hukumomi da mutane.\n\nSashe na 1(2): Ba za a karbi ikon mulkin Najeriya ta hanyar bindiga ko juyin mulki ba.\n\nSashe na 1(3): Idan wata doka ta saba wa wannan kundi, wannan kundi ne zai yi aiki, waccan ta zama banza.',
      misali: 'Misalin "Tulu Ya Fashe a Fadar Sarki": Idan gwamna ya wayi gari ya kafa dokar cewa kowa ya rufe bakinsa ko ya kwace filin talaka a banza, wannan kundi ya ce dokarsa shirme ce!',
      hukunci: 'Duk dokar da wani jami\'i ya yi wadda ta saba wa Kundin Tsarin Mulki, kotu za ta soke ta nan take.',
      voiceScript: 'Sashe na Daya na Kundin Tsarin Mulkin Najeriya. Babu shugaba ko soja da ya fi karfin doka. Dokar kasa ita ce koli.',
      category: 'Ikon Hukuma',
      tags: ['doka', 'koli', 'shugabanci', 'supremacy', 'constitution']
    },
    yo: {
      title: 'Abala 1: Aṣẹ Giga ti Iwe Ofin - Kò Sí Ẹnikẹ́ni tí Ó Ju Òfin Lọ!',
      summary: 'Gbogbo ààrẹ, gómìnà, sẹ́nétọ̀, ológun tàbí ọlọ́pàá wà lábẹ́ ìwé òfin yìí. Òfin èyíkéyìí tí ó bá tako ìwé òfin yìí jẹ́ òfo!',
      fullText: 'Abala 1(1): Ìwé Òfin yìí ni àṣẹ tí ó ga jùlọ ní Orílẹ̀-èdè Nàìjíríà. Ó di dandan fún gbogbo àwọn aláṣẹ àti gbogbo ènìyàn.\n\nAbala 1(2): Kò sí ẹnikẹ́ni tí yóò gba ìjọba Nàìjíríà pẹ̀lú ìbọn tàbí fipá gba agbára.\n\nAbala 1(3): Bí òfin kan bá tako ìwé òfin yìí, ìwé òfin yìí ni yóò ṣiṣẹ́, èkejì yóò sì bàjẹ́.',
      misali: 'Apẹẹrẹ "Ọba Tó Fẹ́ Gba Ilẹ̀ Lọ́fẹ̀ẹ́": Bí gómìnà kan bá jí lójijì tó ní kí gbogbo ènìyàn pa ẹnu mọ́ tàbí kó gba ilẹ̀ àwọn tálákà láìsí owó, ìwé òfin yìí ní irọ́ ni!',
      hukunci: 'Ilé-ẹjọ́ yóò pa òfin èyíkéyìí tí ó bá tako Ìwé Òfin rẹ́ lẹ́sẹ̀kẹsẹ̀ gẹ́gẹ́ bí èèwọ̀.',
      voiceScript: 'Abala Kìíní ti Ìwé Òfin Nàìjíríà. Kò sí adarí tàbí ológun tí ó ju òfin lọ. Òfin orílẹ̀-èdè ló ga jùlọ.',
      category: 'Aṣẹ Ijọba',
      tags: ['ofin', 'ase', 'gomina', 'aare', 'supremacy']
    },
    ig: {
      title: 'Ngalaba 1: Ike Kasị Elu nke Akwụkwọ Iwu - Ọ Dịghị Onye Karịrị Iwu!',
      summary: 'Onye isi ala, gọvanọ, sịnetọ, ndị agha ma ọ bụ ndị uwe ojii nọ n’okpuru akwụkwọ iwu a. Iwu ọ bụla megidere ya bụ ihe efu!',
      fullText: 'Ngalaba 1(1): Akwụkwọ Iwu a bụ iwu kachasị elu na Naịjirịa. Ọ dị mkpa n’aka ndị ọchịchị na ndị mmadụ niile.\n\nNgalaba 1(2): Agaghị anapụ ọchịchị Naịjirịa site n’ike égbè ma ọ bụ ntụgharị ọchịchị.\n\nNgalaba 1(3): Ọ bụrụ na iwu ọ bụla megidere akwụkwọ iwu a, akwụkwọ iwu a ga-adịgide, nke ahụ abụrụ ihe efu.',
      misali: 'Ihe Nlereanya "Onye Ọchịchị Chọrọ Ịnapụ Ala": Ọ bụrụ na gọvanọ eteta gwa ndị mmadụ mechie ọnụ ma ọ bụ napụ ndị ogbenye ala na-akwụghị ụgwọ, akwụkwọ iwu a kwuru na ọ gaghị ekwe omume!',
      hukunci: 'Ụlọ ikpe ga-akagbu iwu ọ bụla megidere Akwụkwọ Iwu a ozugbo.',
      voiceScript: 'Ngalaba Mbụ nke Akwụkwọ Iwu Naịjirịa. Ọ dịghị onye ndu ma ọ bụ onye agha karịrị iwu. Iwu obodo kachasị elu.',
      category: 'Ike Ọchịchị',
      tags: ['iwu', 'onye isi ala', 'ochichi', 'supremacy']
    }
  },

  // SECTION 14
  {
    id: 'sec-14',
    sectionNumber: 14,
    englishTitle: 'The Government and the People - Security and Welfare',
    chapter: 2,
    chapterTitleEn: 'Chapter II: Fundamental Objectives and Directive Principles',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: {
      ha: 'Waye ke janyo zaman banza? Talakawa na tambayar tsaro a kasuwa.',
      yo: 'Tani n fa aisi aabo? Awon eniyan n bere aabo fun oja ati ile won.',
      ig: 'Ònye na-ebute enweghị nchekwa? Ndị mmadụ na-achọ nchedo n’ahịa.'
    },
    ha: {
      title: 'Sashe na 14: Waye Yake Janyo Zaman Banza? Tsaro da Jin Dadin Talakawa!',
      summary: 'Section 14(2)(b) ya bayyana karara: Tsaro da jin dadin rayuwar talakawa shi ne babban makasudin kowace gwamnati a Najeriya!',
      fullText: 'Sashe na 14(1): Tarayyar Najeriya jiha ce da aka kafa bisa adalci.\n\nSashe na 14(2)(b): Tsaro da jin dadin jama\'a shi ne babban dalilin da ya sa aka kafa gwamnati (Primary purpose of government).\n\nSashe na 14(3): Dole ne a tabbatar da tsarin Federal Character ba tare da nuna bambanci ba.',
      misali: 'Misalin "Kare vs Barayi a Kasuwa": Idan gwamnati ta ki tura tsaro kasuwa har barayi suka kwace muku shanu da kayan abinci, gwamnati ta gaza a ainihin aikin da Sashe na 14 ya daura mata!',
      hukunci: 'Duk lokacin da shugaba ya kasa kare rayukan mutanensa, ya keta ainihin rantsuwar kama aiki.',
      voiceScript: 'Sashe na Sha Hudu: Waye yake janyo zaman banza? Kundin tsarin mulki ya ce ainihin aikin gwamnati shi ne tsaro da jin dadin rayuwar ka.',
      category: 'Zaman Lafiya',
      tags: ['tsaro', 'zaman banza', 'talakawa', 'gwamnati', 'security', 'welfare']
    },
    yo: {
      title: 'Abala 14: Tani N Fa Aisi Aabo? Aabo ati Idunnu Awọn Tálákà!',
      summary: 'Abala 14(2)(b) sọ kedere: Aabo ati iranlọwọ igbesi aye awọn ara ilu ni idi akọkọ ti a fi da ijọba silẹ ni Naijiria!',
      fullText: 'Abala 14(1): Orilẹ-ede Naijiria da lori ododo ati dọgba.\n\nAbala 14(2)(b): Aabo ati alafia gbogbo eniyan ni idi pataki ti a fi ni ijọba.\n\nAbala 14(3): A gbọdọ pin ipo ati anfaani ilu laisi ojuṣaju.',
      misali: 'Apẹẹrẹ "Oja ti Ko Ni Aabo": Ti ijọba ba kọ lati pese ọlọpa ni ọja ti awọn adigunjale si ji ẹru rẹ, ijọba ti kuna ninu ojuṣe Abala 14!',
      hukunci: 'Nigba ti olori ba kuna lati daabobo ẹmi awọn eniyan rẹ, o ti da adehun ijọba rẹ ru.',
      voiceScript: 'Abala Kẹrinla: Tani n fa aisi aabo? Iwe ofin sọ pe idi pataki ti a fi da ijọba silẹ ni aabo ati alafia rẹ.',
      category: 'Aabo ati Alaafia',
      tags: ['aabo', 'ijoba', 'talaka', 'ola', 'security']
    },
    ig: {
      title: 'Ngalaba 14: Ònye Na-Ebute Enweghị Nchekwa? Nchekwa na Ọdịmma Ndị Mmadụ!',
      summary: 'Ngalaba 14(2)(b) kọwara nke ọma: Nchekwa na ọdịmma nke ndị mmadụ bụ isi ihe mere e ji nwee gọọmentị na Naịjirịa!',
      fullText: 'Ngalaba 14(1): Naịjirịa dabere na ikpe ziri ezi.\n\nNgalaba 14(2)(b): Nchekwa na ọdịmma nke ọha mmadụ bụ isi nzube nke gọọmentị.\n\nNgalaba 14(3): A ga-ekesa ọkwá na akụ obodo n’enweghị ịkpa ókè.',
      misali: 'Ihe Nlereanya "Ndị Ohi n’Ahịa": Ọ bụrụ na gọọmentị enyeghị nchedo n’ahịa ka ndị ohi kwakọrọ ngwá ahịa gị, gọọmentị adaala n’ọrụ Ngalaba 14 nyere ya!',
      hukunci: 'Mgbe onye ndu na-enweghị ike ichebe ndụ ndị mmadụ, o mebiri nkwa ọchịchị ya.',
      voiceScript: 'Ngalaba Iri na Anọ: Ònye na-ebute enweghị nchekwa? Akwụkwọ iwu kwuru na isi ọrụ gọọmentị bụ ichebe ndụ na akụ gị.',
      category: 'Udo na Nchekwa',
      tags: ['nchekwa', 'ochichi', 'ndu', 'ogbenye', 'security']
    }
  },

  // SECTION 15
  {
    id: 'sec-15',
    sectionNumber: 15,
    englishTitle: 'Political Objectives - Eradication of Corruption',
    chapter: 2,
    chapterTitleEn: 'Chapter II: Fundamental Objectives and Directive Principles',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: {
      ha: 'Tulu ya fashe: Kudaden sata sun fito fili, masu tona asiri sun yi nasara!',
      yo: 'Ikoko ti fọ: Owo ole ti jade sita, awon olutọju oju ti bori!',
      ig: 'Ite agbawaala: Ego ohi apụtala ìhè, ndị na-ekpughe ihe ọjọọ emeriela!'
    },
    ha: {
      title: 'Sashe na 15: Hana Cin Hanci da Rashawa - Tulu Ya Fashe!',
      summary: 'Sashe na 15(5) ya tilasta wa gwamnati: Dole ne a kawar da dukkan nau\'o\'in cin hanci da rashawa da kuma rashin amfani da karfin mulki!',
      fullText: 'Sashe na 15(5): Dole ne jihar Najeriya ta kawar da dukkan ayyukan cin hanci da rashawa tare da ladabtar da duk wanda ya ci amanar ofis ko dukiyar al\'umma.',
      misali: 'Misalin "Tulu Ya Fashe da Kudaden Asibiti": Lokacin da aka ba kwamishina kudin siyan magunguna ya sayi gidaje a Dubai, wannan sashe ne ya ba EFCC da ICPC ikon damke shi ya dawo da kudin talakawa!',
      hukunci: 'Kayan da aka sata na gwamnati dole ne a kwato su, a kuma daure mai laifi a gidan yari.',
      voiceScript: 'Sashe na goma sha biyar: Gwamnati dole ta yaki cin hanci da rashawa. Tulu ya fashe, kada a kyale barayin gwamnati.',
      category: 'Maisanya Ido',
      tags: ['cin hanci', 'rashawa', 'efcc', 'icpc', 'tona asiri', 'corruption']
    },
    yo: {
      title: 'Abala 15: Gbigbogun ti Ìwà Ìbàjẹ́ - Ìkòkò Ti Fọ́!',
      summary: 'Abala 15(5) pa a láṣẹ fún ìjọba: Ó di dandan láti pa gbogbo ìwà àbẹ̀tẹ́lẹ̀, ìbàjẹ́, àti lílo agbára láìbójúmu rẹ́!',
      fullText: 'Abala 15(5): Orilẹ-ede Naijiria gbọdọ pa gbogbo iwa ibajẹ rẹ ki o si jẹ ẹnikẹni ti o ba jẹ owo ilu niya lẹsẹkẹsẹ.',
      misali: 'Apẹẹrẹ "Owo Ile-Iwosan ti Wọn Ji": Nigba ti wọn fun kọmiṣọna ni owo oogun ti o fi ra ile ni ilu okeere, abala yii ni o fun EFCC ati ICPC ni agbara lati mu un!',
      hukunci: 'A gbọdọ gba gbogbo owo ti a ji pada ki a si ti ẹlẹṣẹ mọ ọgba ẹwọn.',
      voiceScript: 'Abala Kẹẹdogun: Ijọba gbọdọ gbogun ti iwa ibajẹ. Ikoko ti fọ, a ko ni fi awọn olè ijọba silẹ.',
      category: 'Olutọju Oju',
      tags: ['ibaje', 'abetẹlẹ', 'efcc', 'icpc', 'asiri', 'corruption']
    },
    ig: {
      title: 'Ngalaba 15: Ikpochapụ Nrụrụ Aka - Ite Agbawaala!',
      summary: 'Ngalaba 15(5) nyere iwu siri ike: Gọọmentị ga-ekpochapụ ụdị nrụrụ aka na iji ike eme ihe n’ụzọ na-ezighị ezi niile!',
      fullText: 'Ngalaba 15(5): Steeti Naịjirịa ga-ekpochapụ omume nrụrụ aka niile ma taa onye ọ bụla zuru ego ọha ahụhụ.',
      misali: 'Ihe Nlereanya "Ego Ọgwụ Ụlọ Ọgwụ": Mgbe e nyere kọmishọna ego ọgwụ mana o ji ya zụta ụlọ na Dubai, ngalaba a nyere EFCC na ICPC ikike ijide ya!',
      hukunci: 'A ga-enwetaghachi ego niile e zuru n’aka ndị ohi ma tụba ha n’ụlọ mkpọrọ.',
      voiceScript: 'Ngalaba Iri na Ise: Gọọmentị ga-alụso nrụrụ aka ọgụ. Ite agbawaala, agaghị ahapụ ndị ohi ego obodo.',
      category: 'Onye Na-Eche Nche',
      tags: ['nruru aka', 'aka azu', 'efcc', 'icpc', 'ohi', 'corruption']
    }
  },

  // SECTION 33
  {
    id: 'sec-33',
    sectionNumber: 33,
    englishTitle: 'Right to Life',
    chapter: 4,
    chapterTitleEn: 'Chapter IV: Fundamental Human Rights',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: {
      ha: 'Hakkin rayuwa: Jinin ɗan Nigeria ba ruwa ba ne, doka ta kare ka!',
      yo: 'Ẹtọ si ẹmi: Ẹjẹ ọmọ talaka ko ṣe ẹlẹya, ofin daabobo ẹ!',
      ig: 'Ikike nke ndụ: Ọbara onye ogbenye abụghị mmiri, iwu na-echebe gị!'
    },
    ha: {
      title: 'Sashe na 33: Hakkin Rayuwa - Babu Mai Kashe Ka Ba Tare Da Doka Ba!',
      summary: 'Kowane mutum yana da hakkin rayuwa. Babu wanda ke da izinin kashe ka—ko soja, ko dan sanda, ko dan daban siyasa—sai dai idan kotu ce ta yanke hukuncin kisa bisa doka.',
      fullText: 'Sashe na 33(1): Kowane mutum yana da hakkin rayuwa, kuma ba za a hana wani ransa da gangan ba, sai dai wajen zartar da hukuncin kotu.',
      misali: 'Misalin "Kare vs Harbin Kan Mai Uwa da Wabi": Idan dan sanda ya harbi dan acaba a kan rashin ba da na-goro (hamsin ko dari), ya aikata laifin kisan kai kuma kotu za ta daure shi.',
      hukunci: 'Hukuncin kisa ko daurin rai-da-rai ga duk wanda ya kashe dan adam ba bisa ka\'ida ba.',
      voiceScript: 'Sashe na Talatin da Uku: Hakkin Rayuwa. Jinin ɗan Nigeria ba ruwa ba ne. Babu wanda ya isa ya dauki ranka a banza.',
      category: 'Hakkin Dan Adam',
      tags: ['rayuwa', 'kisa', 'dan sanda', 'life', 'right to life']
    },
    yo: {
      title: 'Abala 33: Ẹtọ Si Ẹmi - Kò Sí Ẹni Tí Ó Lè Pa Ọ Lọ́nà Àìtọ́!',
      summary: 'Gbogbo eniyan lo ni ẹtọ si ẹmi. Kò sí ẹnikẹ́ni tí ó ní àṣẹ láti gba ẹ̀mí rẹ—yálà ológun, ọlọ́pàá, tàbí jàgùdà—àyàfi tí ilé-ẹjọ́ bá pàṣẹ bẹ́ẹ̀ lábẹ́ òfin.',
      fullText: 'Abala 33(1): Gbogbo eniyan ni ẹtọ si ẹmi, a ko si gbọdọ fi imọmọ gba ẹmi ẹnikẹni ayafi ninu imuṣẹ idajọ ile-ẹjọ.',
      misali: 'Apẹẹrẹ "Ibon ti Ọlọpa Yìn Lọ́fẹ̀ẹ́": Bí ọlọ́pàá kan bá yin ibọn pa ọlọ́kọ̀ torí pé kò fún un ní owó àbẹ̀tẹ́lẹ̀, ó ti dá ẹ̀ṣẹ̀ ìpànìyàn, ilé-ẹjọ́ yóò sì tì í mọ́ ọgbà ẹ̀wọ̀n.',
      hukunci: 'Ẹwọn gbere tabi iku fun ẹnikẹni ti o ba pa eniyan lai tọ.',
      voiceScript: 'Abala Ọgbọ̀nle mẹta: Ẹtọ si ẹmi. Ẹjẹ ọmọ talaka kii ṣe omi. Ko si ẹni to lẹtọ lati gba ẹmi rẹ.',
      category: 'Ẹtọ Ọmọniyan',
      tags: ['emi', 'iku', 'olopa', 'life', 'human rights']
    },
    ig: {
      title: 'Ngalaba 33: Ikike Nke Ndụ - Ọ Dịghị Onye Ga-Egbu Gị n’Ụzọ Na-Ezighị Ezi!',
      summary: 'Onye ọ bụla nwere ikike nke ndụ. Ọ dịghị onye nwere ikike igbu gị—ma onye agha, ndị uwe ojii, ma ọ bụ ndị omekome—ọ gwụla ma ụlọ ikpe mara ikpe ọnwụ.',
      fullText: 'Ngalaba 33(1): Onye ọ bụla nwere ikike nke ndụ, a gaghị amakwa ụma napụ onye ọ bụla ndụ ya ma ọ bụghị site n’ikpe ụlọ ikpe kpere.',
      misali: 'Ihe Nlereanya "Ndị Uwe Ojii Gbagburu Onye Ọkwọ Okada": Ọ bụrụ na onye uwe ojii agbagbuo onye na-akwọ okada n’ihi na o nyeghị ya aka azụ, o mere mpụ igbu ọchụ ma ụlọ ikpe ga-atụba ya n’ụlọ mkpọrọ.',
      hukunci: 'Ọnwụ ma ọ bụ mkpọrọ ndụ niile maka onye ọ bụla gburu mmadụ n’ụzọ na-ezighị ezi.',
      voiceScript: 'Ngalaba Iri Atọ na Atọ: Ikike nke ndụ. Ọbara onye ogbenye abụghị mmiri. Ọ dịghị onye nwere ike igbu gị n’efu.',
      category: 'Ikike Mmadụ',
      tags: ['ndu', 'onwu', 'ndi uwe ojii', 'life', 'human rights']
    }
  },

  // SECTION 34 - THE SHOWPIECE FOR ALL 3 LANGUAGES!
  {
    id: 'sec-34',
    sectionNumber: 34,
    englishTitle: 'Right to Dignity of Human Person',
    chapter: 4,
    chapterTitleEn: 'Chapter IV: Fundamental Human Rights',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: {
      ha: 'Section 34: BA ZA A MAIDAKA KARE BA! Mutuncin ɗan Nigeria abin girmamawa ne.',
      yo: 'Section 34: ENIYAN KO NI DI AJA! Ọlá rẹ jẹ dandan, a ko ni wọ ọ lẹwọn.',
      ig: 'Section 34: AGAGHI EME GI KA NKITA! Nsọpụrụ gị dị mkpa, a gaghị eme gị mmegbu.'
    },
    ha: {
      title: 'Sashe na 34: BA ZA A MAIDAKA KARE BA! Mutuncinka Dole Ne!',
      summary: 'Section 34(1)(a) - BA ZA A MAIDAKA KARE BA! Mutuncinka dole ne! Ba za a azabtar da kai ba, ko a ci mutuncinka, ko a bautar da kai kamar dabba.',
      fullText: 'Sashe na 34(1): Kowane mutum yana da hakkin a girmama mutuncinsa a matsayin dan adam:\n(a) Ba za a azabtar da kowane mutum da azaba ko wulakanci ba;\n(b) Ba za a rike kowane mutum a matsayin bawa ko bauta ba;\n(c) Ba za a tilasta wa kowane mutum yin aikin tilas ko na dole ba.',
      misali: 'Misalin "Kare vs Makaranta": Idan dan sanda ko sojoji suka ce ka yi tsugunnon biri, ko ka sha ruwan kwata a kan titi, ko kuma oga ya rike ka yana dukan ka: Wannan take dokar Sashe na 34 ne! Ba kai kare ba ne, dan adam ne!',
      hukunci: 'Kotu na da ikon yanke hukuncin biyan tara mai tsoka ga duk jami\'in da ya wulakanta mutuncin dan kasa.',
      voiceScript: 'Sashe na Talatin da Hudu. Ba za a maida ka kare ba! Mutuncinka dole ne a girmama shi. Ba za a azabtar da kai ba, kuma ba za a sa ka aikin bauta ba.',
      category: 'Hakkin Dan Adam',
      tags: ['mutunci', 'ba kare ba', 'dignity', 'torture', 'slavery']
    },
    yo: {
      title: 'Abala 34: ENIYAN KO NI DI AJA! Ọlá Rẹ Jẹ Dandan!',
      summary: 'Abala 34(1)(a) - ENIYAN KO NI DI AJA! Ori laja fun e! A ko gbọdọ fìyà jẹ ọ́, tàbí tẹ̀ ọ́ lórí ba, tàbí mú ọ ṣe ẹrú bí ẹranko.',
      fullText: 'Abala 34(1): Gbogbo eniyan ni ẹtọ pe ki a bu ọla fun iyi rẹ gẹgẹ bi ọmọ eniyan:\n(a) A ko gbọdọ da ẹnikẹni looro tabi tẹ ẹ loju;\n(b) A ko gbọdọ di ẹnikẹni ni ẹrú tabi iṣẹ ẹrú;\n(c) A ko gbọdọ fi dandan mu ẹnikẹni ṣe iṣẹ agbara.',
      misali: 'Apẹẹrẹ "Eniyan Ko Ni Di Aja Lọja": Ti ọlọpa tabi ọmọ ogun ba ni ki o tẹ ẹkun rẹ lẹgbẹẹ titi, tabi ki o mu omi koto, tabi ki oga rẹ ma na ọ: Eyi tako Abala 34! Eniyan ni ọ, iwọ kii ṣe aja!',
      hukunci: 'Ilé-ẹjọ́ ní àṣẹ láti pàṣẹ owó ìtanràn ńlá fún ẹnikẹ́ni tí ó bá tẹ́ ọlá rẹ lójú.',
      voiceScript: 'Abala Ọgbọ̀nle mẹrin. Eniyan ko ni di aja! Ọlá rẹ jẹ dandan. A ko gbọdọ fìyà jẹ ọ́, a ko si gbọdọ sọ ọ di ẹrú.',
      category: 'Ẹtọ Ọmọniyan',
      tags: ['aja', 'iyi', 'ẹru', 'dignity', 'human rights']
    },
    ig: {
      title: 'Ngalaba 34: AGAGHI EME GI KA NKITA! Nsọpụrụ Gị Dị Mkpa!',
      summary: 'Ngalaba 34(1)(a) - AGAGHI EME GI KA NKITA! Ndu gi di mkpa! Agaghị emegbu gị, ma ọ bụ weda gị ala, ma ọ bụ mee gị ohu dịka anụ ọhịa.',
      fullText: 'Ngalaba 34(1): Onye ọ bụla nwere ikike ka a na-asọpụrụ nsọpụrụ ya dịka mmadụ:\n(a) Agaghị ata onye ọ bụla ahụhụ ma ọ bụ weda ya ala;\n(b) Agaghị ejide onye ọ bụla n’ohu;\n(c) Agaghị amanye onye ọ bụla ịrụ ọrụ ike.',
      misali: 'Ihe Nlereanya "Agaghị Eme Gi Ka Nkịta n’Okporo Ụzọ": Ọ bụrụ na ndị uwe ojii ma ọ bụ ndị agha asị gị nọdụ n’ime apiti, ma ọ bụ na nna ukwu gị na-eti gị ihe: Ihe a megidere Ngalaba 34! Ị bụ mmadụ, ị bụghị nkịta!',
      hukunci: 'Ụlọ ikpe nwere ikike inye iwu ka a kwụọ gị nnukwu ego nkwụghachi ụgwọ maka mkparị ọ bụla.',
      voiceScript: 'Ngalaba Iri Atọ na Anọ. Agaghị eme gị ka nkịta! Nsọpụrụ gị dị mkpa. Agaghị emegbu gị ma ọ bụ mee gị ohu.',
      category: 'Ikike Mmadụ',
      tags: ['nkita', 'nsopuru', 'ohu', 'dignity', 'human rights']
    }
  },

  // SECTION 35
  {
    id: 'sec-35',
    sectionNumber: 35,
    englishTitle: 'Right to Personal Liberty',
    chapter: 4,
    chapterTitleEn: 'Chapter IV: Fundamental Human Rights',
    cartoonImage: '/src/assets/images/royal_scales_justice_1791335092540.jpg',
    cartoonCaption: {
      ha: 'Beli kyauta ne a Najeriya! Ba za a kulle ka a caji ofis sama da sa\'o\'i 24 zuwa 48 ba.',
      yo: 'Beli jẹ ọfẹ ni Naijiria! A ko gbọdọ ti ọ mọ ago ọlọpa kọja wakati 24 si 48.',
      ig: 'Mgbapụta (Bail) bụ n’efu! Agaghị akpọchi gị n’ụlọ ọrụ ndị uwe ojii gafere awa 24 ruo 48.'
    },
    ha: {
      title: 'Sashe na 35: Hakkin Samun Yanci - Ba Za A Tsare Ka a Gidan Kaso Banza Ba!',
      summary: 'Duk wanda aka kama dole a gaya masa laifinsa a cikin sa\'o\'i 24, kuma ba za a tsare ka sama da sa\'o\'i 24 zuwa 48 ba tare da an kai ka gaban kotu ba! Beli kyauta ne!',
      fullText: 'Sashe na 35(1): Kowane mutum yana da hakkin yancin kansa.\n\nSashe na 35(2): Kana da hakkin yin shiru har sai ka ga lauyanka.\n\nSashe na 35(4): Idan an kama mutum, dole a kai shi kotu a cikin sa\'o\'i 24 ko 48, in ba haka ba a ba shi beli.',
      misali: 'Misalin "Daren Juma\'a a Caji Ofis": Idan dan sanda ya kama ka ranar Juma\'a yana cewa "sai ranar Litinin za ka ga DPO", ka tuna masa: Sashe na 35 ya ce tsare mutum haka haramun ne!',
      hukunci: 'Duk wanda aka tsare ba bisa ka\'ida ba, kotu za ta sa a ba shi hakuri a fili da kuma biyan shi diyyar miliyoyin kudi.',
      voiceScript: 'Sashe na Talatin da Biyar. Hakkin samun yanci. Beli kyauta ne a Najeriya. Ba za a kulle ka a caji ofis ba tare da an kai ka kotu ba.',
      category: 'Hakkin Dan Adam',
      tags: ['beli', 'caji ofis', 'tsarewa', 'lauya', 'liberty']
    },
    yo: {
      title: 'Abala 35: Ẹtọ Si Ominira - A Ko Gbọdọ Ti Ọ Mọ Ọgba Ẹwọn Lọ́fẹ̀ẹ́!',
      summary: 'Ẹnikẹni ti a ba mu gbọdọ mọ ẹṣẹ rẹ laarin wakati 24, a ko si gbọdọ tii kọja wakati 24 si 48 laisi gbigbe e lọ si kootu! Beli jẹ ọfẹ!',
      fullText: 'Abala 35(1): Gbogbo eniyan ni ẹtọ si ominira ara rẹ.\n\nAbala 35(2): O ni ẹtọ lati dake titi iwọ yoo fi ri agbẹjọro rẹ.\n\nAbala 35(4): Ti a ba mu eniyan, a gbọdọ gbe e lọ si kootu laarin wakati 24 si 48.',
      misali: 'Apẹẹrẹ "Ọjọ Ẹtì ni Ago Ọlọpa": Bí ọlọ́pàá bá mú ọ ní ọjọ́ Ẹtì tí ó sọ pé "àfi Ọjọ́ Ajé kò tó lè rí DPO", rán an létí pé Abala 35 sọ pé bẹ́ẹ̀ kò bófin mu!',
      hukunci: 'Ilé-ẹjọ́ yóò pàṣẹ pé kí wọ́n tọrọ àforíjì ní gbangba kí wọ́n sì san owó ìtanràn fún ẹ.',
      voiceScript: 'Abala Ọgbọ̀nle marun. Ẹtọ si ominira. Beli jẹ ọfẹ ni Naijiria. A ko gbọdọ ti ọ mọ ago ọlọpa lai gbe ọ lọ si kootu.',
      category: 'Ẹtọ Ọmọniyan',
      tags: ['ominira', 'beli', 'olopa', 'agbejọro', 'liberty']
    },
    ig: {
      title: 'Ngalaba 35: Ikike Nnwere Onwe - Agaghị Akpọchi Gị n’Ụlọ Mkpọrọ n’Efu!',
      summary: 'Onye ọ bụla e jidere ga-amata mpụ ya n’ime awa 24, agaghịkwa akpọchi gị gafere awa 24 ruo 48 n’ebughị gị gaa n’ụlọ ikpe! Mgbapụta (Bail) bụ n’efu!',
      fullText: 'Ngalaba 35(1): Onye ọ bụla nwere ikike nke nnwere onwe ya.\n\nNgalaba 35(2): Ị nwere ikike idebe ọnụ gị ruo mgbe ị hụrụ ọka iwu gị.\n\nNgalaba 35(4): Ọ bụrụ na e jide mmadụ, a ga-ebuga ya n’ụlọ ikpe n’ime awa 24 ma ọ bụ 48.',
      misali: 'Ihe Nlereanya "Abalị Fraịde n’Ụlọ Ndị Uwe Ojii": Ọ bụrụ na ndị uwe ojii ejide gị n’abalị Fraịde sị na "ọ bụ ruo Mọnde ka ị ga-ahụ DPO", chetara ya: Ngalaba 35 megidere nke ahụ!',
      hukunci: 'Ụlọ ikpe ga-enye iwu ka a rịọ gị mgbaghara n’ihu ọha ma kwụọ gị nnukwu ego nkwụghachi ụgwọ.',
      voiceScript: 'Ngalaba Iri Atọ na Ise. Ikike nnwere onwe. Mgbapụta bụ n’efu na Naịjirịa. Agaghị akpọchi gị na-ebughị gị gaa n’ụlọ ikpe.',
      category: 'Ikike Mmadụ',
      tags: ['nnwere onwe', 'mgbaputa', 'oka iwu', 'liberty']
    }
  },

  // SECTION 37
  {
    id: 'sec-37',
    sectionNumber: 37,
    englishTitle: 'Right to Privacy',
    chapter: 4,
    chapterTitleEn: 'Chapter IV: Fundamental Human Rights',
    cartoonImage: '/src/assets/images/kare_vs_makaranta_1791335073137.jpg',
    cartoonCaption: {
      ha: 'Sirrin wayarka da gidanka hakkin ka ne, dan sanda ba shi da ikon duba WhatsApp ba tare da takardar kotu ba.',
      yo: 'Aṣiri foonu ati ile rẹ jẹ ẹtọ rẹ, ọlọpa ko lẹtọ lati wo WhatsApp laisi iwe aṣẹ kootu.',
      ig: 'Nzuzo ekwentị na ụlọ gị bụ ikike gị, ndị uwe ojii enweghị ikike ilele WhatsApp gị n’enweghị ikike ụlọ ikpe.'
    },
    ha: {
      title: 'Sashe na 37: Hakkin Sirrin Rayuwa - Kada Wani Ya Bude Wayarka Ko Gidanka!',
      summary: 'Sirrin gidanka, wayarka, sakonnin WhatsApp, da wasikunka na sirri ne. Babu mai ikon shiga gidanka ko bincikar wayarka ba tare da izinin kotu (Search Warrant) ba!',
      fullText: 'Sashe na 37: An tabbatar da kariya ga sirrin yan kasa, gidajensu, wasikunsu, tattaunawar waya da sadarwar telegiram.',
      misali: 'Misalin "Tsayarwa a Titin Shiga Gari": Idan jami\'in tsaro ya ce "Miko wayarka in duba WhatsApp da hotunanka", wannan ya karya Sashe na 37! Ba shi da wannan ikon.',
      hukunci: 'Shiga gidan mutum ko binciken wayarsa ba bisa ka\'ida ba babban laifi ne da za a iya maka jami\'in a kotu.',
      voiceScript: 'Sashe na Talatin da Bakwai. Sirrin rayuwa da gida. Wayarka da sakonninka na sirri ne. Ba wanda ya isa ya bincika ba tare da izinin kotu ba.',
      category: 'Hakkin Dan Adam',
      tags: ['sirri', 'waya', 'whatsapp', 'privacy', 'search warrant']
    },
    yo: {
      title: 'Abala 37: Ẹtọ Si Àṣírí - Ẹnikẹ́ni Kò Gbọdọ̀ Ṣí Fóònù Tàbí Ilé Rẹ!',
      summary: 'Àṣírí ilé rẹ, fóònù rẹ, àwọn iṣẹ́ WhatsApp, àti lẹ́tà rẹ jẹ́ ti ara rẹ. Kò sí ẹni tí ó lẹ́tọ̀ọ́ láti wọ inú ilé rẹ tàbí yẹ fóònù rẹ wò láìsí ìwé àṣẹ ilé-ẹjọ́ (Warrant)!',
      fullText: 'Abala 37: A ṣe ìdánilójú ààbò fún àṣírí àwọn ará ìlú, ilé wọn, lẹ́tà wọn, àti ìbánisọ̀rọ̀ lórí fóònù.',
      misali: 'Apẹẹrẹ "Dídúró lójú títì": Bí ọlọ́pàá bá sọ pé "Mú fóònù rẹ wá kí n wo WhatsApp ati àwọn àwòrán rẹ", ó ti ba Abala 37 jẹ́! Kò lẹ́tọ̀ọ́ sí i.',
      hukunci: 'Lílọ sinu ile eniyan tabi yiyẹ foonu rẹ wo lai gba aṣẹ jẹ ẹṣẹ nla ti a le pe ọlọpa na lẹjọ le lori.',
      voiceScript: 'Abala Ọgbọ̀nle meje. Ẹtọ si aṣiri. Foonu rẹ ati iṣẹ rẹ jẹ ti ara rẹ. Ko si ẹni to lẹtọ lati yẹ ẹ wo lai gba aṣẹ kootu.',
      category: 'Ẹtọ Ọmọniyan',
      tags: ['asiri', 'foonu', 'whatsapp', 'ile', 'privacy']
    },
    ig: {
      title: 'Ngalaba 37: Ikike Nzuzo - Ọ Dịghị Onye Ga-Emepe Ekwentị Ma Ọ Bụ Ụlọ Gị!',
      summary: 'Nzuzo nke ụlọ gị, ekwentị gị, ozi WhatsApp na akwụkwọ ozi gị bụ nke onwe gị. Ọ dịghị onye nwere ikike ịbanye n’ụlọ gị ma ọ bụ nyochaa ekwentị gị n’enweghị akwụkwọ ikike ụlọ ikpe (Warrant)!',
      fullText: 'Ngalaba 37: E chebere nzuzo nke ụmụ amaala, ụlọ ha, akwụkwọ ozi ha na nkwukọrịta ekwentị ha.',
      misali: 'Ihe Nlereanya "Ịkwụsị n’Okporo Ụzọ": Ọ bụrụ na onye uwe ojii asị "Weta ekwentị gị ka m lelee WhatsApp na foto gị", nke ahụ mebiri Ngalaba 37! O nweghị ikike ahụ.',
      hukunci: 'Ịbanye n’ụlọ mmadụ ma ọ bụ nyochaa ekwentị ya n’ụzọ na-ezighị ezi bụ nnukwu mpụ a ga-akpụpụ onye ahụ n’ụlọ ikpe.',
      voiceScript: 'Ngalaba Iri Atọ na Asaa. Ikike nzuzo. Ekwentị gị na ozi gị bụ nzuzo. Ọ dịghị onye nwere ikike inyocha ya n’enweghị akwụkwọ ikike.',
      category: 'Ikike Mmadụ',
      tags: ['nzuzo', 'ekwenti', 'whatsapp', 'ulo', 'privacy']
    }
  },

  // SECTION 39 - WHISTLEBLOWING & FREEDOM OF SPEECH
  {
    id: 'sec-39',
    sectionNumber: 39,
    englishTitle: 'Right to Freedom of Expression and Whistleblowing',
    chapter: 4,
    chapterTitleEn: 'Chapter IV: Fundamental Human Rights',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: {
      ha: 'Tona asirin barayin gwamnati: Doka ta baka damar fadin gaskiya da samun 5% lada!',
      yo: 'Tú àṣírí àwọn olè jáde: Òfin fún ọ ní àṣẹ láti sọ òtítọ́ kí o sì gba 5% èrè!',
      ig: 'Kpughee ndị ohi ọha: Iwu nyere gị ikike ikwu eziokwu ma nweta 5% ụgwọ ọrụ!'
    },
    ha: {
      title: 'Sashe na 39: Yancin Fadin Albarkacin Baki da Tona Asiri!',
      summary: 'Kowane dan kasa yana da hakkin fadin ra\'ayinsa da tona asirin azzalumai. Wannan sashe tare da dokar FOI Act 2011 sun baka kariya da samun 5% na kudin da aka kwato!',
      fullText: 'Sashe na 39(1): Kowane mutum yana da hakkin yancin bayyana ra\'ayi, gami da yancin karba da yada bayanai ba tare da tsangwama ba.',
      misali: 'Misalin "Tona Asirin Dan Kwangilar Karya": Idan ka ga an ba dan kwangila miliyan dari don gyara asibiti amma bai yi ba, ka tona asirinsa, doka na tare da kai!',
      hukunci: 'Kare duk wani mai tona asiri (Whistleblower protection) da ba shi kaso 5% na kudin da aka kwato.',
      voiceScript: 'Sashe na Talatin da Tara. Yancin fadin albarkacin baki da tona asiri. Fadi gaskiya, doka ta baka kariya da lada.',
      category: 'Maisanya Ido',
      tags: ['magana', 'asiri', 'tona asiri', 'jarida', 'whistleblower']
    },
    yo: {
      title: 'Abala 39: Ẹtọ Ọrọ Sisọ ati Titú Àṣírí Jade!',
      summary: 'Gbogbo eniyan lo ni ẹtọ lati sọ ero rẹ ati lati tú àṣírí awọn olè ijọba jade. Abala yii pẹlu ofin FOI Act 2011 fun ọ ni aabo ati 5% ti owo ti a ba gba pada!',
      fullText: 'Abala 39(1): Gbogbo eniyan ni ẹtọ si ominira lati sọ ero rẹ, lati gba ati lati tan iroyin kalẹ laisi idiwọ.',
      misali: 'Apẹẹrẹ "Kọntirakito Ole": Ti wọn ba fun kọntirakito ni ọgọrun miliọnu lati tun ile-iwosan ṣe ti ko si ṣe e, ti o ba tú àṣírí rẹ jade, ofin wa pẹlu rẹ!',
      hukunci: 'Aabo to daju fun olutọju oju (Whistleblower) ati sisan 5% ti owo ti a ba gba pada fun un.',
      voiceScript: 'Abala Ọgbọ̀nle mẹsan. Ẹtọ ọrọ sisọ ati titú àṣírí jade. Sọ otitọ, ofin daabobo ẹ o si fun ẹ ni ere.',
      category: 'Olutọju Oju',
      tags: ['oro siso', 'asiri', 'iroyin', 'whistleblower']
    },
    ig: {
      title: 'Ngalaba 39: Ikike Ikwu Okwu na Ikpughe Ndị Ohi!',
      summary: 'Onye ọ bụla nwere ikike ikwupụta echiche ya na ikpughe ndị ohi gọọmentị. Ngalaba a tinyere iwu FOI Act 2011 na-echebe gị ma na-enye gị 5% nke ego e nwetaghachiri!',
      fullText: 'Ngalaba 39(1): Onye ọ bụla nwere ikike nke nnwere onwe ikwupụta echiche ya, ịnata na ịgbasa ozi n’enweghị nnyonye anya.',
      misali: 'Ihe Nlereanya "Onye Ọrụ Ngo nke Zurunụ Ego": Ọ bụrụ na e nyere onye ọrụ ngo nde narị maka idozi ụlọ ọgwụ ma o meghị ya, ma ị kpughee ya, iwu nọnyeere gị!',
      hukunci: 'Nchedo zuru oke maka onye na-ekpughe ihe ọjọọ (Whistleblower) na inye ya 5% nke ego e nwetaghachiri.',
      voiceScript: 'Ngalaba Iri Atọ na Itoolu. Ikike ikwu okwu na ikpughe ihe ọjọọ. Kpọọ ndị ohi n’anwụ, iwu nọnyeere gị.',
      category: 'Onye Na-Eche Nche',
      tags: ['okwu', 'ohere', 'ohi', 'ikpughe', 'whistleblower']
    }
  },

  // SECTION 46
  {
    id: 'sec-46',
    sectionNumber: 46,
    englishTitle: 'Special Jurisdiction of High Court and Legal Aid',
    chapter: 4,
    chapterTitleEn: 'Chapter IV: Fundamental Human Rights',
    cartoonImage: '/src/assets/images/sardauna_cartoon_law_1791335062500.jpg',
    cartoonCaption: {
      ha: 'Babbar Kotu ita ce garkuwar talakawa domin kwato hakkinsu, tare da lauyoyi kyauta.',
      yo: 'Ile-ẹjọ giga ni abo awọn talaka lati gba ẹtọ wọn, pẹlu awọn agbẹjọro ọfẹ.',
      ig: 'Ụlọ ikpe kachasị elu bụ ọta ndị ogbenye iji nwetaghachi ikike ha, ya na ndị ọka iwu n’efu.'
    },
    ha: {
      title: 'Sashe na 46: Makomar Talaka a Kotu - Hanyar Karbar Hakki!',
      summary: 'Idan aka zalunce ka a karkashin Sashe na 33 zuwa 45, wannan sashe ya baka damar zuwa Babbar Kotu (High Court) kai tsaye! Kuma akwai lauyoyi kyauta (Legal Aid) domin ɗan Nigeria!',
      fullText: 'Sashe na 46(1): Duk wanda ya zargi cewa an karya wani hakkinsa na dan adam, yana da damar shigar da kara a Babbar Kotu ta Jiha.\n\nSashe na 46(4): Majalisa za ta samar da kudaden taimakon lauya kyauta (Legal Aid Council) ga talakawa.',
      misali: 'Misalin "Alkalin Talakawa": Ba sai kana da miliyoyin kudi ba. Hukumar Legal Aid Council tana nan don ba wa talaka lauya kyauta a karkashin Sashe na 46!',
      hukunci: 'Babbar Kotu za ta ba da umarnin sako mutum nan take da kuma tilasta biyan shi diyyar kudi.',
      voiceScript: 'Sashe na Arba\'in da Shida. Makomar talaka a kotu. Kana da damar zuwa Babbar Kotu kai tsaye, kuma akwai lauyoyin kyauta da za su tsaya maka.',
      category: 'Hakkin Dan Adam',
      tags: ['kotu', 'lauya kyauta', 'legal aid', 'high court']
    },
    yo: {
      title: 'Abala 46: Abo Talaka ni Kootu - Ọna Lati Gba Ẹtọ Rẹ!',
      summary: 'Bí wọ́n bá tẹ̀ ẹ́ lójú lábẹ́ Abala 33 dé 45, abala yìí fún ọ ní àṣẹ láti lọ sí Ilé-Ẹjọ́ Gíga (High Court) tààràtà! Àti pé àwọn agbẹ́jọ́rò ọ̀fẹ́ (Legal Aid) wà fún àwọn tálákà!',
      fullText: 'Abala 46(1): Ẹnikẹni ti o ba fura pe wọn ti tẹ ẹtọ ọmọniyan rẹ loju lẹtọ lati fi ẹsun kan ile-ẹjọ giga lẹsẹkẹsẹ.\n\nAbala 46(4): Ile-igbimọ aṣofin yoo pese owo lati fun talaka ni agbẹjọro ọfẹ.',
      misali: 'Apẹẹrẹ "Idajọ Ọfẹ": Iwọ ko nilo miliọnu owo. Ajọ Legal Aid Council wa lati fun ọ ni agbẹjọro ọfẹ lati gba ẹtọ rẹ!',
      hukunci: 'Ilé-ẹjọ́ gíga yóò pàṣẹ kí wọ́n tú ọ sílẹ̀ lẹ́sẹ̀kẹsẹ̀ kí wọ́n sì san owó ìtanràn fún ẹ.',
      voiceScript: 'Abala Ogójìle mẹfa. Abo talaka ni ile-ẹjọ. O lẹtọ lati lọ si ile-ẹjọ giga taara, awọn agbẹjọro ọfẹ si wa fun ọ.',
      category: 'Ẹtọ Ọmọniyan',
      tags: ['kootu', 'agbejọro ọfẹ', 'legal aid', 'high court']
    },
    ig: {
      title: 'Ngalaba 46: Ebe Ndị Ogbenye Na-Agbaba n’Ụlọ Ikpe - Ụzọ Ịnweta Ikike!',
      summary: 'Ọ bụrụ na e megbuo gị n’okpuru Ngalaba 33 ruo 45, ngalaba a nyere gị ohere ịga Ụlọ Ikpe Kasị Elu (High Court) ozugbo! Enwekwara ndị ọka iwu n’efu (Legal Aid) maka ndị ogbenye!',
      fullText: 'Ngalaba 46(1): Onye ọ bụla chere na e mebiri ikike ya nwere ike ịga Ụlọ Ikpe Kasị Elu ozugbo.\n\nNgalaba 46(4): Ndị omeiwu ga-enye ego iji nye ndị ogbenye ndị ọka iwu n’efu.',
      misali: 'Ihe Nlereanya "Ọka Iwu n’Efu": Ọ dịghị mkpa ka ị nwee nde ego. Ụlọ ọrụ Legal Aid Council nọ ebe a iji nye gị ọka iwu n’efu!',
      hukunci: 'Ụlọ ikpe ga-enye iwu ka a tọhapụ gị ozugbo ma kwụọ gị ụgwọ nkwụghachi.',
      voiceScript: 'Ngalaba Iri Anọ na Isii. Ụlọ ikpe maka ndị ogbenye. Ị nwere ike ịga Ụlọ Ikpe Kasị Elu ozugbo, nwee ndị ọka iwu n’efu.',
      category: 'Ikike Mmadụ',
      tags: ['ulo ikpe', 'oka iwu efu', 'legal aid', 'high court']
    }
  },

  // SECTION 308
  {
    id: 'sec-308',
    sectionNumber: 308,
    englishTitle: 'Restrictions on Legal Proceedings (Immunity Clause)',
    chapter: 6,
    chapterTitleEn: 'Chapter VI: The Executive',
    cartoonImage: '/src/assets/images/tulu_ya_fashe_1791335082988.jpg',
    cartoonCaption: {
      ha: 'Rigakafin mulki ba zai dawwama ba: Ranar sauka tulu ya fashe!',
      yo: 'Aabo ijọba ko le tọjọ: Ọjọ ti gomina ba sọkalẹ, ikoko ti fọ!',
      ig: 'Nchebe ọchịchị agaghị adịru mgbe ebighị ebi: Ụbọchị onye ndu rịdatara, ite agbawaala!'
    },
    ha: {
      title: 'Sashe na 308: Rigakafin Shari\'a - Shugaban Kasa da Gwamnoni Ba Alloli Ba Ne!',
      summary: 'Ba za a iya maka Shugaban Kasa ko Gwamna a kotu ba YAYIN DA SUKE KAN MULKI. Amma da zarar wa\'adinsu ya kare, tulu ya fashe! Za a iya daure su!',
      fullText: 'Sashe na 308(1): Ba za a kafa ko a ci gaba da wata kara ta laifi ko ta farar hula a kan mutumin da yake rike da ofishin Shugaban Kasa ko Gwamna a lokacin da yake kan mulki ba.\n\nSashe na 308(3): Wannan rigakafi yana aiki ne kawai a yayin da yake kan kujerar mulki. Da zarar ya sauka, kariya ta fadi!',
      misali: 'Misalin "Ranar Sauka Daga Mulki": Lokacin da gwamna yake mulki yana ta kwasar kudi. Amma da karfe 12:01 na ranar da ya sauka, EFCC na jiransa a waje domin rigakafi ya kare!',
      hukunci: 'Ana bincikar su a asirce, kuma ana gurfanar da su a gaban kotu da zarar sun sauka daga mulki.',
      voiceScript: 'Sashe na Dari Uku da Takwas. Rigakafin shari\'a na shugabanni. Shugaban kasa da gwamnoni ba a maka su kotu yayin da suke mulki, amma da zarar sun sauka, doka za ta kama su.',
      category: 'Masu Rusa Kasa',
      tags: ['rigakafi', 'gwamna', 'shugaba', 'immunity', 'efcc']
    },
    yo: {
      title: 'Abala 308: Aabo Lọwọ Idajọ - Ààrẹ ati Àwọn Gómìnà Kìí Ṣe Ọlọ́run!',
      summary: 'A ko le pe Ààrẹ tabi Gómìnà lẹjọ NIGBA TI WỌN WA LORI IPÒ. Ṣugbọn ni kete ti akoko wọn ba pari, ìkòkò ti fọ́! A le tì wọ́n mọ́ ẹ̀wọ̀n!',
      fullText: 'Abala 308(1): A ko gbọdọ bẹrẹ tabi tẹsiwaju ẹsun eyikeyi si ẹni ti o wa ni ipo Aare tabi Gomina nigba ti o wa lori alefa.\n\nAbala 308(3): Aabo yii wulo nikan nigba ti wọn wa lori ijọba. Ni kete ti wọn ba kuro, aabo ti lọ!',
      misali: 'Apẹẹrẹ "Ọjọ Idalẹkun Agbara": Nigba ti gomina wa lori ijọba ti o n ji owo. Ṣugbọn ni agogo mejila kọja iṣẹju kan ni ọjọ ti o kuro lori ipo, EFCC yoo duro de e nitori aabo ti pari!',
      hukunci: 'A le ṣe iwadii wọn ni ikọkọ, ki a si gbe wọn lọ si ile-ẹjọ ni kete ti wọn ba fi ipo silẹ.',
      voiceScript: 'Abala Ọọdunrunle mẹjọ. Aabo lọwọ idajọ. Aare ati awọn gomina ko ni aabo mọ ni kete ti wọn ba kuro lori ijọba.',
      category: 'Awọn ti n Pa Ilu Run',
      tags: ['aabo', 'gomina', 'aare', 'immunity', 'efcc']
    },
    ig: {
      title: 'Ngalaba 308: Nchebe Pụọ n’Ikpe - Onye Isi Ala na Ndị Gọvanọ Abụghị Chi!',
      summary: 'Agaghị akpụpụ Onye Isi Ala ma ọ bụ Gọvanọ n’ụlọ ikpe MGBE HA NỌ N’ỌCHỊCHỊ. Mana ozugbo oge ha gwụrụ, ite agbawaala! Enwere ike ịtụba ha n’ụlọ mkpọrọ!',
      fullText: 'Ngalaba 308(1): Agaghị eme mkpesa ma ọ bụ gaa n’ihu n’ikpe mpụ megide onye nọ n’ọkwa Onye Isi Ala ma ọ bụ Gọvanọ mgbe ọ nọ n’ọchịchị.\n\nNgalaba 308(3): Nchebe a na-adị irè naanị mgbe ha nọ n’ọkwa. Ozugbo ha rịdatara, nchebe agwụla!',
      misali: 'Ihe Nlereanya "Ụbọchị Ọchịchị Gwụrụ": Mgbe gọvanọ nọ n’ọchịchị na-ezu ego. Mana n’elekere 12:01 nke abalị mgbe ọchịchị ya gwụrụ, EFCC ga-anọ ebe ahụ na-eche ya n’ihi na nchebe ahụ agwụla!',
      hukunci: 'A na-enyocha ha na nzuzo ma kpụpụ ha n’ụlọ ikpe ozugbo ha rịdatara n’ọkwa.',
      voiceScript: 'Ngalaba Narị Atọ na Asatọ. Nchebe ndị ndú. Onye isi ala na ndị gọvanọ anaghị enwe nchebe ọzọ ozugbo ha rịdatara n’ọchịchị.',
      category: 'Ndị Na-Ebibi Obodo',
      tags: ['nchebe', 'govano', 'onye isi ala', 'immunity', 'efcc']
    }
  }
];

import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  Search,
  ChevronRight,
  Sparkles,
  Waves,
  CheckCircle2,
  Layers
} from 'lucide-react';
import {
  FULL_CONSTITUTION_CHAPTERS,
  FullBookSection,
  ALL_320_SECTIONS_LIST
} from '../data/fullConstitutionBook';
import { SupportedLanguage } from '../types/constitution';
import { speechService, SpeechStatus, VoicePersona } from '../services/speechService';

export type BookReadingLanguage = 'en' | SupportedLanguage;

interface CompleteLawLibraryProps {
  speechStatus: SpeechStatus;
  initialLang?: SupportedLanguage;
}

export const CompleteLawLibrary: React.FC<CompleteLawLibraryProps> = ({
  speechStatus,
  initialLang = 'ha'
}) => {
  // 0 means All 320 Sections view; 1-8 corresponds to Chapters I-VIII
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(4);
  const [readingLang, setReadingLang] = useState<BookReadingLanguage>(initialLang);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const activeChapter = selectedChapterNumber === 0
    ? null
    : FULL_CONSTITUTION_CHAPTERS.find((c) => c.chapterNumber === selectedChapterNumber) || FULL_CONSTITUTION_CHAPTERS[0];

  const sourceSections: FullBookSection[] = selectedChapterNumber === 0
    ? ALL_320_SECTIONS_LIST
    : (activeChapter ? activeChapter.sections : ALL_320_SECTIONS_LIST);

  const filteredSections = sourceSections.filter((sec) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      sec.sectionNumber.toString() === q ||
      sec.titleEn.toLowerCase().includes(q) ||
      sec.originalTextEn.toLowerCase().includes(q) ||
      sec.hausaTranslation.toLowerCase().includes(q) ||
      sec.yorubaTranslation.toLowerCase().includes(q) ||
      sec.igboTranslation.toLowerCase().includes(q)
    );
  });

  const handleSpeakSection = (sec: FullBookSection) => {
    let textToRead = '';
    let langForVoice: SupportedLanguage = 'ha';

    if (readingLang === 'en') {
      textToRead = `Section ${sec.sectionNumber}: ${sec.titleEn}. ${sec.originalTextEn}`;
      langForVoice = 'ha';
    } else if (readingLang === 'yo') {
      textToRead = `Abala ${sec.sectionNumber}: ${sec.titleEn}. ${sec.yorubaTranslation}`;
      langForVoice = 'yo';
    } else if (readingLang === 'ig') {
      textToRead = `Ngalaba ${sec.sectionNumber}: ${sec.titleEn}. ${sec.igboTranslation}`;
      langForVoice = 'ig';
    } else {
      textToRead = `Sashe na ${sec.sectionNumber}: ${sec.titleEn}. ${sec.hausaTranslation}`;
      langForVoice = 'ha';
    }

    speechService.speak(`book-sec-${sec.sectionNumber}`, textToRead, langForVoice);
  };

  const handlePersonaToggle = (p: VoicePersona) => {
    speechService.setPersona(p);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Royal Leather Bound Book Banner Header */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-800/40 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 p-6 sm:p-8 shadow-2xl shadow-black/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-black/60 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-widest">
                CIKAKKEN LITTAFI · ORIGINAL 1999 LAW LIBRARY
              </span>
              <span className="text-xs text-neutral-400">Chapters I – VIII Verbatim</span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-amber-100 tracking-tight">
              CONSTITUTION OF THE FEDERAL REPUBLIC OF NIGERIA 1999
            </h1>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Wannan shine ainihin littafin dokokin koli na Najeriya (Full verbatim English statutory law), tare da fassarar kowane sashe a Hausa, Yoruba, da Igbo da muryoyin mutane na musamman.
            </p>
          </div>

          {/* Voice Persona Controls & Sapele Water Ambient Tone */}
          <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-600/30 backdrop-blur-md space-y-2.5 shrink-0">
            <div className="text-[11px] font-bold text-amber-400 flex items-center justify-between gap-3">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Zaɓin Muryar Mutum (Human Voice):</span>
              </span>
              <button
                onClick={() => speechService.toggleWaterSound()}
                title="Sautin Ruwan Sapele a Bango (Soft Sapele Water Ambient)"
                className={`p-1 px-2 rounded flex items-center gap-1 text-[10px] ${
                  speechStatus.waterSound
                    ? 'text-emerald-400 bg-emerald-500/20'
                    : 'text-neutral-500 bg-neutral-800'
                }`}
              >
                <Waves className="w-3 h-3" />
                <span>{speechStatus.waterSound ? 'Sapele Water: ON' : 'Water: OFF'}</span>
              </button>
            </div>

            {/* Persona Switcher Chips */}
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handlePersonaToggle('aishah')}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all min-h-[36px] ${
                  speechStatus.persona === 'aishah'
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow'
                    : 'bg-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                🎙️ A'ishah (Yar Kano)
              </button>

              <button
                onClick={() => handlePersonaToggle('alajah')}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all min-h-[36px] ${
                  speechStatus.persona === 'alajah'
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow'
                    : 'bg-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                🎙️ Alajah (Yoruba)
              </button>

              <button
                onClick={() => handlePersonaToggle('ngozi')}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all min-h-[36px] ${
                  speechStatus.persona === 'ngozi'
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow'
                    : 'bg-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                🎙️ Ngozi (Igbo)
              </button>

              <button
                onClick={() => handlePersonaToggle('sardauna')}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all min-h-[36px] ${
                  speechStatus.persona === 'sardauna'
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow'
                    : 'bg-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                👨🏾 Sardauna (Elder)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Law Book Reader Shell */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Table of Chapters (Spine of the Book) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Jerin Babobi (Table of Contents):</span>
            </h3>

            <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
              {/* Option to view all 320 sections at once */}
              <button
                onClick={() => {
                  setSelectedChapterNumber(0);
                  setSearchFilter('');
                }}
                className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between gap-2 min-h-[44px] ${
                  selectedChapterNumber === 0
                    ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200 shadow-md ring-1 ring-emerald-500/40'
                    : 'bg-neutral-950/60 hover:bg-neutral-800 border-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>DUKKAN SASHE 320 (ALL 320)</span>
                  </div>
                  <div className="text-xs font-semibold truncate text-white">
                    Complete 320 Sections Library
                  </div>
                  <div className="text-[10px] text-neutral-400 truncate">
                    100% Offline Cached · Chapters I – VIII
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 ${
                    selectedChapterNumber === 0 ? 'text-emerald-400' : 'text-neutral-600'
                  }`}
                />
              </button>

              {FULL_CONSTITUTION_CHAPTERS.map((chap) => {
                const isSelected = chap.chapterNumber === selectedChapterNumber;
                return (
                  <button
                    key={chap.chapterNumber}
                    onClick={() => {
                      setSelectedChapterNumber(chap.chapterNumber);
                      setSearchFilter('');
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between gap-2 min-h-[44px] ${
                      isSelected
                        ? 'bg-amber-950/40 border-amber-600/50 text-amber-200 shadow-md'
                        : 'bg-neutral-950/60 hover:bg-neutral-800 border-neutral-800 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono font-bold text-amber-400 uppercase">
                        {chap.romanNumeral}
                      </div>
                      <div className="text-xs font-semibold truncate text-white">
                        {chap.titleEn}
                      </div>
                      <div className="text-[10px] text-neutral-400 truncate">
                        {chap.titleHa}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-amber-400' : 'text-neutral-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Active Chapter Content with 4-Language Switcher */}
        <div className="lg:col-span-8 space-y-4">
          {/* Chapter Banner & In-Book Language Switcher */}
          <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {selectedChapterNumber === 0 ? 'COMPLETE LAW BOOK' : activeChapter?.romanNumeral}
                </span>
                <h2 className="font-display font-black text-xl text-white">
                  {selectedChapterNumber === 0
                    ? 'All 320 Sections (Dukkan Sashe 320 na Kundin Mulki)'
                    : activeChapter?.titleEn}
                </h2>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {selectedChapterNumber === 0
                    ? 'Dukkan sashe 320 na 1999 Constitution suna samuwa 100% Offline a wayarka tare da fassarar Hausa, Yoruba, Igbo da Turanci.'
                    : activeChapter?.descriptionEn}
                </p>
              </div>

              {/* 4-Language Selector Inside the Book */}
              <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-700 shrink-0">
                <button
                  onClick={() => setReadingLang('en')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    readingLang === 'en'
                      ? 'bg-amber-500 text-neutral-950 shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  🇬🇧 ENGLISH
                </button>
                <button
                  onClick={() => setReadingLang('ha')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    readingLang === 'ha'
                      ? 'bg-emerald-500 text-neutral-950 shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  🇳🇬 HAUSA
                </button>
                <button
                  onClick={() => setReadingLang('yo')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    readingLang === 'yo'
                      ? 'bg-emerald-500 text-neutral-950 shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  🇳🇬 YORUBA
                </button>
                <button
                  onClick={() => setReadingLang('ig')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    readingLang === 'ig'
                      ? 'bg-emerald-500 text-neutral-950 shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  🇳🇬 IGBO
                </button>
              </div>
            </div>

            {/* Quick search inside this chapter */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Nemo a cikin wannan babin (misali: Section number ko kalma)..."
                className="w-full bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* List of Sections in the Chapter */}
          <div className="space-y-4">
            {filteredSections.map((sec) => {
              const isSpeakingThis =
                speechStatus.activeId === `book-sec-${sec.sectionNumber}` &&
                speechStatus.isPlaying;

              let contentToShow = sec.originalTextEn;
              let contentLabel = 'ORIGINAL STATUTORY LAW TEXT (VERBATIM)';
              let labelColor = 'text-amber-400';

              if (readingLang === 'ha') {
                contentToShow = sec.hausaTranslation;
                contentLabel = 'FASSARA MAI SAUKI (HARSHEN HAUSA)';
                labelColor = 'text-emerald-400';
              } else if (readingLang === 'yo') {
                contentToShow = sec.yorubaTranslation;
                contentLabel = 'ITUMỌ RỌRÙN (ÈDÈ YORÙBÁ)';
                labelColor = 'text-emerald-400';
              } else if (readingLang === 'ig') {
                contentToShow = sec.igboTranslation;
                contentLabel = 'NTỤGHARỊ DỊ MFE (ASỤSỤ IGBO)';
                labelColor = 'text-emerald-400';
              }

              return (
                <div
                  key={sec.sectionNumber}
                  id={`book-sec-${sec.sectionNumber}`}
                  className={`rounded-2xl border transition-all p-5 ${
                    isSpeakingThis
                      ? 'bg-neutral-900 border-amber-500 shadow-xl shadow-amber-950/50'
                      : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {/* Section Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20 text-xs">
                        Section {sec.sectionNumber}
                      </span>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {sec.titleEn}
                      </h4>
                    </div>

                    {/* Human Voice Button */}
                    <button
                      onClick={() => handleSpeakSection(sec)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all min-h-[44px] ${
                        isSpeakingThis
                          ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      <Volume2 className="w-4 h-4 fill-current" />
                      <span>{isSpeakingThis ? 'Dakata ⏸️' : 'Saurara da Murya 🔊'}</span>
                    </button>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-3">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${labelColor}`}>
                      {contentLabel}
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-line font-serif">
                      {contentToShow}
                    </div>

                    {/* Show simple summary snippet if reading original English */}
                    {readingLang === 'en' && (
                      <div className="p-3 rounded-xl bg-neutral-950/50 border border-neutral-800 text-xs text-neutral-400">
                        <strong className="text-emerald-400 block mb-1">
                          Fassara Mai Sauki:
                        </strong>
                        {sec.hausaTranslation}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {filteredSections.length === 0 && (
              <div className="p-8 text-center bg-neutral-900 rounded-2xl border border-neutral-800">
                <p className="text-sm text-neutral-400">
                  Babu sashen da ya dace da kalmar da ka bincika a cikin wannan babin.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

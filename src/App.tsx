import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  BookOpen,
  MessageSquareText,
  Bookmark,
  Printer,
  ShieldAlert,
  Phone,
  Mail,
  Volume2,
  HelpCircle,
  X,
  Globe,
  Library,
  Award,
  QrCode,
  Newspaper
} from 'lucide-react';
import { TRI_LINGUAL_SECTIONS } from './data/triLingualData';
import { SupportedLanguage, LANGUAGE_CONFIGS, TriLingualSection } from './types/constitution';
import { UI_TRANSLATIONS } from './data/uiTranslations';
import { searchIndexService } from './services/searchIndexService';
import { speechService, SpeechStatus } from './services/speechService';
import { Header, MainTabType } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { WhistleblowerModal } from './components/WhistleblowerModal';
import { CartoonModal } from './components/CartoonModal';
import { AiAssistantTab } from './components/AiAssistantTab';
import { PrintPdfView } from './components/PrintPdfView';
import { CompleteLawLibrary } from './components/CompleteLawLibrary';
import { ConstitutionQuizTab } from './components/ConstitutionQuizTab';
import { DailyLegalBulletinTab } from './components/DailyLegalBulletinTab';
import { VoiceStudioModal } from './components/VoiceStudioModal';
import { ShareQrModal } from './components/ShareQrModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAInstallButton } from './components/PWAInstallButton';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('constitution_app_lang') as SupportedLanguage;
      if (saved && (saved === 'ha' || saved === 'yo' || saved === 'ig')) {
        return saved;
      }
      if (typeof navigator !== 'undefined' && navigator.language) {
        const bl = navigator.language.toLowerCase();
        if (bl.startsWith('yo')) return 'yo';
        if (bl.startsWith('ig')) return 'ig';
        if (bl.startsWith('ha')) return 'ha';
      }
    } catch {
      // default
    }
    return 'ha';
  });

  const [activeTab, setActiveTab] = useState<MainTabType>('sections');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quizSectionNumber, setQuizSectionNumber] = useState<number>(34);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('constitution_favs');
      return saved ? JSON.parse(saved) : ['sec-34', 'sec-14'];
    } catch {
      return ['sec-34', 'sec-14'];
    }
  });

  const [speechStatus, setSpeechStatus] = useState<SpeechStatus>(speechService.getStatus());
  const [isWhistleblowerOpen, setIsWhistleblowerOpen] = useState<boolean>(false);
  const [isVoiceStudioOpen, setIsVoiceStudioOpen] = useState<boolean>(false);
  const [isShareQrOpen, setIsShareQrOpen] = useState<boolean>(false);
  const [selectedCartoonSection, setSelectedCartoonSection] = useState<TriLingualSection | null>(null);

  // Theme state persisted in localStorage (Dark / Light mode)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('constitution_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    } catch {}
    return 'dark';
  });

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('constitution_theme', theme);
      if (theme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const ui = UI_TRANSLATIONS[currentLang];
  const langConfig = LANGUAGE_CONFIGS[currentLang];

  useEffect(() => {
    try {
      localStorage.setItem('constitution_app_lang', currentLang);
      document.title = `${langConfig.appName} | AVAR Royal Family`;
    } catch (e) {
      console.error(e);
    }
  }, [currentLang, langConfig]);

  useEffect(() => {
    const unsubscribe = speechService.subscribe((status) => {
      setSpeechStatus(status);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('constitution_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setCurrentLang(newLang);
    speechService.setLanguage(newLang);
  };

  const categories = [
    { key: 'all', label: ui.cats.all },
    { key: 'humanRights', label: ui.cats.humanRights },
    { key: 'peaceSecurity', label: ui.cats.peaceSecurity },
    { key: 'economy', label: ui.cats.economy },
    { key: 'whistleblower', label: ui.cats.whistleblower },
    { key: 'powerAbuse', label: ui.cats.powerAbuse },
    { key: 'governance', label: ui.cats.governance }
  ];

  const filteredSections = useMemo(() => {
    let list: TriLingualSection[] = [];

    if (searchQuery.trim()) {
      list = searchIndexService.search(searchQuery, currentLang);
    } else {
      list = TRI_LINGUAL_SECTIONS;
    }

    return list.filter((sec) => {
      if (selectedCategory !== 'all') {
        const catLabel = categories.find((c) => c.key === selectedCategory)?.label;
        const currentCat = sec[currentLang].category;
        if (catLabel && currentCat !== catLabel) {
          return false;
        }
      }
      if (activeTab === 'favorites' && !favorites.includes(sec.id)) {
        return false;
      }
      return true;
    });
  }, [searchQuery, currentLang, selectedCategory, activeTab, favorites, categories]);

  const handleSelectSection = (sectionNumber: number) => {
    setActiveTab('sections');
    setSelectedCategory('all');
    setSearchQuery('');
    setTimeout(() => {
      const el = document.getElementById(`section-${sectionNumber}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleLaunchQuizForSection = (secNum: number) => {
    setQuizSectionNumber(secNum);
    setActiveTab('quiz');
  };

  const activeSpeakingSection = TRI_LINGUAL_SECTIONS.find(
    (s) => s.id === speechStatus.activeId || `cartoon-${s.id}` === speechStatus.activeId
  );

  return (
    <div
      className={`min-h-screen ${
        theme === 'light'
          ? 'bg-neutral-100 text-neutral-900'
          : 'bg-neutral-950 text-neutral-100'
      } flex flex-col font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-200`}
    >
      {/* Top Header with Language Switcher, Original Book, Quiz and Theme Toggle */}
      <Header
        currentLang={currentLang}
        onSelectLang={handleLanguageChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenWhistleblower={() => setIsWhistleblowerOpen(true)}
        onOpenVoiceStudio={() => setIsVoiceStudioOpen(true)}
        onOpenShareQr={() => setIsShareQrOpen(true)}
        favoritesCount={favorites.length}
        speechStatus={speechStatus}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 sm:py-8">
        {/* Hero Banner for Sections View */}
        {activeTab === 'sections' && (
          <div
            className={`mb-8 relative rounded-3xl overflow-hidden border p-6 sm:p-8 transition-colors ${
              theme === 'light'
                ? 'border-emerald-300 bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/50 shadow-xl text-neutral-900'
                : 'border-emerald-500/20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/40 shadow-2xl text-neutral-100'
            }`}
          >
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{ui.heroTag}</span>
                </span>
                <span className={`text-xs ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  {langConfig.nativeName} · 1999 Constitution
                </span>
              </div>
              <h1 className={`font-display font-black text-2xl sm:text-4xl tracking-tight leading-tight ${
                theme === 'light' ? 'text-neutral-950' : 'text-white'
              }`}>
                {ui.heroTitle}
              </h1>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold text-base sm:text-lg mt-1 mb-3">
                {ui.heroSubtitle}
              </p>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
              }`}>
                {ui.heroDesc}
              </p>

              {/* Quick Action Highlights */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    speechService.speak(
                      'hero-intro',
                      `${ui.heroTitle}. ${ui.heroSubtitle}. ${ui.heroDesc}`,
                      currentLang
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all min-h-[44px]"
                >
                  <Volume2 className="w-4 h-4 fill-current" />
                  <span>{ui.btnListenHero}</span>
                </button>

                <button
                  onClick={() => setActiveTab('book')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/60 hover:bg-amber-900 text-amber-300 border border-amber-600/40 font-semibold text-xs sm:text-sm active:scale-95 transition-all min-h-[44px]"
                >
                  <Library className="w-4 h-4 text-amber-400" />
                  <span>Cikakken Littafi (Original Book)</span>
                </button>

                <button
                  onClick={() => setActiveTab('quiz')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 font-semibold text-xs sm:text-sm active:scale-95 transition-all min-h-[44px]"
                >
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <span>Gwada Iliminka (Quiz)</span>
                </button>

                <button
                  onClick={() => setActiveTab('bulletin')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 font-semibold text-xs sm:text-sm active:scale-95 transition-all min-h-[44px]"
                >
                  <Newspaper className="w-4 h-4 text-emerald-400" />
                  <span>{ui.navBulletin} (Live)</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse ml-0.5" />
                </button>

                <button
                  onClick={() => setActiveTab('ai-chat')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs sm:text-sm border border-neutral-700 active:scale-95 transition-all min-h-[44px]"
                >
                  <MessageSquareText className="w-4 h-4 text-emerald-400" />
                  <span>{ui.btnAskAiHero}</span>
                </button>
                <button
                  onClick={() => setIsVoiceStudioOpen(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 border border-amber-600/30 font-semibold text-xs sm:text-sm active:scale-95 transition-all min-h-[44px]"
                  title="Studio na Muryoyi da Furuci (Voice & Pronunciation Studio)"
                >
                  <Volume2 className="w-4 h-4 text-amber-400" />
                  <span>Studio Muryoyi</span>
                </button>
                <button
                  onClick={() => setIsShareQrOpen(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/40 font-semibold text-xs sm:text-sm active:scale-95 transition-all min-h-[44px]"
                  title="Raba App & Sauke QR Code (Share & QR Code)"
                >
                  <QrCode className="w-4 h-4 text-emerald-400" />
                  <span>Raba App / QR Code</span>
                </button>
                <PWAInstallButton currentLang={currentLang} variant="hero" />
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Constitution Sections */}
        {activeTab === 'sections' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ui.searchPlaceholder}
                  className={`w-full pl-12 pr-10 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-emerald-500 shadow-inner transition-colors ${
                    theme === 'light'
                      ? 'bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400'
                      : 'bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[44px] ${
                      selectedCategory === cat.key
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                        : theme === 'light'
                        ? 'bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-300'
                        : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
              <span>
                {ui.resultsCount} <strong className="text-emerald-400 font-mono">{filteredSections.length}</strong>
              </span>
              <span className="hidden sm:inline">
                Instant Local Index ({searchQuery ? 'Full-Text Match' : 'All Sections Ready'})
              </span>
            </div>

            {filteredSections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSections.map((section) => (
                  <SectionCard
                    key={section.id}
                    section={section}
                    currentLang={currentLang}
                    isFavorite={favorites.includes(section.id)}
                    onToggleFavorite={handleToggleFavorite}
                    speechStatus={speechStatus}
                    onOpenCartoonModal={(sec) => setSelectedCartoonSection(sec)}
                    onStartQuiz={handleLaunchQuizForSection}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-900/50 rounded-3xl border border-neutral-800 p-8">
                <HelpCircle className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
                <h3 className="font-bold text-white text-base">{ui.noResultsTitle}</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto mt-1 mb-4">
                  {ui.noResultsDesc}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-emerald-500 text-neutral-950 rounded-xl font-bold text-xs"
                >
                  {ui.btnResetSearch}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Cikakken Littafi (Original Book Law Library) */}
        {activeTab === 'book' && (
          <CompleteLawLibrary
            speechStatus={speechStatus}
            initialLang={currentLang}
          />
        )}

        {/* Tab 3: Constitution Quiz Tab */}
        {activeTab === 'quiz' && (
          <ConstitutionQuizTab
            currentLang={currentLang}
            initialSectionNumber={quizSectionNumber}
            onReadSection={handleSelectSection}
          />
        )}

        {/* Tab 4: Daily Legal Bulletin (Google Search Grounding) */}
        {activeTab === 'bulletin' && (
          <DailyLegalBulletinTab
            currentLang={currentLang}
            onReadSection={handleSelectSection}
            speechStatus={speechStatus}
          />
        )}

        {/* Tab 5: AI Assistant Chat */}
        {activeTab === 'ai-chat' && (
          <AiAssistantTab
            currentLang={currentLang}
            onSelectSection={handleSelectSection}
            onOpenWhistleblower={() => setIsWhistleblowerOpen(true)}
          />
        )}

        {/* Tab 5: Favorites */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-black text-2xl text-white">
                  {ui.navFavorites}
                </h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Saved sections in {langConfig.name}
                </p>
              </div>
              <span className="font-mono text-emerald-400 text-sm font-bold bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                {favorites.length}
              </span>
            </div>

            {filteredSections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSections.map((section) => (
                  <SectionCard
                    key={section.id}
                    section={section}
                    currentLang={currentLang}
                    isFavorite={true}
                    onToggleFavorite={handleToggleFavorite}
                    speechStatus={speechStatus}
                    onOpenCartoonModal={(sec) => setSelectedCartoonSection(sec)}
                    onStartQuiz={handleLaunchQuizForSection}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-900/50 rounded-3xl border border-neutral-800 p-8">
                <Bookmark className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
                <h3 className="font-bold text-white text-base">{ui.noResultsTitle}</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto mt-1 mb-4">
                  {ui.noResultsDesc}
                </p>
                <button
                  onClick={() => setActiveTab('sections')}
                  className="px-4 py-2 bg-emerald-500 text-neutral-950 rounded-xl font-bold text-xs"
                >
                  {ui.btnResetSearch}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 6: Print & PDF View */}
        {activeTab === 'print' && <PrintPdfView currentLang={currentLang} />}
      </main>

      {/* Floating Audio Player Bar */}
      <AudioPlayerBar
        status={speechStatus}
        activeSection={activeSpeakingSection}
        currentLang={currentLang}
        onStop={() => speechService.stop()}
      />

      {/* Whistleblower Modal */}
      <WhistleblowerModal
        isOpen={isWhistleblowerOpen}
        onClose={() => setIsWhistleblowerOpen(false)}
        currentLang={currentLang}
      />

      {/* Cartoon Viewer Modal */}
      <CartoonModal
        section={selectedCartoonSection}
        currentLang={currentLang}
        onClose={() => setSelectedCartoonSection(null)}
      />

      {/* Voice & Pronunciation Studio Modal */}
      <VoiceStudioModal
        isOpen={isVoiceStudioOpen}
        onClose={() => setIsVoiceStudioOpen(false)}
        currentLang={currentLang}
        speechStatus={speechStatus}
      />

      {/* Share & QR Code Modal */}
      <ShareQrModal
        isOpen={isShareQrOpen}
        onClose={() => setIsShareQrOpen(false)}
        currentLang={currentLang}
      />

      {/* Offline Connectivity Notification Banner */}
      <OfflineIndicator currentLang={currentLang} />

      {/* Mobile Bottom Navigation Bar */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md border-t grid grid-cols-6 items-center h-16 pb-safe transition-colors ${
          theme === 'light'
            ? 'bg-white/95 border-neutral-200'
            : 'bg-neutral-950/95 border-neutral-800'
        }`}
      >
        <button
          onClick={() => setActiveTab('sections')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] ${
            activeTab === 'sections'
              ? 'text-emerald-600 font-bold'
              : theme === 'light'
              ? 'text-neutral-500 hover:text-neutral-900'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-1">{ui.navSections.split(' ')[0]}</span>
        </button>

        <button
          onClick={() => setActiveTab('book')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] ${
            activeTab === 'book'
              ? 'text-amber-500 font-bold'
              : theme === 'light'
              ? 'text-neutral-500 hover:text-amber-700'
              : 'text-neutral-400 hover:text-amber-200'
          }`}
        >
          <Library className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-1">Littafi</span>
        </button>

        <button
          onClick={() => setActiveTab('bulletin')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] ${
            activeTab === 'bulletin'
              ? 'text-emerald-600 font-bold'
              : theme === 'light'
              ? 'text-neutral-500 hover:text-neutral-900'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Newspaper className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-1">Mujalla</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] ${
            activeTab === 'quiz'
              ? 'text-emerald-600 font-bold'
              : theme === 'light'
              ? 'text-neutral-500 hover:text-emerald-700'
              : 'text-neutral-400 hover:text-emerald-300'
          }`}
        >
          <Award className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-1">Quiz</span>
        </button>

        <button
          onClick={() => setActiveTab('ai-chat')}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] ${
            activeTab === 'ai-chat'
              ? 'text-emerald-600 font-bold'
              : theme === 'light'
              ? 'text-neutral-500 hover:text-neutral-900'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <MessageSquareText className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-1">AI</span>
        </button>

        <button
          onClick={() => setIsWhistleblowerOpen(true)}
          className="flex flex-col items-center justify-center h-full text-red-500 font-bold min-h-[44px]"
        >
          <ShieldAlert className="w-5 h-5 animate-pulse" />
          <span className="text-[10px] tracking-tight mt-1">{ui.btnWhistleblower.split(' ')[0]}</span>
        </button>
      </nav>

      {/* Footer */}
      <footer
        className={`mt-16 border-t py-10 px-4 text-xs transition-colors ${
          theme === 'light'
            ? 'bg-neutral-100 border-neutral-200 text-neutral-600'
            : 'bg-neutral-950 border-neutral-800/80 text-neutral-400'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div
              className={`font-display font-black text-base ${
                theme === 'light' ? 'text-neutral-950' : 'text-white'
              }`}
            >
              {ui.appName} · {ui.appBadge}
            </div>
            <p className={theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'}>
              {ui.founderBadge} · {ui.metaDetector}
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-4 ${
              theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
            }`}
          >
            <a
              href="https://sites.google.com/view/avar-royal-family-access"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
              title="Shafin Yanar Gizo na AVAR Royal Family Access"
            >
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Shafin Yanar Gizo (Website)</span>
            </a>
            <span className={theme === 'light' ? 'text-neutral-400' : 'text-neutral-700'}>·</span>
            <a
              href="mailto:avarroyalfamily@gmail.com"
              className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>avarroyalfamily@gmail.com</span>
            </a>
            <span className={theme === 'light' ? 'text-neutral-400' : 'text-neutral-700'}>·</span>
            <a
              href="tel:+2347033840619"
              className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span className="tabular-nums">+2347033840619</span>
            </a>
          </div>
        </div>

        <div
          className={`max-w-7xl mx-auto mt-6 pt-6 border-t text-center text-[11px] ${
            theme === 'light'
              ? 'border-neutral-200 text-neutral-500'
              : 'border-neutral-900 text-neutral-600'
          }`}
        >
          {ui.footerDesc}
        </div>
      </footer>
    </div>
  );
}

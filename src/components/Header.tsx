import React from 'react';
import {
  ShieldAlert,
  BookOpen,
  MessageSquareText,
  Bookmark,
  Printer,
  Sparkles,
  Globe,
  Library,
  HelpCircle,
  Waves,
  Volume2,
  QrCode,
  Newspaper,
  Sun,
  Moon
} from 'lucide-react';
import { SupportedLanguage, LANGUAGE_CONFIGS } from '../types/constitution';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import { speechService, SpeechStatus } from '../services/speechService';
import { PWAInstallButton } from './PWAInstallButton';

export type MainTabType = 'sections' | 'book' | 'quiz' | 'bulletin' | 'ai-chat' | 'favorites' | 'print';

interface HeaderProps {
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
  activeTab: MainTabType;
  setActiveTab: (tab: MainTabType) => void;
  onOpenWhistleblower: () => void;
  onOpenVoiceStudio?: () => void;
  onOpenShareQr?: () => void;
  favoritesCount: number;
  speechStatus?: SpeechStatus;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  activeTab,
  setActiveTab,
  onOpenWhistleblower,
  onOpenVoiceStudio,
  onOpenShareQr,
  favoritesCount,
  speechStatus,
  theme = 'dark',
  onToggleTheme
}) => {
  const ui = UI_TRANSLATIONS[currentLang];
  const languages: SupportedLanguage[] = ['ha', 'yo', 'ig'];

  const bookTabTitle =
    currentLang === 'ha'
      ? 'Cikakken Littafi'
      : currentLang === 'yo'
      ? 'Iwe Ofin Kikun'
      : 'Akwụkwọ Zuru Ezu';

  const quizTabTitle =
    currentLang === 'ha'
      ? 'Gwaji (Quiz)'
      : currentLang === 'yo'
      ? 'Idanwo (Quiz)'
      : 'Ule (Quiz)';

  const voiceNameBadge =
    currentLang === 'ha'
      ? '🎙️ Muryar \'Yar Kano (22yrs)'
      : currentLang === 'yo'
      ? '🎙️ Muryar \'Yar Ibadan (24yrs)'
      : '🎙️ Muryar Nwa Owerri (23yrs)';

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        theme === 'light'
          ? 'bg-white/95 border-neutral-200 text-neutral-900 shadow-sm'
          : 'bg-neutral-950/95 border-neutral-800 text-neutral-100'
      }`}
    >
      {/* Royal Trust Ticker & Perfectly Balanced Tri-lingual Switcher Row */}
      <div className="bg-gradient-to-r from-emerald-950 via-neutral-900 to-emerald-950 border-b border-emerald-800/40 px-3 sm:px-4 py-2 text-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Royal Identity Badge & Active Voice Persona Indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-emerald-400 tracking-wide">AVAR ROYAL FAMILY ACCESS</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-200 font-medium">Founder: King Abbas Aliyu</span>
            <span className="text-neutral-500 hidden lg:inline">|</span>
            {onOpenVoiceStudio ? (
              <button
                onClick={onOpenVoiceStudio}
                className="text-amber-400 hover:text-amber-300 font-semibold hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-amber-950/40 border border-amber-600/30 transition-all hover:scale-105"
                title="Danna don bude Studio na Furuci da Muryoyi (Test Voice & Phonetics)"
              >
                <span>{voiceNameBadge}</span>
                <span className="text-[10px] text-amber-200 underline">Gwada</span>
              </button>
            ) : (
              <span className="text-amber-400 font-semibold hidden lg:inline flex items-center gap-1">
                <span>{voiceNameBadge}</span>
              </span>
            )}
          </div>

          {/* 100% EQUAL TRI-LINGUAL LANGUAGE SWITCHER (Identical width, padding, font weight) */}
          <div className="flex items-center gap-1 bg-neutral-950/90 p-1 rounded-xl border border-emerald-500/30 shadow-inner">
            <Globe className="w-3.5 h-3.5 text-emerald-400 ml-1 mr-0.5 shrink-0 hidden sm:inline" />
            <div className="grid grid-cols-3 gap-1 w-64 sm:w-72">
              {languages.map((code) => {
                const cfg = LANGUAGE_CONFIGS[code];
                const isActive = currentLang === code;
                return (
                  <button
                    key={code}
                    onClick={() => onSelectLang(code)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[36px] ${
                      isActive
                        ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/30'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>{cfg.flag}</span>
                    <span className="uppercase tracking-wider">{cfg.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details & Sapele Water Toggle & Website Link */}
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <a
              href="https://sites.google.com/view/avar-royal-family-access"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              title="Ziyarci Shafin Yanar Gizo na AVAR Royal Family Access"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Website Din Mu</span>
            </a>
            <span className="text-neutral-700 hidden lg:inline">·</span>

            <button
              onClick={() => speechService.toggleWaterSound()}
              title="Sautin Kogin Sapele a Bango (Soft Sapele Water Sound)"
              className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              <Waves className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">
                {speechStatus?.waterSound ? 'Sapele Water: ON' : 'Water: OFF'}
              </span>
            </button>
            <span className="text-neutral-600 hidden md:inline">·</span>
            <span className="tabular-nums font-mono text-neutral-300 hidden md:inline">
              +2347033840619
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar - 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title wordmark */}
        <div
          className="flex items-center gap-3 cursor-pointer shrink-0"
          onClick={() => setActiveTab('sections')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center shadow-lg shadow-emerald-950/50 border border-emerald-400/40">
            <BookOpen className="w-5 h-5 text-neutral-950" />
          </div>
          <div>
            <div className={`font-display font-black text-base sm:text-lg tracking-tight flex items-center gap-2 ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              <span className="truncate max-w-[180px] sm:max-w-none">{ui.appName}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 shrink-0">
                {ui.appBadge}
              </span>
            </div>
            <p className={`text-[11px] hidden sm:block truncate ${
              theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
            }`}>
              {ui.subTagline}
            </p>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <button
            onClick={() => setActiveTab('sections')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'sections'
                ? 'bg-emerald-600 text-white font-bold shadow-sm'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{ui.navSections}</span>
          </button>

          {/* Cikakken Littafi */}
          <button
            onClick={() => setActiveTab('book')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'book'
                ? theme === 'light'
                  ? 'bg-amber-100 border border-amber-400 text-amber-900 font-bold'
                  : 'bg-amber-950/70 border border-amber-600/40 text-amber-300 font-bold'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-amber-700 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-amber-200 hover:bg-neutral-900'
            }`}
          >
            <Library className="w-4 h-4 text-amber-500" />
            <span>{bookTabTitle}</span>
          </button>

          {/* Quiz Tab */}
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'quiz'
                ? theme === 'light'
                  ? 'bg-emerald-100 border border-emerald-400 text-emerald-900 font-bold'
                  : 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-emerald-500" />
            <span>{quizTabTitle}</span>
          </button>

          {/* Daily Legal Bulletin Tab */}
          <button
            onClick={() => setActiveTab('bulletin')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'bulletin'
                ? theme === 'light'
                  ? 'bg-emerald-100 border border-emerald-400 text-emerald-900 font-bold'
                  : 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Newspaper className="w-4 h-4 text-emerald-500" />
            <span>{ui.navBulletin}</span>
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse ml-0.5" title="Live Google Grounding" />
          </button>

          <button
            onClick={() => setActiveTab('ai-chat')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'ai-chat'
                ? theme === 'light'
                  ? 'bg-neutral-200 text-neutral-900 font-bold'
                  : 'bg-neutral-800 text-emerald-400 font-bold'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <MessageSquareText className="w-4 h-4 text-emerald-500" />
            <span>{ui.navAiChat}</span>
            <Sparkles className="w-3 h-3 text-amber-500" />
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'favorites'
                ? theme === 'light'
                  ? 'bg-neutral-200 text-neutral-900 font-bold'
                  : 'bg-neutral-800 text-emerald-400 font-bold'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{ui.navFavorites}</span>
            {favoritesCount > 0 && (
              <span className="text-xs bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                {favoritesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('print')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap min-h-[44px] ${
              activeTab === 'print'
                ? theme === 'light'
                  ? 'bg-neutral-200 text-neutral-900 font-bold'
                  : 'bg-neutral-800 text-emerald-400 font-bold'
                : theme === 'light'
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>{ui.navPrint}</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action - Theme Toggle, PWA Install, Voice Studio, QR Code & Whistleblower Red Button */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle (Dark / Light mode) */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 border border-neutral-700/80 text-xs font-bold transition-all min-h-[44px] min-w-[44px] shadow-sm active:scale-95"
              title={
                theme === 'light'
                  ? currentLang === 'yo'
                    ? 'Yipada si Ipo Okunkun (Dark Mode)'
                    : currentLang === 'ig'
                    ? 'Gbanwee gaa na Ọnọdụ Ọchịchịrị (Dark Mode)'
                    : 'Koma Yanayin Dare (Dark Mode)'
                  : currentLang === 'yo'
                  ? 'Yipada si Ipo Imọlẹ (Light Mode)'
                  : currentLang === 'ig'
                  ? 'Gbanwee gaa na Ọnọdụ Ìhè (Light Mode)'
                  : 'Koma Yanayin Rana (Light Mode)'
              }
              aria-label="Toggle theme mode"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-amber-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
          )}

          {/* In-App PWA / APK Install Button */}
          <PWAInstallButton currentLang={currentLang} variant="header" />

          {onOpenVoiceStudio && (
            <button
              onClick={onOpenVoiceStudio}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 border border-amber-600/40 text-xs font-bold transition-all min-h-[44px]"
              title="Studio na Muryoyi da Gyaran Furuci (Voice & Pronunciation Studio)"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Muryoyi</span>
            </button>
          )}

          {onOpenShareQr && (
            <button
              onClick={onOpenShareQr}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all min-h-[44px]"
              title="Raba App & Sauke QR Code (Share & QR Code)"
            >
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">QR Code</span>
            </button>
          )}

          <button
            onClick={onOpenWhistleblower}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/60 border border-red-400/40 active:scale-95 transition-all whitespace-nowrap min-h-[44px]"
          >
            <ShieldAlert className="w-4 h-4 text-red-200 animate-bounce" />
            <span>{ui.btnWhistleblower}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

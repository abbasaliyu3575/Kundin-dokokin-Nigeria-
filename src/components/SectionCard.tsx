import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Bookmark,
  Share2,
  ChevronDown,
  ChevronUp,
  Scale,
  Check,
  Image as ImageIcon,
  MessageCircle,
  Facebook,
  HelpCircle
} from 'lucide-react';
import { TriLingualSection, SupportedLanguage } from '../types/constitution';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import { speechService, SpeechStatus } from '../services/speechService';

interface SectionCardProps {
  section: TriLingualSection;
  currentLang: SupportedLanguage;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  speechStatus: SpeechStatus;
  onOpenCartoonModal: (section: TriLingualSection) => void;
  onStartQuiz?: (secNum: number) => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  currentLang,
  isFavorite,
  onToggleFavorite,
  speechStatus,
  onOpenCartoonModal,
  onStartQuiz
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [showShareMenu, setShowShareMenu] = useState<boolean>(false);

  const ui = UI_TRANSLATIONS[currentLang];
  const content = section[currentLang];

  const isCurrentSpeaking = speechStatus.activeId === section.id && speechStatus.isPlaying;
  const isCurrentPaused = speechStatus.activeId === section.id && speechStatus.isPaused;

  const handleSpeak = () => {
    if (isCurrentSpeaking) {
      speechService.pause();
    } else if (isCurrentPaused) {
      speechService.resume();
    } else {
      speechService.speak(section.id, content.voiceScript, currentLang);
    }
  };

  const captionText = section.cartoonCaption ? section.cartoonCaption[currentLang] : content.misali;
  const cartoonLink = section.cartoonImage
    ? `${window.location.origin}${section.cartoonImage}`
    : '';

  const shareText = `📜 ${ui.appName} - Section ${section.sectionNumber} (${section.englishTitle})
🏛️ ${content.title}

👉 ${ui.lblSimpleTranslation}:
${content.summary}

💡 ${ui.lblExample}:
${content.misali}

⚖️ ${ui.lblVerdict}:
${content.hukunci}
${cartoonLink ? `\n🖼️ Hoton Cartoon: ${cartoonLink}` : ''}

👑 AVAR ROYAL FAMILY ACCESS - Founder: King Abbas Aliyu (+2347033840619)`;

  const handleCopyText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(
    shareText
  )}&u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`;

  const quizBtnLabel =
    currentLang === 'ha'
      ? 'Gwada Iliminka (Quiz)'
      : currentLang === 'yo'
      ? 'Ṣe Idanwo (Quiz)'
      : 'Nwalee Ihe Ị Mụtara (Quiz)';

  return (
    <div
      id={`section-${section.sectionNumber}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden relative ${
        isCurrentSpeaking
          ? 'bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-950/40 ring-1 ring-emerald-500/50'
          : 'bg-neutral-900/70 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700'
      }`}
    >
      {/* Top Banner with Section Tag & Actions */}
      <div className="p-5 pb-3 border-b border-neutral-800/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            Section {section.sectionNumber}
          </span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-400 font-medium">{content.category}</span>
          <span className="text-neutral-500 hidden sm:inline">·</span>
          <span className="text-neutral-500 hidden sm:inline">{section.englishTitle}</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 relative">
          {/* Quick Quiz on this section */}
          {onStartQuiz && (
            <button
              onClick={() => onStartQuiz(section.sectionNumber)}
              title={quizBtnLabel}
              className="px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors min-h-[44px]"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Quiz</span>
            </button>
          )}

          <button
            onClick={() => onToggleFavorite(section.id)}
            title={isFavorite ? 'Cire' : ui.btnBookmark}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] ${
              isFavorite
                ? 'text-amber-400 bg-amber-400/10 border border-amber-400/20'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Social Share Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              title="Raba a WhatsApp ko Facebook"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors min-h-[44px] min-w-[44px]"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Social Share Dropdown */}
            {showShareMenu && (
              <div className="absolute right-0 top-11 z-30 w-52 bg-neutral-900 border border-neutral-700 rounded-2xl p-2 shadow-2xl space-y-1">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowShareMenu(false)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-400 hover:bg-neutral-800 rounded-xl transition-colors min-h-[40px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  <span>Raba a WhatsApp</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowShareMenu(false)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-blue-400 hover:bg-neutral-800 rounded-xl transition-colors min-h-[40px]"
                >
                  <Facebook className="w-4 h-4 text-blue-400 fill-current" />
                  <span>Raba a Facebook</span>
                </a>

                <button
                  onClick={handleCopyText}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-300 hover:bg-neutral-800 rounded-xl transition-colors min-h-[40px]"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{copied ? 'An Kwafi!' : 'Kofi Rubutun'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug mb-3">
          {content.title}
        </h3>

        {/* Simple Translation Banner */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 mb-4">
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Scale className="w-3.5 h-3.5" />
            <span>{ui.lblSimpleTranslation}</span>
          </div>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-medium">
            {content.summary}
          </p>
        </div>

        {/* Cartoon Preview Box if available */}
        {section.cartoonImage && (
          <div
            onClick={() => onOpenCartoonModal(section)}
            className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer mb-4 hover:border-emerald-500/50 transition-all"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-neutral-900">
              <img
                src={section.cartoonImage}
                alt={captionText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-2.5 bg-neutral-950/90 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span className="truncate">{captionText}</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold underline shrink-0">
                {ui.btnOpenCartoon}
              </span>
            </div>
          </div>
        )}

        {/* Street Story Allegory */}
        <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30 mb-4">
          <span className="text-xs font-bold text-amber-400 block mb-1">
            {ui.lblExample}
          </span>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {content.misali}
          </p>
        </div>

        {/* Verdict Da Dokar Tace */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 mb-4">
          <span className="text-xs font-bold text-emerald-400 block mb-1">
            {ui.lblVerdict}
          </span>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {content.hukunci}
          </p>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-neutral-800 text-xs sm:text-sm text-neutral-300 space-y-3">
            <div className="font-bold text-neutral-200">{ui.lblFullDetails}</div>
            <div className="whitespace-pre-line leading-relaxed text-neutral-400 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
              {content.fullText}
            </div>
          </div>
        )}

        {/* Bottom Bar: Voice Button & Expand Button */}
        <div className="mt-4 pt-3 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-3">
          {/* Big Voice Button */}
          <button
            onClick={handleSpeak}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] ${
              isCurrentSpeaking
                ? 'bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/20 active:scale-95'
                : isCurrentPaused
                ? 'bg-amber-500 text-neutral-950'
                : 'bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-700/50 hover:text-white'
            }`}
          >
            {isCurrentSpeaking ? (
              <>
                <VolumeX className="w-4 h-4 fill-current" />
                <span>{ui.btnPause}</span>
              </>
            ) : isCurrentPaused ? (
              <>
                <Volume2 className="w-4 h-4" />
                <span>{ui.btnResume}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>{ui.btnListen}</span>
              </>
            )}
          </button>

          {/* Expand toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white py-2 px-3 rounded-lg hover:bg-neutral-800 transition-colors min-h-[44px]"
          >
            <span>{isExpanded ? ui.btnLess : ui.btnMore}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

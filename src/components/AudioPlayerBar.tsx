import React from 'react';
import { Play, Pause, Square, Volume2, FastForward } from 'lucide-react';
import { SpeechStatus, speechService } from '../services/speechService';
import { TriLingualSection, SupportedLanguage } from '../types/constitution';

interface AudioPlayerBarProps {
  status: SpeechStatus;
  activeSection?: TriLingualSection | null;
  currentLang: SupportedLanguage;
  onStop: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  status,
  activeSection,
  currentLang,
  onStop
}) => {
  if (!status.isPlaying && !status.isPaused) return null;

  const handleToggle = () => {
    if (status.isPlaying) {
      speechService.pause();
    } else {
      speechService.resume();
    }
  };

  const handleRateCycle = () => {
    if (status.rate <= 0.85) {
      speechService.setRate(1.0);
    } else if (status.rate <= 1.05) {
      speechService.setRate(1.2);
    } else {
      speechService.setRate(0.8);
    }
  };

  const rateLabel =
    status.rate <= 0.85
      ? '0.8x'
      : status.rate >= 1.15
      ? '1.2x'
      : '1.0x';

  const titleText = activeSection
    ? activeSection[currentLang].title
    : currentLang === 'ha'
    ? 'Muryar AI na Karantawa'
    : currentLang === 'yo'
    ? 'Ohun AI n Kawe'
    : 'Olu AI na-Agụ Iwu';

  const statusLabel =
    currentLang === 'ha'
      ? "🎙️ Muryar A'ishah ('Yar Kano 22yrs)"
      : currentLang === 'yo'
      ? "🎙️ Muryar Alajah (Ibadan 28yrs)"
      : "🎙️ Muryar Ngozi (Owerri 24yrs)";

  return (
    <div className="fixed bottom-16 md:bottom-4 left-0 right-0 z-40 px-4 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-neutral-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-3 shadow-2xl shadow-black/80 pointer-events-auto">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Speaker icon & Title */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Volume2 className="w-5 h-5 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  {statusLabel}
                </span>
                {status.isPlaying && (
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_0.8s_infinite] h-3" />
                    <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_0.6s_infinite] h-2" />
                    <span className="w-1 bg-emerald-400 rounded-full animate-[bounce_1.0s_infinite] h-3.5" />
                  </div>
                )}
              </div>
              <p className="text-xs font-semibold text-white truncate">
                {titleText}
              </p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Speed toggle */}
            <button
              onClick={handleRateCycle}
              title="Change Speed"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono border border-neutral-700 min-h-[44px]"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>{rateLabel}</span>
            </button>

            {/* Play/Pause */}
            <button
              onClick={handleToggle}
              className="w-11 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
              aria-label={status.isPlaying ? 'Pause' : 'Play'}
            >
              {status.isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Stop */}
            <button
              onClick={onStop}
              className="w-11 h-11 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-700 active:scale-95 transition-all"
              aria-label="Stop"
            >
              <Square className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

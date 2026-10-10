import React from 'react';
import { X, Volume2 } from 'lucide-react';
import { TriLingualSection, SupportedLanguage } from '../types/constitution';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import { speechService } from '../services/speechService';

interface CartoonModalProps {
  section: TriLingualSection | null;
  currentLang: SupportedLanguage;
  onClose: () => void;
}

export const CartoonModal: React.FC<CartoonModalProps> = ({
  section,
  currentLang,
  onClose
}) => {
  if (!section || !section.cartoonImage) return null;

  const content = section[currentLang];
  const ui = UI_TRANSLATIONS[currentLang];
  const caption = section.cartoonCaption ? section.cartoonCaption[currentLang] : content.misali;

  const handleReadCaption = () => {
    const text = `${content.title}. ${caption}. ${content.summary}`;
    speechService.speak(`cartoon-${section.id}`, text, currentLang);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-neutral-900 border border-emerald-500/30 rounded-3xl max-w-3xl w-full p-5 sm:p-6 shadow-2xl shadow-black relative my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-700 min-h-[44px] min-w-[44px]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="text-xs font-mono font-bold text-emerald-400 mb-1">
            Section {section.sectionNumber} · Cartoon Illustration
          </div>
          <h3 className="font-display font-extrabold text-xl text-white">
            {content.title}
          </h3>
        </div>

        {/* Big Cartoon Image */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 mb-4 shadow-xl">
          <img
            src={section.cartoonImage}
            alt={caption}
            referrerPolicy="no-referrer"
            className="w-full max-h-[60vh] object-contain mx-auto"
          />
        </div>

        {/* Caption & Voice read */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-neutral-200">
              {caption}
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              {content.misali}
            </p>
          </div>
          <button
            onClick={handleReadCaption}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs flex items-center gap-2 shrink-0 transition-colors min-h-[44px]"
          >
            <Volume2 className="w-4 h-4 fill-current" />
            <span>{ui.btnListen}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

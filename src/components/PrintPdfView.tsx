import React from 'react';
import { Printer, CheckCircle } from 'lucide-react';
import { TRI_LINGUAL_SECTIONS } from '../data/triLingualData';
import { SupportedLanguage } from '../types/constitution';
import { UI_TRANSLATIONS } from '../data/uiTranslations';

interface PrintPdfViewProps {
  currentLang: SupportedLanguage;
}

export const PrintPdfView: React.FC<PrintPdfViewProps> = ({ currentLang }) => {
  const ui = UI_TRANSLATIONS[currentLang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Action banner */}
      <div className="print:hidden p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-white text-base">
            {ui.printActionTitle}
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            {ui.printActionDesc}
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all min-h-[44px]"
        >
          <Printer className="w-4 h-4" />
          <span>{ui.btnPrint}</span>
        </button>
      </div>

      {/* Document Canvas (Optimized for both screen and print) */}
      <div className="bg-white text-neutral-900 p-8 sm:p-12 rounded-3xl shadow-2xl border border-neutral-200 print:shadow-none print:border-none print:p-0 print:m-0 print:rounded-none">
        {/* Document Header */}
        <div className="border-b-2 border-emerald-900 pb-6 mb-8 text-center">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-widest rounded mb-2">
            {ui.printSpecialEdition}
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-neutral-900 uppercase tracking-tight">
            {ui.appName} 1999
          </h1>
          <h2 className="text-lg font-bold text-emerald-800 mt-1">
            {ui.printSubtitle}
          </h2>
          <div className="text-xs text-neutral-600 mt-3 flex flex-wrap items-center justify-center gap-4">
            <span><strong>Founder / Oludasile / Onye Ntọala:</strong> King Abbas Aliyu</span>
            <span>·</span>
            <span><strong>Email:</strong> avarroyalfamily@gmail.com</span>
            <span>·</span>
            <span><strong>Phone:</strong> +2347033840619</span>
          </div>
          <p className="text-xs italic text-neutral-500 mt-2 max-w-xl mx-auto">
            "AVAR Royal Family Access - An tsara wannan kundi ne domin wayar da kan kowane dan kasa a harshen da ya fi ganewa."
          </p>
        </div>

        {/* Table of Chapters Included */}
        <div className="mb-8 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
          <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-2">
            Chapters Included / Sassan Da Suka Hada:
          </h4>
          <ul className="text-xs text-neutral-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Chapter I: Supremacy of the Constitution (Section 1)</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Chapter II: Security & Welfare / Corruption (Section 14 & 15)</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Chapter IV: Fundamental Human Rights (Section 33, 34, 35, 37, 39, 46)</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Chapter VI: Executive Powers & Immunity Clause (Section 308)</span>
            </li>
          </ul>
        </div>

        {/* Sections Listing */}
        <div className="space-y-8">
          {TRI_LINGUAL_SECTIONS.map((sec) => {
            const content = sec[currentLang];
            return (
              <div key={sec.id} className="border-b border-neutral-200 pb-6 break-inside-avoid">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="font-bold text-emerald-800 text-sm font-mono">
                    SECTION {sec.sectionNumber} ({sec.englishTitle})
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {content.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-neutral-900 mb-2">
                  {content.title}
                </h3>

                <div className="p-3 bg-neutral-100 rounded-lg text-sm text-neutral-800 font-medium mb-3">
                  <strong>{ui.lblSimpleTranslation}:</strong> {content.summary}
                </div>

                <div className="text-xs text-neutral-700 space-y-2 leading-relaxed">
                  <p>
                    <strong>{ui.lblExample}</strong> {content.misali}
                  </p>
                  <p>
                    <strong>{ui.lblVerdict}</strong> {content.hukunci}
                  </p>
                </div>

                <div className="mt-2 text-xs text-neutral-600 italic">
                  {content.fullText}
                </div>
              </div>
            );
          })}
        </div>

        {/* Document Footer */}
        <div className="mt-12 pt-6 border-t-2 border-emerald-900 text-center text-xs text-neutral-600">
          <p className="font-bold text-neutral-800">
            {ui.appName} · AVAR ROYAL FAMILY ACCESS
          </p>
          <p className="mt-1">
            Founder: King Abbas Aliyu · Email: avarroyalfamily@gmail.com · Phone: +2347033840619
          </p>
        </div>
      </div>
    </div>
  );
};

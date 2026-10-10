import React, { useState } from 'react';
import { X, ShieldAlert, Phone, Mail, Award, Send, Check, AlertTriangle, ExternalLink } from 'lucide-react';
import { WHISTLEBLOWER_AGENCIES } from '../data/constitutionData';
import { SupportedLanguage } from '../types/constitution';
import { UI_TRANSLATIONS } from '../data/uiTranslations';

interface WhistleblowerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: SupportedLanguage;
}

export const WhistleblowerModal: React.FC<WhistleblowerModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [complaintText, setComplaintText] = useState('');
  const [selectedAgency, setSelectedAgency] = useState('EFCC');
  const [copied, setCopied] = useState(false);

  const ui = UI_TRANSLATIONS[currentLang];

  if (!isOpen) return null;

  const handleCopyReport = () => {
    const reportHeader =
      currentLang === 'ha'
        ? '🚨 RAHOTON TONA ASIRI (WHISTLEBLOWER REPORT)'
        : currentLang === 'yo'
        ? '🚨 ÌJÀBỌ̀ TÍTÚ ÀṢÍRÍ JÁDE (WHISTLEBLOWER REPORT)'
        : '🚨 AKỤKỌ NKE IKPUSỊ OHI (WHISTLEBLOWER REPORT)';

    const report = `${reportHeader}\n\nAgency / Hukuma: ${selectedAgency}\nDetails / Bayani:\n${complaintText}\n\nLegal Protection: Section 39 & Section 15(5) Constitution 1999 & FOI Act 2011.\nAVAR ROYAL FAMILY ACCESS - Founder King Abbas Aliyu`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(report);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-neutral-900 border border-red-500/40 rounded-3xl max-w-2xl w-full p-6 shadow-2xl shadow-red-950/80 my-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  {ui.whistleblowerSubtitle}
                </span>
              </div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white">
                {ui.whistleblowerTitle}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5% Reward Banner */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-red-950/60 via-amber-950/40 to-red-950/60 border border-red-500/40">
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-300 text-sm sm:text-base">
                {ui.whistleblowerReward}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                {ui.whistleblowerDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Agencies Grid */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            {ui.whistleblowerAgenciesTitle}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHISTLEBLOWER_AGENCIES.map((agency) => (
              <div
                key={agency.name}
                className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-red-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h5 className="font-bold text-white text-xs leading-tight mb-1">
                    {agency.name}
                  </h5>
                  <p className="text-[11px] text-neutral-400 leading-normal mb-2">
                    {agency.hausaDesc}
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-800/80 space-y-1">
                  <a
                    href={`tel:${agency.hotline.split('/')[0].trim()}`}
                    className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 font-mono font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{agency.hotline}</span>
                  </a>
                  <a
                    href={`mailto:${agency.email}`}
                    className="flex items-center gap-2 text-[11px] text-neutral-400 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{agency.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Composer */}
        <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-red-400" />
              <span>{ui.whistleblowerFormTitle}</span>
            </label>
            <select
              value={selectedAgency}
              onChange={(e) => setSelectedAgency(e.target.value)}
              className="text-xs bg-neutral-800 border border-neutral-700 rounded-lg px-2 py-1 text-neutral-200"
            >
              <option value="EFCC">EFCC</option>
              <option value="ICPC">ICPC</option>
              <option value="NHRC">NHRC (Human Rights)</option>
              <option value="Police CRU">Police CRU</option>
            </select>
          </div>

          <textarea
            value={complaintText}
            onChange={(e) => setComplaintText(e.target.value)}
            rows={3}
            placeholder={ui.whistleblowerPlaceholder}
            className="w-full bg-neutral-900 border border-neutral-700 rounded-xl p-3 text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-red-500"
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] text-neutral-400 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{ui.whistleblowerAnonymity}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyReport}
                disabled={!complaintText.trim()}
                className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-neutral-200 font-medium text-xs flex items-center gap-1.5 transition-colors min-h-[44px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                <span>{copied ? ui.reportCopied : ui.btnCopyReport}</span>
              </button>

              <a
                href={`mailto:info@efcc.gov.ng?subject=Whistleblower%20Report&body=${encodeURIComponent(
                  complaintText
                )}`}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors min-h-[44px]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{ui.btnSendDirect}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Support Info */}
        <div className="mt-4 pt-3 border-t border-neutral-800 text-center text-xs text-neutral-500">
          AVAR ROYAL FAMILY ACCESS · King Abbas Aliyu · +2347033840619 · avarroyalfamily@gmail.com
        </div>
      </div>
    </div>
  );
};

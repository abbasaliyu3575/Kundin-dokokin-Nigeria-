import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import {
  X,
  QrCode,
  Copy,
  Check,
  Download,
  ExternalLink,
  Globe,
  Share2,
  Code2,
  MessageCircle,
  Facebook,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { SupportedLanguage } from '../types/constitution';

interface ShareQrModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: SupportedLanguage;
}

export const ShareQrModal: React.FC<ShareQrModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [activeTarget, setActiveTarget] = useState<'app' | 'website'>('app');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedEmbed, setCopiedEmbed] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const APP_URL =
    typeof window !== 'undefined' && window.location.origin.includes('run.app')
      ? window.location.href.split('?')[0]
      : 'https://ais-pre-iog4pmw4ytjsx5ddltqtlh-138424904777.europe-west1.run.app';

  const WEBSITE_URL = 'https://sites.google.com/view/avar-royal-family-access';

  const currentUrl = activeTarget === 'app' ? APP_URL : WEBSITE_URL;

  const embedCode = `<iframe src="${APP_URL}" width="100%" height="850" style="border:none; border-radius:18px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" allow="autoplay; microphone" title="Kundin Tsarin Mulkin Nigeria - AVAR Royal Family AI"></iframe>`;

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, currentUrl, {
        width: 260,
        margin: 2,
        color: {
          dark: '#022c22', // Deep emerald
          light: '#ffffff'
        }
      }).catch((err) => console.error('QR code error:', err));
    }
  }, [isOpen, currentUrl, activeTarget]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyEmbed = () => {
    navigator.clipboard?.writeText(embedCode);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2000);
  };

  const handleDownloadQr = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `avar-royal-family-qr-${activeTarget}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const shareText =
    currentLang === 'ha'
      ? `👑 KUNDIN TSARIN MULKIN NIGERIA - HAUSA AI READER
AVAR Royal Family Access - Founder: King Abbas Aliyu

Sauka ka saurari dukkan sassan Kundin Tsarin Mulki na 1999 da muryar A'ishah 'Yar Kano (Hausa), Alajah (Yoruba), da Ngozi (Igbo)!

👉 Shiga App din a nan:
${APP_URL}

🌐 Ziyarci Shafin Yanar Gizo:
${WEBSITE_URL}

📞 Tuntube mu: +2347033840619 | avarroyalfamily@gmail.com`
      : currentLang === 'yo'
      ? `👑 IWE OFIN ORILE-EDE NAIJIRIA - AI READER
AVAR Royal Family Access - Oludasile: King Abbas Aliyu

Gbọ gbogbo abala iwe ofin pẹlu ohun Alajah (Yoruba), A'ishah (Hausa), ati Ngozi (Igbo)!

👉 Wọle si App nibi:
${APP_URL}

🌐 Ṣabẹwo si oju opo wẹẹbu wa:
${WEBSITE_URL}`
      : `👑 AKWỤKWỌ IWU NIGERIA - AI READER
AVAR Royal Family Access - Onye guzobere: King Abbas Aliyu

Gee ntị na ngalaba iwu niile n'olu Ngozi (Igbo), A'ishah (Hausa), na Alajah (Yoruba)!

👉 Kpọtụrụ App na:
${APP_URL}

🌐 Gaa na webụsaịtị anyị:
${WEBSITE_URL}`;

  const whatsAppShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}&quote=${encodeURIComponent(shareText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-950 via-neutral-900 to-emerald-950 border-b border-emerald-500/20 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <QrCode className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  QR Code & Website Link
                </span>
                <span className="text-xs text-neutral-400">AVAR Royal Family</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-white mt-1">
                Raba App & Hanyar Shiga Yanar Gizo
              </h2>
              <p className="text-xs text-neutral-300 mt-0.5">
                Sauke QR Code don saka wa a Facebook da WhatsApp, ko kwafi link don hadawa a Google Sites.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors min-h-[44px]"
            aria-label="Kulle"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Target Switcher: App Link vs Google Sites Website */}
        <div className="grid grid-cols-2 p-2 bg-neutral-950/80 border-b border-neutral-800 gap-2">
          <button
            onClick={() => setActiveTarget('app')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 min-h-[44px] ${
              activeTarget === 'app'
                ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Sabon App din AI Studio</span>
          </button>
          <button
            onClick={() => setActiveTarget('website')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 min-h-[44px] ${
              activeTarget === 'website'
                ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Website din AVAR (Google Sites)</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* QR Code Presentation Box */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-neutral-950 p-5 rounded-2xl border border-neutral-800">
            {/* Canvas */}
            <div className="p-3 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0">
              <canvas ref={canvasRef} className="rounded-lg w-[190px] h-[190px] sm:w-[210px] sm:h-[210px]" />
            </div>

            {/* QR Info & Direct Actions */}
            <div className="space-y-3 flex-1 text-center sm:text-left">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                  {activeTarget === 'app' ? 'Sabon App din Ka' : 'Shafin Yanar Gizo na Google Sites'}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {activeTarget === 'app'
                    ? 'Kundin Tsarin Mulki da Muryoyin AI'
                    : 'AVAR Royal Family Access'}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 break-all font-mono">
                  {currentUrl}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                <button
                  onClick={handleDownloadQr}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs flex items-center gap-2 min-h-[40px] shadow-md shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Sauke Hoto (PNG)</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center gap-2 min-h-[40px] border border-neutral-700"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'An Kwafa!' : 'Kwafi Link'}</span>
                </button>

                <a
                  href={currentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white text-xs flex items-center gap-1.5 min-h-[40px] border border-neutral-800"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Bude</span>
                </a>
              </div>
            </div>
          </div>

          {/* Instant Share to WhatsApp & Facebook */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-white flex items-center gap-2">
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>Raba Kai Tsaye zuwa Social Media:</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsAppShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                <span>Raba a WhatsApp Status / Group</span>
              </a>

              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs font-bold transition-all min-h-[44px]"
              >
                <Facebook className="w-4 h-4 fill-current text-blue-400" />
                <span>Raba a Facebook Wall / Page</span>
              </a>
            </div>
          </div>

          {/* Embed Code for Google Sites Instructions */}
          <div className="bg-neutral-950 p-4 sm:p-5 rounded-2xl border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold text-white">
                  Lambar Saka App a Google Sites (Embed Code)
                </h4>
              </div>
              <button
                onClick={handleCopyEmbed}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 min-h-[36px]"
              >
                {copiedEmbed ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmbed ? 'An Kwafa!' : 'Kwafi Lambar (Copy)'}</span>
              </button>
            </div>

            <pre className="p-3 bg-neutral-900 rounded-xl text-[11px] font-mono text-neutral-300 overflow-x-auto border border-neutral-800">
              {embedCode}
            </pre>

            {/* Quick 4-Step Instructions */}
            <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-850 space-y-2 text-xs text-neutral-300">
              <span className="font-bold text-amber-300 block text-[11px] uppercase tracking-wider">
                Yadda Zaka Saka Shi a sites.google.com/view/avar-royal-family-access:
              </span>
              <ol className="list-decimal list-inside space-y-1 text-[11px] text-neutral-300">
                <li>Bude shafinka na Google Sites ka danna <strong>Edit</strong> (alkalami).</li>
                <li>A bangaren dama, danna <strong>Insert</strong> sannan ka zabi <strong>Embed (&lt;/&gt;)</strong>.</li>
                <li>Zabi <strong>Embed code</strong> sannan ka manna wannan lambar da ke sama (ko zabi <strong>By URL</strong> ka manna Link din).</li>
                <li>Danna <strong>Insert</strong> sannan ka danna <strong>Publish</strong> a sama!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>King Abbas Aliyu · AVAR Royal Family Access</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs"
          >
            Kulle (Close)
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Download, Sparkles, X, Smartphone, Check } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { SupportedLanguage } from '../types/constitution';

interface PWAInstallButtonProps {
  currentLang?: SupportedLanguage;
  variant?: 'header' | 'hero' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  currentLang = 'ha',
  variant = 'header'
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState<boolean>(false);
  const [installSuccess, setInstallSuccess] = useState<boolean>(false);

  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const res = await install();
      if (res) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 3000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // In case neither prompt is active (e.g. desktop non-chromium or already prompted), show informative guidance
      setShowIOSGuide(true);
    }
  };

  const labels = {
    ha: {
      btn: 'Sauke App / APK 📲',
      btnShort: 'Sanya App 📲',
      installed: 'An Sanya App!',
      title: 'Yadda Zaka Sauke App a Wayarka',
      desc: 'Zaka iya sauke Kundin Mulki AI kai tsaye a allon wayarka (Android ko iPhone) don amfani da shi 100% Offline ba tare da intanet ba!',
      step1: '1. Danna alamar Zaɓuɓɓuka (Menu / Share ⋮ ko ⎙) a saman burauzar ka.',
      step2: '2. Zabi "Sanya a Fuskar Waya" (Add to Home Screen / Install App).',
      step3: '3. Nan take zai zama cikakken APK/App a wayarka mai dauke da dukkan sashe 320!',
      close: 'To Na Gane'
    },
    yo: {
      btn: 'Gba App / APK 📲',
      btnShort: 'Fi App Si 📲',
      installed: 'A ti fi App si!',
      title: 'Bii o ṣe le Fi App Si Foonu Rẹ',
      desc: 'O le fi Kundin Mulki AI si foonu rẹ taara (Android tabi iPhone) lati ka gbogbo abala 320 laisi intanẹẹti!',
      step1: '1. Tẹ aami Aṣayan (Pinpin / Share tabi ⋮) ni oke aṣawakiri rẹ.',
      step2: '2. Yan "Fi Si Oju Iboju" (Add to Home Screen / Install App).',
      step3: '3. Yoo di app pipe lori foonu rẹ ti o ni gbogbo ofin!',
      close: 'Mo Ti Gbọ'
    },
    ig: {
      btn: 'Wụnye App / APK 📲',
      btnShort: 'Wụnye App 📲',
      installed: 'E wụnyela App!',
      title: 'Otu e si Awụnye App n’Ekwentị Gị',
      desc: 'Ị nwere ike ịwụnye Kundin Mulki AI n’ekwentị gị (Android ma ọ bụ iPhone) iji jiri ya mee ihe n’enweghị ịntanetị!',
      step1: '1. Pịa akara Nhọrọ (Share ma ọ bụ ⋮) na braụza gị.',
      step2: '2. Họrọ "Tinye na Ihuenyo Mbụ" (Add to Home screen / Install App).',
      step3: '3. Ọ ga-aghọ ezigbo ngwa n’ekwentị gị maka ngalaba 320 niile!',
      close: 'Aghọtala M'
    }
  }[currentLang];

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={
          variant === 'header'
            ? 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-950/40 border border-emerald-400/30 transition-all active:scale-95 min-h-[38px]'
            : 'flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 border border-emerald-400/40 transition-all active:scale-95'
        }
        title="Sanya App a wayarka ko duba APK"
      >
        {installSuccess ? (
          <>
            <Check className="w-4 h-4 text-emerald-200" />
            <span>{labels.installed}</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4 text-emerald-200 animate-bounce" />
            <span className="hidden sm:inline">{labels.btn}</span>
            <span className="sm:hidden">{labels.btnShort}</span>
          </>
        )}
      </button>

      {/* Guide Modal for iOS & Android Manual Add to Home Screen */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-3xl bg-neutral-900 border border-emerald-500/30 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {labels.title}
                  </h3>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    Kundin Mulki AI · APK / PWA Standalone
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              {labels.desc}
            </p>

            <div className="space-y-2.5 p-4 rounded-2xl bg-neutral-950 border border-neutral-850 text-xs text-neutral-300">
              <p className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">📲</span>
                <span>{labels.step1}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">➕</span>
                <span>{labels.step2}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">⚡</span>
                <span>{labels.step3}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs transition-colors"
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';
import { SupportedLanguage } from '../types/constitution';

interface OfflineIndicatorProps {
  currentLang?: SupportedLanguage;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ currentLang = 'ha' }) => {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [justReconnected, setJustReconnected] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setJustReconnected(true);
      setTimeout(() => setJustReconnected(false), 4000);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setJustReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !justReconnected) {
    return null;
  }

  if (justReconnected) {
    return (
      <div className="fixed bottom-20 left-4 sm:left-6 z-50 flex items-center gap-2.5 rounded-2xl bg-emerald-600/95 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white shadow-2xl border border-emerald-400/40 animate-fade-in">
        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
        <span>
          {currentLang === 'yo'
            ? 'Intanẹẹti ti pada! O wa lori ayelujara.'
            : currentLang === 'ig'
            ? 'Ịntanetị alaghachila! Ị nọ n’ịntanetị ugbu a.'
            : 'Intanet ya dawo! Yanzu kana Online.'}
        </span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 left-4 sm:left-6 z-50 flex items-center gap-2.5 rounded-2xl bg-amber-600/95 backdrop-blur-md px-4 py-2.5 text-xs font-semibold text-white shadow-2xl border border-amber-400/40 max-w-sm">
      <WifiOff className="w-4 h-4 text-amber-200 shrink-0 animate-pulse" />
      <div>
        <div className="font-bold">
          {currentLang === 'yo'
            ? 'Ipo Aisinilọwọ (Offline Mode)'
            : currentLang === 'ig'
            ? 'Ọnọdụ Na-anọghị n’ịntanetị (Offline)'
            : 'Yanayin Offline (Babu Intanet)'}
        </div>
        <div className="text-[11px] text-amber-100 font-normal">
          {currentLang === 'yo'
            ? 'Gbogbo awọn abala 320 ati ohun wa ninu foonu rẹ laisi intanẹẹti.'
            : currentLang === 'ig'
            ? 'Ngalaba 320 niile na ọba akwụkwọ dị njikere n’ejighị data.'
            : 'Dukkan sashe 320 da ɗakin karatu na aiki cikakke a wayarka.'}
        </div>
      </div>
    </div>
  );
};

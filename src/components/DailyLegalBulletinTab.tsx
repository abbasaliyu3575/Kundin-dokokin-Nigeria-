import React, { useState, useEffect } from 'react';
import {
  Newspaper,
  RefreshCw,
  Volume2,
  VolumeX,
  ExternalLink,
  Scale,
  Share2,
  Check,
  Globe,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  MessageCircle,
  Facebook
} from 'lucide-react';
import { SupportedLanguage } from '../types/constitution';
import {
  legalBulletinService,
  BulletinArticle,
  GroundingSource
} from '../services/legalBulletinService';
import { speechService, SpeechStatus } from '../services/speechService';

interface DailyLegalBulletinTabProps {
  currentLang: SupportedLanguage;
  onReadSection: (sectionNumber: number) => void;
  speechStatus: SpeechStatus;
}

export const DailyLegalBulletinTab: React.FC<DailyLegalBulletinTabProps> = ({
  currentLang,
  onReadSection,
  speechStatus,
}) => {
  const [articles, setArticles] = useState<BulletinArticle[]>([]);
  const [groundingSources, setGroundingSources] = useState<GroundingSource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<string>('loading');

  const fetchNews = async (forceRefresh = false) => {
    if (forceRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const data = await legalBulletinService.getBulletin(forceRefresh);
      setArticles(data.articles);
      setGroundingSources(data.groundingSources);
      setDataSource(data.source);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const categories = [
    { key: 'all', ha: 'Duka Labaran', yo: 'Gbogbo Iroyin', ig: 'Akụkọ Niile' },
    { key: 'Hakkokin Dan Adam', ha: 'Hakkokin Dan Adam', yo: 'Ẹtọ Ọmọniyan', ig: 'Ikike Mmadụ' },
    { key: 'Hukuncin Kotu', ha: 'Hukuncin Kotu', yo: 'Idajọ Ile-ẹjọ', ig: 'Ikpe Ụlọikpe' },
    { key: 'Gyaran Doka', ha: 'Gyaran Doka', yo: 'Atunyẹwo Ofin', ig: 'Ndozigharị Iwu' },
    { key: 'Yaki da Rashawa', ha: 'Yaki da Rashawa', yo: 'Gbogun ti Ibajẹ', ig: 'Ịlụso Nrụrụ Aka Ọgụ' },
  ];

  const filteredArticles = articles.filter((art) => {
    if (selectedCategory === 'all') return true;
    return art.category === selectedCategory;
  });

  const getLocalizedTitle = (art: BulletinArticle) => {
    if (currentLang === 'yo') return art.yorubaTitle || art.title;
    if (currentLang === 'ig') return art.igboTitle || art.title;
    return art.hausaTitle || art.title;
  };

  const getLocalizedSummary = (art: BulletinArticle) => {
    if (currentLang === 'yo') return art.yorubaSummary || art.summary;
    if (currentLang === 'ig') return art.igboSummary || art.summary;
    return art.hausaSummary || art.summary;
  };

  const handleSpeakArticle = (art: BulletinArticle) => {
    const isSpeakingThis = speechStatus.activeId === `bul-${art.id}` && speechStatus.isPlaying;
    if (isSpeakingThis) {
      speechService.pause();
    } else if (speechStatus.activeId === `bul-${art.id}` && speechStatus.isPaused) {
      speechService.resume();
    } else {
      const title = getLocalizedTitle(art);
      const summary = getLocalizedSummary(art);
      const script = `${title}. ${summary}. Dokar Kundin Tsarin Mulki: ${art.constitutionalSection}.`;
      speechService.speak(`bul-${art.id}`, script, currentLang);
    }
  };

  const handleCopyArticle = (art: BulletinArticle) => {
    const title = getLocalizedTitle(art);
    const summary = getLocalizedSummary(art);
    const text = `📰 [Mujallar Doka - Daily Legal Bulletin]
${title}

⚖️ Sashe a Kundin Mulki: ${art.constitutionalSection}

👉 Bayani:
${summary}

🔗 Majiya: ${art.source} (${art.url})
👑 AVAR Royal Family Access - Founder: King Abbas Aliyu (+2347033840619)`;

    navigator.clipboard?.writeText(text);
    setCopiedId(art.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner Card */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-emerald-950/50 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>Google Search Grounding · Live Web</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 text-[11px] font-mono border border-neutral-700">
                1999 Constitution & Human Rights
              </span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {currentLang === 'ha'
                ? 'Mujallar Doka Ta Yau Da Kullum'
                : currentLang === 'yo'
                ? 'Iroyin Ofin Ojoojumọ (Daily Legal Bulletin)'
                : 'Akwụkwọ Akụkọ Iwu Kwa Ụbọchị'}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {currentLang === 'ha'
                ? 'Labaran da suka shafi Kundin Tsarin Mulkin 1999, hakkokin dan adam, hukuncin Kotun Koli, da kokarin yaki da rashawa a Najeriya kai tsaye daga Google Search Grounding.'
                : currentLang === 'yo'
                ? 'Awọn iroyin titun lori iwe ofin orilẹ-ede 1999, ẹtọ ọmọniyan, idajọ ile-ẹjọ giga, ati ijakadi lodi si ibajẹ ni Nigeria.'
                : 'Akụkọ kachasị ọhụrụ gbasara Iwu 1999 nke Nigeria, ikike mmadụ, mkpebi Ụlọikpe Kasị Elu, na mgbochi nrụrụ aka.'}
            </p>
          </div>

          {/* Action Refresh Button */}
          <div className="flex flex-col sm:flex-row items-start md:items-end gap-3 shrink-0">
            <button
              onClick={() => fetchNews(true)}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all disabled:opacity-50 min-h-[44px]"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>{refreshing ? 'Ana Sabuntowa...' : 'Sabunta Yanzu (Refresh Live)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const label = currentLang === 'yo' ? cat.yo : currentLang === 'ig' ? cat.ig : cat.ha;
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[44px] ${
                isActive
                  ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="p-12 text-center rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 animate-spin">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-white text-base">Ana Binciko Labaran Doka da Google Search...</h3>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            Gemini yana amfani da Google Search Grounding don tattara sahihan labaran Kundin Mulki na 1999 da hakkokin 'yan kasa.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((art) => {
            const isSpeakingThis =
              speechStatus.activeId === `bul-${art.id}` && speechStatus.isPlaying;
            const localizedTitle = getLocalizedTitle(art);
            const localizedSummary = getLocalizedSummary(art);

            return (
              <div
                key={art.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isSpeakingThis
                    ? 'bg-neutral-900 border-emerald-500 shadow-xl shadow-emerald-950/40 ring-1 ring-emerald-500/50'
                    : 'bg-neutral-900/80 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Card Header */}
                <div className="p-5 pb-3 border-b border-neutral-800/60 flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {art.category}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {art.date}
                    </span>
                  </div>

                  {/* Top Right Audio Button */}
                  <button
                    onClick={() => handleSpeakArticle(art)}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isSpeakingThis
                        ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/30'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white'
                    }`}
                    title="Saurari Labarin da Muryar AI"
                  >
                    {isSpeakingThis ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3 flex-1">
                  {/* Headline */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-white leading-snug">
                    {localizedTitle}
                  </h3>

                  {/* Constitutional section tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-600/30 text-amber-300 text-xs font-semibold">
                    <Scale className="w-3.5 h-3.5 text-amber-400" />
                    <span>{art.constitutionalSection}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {localizedSummary}
                  </p>

                  {/* Original English Title / Clarification */}
                  <div className="pt-2 text-[11px] text-neutral-400 font-mono italic">
                    Original Headline: "{art.title}"
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-neutral-950/70 border-t border-neutral-850 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-neutral-400">Majiya:</span>
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline"
                    >
                      <span>{art.source}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Read Section in Constitution */}
                    {art.sectionNumber && (
                      <button
                        onClick={() => onReadSection(art.sectionNumber!)}
                        className="px-2.5 py-1.5 rounded-lg bg-neutral-850 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                        title="Duba Sashen Kundin Mulki a Cikin App"
                      >
                        <Scale className="w-3 h-3 text-emerald-400" />
                        <span>Duba Sashe</span>
                      </button>
                    )}

                    {/* Share Button */}
                    <button
                      onClick={() => handleCopyArticle(art)}
                      className="px-2.5 py-1.5 rounded-lg bg-neutral-850 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 text-xs flex items-center gap-1"
                      title="Kwafi Labari"
                    >
                      {copiedId === art.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">An Kwafa!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>Kofi</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Grounding Sources Panel */}
      {groundingSources.length > 0 && (
        <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Kafofin Yanar Gizo na Google Search Grounding (Verified Grounding Sources):</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {groundingSources.map((source, idx) => (
              <a
                key={idx}
                href={source.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs text-neutral-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <span>{source.title}</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            ))}
          </div>

          <p className="text-[11px] text-neutral-500">
            Wadannan bayanai sun samo asali ne kai tsaye daga binciken Google Search Grounding a kan shafukan hukumomi da manyan jaridun Najeriya.
          </p>
        </div>
      )}
    </div>
  );
};

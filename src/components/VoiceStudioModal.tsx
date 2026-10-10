import React, { useState } from 'react';
import {
  X,
  Volume2,
  Play,
  Pause,
  Square,
  Sparkles,
  FileCode,
  Check,
  Plus,
  Trash2,
  Waves,
  Gauge
} from 'lucide-react';
import { SupportedLanguage, LANGUAGE_CONFIGS } from '../types/constitution';
import { speechService, SpeechStatus, VOICE_PROFILES } from '../services/speechService';
import { phoneticsService, PronunciationOverride } from '../services/phoneticsService';

interface VoiceStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: SupportedLanguage;
  speechStatus: SpeechStatus;
}

export const VoiceStudioModal: React.FC<VoiceStudioModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  speechStatus
}) => {
  const [activeTabLang, setActiveTabLang] = useState<SupportedLanguage>(currentLang);
  const [customInputText, setCustomInputText] = useState<string>('');
  const [newWord, setNewWord] = useState<string>('');
  const [newReplacement, setNewReplacement] = useState<string>('');
  const [overrides, setOverrides] = useState<PronunciationOverride[]>(() =>
    phoneticsService.getUserOverrides(activeTabLang)
  );
  const [copiedLexicon, setCopiedLexicon] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentProfile = VOICE_PROFILES[activeTabLang];
  const langConfig = LANGUAGE_CONFIGS[activeTabLang];

  const handleLangTabChange = (lang: SupportedLanguage) => {
    setActiveTabLang(lang);
    setOverrides(phoneticsService.getUserOverrides(lang));
    setCustomInputText('');
  };

  const handlePlayTestSentence = (lang: SupportedLanguage) => {
    const profile = VOICE_PROFILES[lang];
    speechService.speak(`test-sentence-${lang}`, profile.testSentence, lang);
  };

  const handlePlayCustom = () => {
    const textToSpeak = customInputText.trim() || currentProfile.testSentence;
    speechService.speak(`test-custom-${activeTabLang}`, textToSpeak, activeTabLang);
  };

  const handleAddOverride = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWord.trim() || !newReplacement.trim()) return;
    phoneticsService.addUserOverride(newWord.trim(), newReplacement.trim(), activeTabLang);
    setOverrides(phoneticsService.getUserOverrides(activeTabLang));
    setNewWord('');
    setNewReplacement('');
  };

  const handleRemoveOverride = (word: string) => {
    phoneticsService.removeUserOverride(word, activeTabLang);
    setOverrides(phoneticsService.getUserOverrides(activeTabLang));
  };

  const phoneticPreview = phoneticsService.process(
    customInputText.trim() || currentProfile.testSentence,
    activeTabLang
  );

  const plsFileMap: Record<SupportedLanguage, { fileName: string; path: string }> = {
    ha: { fileName: 'hausa_kano.pls', path: '/lexicons/hausa_kano.pls' },
    yo: { fileName: 'yoruba_ibadan.pls', path: '/lexicons/yoruba_ibadan.pls' },
    ig: { fileName: 'igbo_owerri.pls', path: '/lexicons/igbo_owerri.pls' }
  };

  const plsInfo = plsFileMap[activeTabLang];

  const handleCopyPls = () => {
    const samplePls = `<?xml version="1.0" encoding="UTF-8"?>
<lexicon version="1.0" xmlns="http://www.w3.org/2005/01/pronunciation-lexicon" xml:lang="${activeTabLang}">
  <!-- ${currentProfile.name} (${currentProfile.origin}) -->
  <lexeme>
    <grapheme>${activeTabLang === 'ha' ? 'na' : activeTabLang === 'yo' ? 'ṣe' : 'ị'}</grapheme>
    <phoneme>${activeTabLang === 'ha' ? 'nah' : activeTabLang === 'yo' ? 'shey' : 'ee'}</phoneme>
  </lexeme>
</lexicon>`;
    navigator.clipboard?.writeText(samplePls);
    setCopiedLexicon(true);
    setTimeout(() => setCopiedLexicon(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-emerald-950/80 border-b border-emerald-500/20 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Volume2 className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  Phonetic Studio
                </span>
                <span className="text-xs text-neutral-400">100% Equal Dialects</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-black text-white mt-1">
                Studio Muryoyi & Furuci (Voice & Pronunciation)
              </h2>
              <p className="text-xs text-neutral-300 mt-0.5">
                Gyaran furuci na musamman don kada AI ya yi kuskuren furta haruffa a Hausa, Yoruba, da Igbo.
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

        {/* Language Persona Selector Tabs (Hausa, Yoruba, Igbo) */}
        <div className="grid grid-cols-3 border-b border-neutral-800 bg-neutral-950/60 p-2 gap-2">
          {(['ha', 'yo', 'ig'] as SupportedLanguage[]).map((lang) => {
            const p = VOICE_PROFILES[lang];
            const cfg = LANGUAGE_CONFIGS[lang];
            const isTabActive = activeTabLang === lang;
            return (
              <button
                key={lang}
                onClick={() => handleLangTabChange(lang)}
                className={`py-3 px-3 rounded-2xl transition-all flex flex-col items-center justify-center text-center gap-1 min-h-[56px] ${
                  isTabActive
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-black">
                  <span>{cfg.flag}</span>
                  <span className="uppercase">{p.name}</span>
                </div>
                <span className={`text-[11px] ${isTabActive ? 'text-neutral-950/80 font-semibold' : 'text-neutral-400'}`}>
                  {p.origin} ({p.age}yrs)
                </span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Persona Card & Quick Test */}
          <div className="bg-neutral-950/80 rounded-2xl border border-neutral-800 p-4 sm:p-5 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-lg text-white">
                    {currentProfile.name}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {langConfig.nativeName}
                  </span>
                </div>
                <p className="text-xs text-neutral-400">
                  {currentProfile.description} · {currentProfile.origin}
                </p>
                <div className="text-[11px] text-amber-300/90 font-mono italic">
                  "{currentProfile.greeting.slice(0, 48)}..."
                </div>
              </div>

              {/* Direct Play Test Sentence Button */}
              <button
                onClick={() => handlePlayTestSentence(activeTabLang)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all min-h-[44px]"
              >
                {speechStatus.isPlaying && speechStatus.currentLang === activeTabLang ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Tsayar da Karatu (Pause)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Gwada Muryar {currentProfile.name} (Test Voice)</span>
                  </>
                )}
              </button>
            </div>

            {/* Test Sentence Display */}
            <div className="mt-4 pt-4 border-t border-neutral-850 bg-neutral-900/60 rounded-xl p-3 border border-neutral-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Jumlar Gwaji (Official Test Sentence):
              </span>
              <p className="text-xs sm:text-sm text-neutral-100 font-medium leading-relaxed">
                "{currentProfile.testSentence}"
              </p>
            </div>
          </div>

          {/* Interactive Pronunciation Sandbox (Live Before vs After) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Gwada Rubutu Da Kanka (Interactive Live Tester)</span>
              </h3>
              <span className="text-xs text-neutral-400">Real-Time Phonetic Engine</span>
            </div>

            <textarea
              rows={2}
              value={customInputText}
              onChange={(e) => setCustomInputText(e.target.value)}
              placeholder={`Rubuta kalma ko jumla a nan (misali: ${
                activeTabLang === 'yo'
                  ? 'Ṣe o mọ pe ọmọ Yoruba ni ẹ?'
                  : activeTabLang === 'ig'
                  ? 'Ị bụ nwanne m, ọ bụ nke gị?'
                  : 'Sashe na 34 ya ce cin hanci ba kyau'
              })...`}
              className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-500 p-3.5 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
            />

            {/* Comparison Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  1. Rubutun Ka (Input):
                </span>
                <p className="text-xs text-neutral-300 font-mono break-words">
                  {customInputText.trim() || currentProfile.testSentence}
                </p>
              </div>

              <div className="bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/30">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  2. Fassarar Furuci Da AI Ke Karanta (Phonetics):
                </span>
                <p className="text-xs text-emerald-300 font-mono break-words">
                  {phoneticPreview}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                onClick={handlePlayCustom}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs flex items-center gap-2 min-h-[44px]"
              >
                <Volume2 className="w-4 h-4" />
                <span>Saurara Yadda AI Zai Karanta</span>
              </button>

              <button
                onClick={() => speechService.stop()}
                className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs flex items-center gap-1.5 min-h-[44px]"
              >
                <Square className="w-3.5 h-3.5" />
                <span>Dakata (Stop)</span>
              </button>
            </div>
          </div>

          {/* Active Lexicon Rules & W3C PLS File Link */}
          <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <FileCode className="w-4 h-4 text-amber-400" />
                <span>Dokokin Furuci (Phonetic Rules Lexicon - W3C PLS)</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                {plsInfo.fileName}
              </span>
            </div>

            {activeTabLang === 'ha' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">c → ch</span>
                  <span className="text-[10px] text-neutral-400">ce = che, ciki = chiki</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">na → nah</span>
                  <span className="text-[10px] text-neutral-400">Kada a ce "N-A" acronym</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ƙ, ɓ, ɗ, ƴ</span>
                  <span className="text-[10px] text-neutral-400">Haruffan k, b, d, 'y</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">'ya, 'yan</span>
                  <span className="text-[10px] text-neutral-400">Glottal stop dabi'a</span>
                </div>
              </div>
            )}

            {activeTabLang === 'yo' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ṣ → sh</span>
                  <span className="text-[10px] text-neutral-400">ṣe = she, aṣẹ = ashey</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ẹ → eh</span>
                  <span className="text-[10px] text-neutral-400">Open 'e' sound</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ọ → aw / or</span>
                  <span className="text-[10px] text-neutral-400">ọmọ = awmaw</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">se → shey</span>
                  <span className="text-[10px] text-neutral-400">Standalone verb</span>
                </div>
              </div>
            )}

            {activeTabLang === 'ig' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ị → ee</span>
                  <span className="text-[10px] text-neutral-400">ịbụ = eeboo</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ụ → oo</span>
                  <span className="text-[10px] text-neutral-400">ọbụrụ = awbooro</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">ọ → aw</span>
                  <span className="text-[10px] text-neutral-400">ọrụ = awroo</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 font-mono font-bold block">nwanne</span>
                  <span className="text-[10px] text-neutral-400">Single continuous breath</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <a
                href={plsInfo.path}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 underline font-mono flex items-center gap-1"
              >
                <span>Duba Fayil din {plsInfo.fileName} (W3C PLS)</span>
              </a>
              <button
                onClick={handleCopyPls}
                className="text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 flex items-center gap-1"
              >
                {copiedLexicon ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                <span>{copiedLexicon ? 'An Kwafa!' : 'Kwafi Sample XML'}</span>
              </button>
            </div>
          </div>

          {/* Add Custom Word Pronunciation Overrides */}
          <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-4 space-y-3">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-400" />
              <span>Kara Sabuwar Dokar Furuci Da Kanka (Custom Word Overrides)</span>
            </h4>
            <p className="text-[11px] text-neutral-400">
              Idan akwai wata kalma da kake so AI ya fada ta wata hanya, rubuta kalmar da yadda za a furta ta:
            </p>

            <form onSubmit={handleAddOverride} className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              <input
                type="text"
                placeholder="Kalma (e.g. kano)"
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                className="sm:col-span-2 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 px-3 py-2 rounded-xl text-xs focus:outline-none focus:border-emerald-500"
              />
              <input
                type="text"
                placeholder="Furuci (e.g. kah-noh)"
                value={newReplacement}
                onChange={(e) => setNewReplacement(e.target.value)}
                className="sm:col-span-2 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 px-3 py-2 rounded-xl text-xs focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs px-3 py-2 rounded-xl flex items-center justify-center gap-1 min-h-[40px]"
              >
                <Plus className="w-4 h-4" />
                <span>Ajiye</span>
              </button>
            </form>

            {overrides.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                  Dokokinka da ka kirkira ({overrides.length}):
                </span>
                <div className="flex flex-wrap gap-2">
                  {overrides.map((ov) => (
                    <div
                      key={ov.word}
                      className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-xl text-xs text-neutral-300"
                    >
                      <span className="font-bold text-white">{ov.word}</span>
                      <span className="text-neutral-500">→</span>
                      <span className="text-emerald-400 font-mono">{ov.replacement}</span>
                      <button
                        onClick={() => handleRemoveOverride(ov.word)}
                        className="text-neutral-500 hover:text-red-400 ml-1 p-0.5"
                        aria-label="Goge"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Voice Controls (Sapele Water & Speed) */}
          <div className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-neutral-300">Sautin Ruwan Sapele a Bango:</span>
              <button
                onClick={() => speechService.toggleWaterSound()}
                className={`px-3 py-1 rounded-lg font-bold text-xs ${
                  speechStatus.waterSound
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {speechStatus.waterSound ? 'KUNNA (ON)' : 'KASHE (OFF)'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-neutral-300">Gudun Magana:</span>
              <span className="font-mono text-emerald-400 font-bold">
                {speechStatus.rate.toFixed(1)}x
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
          <div className="text-[11px] text-neutral-400">
            Founder: <strong>King Abbas Aliyu</strong> · AVAR Royal Family
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs"
          >
            Kammala (Done)
          </button>
        </div>
      </div>
    </div>
  );
};

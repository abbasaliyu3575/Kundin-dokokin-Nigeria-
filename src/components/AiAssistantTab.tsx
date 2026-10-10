import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Volume2, ArrowRight, Bot, User, Scale } from 'lucide-react';
import { TriLingualSection, SupportedLanguage } from '../types/constitution';
import { UI_TRANSLATIONS } from '../data/uiTranslations';
import {
  POPULAR_QUESTIONS_BY_LANG,
  askConstitutionAi,
  AiAnswer
} from '../services/constitutionAiService';
import { speechService } from '../services/speechService';

interface AiAssistantTabProps {
  currentLang: SupportedLanguage;
  onSelectSection: (sectionNumber: number) => void;
  onOpenWhistleblower: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  citedSections?: TriLingualSection[];
  practicalAdvice?: string;
  timestamp: string;
}

export const AiAssistantTab: React.FC<AiAssistantTabProps> = ({
  currentLang,
  onSelectSection,
  onOpenWhistleblower
}) => {
  const ui = UI_TRANSLATIONS[currentLang];
  const [inputQuery, setInputQuery] = useState('');
  
  const getWelcomeText = (lang: SupportedLanguage) => {
    if (lang === 'yo') {
      return 'Ẹ káàbọ̀! Èmi ni Olùkọ́ Ìwé Òfin pẹ̀lú AI. Bèrè ohunkóhun nípa àwọn ẹ̀tọ́ rẹ, aabo, ọlọ́pàá, beli, ilẹ̀, tàbí titú àṣírí àwọn olè ní Èdè Yorùbá!';
    }
    if (lang === 'ig') {
      return 'Nnọọ! Abụ m Ọka Iwu Akwụkwọ Iwu na AI. Jụọ m ihe ọ bụla gbasara ikike gị, nchekwa, ndị uwe ojii, mgbapụta, ala, ma ọ bụ ikpughe ndị ohi n’Asụsụ Igbo!';
    }
    return 'Barka da zuwa Sarki! Ni ne Malamin Kundin Tsarin Mulkin Najeriya da AI. Tambaye ni komai game da hakkokinka, tsaro, \'yan sanda, beli, fili, ko tona asirin barayi a harshen Hausa zalla!';
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: getWelcomeText(currentLang),
      timestamp: 'Yanzu'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  // When language changes, update welcome message if it's the only one
  useEffect(() => {
    if (messages.length === 1 && messages[0].id === 'welcome') {
      setMessages([
        {
          id: 'welcome',
          sender: 'ai',
          text: getWelcomeText(currentLang),
          timestamp: 'Yanzu'
        }
      ]);
    }
  }, [currentLang]);

  const handleSendQuery = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Yanzu'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsProcessing(true);

    setTimeout(() => {
      const response: AiAnswer = askConstitutionAi(query, currentLang);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.answerText,
        citedSections: response.citedSections,
        practicalAdvice: response.practicalAdvice,
        timestamp: 'Yanzu'
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsProcessing(false);
    }, 350);
  };

  const handleSpeakText = (id: string, text: string) => {
    speechService.speak(id, text, currentLang);
  };

  const popularQuestions = POPULAR_QUESTIONS_BY_LANG[currentLang];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-emerald-950/80 border border-emerald-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {ui.founderBadge}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-white">
              {ui.aiHeroTitle}
            </h2>
            <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
              {ui.aiHeroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Quick Questions */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
          {ui.aiQuickTitle}
        </div>
        <div className="flex flex-wrap gap-2">
          {popularQuestions.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuery(item.question)}
              className="text-xs bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-emerald-300 px-3 py-2 rounded-xl border border-neutral-800 hover:border-emerald-500/40 transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <span>💬 {item.question}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="space-y-4 min-h-[300px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-br-none'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-bl-none'
              }`}
            >
              <div className="whitespace-pre-line font-medium mb-2">{msg.text}</div>

              {msg.practicalAdvice && (
                <div className="mt-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-amber-300">
                  <span className="font-bold block mb-0.5">{ui.aiPracticalAdvice}</span>
                  {msg.practicalAdvice}
                </div>
              )}

              {/* Cited Sections */}
              {msg.citedSections && msg.citedSections.length > 0 && (
                <div className="mt-3 pt-3 border-t border-neutral-800/80 space-y-1.5">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    {ui.aiSectionRef}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {msg.citedSections.map((sec) => {
                      const secContent = sec[currentLang];
                      return (
                        <button
                          key={sec.id}
                          onClick={() => onSelectSection(sec.sectionNumber)}
                          className="text-xs bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-300 px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors min-h-[38px]"
                        >
                          <Scale className="w-3.5 h-3.5" />
                          <span>
                            Section {sec.sectionNumber}: {secContent.title.split(':')[1] || secContent.title}
                          </span>
                          <ArrowRight className="w-3 h-3 ml-0.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Voice playback button for AI reply */}
              {msg.sender === 'ai' && (
                <div className="mt-3 pt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                  <button
                    onClick={() =>
                      handleSpeakText(msg.id, `${msg.text} ${msg.practicalAdvice || ''}`)
                    }
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold min-h-[44px] py-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{ui.btnListen}</span>
                  </button>
                  <span className="text-neutral-500 text-[11px]">{msg.timestamp}</span>
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-9 h-9 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isProcessing && (
          <div className="flex items-center gap-2 text-xs text-emerald-400 p-3 bg-neutral-900/50 rounded-xl w-fit">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{ui.aiThinking}</span>
          </div>
        )}
      </div>

      {/* Input box */}
      <div className="sticky bottom-20 md:bottom-6 bg-neutral-950/90 backdrop-blur-md p-2 rounded-2xl border border-neutral-800 shadow-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendQuery();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={ui.aiInputPlaceholder}
            className="flex-1 bg-neutral-900 text-white placeholder:text-neutral-500 px-4 py-3 rounded-xl border border-neutral-700 focus:outline-none focus:border-emerald-500 text-sm"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="w-12 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-neutral-950 flex items-center justify-center font-bold transition-all shrink-0 min-h-[48px] min-w-[48px]"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

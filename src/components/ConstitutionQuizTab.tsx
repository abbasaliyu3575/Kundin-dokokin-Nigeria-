import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Volume2,
  ArrowRight,
  RotateCcw,
  Award,
  Crown,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { SECTION_QUIZZES, QuizQuestion } from '../data/quizData';
import { TRI_LINGUAL_SECTIONS } from '../data/triLingualData';
import { SupportedLanguage } from '../types/constitution';
import { speechService } from '../services/speechService';

interface ConstitutionQuizTabProps {
  currentLang: SupportedLanguage;
  initialSectionNumber?: number;
  onReadSection: (secNum: number) => void;
}

export const ConstitutionQuizTab: React.FC<ConstitutionQuizTabProps> = ({
  currentLang,
  initialSectionNumber = 34,
  onReadSection
}) => {
  const [selectedSecNum, setSelectedSecNum] = useState<number>(initialSectionNumber);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);

  // Available sections that have quiz questions
  const availableQuizSections = Object.keys(SECTION_QUIZZES).map((k) => parseInt(k, 10));

  // Get current questions or fallback to Section 34
  const questions: QuizQuestion[] =
    SECTION_QUIZZES[selectedSecNum] || SECTION_QUIZZES[34];
  const currentQ = questions[currentIndex];

  const handleSelectSection = (secNum: number) => {
    setSelectedSecNum(secNum);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  const handleSpeakQuestion = () => {
    const qText = currentQ.question[currentLang] || currentQ.question.ha;
    const expText = isAnswerSubmitted
      ? ` Bayani: ${currentQ.explanation[currentLang] || currentQ.explanation.ha}`
      : '';
    speechService.speak(`quiz-${currentQ.id}`, `${qText}.${expText}`, currentLang);
  };

  // Section title lookup
  const matchedSection = TRI_LINGUAL_SECTIONS.find((s) => s.sectionNumber === selectedSecNum);
  const sectionTitle = matchedSection
    ? matchedSection[currentLang].title
    : `Section ${selectedSecNum}`;

  const langLabel =
    currentLang === 'ha'
      ? 'Tambayoyin Gwaji (Quiz)'
      : currentLang === 'yo'
      ? 'Idanwo Ofin (Quiz)'
      : 'Ule Iwu (Quiz)';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-neutral-900 to-amber-950/60 border border-emerald-500/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  AVAR ROYAL CONSTITUTION SCHOLAR · {langLabel}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-white">
                Gwada Iliminka a Kan Dokokin Kasa
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                Amsa tambayoyi 3 masu sauki don tabbatar da fahimtarka bayan karanta wannan sashe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Selector Pills */}
      <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
        <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2.5">
          Zabi Sashen Da Kake Son Yin Gwaji a Kai:
        </label>
        <div className="flex flex-wrap gap-2">
          {availableQuizSections.map((secNum) => {
            const sec = TRI_LINGUAL_SECTIONS.find((s) => s.sectionNumber === secNum);
            const isSelected = selectedSecNum === secNum;
            return (
              <button
                key={secNum}
                onClick={() => handleSelectSection(secNum)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 min-h-[44px] ${
                  isSelected
                    ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/30'
                    : 'bg-neutral-950 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <span>Section {secNum}</span>
                {sec && (
                  <span className="text-[11px] opacity-80 truncate max-w-[140px] hidden sm:inline">
                    · {sec[currentLang].title.split(':')[1]?.trim() || sec[currentLang].title}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Quiz Card */}
      {!isQuizComplete ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl space-y-6">
          {/* Header of Question */}
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Tambaya {currentIndex + 1} / {questions.length}
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs font-medium text-neutral-400">
                Section {selectedSecNum}
              </span>
            </div>

            {/* Listen button for this question */}
            <button
              onClick={handleSpeakQuestion}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-emerald-400 text-xs font-semibold border border-neutral-700 min-h-[44px]"
            >
              <Volume2 className="w-4 h-4" />
              <span>Saurara 🔊</span>
            </button>
          </div>

          {/* Question Text */}
          <div>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white leading-relaxed">
              {currentQ.question[currentLang] || currentQ.question.ha}
            </h3>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {(currentQ.options[currentLang] || currentQ.options.ha).map((optText, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;

              let optionStyle =
                'bg-neutral-950/80 hover:bg-neutral-800 border-neutral-800 text-neutral-200';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-lg';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'bg-red-950/80 border-red-500 text-red-200';
                }
              } else if (isSelected) {
                optionStyle = 'bg-emerald-950/50 border-emerald-500 text-white shadow-md';
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleOptionClick(optIdx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 min-h-[52px] ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="text-sm sm:text-base font-medium flex-1">{optText}</span>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner (Shows after answer is submitted) */}
          {isAnswerSubmitted && (
            <div
              className={`p-4 rounded-2xl border ${
                selectedOption === currentQ.correctIndex
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                  : 'bg-amber-950/40 border-amber-500/50 text-amber-200'
              }`}
            >
              <div className="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                {selectedOption === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Madalla! Amsarka Daidai Ce! 🎉</span>
                  </>
                ) : (
                  <>
                    <HelpCircle className="w-4 h-4 text-amber-400" />
                    <span>Duba Abin Da Doka Ta Ce:</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {currentQ.explanation[currentLang] || currentQ.explanation.ha}
              </p>
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
            <button
              onClick={() => onReadSection(selectedSecNum)}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Sake Karanta Sashen</span>
            </button>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 min-h-[44px]"
              >
                Tabbatar Da Amsa
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 min-h-[44px]"
              >
                <span>
                  {currentIndex + 1 < questions.length ? 'Tambaya Ta Gaba' : 'Duba Sakamako'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Complete Screen */
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-emerald-500/40 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto shadow-xl shadow-amber-500/10">
            <Crown className="w-10 h-10 animate-bounce" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
              SAKAMAKON GWAJIN DOKA · AVAR ROYAL FAMILY
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {score === questions.length
                ? 'Gwarzon Kundin Tsarin Mulki! 👑'
                : score >= 2
                ? 'Kyakkyawan Kokari! 🎖️'
                : 'Ci Gaba Da Karatu! 📖'}
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
              Ka samu maki <strong>{score}</strong> cikin <strong>{questions.length}</strong> a kan{' '}
              <span className="text-emerald-400 font-semibold">{sectionTitle}</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm border border-neutral-700 min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Sake Gwajin</span>
            </button>

            <button
              onClick={() => onReadSection(selectedSecNum)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Koma Shagon Dokoki</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

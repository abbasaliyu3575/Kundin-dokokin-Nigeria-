import { SupportedLanguage } from '../types/constitution';

export interface PronunciationOverride {
  word: string;
  replacement: string;
  lang: SupportedLanguage;
}

const DEFAULT_OVERRIDES_KEY = 'avar_pronunciation_overrides_v1';

/**
 * Explicit standalone Yoruba pronunciation corrector requested by user:
 * Corrects tone letters and vowels:
 * - ṣ -> sh
 * - ẹ -> eh
 * - ọ -> aw
 * - \bse\b -> she
 */
export function correctYorubaPronunciation(text: string): string {
  return text
    .replace(/ṣ/gi, 'sh')
    .replace(/[ẹẹ́ẹ̀]/gi, 'eh')
    .replace(/[ọọ́ọ̀]/gi, 'aw')
    .replace(/\bse\b/gi, 'she')
    .replace(/\bṣe\b/gi, 'she')
    .replace(/\bọmọ\b/gi, 'awmaw')
    .replace(/\bpe\b/gi, 'peh');
}

/**
 * Explicit standalone Hausa pronunciation corrector for A'ishah 'Yar Kano:
 * - c = ch (che, not se)
 * - na = na (not N.A)
 * - cha = cha
 * - 'ya = 'ya with glottal stop
 * - ƙ, ɓ, ɗ, ƴ -> phonetic clean equivalents
 */
export function correctHausaPronunciation(text: string): string {
  let t = text;

  // Replace isolated 'na' and 'ta' to avoid English TTS saying "N.A."
  t = t
    .replace(/\bna\b/g, 'nah')
    .replace(/\bNa\b/g, 'Nah')
    .replace(/\bta\b/g, 'tah')
    .replace(/\bTa\b/g, 'Tah');

  // Convert all 'c' not already followed by 'h' to 'ch' (e.g. ce -> che, ci -> chi, cikin -> chikin, caji -> chaji)
  t = t.replace(/c(?!h)/g, 'ch').replace(/C(?!h)/g, 'Ch');

  // Clean hooked consonants
  t = t
    .replace(/ƙ/g, 'k')
    .replace(/Ƙ/g, 'K')
    .replace(/ɓ/g, 'b')
    .replace(/Ɓ/g, 'B')
    .replace(/ɗ/g, 'd')
    .replace(/Ɗ/g, 'D')
    .replace(/ƴ/g, "'y")
    .replace(/Ƴ/g, "'Y");

  // Glottal stops for children / youth
  t = t
    .replace(/\b[dD]an\b/g, 'dahn')
    .replace(/\b[yY]an\b/g, 'yahn');

  return t;
}

/**
 * Explicit standalone Igbo pronunciation corrector for Ngozi (Owerri / Anambra):
 * - ị -> ee
 * - ụ -> oo
 * - ọ -> aw
 * - nwanne -> nwahnneh
 * - onye -> onyeh
 * - ndị -> ndee
 */
export function correctIgboPronunciation(text: string): string {
  let t = text;

  // Dotted vowels
  t = t
    .replace(/[ịị́ị̀]/g, 'ee')
    .replace(/[ỊỊ́Ị̀]/g, 'Ee')
    .replace(/[ụụ́ụ̀]/g, 'oo')
    .replace(/[ỤỤ́Ụ̀]/g, 'Oo')
    .replace(/[ọọ́ọ̀]/g, 'aw')
    .replace(/[ỌỌ́Ọ̀]/g, 'Aw');

  // Igbo idioms and frequent vocabulary
  t = t
    .replace(/\bnwanne\b/gi, 'nwahnneh')
    .replace(/\bonye\b/gi, 'onyeh')
    .replace(/\bndị\b/gi, 'ndee')
    .replace(/\bndi\b/gi, 'ndee')
    .replace(/\bọbụrụ\b/gi, 'awbooro')
    .replace(/\bọrụ\b/gi, 'awroo')
    .replace(/\bọchịchị\b/gi, 'awcheechih')
    .replace(/\bmkpọrọ\b/gi, 'mkpawraw')
    .replace(/\bọka\b/gi, 'awkah')
    .replace(/\bọfụma\b/gi, 'awfooma')
    .replace(/\bchọrọ\b/gi, 'chawraw')
    .replace(/\bịbụ\b/gi, 'eeboo')
    .replace(/\bagaghị\b/gi, 'agagee')
    .replace(/\bnkịta\b/gi, 'nkeetah');

  return t;
}

class PhoneticsService {
  private userOverrides: PronunciationOverride[] = [];

  constructor() {
    this.loadUserOverrides();
  }

  private loadUserOverrides() {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(DEFAULT_OVERRIDES_KEY);
        if (saved) {
          this.userOverrides = JSON.parse(saved);
        }
      }
    } catch {
      this.userOverrides = [];
    }
  }

  public addUserOverride(word: string, replacement: string, lang: SupportedLanguage) {
    this.userOverrides = this.userOverrides.filter(
      o => !(o.word.toLowerCase() === word.toLowerCase() && o.lang === lang)
    );
    this.userOverrides.push({ word, replacement, lang });
    try {
      localStorage.setItem(DEFAULT_OVERRIDES_KEY, JSON.stringify(this.userOverrides));
    } catch {
      // ignore
    }
  }

  public removeUserOverride(word: string, lang: SupportedLanguage) {
    this.userOverrides = this.userOverrides.filter(
      o => !(o.word.toLowerCase() === word.toLowerCase() && o.lang === lang)
    );
    try {
      localStorage.setItem(DEFAULT_OVERRIDES_KEY, JSON.stringify(this.userOverrides));
    } catch {
      // ignore
    }
  }

  public getUserOverrides(lang: SupportedLanguage): PronunciationOverride[] {
    return this.userOverrides.filter(o => o.lang === lang);
  }

  public correctHausa(text: string): string {
    let t = text;
    const langOverrides = this.getUserOverrides('ha');
    for (const ov of langOverrides) {
      const reg = new RegExp(`\\b${ov.word}\\b`, 'gi');
      t = t.replace(reg, ov.replacement);
    }
    return correctHausaPronunciation(t);
  }

  public correctYoruba(text: string): string {
    let t = text;
    const langOverrides = this.getUserOverrides('yo');
    for (const ov of langOverrides) {
      const reg = new RegExp(`\\b${ov.word}\\b`, 'gi');
      t = t.replace(reg, ov.replacement);
    }
    return correctYorubaPronunciation(t);
  }

  public correctIgbo(text: string): string {
    let t = text;
    const langOverrides = this.getUserOverrides('ig');
    for (const ov of langOverrides) {
      const reg = new RegExp(`\\b${ov.word}\\b`, 'gi');
      t = t.replace(reg, ov.replacement);
    }
    return correctIgboPronunciation(t);
  }

  public process(text: string, lang: SupportedLanguage): string {
    if (lang === 'yo') {
      return this.correctYoruba(text);
    }
    if (lang === 'ig') {
      return this.correctIgbo(text);
    }
    return this.correctHausa(text);
  }
}

export const phoneticsService = new PhoneticsService();


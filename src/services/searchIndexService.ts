import { TRI_LINGUAL_SECTIONS } from '../data/triLingualData';
import { TriLingualSection, SupportedLanguage } from '../types/constitution';

// Search record structure for each section in a given language
export interface SearchRecord {
  id: string;
  sectionNumber: number;
  lang: SupportedLanguage;
  title: string;
  summary: string;
  misali: string;
  hukunci: string;
  tags: string[];
  englishTitle: string;
}

class SearchIndexService {
  private records: SearchRecord[] = [];
  private tokenIndex: Map<string, Set<string>> = new Map();

  constructor() {
    this.buildIndex();
  }

  private buildIndex() {
    this.records = [];
    this.tokenIndex.clear();

    const languages: SupportedLanguage[] = ['ha', 'yo', 'ig'];

    for (const section of TRI_LINGUAL_SECTIONS) {
      for (const lang of languages) {
        const content = section[lang];
        const record: SearchRecord = {
          id: `${section.id}-${lang}`,
          sectionNumber: section.sectionNumber,
          lang,
          title: content.title,
          summary: content.summary,
          misali: content.misali,
          hukunci: content.hukunci,
          tags: content.tags,
          englishTitle: section.englishTitle
        };

        this.records.push(record);

        // Index tokens
        const fullCorpus = [
          `section ${section.sectionNumber}`,
          `sashe ${section.sectionNumber}`,
          `abala ${section.sectionNumber}`,
          `ngalaba ${section.sectionNumber}`,
          section.sectionNumber.toString(),
          section.englishTitle,
          content.title,
          content.summary,
          content.misali,
          content.hukunci,
          ...content.tags
        ]
          .join(' ')
          .toLowerCase();

        // Tokenize words
        const words = fullCorpus.split(/[^a-zA-Z0-9áàéèíìóòúùẹ́ẹ̀ọ́ọ̀ṣṅñ]+/);
        for (const word of words) {
          if (word.length >= 2) {
            if (!this.tokenIndex.has(word)) {
              this.tokenIndex.set(word, new Set());
            }
            this.tokenIndex.get(word)!.add(record.id);

            // Also prefix index first 3-5 chars for instant typing search
            for (let i = 2; i <= Math.min(word.length, 5); i++) {
              const prefix = word.substring(0, i);
              if (!this.tokenIndex.has(prefix)) {
                this.tokenIndex.set(prefix, new Set());
              }
              this.tokenIndex.get(prefix)!.add(record.id);
            }
          }
        }
      }
    }
  }

  /**
   * Fast full-text search without any external network call.
   * Filters by the user's active language, matching against titles,
   * summaries, section numbers, street allegories, and tags.
   */
  public search(query: string, lang: SupportedLanguage): TriLingualSection[] {
    const q = query.trim().toLowerCase();
    if (!q) {
      return TRI_LINGUAL_SECTIONS;
    }

    // Direct section number query (e.g. "34", "sec 34", "section 34", "sashe 34")
    const numMatch = q.match(/\b\d+\b/);
    if (numMatch) {
      const targetNum = parseInt(numMatch[0], 10);
      const exactSection = TRI_LINGUAL_SECTIONS.find(s => s.sectionNumber === targetNum);
      if (exactSection) {
        // Return exact section first, followed by others that mention it
        const others = this.searchFuzzy(q, lang).filter(s => s.sectionNumber !== targetNum);
        return [exactSection, ...others];
      }
    }

    return this.searchFuzzy(q, lang);
  }

  private searchFuzzy(query: string, lang: SupportedLanguage): TriLingualSection[] {
    const terms = query
      .toLowerCase()
      .split(/\s+/)
      .filter(t => t.length > 0);

    if (terms.length === 0) return TRI_LINGUAL_SECTIONS;

    // Score map: section.id -> score
    const scores = new Map<string, number>();

    for (const term of terms) {
      // Find matching record IDs from token index
      const matchingRecordIds = this.tokenIndex.get(term) || new Set();

      for (const recId of matchingRecordIds) {
        // Check if record matches active language
        if (!recId.endsWith(`-${lang}`)) continue;

        const baseSectionId = recId.replace(`-${lang}`, '');
        const currentScore = scores.get(baseSectionId) || 0;
        scores.set(baseSectionId, currentScore + 10);
      }
    }

    // Direct substring scan boost for full phrase
    for (const section of TRI_LINGUAL_SECTIONS) {
      const content = section[lang];
      const corpus = `${content.title} ${content.summary} ${content.misali} ${content.hukunci} ${section.englishTitle}`.toLowerCase();
      
      if (corpus.includes(query.toLowerCase())) {
        const cur = scores.get(section.id) || 0;
        scores.set(section.id, cur + 25);
      }

      // Check section number
      if (`${section.sectionNumber}` === query.trim()) {
        const cur = scores.get(section.id) || 0;
        scores.set(section.id, cur + 50);
      }
    }

    // If nothing found in active language, search all languages as fallback
    if (scores.size === 0) {
      for (const term of terms) {
        const matchingRecordIds = this.tokenIndex.get(term) || new Set();
        for (const recId of matchingRecordIds) {
          const baseSectionId = recId.replace(/-[a-z]{2}$/, '');
          const currentScore = scores.get(baseSectionId) || 0;
          scores.set(baseSectionId, currentScore + 5);
        }
      }
    }

    // Sort by score descending
    const sortedSectionIds = Array.from(scores.entries())
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    return sortedSectionIds
      .map(id => TRI_LINGUAL_SECTIONS.find(s => s.id === id)!)
      .filter(Boolean);
  }
}

export const searchIndexService = new SearchIndexService();

import { SupportedLanguage } from '../types/constitution';
import { phoneticsService } from './phoneticsService';

export type VoicePersona = 'aishah' | 'alajah' | 'ngozi' | 'sardauna';

export interface VoiceProfile {
  name: string;
  age: string;
  origin: string;
  lang: SupportedLanguage;
  greeting: string;
  rate: number;
  pitch: number;
  description: string;
  testSentence: string;
}

export const VOICE_PROFILES: Record<SupportedLanguage, VoiceProfile> = {
  ha: {
    name: "A'ishah",
    age: '22',
    origin: 'Kano (Freedom Radio)',
    lang: 'ha',
    greeting: 'Sannu da zuwa, yaya na... To, bari in karanta maka wannan sashe cikin sauki... ',
    rate: 0.90,
    pitch: 1.08,
    description: "Muryar A'ishah 'Yar Kano (22yrs) - Northern Kano accent",
    testSentence: "To kaji, sashe na talatin da hudu ya ce: Ba za a maidaka kare ba! Cin hanci da caji ofis ba na gaskiya ba ne."
  },
  yo: {
    name: 'Alajah',
    age: '28',
    origin: 'Ibadan / Lagos (Iya Ibeji)',
    lang: 'yo',
    greeting: 'Ẹ kaabo, ẹ ku owuro, ọmọ mi... Jẹ ki n ka abala ofin yi fun ọ ni pẹlẹmọ... ',
    rate: 0.88,
    pitch: 0.98,
    description: 'Muryar Alajah (28yrs) - Yoruba Alhaja mature & respectful',
    testSentence: 'Ṣe o mọ pe ọmọ Yoruba ni ẹ? Abala ọgbọ̀nle mẹrin sọ pe eniyan ko ni di aja!'
  },
  ig: {
    name: 'Ngozi',
    age: '24',
    origin: 'Owerri / Anambra',
    lang: 'ig',
    greeting: 'Nnọọ, nwanne m... Ka m gụọrọ gị ngalaba iwu a nwayọọ nwayọọ... ',
    rate: 0.92,
    pitch: 1.10,
    description: 'Muryar Ngozi (24yrs) - Sweet bright Igbo sister',
    testSentence: 'Ị bụ nwanne m, ọ bụ nke gị? Ngalaba iri atọ na anọ kwuru na agaghị eme gị ka nkịta!'
  }
};

export interface SpeechStatus {
  isPlaying: boolean;
  isPaused: boolean;
  activeId: string | null;
  rate: number;
  pitch: number;
  progress: number;
  currentLang: SupportedLanguage;
  activeVoiceName: string;
  persona: VoicePersona;
  waterSound: boolean;
}

type SpeechCallback = (status: SpeechStatus) => void;

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private listeners: SpeechCallback[] = [];
  
  private currentLang: SupportedLanguage = 'ha';
  private persona: VoicePersona = 'aishah';
  private rate: number = 0.90;
  private waterSound: boolean = true;
  private activeId: string | null = null;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private totalWords: number = 0;
  private currentWordIndex: number = 0;

  // Web Audio Sapele river water sound generator
  private audioCtx: AudioContext | null = null;
  private waterNoiseNode: AudioNode | null = null;
  private waterGain: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.cachedVoices = this.synth.getVoices();
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (this.cachedVoices.length === 0 && this.synth) {
      this.cachedVoices = this.synth.getVoices();
    }
    return this.cachedVoices;
  }

  private startWaterSound() {
    if (!this.waterSound) return;
    try {
      if (!this.audioCtx) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      if (!this.waterGain) {
        const bufferSize = 2 * this.audioCtx.sampleRate;
        const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99 * b0 + white * 0.05;
          b1 = 0.96 * b1 + white * 0.11;
          b2 = 0.86 * b2 + white * 0.25;
          output[i] = (b0 + b1 + b2) * 0.08;
        }

        const whiteNoise = this.audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);
        filter.Q.setValueAtTime(1.2, this.audioCtx.currentTime);

        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        whiteNoise.start();
        this.waterNoiseNode = whiteNoise;
        this.waterGain = gain;
      }
    } catch {
      // AudioContext fallback
    }
  }

  private stopWaterSound() {
    try {
      if (this.waterNoiseNode) {
        (this.waterNoiseNode as AudioBufferSourceNode).stop();
        this.waterNoiseNode.disconnect();
        this.waterNoiseNode = null;
      }
      if (this.waterGain) {
        this.waterGain.disconnect();
        this.waterGain = null;
      }
    } catch {
      // ignore
    }
  }

  /**
   * Prioritizes Cloud WaveNet, Google, and African native female voices
   */
  private findBestVoice(lang: SupportedLanguage, persona: VoicePersona): SpeechSynthesisVoice | null {
    const voices = this.getVoices();
    if (!voices || voices.length === 0) return null;

    const targetLangCode = lang === 'ha' ? 'ha' : lang === 'yo' ? 'yo' : 'ig';
    const targetTag = `${targetLangCode}-ng`;

    // 1. Check for Wavenet / Google Neural native voices first
    const wavenetMatch = voices.find(
      v =>
        (v.name.toLowerCase().includes('wavenet') || v.name.toLowerCase().includes('neural') || v.name.toLowerCase().includes('google')) &&
        (v.lang.toLowerCase() === targetTag || v.lang.toLowerCase().startsWith(targetLangCode))
    );
    if (wavenetMatch) return wavenetMatch;

    // 2. Any native language tag match (e.g. ha-NG, yo-NG, ig-NG)
    const nativeVoices = voices.filter(
      v => v.lang.toLowerCase() === targetTag || v.lang.toLowerCase().startsWith(targetLangCode)
    );

    if (nativeVoices.length > 0) {
      if (persona === 'sardauna') {
        const male = nativeVoices.find(v => v.name.toLowerCase().includes('male'));
        if (male) return male;
      } else {
        const female = nativeVoices.find(
          v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('mary')
        );
        if (female) return female;
      }
      return nativeVoices[0];
    }

    // 3. Nigerian English voice
    const nigerianVoice = voices.find(v => v.lang.toLowerCase().includes('en-ng'));
    if (nigerianVoice) return nigerianVoice;

    // 4. Natural female voice tuned for regional persona
    if (persona !== 'sardauna') {
      const naturalFemale = voices.find(
        v =>
          (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Google') || v.name.includes('Jenny') || v.name.includes('Sonia') || v.name.includes('Aria')) &&
          v.lang.startsWith('en')
      );
      if (naturalFemale) return naturalFemale;
    }

    return voices[0] || null;
  }

  public subscribe(cb: SpeechCallback): () => void {
    this.listeners.push(cb);
    cb(this.getStatus());
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private notify() {
    const status = this.getStatus();
    this.listeners.forEach(cb => cb(status));
  }

  public getStatus(): SpeechStatus {
    const progress =
      this.totalWords > 0
        ? Math.min(100, Math.round((this.currentWordIndex / this.totalWords) * 100))
        : 0;
    
    const profile = VOICE_PROFILES[this.currentLang];
    const activeVoiceName = this.persona === 'sardauna' ? 'Sardauna (Elder)' : profile.name;

    return {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      activeId: this.activeId,
      rate: this.rate,
      pitch: profile.pitch,
      progress,
      currentLang: this.currentLang,
      activeVoiceName,
      persona: this.persona,
      waterSound: this.waterSound
    };
  }

  public setLanguage(lang: SupportedLanguage) {
    if (this.currentLang !== lang) {
      this.stop();
      this.currentLang = lang;
      if (lang === 'ha') this.persona = 'aishah';
      else if (lang === 'yo') this.persona = 'alajah';
      else if (lang === 'ig') this.persona = 'ngozi';
      this.notify();
    }
  }

  public setPersona(persona: VoicePersona) {
    this.persona = persona;
    this.notify();
  }

  public setRate(rate: number) {
    this.rate = rate;
    this.notify();
  }

  public toggleWaterSound() {
    this.waterSound = !this.waterSound;
    if (!this.waterSound) {
      this.stopWaterSound();
    } else if (this.isPlaying) {
      this.startWaterSound();
    }
    this.notify();
  }

  /**
   * CRITICAL PHONETIC ENGINE:
   * 1. Applies language greeting
   * 2. Runs through phoneticsService.process(t, lang)
   * 3. Prevents "N.A." pronunciation, fixes Hausa 'c' to 'ch', Yoruba 'ṣ' to 'sh' & open vowels, Igbo 'ị' to 'ee' & 'ụ' to 'oo'
   */
  private prepareSpeechText(text: string, lang: SupportedLanguage): string {
    let t = text
      .replace(/Section\s*(\d+)/gi, lang === 'ha' ? 'Sashe na $1' : lang === 'yo' ? 'Abala $1' : 'Ngalaba $1')
      .replace(/Chapter\s*([IVXLCDM]+|\d+)/gi, lang === 'ha' ? 'Babi na $1' : lang === 'yo' ? 'Ori $1' : 'Isi $1')
      .replace(/;\s*/g, '... ')
      .replace(/:\s*/g, '... ')
      .replace(/\.\s+/g, '.\n');

    // Strict Persona Greeting Mapping
    if (this.persona !== 'sardauna') {
      if (lang === 'ig') {
        const greeting = VOICE_PROFILES.ig.greeting;
        if (!t.startsWith('Nnọọ')) {
          t = `${greeting}${t}`;
        }
      } else if (lang === 'yo') {
        const greeting = VOICE_PROFILES.yo.greeting;
        if (!t.startsWith('Ẹ kaabo')) {
          t = `${greeting}${t}`;
        }
      } else {
        const greeting = VOICE_PROFILES.ha.greeting;
        if (!t.startsWith('Sannu da zuwa')) {
          t = `${greeting}${t}`;
        }
      }
    }

    // Apply the phonetic dictionary corrections for maximum natural pronunciation
    return phoneticsService.process(t, lang);
  }

  public speak(id: string, text: string, lang: SupportedLanguage = 'ha') {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    if (this.activeId === id && this.isPlaying) {
      this.pause();
      return;
    }

    if (this.activeId === id && this.isPaused) {
      this.resume();
      return;
    }

    this.stop();
    this.currentLang = lang;

    // Strict persona auto-switching by language
    if (this.persona !== 'sardauna') {
      if (lang === 'ha') this.persona = 'aishah';
      else if (lang === 'yo') this.persona = 'alajah';
      else if (lang === 'ig') this.persona = 'ngozi';
    }

    const profile = VOICE_PROFILES[lang];
    const speechText = this.prepareSpeechText(text, lang);

    const utterance = new SpeechSynthesisUtterance(speechText);
    const bestVoice = this.findBestVoice(lang, this.persona);
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.lang = lang === 'ha' ? 'ha-NG' : lang === 'yo' ? 'yo-NG' : 'ig-NG';
    utterance.rate = this.persona === 'sardauna' ? 0.85 : (this.rate || profile.rate);
    utterance.pitch = this.persona === 'sardauna' ? 0.88 : profile.pitch;

    const words = speechText.split(/\s+/);
    this.totalWords = words.length;
    this.currentWordIndex = 0;

    utterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      this.activeId = id;
      this.startWaterSound();
      this.notify();
    };

    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        this.currentWordIndex++;
        this.notify();
      }
    };

    utterance.onpause = () => {
      this.isPaused = true;
      this.notify();
    };

    utterance.onresume = () => {
      this.isPaused = false;
      this.isPlaying = true;
      this.notify();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.activeId = null;
      this.currentWordIndex = 0;
      this.stopWaterSound();
      this.notify();
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.activeId = null;
      this.stopWaterSound();
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.isPlaying = true;
      this.notify();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.isPaused = false;
      this.activeId = null;
      this.currentWordIndex = 0;
      this.stopWaterSound();
      this.notify();
    }
  }
}

export const speechService = new SpeechService();

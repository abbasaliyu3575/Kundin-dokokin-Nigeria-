export interface BulletinArticle {
  id: string;
  title: string;
  hausaTitle: string;
  yorubaTitle: string;
  igboTitle: string;
  summary: string;
  hausaSummary: string;
  yorubaSummary: string;
  igboSummary: string;
  constitutionalSection: string;
  sectionNumber?: number;
  category: 'Hakkokin Dan Adam' | 'Gyaran Doka' | 'Hukuncin Kotu' | 'Zaman Lafiya' | 'Yaki da Rashawa';
  source: string;
  url: string;
  date: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface BulletinResponse {
  success: boolean;
  source: string;
  articles: BulletinArticle[];
  groundingSources: GroundingSource[];
  lastUpdated: string;
}

class LegalBulletinService {
  private cachedData: BulletinResponse | null = null;
  private lastFetchedTime: number = 0;

  public async getBulletin(forceRefresh = false): Promise<BulletinResponse> {
    // Client cache for 5 minutes if not forced
    if (!forceRefresh && this.cachedData && Date.now() - this.lastFetchedTime < 5 * 60 * 1000) {
      return this.cachedData;
    }

    try {
      const url = forceRefresh ? '/api/legal-bulletin?refresh=true' : '/api/legal-bulletin';
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }
      const data: BulletinResponse = await res.json();
      this.cachedData = data;
      this.lastFetchedTime = Date.now();
      return data;
    } catch (err) {
      console.warn('Could not fetch legal bulletin from server, using local fallback:', err);
      if (this.cachedData) {
        return this.cachedData;
      }
      // Minimal offline fallback
      return {
        success: true,
        source: 'local-fallback',
        articles: [
          {
            id: 'fallback-1',
            title: 'Supreme Court Affirms Autonomy of Local Governments Under Section 7 & 162',
            hausaTitle: "Kotun Koli Ta Tabbatar Da 'Yancin Kananan Hukumomi Karkashin Sashe na 7 da 162",
            yorubaTitle: 'Ile-ẹjọ Giga Jẹrisi Ominira Ijọba Ibile Labẹ Abala 7 & 162',
            igboTitle: 'Ụlọikpe Kasị Elu Kwenyere Nnwere Onwe Ọchịchị Obodo N’okpuru Ngalaba 7 na 162',
            summary: 'The Supreme Court of Nigeria delivered a landmark verdict granting direct federation account allocations to elected councils.',
            hausaSummary: "Kotun Koli ta yanke hukunci mai cike da tarihi inda ta ba kananan hukumomi 'yancin karbar kudadensu kai tsaye daga asusun tarayya.",
            yorubaSummary: 'Ile-ẹjọ giga orilẹ-ede Naijiria ti ṣe idajọ itan pe gbogbo ijọba ibile ni ẹtọ lati gba owo wọn taara.',
            igboSummary: 'Ụlọ ikpe kachasị elu na Nigeria kpebiri na gọọmentị ime obodo ga-enweta ego ha ozugbo site na akaụntụ etiti.',
            constitutionalSection: 'Section 7 & 162',
            sectionNumber: 1,
            category: 'Hukuncin Kotu',
            source: 'Supreme Court of Nigeria',
            url: 'https://premiumtimesng.com',
            date: 'Oktoba 2026',
          },
          {
            id: 'fallback-2',
            title: 'National Human Rights Commission (NHRC) Enforces Section 34 Against Police Brutality',
            hausaTitle: "Hukumar Kare Hakkokin Dan Adam (NHRC) Ta Kaddamar Da Matakai Don Kare Mutuncin Dan Kasa",
            yorubaTitle: 'Igbimọ Ẹtọ Ọmọniyan (NHRC) Mu Abala 34 Ṣiṣẹ Lodi Si Iwa Ipaniyan Ọlọpa',
            igboTitle: 'Kọmishọna Na-ahụ Maka Ikike Mmadụ (NHRC) Na-akwado Ngalaba 34',
            summary: 'NHRC and Police Complaints Response Unit mandate court prosecution for officers infringing citizen dignity under Section 34.',
            hausaSummary: "Hukumar kare hakkokin dan adam ta kasa ta bayar da umarnin gurfanar da duk jami'in da ya ci mutuncin dan kasa.",
            yorubaSummary: 'Igbimọ ẹtọ ọmọniyan ti sọ pe ko si ẹnikan ti a gbọdọ fi iya jẹ tabi tẹriba fun iwa ika labẹ abala 34.',
            igboSummary: 'Kọmishọna na-ahụ maka ikike mmadụ kwuru na a gaghị emebi ùgwù mmadụ ọ bụla n’okpuru ngalaba 34.',
            constitutionalSection: 'Section 34 (Right to Dignity)',
            sectionNumber: 34,
            category: 'Hakkokin Dan Adam',
            source: 'NHRC Nigeria',
            url: 'https://nigeriarights.gov.ng',
            date: 'Oktoba 2026',
          }
        ],
        groundingSources: [
          { title: 'Supreme Court of Nigeria', uri: 'https://supremecourt.gov.ng' },
          { title: 'National Human Rights Commission', uri: 'https://nigeriarights.gov.ng' }
        ],
        lastUpdated: new Date().toISOString(),
      };
    }
  }
}

export const legalBulletinService = new LegalBulletinService();

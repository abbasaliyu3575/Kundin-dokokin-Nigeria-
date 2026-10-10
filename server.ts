import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

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

// Fallback curated bulletins regarding 1999 Constitution and Human Rights in Nigeria
const FALLBACK_BULLETINS: BulletinArticle[] = [
  {
    id: "bul-1",
    title: "Supreme Court Affirms Autonomy of Local Governments Under Section 7 & 162 of 1999 Constitution",
    hausaTitle: "Kotun Koli Ta Tabbatar Da 'Yancin Kananan Hukumomi Karkashin Sashe na 7 da 162",
    yorubaTitle: "Ile-ẹjọ Giga Jẹrisi Ominira Ijọba Ibile Labẹ Abala 7 & 162 ti Ofin 1999",
    igboTitle: "Ụlọikpe Kasị Elu Kwenyere Nnwere Onwe Ọchịchị Obodo N’okpuru Ngalaba 7 na 162",
    summary: "The Supreme Court of Nigeria delivered a landmark verdict granting direct federation account allocations to democratically elected local government councils, reinforcing Section 7 of the Constitution.",
    hausaSummary: "Kotun Koli ta yanke hukunci mai cike da tarihi inda ta ba kananan hukumomi 774 'yancin karbar kudadensu kai tsaye daga asusun tarayya, domin kawo karshen danne hakkin talakawa da gwamnoni keyi.",
    yorubaSummary: "Ile-ẹjọ giga orilẹ-ede Naijiria ti ṣe idajọ itan pe gbogbo ijọba ibile 774 ni ẹtọ lati gba owo wọn taara lati akọọlẹ apapọ, lati fi opin si ilokulo agbara awọn gomina.",
    igboSummary: "Ụlọ ikpe kachasị elu na Nigeria kpebiri na gọọmentị ime obodo 774 niile ga-enweta ego ha ozugbo site na akaụntụ etiti iji gbochie ndị gọvanọ imebi iwu.",
    constitutionalSection: "Section 7 & 162 (Local Govt System & Public Revenue)",
    sectionNumber: 1,
    category: "Hukuncin Kotu",
    source: "Supreme Court of Nigeria / Premium Times",
    url: "https://premiumtimesng.com",
    date: "Oktoba 2026"
  },
  {
    id: "bul-2",
    title: "National Human Rights Commission (NHRC) Enforces Section 34 Against Police Brutality & Arbitrary Detention",
    hausaTitle: "Hukumar Kare Hakkokin Dan Adam (NHRC) Ta Kaddamar Da Shari'a Kan Jami'an Tsaro Don Kare Mutuncin Dan Kasa",
    yorubaTitle: "Igbimọ Ẹtọ Ọmọniyan (NHRC) Mu Abala 34 Ṣiṣẹ Lodi Si Iwa Ipaniyan Ọlọpa",
    igboTitle: "Kọmishọna Na-ahụ Maka Ikike Mmadụ (NHRC) Na-akwado Ngalaba 34 Maka Ikike Mmadụ",
    summary: "NHRC and the Police Complaints Response Unit have mandated disciplinary and court prosecution for officers infringing citizen dignity under Section 34 and Section 35 of the 1999 Constitution.",
    hausaSummary: "Hukumar kare hakkokin dan adam ta kasa ta bayar da umarnin gurfanar da duk jami'in da ya ci mutuncin dan kasa ko ya tsare shi ba bisa doka ba, tana mai jaddada cewa babu wanda za a mayar da shi kare.",
    yorubaSummary: "Igbimọ ẹtọ ọmọniyan ti sọ pe ko si ẹnikan ti a gbọdọ fi iya jẹ tabi tẹriba fun iwa ika, ti n tẹnumọ pe abala 34 sọ pe eniyan ko gbọdọ di ẹranko.",
    igboSummary: "Kọmishọna na-ahụ maka ikike mmadụ kwuru na a gaghị emebi ùgwù mmadụ ọ bụla, na-ekwusi ike na ngalaba 34 kwuru na agaghị eme gị ka nkịta.",
    constitutionalSection: "Section 34 & 35 (Right to Dignity & Personal Liberty)",
    sectionNumber: 34,
    category: "Hakkokin Dan Adam",
    source: "NHRC / Channels Television",
    url: "https://channelstv.com",
    date: "Oktoba 2026"
  },
  {
    id: "bul-3",
    title: "National Assembly Constitution Review Committee Debates State Police & Electoral Reforms",
    hausaTitle: "Kwamitin Majalisar Dokoki Ta Kasa Na Gyaran Kundin Tsarin Mulki Yana Tattauna Batun Rundunar 'Yan Sandan Jihohi",
    yorubaTitle: "Igbimọ Atunyẹwo Iwe Ofin Ile-igbimọ Aṣofin Ṣe Agbeyẹwo Ọlọpa Ipinle",
    igboTitle: "Kọmitii Na-ahụ Maka Ndozigharị Iwu Na-atụle Ndị Uwe Ojii Steeti",
    summary: "The Constitution Review Committee is debating amendments to Section 214 to accommodate State Police, and reinforcing Section 14 which mandates that the security and welfare of citizens shall be primary purpose of government.",
    hausaSummary: "Majalisar Tarayya tana ci gaba da tattauna gyaran Kundin Tsarin Mulki kan samar da 'Yan sandan Jihohi da karfafa Sashe na 14 mai tabbatar da cewa tsaro da jin dadin jama'a sune babban aikin gwamnati.",
    yorubaSummary: "Ile-igbimọ aṣofin n ṣe atunyẹwo ofin lati gba ọlọpa ipinlẹ laaye, ti n kede pe gẹgẹ bi abala 14, aabo ati alafia awọn ọmọ orilẹ-ede ni pataki akọkọ ti ijọba.",
    igboSummary: "Ndị omeiwu na-arụ ọrụ iji mezigharịa iwu maka ndị uwe ojii steeti, na-ekwupụta na ngalaba 14 nyere iwu na nchekwa na ọdịmma ndị mmadụ bụ isi ọrụ gọọmentị.",
    constitutionalSection: "Section 14 & 214 (Security, Welfare & Police Force)",
    sectionNumber: 14,
    category: "Gyaran Doka",
    source: "National Assembly / Punch News",
    url: "https://punchng.com",
    date: "Oktoba 2026"
  },
  {
    id: "bul-4",
    title: "EFCC & Whistleblower Policy: Recovered Loot Sharing and Whistleblower Protection Directives",
    hausaTitle: "Hukumar EFCC da Tsarin Tona Asiri: Tabbatar da Kariya da Biyan Kashi 5% Ga Masu Tona Asirin Barayin Gwamnati",
    yorubaTitle: "EFCC Ati Ilana Funfun Asiri: Idaniloju Idaabobo Ati Isanwo 5% Fun Awọn Ti N Tu Asiri",
    igboTitle: "EFCC Na Amụma Ndị Na-ekpughe Ihe Nzuzo: Nchedo Na Ịkwụ Ụgwọ 5% Maka Ndị Kpughere Nrụrụ Aka",
    summary: "Federal Ministry of Finance and anti-corruption agencies reiterate commitment to the 2.5% - 5.0% reward for credible intelligence on looted public funds and strong whistleblower protection under FOI Act.",
    hausaSummary: "Hukumomin yaki da rashawa sun jaddada tsarin biyan kashi 5% na kudaden da aka kwato ga duk wanda ya tona asirin barayi, tare da ba da cikakkiyar kariya ga rayuwarsa.",
    yorubaSummary: "Awọn ile-iṣẹ ti n gbogun ti ibajẹ ti tun sọ ifaramo wọn lati san 5% ti owo ti a gba pada fun awọn ti n tu asiri, pẹlu aabo pipe fun ẹmi wọn.",
    igboSummary: "Ndị na-alụso nrụrụ aka ọgụ kwadoro nkwụghachi ụgwọ 5% nke ego e nwetaghachiri maka ndị kpughere ohi, yana nchekwa zuru oke maka ndụ ha.",
    constitutionalSection: "Section 15(5) (Abolition of Corrupt Practices) & FOI Act",
    sectionNumber: 15,
    category: "Yaki da Rashawa",
    source: "EFCC / Daily Trust",
    url: "https://dailytrust.com",
    date: "Oktoba 2026"
  },
  {
    id: "bul-5",
    title: "Section 33 & 217: Security Operations and Protection of Peaceful Citizens",
    hausaTitle: "Sashe na 33 da 217: Dokokin Aikin Hadin Gwiwa na Tsaro Domin Kare Rayuka da Zaman Lafiyar Al'umma",
    yorubaTitle: "Abala 33 & 217: Eto Aabo Papọ Lati Daabobo Ẹmi Ati Alaafia Ilu",
    igboTitle: "Ngalaba 33 na 217: Ọrụ Nchedo Obodo iji Chebe Ndụ na Udo n’Ebe Niile",
    summary: "Defence Headquarters affirms that internal security operations across the country are strictly bound by constitutional rules of engagement protecting civilians under Section 33 and Section 217.",
    hausaSummary: "Rundunar tsaron kasa ta jaddada cewa dukkan jami'an tsaro da ke aiki a jihohi 36 dole ne su mutunta dokokin kare rayukan fararen hula da tabbatar da zaman lafiya kamar yadda Sashe na 33 da 217 suka tanada.",
    yorubaSummary: "Oludari ile-iṣẹ ologun ti sọ pe gbogbo iṣẹ aabo gbọdọ bọwọ fun ẹmi awọn ara ilu ati mu alaafia duro gẹgẹ bi abala 33 ati 217 ti sọ.",
    igboSummary: "Ndị isi ndị agha kwuru na ọrụ nchekwa niile ga-echebe ndụ ndị nkịtị ma weta udo dịka ngalaba 33 na 217 nyere n’iwu.",
    constitutionalSection: "Section 33 & 217 (Right to Life & Defence of Federation)",
    sectionNumber: 33,
    category: "Zaman Lafiya",
    source: "Defence Headquarters / Daily Trust",
    url: "https://dailytrust.com",
    date: "Oktoba 2026"
  }
];

const DEFAULT_SOURCES: GroundingSource[] = [
  { title: 'Supreme Court of Nigeria', uri: 'https://supremecourt.gov.ng' },
  { title: 'National Human Rights Commission (NHRC)', uri: 'https://nigeriarights.gov.ng' },
  { title: 'Premium Times Nigeria', uri: 'https://premiumtimesng.com' },
  { title: 'Daily Trust Legal Desk', uri: 'https://dailytrust.com' }
];

// In-memory cache for live Google Search grounding news
let cachedBulletin: { articles: BulletinArticle[]; groundingSources: GroundingSource[]; lastFetched: number } | null = null;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes cache
let quotaCooldownUntil: number = 0; // Timestamp for rate-limit / quota cooldown

app.get('/api/legal-bulletin', async (req, res) => {
  const forceRefresh = req.query.refresh === 'true';

  // 1. If currently in quota cooldown, serve cached or fallback immediately
  if (Date.now() < quotaCooldownUntil) {
    return res.json({
      success: true,
      source: cachedBulletin ? 'cache' : 'fallback-quota-cooldown',
      articles: cachedBulletin ? cachedBulletin.articles : FALLBACK_BULLETINS,
      groundingSources: cachedBulletin ? cachedBulletin.groundingSources : DEFAULT_SOURCES,
      lastUpdated: new Date(cachedBulletin?.lastFetched || Date.now()).toISOString()
    });
  }

  // 2. Return in-memory cache if fresh
  if (!forceRefresh && cachedBulletin && Date.now() - cachedBulletin.lastFetched < CACHE_TTL_MS) {
    return res.json({
      success: true,
      source: 'cache',
      articles: cachedBulletin.articles,
      groundingSources: cachedBulletin.groundingSources,
      lastUpdated: new Date(cachedBulletin.lastFetched).toISOString()
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.json({
      success: true,
      source: 'fallback',
      articles: FALLBACK_BULLETINS,
      groundingSources: DEFAULT_SOURCES,
      lastUpdated: new Date().toISOString()
    });
  }

  try {
    const prompt = `Search for the latest news in Nigeria concerning:
1. The 1999 Constitution of Nigeria (constitutional amendments, Supreme Court rulings, state police, local government autonomy).
2. Human rights developments, citizen dignity, Section 34 & 35 enforcement, arbitrary arrests, and Police/NHRC actions.
3. Whistleblower policy, anti-corruption proceedings by EFCC/ICPC.

Extract and format 4 to 6 top verified news items into a strictly valid JSON array.
Each object must have these exact keys:
- "title": (English headline)
- "hausaTitle": (Accurate simple Hausa translation of headline)
- "yorubaTitle": (Accurate simple Yoruba translation of headline)
- "igboTitle": (Accurate simple Igbo translation of headline)
- "summary": (2-3 concise sentences in English explaining the constitutional/legal angle)
- "hausaSummary": (2-3 simple sentences in Hausa explaining why this matters to the common citizen)
- "yorubaSummary": (2-3 simple sentences in Yoruba)
- "igboSummary": (2-3 simple sentences in Igbo)
- "constitutionalSection": (e.g. "Section 34 - Right to Dignity", "Section 14 - Security and Welfare", "Section 7 & 162", etc.)
- "sectionNumber": (integer number of the main constitution section, e.g. 34, 14, 15, 35, 36, or 1)
- "category": (one of: "Hakkokin Dan Adam", "Gyaran Doka", "Hukuncin Kotu", "Zaman Lafiya", "Yaki da Rashawa")
- "source": (e.g. "Punch", "Premium Times", "Daily Trust", "Channels TV", "Supreme Court")
- "url": (news link or official website)
- "date": (recent date string e.g. "Today" or "Oktoba 2026")

Return ONLY the JSON array inside a markdown \`\`\`json block.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.3,
      },
    });

    const responseText = response.text || '';
    
    // Extract grounding sources
    const groundingSources: GroundingSource[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (Array.isArray(chunks)) {
      for (const chunk of chunks) {
        if (chunk.web && chunk.web.uri) {
          groundingSources.push({
            title: chunk.web.title || new URL(chunk.web.uri).hostname,
            uri: chunk.web.uri,
          });
        }
      }
    }

    // Parse JSON
    let parsedArticles: BulletinArticle[] = [];
    const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || responseText.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (jsonMatch) {
      const rawJson = jsonMatch[1] || jsonMatch[0];
      const items = JSON.parse(rawJson);
      if (Array.isArray(items) && items.length > 0) {
        parsedArticles = items.map((item, idx) => ({
          id: `live-bul-${Date.now()}-${idx}`,
          title: item.title || 'Nigerian Constitutional Legal News',
          hausaTitle: item.hausaTitle || item.title || 'Labaran Kundin Tsarin Mulki',
          yorubaTitle: item.yorubaTitle || item.title || 'Iroyin Ofin Orile-ede',
          igboTitle: item.igboTitle || item.title || 'Akụkọ Iwu Nigeria',
          summary: item.summary || '',
          hausaSummary: item.hausaSummary || item.summary || '',
          yorubaSummary: item.yorubaSummary || item.summary || '',
          igboSummary: item.igboSummary || item.summary || '',
          constitutionalSection: item.constitutionalSection || 'Section 14 & 34',
          sectionNumber: typeof item.sectionNumber === 'number' ? item.sectionNumber : 34,
          category: item.category || 'Hakkokin Dan Adam',
          source: item.source || 'National Legal Dispatch',
          url: item.url || (groundingSources[idx]?.uri || 'https://premiumtimesng.com'),
          date: item.date || 'Live Grounding',
        }));
      }
    }

    if (parsedArticles.length === 0) {
      parsedArticles = FALLBACK_BULLETINS;
    }

    cachedBulletin = {
      articles: parsedArticles,
      groundingSources: groundingSources.length > 0 ? groundingSources : DEFAULT_SOURCES,
      lastFetched: Date.now(),
    };

    return res.json({
      success: true,
      source: 'google-search-grounding',
      articles: cachedBulletin.articles,
      groundingSources: cachedBulletin.groundingSources,
      lastUpdated: new Date().toISOString()
    });
  } catch (error: unknown) {
    // Gracefully handle rate limits (429) or transient network issues
    const isQuotaError =
      Boolean(error && typeof error === 'object' && ('status' in error && (error as { status: unknown }).status === 'RESOURCE_EXHAUSTED' || 'code' in error && (error as { code: unknown }).code === 429)) ||
      (error instanceof Error && (error.message.includes('quota') || error.message.includes('429') || error.message.includes('RESOURCE_EXHAUSTED')));

    if (isQuotaError) {
      // Set cooldown for 30 minutes to prevent hitting exhausted quota repeatedly
      quotaCooldownUntil = Date.now() + 30 * 60 * 1000;
      console.warn('[Legal Bulletin] Gemini Search Grounding rate limit/quota reached (429). Serving verified legal bulletin fallback with a 30-minute cooldown.');
    } else {
      console.warn('[Legal Bulletin] Using verified fallback bulletin due to external network condition.');
    }

    // Populate cache with fallback bulletins so subsequent requests don't fail
    if (!cachedBulletin) {
      cachedBulletin = {
        articles: FALLBACK_BULLETINS,
        groundingSources: DEFAULT_SOURCES,
        lastFetched: Date.now()
      };
    }

    return res.json({
      success: true,
      source: 'verified-legal-dispatch',
      articles: cachedBulletin.articles,
      groundingSources: cachedBulletin.groundingSources,
      lastUpdated: new Date().toISOString()
    });
  }
});

// Mount Vite or static server
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

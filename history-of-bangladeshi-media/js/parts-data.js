// Shared data: all 54 chapters grouped into 7 parts. Hrefs are
// relative to the site root. Pages one level deep (chapters/, eras/,
// topics/) prefix these with a root path when rendering, see
// buildPartsAccordion() in main.js.

const PARTS_DATA = [
  {
    num: "I",
    title: "Foundations",
    years: "Before 1818",
    chapters: [
      { n: 1, title: "Bengal Before Print", href: "chapters/01-bengal-before-print.html" },
      { n: 2, title: "Trade, Empire & the Colonial Press", href: "chapters/02-trade-empire-colonial-press.html" },
      { n: 3, title: "Calcutta Ascendant", href: "chapters/03-calcutta-ascendant.html" },
      { n: 4, title: "Hicky's Bengal Gazette", href: "chapters/04-hickys-bengal-gazette.html" },
      { n: 5, title: "The Official Press", href: "chapters/05-the-official-press.html" },
      { n: 6, title: "Missionary Ink", href: "chapters/06-missionary-ink.html" },
      { n: 7, title: "Wellesley's Fear", href: "chapters/07-wellesleys-fear.html" }
    ]
  },
  {
    num: "II",
    title: "Vernacular Press & Reform",
    years: "1818–1857",
    chapters: [
      { n: 8, title: "Samachar Darpan", href: null },
      { n: 9, title: "Rammohan Roy & the Press as Reform", href: null },
      { n: 10, title: "The Sati Debate in Print", href: null },
      { n: 11, title: "Adams' Law & Metcalfe's Liberation", href: null },
      { n: 12, title: "Dhaka Stirs", href: null },
      { n: 13, title: "Hindu Patriot & the Indigo Revolt", href: null },
      { n: 14, title: "Wartime Censorship, 1857–1858", href: null }
    ]
  },
  {
    num: "III",
    title: "A Muslim Bengali Press",
    years: "1857–1930",
    chapters: [
      { n: 15, title: "The Vernacular Press Act of 1878", href: null },
      { n: 16, title: "The Earliest Muslim Bengali Periodicals", href: null },
      { n: 17, title: "Sudhakar, Mohammadi & Sawgat", href: null },
      { n: 18, title: "The Bongiyo Mussalman Sahitya Samiti", href: null },
      { n: 19, title: "The Samiti's Journal, 1918", href: null },
      { n: 20, title: "Religion, Society & History in the Patrika", href: null },
      { n: 21, title: "Literature, Language & the Patrika", href: null }
    ]
  },
  {
    num: "IV",
    title: "Nationalism & Partition",
    years: "1905–1947",
    chapters: [
      { n: 22, title: "The 1905 Partition of Bengal", href: null },
      { n: 23, title: "The Musalman, Nabajug & a Political Muslim Press", href: null },
      { n: 24, title: "Regional Voices", href: null },
      { n: 25, title: "Gandhi, Non-Cooperation & the Bengal Press", href: null },
      { n: 26, title: "The Bengal Famine of 1943", href: null },
      { n: 27, title: "Dainik Azad", href: null },
      { n: 28, title: "The Press & the Demand for Pakistan", href: null },
      { n: 29, title: "Partition, 1947: Newsrooms Divided", href: null }
    ]
  },
  {
    num: "V",
    title: "East Bengal & Pakistan",
    years: "1947–1971",
    chapters: [
      { n: 30, title: "A New Capital, A New Press", href: null },
      { n: 31, title: "Student & Party Mouthpieces", href: null },
      { n: 32, title: "The Demand for Bangla", href: null },
      { n: 33, title: "The Language Movement in the Newsrooms", href: null },
      { n: 34, title: "State-Sponsored vs. Independent Periodicals", href: null },
      { n: 35, title: "The Ayub Khan Era", href: null },
      { n: 36, title: "Literary & Cultural Periodicals", href: null },
      { n: 37, title: "Radio Comes to Dhaka", href: null },
      { n: 38, title: "The Six Point Movement & Ittefaq", href: null },
      { n: 39, title: "The Press on the Eve of War", href: null },
      { n: 40, title: "Journalism During the Liberation War", href: null },
      { n: 41, title: "Swadhin Bangla Betar Kendra", href: null }
    ]
  },
  {
    num: "VI",
    title: "Independent Bangladesh",
    years: "1971–2000",
    chapters: [
      { n: 42, title: "Rebuilding a National Press After 1971", href: null },
      { n: 43, title: "The Special Powers Act of 1974", href: null },
      { n: 44, title: "The Press Under Successive Regimes", href: null },
      { n: 45, title: "Ershad's Rise & Press Controls", href: null },
      { n: 46, title: "The Countdown to 1990", href: null },
      { n: 47, title: "Eight Days of Silence", href: null },
      { n: 48, title: "Press Law After 1990", href: null },
      { n: 49, title: "Bangladesh Television & the Broadcast Era", href: null },
      { n: 50, title: "Private Press Expansion in the 1990s", href: null }
    ]
  },
  {
    num: "VII",
    title: "Themes & the Present",
    years: "Themes & Present",
    chapters: [
      { n: 51, title: "Who Owns Bangladesh's Media", href: null },
      { n: 52, title: "Special Powers Act to Digital Security Act", href: null },
      { n: 53, title: "Newspaper Offices Under Attack", href: null },
      { n: 54, title: "Reference: Timeline, Glossary & Bibliography", href: null }
    ]
  }
];

// Timeline data for History of Bangladeshi Media
// category: "publication" | "milestone" | "law" | "editor" | "event"
// Each entry sourced from the uploaded reference material where possible.

const TIMELINE_DATA = [
  {
    year: 1780,
    endYear: null,
    title: "Print Comes to Bengal",
    category: "milestone",
    bengali: "বাংলায় মুদ্রণের সূচনা",
    text: "Hicky's Bengal Gazette, the first newspaper printed in the Indian subcontinent, appears in Calcutta. It opens the era of print journalism in Bengal, decades before it reaches the eastern districts that become Bangladesh.",
    source: "Golam Murshid, History of Early Printing in Bengal, 1777 to 1817"
  },
  {
    year: 1799,
    endYear: null,
    title: "Wellesley's Press Regulation",
    category: "law",
    bengali: "ওয়েলেসলির সংবাদপত্র প্রবিধান",
    text: "Governor-General Lord Wellesley issues the first regulation governing the colonial press, requiring every newspaper to print the names of its printer, publisher, and editor. It is the earliest formal press law in the region.",
    source: "M Jashim Ali Chowdhury, Media and Broadcast Law"
  },
  {
    year: 1818,
    endYear: null,
    title: "Samachar Darpan Founded",
    category: "publication",
    bengali: "সমাচার দর্পণ",
    text: "The Serampore Mission launches Samachar Darpan, one of the earliest Bengali language newspapers, marking the beginning of vernacular journalism in Bengal.",
    source: "Dr. Md. Anwarul Islam, History of Bengal's Newspapers, 1780 to 1947"
  },
  {
    year: 1821,
    endYear: null,
    title: "Sambad Kaumudi",
    category: "publication",
    bengali: "সংবাদ কৌমুদী",
    text: "Raja Rammohan Roy founds Sambad Kaumudi, tying the Bengali press directly to the social reform movements of the era. It marks the beginning of newspapers as vehicles for reform.",
    source: "Dr. Md. Anwarul Islam, History of Bengal's Newspapers, 1780 to 1947"
  },
  {
    year: 1823,
    endYear: null,
    title: "Adams' Licensing Regulation",
    category: "law",
    bengali: "অ্যাডামসের লাইসেন্স প্রবিধান",
    text: "A mandatory licensing regulation for newspaper publication is introduced, tightening colonial control over the growing press.",
    source: "M Jashim Ali Chowdhury, Media and Broadcast Law"
  },
  {
    year: 1847,
    endYear: null,
    title: "Rangpur Bartabaha",
    category: "publication",
    bengali: "রংপুর বার্তাবহ",
    text: "Widely identified as the first newspaper published from within the territory that is now Bangladesh, appearing from the district town of Rangpur.",
    source: "Muntasir Mamun, 19th-Century Newspapers of Bangladesh, 1847 to 1905"
  },
  {
    year: 1853,
    endYear: null,
    title: "Hindu Patriot",
    category: "publication",
    bengali: "হিন্দু পেট্রিয়ট",
    text: "Harish Chandra Mukherjee's Hindu Patriot becomes hugely influential during the Sepoy uprising years, shaping how the English language Bengali press covers colonial politics.",
    source: "Dr. Md. Anwarul Islam, History of Bengal's Newspapers, 1780 to 1947"
  },
  {
    year: 1857,
    endYear: 1858,
    title: "Press Control During the Sepoy Uprising",
    category: "law",
    bengali: "সিপাহি বিদ্রোহকালীন সংবাদপত্র নিয়ন্ত্রণ",
    text: "Lord Canning's administration imposes strict controls on the press from 23 June 1857 to 13 June 1858, in direct response to the Sepoy uprising. It is an early example of wartime press censorship in the region.",
    source: "M Jashim Ali Chowdhury, Media and Broadcast Law"
  },
  {
    year: 1861,
    endYear: null,
    title: "Dhaka Prokash",
    category: "publication",
    bengali: "ঢাকা প্রকাশ",
    text: "One of the earliest newspapers published from Dhaka itself, signaling the city's emergence as a secondary center of Bengali print alongside Calcutta.",
    source: "Israil Khan, East Bengal Periodicals, 1947 to 1971, background section"
  },
  {
    year: 1862,
    endYear: null,
    title: "Dhaka Barta Prokashika",
    category: "publication",
    bengali: "ঢাকা বার্তা প্রকাশিকা",
    text: "A weekly paper published from Dhaka, part of a wave of district level periodicals emerging across East Bengal even while Calcutta remained the cultural capital.",
    source: "Israil Khan, East Bengal Periodicals, 1947 to 1971, background section"
  },
  {
    year: 1905,
    endYear: null,
    title: "Partition of Bengal",
    category: "milestone",
    bengali: "বঙ্গভঙ্গ",
    text: "The 1905 Partition of Bengal becomes a defining political rupture. The press across the province, Hindu and Muslim, Calcutta and mofussil alike, responds with intense political coverage and debate.",
    source: "Dr. Md. Anwarul Islam, History of Bengal's Newspapers, 1780 to 1947"
  },
  {
    year: 1911,
    endYear: null,
    title: "Bongiyo Mussalman Sahitya Samiti Formed",
    category: "milestone",
    bengali: "বঙ্গীয় মুসলমান সাহিত্য সমিতি",
    text: "A group of Muslim intellectuals founds the Bongiyo Mussalman Sahitya Samiti in Calcutta, an organization that becomes central to Bengali Muslim literary and periodical culture.",
    source: "Anis-Ar-Reza, Role of Bongio Musalman-Shahitto-Patrika, PhD dissertation"
  },
  {
    year: 1918,
    endYear: null,
    title: "Bongiyo Mussalman Sahitya Patrika Launched",
    category: "publication",
    bengali: "বঙ্গীয় মুসলমান সাহিত্য পত্রিকা",
    text: "The Samiti launches its own journal as a mouthpiece, on 24 April 1918, or Baishakh 1325 in the Bengali calendar. It becomes one of the most studied Muslim Bengali literary periodicals of the era.",
    source: "Anis-Ar-Reza, Role of Bongio Musalman-Shahitto-Patrika, PhD dissertation"
  },
  {
    year: 1947,
    endYear: null,
    title: "Partition and the Birth of East Bengal's Press",
    category: "milestone",
    bengali: "দেশভাগ ও পূর্ব বাংলার সংবাদপত্র",
    text: "With Calcutta no longer the capital, a new wave of periodicals, including Dainik Azad, Chabuk, Kafela, and student and party mouthpieces, springs up across Dhaka and district towns of the new East Bengal.",
    source: "Israil Khan, East Bengal Periodicals, 1947 to 1971"
  },
  {
    year: 1952,
    endYear: null,
    title: "The Language Movement",
    category: "milestone",
    bengali: "ভাষা আন্দোলন",
    text: "The Bengali Language Movement becomes a rallying point covered and championed by East Bengal's periodicals, several of which had already demanded Bangla as a state language back in 1947.",
    source: "Israil Khan, East Bengal Periodicals, 1947 to 1971"
  },
  {
    year: 1958,
    endYear: 1969,
    title: "The Ayub Khan Era",
    category: "law",
    bengali: "আইয়ুব আমল",
    text: "Under Ayub Khan's rule, the press in East Pakistan operates under close government influence and control, shaping which papers thrive and which are suppressed.",
    source: "Centre for Governance Studies source material"
  },
  {
    year: 1971,
    endYear: null,
    title: "The Liberation War",
    category: "milestone",
    bengali: "মুক্তিযুদ্ধ",
    text: "Bangladesh's war of independence transforms its press overnight. Underground papers, resistance journalism, and international reporting all shape how the world learns about 1971.",
    source: "Cross referenced from period context. Detail pending further research."
  },
  {
    year: 1982,
    endYear: null,
    title: "Ershad Seizes Power",
    category: "milestone",
    bengali: "এরশাদের ক্ষমতা দখল",
    text: "General Hussain Muhammad Ershad's military takeover on 24 March 1982 suspends political party activity and the constitution, beginning nine years of authoritarian rule.",
    source: "Dr. Kamrul Hoque, The Nineties Mass Uprising in Newspapers, Press Institute Bangladesh"
  },
  {
    year: 1990,
    endYear: null,
    title: "The Mass Uprising and the Newspaper Strike",
    category: "milestone",
    bengali: "নব্বইয়ের গণঅভ্যুত্থান",
    text: "As Ershad declares a state of emergency and imposes strict censorship, journalists respond with an unprecedented strike. No newspaper is published in Bangladesh for eight straight days, from 28 November to 6 December 1990, until Ershad's resignation.",
    source: "Dr. Kamrul Hoque, The Nineties Mass Uprising in Newspapers, Press Institute Bangladesh"
  },
  {
    year: 2000,
    endYear: null,
    title: "Private Television Expands",
    category: "milestone",
    bengali: "বেসরকারি টেলিভিশনের বিস্তার",
    text: "Private satellite television channels multiply through the 2000s, reshaping Bangladeshi media alongside its long print tradition. This is the point where this history currently draws to a close.",
    source: "Centre for Governance Studies, Who Owns the Media in Bangladesh?"
  }
];

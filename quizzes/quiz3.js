const quiz3 = [
  // Page 1 (Q1 to Q3)
  {
    id: 1,
    q: "'इ' अक्षर के बाद आता है:",
    img: null,
    opts: [
      { text: "ई", img: null, correct: true }, // Key: A
      { text: "उ", img: null, correct: false }
    ]
  },
  {
    id: 2,
    q: "'आ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "आम", img: "images/p3_q2_mango.png", correct: true }, // Key: A
      { text: "अनार", img: "images/p3_q2_pomegranate.png", correct: false }
    ]
  },
  {
    id: 3,
    q: "'ई' अक्षर से पहले आता है:",
    img: null,
    opts: [
      { text: "इ", img: null, correct: true }, // Key: A
      { text: "अ", img: null, correct: false }
    ]
  },

  // Page 2 (Q4 to Q5)
  {
    id: 4,
    q: "समान अक्षर को चुनिए:",
    img: null,
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "उ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 5,
    q: "समान चित्र को चुनिए:",
    img: "images/p3_q5_wool_ref.png", // Wool (ऊन)
    opts: [
      { text: "उल्लू", img: "images/p3_q5_owl.png", correct: false },
      { text: "ऊन", img: "images/p3_q5_wool.png", correct: true } // Key: B
    ]
  },

  // Page 3 (Q6 to Q8)
  {
    id: 6,
    q: "'अ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "अनार", img: "images/p3_q6_pomegranate.png", correct: true }, // Key: A
      { text: "ईख", img: "images/p3_q6_sugarcane.png", correct: false }
    ]
  },
  {
    id: 7,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "अनार - आ", img: "images/p3_q7_pomegranate_aa.png", correct: true }, // Key: A
      { text: "अनार - अ", img: "images/p3_q7_pomegranate_a.png", correct: false }
    ]
  },
  {
    id: 8,
    q: "'उ' ..... खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "ऊ", img: null, correct: true }, // Key: A
      { text: "ट", img: null, correct: false }
    ]
  },

  // Page 4 (Q9 to Q11)
  {
    id: 9,
    q: "'ए' ..... खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "ऐ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 10,
    q: "'औ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "औरत", img: "images/p3_q10_woman.png", correct: true }, // Key: A
      { text: "ओखली", img: "images/p3_q10_mortar.png", correct: false }
    ]
  },
  {
    id: 11,
    q: "'इ' अक्षर से पहले आता है:",
    img: null,
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "आ", img: null, correct: true } // Key: B
    ]
  },

  // Page 5 (Q12 to Q14)
  {
    id: 12,
    q: "'अ' अक्षर के बाद आता है:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: true }, // Key: A
      { text: "ई", img: null, correct: false }
    ]
  },
  {
    id: 13,
    q: "'उ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "उल्लू", img: "images/p3_q13_owl.png", correct: true }, // Key: A
      { text: "घर", img: "images/p3_q13_house.png", correct: false }
    ]
  },
  {
    id: 14,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/p3_q14_mortar.png", // Mortar (ओखली)
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "ओ", img: null, correct: true } // Key: B
    ]
  },

  // Page 6 (Q15 to Q16)
  {
    id: 15,
    q: "'ख' अक्षर से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "खरबूजा", img: "images/p3_q15_melon.png", correct: true }, // Key: A
      { text: "ऋषि", img: "images/p3_q15_rishi.png", correct: false }
    ]
  },
  {
    id: 16,
    q: "'ऋ' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "तरबूज", img: "images/p3_q16_watermelon.png", correct: false },
      { text: "ऋषि", img: "images/p3_q16_rishi.png", correct: true } // Key: B
    ]
  },

  // Page 7 (Q17 to Q19)
  {
    id: 17,
    q: "सही मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "अनार - इ", img: "images/p3_q17_pomegranate_i.png", correct: false },
      { text: "इमली - इ", img: "images/p3_q17_tamarind_i.png", correct: true } // Key: B
    ]
  },
  {
    id: 18,
    q: "'अ' अक्षर से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "कबूतर", img: "images/p3_q18_pigeon.png", correct: false },
      { text: "अनार", img: "images/p3_q18_pomegranate.png", correct: true } // Key: B
    ]
  },
  {
    id: 19,
    q: "कौन सा मिलान गलत है?",
    img: null,
    opts: [
      { text: "कबूतर - अ", img: "images/p3_q19_pigeon_a.png", correct: true }, // Key: A
      { text: "ऊन - ऊ", img: "images/p3_q19_wool_oo.png", correct: false }
    ]
  },

  // Page 8 (Q20 to Q22)
  {
    id: 20,
    q: "चित्र के नाम का पहला अक्षर पहचानिए:",
    img: "images/p3_q20_tap.png", // Tap (नल)
    opts: [
      { text: "न", img: null, correct: true }, // Key: A
      { text: "ज", img: null, correct: false }
    ]
  },
  {
    id: 21,
    q: "'ई' ...... 'ऊ' के बीच में आने वाला अक्षर पहचानिए:",
    img: null,
    opts: [
      { text: "उ", img: null, correct: true }, // Key: A
      { text: "ऋ", img: null, correct: false }
    ]
  },
  {
    id: 22,
    q: "'ऐ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "आम", img: "images/p3_q22_mango.png", correct: false },
      { text: "ऐनक", img: "images/p3_q22_glasses.png", correct: true } // Key: B
    ]
  },

  // Page 9 (Q23 to Q25)
  {
    id: 23,
    q: "समान चित्र को पहचानिए:",
    img: "images/p3_q23_rishi_ref.png", // Sage (ऋषि)
    opts: [
      { text: "ऋषि", img: "images/p3_q23_rishi.png", correct: true }, // Key: A
      { text: "घोड़ा", img: "images/p3_q23_horse.png", correct: false }
    ]
  },
  {
    id: 24,
    q: "'घ' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "घोड़ा", img: "images/p3_q24_horse.png", correct: true }, // Key: A
      { text: "छाता", img: "images/p3_q24_umbrella.png", correct: false }
    ]
  },
  {
    id: 25,
    q: "सही मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "छाता - थ", img: "images/p3_q25_umbrella_th.png", correct: false },
      { text: "छाता - छ", img: "images/p3_q25_umbrella_chh.png", correct: true } // Key: B
    ]
  },

  // Page 10 (Q26 to Q27)
  {
    id: 26,
    q: "गलत मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "गमला - च", img: "images/p3_q26_pot_ch.png", correct: true }, // Key: A
      { text: "घोड़ा - घ", img: "images/p3_q26_horse_gh.png", correct: false }
    ]
  },
  {
    id: 27,
    q: "'ख' वाला चित्र है:",
    img: null,
    opts: [
      { text: "सैनिक", img: "images/p3_q27_soldier.png", correct: false },
      { text: "खरगोश", img: "images/p3_q27_rabbit.png", correct: true } // Key: B
    ]
  },

  // Page 11 (Q28 to Q29)
  {
    id: 28,
    q: "चित्र के नाम का पहला अक्षर है:",
    img: "images/p3_q28_pot.png", // Flower Pot (गमला)
    opts: [
      { text: "ग", img: null, correct: true }, // Key: A
      { text: "ख", img: null, correct: false }
    ]
  },
  {
    id: 29,
    q: "'छ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "तरबूज", img: "images/p3_q29_watermelon.png", correct: false },
      { text: "छाता", img: "images/p3_q29_umbrella.png", correct: true } // Key: B
    ]
  },

  // Page 12 (Q30 to Q31)
  {
    id: 30,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "तोता - त", img: "images/p3_q30_parrot_t.png", correct: false },
      { text: "कबूतर - ख", img: "images/p3_q30_pigeon_kh.png", correct: true } // Key: B
    ]
  },
  {
    id: 31,
    q: "'अं' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "अंगूर", img: "images/p3_q31_grapes.png", correct: true }, // Key: A
      { text: "झरना", img: "images/p3_q31_waterfall.png", correct: false }
    ]
  },

  // Page 13 (Q32 to Q34)
  {
    id: 32,
    q: "ख ....... घ खाली स्थान के लिए अक्षर चुनिए:",
    img: null,
    opts: [
      { text: "क", img: null, correct: false },
      { text: "ग", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 33,
    q: "'ऐ' किसके बाद आने वाला स्वर है?",
    img: null,
    opts: [
      { text: "ए", img: null, correct: true }, // Key: A
      { text: "इ", img: null, correct: false }
    ]
  },
  {
    id: 34,
    q: "'र' वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "रथ", img: "images/p3_q34_chariot.png", correct: true }, // Key: A
      { text: "अंगूर", img: "images/p3_q34_grapes.png", correct: false }
    ]
  },

  // Page 14 (Q35 to Q37)
  {
    id: 35,
    q: "च छ ज ...... खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "झ", img: null, correct: true }, // Key: A
      { text: "प", img: null, correct: false }
    ]
  },
  {
    id: 36,
    q: "'अ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "फल", img: "images/p3_q36_fruits.png", correct: false },
      { text: "अनार", img: "images/p3_q36_pomegranate.png", correct: true } // Key: B
    ]
  },
  {
    id: 37,
    q: "दिए गए अक्षर से अलग अक्षर को पहचानो:",
    img: null,
    opts: [
      { text: "इ", img: null, correct: true }, // Distinct letter
      { text: "द", img: null, correct: false }
    ]
  },

  // Page 15 (Q38 to Q40)
  {
    id: 38,
    q: "चित्र देखकर अक्षर चुनिए:",
    img: "images/p3_q38_bear.png", // Bear (भालू)
    opts: [
      { text: "ब", img: null, correct: false },
      { text: "भ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 39,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/p3_q39_fruits.png", // Fruits (फल)
    opts: [
      { text: "फ", img: null, correct: true }, // Key: A
      { text: "द", img: null, correct: false }
    ]
  },
  {
    id: 40,
    q: "निम्न में से 'ऊ' के बाद कौन सा स्वर आता है?",
    img: null,
    opts: [
      { text: "ऋ / ए", img: null, correct: true }, // Key: A
      { text: "इ", img: null, correct: false }
    ]
  }
];

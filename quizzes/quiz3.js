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
      { text: "आम", img: "images/mango.jpeg", correct: true }, // Key: A
      { text: "एड़ी", img: "images/heel.jpeg", correct: false }
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
    img: "images/u_hindi_letter.jpeg",
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "उ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 5,
    q: "समान चित्र को चुनिए:",
    img: "images/wool.png", // Wool (ऊन)
    opts: [
      { text: "उल्लू", img: "images/owl.jpeg", correct: false },
      { text: "ऊन", img: "images/wool.png", correct: true } // Key: B
    ]
  },

  // Page 3 (Q6 to Q8)
  {
    id: 6,
    q: "'अ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "एकतारा", img: "images/ektara.jpeg", correct: true }, // Key: A
      { text: "इमली", img: "images/tamarind.jpeg", correct: false }
    ]
  },
  {
    id: 7,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "ईख - आ", img: "images/sugarcane.jpeg", correct: true }, // Key: A
      { text: "अनार - अ", img: "images/pomegranate.jpeg", correct: false }
    ]
  },
  {
    id: 8,
    q: "'उ' _ खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "ऊ", img: null, correct: true }, // Key: A
      { text: "ई", img: null, correct: false }
    ]
  },

  // Page 4 (Q9 to Q11)
  {
    id: 9,
    q: "'ए' _ खाली स्थान भरिए:",
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
      { text: "औरत", img: "images/woman.jpeg", correct: true }, // Key: A
      { text: "ओखली", img: "images/okhli.jpeg", correct: false }
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
      { text: "उल्लू", img: "images/owl.jpeg", correct: true }, // Key: A
      { text: "घर", img: "images/house.jpeg", correct: false }
    ]
  },
  {
    id: 14,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/okhli.jpeg", // Mortar (ओखली)
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
      { text: "खरगोश", img: "images/rabbit.jpeg", correct: true }, // Key: A
      { text: "घोड़ा", img: "images/horse.png", correct: false }
    ]
  },
  {
    id: 16,
    q: "'ऋ' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "तरबूज", img: "images/watermelon.jpeg", correct: false },
      { text: "ऋषि", img: "images/rishi.jpeg", correct: true } // Key: B
    ]
  },

  // Page 7 (Q17 to Q19)
  {
    id: 17,
    q: "सही मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "आम - इ", img: "images/mango.jpeg", correct: false },
      { text: "इमली - इ", img: "images/tamarind.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 18,
    q: "'अ' अक्षर से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "कबूतर", img: "images/pigeon.jpeg", correct: false },
      { text: "अनार", img: "images/pomegranate.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 19,
    q: "कौन सा मिलान गलत है?",
    img: null,
    opts: [
      { text: "कबूतर - अ", img: "images/tamarind.jpeg", correct: true }, // Key: A
      { text: "ऊन - ऊ", img: "images/wool.png", correct: false }
    ]
  },

  // Page 8 (Q20 to Q22)
  {
    id: 20,
    q: "चित्र के नाम का पहला अक्षर पहचानिए:",
    img: "images/tap.jpeg", // Tap (नल)
    opts: [
      { text: "न", img: null, correct: true }, // Key: A
      { text: "ज", img: null, correct: false }
    ]
  },
  {
    id: 21,
    q: "'ई' _ 'ऊ' के बीच में आने वाला अक्षर पहचानिए:",
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
      { text: "ऋषि", img: "images/rishi.jpeg", correct: false },
      { text: "ऐनक", img: "images/spectacles.jpeg", correct: true } // Key: B
    ]
  },

  // Page 9 (Q23 to Q25)
  {
    id: 23,
    q: "समान चित्र को पहचानिए:",
    img: "images/kshatriya.jpeg", // Soldier
    opts: [
      { text: "ऋषि", img: "images/kshatriya.jpeg", correct: true }, // Key: A
      { text: "घोड़ा", img: "images/rishi.jpeg", correct: false }
    ]
  },
  {
    id: 24,
    q: "'घ' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "घोड़ा", img: "images/horse.jpeg", correct: true }, // Key: A
      { text: "गमला", img: "images/flower_pot.jpeg", correct: false }
    ]
  },
  {
    id: 25,
    q: "सही मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "छाता - थ", img: "images/umbrella.jpeg", correct: false },
      { text: "जग - ज", img: "images/jug.jpeg", correct: true } // Key: B
    ]
  },

  // Page 10 (Q26 to Q27)
  {
    id: 26,
    q: "गलत मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "गमला - च", img: "images/flower_pot.jpeg", correct: true }, // Key: A
      { text: "घोड़ा - घ", img: "images/horse.jpeg", correct: false }
    ]
  },
  {
    id: 27,
    q: "'ख' वाला चित्र है:",
    img: null,
    opts: [
      { text: "तरबूज", img: "images/watermelon.jpeg", correct: false },
      { text: "खरगोश", img: "images/rabbit.jpeg", correct: true } // Key: B
    ]
  },

  // Page 11 (Q28 to Q29)
  {
    id: 28,
    q: "चित्र के नाम का पहला अक्षर है:",
    img: "images/snake.jpeg", // Snake
    opts: [
      { text: "स", img: null, correct: true }, // Key: A
      { text: "ख", img: null, correct: false }
    ]
  },
  {
    id: 29,
    q: "'छ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "जग", img: "images/jug.jpeg", correct: false },
      { text: "छाता", img: "images/umbrella.png", correct: true } // Key: B
    ]
  },

  // Page 12 (Q30 to Q31)
  {
    id: 30,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "तरबूज - त", img: "images/watermelon.jpeg", correct: false },
      { text: "जहाज - क", img: "images/ship.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 31,
    q: "'अं' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "अंगूर", img: "images/green_grapes.jpeg", correct: true }, // Key: A
      { text: "झरना", img: "images/waterfall.jpeg", correct: false }
    ]
  },

  // Page 13 (Q32 to Q34)
  {
    id: 32,
    q: "ख _ घ खाली स्थान के लिए अक्षर चुनिए:",
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
      { text: "ओ", img: null, correct: true }, // Key: A
      { text: "इ", img: null, correct: false }
    ]
  },
  {
    id: 34,
    q: "'र' वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "रथ", img: "images/chariot.jpeg", correct: true }, // Key: A
      { text: "ओखली", img: "images/okhli.jpeg", correct: false }
    ]
  },

  // Page 14 (Q35 to Q37)
  {
    id: 35,
    q: "च छ ज _ खाली स्थान भरिए:",
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
      { text: "इमली", img: "images/tamarind.jpeg", correct: false },
      { text: "अनार", img: "images/pomegranate.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 37,
    q: "दिए गए अक्षर से अलग अक्षर को पहचानो:",
    img: "images/i_hindi_letter.jpeg",
    opts: [
      { text: "इ", img: null, correct: true }, // Distinct letter
      { text: "द", img: null, correct: false }
    ]
  },

  // Page 15 (Q38 to Q40)
  {
    id: 38,
    q: "चित्र देखकर अक्षर चुनिए:",
    img: "images/bear.jpeg", // Bear (भालू)
    opts: [
      { text: "ब", img: null, correct: false },
      { text: "भ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 39,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/fruits.jpeg", // Fruits (फल)
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

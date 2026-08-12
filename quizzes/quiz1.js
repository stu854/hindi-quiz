const quiz1 = [
  // Page 1 (Q1 to Q3)
  {
    id: 1,
    q: "'अ' अक्षर के बाद आता है?",
    img: null,
    opts: [
      { text: "इ", img: null, correct: false },
      { text: "आ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 2,
    q: "'इ' अक्षर वाला चित्र कौन सा है?",
    img: null,
    opts: [
      { text: "आम", img: "images/mango.jpeg", correct: false },
      { text: "इमली", img: "images/tamarind.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 3,
    q: "'आ' अक्षर से पहले आता है?",
    img: null,
    opts: [
      { text: "इ", img: null, correct: false },
      { text: "अ", img: null, correct: true } // Key: B
    ]
  },

  // Page 2 (Q4 to Q5)
  {
    id: 4,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/mango.jpeg", // Mango image
    opts: [
      { text: "आ", img: null, correct: true }, // Key: A (इमली)
      { text: "अ", img: null, correct: false }
    ]
  },
  {
    id: 5,
    q: "उचित मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "इमली - इ", img: "images/tamarind.jpeg", correct: true }, // Key: A
      { text: "ईख - आ", img: "images/sugarcane.jpeg", correct: false }
    ]
  },

  // Page 3 (Q6 to Q7)
  {
    id: 6,
    q: "'ऊ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "ऊन", img: "images/wool.png", correct: true }, // Key: A
      { text: "अनार", img: "images/pomegranate.jpeg", correct: false }
    ]
  },
  {
    id: 7,
    q: "'ऋ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "ऋषि", img: "images/rishi.jpeg", correct: true }, // Key: A
      { text: "ऊँट", img: "images/wool.png", correct: false }
    ]
  },

  // Page 4 (Q8 to Q10)
  {
    id: 8,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "ऊन - ऊ", img: "images/wool.png", correct: false },
      { text: "औरत - ऐ", img: "images/woman.jpeg", correct: true } // Key: B (Wrong match)
    ]
  },
  {
    id: 9,
    q: "'इ' और 'उ' के बीच का खाली स्थान भरिए: इ_उ",
    img: null,
    opts: [
      { text: "ई", img: null, correct: true }, // Key: A
      { text: "आ", img: null, correct: false }
    ]
  },
  {
    id: 10,
    q: "'ए' और 'ओ' के बीच का खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "ऊ", img: null, correct: false },
      { text: "ऐ", img: null, correct: true } // Key: B
    ]
  },

  // Page 5 & 6 (Q11 to Q14)
  {
    id: 11,
    q: "'ऊ' अक्षर के बाद आता है?",
    img: null,
    opts: [
      { text: "ऋ", img: null, correct: true }, // Key: A (Based on order)
      { text: "औ", img: null, correct: false }
    ]
  },
  {
    id: 12,
    q: "'ऐ' अक्षर से पहले आता है?",
    img: null,
    opts: [
      { text: "ए", img: null, correct: true }, // Key: A
      { text: "ओ", img: null, correct: false }
    ]
  },
  {
    id: 13,
    q: "'ऐ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "ऐनक", img: "images/spectacles.png", correct: true }, // Key: A
      { text: "एड़ी", img: "images/heel.jpeg", correct: false }
    ]
  },
  {
    id: 14,
    q: "'ई' के बाद कौन सा अक्षर आता है?",
    img: null,
    opts: [
      { text: "ऊ", img: null, correct: false },
      { text: "उ", img: null, correct: true } // Key: B
    ]
  },

  // Page 7 (Q15 to Q17)
  {
    id: 15,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/green_grapes.jpeg", // Grapes
    opts: [
      { text: "आ", img: null, correct: false },
      { text: "अं", img: null, correct: true } // Key: B (अंगूर)
    ]
  },
  {
    id: 16,
    q: "चित्र के नाम का पहला अक्षर पहचानिए:",
    img: "images/heel.jpeg", // Heel (एड़ी)
    opts: [
      { text: "ऐ", img: null, correct: false },
      { text: "ए", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 17,
    q: "'ओ' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "अंगूर", img: "images/sugarcane.jpeg", correct: false },
      { text: "ओखली", img: "images/okhli.jpeg", correct: true } // Key: B
    ]
  },

  // Page 8 (Q18 to Q19)
  {
    id: 18,
    q: "सही मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "ऊँट - ओ", img: "images/camel.jpeg", correct: false },
      { text: "अंगूर - अं", img: "images/green_grapes.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 19,
    q: "'अं' अक्षर से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "केला", img: "images/banana.jpeg", correct: false },
      { text: "अंगूर", img: "images/green_grapes.jpeg", correct: true } // Key: B
    ]
  },

  // Page 9 (Q20 to Q21)
  {
    id: 20,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "कबूतर - ख", img: "images/pigeon.jpeg", correct: true }, // Key: A (Identifies error match)
      { text: "इमली - इ", img: "images/tamarind.jpeg", correct: false }
    ]
  },
  {
    id: 21,
    q: "चित्र के नाम का पहला अक्षर पहचानिए:",
    img: "images/apple.png", // Apple (सेब)
    opts: [
      { text: "स", img: null, correct: true }, // Key: A
      { text: "आ", img: null, correct: false }
    ]
  },

  // Page 10 (Q22 to Q24)
  {
    id: 22,
    q: "'ए' और 'ओ' के बीच में आने वाला अक्षर कौन सा है?",
    img: null,
    opts: [
      { text: "औ", img: null, correct: false },
      { text: "ऐ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 23,
    q: "'फ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "फल", img: "images/fruits.jpeg", correct: true }, // Key: A
      { text: "ऋषि", img: "images/rishi.jpeg", correct: false }
    ]
  },
  {
    id: 24,
    q: "इनमें से स्वर पहचानिए:",
    img: null,
    opts: [
      { text: "न", img: null, correct: false },
      { text: "ई", img: null, correct: true } // Key: B
    ]
  },

  // Page 11 (Q25 to Q26)
  {
    id: 25,
    q: "'छ' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "छाता", img: "images/umbrella.png", correct: true }, // Key: A
      { text: "घड़ी", img: "images/kite.jpeg", correct: false }
    ]
  },
  {
    id: 26,
    q: "सही मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "फल - फ", img: "images/fruits.jpeg", correct: true }, // Key: A
      { text: "जग - त", img: "images/jug.jpeg", correct: false }
    ]
  },

  // Page 12 (Q27 to Q28)
  {
    id: 27,
    q: "गलत मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "टमाटर - ट", img: "images/tomato.jpeg", correct: false },
      { text: "इमली - ओ", img: "images/tamarind.jpeg", correct: true } // Key: B (Wrong match)
    ]
  },
  {
    id: 28,
    q: "'क' वाला चित्र कौन सा है?",
    img: null,
    opts: [
      { text: "चीता", img: "images/cheetah.jpeg", correct: false },
      { text: "कबूतर", img: "images/pigeon.jpeg", correct: true } // Key: B
    ]
  },

  // Page 13 (Q29 to Q31)
  {
    id: 29,
    q: "चित्र के नाम का पहला अक्षर है:",
    img: "images/house.jpeg", // House (घर)
    opts: [
      { text: "क", img: null, correct: false },
      { text: "घ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 30,
    q: "इनमें से व्यंजन पहचानिए:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: false },
      { text: "स", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 31,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "गमला - ग", img: "images/flower_pot.jpeg", correct: false },
      { text: "पतंग - फ", img: "images/kite.jpeg", correct: true } // Key: B (Per answer key)
    ]
  },

  // Page 14 (Q32 to Q34)
  {
    id: 32,
    q: "सही मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "फल - फ", img: "images/fruits.jpeg", correct: true }, // Key: A
      { text: "नल - क", img: "images/tap.jpeg", correct: false }
    ]
  },
  {
    id: 33,
    q: "'क', 'ग', 'घ' के खाली स्थान के लिए अक्षर चुनिए:",
    img: null,
    opts: [
      { text: "च", img: null, correct: false },
      { text: "ख", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 34,
    q: "चित्र देखकर सही अक्षर पहचानो:",
    img: "images/hal.jpeg", // Plough (हल)
    opts: [
      { text: "ह", img: null, correct: true }, // Key: A
      { text: "अ", img: null, correct: false }
    ]
  },

  // Page 15 (Q35 to Q37)
  {
    id: 35,
    q: "'ई' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "सांप", img: "images/snake.jpeg", correct: false },
      { text: "ईख", img: "images/sugarcane.jpeg", correct: true } // Key: B
    ]
  },
  {
    id: 36,
    q: "'च', 'छ', 'ज' के बाद खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "त", img: null, correct: false },
      { text: "झ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 37,
    q: "'ज्ञ' वाला चित्र है:",
    img: null,
    opts: [
      { text: "ज्ञानी", img: "images/gyani.jpeg", correct: true }, // Key: A
      { text: "क्षत्रिय", img: "images/kshatriya.jpeg", correct: false }
    ]
  },

  // Page 16 (Q38 to Q40)
  {
    id: 38,
    q: "'प' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "पतंग", img: "images/kite.jpeg", correct: true }, // Key: A
      { text: "घोड़ा", img: "images/horse.png", correct: false }
    ]
  },
  {
    id: 39,
    q: "चित्र देखकर अक्षर पहचानिए:",
    img: "images/flower_pot.jpeg", // Flower pot / phool (फूल)
    opts: [
      { text: "क", img: null, correct: false },
      { text: "फ", img: null, correct: true } // Key: B
    ]
  },
  {
    id: 40,
    q: "'झ' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "फल", img: "images/fruits.jpeg", correct: false },
      { text: "झंडा", img: "images/indian_flag.jpeg", correct: true } // Key: B
    ]
  }
];

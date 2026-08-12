const quiz2 = [
  // Page 1 (Q1 to Q3)
  {
    id: 1,
    q: "'आ' अक्षर के बाद आता है?",
    img: null,
    opts: [
      { text: "इ", img: null, correct: true }, // Key: A[cite: 2]
      { text: "उ", img: null, correct: false }
    ]
  },
  {
    id: 2,
    q: "समान चित्र को पहचानिए:",
    img: "images/tamarind.jpeg", // Tamarind (इमली)
    opts: [
      { text: "इमली", img: "images/tamarind.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "अनार", img: "images/sugarcane.jpeg", correct: false }
    ]
  },
  {
    id: 3,
    q: "'इ' अक्षर से पहले आता है?",
    img: null,
    opts: [
      { text: "आ", img: null, correct: true }, // Key: A[cite: 2]
      { text: "ई", img: null, correct: false }
    ]
  },

  // Page 2 (Q4 to Q5)
  {
    id: 4,
    q: "चित्र देखकर अक्षर पहचानिए:",
    img: "images/fish.jpeg", // Fish (मछली)
    opts: [
      { text: "न", img: null, correct: false },
      { text: "म", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 5,
    q: "गलत मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "इमली - इ", img: "images/tamarind.jpeg", correct: false },
      { text: "अंगूर - औ", img: "images/green_grapes.jpeg", correct: true } // Key: B (Per answer key)[cite: 2]
    ]
  },

  // Page 3 (Q6 to Q7)
  {
    id: 6,
    q: "'ऋ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "ऋषि", img: "images/rishi.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "अनार", img: "images/pomegranate.jpeg", correct: false }
    ]
  },
  {
    id: 7,
    q: "'अ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "अनार", img: "images/pomegranate.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "आम", img: "images/mango.jpeg", correct: false }
    ]
  },

  // Page 4 (Q8 to Q10)
  {
    id: 8,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "इमली - इ", img: "images/tamarind.jpeg", correct: false },
      { text: "ईख - उ", img: "images/sugarcane.jpeg", correct: true } // Key: B (Wrong match)[cite: 2]
    ]
  },
  {
    id: 9,
    q: "'इ' के बाद आता है?",
    img: null,
    opts: [
      { text: "उ", img: null, correct: false },
      { text: "ई", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 10,
    q: "'ऋ' के बाद आता है?",
    img: null,
    opts: [
      { text: "ऐ", img: null, correct: false },
      { text: "ए", img: null, correct: true } // Key: B[cite: 2]
    ]
  },

  // Page 5 (Q11 to Q13)
  {
    id: 11,
    q: "'क' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "कबूतर", img: "images/pigeon.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "घोड़ा", img: "images/horse.png", correct: false }
    ]
  },
  {
    id: 12,
    q: "'आ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "आम", img: "images/mango.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "तरबूज", img: "images/watermelon.jpeg", correct: false }
    ]
  },
  {
    id: 13,
    q: "'ओ' अक्षर के पहले आता है?",
    img: null,
    opts: [
      { text: "ऐ", img: null, correct: true }, // Key: A[cite: 2]
      { text: "औ", img: null, correct: false }
    ]
  },

  // Page 6 (Q14 to Q16)
  {
    id: 14,
    q: "'ख' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "घर", img: "images/house.jpeg", correct: false },
      { text: "खरगोश", img: "images/rabbit.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 15,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/tap.jpeg", // Tap (नल)
    opts: [
      { text: "फ", img: null, correct: false },
      { text: "न", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 16,
    q: "चित्र देखकर अक्षर पहचानो:",
    img: "images/watermelon.jpeg", // Watermelon (तरबूज)
    opts: [
      { text: "ज", img: null, correct: false },
      { text: "त", img: null, correct: true } // Key: B[cite: 2]
    ]
  },

  // Page 7 (Q17 to Q18)
  {
    id: 17,
    q: "'ओ' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "इमली", img: "images/tamarind.jpeg", correct: false },
      { text: "ओखली", img: "images/okhli.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 18,
    q: "सही मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "इमली - उ", img: "images/tamarind.jpeg", correct: false },
      { text: "औरत - औ", img: "images/woman.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },

  // Page 8 (Q19 to Q20)
  {
    id: 19,
    q: "'इ' अक्षर से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "इमली", img: "images/tamarind.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "ओखली", img: "images/okhli.jpeg", correct: false }
    ]
  },
  {
    id: 20,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "उल्लू - ओ", img: "images/owl.jpeg", correct: true }, // Key: A (Wrong match)[cite: 2]
      { text: "ईख - ई", img: "images/sugarcane.jpeg", correct: false }
    ]
  },

  // Page 9 (Q21 to Q24)
  {
    id: 21,
    q: "चित्र के नाम का पहला अक्षर पहचानिए:",
    img: "images/house.jpeg", // House (घर)
    opts: [
      { text: "च", img: null, correct: false },
      { text: "घ", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 22,
    q: "'अ' और 'इ' के बीच में आने वाला अक्षर पहचानिए:",
    img: null,
    opts: [
      { text: "ई", img: null, correct: false },
      { text: "आ", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 23,
    q: "'ई' अक्षर के बाद आने वाला अक्षर है?",
    img: null,
    opts: [
      { text: "उ", img: null, correct: true }, // Key: A[cite: 2]
      { text: "ऊ", img: null, correct: false }
    ]
  },
  {
    id: 24,
    q: "'ब', 'भ' के बाद खाली स्थान के लिए अक्षर चुनिए:",
    img: null,
    opts: [
      { text: "म", img: null, correct: true }, // Key: A[cite: 2]
      { text: "त", img: null, correct: false }
    ]
  },

  // Page 10 (Q25 to Q27)
  {
    id: 25,
    q: "'उ' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "कबूतर", img: "images/pigeon.jpeg", correct: false },
      { text: "उल्लू", img: "images/owl.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 26,
    q: "चित्र से संबंधित अक्षर को पहचानिए:",
    img: "images/jug.jpeg", // Jug (जग)
    opts: [
      { text: "ज", img: null, correct: true }, // Key: A[cite: 2]
      { text: "न", img: null, correct: false }
    ]
  },
  {
    id: 27,
    q: "'ष' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "सेब", img: "images/apple.png", correct: false },
      { text: "षट्कोण", img: "images/hexagon.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },

  // Page 11 (Q28 to Q30)
  {
    id: 28,
    q: "'घ' वाला चित्र है:",
    img: null,
    opts: [
      { text: "फूल", img: "images/flower_pot.jpeg", correct: false },
      { text: "घड़ी", img: "images/clock.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 29,
    q: "चित्र के नाम का पहला अक्षर है:",
    img: "images/indian_flag.jpeg", // Flag (झंडा)
    opts: [
      { text: "झ", img: null, correct: true }, // Key: A[cite: 2]
      { text: "छ", img: null, correct: false }
    ]
  },
  {
    id: 30,
    q: "'झ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "झरना", img: "images/waterfall.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "मछली", img: "images/fish.jpeg", correct: false }
    ]
  },

  // Page 12 (Q31 to Q33)
  {
    id: 31,
    q: "गलत मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "ईख - औ", img: "images/sugarcane.jpeg", correct: true }, // Key: A (Wrong match)[cite: 2]
      { text: "ऐनक - ऐ", img: "images/spectacles.jpeg", correct: false }
    ]
  },
  {
    id: 32,
    q: "'त' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "तरबूज", img: "images/watermelon.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "कबूतर", img: "images/pigeon.jpeg", correct: false }
    ]
  },
  {
    id: 33,
    q: "'इ' और 'ऊ' के बीच खाली स्थान के लिए अक्षर चुनिए:",
    img: null,
    opts: [
      { text: "ई", img: null, correct: true }, // Key: A[cite: 2]
      { text: "आ", img: null, correct: false }
    ]
  },

  // Page 13 (Q34 to Q36)
  {
    id: 34,
    q: "'इ, ई, उ' के बाद खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: false },
      { text: "ऊ", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 35,
    q: "'ठ' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "झंडा", img: "images/indian_flag.jpeg", correct: false },
      { text: "ठठेरा", img: "images/thatera.jpeg", correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 36,
    q: "'त' के बाद खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "थ", img: null, correct: true }, // Key: A[cite: 2]
      { text: "द", img: null, correct: false }
    ]
  },

  // Page 14 (Q37 to Q40)
  {
    id: 37,
    q: "'म' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "मटर", img: "images/peas.jpeg", correct: true }, // Key: A[cite: 2]
      { text: "ऊँट", img: "images/camel.jpeg", correct: false }
    ]
  },
  {
    id: 38,
    q: "चित्र देखकर अक्षर पहचानिए:",
    img: "images/bear.jpeg", // Bear (भालू)
    opts: [
      { text: "म", img: null, correct: false },
      { text: "भ", img: null, correct: true } // Key: B[cite: 2]
    ]
  },
  {
    id: 39,
    q: "'क' किसके पहले आता है?",
    img: null,
    opts: [
      { text: "ख", img: null, correct: true }, // Key: A[cite: 2]
      { text: "ग", img: null, correct: false }
    ]
  },
  {
    id: 40,
    q: "'न' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "झरना", img: "images/waterfall.jpeg", correct: false },
      { text: "नल", img: "images/tap.jpeg", correct: true } // Key: B[cite: 2]
    ]
  }
];

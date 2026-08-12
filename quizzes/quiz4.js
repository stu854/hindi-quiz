const quiz4 = [
  // Page 1 (Q1 to Q3)
  {
    id: 1,
    q: "'ई' अक्षर के बाद आता है:",
    img: null,
    opts: [
      { text: "इ", img: null, correct: false },
      { text: "उ", img: null, correct: true }
    ]
  },
  {
    id: 2,
    q: "'ओ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "ओखली", img: "images/okhli.jpeg", correct: true },
      { text: "अनार", img: "images/pomegranate.jpeg", correct: false }
    ]
  },
  {
    id: 3,
    q: "'उ' अक्षर से पहले आता है:",
    img: null,
    opts: [
      { text: "ई", img: null, correct: true },
      { text: "अ", img: null, correct: false }
    ]
  },

  // Page 2 (Q4 to Q5)
  {
    id: 4,
    q: "उचित मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "आम - आ", img: "images/mango.jpeg", correct: false },
      { text: "इमली - ई", img: "images/tamarind.jpeg", correct: true }
    ]
  },
  {
    id: 5,
    q: "'इ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "इमली", img: "images/tamarind.jpeg", correct: true },
      { text: "अमरूद", img: "images/guava.jpeg", correct: false }
    ]
  },

  // Page 3 (Q6 to Q8)
  {
    id: 6,
    q: "'ए' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "एकतारा", img: "images/ektara.jpeg", correct: true },
      { text: "तलवार", img: "images/sword.jpeg", correct: false }
    ]
  },
  {
    id: 7,
    q: "दिए गए अक्षर से अलग अक्षर को पहचानिए:",
    img: "images/aa_hindi_letter.jpeg",
    opts: [
      { text: "इ", img: null, correct: true },
      { text: "आ", img: null, correct: false }
    ]
  },
  {
    id: 8,
    q: "'अ' ..... 'इ' खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: true },
      { text: "ई", img: null, correct: false }
    ]
  },

  // Page 4 (Q9 to Q11)
  {
    id: 9,
    q: "व्यंजन पहचानिए:",
    img: null,
    opts: [
      { text: "व", img: null, correct: true },
      { text: "ओ", img: null, correct: false }
    ]
  },
  {
    id: 10,
    q: "'अ' अक्षर के बाद आता है:",
    img: null,
    opts: [
      { text: "उ", img: null, correct: false },
      { text: "आ", img: null, correct: true }
    ]
  },
  {
    id: 11,
    q: "'ढ' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "ढोलक", img: "images/dholak.jpeg", correct: true },
      { text: "टोकरी", img: "images/basket.jpeg", correct: false }
    ]
  },

  // Page 5 (Q12 to Q14)
  {
    id: 12,
    q: "व्यंजन पहचानिए:",
    img: null,
    opts: [
      { text: "ष", img: null, correct: true },
      { text: "ई", img: null, correct: false }
    ]
  },
  {
    id: 13,
    q: "सही मिलान को पहचानिए:",
    img: null,
    opts: [
      { text: "aam - इ", img: "images/mango.jpeg", correct: false },
      { text: "एड़ी - ए", img: "images/heel.jpeg", correct: true }
    ]
  },
  {
    id: 14,
    q: "'अ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "कमल", img: "images/lotus.jpeg", correct: false },
      { text: "अमरूद", img: "images/guava.jpeg", correct: true }
    ]
  },

  // Page 6 (Q15 to Q17)
  {
    id: 15,
    q: "चित्र के नाम का पहला अक्षर पहचानिए:",
    img: "images/okhli.jpeg", // Tamarind (इमली)
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "ओ", img: null, correct: true }
    ]
  },
  {
    id: 16,
    q: "'ए' से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "एड़ी", img: "images/heel.jpeg", correct: true },
      { text: "उल्लू", img: "images/owl.jpeg", correct: false }
    ]
  },
  {
    id: 17,
    q: "'इ' अक्षर वाले चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "इमली", img: "images/tamarind.jpeg", correct: false },
      { text: "अंगूर", img: "images/green_grapes.jpeg", correct: true }
    ]
  },

  // Page 7 (Q18 to Q20)
  {
    id: 18,
    q: "'ए' _ 'ओ' के बीच में आने वाला अक्षर पहचानिए:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: false },
      { text: "ऐ", img: null, correct: true }
    ]
  },
  {
    id: 19,
    q: "'ऐ' अक्षर के बाद आता है:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: false },
      { text: "ओ", img: null, correct: true }
    ]
  },
  {
    id: 20,
    q: "चित्र से संबंधित अक्षर पहचानिए:",
    img: "images/rishi.jpeg", // Sage (ऋषि)
    opts: [
      { text: "आ", img: null, correct: false },
      { text: "ऋ", img: null, correct: true }
    ]
  },

  // Page 8 (Q21 to Q23)
  {
    id: 21,
    q: "'अं' अक्षर से संबंधित चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "औरत", img: "images/woman.jpeg", correct: false },
      { text: "अंगूर", img: "images/green_grapes.jpeg", correct: true }
    ]
  },
  {
    id: 22,
    q: "'ई' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "ईख", img: "images/sugarcane.jpeg", correct: true },
      { text: "ओखली", img: "images/okhli.jpeg", correct: false }
    ]
  },
  {
    id: 23,
    q: "'ट' अक्षर वाला चित्र है:",
    img: null,
    opts: [
      { text: "टमाटर", img: "images/tomato.jpeg", correct: true },
      { text: "अनार", img: "images/pomegranate.jpeg", correct: false }
    ]
  },

  // Page 9 (Q24 to Q25)
  {
    id: 24,
    q: "जहाज और जग किस अक्षर से शुरू होते हैं?",
    img: "images/ship.jpeg",
    opts: [
      { text: "ज", img: null, correct: true },
      { text: "क्ष", img: null, correct: false }
    ]
  },
  {
    id: 25,
    q: "सही मिलान को चुनिए:",
    img: null,
    opts: [
      { text: "खरगोश - क", img: "images/rabbit.jpeg", correct: false },
      { text: "रथ - र", img: "images/chariot.jpeg", correct: true }
    ]
  },

  // Page 10 (Q26 to Q28)
  {
    id: 26,
    q: "'ब' अक्षर से संबंधित चित्र को चुनिए:",
    img: null,
    opts: [
      { text: "बत्तख", img: "duck.jpeg", correct: true },
      { text: "ठठेरा", img: "images/thatera.jpeg", correct: false }
    ]
  },
  {
    id: 27,
    q: "समान चित्र को पहचानिए:",
    img: "images/watermelon.jpeg", // Watermelon (तरबूज)
    opts: [
      { text: "तरबूज", img: "images/watermelon.jpeg", correct: true },
      { text: "अमरूद", img: "images/guava.jpeg", correct: false }
    ]
  },
  {
    id: 28,
    q: "चित्र के नाम का पहला अक्षर है:",
    img: "images/flower_pot.jpeg", // Flower pot
    opts: [
      { text: "ग", img: null, correct: false },
      { text: "ख", img: null, correct: true }
    ]
  },

  // Page 11 (Q29 to Q31)
  {
    id: 29,
    q: "'छ' अक्षर वाले चित्र को पहचानिए:",
    img: null,
    opts: [
      { text: "छाता", img: "images/umbrella.png", correct: true },
      { text: "ऐनक", img: "images/spectacles.png", correct: false }
    ]
  },
  {
    id: 30,
    q: "अलग चित्र को पहचानिए:",
    img: "images/fish.jpeg",
    opts: [
      { text: "उल्लू", img: "images/owl.jpeg", correct: false },
      { text: "मछली", img: "images/fish.jpeg", correct: true }
    ]
  },
  {
    id: 31,
    q: "'ए' से पहले आने वाला अक्षर है:",
    img: null,
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "ऋ", img: null, correct: true }
    ]
  },

  // Page 12 (Q32 to Q35)
  {
    id: 32,
    q: "'अ' _ 'इ' खाली स्थान के लिए अक्षर चुनिए:",
    img: null,
    opts: [
      { text: "आ", img: null, correct: true },
      { text: "ई", img: null, correct: false }
    ]
  },
  {
    id: 33,
    q: "समान अक्षर को पहचानिए:",
    img: "images/gya_hindi_letter.jpeg",
    opts: [
      { text: "ण", img: null, correct: false },
      { text: "ज्ञ", img: null, correct: true }
    ]
  },
  {
    id: 34,
    q: "चित्र से संबंधित अक्षर को पहचानिए:",
    img: "images/goat.jpeg", // Goat (बकरी)
    opts: [
      { text: "च", img: null, correct: false },
      { text: "ब", img: null, correct: true }
    ]
  },
  {
    id: 35,
    q: "'आ' _ 'ई' के बीच में आता है:",
    img: null,
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "इ", img: null, correct: true }
    ]
  },

  // Page 13 (Q36 to Q38)
  {
    id: 36,
    q: "चित्र से संबंधित अक्षर को पहचानिए:",
    img: "images/kite.jpeg", // Kite (पतंग)
    opts: [
      { text: "ख", img: null, correct: false },
      { text: "प", img: null, correct: true }
    ]
  },
  {
    id: 37,
    q: "दिए गए अक्षर से अलग अक्षर को पहचानो:",
    img: "images/jh_hindi_letter.jpeg",
    opts: [
      { text: "झ", img: null, correct: false },
      { text: "इ", img: null, correct: true }
    ]
  },
  {
    id: 38,
    q: "चित्र से संबंधित अक्षर को पहचानिए:",
    img: "images/owl.jpeg", // Owl (उल्लू)
    opts: [
      { text: "अ", img: null, correct: false },
      { text: "उ", img: null, correct: true }
    ]
  },

  // Page 14 (Q39 to Q40)
  {
    id: 39,
    q: "'ई' _ 'ऊ' के बीच में आता है:",
    img: null,
    opts: [
      { text: "उ", img: null, correct: true },
      { text: "अ", img: null, correct: false }
    ]
  },
  {
    id: 40,
    q: "च _ ज खाली स्थान भरिए:",
    img: null,
    opts: [
      { text: "छ", img: null, correct: true },
      { text: "झ", img: null, correct: false }
    ]
  }
];

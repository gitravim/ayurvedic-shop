export const CATEGORIES = ['All', 'Digestion', 'Immunity', 'Skin', 'Ritual Tools'];

export const products = [
  {
    id: 1,
    name: 'Triphala Tablets',
    tagline: 'The Three-Fruit Elixir',
    price: 22.99,
    category: 'Digestion',
    emoji: '🌿',
    color: 'from-forest/10 to-forest/5',
    accent: 'forest',
    description:
      'A time-honoured formulation of three sacred fruits — Amalaki, Bibhitaki, and Haritaki — to gently cleanse, nourish, and restore digestive vitality.',
    benefits: [
      'Gentle daily cleansing of the gut lining',
      'Supports healthy elimination and regularity',
      'Rich in Vitamin C and antioxidants',
      'Balances all three doshas (Vata, Pitta, Kapha)',
    ],
    modernScience:
      'Clinical studies show Triphala exhibits prebiotic properties, supporting a healthy gut microbiome. Its gallic acid content has demonstrated antioxidant and anti-inflammatory effects in peer-reviewed research.',
    traditionalUse:
      "Used for over 1,000 years in Ayurvedic Rasayana (rejuvenation) therapy. Classical texts prescribe it as a \"tridoshic\" rasayana — beneficial regardless of one's constitution.",
    ingredients: 'Amalaki fruit (Emblica officinalis), Bibhitaki fruit (Terminalia bellirica), Haritaki fruit (Terminalia chebula). No fillers, no binders.',
    doshaMatch: ['Vata', 'Pitta', 'Kapha'],
    reviews: [
      { name: 'Priya S.', rating: 5, text: 'My digestion has never felt more balanced. Taking these every evening has become a sacred ritual.' },
      { name: 'Marcus W.', rating: 5, text: 'Skeptical at first, but three weeks in — remarkable regularity and zero bloating.' },
    ],
  },
  {
    id: 2,
    name: 'Ashwagandha Tablets',
    tagline: 'The Strength of a Horse',
    price: 24.99,
    category: 'Immunity',
    emoji: '🌙',
    color: 'from-amber/10 to-amber/5',
    accent: 'amber',
    description:
      'KSM-66® full-spectrum ashwagandha root extract — the world\'s most researched adaptogen — formulated for calm energy, resilience under stress, and deep, restorative sleep.',
    benefits: [
      'Clinically studied for cortisol reduction',
      'Promotes restful sleep and faster recovery',
      'Supports thyroid and adrenal function',
      'Builds long-term stress resilience',
    ],
    modernScience:
      'Over 20 clinical trials confirm KSM-66® Ashwagandha reduces serum cortisol by up to 27.9%, improves sleep quality scores, and supports VO₂ max in athletes.',
    traditionalUse:
      'Classified as a "Medhya Rasayana" (brain tonic) in Charaka Samhita. Traditionally prepared in warm milk (ashwagandha latte) for centuries as a rejuvenating nighttime tonic.',
    ingredients: 'KSM-66® Ashwagandha Root Extract (5% withanolides), Organic Ashwagandha Root Powder. Vegan capsule shell.',
    doshaMatch: ['Vata', 'Kapha'],
    reviews: [
      { name: 'Aisha T.', rating: 5, text: 'I sleep so deeply now. My anxiety has genuinely softened after a month of consistent use.' },
      { name: 'Daniel R.', rating: 4, text: 'Subtle but real. I handle work pressure with noticeably more equanimity.' },
    ],
  },
  {
    id: 3,
    name: 'Nasya Oil',
    tagline: 'Gateway to the Mind',
    price: 17.99,
    category: 'Immunity',
    emoji: '💧',
    color: 'from-sepia/10 to-sepia/5',
    accent: 'sepia',
    description:
      'A classical Ayurvedic nasal oil blended with Brahmi, Calamus, and sesame base oil. Nasya is one of the Panchakarma five therapies, used to clear the nasal passages and calm the mind.',
    benefits: [
      'Clears and lubricates nasal passages',
      'Supports clarity of mind and sinus health',
      'Grounds Vata in the head and neck region',
      'Seasonal allergy and congestion support',
    ],
    modernScience:
      'Sesame oil has demonstrated antimicrobial and anti-inflammatory properties in nasal mucosa research. Brahmi (Bacopa monnieri) is clinically studied for cognitive support.',
    traditionalUse:
      'Nasya is one of the original five Panchakarma purification therapies. Administered as 2–5 drops per nostril each morning to keep the "gateway to the brain" clear and vital.',
    ingredients: 'Organic Sesame Oil (base), Brahmi (Bacopa monnieri), Calamus Root (Acorus calamus), Eucalyptus essential oil.',
    doshaMatch: ['Vata', 'Pitta'],
    reviews: [
      { name: 'Leena K.', rating: 5, text: 'I start every morning with Nasya. My seasonal allergies have diminished significantly.' },
      { name: 'Tom B.', rating: 5, text: 'Feels meditative. The aroma is incredible and I feel clear-headed within minutes.' },
    ],
  },
  {
    id: 4,
    name: 'Kumkumadi Face Oil',
    tagline: 'Saffron & Gold for the Skin',
    price: 32.99,
    category: 'Skin',
    emoji: '✨',
    color: 'from-amber/15 to-amber/5',
    accent: 'amber',
    description:
      'A luxurious Ayurvedic facial oil drawn from an ancient royal formula featuring true saffron, sandalwood, and red sandalwood in a sesame base. For luminosity, evenness, and unmistakable glow.',
    benefits: [
      'Brightens complexion and evens skin tone',
      'Fades hyperpigmentation and dark spots',
      'Deep nourishment for dry and mature skin',
      'Anti-inflammatory for acne-prone skin',
    ],
    modernScience:
      'Saffron (Crocus sativus) contains crocin and safranal — compounds clinically shown to inhibit melanin synthesis, directly addressing hyperpigmentation.',
    traditionalUse:
      'Documented in Ashtanga Hridayam as a formulation fit for royalty. Traditionally applied as 3–5 drops to the face before sleep for "Varnya" (skin brightening) effects.',
    ingredients: 'Organic Sesame Oil, Saffron (Crocus sativus), Red Sandalwood, White Sandalwood, Vetiver, Lotus, Manjistha, Licorice Root.',
    doshaMatch: ['Pitta', 'Vata'],
    reviews: [
      { name: 'Sofia M.', rating: 5, text: 'My skin has never looked more radiant. The scent alone is worth the price — pure luxury.' },
      { name: 'Kiran P.', rating: 5, text: 'Three weeks in and my hyperpigmentation has visibly faded. Nothing else has worked like this.' },
    ],
  },
  {
    id: 5,
    name: 'Copper Tongue Cleaner',
    tagline: 'Ancient Oral Detox',
    price: 15.00,
    category: 'Ritual Tools',
    emoji: '🌅',
    color: 'from-amber/10 to-sepia/5',
    accent: 'sepia',
    description:
      'Hand-crafted from pure food-grade copper. Tongue scraping (Jihwa Prakshalana) is the first recommended practice in classical Ayurvedic Dinacharya (daily routine) for oral and systemic health.',
    benefits: [
      'Removes toxic Ama (undigested residue) from the tongue',
      'Improves taste perception and stimulates digestion',
      'Naturally antimicrobial — copper inhibits bacteria',
      'Reduces bad breath at source',
    ],
    modernScience:
      'A 2004 randomized controlled trial found tongue scraping significantly reduces VSCs (volatile sulfur compounds) — the primary cause of halitosis — more effectively than toothbrushing alone.',
    traditionalUse:
      'The first of the 20 Dinacharya practices prescribed in Charaka Samhita. Tongue scraping is performed upon waking, before brushing, with gentle back-to-front strokes.',
    ingredients: '100% Pure Food-Grade Copper (99.9%). No coatings, no alloys. Naturally self-sanitizing.',
    doshaMatch: ['Vata', 'Pitta', 'Kapha'],
    reviews: [
      { name: 'James H.', rating: 5, text: 'The most impactful $15 I\'ve spent on my health. My morning breath is transformed.' },
      { name: 'Nadia F.', rating: 5, text: 'Beautiful craftsmanship. It feels like a ritual object. Totally changed my morning routine.' },
    ],
  },
  {
    id: 6,
    name: 'Borage Oil Capsules',
    tagline: 'The Star Flower for Joints',
    price: 28.00,
    category: 'Immunity',
    emoji: '⭐',
    color: 'from-forest/10 to-forest/5',
    accent: 'forest',
    description:
      'Cold-pressed borage seed oil — the richest botanical source of gamma-linolenic acid (GLA) — for systemic inflammation support, joint mobility, and radiant skin from within.',
    benefits: [
      'Highest GLA content of any botanical oil (24%)',
      'Reduces joint stiffness and inflammatory markers',
      'Supports hormonal balance and skin barrier',
      'Evening use for overnight cellular repair',
    ],
    modernScience:
      'GLA from borage oil converts to DGLA in the body, which produces anti-inflammatory prostaglandins (PGE1). Studies in rheumatoid arthritis show significant reduction in joint tenderness scores.',
    traditionalUse:
      'Borage (Borago officinalis) has been used since Roman times as a "cordial herb" for courage and vitality. Medieval herbalists called it the "herb of gladness."',
    ingredients: 'Cold-Pressed Borage Seed Oil (Borago officinalis, 24% GLA). Softgel capsule (bovine gelatin). No soy, no GMO.',
    doshaMatch: ['Vata', 'Pitta'],
    reviews: [
      { name: 'Rachel C.', rating: 5, text: 'My morning joint stiffness has reduced noticeably after 6 weeks. Worth every penny.' },
      { name: 'Ben A.', rating: 4, text: 'Subtle changes week by week. My skin also looks noticeably better — a bonus I didn\'t expect.' },
    ],
  },
];

export const DOSHA_QUIZ = {
  questions: [
    {
      id: 'body',
      question: 'How would you describe your natural body frame?',
      options: [
        { label: 'Slim, light, find it hard to gain weight', dosha: 'Vata' },
        { label: 'Medium, muscular, gain and lose easily', dosha: 'Pitta' },
        { label: 'Larger, solid, tend to retain weight', dosha: 'Kapha' },
      ],
    },
    {
      id: 'mind',
      question: 'Under stress, you tend to…',
      options: [
        { label: 'Worry, feel anxious or scattered', dosha: 'Vata' },
        { label: 'Feel irritable, frustrated, or angry', dosha: 'Pitta' },
        { label: 'Withdraw, become lethargic or stubborn', dosha: 'Kapha' },
      ],
    },
    {
      id: 'digestion',
      question: 'Describe your typical digestion:',
      options: [
        { label: 'Irregular — sometimes great, sometimes not', dosha: 'Vata' },
        { label: 'Strong and fast — I get very hungry', dosha: 'Pitta' },
        { label: 'Slow but steady — rarely get very hungry', dosha: 'Kapha' },
      ],
    },
    {
      id: 'sleep',
      question: 'How do you typically sleep?',
      options: [
        { label: 'Light sleeper, wake often, vivid dreams', dosha: 'Vata' },
        { label: 'Moderate, fall asleep easily but wake early', dosha: 'Pitta' },
        { label: 'Heavy sleeper, could sleep for hours', dosha: 'Kapha' },
      ],
    },
    {
      id: 'skin',
      question: 'Your natural skin tends to be:',
      options: [
        { label: 'Dry, thin, rough, or prone to cracking', dosha: 'Vata' },
        { label: 'Oily in the T-zone, sensitive or reddish', dosha: 'Pitta' },
        { label: 'Thick, smooth, cool, and oily overall', dosha: 'Kapha' },
      ],
    },
  ],
  recommendations: {
    Vata: {
      tagline: 'You are Vata — Air & Space',
      description:
        'Your creative, quick-moving Vata nature needs grounding, warmth, and regularity. Prioritize consistent routines, nourishing oils, and calming adaptogens.',
      productIds: [1, 2, 3],
    },
    Pitta: {
      tagline: 'You are Pitta — Fire & Water',
      description:
        'Your sharp, driven Pitta nature needs cooling, soothing support. Prioritize anti-inflammatory herbs, skin brighteners, and practices that reduce heat and intensity.',
      productIds: [1, 4, 3],
    },
    Kapha: {
      tagline: 'You are Kapha — Earth & Water',
      description:
        'Your steady, nurturing Kapha nature thrives with stimulation, movement, and circulation. Prioritize energising herbs, digestive support, and daily detox practices.',
      productIds: [1, 2, 5],
    },
  },
};

export const BUNDLES = [
  {
    id: 'morning-ritual',
    name: 'Morning Ritual Bundle',
    productIds: [5, 3, 1],
    discount: 0.15,
    description: 'Start your Dinacharya right — copper scraper, Nasya oil, and Triphala.',
  },
  {
    id: 'stress-recovery',
    name: 'Stress & Recovery Bundle',
    productIds: [2, 6, 1],
    discount: 0.15,
    description: 'Adaptogen stack for modern stress — ashwagandha, borage oil, and Triphala.',
  },
  {
    id: 'skin-glow',
    name: 'Skin Glow Bundle',
    productIds: [4, 6, 3],
    discount: 0.15,
    description: 'Inner and outer radiance — Kumkumadi oil, borage capsules, and Nasya.',
  },
];

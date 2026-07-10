export const business = {
  name: "Aesthetic",
  legalName: "Aesthetic Clinic",
  domain: "https://saaesthetics.com",
  phone: "+923000000000",
  phoneDisplay: "+92 300 000 0000",
  whatsapp: "923000000000",
  whatsappDisplay: "+92 300 000 0000",
  email: "hello@saaesthetics.com",
  address: {
    street: "Lake Road",
    city: "Lahore",
    country: "Pak",
    countryName: "Pakistan",
  },
  hours: "Mon–Sat 9AM–7PM",
  license: "DHA License No. AE12847",
  social: {
    instagram: "https://instagram.com/saaesthetics",
  },
  doctor: {
    name: "Dr. Nour Al-Hassan", // placeholder — swap for real name
    credentials: ["MBBS", "MRCS", "Aesthetic Medicine Fellow"],
    photo:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop&auto=format", // placeholder
  },
  rating: { value: 4.9, count: 312 },
};

export const trustBarItems = [
  { label: "Treatments Performed", value: "1,452+" },
  { label: "Google Rating", value: "5.0 ★" },
  { label: "Years of Excellence", value: "11" },
  { label: "DHA Licensed", value: "Clinic" },
  { label: "Physician-Led", value: "Always" },
];
export const testimonials = [
  {
    name: "Ayesha K.",
    country: "Lahore",
    stars: 5,
    text: "I was worried the results would look fake, but they look so natural. I'm really happy with how everything turned out.",
  },
  {
    name: "Hira M.",
    country: "Islamabad",
    stars: 5,
    text: "The doctor explained everything in a simple way. I felt comfortable from the first visit.",
  },
  {
    name: "Sana A.",
    country: "Karachi",
    stars: 5,
    text: "The staff was very kind and professional. The whole experience was smooth and stress-free.",
  },
  {
    name: "Mahnoor R.",
    country: "Lahore",
    stars: 5,
    text: "My family noticed I looked fresh, but no one guessed I had a treatment. That's exactly what I wanted.",
  },
  {
    name: "Iqra S.",
    country: "Lahore",
    stars: 5,
    text: "I had so many questions before booking. They answered everything and never made me feel rushed.",
  },
  {
    name: "Zainab T.",
    country: "Lahore",
    stars: 5,
    text: "This was my first aesthetic treatment, and I'm glad I chose this clinic. The results are better than I expected.",
  },
];

export const services = [
  {
    id: "botox",
    category: "face",
    name: "Anti Wrinkle Treatment",
    outcome: "Rested, refreshed — not frozen. Results that move with you.",
    popular: true,
    img: "/images/anti-wrinkle.jpg",
  },
  {
    id: "fillers",
    category: "face",
    name: "Dermal Fillers",
    outcome: "Restore volume and contour naturally. Your face, elevated.",
    popular: true,
    img: "/images/derma-fillers.jpg",
  },
  {
    id: "skin",
    category: "skin",
    name: "Skin Rejuvenation",
    outcome: "Luminous, even skin that catches the light.",
    popular: false,
    img: "/images/skin-rejuv.jpg",
  },
  {
    id: "laser",
    category: "skin",
    name: "Laser Resurfacing",
    outcome: "Visibly smoother texture and tone in fewer sessions.",
    popular: false,
    img: "/images/laser-resurfacing.jpg",
  },
  {
    id: "prp",
    category: "skin",
    name: "PRP Hair and Skin",
    outcome: "Your own biology, amplified for visible renewal.",
    popular: true,
    img: "/images/prp-hair-skin.jpg",
  },
  {
    id: "lift",
    category: "face",
    name: "Thread Lift",
    outcome: "A subtle lift without surgery. Natural, lasting results.",
    popular: false,
    img: "/images/thread-lift.jpg",
  },
  {
    id: "facial",
    category: "face",
    name: "Hydra Facial",
    outcome: "A subtle lift without surgery. Natural, lasting results.",
    popular: false,
    img: "/images/hydra-facial.jpg",
  },
];

export const beforeAfterCases = [
  {
    name: "Sara",
    treatment: "Dermal Fillers",
    sessions: "1 session",
    before: "/images/b1.jpg",
    after: "/images/a1.jpg",
  },
  {
    name: "Layla",
    treatment: "Anti Wrinkle",
    sessions: "1 session",
    before: "/images/b2.jpg",
    after: "/images/a2.jpg",
  },
  {
    name: "Nadia",
    treatment: "Skin Rejuvenation",
    sessions: "3 sessions",
    before: "/images/b3.jpg",
    after: "/images/a3.jpg",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Tell us your concerns. No obligation, no pressure. Just a conversation.",
  },
  {
    num: "02",
    title: "Personalised Plan",
    desc: "Dr. Nour designs a plan for your skin, your goals, and your timeline.",
  },
  {
    num: "03",
    title: "Comfortable Treatment",
    desc: "30–60 minutes. Topical numbing available. You are always in control.",
  },
  {
    num: "04",
    title: "Results You'll Love",
    desc: "Same-day glow or gradual transformation — we tell you exactly what to expect.",
  },
  {
    num: "05",
    title: "Aftercare & Follow-Up",
    desc: "We check in. You are never left wondering.",
  },
];

export const deepTestimonials = [
  {
    name: "Layla M.",
    treatment: "Anti-Wrinkle Treatment",
    months: "8 months ago",
    img: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=80&h=80&fit=crop&auto=format",
    text: "I spent months researching clinics and kept talking myself out of it. The fear of looking like a different person was so real. I booked the free consultation just to ask questions, fully prepared to leave without doing anything. Dr. Nour spent 40 minutes with me. She actually told me what I didn't need. I left having done the treatment because I finally trusted someone. Six months later, I look like myself — just more rested, more confident.",
  },
  {
    name: "Hana R.",
    treatment: "Dermal Fillers",
    months: "4 months ago",
    img: "https://images.unsplash.com/photo-1577746838851-816a43ca8733?w=80&h=80&fit=crop&auto=format",
    text: "My fear was being judged. Being seen as someone who 'does this.' What I found instead was a clinic that treats you like an intelligent adult making a thoughtful decision. The results are exactly what I wanted — nobody knows, but I feel the difference every time I look in the mirror.",
  },
];

export const faqs = [
  {
    q: "Will I look natural, or overdone?",
    a: "Natural results are our only objective. Dr. Nour's philosophy is enhancement, not transformation. Every plan is designed so you look like the best version of yourself — not a different person. If you have concerns, bring photos of results you like and don't like. We work to your definition of natural.",
  },
  {
    q: "Is it safe? What are the side effects?",
    a: "All treatments are performed by Dr. Nour Al-Hassan (MBBS, MRCS), a physician with 11 years of specialist experience. We use only premium, clinically-approved products. Side effects are mild and temporary — minor swelling or redness for 24–48 hours in most cases. You will receive a full written aftercare plan.",
  },
  {
    q: "How long do results last?",
    a: "Anti-wrinkle treatments typically last 3–4 months, improving with regular maintenance. Dermal fillers last 9–18 months depending on the product and placement. Skin treatments improve progressively, with results lasting 12+ months. We will give you an honest timeline based on your specific plan.",
  },
  {
    q: "Will it hurt?",
    a: "Most patients describe mild pressure, not pain. Topical numbing cream is applied 20–30 minutes before treatment. Comfort is our priority — we go at your pace and stop anytime you need.",
  },
  {
    q: "How much does it cost?",
    a: "Anti-wrinkle from AED 899 · Dermal fillers from AED 1,200 · Skin treatments from AED 650. Exact pricing is personalised to your goals and is discussed transparently during your free consultation — no surprises, no obligation.",
  },
  {
    q: "How do I know which treatment I need?",
    a: "You don't need to know. That is what the free consultation is for. Dr. Nour will assess your concerns and recommend only what is genuinely appropriate for you — never more than needed.",
  },
  {
    q: "What if I dont like the result?",
    a: "We follow up with every patient after treatment. If something feels off, come back in and we will review and adjust where appropriate. We have never walked away from a patient who needed support.",
  },
  {
    q: "Can I come in without committing to anything?",
    a: "Absolutely. The consultation is completely free and carries zero obligation. You can ask every question, see our space, and leave without doing anything.",
  },
];

export const pricingPackages = [
  {
    name: "Starter Glow",
    price: "From AED 899",
    popular: false,
    desc: "A single targeted treatment for a specific concern. Perfect for first-timers.",
    items: [
      "Anti-wrinkle or lip enhancement",
      "Free follow-up at 2 weeks",
      "Written aftercare plan",
    ],
  },
  {
    name: "Complete Refresh",
    price: "From AED 2,400",
    popular: true,
    desc: "A curated combination addressing your primary concerns in one visit.",
    items: [
      "Anti-wrinkle + filler combination",
      "Skin assessment included",
      "Two follow-up appointments",
      "Priority scheduling",
    ],
  },
  {
    name: "Signature Transformation",
    price: "From AED 5,500",
    popular: false,
    desc: "A multi-session programme designed around your long-term goals.",
    items: [
      "Full face assessment & roadmap",
      "3-session treatment programme",
      "Quarterly reviews with Dr. Nour",
      "Premium product guarantee",
      "WhatsApp direct access",
    ],
  },
];

export const WHATSAPP_URL =
  "https://wa.me/971500000000?text=Hi%2C%20I'd%20like%20to%20book%20a%20free%20consultation.";

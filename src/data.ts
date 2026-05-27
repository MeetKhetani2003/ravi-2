export const doctors = [
  {
    id: 'lakhveer-singh',
    name: 'Dr. Lakhveer Singh',
    role: 'Consultant',
    specialties: ['Pediatrics', 'General Medicine'],
    experience: '10+ Years',
    patients: '5,000+',
    bio: 'A dedicated doctor committed to providing compassionate and comprehensive care to patients, ensuring their health and well-being.',
    qualifications: ['MBBS', 'MD'],
    image: '/doctors/Dr lakhveer singh.jpeg',
    accent: 'from-amber-400 to-orange-500',
    schedule: ['Mon · 10 AM – 2 PM', 'Wed · 10 AM – 2 PM', 'Sat · 10 AM – 2 PM'],
  },
  {
    id: 'rupinder-kaur',
    name: 'Dr. Rupinder Kaur',
    role: 'Medical Director',
    specialties: ['Obstetrics & Gynaecology', 'Fertility'],
    experience: '15+ Years',
    patients: '10,000+',
    deliveries: '5,000+',
    bio: 'Leading the maternity and gynaecology departments with compassion and expertise. A warm and deeply respected obstetrician, Dr. Rupinder has guided thousands of mothers through the most precious chapter of their lives.',
    qualifications: ['MBBS', 'MS Obstetrics & Gynaecology', 'Fellow · Indian Fertility Society', 'Member · FOGSI'],
    image: '/doctors/dr-rupinder-kaur.jpeg',
    accent: 'from-blush-400 to-blush-600',
    schedule: ['Mon · 10 AM – 2 PM', 'Tue · 10 AM – 2 PM', 'Thu · 10 AM – 2 PM', 'Sat · 10 AM – 1 PM'],
  },
  {
    id: 'mrigind-singh',
    name: 'Dr. Mrigind Singh',
    role: 'Managing Director',
    specialties: ['Pediatrics', 'Neonatology'],
    experience: '15+ Years',
    patients: '10,000+',
    nicu: '4,100+',
    bio: 'Visionary leader dedicated to providing world-class pediatric care close to home. Dr. Mrigind brings rare tenderness and sharp clinical instinct to every tiny patient.',
    qualifications: ['MBBS', 'MD Pediatrics', 'Fellowship · Neonatology (IAP)', 'NNF Certified'],
    image: '/doctors/dr-mrigind-singh.jpeg',
    accent: 'from-sky-400 to-sky-600',
    schedule: ['Mon · 4 PM – 8 PM', 'Wed · 10 AM – 2 PM', 'Fri · 4 PM – 8 PM', 'Sun · On-call'],
  },
];

export const services = [
  {
    id: 'maternity',
    title: 'Obstetrics & Maternity',
    short: 'From the first heartbeat to the first cry — care that feels like home.',
    description: 'Luxury birthing suites, 24/7 obstetric anesthesia, and a team that respects every birth plan. Normal, assisted, and C-section deliveries handled with precision and warmth.',
    icon: '🤱',
    color: 'from-blush-400 to-blush-600',
    bg: 'bg-blush-50',
    features: ['Luxury birthing suites', 'Painless delivery options', 'Lactation support', 'Partner-friendly rooms'],
  },
  {
    id: 'gynecology',
    title: 'Gynecology',
    short: 'Preventive, surgical, and hormonal care for every stage of womanhood.',
    description: 'From adolescent consultations to menopause management, our gynaecologists combine empathy with advanced minimally-invasive techniques.',
    icon: '🌸',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    features: ['Laparoscopic surgery', 'Cancer screening', 'PCOD management', 'Menopause care'],
  },
  {
    id: 'fertility',
    title: 'Fertility & IVF',
    short: 'Evidence-led fertility treatments with deeply personal support.',
    description: 'IUI, IVF, ICSI, and ovulation induction under one roof. We walk with couples through every cycle with honesty, science, and hope.',
    icon: '🌱',
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50',
    features: ['IUI & IVF', 'ICSI procedures', 'Ovulation induction', 'Fertility preservation'],
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    short: 'Playful clinics. Serious medicine. For children 0–16.',
    description: 'Routine wellness, acute illness, developmental assessments, and chronic care — delivered by pediatricians your child will actually want to visit.',
    icon: '🧸',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    features: ['Well-child visits', 'Growth tracking', 'Developmental screening', 'Acute care'],
  },
  {
    id: 'neonatology',
    title: 'Neonatology & NICU',
    short: 'A Level III NICU with gentle hands and advanced technology.',
    description: 'Round-the-clock neonatologists, servo-controlled incubators, and a family-integrated care model for the tiniest arrivals.',
    icon: '👶',
    color: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-50',
    features: ['Level III NICU', '24/7 neonatologist', 'Kangaroo mother care', 'Neonatal transport'],
  },
  {
    id: 'vaccination',
    title: 'Vaccination',
    short: 'Painless, paperless immunisation — on IAP schedule.',
    description: 'Digitally-tracked vaccines from birth to adolescence. Comfort-first rooms, gentle nurses, and zero waiting time.',
    icon: '💉',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    features: ['IAP schedule', 'Painless vaccines', 'Digital records', 'Travel vaccines'],
  },
  {
    id: 'high-risk',
    title: 'High-Risk Pregnancy',
    short: 'Specialist care when every detail matters most.',
    description: 'Maternal-fetal medicine, fetal echocardiography, and a multidisciplinary team for diabetes, hypertension, twins, and beyond.',
    icon: '🫀',
    color: 'from-rose-400 to-red-500',
    bg: 'bg-rose-50',
    features: ['Fetal medicine', 'Maternal ICU backup', 'Diabetes in pregnancy', 'Twin pregnancies'],
  },
  {
    id: 'pcod',
    title: 'PCOD & Menopause',
    short: 'Hormonal health, reimagined with lifestyle-first care.',
    description: 'Integrated programs combining endocrinology, nutrition, and mental wellness for women navigating PCOD, PCOS, or menopause.',
    icon: '🌷',
    color: 'from-fuchsia-400 to-pink-500',
    bg: 'bg-fuchsia-50',
    features: ['Hormonal profiling', 'Lifestyle programs', 'Nutrition coaching', 'Mental wellness'],
  },
];

export const testimonials = [
  {
    name: 'Deep Bhullar',
    role: 'Parent',
    quote: 'Very good experince With Dr Rupinder kaur & Dr Mrigind. Both Doctors help us in very professional & in calm way. I will recomend all to visit Dr Rupinder.',
    rating: 5,
    image: 'https://images.pexels.com/photos/10935456/pexels-photo-10935456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    name: 'Neha Parjapati',
    role: 'Patient',
    quote: 'The doctor nd staff is very cooperative...the listen to the patient very calmly... Good experience nd nice doctor.',
    rating: 5,
    image: 'https://images.pexels.com/photos/10956983/pexels-photo-10956983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    name: 'Peter Kite',
    role: 'Parent',
    quote: 'Experienced dr both for kids and mothers available under one roof. We rely on Ravi Clinic. They have another set up in ph2 as well.',
    rating: 5,
    image: 'https://images.pexels.com/photos/6849619/pexels-photo-6849619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
];

export const values = [
  { title: 'Compassion First', desc: 'Every protocol is designed around human dignity.', icon: '💗' },
  { title: 'Clinical Excellence', desc: 'Evidence-led, globally benchmarked care.', icon: '✨' },
  { title: 'Family-Centred', desc: 'Partners, parents, and siblings are always welcome.', icon: '🏡' },
  { title: 'Gentle Innovation', desc: 'Technology that serves, never overwhelms.', icon: '🌿' },
];

export const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '20+', label: 'Specialist Doctors' },
  { value: '99.9%', label: 'Success Rate' },
];

export const gallery = [
  { url: 'https://images.pexels.com/photos/30282653/pexels-photo-30282653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', title: 'Delivery Suite', cat: 'Maternity', tall: true },
  { url: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=80', title: 'Gynecology Wing', cat: 'Facility' },
  { url: 'https://images.pexels.com/photos/3259628/pexels-photo-3259628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800', title: 'First Moments', cat: 'Maternity' },
  { url: 'https://images.pexels.com/photos/11782003/pexels-photo-11782003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800', title: 'Private Room', cat: 'Facility', tall: true },
  { url: 'https://images.pexels.com/photos/19963969/pexels-photo-19963969.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800', title: 'Newborn Care', cat: 'NICU' },
  { url: 'https://images.pexels.com/photos/19550812/pexels-photo-19550812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800', title: 'Pediatric Clinic', cat: 'Pediatrics', tall: true },
  { url: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800', title: 'Doctor & Baby', cat: 'NICU' },
  { url: 'https://images.pexels.com/photos/19357676/pexels-photo-19357676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800', title: 'Bedside Care', cat: 'Maternity' },
];

export const parentArticles = [
  {
    tag: 'Pregnancy',
    title: 'The first trimester: what your body is actually doing',
    excerpt: 'A gentle, honest guide to the invisible changes happening in weeks 1–12 — and why rest is not laziness.',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/10956983/pexels-photo-10956983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Newborn',
    title: 'The first 48 hours with your baby',
    excerpt: 'Feeding cues, sleep cycles, and the tiny rhythms that make newborn days feel less overwhelming.',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/3259628/pexels-photo-3259628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Vaccination',
    title: 'The complete IAP vaccination schedule, decoded',
    excerpt: 'Every shot, every reason, every comfort tip — explained by our pediatricians in plain language.',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/19550812/pexels-photo-19550812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Prenatal',
    title: 'Your hospital bag: a realistic packing list',
    excerpt: 'What you actually need, what you think you need, and what you will wish someone had told you.',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/30282653/pexels-photo-30282653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Working',
    title: 'Working during pregnancy: a guide that respects you',
    excerpt: 'Rights, accommodations, and real talk about balancing trimesters with deadlines.',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/10935456/pexels-photo-10935456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Milestones',
    title: 'Baby milestones: month by month, without the anxiety',
    excerpt: 'A gentle, evidence-based look at what to expect — and what to let unfold.',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/6849619/pexels-photo-6849619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Delivery',
    title: 'Preparing for delivery: mentally, physically, emotionally',
    excerpt: 'Breathing, birth plans, and the quiet confidence that comes from preparation.',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/19357672/pexels-photo-19357672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
  {
    tag: 'Postpartum',
    title: 'The fourth trimester no one talks about',
    excerpt: 'Recovery, identity, and the emotional landscape after baby arrives.',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/31905447/pexels-photo-31905447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000',
  },
];
export const HOSPITAL_INFO = {
  name: "RAVI MOTHER & CHILD HOSPITAL",
  shortName: "FH",
  phones: ["7888741037", "9463366657"],
  address: "Dholan Majra Chowk, Old Plaza Building, Old Chandigarh-Morinda Road, Morinda. M : 7888741037 Not For Medicolegal Purpose",
  mission: "FH aims to provide best of care close to home.",
  vision: "To be the most trusted brand in providing maternal, newborn and pediatric care services",
  coreValues: [
    "Ethical Conduct",
    "Professional Integrity",
    "Accountability",
    "Patient Centric Care"
  ],
  branches: [
    {
      name: "Fateh Children Hospital",
      location: "Ropar",
      description: "Exclusive children's hospital.",
      whatsapp: "7888741037",
      type: "Pediatrics",
      logo: "/branch_fch.png"
    },
    {
      name: "Fateh Mediclinic",
      location: "Chamkaur Sahib",
      description: "General mediclinic providing expert care.",
      mobile: "9877264696",
      type: "Mediclinic",
      logo: "/branch_mediclinic.png"
    }
  ],
  aboutText: "Fatesh Hospital (FH) provides excellent care to obstetric, gynaecological and pediatric patients. Our expertise is the result of hard working, experienced & sincere consultants providing round the clock services. At FH, we strive to give a personalized service, warm welcome and expert care to all our patrons. We are there for you to provide solutions at every stage of your life."
};


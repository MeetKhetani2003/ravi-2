import {
  Baby, Activity, Heart, Stethoscope, Microscope
} from 'lucide-react';

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
      type: "Pediatrics"
    },
    {
      name: "Fateh Mediclinic",
      location: "Chamkaur Sahib",
      description: "General mediclinic providing expert care.",
      mobile: "9877264696",
      type: "Mediclinic"
    }
  ],
  aboutText: "Fateh Hospital (FH) provides excellent care to obstetric, gynaecological and pediatric patients. Our expertise is the result of hard working, experienced & sincere consultants providing round the clock services. At FH, we strive to give a personalized service, warm welcome and expert care to all our patrons. We are there for you to provide solutions at every stage of your life."
};

export const SPECIALITIES = [
  {
    id: "obstetrics-maternity",
    title: "Obstetrics & Maternity",
    name: "Obstetrics & Maternity",
    icon: <Baby className="w-8 h-8" />,
    shortDesc: "Catering to your pregnancy right from preconceptional counselling to child birth and post-partum care.",
    desc: "Catering to your pregnancy right from preconceptional counselling to child birth and post-partum care.",
    fullDesc: "Fateh Hospital caters you to your pregnancy right from preconceptional counselling to pregnancy check-ups, child birth and post partum care. Our team has vast experience of handling high risk pregnancy cases and make every effort to ensure the well being of mother and child throughout those nine months. Hospital understands that the best moment in a couple's life is welcoming a baby and our aim is to supervise and educate you throughout your pregnancy.",
    services: ["Pre-pregnancy counselling", "Guidance", "ANC check-ups", "High-Risk Pregnancy care", "Prenatal screening and diagnosis", "Postnatal Counselling", "Follow-up"],
    image: "/hero_maternity_care_1778827153857.png",
    faqs: [
      { q: "What should I bring for my delivery at FH?", a: "We recommend a hospital bag with clothes for you and the baby, personal toiletries, and your medical records. We provide basic newborn essentials." },
      { q: "Do you offer painless delivery options?", a: "Yes, we provide Epidural Analgesia (painless labor) administered by expert anesthesiologists to ensure a comfortable birthing experience." },
      { q: "How do you handle high-risk pregnancies?", a: "Our senior consultants specialize in managing conditions like gestational diabetes, hypertension, and multiple births with 24/7 monitoring and fetal medicine support." }
    ]
  },
  {
    id: "gynaecology",
    title: "Gynaecology",
    name: "Gynaecology",
    icon: <Activity className="w-8 h-8" />,
    shortDesc: "Expert diagnosis and treatment for conditions related to the reproductive system of women.",
    desc: "Expert diagnosis and treatment for conditions related to the reproductive system of women.",
    fullDesc: "Gynaecology deals with conditions related to reproductive system of women. For e.g. menstrual disorders, infertility, menopause, malignancy and infections. Our doctor is expert in diagnosing and treating a wide range of medical conditions that affect women with holistic approach.",
    services: [
      "Gynaecological Oncology",
      "Menopausal Clinic (for ladies above 45 years)",
      "Counselling on Contraception & HPV vaccination",
      "PCOD clinic (including weight loss, hirsutism, acne)",
      "Menstrual Irregularities management",
      "Gynaecology Surgeries (Laparoscopy, Hysterectomy, Myomectomy)"
    ],
    image: "/gynecology_real.jpg"
  },
  {
    id: "fertility",
    title: "Fertility",
    name: "Fertility",
    icon: <Microscope className="w-8 h-8" />,
    shortDesc: "Latest science combined with personal guidance and care for couples facing conception difficulties.",
    desc: "Latest science combined with personal guidance and care for couples facing conception difficulties.",
    fullDesc: "Many couples find it difficult to conceive the natural way, due to barriers related to lifestyle, age and other physical disorders. At FH, couples can avail of the latest what science has to offer combined with personal guidance and care.",
    services: ["Infertility Evaluation", "Personalized Conception Guidance", "Advanced Fertility Treatments"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      { q: "When should a couple seek infertility evaluation?", a: "If you have been trying to conceive for over a year (or 6 months if over age 35) without success, it's recommended to consult our fertility specialists." },
      { q: "What tests are involved in the initial fertility assessment?", a: "Assessments typically include hormonal profiling, ultrasound scans, and semen analysis to identify potential barriers to conception." }
    ]
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    name: "Pediatrics",
    icon: <Stethoscope className="w-8 h-8" />,
    shortDesc: "Comprehensive physical, emotional and social health care for infants, children, and adolescents.",
    desc: "Comprehensive physical, emotional and social health care for infants, children, and adolescents.",
    fullDesc: "A child is greatest asset to any family. Paediatrician is extremely friendly and highly proficient in providing comprehensive health care. Paediatrician, kid's doctor are concerned about the physical, emotional and social health of infants, children, adolescents and young adults up to 19 years of age.",
    services: ["Asthma and allergy clinic", "Vaccination for all ages (painless vaccines)", "Growth & development monitoring", "Adolescent clinic", "Well baby clinic"],
    image: "/hero_pediatrician_1778827121694.png",
    faqs: [
      { q: "Do you offer painless vaccines for children?", a: "Yes, we provide advanced painless vaccination options that significantly reduce post-vaccination fever and discomfort for infants." },
      { q: "How often should I bring my child for growth monitoring?", a: "Regular check-ups are recommended every 1-2 months for infants, and every 6 months for older children to track physical and developmental milestones." }
    ]
  },
  {
    id: "neonatology",
    title: "Neonatology",
    name: "Neonatology",
    icon: <Heart className="w-8 h-8" />,
    shortDesc: "Specialized medical care for newborns, premature babies, and those with congenital defects.",
    desc: "Specialized medical care for newborns, premature babies, and those with congenital defects.",
    fullDesc: "Neonatology is a subspecialty of Paediatrics that comprises of specialized medical care for newborns, premature babies with low birth weight, suffering from any infections, heart problems or congenital defects. We provide one of the best NICU (Neonatal Intensive Care Unit) services in tricity.",
    services: ["NICU Services", "Phototherapy", "High Risk New-born follow-up OPD", "Congenital malformations management"],
    image: "/article_newborn_milestones_1778827916389.png",
    faqs: [
      { q: "What makes FH NICU special?", a: "We operate an Advanced Level III NICU, the highest standard of neonatal care, equipped with high-frequency ventilators and 24/7 neonatologist supervision." },
      { q: "Can parents be with their baby in the NICU?", a: "We encourage 'Kangaroo Mother Care' and parental involvement, following strict hygiene protocols to ensure bonding while maintaining a sterile environment." }
    ]
  }
];

export const DOCTORS = [
  {
    id: "dr-lakhveer-singh",
    name: "Dr. Lakhveer Singh",
    designation: "Consultant",
    qualifications: "MBBS, MD",
    experienceDesc: "A dedicated doctor committed to providing compassionate and comprehensive care to patients, ensuring their health and well-being.",
    experienceList: [
      "Consultant at FH"
    ],
    training: [],
    memberships: [],
    rating: 4.9,
    location: "Mohali (FH & Sunny Enclave)",
    experienceYears: "10+",
    publications: [],
    image: "/doctors/Dr lakhveer singh.jpeg"
  },
  {
    id: "dr-mrigind-singh",
    name: "Dr. Mrigind Singh",
    designation: "Consultant Neonatologist",
    qualifications: "MBBS, MD Pediatrics, Fellowship in Neonatology (IAP), PGPN (Boston, USA)",
    experienceDesc: "He has rich experience in managing indoor and outdoor patients of Paediatrics. Trained under eminent paediatricians like Dr. Sunit Singhi, Dr. Pratibha Singhi. Managed all kind of Neonatal and Paediatric emergencies. Experience in managing ventilated children in PICU, preterm, VLBW, IUGR babies (managed new-born with birth wt. of 500 gm).",
    experienceList: [
      "Consultant Pediatrics and Neonatology at Cheema Medical Complex, Mohali",
      "Visiting consultant at Ivy Multispecialty Hospital, Mohali",
      "Former Consultant at Deep Hospital, Ludhiana",
      "Former Senior Resident at Max Superspeciality Hospital, Mohali"
    ],
    training: ["National trainer for NRP Training program", "Advanced NRP course"],
    memberships: ["Life Member of NNF", "Life Member of IAP"],
    rating: 4.9,
    location: "Mohali (FH & Sunny Enclave)",
    experienceYears: "15+",
    publications: [
      "Original research article on 'Thyroid hormone status in children with protein energy malnutrition' (IJCP; 2017)",
      "Case report on 'Pseudotumor Cerebri' (IJMRP; 2016)",
      "Case report on 'Mauriac Syndrome' (JOMR; 2015)"
    ],
    image: "/doctors/dr-mrigind-singh.jpeg"
  },
  {
    id: "dr-rupinder-kaur",
    name: "Dr. Rupinder Kaur",
    designation: "Consultant OBS & GYNAE, Infertility Specialist",
    qualifications: "MBBS, MS OBS & GYNAE, EX-PCMS-1",
    experienceDesc: "An empathetic and dedicated Gynaecologist. She has played a vital role in the lives of thousands of women. Performed many normal vaginal & High-risk deliveries. Special interest in fertility treatments bringing smiles to childless couples. Expert in medical and surgical gynaecological treatments (hysterectomy, myomectomy, ovarian cystectomy).",
    experienceList: [
      "8 Years Experience",
      "Visiting consultant OBS & GYNAE in Ivy Multispecialty Hospital, Mohali",
      "Former Medical officer (Gynae) in DH, Fatehgarh Sahib, PCMS, Govt. of Punjab",
      "Former Senior Resident in Max Superspeciality Hospital, Mohali"
    ],
    training: ["ADVANCED TRAINING COURSE in INFERTILITY (FOGSI)", "Live workshop on laparoscopic surgery"],
    memberships: ["Life Member of FOGSI", "Life Member of ISAR"],
    rating: 4.9,
    location: "Mohali (FH & Sunny Enclave)",
    experienceYears: "8+",
    publications: [
      "Original research article on 'significance of LDH in perdition of PIH and its complication' (IJMRR; 2016)",
      "Original research article on 'AST- IS IT useful as a biochemical marker' (JEBMH; 2016)",
      "Original research article on 'Significance of LDH and AST' (JEBMH; 2017)"
    ],
    image: "/doctors/dr-rupinder-kaur.jpeg"
  }
];

export const ARTICLES = [
  {
    id: "planning-pregnancy",
    title: "Planning for Pregnancy",
    category: "Pregnancy",
    readTime: "3 min read",
    image: "/article_planning_pregnancy_1778827797846.png",
    content: "We help mothers plan their pregnancy by providing timely assistance they require to make the transition from conception to delivered baby, a successful one. While it takes a healthy lifestyle and prenatal care to ensure a healthy pregnancy, it also takes the help of a reputed healthcare facility to reduce the complications. Would-be mothers who choose us receive answers to their qualms about pregnancy so that they do not feel apprehensive about the process.\n\nPre pregnancy test\nA missed period is one of the most significant signs of pregnancy. However, your body might drop some other hints to announce this pleasant news. Usually these symptoms occur a few days after you miss your period. Of course, the important thing to bear in mind here is that not all women might manifest all, or even any, of these warnings. One of the most common signs of pregnancy is the feeling of nausea - Thankfully, in most cases, this sensation is not severe, and it usually wanes off by the end of the first trimester. An occasional pain or discomfort in the lower stomach region is another manifestation of pregnancy as is the feeling of heaviness and tenderness in the breasts."
  },
  {
    id: "home-pregnancy-test",
    title: "Taking a Home Pregnancy Test",
    category: "Pregnancy",
    readTime: "4 min read",
    image: "/article_pregnancy_test_1778827813860.png",
    content: "Your periods have more or less been regular, but now you have missed it. Add to this, the past few days you have been feeling lethargic and a wee bit nauseous. Could all of these be indicators that you are going to be a happy momma soon? If reading this has tempted you to rush out and buy a home pregnancy test kit, pause awhile.\n\nIt is advisable to take a home pregnancy test around a week after your periods were supposed to make their monthly appearance. This is because your body starts producing human chorionic gonadotropin, or the hCG hormone, when a fertilized egg gets attached to the uterus. This pregnancy hormone is best detected a fortnight after fertilization.\n\nHome pregnancy detection kits are easily available over-the-counter. Different brands have different modes for testing. Read the instructions carefully. In case you get a false negative but are confident that you might be pregnant, wait a few days before repeating the test. Better yet, visit your gynaecologist who will run a blood test, which is more sensitive than a urine test."
  },
  {
    id: "physical-readiness",
    title: "Pregnancy Physical Readiness | Healthy Mom = Healthy Baby",
    category: "Maternity",
    readTime: "3 min read",
    image: "/article_healthy_mom_1778827827737.png",
    content: "Caring for a baby takes a lot of effort, patience and tender loving care. However, has it occurred to you that a good amount of these attributes ought to be directed towards your own health when you decide to start your family? After all, only a healthy mom can raise a healthy child.\n\nA Frank Chat With Your Doctor\nSchedule a pre-conception session with your gynaecologist to better understand if there are any wellbeing issues you need to resolve before you conceive. The discussion would include charting your menstruation cycle, any sexual or genital infection, or past pregnancies. If you have had a child before, the doctor is likely to ask about any pregnancy or post-partum health complications. After a detailed discussion and physical assessment, you could be provided with a wellbeing plan, combining a healthy lifestyle, medical supplements like folic acid, and a nutritious diet."
  },
  {
    id: "doctor-visits",
    title: "What to Expect During Your Doctor's Visit",
    category: "Prenatal Care",
    readTime: "4 min read",
    image: "/article_doctor_visit_1778827843423.png",
    content: "Once your pregnancy is confirmed your doctor will become more than a health care provider. He or she will become your counsellor, friend, guide and even a shoulder to sob on once in a while. During the nine months of pregnancy, you might have to visit your doctor anywhere between 10 and 15 times.\n\nPreparing for a Prenatal Health Check\nTo make the most of the time you get with your doctor, file all documented details related to your pregnancy in a single file. During your check-ups your doctor will examine you to check your weight and blood pressure. Next, the doctor will measure your abdomen, and check the position of your baby. You can also listen to your baby's heart beat through the Doppler, which is usually the highlight of most prenatal visits! After the examination, the doctor will explain her assessments about your condition and counsel you on any lifestyle changes."
  },
  {
    id: "prenatal-tests",
    title: "Must Take Pre-Natal Tests",
    category: "Prenatal Care",
    readTime: "5 min read",
    image: "/article_prenatal_tests_1778827860081.png",
    content: "On your prenatal visits, your doctor will conduct a physical examination, and perhaps suggest some tests to ensure all is well with mother and child.\n\nFirst visits:\n- Urine test: Confirms pregnancy.\n- Blood test: Helps find blood grouping, deficiencies, and sexually transmitted diseases.\n- Ultrasound: Confirms the nature of the pregnancy and tentative delivery date.\n\nTrimester-Based Tests:\nBetween 9 to 13 weeks, a blood test rules out genetic ailments. Between 11 to 13.6 weeks, a Double Marker blood test and NT scan rule out abnormalities like Down's syndrome. During your second-trimester, an ultrasound between 16 and 20 weeks checks physical development. Between 24 and 28 weeks, an Oral Glucose Challenge Test checks for gestational diabetes. In the third trimester, blood tests and an ultrasound are repeated to check baby's development and placenta location."
  },
  {
    id: "working-pregnancy",
    title: "Working During Pregnancy",
    category: "Lifestyle",
    readTime: "3 min read",
    image: "/article_working_pregnancy_1778827881963.png",
    content: "Career oriented women worry that they would have to hang up their professional shoes during pregnancy. However, nothing can be further from this myth. If you are healthy, there is no reason why you should not continue working. The simple mantra is taking it easy.\n\nTips to be comfortable at work:\n- Move around whenever you can to help blood circulation.\n- If you have a desk job, invest in a comfortable chair and stretch every half hour.\n- Drink at least 2.5 liters of water daily.\n- Wear comfortable, loose clothes and put those high heels away.\n- Eat your meals on time and munch on healthy snacks every couple of hours to prevent weakness."
  },
  {
    id: "maternity-bag",
    title: "Packing Maternity Bag",
    category: "Delivery",
    readTime: "2 min read",
    image: "/article_maternity_bag_1778827900540.png",
    content: "As the time of delivery gets closer, you are both excited and apprehensive. Being prepared will go a long way. Pack your bags one month in advance and keep them ready in your car.\n\nFor Mom:\n- 3 front open loose nighties/track pants\n- Sanitary pads\n- Disposable panties\n- Feeding bras\n- Socks & slippers\n- Regular medication (if any)\n\nFor Baby:\n- 2 Baby towels\n- 3 Cotton Baby wraps / Blanket\n- 6 Baby dress / jablas / bodysuits / sleepsuits\n- Baby nail scissors\n- Mittens, socks, cap\n- 2 sweaters"
  },
  {
    id: "newborn-milestones",
    title: "Mental Milestones in Newborn Babies",
    category: "Pediatrics",
    readTime: "4 min read",
    image: "/article_newborn_milestones_1778827916389.png",
    content: "The first year of your baby's life is crucial because this is when your little one will sweep past various growth landmarks. Keeping track of mental milestones is important.\n\nSocial Smiles: Most infants display these at 6 weeks of age, a sign that the baby is developing visual acuity.\n\nMusic to the Ears: Between 8 to 12 weeks, your baby will start making cooing sounds. Generally, most kids are able to utter consonants or words like 'Mama' or 'Papa' between six to nine months. Some early talkers start at six months, while others might take nine months. Usually, babies can string two consonants together by their first birthday. If your little one has not started saying consonants by their first birthday, inform your pediatrician."
  },
  {
    id: "vaccination-schedule",
    title: "Baby's Vaccination Schedule - A Prick in Time",
    category: "Pediatrics",
    readTime: "4 min read",
    image: "/article_vaccination_1778827931947.png",
    content: "An infant's immunity system is not robust enough to tackle certain ailments, making vaccines necessary. \n\n- After Birth: BCG shot (tuberculosis), first dose of Oral Polio drops and Hepatitis B.\n- 6 to 8 Weeks: First dose for DTP, HIB, PCV vaccines and Rotavirus vaccine. Second dose of Oral polio and Hepatitis B.\n- 10-14 Weeks: Second round of DTP, HIB, PCV, Rotavirus and third Oral Polio.\n- 9-18 Months: Measles vaccine, fifth dose of Oral Polio. Hepatitis A at one year.\n- 15-24 Months: Booster doses of DTP, HIB, and MMR. Second dose of Hepatitis A.\n\nOptional vaccines include Injectable Polio, Influenza, chicken pox, and meningococcal vaccines. Discuss these with your pediatrician."
  },
  {
    id: "bath-time",
    title: "Making Bath Time an Occasion to Cherish",
    category: "Newborn Care",
    readTime: "2 min read",
    image: "/article_bath_time_1778827945927.png",
    content: "Centuries ago, mothers massaged and bathed their newborns without anyone's intervention. Would you not want to follow their example and use bath time as another excuse to better bond with your baby?\n\nBegin the bathing routine with a gentle massage. This relaxes the baby and improves the sleep patterns. Choose any light oil (almond, coconut) and tenderly massage your baby's body with fluid and smooth movements. Your newborn's body is extremely delicate so avoid pressing vigorously. Avoid massaging near the eyes, ears, nostrils, or the umbilical cord. After massage, some folks let the newborn soak up the early morning sunrays for a healthy dose of Vitamin D."
  }
];

export const TESTIMONIALS = [
  { name: "Deep Bhullar", image: "/testimonial_deep_bhullar_1778827963011.png", text: "Very good experince With Dr Rupinder kaur & Dr Mrigind. Both Doctors help us in very professional & in calm way. I will recomend all to visit Dr Rupinder" },
  { name: "Neha Parjapati", image: "/testimonial_neha_parjapati_1778827979420.png", text: "The doctor nd staff is very cooperative...the listen to the patient very calmly... Good experience nd nice doctor" },
  { name: "Peter Kite", image: "/testimonial_peter_kite_1778827995572.png", text: "Experienced dr both for kids and mothers available under one roof. We rely on Ravi Clinic. They have another set up in ph2 as well." }
];
export const HOW_IT_WORKS = [
  { step: "01", title: "Book Appointment", desc: "Select your preferred doctor and time slot through our easy online booking system or call us." },
  { step: "02", title: "Visit Hospital", desc: "Arrive at our facility for your consultation. Our staff will guide you through the check-in process." },
  { step: "03", title: "Consultation", desc: "Discuss your health concerns with our specialists who provide personalized care plans." },
  { step: "04", title: "Follow-up", desc: "Receive post-consultation support, reports, and clear instructions for your next steps." }
];

export const LEADERSHIP = [
  { name: "Dr. Lakhveer Singh", role: "Consultant", image: "/doctors/Dr lakhveer singh.jpeg", bio: "A dedicated doctor committed to providing compassionate care." },
  { name: "Dr. Mrigind Singh", role: "Managing Director", image: "/doctors/dr-mrigind-singh.jpeg", bio: "Visionary leader dedicated to providing world-class pediatric care close to home." },
  { name: "Dr. Rupinder Kaur", role: "Medical Director", image: "/doctors/dr-rupinder-kaur.jpeg", bio: "Leading the maternity and gynaecology departments with compassion and expertise." }
];

export const PARTNERS = [
  { name: "Max Healthcare", logo: "https://logos-world.net/wp-content/uploads/2021/08/Max-Healthcare-Logo.png" },
  { name: "Ivy Hospital", logo: "https://www.ivyhospital.com/Content/images/logo.png" },
  { name: "Cheema Medical Complex", logo: "https://cheemamedicalcomplex.com/wp-content/uploads/2019/12/logo.png" },
  { name: "Fortis Healthcare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fortis_Healthcare_Logo.svg/1200px-Fortis_Healthcare_Logo.svg.png" }
];

export const FAQS = [
  { q: "What are the hospital timings?", a: "We provide round-the-clock emergency services for maternity and pediatrics. Our OPD timings are generally 10:00 AM to 2:00 PM and 5:00 PM to 8:00 PM." },
  { q: "Do you have NICU facilities?", a: "Yes, we have a state-of-the-art Level III NICU (Neonatal Intensive Care Unit) to handle all kinds of neonatal emergencies." },
  { q: "Is cashless facility available?", a: "We are empanelled with major TPA and insurance providers. Please check with our front desk for specific company tie-ups." },
  { q: "How can I book an appointment?", a: "You can book an appointment through our website's 'Book Appointment' button or by calling our helpdesk at 7888741037." }
];

export const CERTIFICATIONS = [
  { title: "NABH Accredited", icon: "https://seeklogo.com/images/N/nabh-logo-C7E4F74F2A-seeklogo.com.png" },
  { title: "IAP Certified", icon: "https://iapindia.org/wp-content/uploads/2020/06/IAP-Logo.png" },
  { title: "Safe Delivery", icon: "https://who.int/images/default-source/infographics/who-logo.png" }
];

export const GALLERY = {
  photos: [
    { id: 1, url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80", title: "Advanced Level III NICU", category: "Neonatology" },
    { id: 2, url: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&q=80", title: "Luxury Delivery Suite", category: "Maternity" },
    { id: 3, url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80", title: "Pediatric Consultation", category: "Pediatrics" },
    { id: 4, url: "https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=1200&q=80", title: "Newborn Wellness Check", category: "Neonatology" },
    { id: 5, url: "https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=80", title: "Fertility & IVF Lab", category: "Fertility" },
    { id: 6, url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80", title: "24/7 Emergency Care", category: "Facility" },
    { id: 7, url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", title: "Compassionate Nursing", category: "Maternity" },
    { id: 8, url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80", title: "Advanced Fetal Monitoring", category: "Maternity" },
    { id: 9, url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80", title: "Safe Vaccination Clinic", category: "Pediatrics" }
  ],
  videos: [
    { id: 1, youtubeId: "5fvxHh11nAs", title: "Maternity & Birth Center Tour", category: "Maternity" },
    { id: 2, youtubeId: "5fvxHh11nAs", title: "Advanced NICU Care Facilities", category: "Neonatology" },
    { id: 3, youtubeId: "5fvxHh11nAs", title: "Pediatric Wellness Center", category: "Pediatrics" }
  ]
};
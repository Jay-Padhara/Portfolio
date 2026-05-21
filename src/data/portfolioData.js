// ============================================================
//  PORTFOLIO DATA — Edit this file to update your content
// ============================================================

export const personalInfo = {
  name: "Jay Padhara",
  title: "Data Science & ML Engineer",
  taglines: [
    "AI/ML Engineer",
    "Data Analyst",
    "Enthusiastic Learner",
    "Cross Platform Mobile App Developer",
  ],
  bio: `Passionate Data Science & ML enthusiast with hands-on experience building
  intelligent applications. I thrive at the intersection of data, algorithms, and
  real-world impact — turning complex datasets into actionable insights and
  production-ready models. Fast learner, eager to contribute and grow.`,
  location: "Stuttgart, Germany",
  email: "jaypadharawork@gmail.com",
  phone: "+49 15511 517486",
  availability: "Open to Working Student & Full-time roles",

  // Profile photo — place your image at src/assets/profile.jpg
  // OR use a direct URL:
  // avatar: "https://avatars.githubusercontent.com/u/98797571?v=4",
  avatar: "../src/assets/Me_Dark.png",

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/jaypadhara/",
    github: "https://github.com/jay-padhara",
    instagram: "https://www.instagram.com/jaypadhara_/",
  },

  // Resume — place your PDF at public/resume.pdf
  resumeUrl: "https://tiiny.host/manage",
};

// ──────────────────────────────────────────────
//  SKILLS
// ──────────────────────────────────────────────
export const skills = {
  "Programming Languages": [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "TypeScript" },
  ],
  "Data & Machine Learning": [
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "scikit-learn" },
    { name: "Matplotlib" },
    { name: "Seaborn" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "BeautifulSoup" },
  ],
  "Data Concepts": [
    { name: "EDA" },
    { name: "Data Cleaning" },
    { name: "Feature Engineering" },
    { name: "Model Evaluation" },
    { name: "Statistical Analysis" },
    { name: "Data Visualization" },
  ],
  "Backend & APIs": [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "REST APIs" },
    { name: "Firebase" },
    { name: "MongoDB" },
    { name: "SQL" },
    { name: "TanStack Query" },
    { name: "WebSocket" },
    { name: "Zustand" },
    { name: "WatermelonDB" },
  ],
  "DevOps & Tools": [
    { name: "Git" },
    { name: "GitHub" },
    { name: "CI/CD (Expo EAS)" },
  ],
  "Mobile & Frontend": [
    { name: "React Native" },
    { name: "React.js" },
    { name: "Expo" },
    { name: "Redux" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Android Studio" },
    { name: "XCode (iOS)" },
    { name: "Native Modules" },
    { name: "Context API" },
    { name: "Testing Library" },
  ],
};

// ──────────────────────────────────────────────
//  EXPERIENCE
// ──────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "React Native Mobile App Developer (Intern)",
    company: "Implies Solutions",
    period: "Dec 2023 – March 2024",
    location: "Surat, India",
    type: "Internship",
    description: [
      "Researched AI/ML integrations, connecting mobile experiences with intelligent backend systems.",
      "Translated complex product requirements into scalable API solutions within Agile delivery cycles.",
      "Delivered 2 + production releases, strengthening app stability through testing and rapid issue resolution",
    ],
  },
  {
    id: 2,
    role: "React Native Developer",
    company: "Vasundhara Infotech",
    period: "April 2024 – Feb 2026",
    location: "Surat, India",
    type: "Full-time",
    description: [
      "Owned full product delivery with Expo EAS & CI/CD automation, accelerating reliable production releases.",
      "Optimized scalable mobile architecture, cutting app load time 25 % reduction in application load times production applications.",
      "Built high - performance Python & REST integrations for concurrency, resilience, and maintainable systems.",
    ],
  },
];

// ──────────────────────────────────────────────
//  PROJECTS
// ──────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Champion Spirit",
    description:
      "Champion Spirit is a motivational and performance-driven platform designed to inspire individuals to push beyond their limits and embrace a winning mindset. The project focuses on creating a powerful digital experience that combines modern design, engaging interactions, and meaningful content to encourage confidence, and personal growth.",
    tech: [],
    github: null,
    live: "https://championspirit.com/en/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.championspirit.app&hl=en_IN",
    category: "Mobile",
    color: "#00f5ff",
    bullets: [
      "Integrated REST APIs for real-time session scheduling & trainer availability",
      "Improved UI/UX with intuitive navigation and user-centric booking features",
      "Optimized performance with efficient API handling and reusable component architecture",
    ],
  },
  {
    id: 2,
    title: "YourPetDiary",
    description:
      "YouPetDiary is an intuitive and thoughtfully designed platform that helps pet owners manage and preserve every important aspect of their pets’ lives. From tracking daily routines and health records to storing memorable moments and care information, the platform provides a seamless and organized experience for users.",
    tech: [],
    github: null,
    live: null,
    playstore:
      "https://play.google.com/store/apps/details?id=com.YourPetDiary.app&hl=en-US",
    category: "Mobile",
    color: "#b400ff",
    bullets: [
      "Built wellness logging for vaccination timelines, metrics, and real-time pet tracking",
      "Integrated marketplace with order tracking and inventory management",
      "Social features for sharing pet profiles and connecting with fellow owners",
    ],
  },
  {
    id: 3,
    title: "RoofPair",
    description:
      "RoofPair is a modern service-based platform developed to simplify the process of connecting customers with trusted roofing professionals. The project aims to provide a reliable and efficient solution for roofing consultations, repairs, and maintenance through a streamlined and user-friendly digital experience.",
    tech: [],
    github: null,
    live: null,
    playstore:
      "https://play.google.com/store/apps/details?id=com.roofpair&hl=en_IN",
    category: "Mobile",
    color: "#ff6b35",
    bullets: [
      "Roof image analysis generating product profiles and material recommendations",
      "Digital catalog with filter & compare by brand, color, and size",
      "Side-by-side comparison screens with technical documentation for professionals",
    ],
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Dynamic weather app built with React Native. Fetches live GPS location and displays real-time weather data — temperature, humidity, forecasts — with a sleek UI.",
    tech: [],
    github: "https://github.com/Jay-Padhara/Weather",
    live: null,
    playstore: null,
    category: "Mobile",
    color: "#00ff88",
    bullets: [],
  },
  {
    id: 5,
    title: "OrderSeller — B2B Marketplace",
    description:
      "Sophisticated B2B marketplace app for seamless buyer-seller interaction. Users create company profiles, categorize products, and manage orders with a fu",
    tech: [],
    github: "https://github.com/Jay-Padhara/Orderseller",
    live: null,
    playstore: null,
    category: "Mobile",
    color: "#ffcc00",
    bullets: [],
  },
  {
    id: 6,
    title: "UserAuth Backend",
    description:
      "RESTful backend service implementing secure user authentication with CRUD operations, JWT tokens, and middleware-based authorization.",
    tech: [],
    github: "https://github.com/Jay-Padhara/UserAuth_Backend",
    live: null,
    playstore: null,
    category: "Backend",
    color: "#ff4d6d",
    bullets: [],
  },
  {
    id: 7,
    title: "WallPap — Wallpaper App",
    description:
      "High-quality wallpaper platform for Android with diverse categories, smooth navigation, and one-tap set for home/lock screens.",
    tech: [],
    github: "https://github.com/Jay-Padhara/Wallpap",
    live: null,
    category: "Mobile",
    featured: false,
    color: "#ff6b35",
  },
  {
    id: 8,
    title: "TaskWave DailySync",
    description:
      "Full-featured task management app with daily sync capabilities. Organize tasks, set priorities, track progress with beautiful TypeScript-powered UI.",
    tech: [],
    github: "https://github.com/Jay-Padhara/TaskWave-DailySync",
    live: null,
    playstore:
      "https://play.google.com/store/apps/details?id=com.taskwave.dailysync&hl=en",
    category: "Mobile",
    featured: false,
    color: "#ffcc00",
  },
  {
    id: 9,
    title: "NewsApp",
    description:
      "Real-time news aggregator app built in TypeScript. Fetches categorized news from multiple APIs with clean reading experience.",
    tech: [],
    github: "https://github.com/Jay-Padhara/NewsApp",
    live: null,
    category: "Mobile",
    featured: false,
    color: "#ff4d6d",
  },
];

// ──────────────────────────────────────────────
//  EDUCATION
// ──────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "Machine Learning & Data Analysis",
    school: "Hoschule Aalen",
    period: "2026 – 2027",
    location: "Stuttgart, Germany",
    grade: "2.05 GPA",
    highlights: [
      "Python",
      "Data Mining",
      "Deep Learning",
      "Data Analytics",
      "Model Evaluation",
      "Data Engineering",
      "Machine Learning",
      "Feature Engineering",
      "Statistical Modelling",
      "Artificial Intelligence",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    id: 1,
    degree: "Bachelor of Computer Applications",
    school: "The Maharaja Sayajirao University of Baroda",
    period: "2021 – 2024",
    location: "Vadodara, India",
    grade: "7.9 CGPA",
    highlights: [
      "C",
      "C++",
      "Python",
      "Computer Networks",
      "Operating Systems",
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (SQL)",
      "Web Development (HTML, CSS, JavaScript)",
    ],
  },
];

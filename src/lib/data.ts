// All site content lives here. Edit this file to update the portfolio.
//
// Every fact below comes from Naman's resume. Links that are empty strings
// ("") are not known yet; the UI hides any button whose link is empty, so
// filling one in here is all it takes to make it appear.

export const SITE = {
  name: "Naman Goel",
  fullName: "Naman Goel",
  role: "CSE undergrad · Builder · Competitive programmer",
  bio: "I'm a Versatile Learner who enjoys exploring new ideas.\n Currently pursuing Computer Science Engineering at VIPS , Delhi.\n I build full-stack and AI products, compete at hackathons, and help run tech communities.",
  location: "Delhi, India",
  email: "namangoelvips@gmail.com",
  canonical: "",
  // Put a square photo in /public (for example /public/profile.jpg) and set
  // this to "/profile.jpg". Until then the About page shows an "NG" monogram.
  photo: "",
  socials: {
    github: "",
    linkedin: "",
  },
};

/** Countables only, each one traceable to the resume. */
export const STATS = [
  { value: 5, suffix: "", label: "Hackathon prizes" },
  { value: 2000, suffix: "+", label: "Hackathon registrations led" },
  { value: 5000, suffix: "+", label: "Community members moderated" },
  { value: 6, suffix: "", label: "Projects built" },
];

export const EDUCATION = {
  school: "Vivekananda Institute of Professional Studies",
  short: "VIPS",
  degree: "B.Tech in Computer Science and Engineering",
  location: "Delhi",
  years: "2025 - 2029",
  grade: "CGPA 9.045 (Year 1)",
};

export const EXPERIENCE: {
  role: string;
  org: string;
  date: string;
  current: boolean;
  points: string[];
}[] = [
  {
    role: "Founder's Office",
    org: "BunkToBrains",
    date: "Mar 2026 - Present",
    current: true,
    points: [
      "Promoted twice in six months: Startup Marketing & Operations Intern, then Website Administration, then Founder's Office.",
      "Oversee end-to-end operations and website development for a student-led EdTech platform; taught Electrical Science and Engineering Mechanics with over 13k youtube views.",
      "Led the BunkToBuild hackathon (event flow, rules, judging), driving 2,000+ registrations via university partnerships.",
    ],
  },
  {
    role: "Campus Crew Lead",
    org: "HackerRank (VIPS, New Delhi)",
    date: "Nov 2026 - Present",
    current: true,
    points: [
      "Selected to represent VIPS in HackerRank's Campus Crew, a selective student ambassador program (one per college).",
      "Lead coding contests and workshops to grow the campus developer community and connect peers to career opportunities.",
    ],
  },
  {
    role: "Community Moderator",
    org: "CodeCap",
    date: "Jan 2026 - Present",
    current: true,
    points: [
      "Moderate a 5,000+ member tech community, managing 1,000+ core members; mentor on coding, DSA and resume/LinkedIn.",
      "Co-organized Maadhyam, a hybrid tech workshop (2,000+ registrations); led sessions on Agentic AI, Web3, CI/CD and Docker.",
    ],
  },
  {
    role: "Technical Team Member",
    org: "Aarvak (Tech Society), VIPS, New Delhi",
    date: "Mar 2026 - Present",
    current: true,
    points: [
      "Run TechSprints and mentor peers and juniors on competitive programming; build projects and experiment with AI models.",
    ],
  },
  {
    role: "Campus Ambassador",
    org: "E-Cell, IIT Bombay",
    date: "Jul 2026 - Nov 2026",
    current: false,
    points: [
      "Promoted E-Cell IIT Bombay's flagship events and entrepreneurship initiatives across campus and community.",
    ],
  },
];

export const PROJECTS: {
  slug: string;
  title: string;
  year: string;
  desc: string;
  points: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}[] = [
  {
    slug: "vyapaarsathi",
    title: "VyapaarSathi",
    year: "2026",
    desc: "Compliance workspace for Indian SMBs.",
    points: [
      "AI parses GST, income tax and EPFO notices, explains them and tracks deadlines.",
      "Shared owner-CA tracker for documents and reply status; Hindi/English GST learning via videos and Shorts.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS"],
    githubUrl: "",
    featured: true,
  },
  {
    slug: "votermitra",
    title: "VoterMitra",
    year: "2026",
    desc: "Voter-list anomaly detection with a Telegram lookup bot.",
    points: [
      "Compares voter list versions and flags anomalous changes for election officers to investigate.",
      "Text and voice-based voter lookup via a Telegram bot for easy citizen access.",
    ],
    stack: ["TypeScript", "Python", "JavaScript", "Telegram Bot API", "GNANI AI"],
    githubUrl: "",
    featured: true,
  },
  {
    slug: "apex",
    title: "Apex",
    year: "2026",
    desc: "AI crowd management platform.",
    points: ["Real-time movement prediction, risk detection and safety monitoring."],
    stack: ["Next.js", "Supabase", "Python", "FastAPI"],
    githubUrl: "",
    featured: true,
  },
  {
    slug: "finmentor",
    title: "FinMentor",
    year: "2026",
    desc: "AI financial-literacy platform.",
    points: ["Analyzes spending habits for personalized budgeting insights."],
    stack: ["React", "TypeScript", "Prompt Engineering"],
    githubUrl: "",
  },
  {
    slug: "pribhumnest",
    title: "Pribhumnest",
    year: "2026",
    desc: "A PG listing website.",
    points: ["PG listings with separate user and admin panels."],
    stack: ["React", "TypeScript"],
    githubUrl: "",
  },
  {
    slug: "rimo",
    title: "RIMO",
    year: "2025",
    desc: "Rental management system for hardware businesses.",
    points: ["Manages rentals for hardware businesses."],
    stack: ["React", "TypeScript", "Next.js"],
    githubUrl: "",
  },
];

export const ACHIEVEMENTS: {
  prize: string;
  event: string;
  place: string;
  date: string;
  category: "Hackathons" | "Competitive Programming";
  featured: boolean;
  link?: string;
}[] = [
  { prize: "1st Prize", event: "IDEAS 4.0", place: "K.R. Mangalam University, Gurugram", date: "Oct 2026", category: "Hackathons", featured: true, link: "" },
  { prize: "Internal Round Qualifier", event: "Smart India Hackathon 2026", place: "VIPS, Delhi", date: "Sep 2026", category: "Hackathons", featured: false, link: "" },
  { prize: "3rd Prize", event: "Hackwave 2.0", place: "GTBIT, Delhi", date: "May 2026", category: "Hackathons", featured: false, link: "" },
  { prize: "1st Prize", event: "Code Royale", place: "VIPS, Delhi", date: "Apr 2026", category: "Hackathons", featured: true, link: "" },
  { prize: "2nd Prize", event: "Code1", place: "ADGIPS, Delhi", date: "Apr 2026", category: "Hackathons", featured: true, link: "" },
  { prize: "3rd Prize", event: "Code Auction (CP Competition)", place: "Delhi University, Delhi", date: "Apr 2026", category: "Competitive Programming", featured: false, link: "" },
  { prize: "Track Prize", event: "GenCodex", place: "JIMS, Noida", date: "Mar 2026", category: "Hackathons", featured: false, link: "" },
];

export const CP_PROFILES = [
  { platform: "HackerRank", stat: "5 Star", url: "" },
  { platform: "CodeChef", stat: "1335", url: "" },
  { platform: "Codeforces", stat: "1006", url: "" },
  { platform: "LeetCode", stat: "70+ solved", url: "" },
];

export const SKILLS: Record<string, string[]> = {
  Languages: ["C++", "C", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  "AI & Prompting": ["Generative AI", "Advanced Prompt Engineering", "Agentic Workflows", "LLM Integrations"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "DBMS"],
  Tools: ["Git", "GitHub", "Supabase", "Resend", "Vercel", "Docker"],
};

/** Shown on /now. Built from the roles marked "Present" on the resume. */
export const NOW = {
  updated: "2026-11-14",
  items: [
    { title: "Studying", text: "B.Tech in Computer Science and Engineering at VIPS, Delhi (2025 - 2029)." },
    { title: "Working", text: "In the Founder's Office at BunkToBrains, running operations and website development for a student-led EdTech platform." },
    { title: "Leading", text: "HackerRank Campus Crew Lead for VIPS, running coding contests and workshops on campus." },
    { title: "Community", text: "Moderating the CodeCap tech community and running TechSprints with Aarvak, the VIPS tech society." },
  ],
};

/** About-page timeline, in date order. */
export const TIMELINE = [
  { year: "2025", title: "Started B.Tech at VIPS", text: "Computer Science and Engineering, with a 9.045 CGPA in Year 1." },
  { year: "Jan 2026", title: "Joined CodeCap", text: "Became a Community Moderator for a 5,000+ member tech community." },
  { year: "Mar 2026", title: "BunkToBrains and Aarvak", text: "Joined BunkToBrains and the Aarvak tech society; won a Track Prize at GenCodex." },
  { year: "Apr 2026", title: "A month of podiums", text: "1st at Code Royale, 2nd at Code1, and 3rd at Code Auction." },
  { year: "Jul 2026", title: "E-Cell, IIT Bombay", text: "Campus Ambassador through November 2026." },
  { year: "Oct 2026", title: "1st at IDEAS 4.0", text: "Won the hackathon at K.R. Mangalam University." },
  { year: "Nov 2026", title: "HackerRank Campus Crew Lead", text: "Selected to represent VIPS, one per college." },
];

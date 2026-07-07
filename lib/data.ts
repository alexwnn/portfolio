export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  metric?: { value: string; label: string };
  appStoreUrl?: string;
  liveUrl?: string;
  codeUrl?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Achievement = {
  title: string;
  org: string;
  detail: string;
};

export type BioLine = { label: string; value?: string };
export type BioSection = {
  header?: string;
  lines?: BioLine[];
  rows?: BioLine[];
};

export const bioPrompt = "alexwnn@github:~$";

export const bioSections: BioSection[] = [
  {
    lines: [
      { label: "B.S. COMPUTER SCIENCE", value: "@ PLU" },
      { label: "MINOR:", value: "Data Science" },
    ],
  },
  {
    header: "CURRENTLY RESEARCHING",
    rows: [
      { label: "Domain:", value: "Autonomous Human-Robot Interaction (HRI)" },
      {
        label: "Focus:",
        value: "Engineering Multi-Modal HRI Protocols (ROS2 / TurtleBot 4)",
      },
    ],
  },
  {
    header: "SKILLS",
    rows: [
      { label: "Languages:", value: "Java, Python, TypeScript, SQL, JavaScript" },
      {
        label: "Frameworks:",
        value:
          "React, React Native, Next.js, Express.js, Node.js, ROS2, Gradle, Tailwind CSS, Expo, AWS",
      },
      {
        label: "Tools:",
        value: "Claude Code, Cursor, Docker, VS Code, Git, GitHub, JUnit",
      },
    ],
  },
  {
    header: "WHEN I'M NOT LOCKED IN",
    rows: [{ label: "", value: "Movies, Video Games, Pickleball, Gym" }],
  },
];

export const heroStats: { k: string; v: string }[] = [
  { k: "DEGREE", v: "B.S. CS" },
  { k: "MINOR", v: "DATA SCI" },
  { k: "GPA", v: "3.90" },
  { k: "GRAD", v: "MAY '27" },
];

export const projects: Project[] = [
  {
    slug: "gear-fitness",
    name: "GEAR FITNESS",
    tagline: "Full-Stack Social Fitness Platform",
    role: "Full-Stack Software Engineer",
    description:
      "A production fitness app live on the App Store with a 150+ user community, built around social workout tracking.",
    highlights: [
      "Shipped REST API feature sets across a Spring Boot backend — account privacy controls, user blocking, and a calorie tracker seeded from USDA FoodData Central nutrition data.",
      "Traced and fixed critical React Navigation v8 state bugs to keep scroll position stable across deeply nested native stacks.",
      "Contributed end to end — from the PostgreSQL data model to the React Native (Expo) client backed by AWS S3 and Elastic Beanstalk.",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
    ],
    metric: { value: "150+", label: "USERS" },
    appStoreUrl:
      "https://apps.apple.com/us/app/gear-workout-tracker-gym-log/id6756771550",
    liveUrl: "https://gearfitness.app",
    codeUrl: "https://github.com/gear-fitness/gear-fitness-app",
  },
  {
    slug: "nuzl",
    name: "NUZL",
    tagline: "Real-Time Collaborative Tracker",
    role: "Lead Developer",
    description:
      "A zero-auth, multiplayer dashboard for co-op Pokemon Nuzlocke runs — a single shared source of truth that several players read and edit at once.",
    highlights: [
      "Engineered a live synchronization engine on Supabase Realtime holding sub-100ms latency across concurrent editors.",
      "Scaled WebSocket fan-out for high-volume concurrent sessions; the launch drove 31,000+ organic impressions.",
      "Built drag-and-drop rosters with @dnd-kit and a dual-type defensive weakness matrix for instant matchup reads.",
    ],
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "@dnd-kit"],
    metric: { value: "31K+", label: "IMPRESSIONS" },
    liveUrl: "https://nuzl.vercel.app",
    codeUrl: "https://github.com/alexwnn/Nuzl",
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Lead Robotics Researcher — Human-Robot Interaction",
    org: "Pacific Lutheran University",
    location: "Tacoma, WA",
    period: "Jun 2026 — Present",
    highlights: [
      "Investigating human-centered autonomous navigation for tight campus corridors on a TurtleBot 4 Pro (LiDAR, OAK-D depth camera, Raspberry Pi 4B) running ROS2.",
      "Wrote Python/C++ control logic that fires multi-modal social cues — auditory sweeps and addressable LED arrays — from live pedestrian-proximity thresholds.",
      "Designed a within-subjects user study measuring how velocity-braking and spatial yielding shape human comfort and path legibility in narrow hallways.",
    ],
    tags: ["ROS2", "Python", "C++", "Robotics"],
  },
  {
    role: "Teaching Assistant — Robotics, Discrete Structures & Math",
    org: "Pacific Lutheran University",
    location: "Tacoma, WA",
    period: "Jul 2024 — May 2026",
    highlights: [
      "Mentored students through CS logic, graph theory, and algebra; 1:1 tutoring lifted measured student performance by ~15%.",
      "Applied code-review habits to student proofs, tracing logic errors line by line during office hours.",
      "Supported an intensive summer bridge program for underserved students that reached a 100% course-completion rate.",
    ],
    tags: ["Teaching", "Discrete Math", "Robotics", "Trigonometry"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "LANGUAGES",
    items: [
      "TypeScript",
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "R",
      "C / C++ / C#",
      "HTML / CSS",
    ],
  },
  {
    label: "FRAMEWORKS",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Express.js",
      "Node.js",
      "Spring Boot",
      "ROS2",
      "Tailwind CSS",
      "Expo",
    ],
  },
  {
    label: "PLATFORMS",
    items: ["AWS (S3 / EB)", "Supabase", "PostgreSQL", "Docker", "Gradle"],
  },
  {
    label: "TOOLS",
    items: ["Git", "GitHub", "Claude Code", "Cursor", "VS Code", "JUnit"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "ICPC Regionals",
    org: "University of Washington",
    detail: "Pacific Northwest contestant — 2024 & 2025",
  },
  {
    title: "PLU Alumni Programming Competition",
    org: "Pacific Lutheran University",
    detail: "1st Place",
  },
  {
    title: "Puget Sound Programming Competition",
    org: "Regional Collegiate",
    detail: "Top 10 finish",
  },
  {
    title: "DataFest",
    org: "Pacific Lutheran University",
    detail: "Judges' Pick",
  },
];

export const coursework = [
  "Data Structures",
  "Algorithms",
  "Databases & Web Programming",
  "Robotics",
  "Computer Organization",
  "Networks",
];

export const social = {
  github: "https://github.com/alexwnn",
  linkedin: "https://www.linkedin.com/in/alexhngu",
  email: "mailto:alexhngu@gmail.com",
  x: "https://x.com/alexwnns",
  name: "ALEX NGUYEN",
  title: "SOFTWARE ENGINEER",
};

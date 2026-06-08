export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  codeUrl?: string;
};

export const bio =
  "COMPUTING SCIENCES @ PLU // SPECIALIZATION: Full-Stack Web Architecture & Systems Logic // CORE: Next.js, TypeScript, Tailwind, Supabase (PostgreSQL)";

export const experience: ExperienceEntry[] = [
  {
    role: "Summer Robotics Research Fellow",
    org: "Pacific Lutheran University",
    period: "Incoming June 2026",
  },
  {
    role: "Discrete Structures Teaching Assistant",
    org: "PLU Computer Science Dept",
    period: "2026",
  },
  {
    role: "STEM Mentor & Grader",
    org: "Lute Leap Bridge Program",
    period: "2025",
  },
];

export const projects: Project[] = [
  {
    slug: "nuzl",
    name: "NUZL",
    tagline: "Real-Time Pokémon Sync Tracker",
    description:
      "Multi-tenant zero-auth dashboard for Soul Link challenges. Built with Next.js 14 and Supabase WebSockets for zero-latency concurrent state mutation. Features a mathematical matrix for real-time dual-type defensive weakness calculations.",
  },
  {
    slug: "trainer-playground",
    name: "Trainer Playground",
    tagline: "Trend Engine & Mini-Game Hub",
    description:
      "An industrial-styled game suite capturing viral web-gaming trends. Features a complex 2-player turn-based Snake Draft state machine and highly optimized PokeAPI data ingestion to bypass edge-network bottlenecks.",
  },
];

export const social = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/alexhngu",
  name: "ALEX NGUYEN",
  title: "SOFTWARE ENGINEER",
};

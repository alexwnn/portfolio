import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Distinctions from "@/components/Distinctions";
import SmokeBackdrop from "@/components/SmokeBackdrop";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-ink-800">
      <SmokeBackdrop />
      <NavBar />
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <Experience />
        <Skills />
        <Distinctions />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-[0.6rem] uppercase tracking-[0.2em] text-ink-400 sm:flex-row sm:items-center sm:px-10 sm:py-6 sm:text-[0.65rem] sm:tracking-[0.3em]">
          <span>{"// END_OF_TRANSMISSION"}</span>
          <span>© {new Date().getFullYear()} ALEX NGUYEN</span>
        </div>
      </footer>
    </div>
  );
}

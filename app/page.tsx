import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Distinctions from "@/components/Distinctions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f3] text-slate-800">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <Experience />
        <Skills />
        <Distinctions />
      </main>
      <footer className="border-t border-[#dbe5ee]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-[0.65rem] uppercase tracking-[0.3em] text-slate-400 sm:flex-row sm:items-center sm:px-10">
          <span>{"// END_OF_TRANSMISSION"}</span>
          <span>© {new Date().getFullYear()} ALEX NGUYEN</span>
        </div>
      </footer>
    </div>
  );
}

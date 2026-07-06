import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALEX NGUYEN // SOFTWARE ENGINEER",
  description:
    "Portfolio of Alex Nguyen — B.S. Computer Science at PLU (GPA 3.9). Full-stack web platforms, mobile apps, real-time systems, and human-robot interaction research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full bg-background text-ink-800"
      suppressHydrationWarning
    >
      <head>
        {/* set theme class before paint to avoid a light-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-ink-800 antialiased selection:bg-accent-soft selection:text-ink-900">
        {children}
      </body>
    </html>
  );
}

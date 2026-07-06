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
    <html lang="en" className="h-full bg-[#faf8f3] text-slate-800">
      <body className="min-h-full flex flex-col bg-[#faf8f3] text-slate-800 antialiased selection:bg-[#a8d0e6] selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}

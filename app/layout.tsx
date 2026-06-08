import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALEX NGUYEN // SOFTWARE ENGINEER",
  description:
    "Engineering portfolio of Alex Nguyen — Computing Sciences at PLU. Full-stack web architecture, systems logic, and real-time platforms.",
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

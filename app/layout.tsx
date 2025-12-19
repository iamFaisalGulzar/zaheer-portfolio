import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { personalInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.summary,
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    type: "website",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


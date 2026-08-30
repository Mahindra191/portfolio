import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ShaderBackground } from "@/components/ui/shader-background";
import { SiteLoader } from "@/components/site-loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahindra Pagadala — AI & Full-Stack Developer",
  description:
    "I build AI-powered software that solves real problems. RAG, AI agents, Python, Java, React and scalable backend systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <ShaderBackground />
        <div aria-hidden="true" className="fixed inset-0 -z-[5] bg-bg/70" />
        <SiteLoader>{children}</SiteLoader>
      </body>
    </html>
  );
}

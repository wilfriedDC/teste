import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Wilfried DC — Independent Full-Stack Developer",
  description:
    "Wilfried DC, développeur full-stack indépendant basé à Antananarivo. Applications web, APIs, UI/UX et déploiement, de la base de données au pixel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body>{children}</body>
    </html>
  );
}

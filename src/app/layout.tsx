import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimationProvider } from "@/components/AnimationProvider";
import { SITE_CONFIG } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Software, AI & Cloud Engineering`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Brelox Technologies",
    "Website Development",
    "Web Applications",
    "Mobile Applications",
    "Custom Software",
    "AI Solutions",
    "Cloud Infrastructure",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1A1B1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-storm-100 text-matte-900">
        <AnimationProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}

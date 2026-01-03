import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/custom-cursor";

// Harmond - Display font (fallback: Playfair Display)
const harmond = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-harmond",
  display: "swap",
  preload: true,
});

// Nohemi - Body font (fallback: Inter)
const nohemi = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "JayCode | FullStack Developer",
  description:
    "A creative developer specializing in interactive digital experiences, high-end UI, and 3D web development.",
  keywords: [
    "Juwon",
    "Juwon Portfolio",
    "JayCode Portfolio",
    "JayCode",
    "FullStack Developer",
    "Creative Developer",
    "Web Developer",
    "Three.js",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "JayCode" }],
  openGraph: {
    title: "JayCode | FullStack Developer",
    description:
      "A creative developer specializing in interactive digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      className={`${harmond.variable} ${nohemi.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
        <LenisProvider>
          {/* Noise overlay - Film grain effect */}
          <NoiseOverlay />

          {/* Custom cursor - Desktop only */}
          <CustomCursor />
          {/* Main content */}
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}

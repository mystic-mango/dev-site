import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tom Blake | Portfolio",
  description:
    "I'm a Web3 and DeFi UI specialist with a background in Aerospace Engineering. Expert in building beautiful, user-friendly interfaces for decentralized applications. Explore my portfolio, projects, and skills.",
  keywords: [
    "Tom Blake",
    "Web3 Developer",
    "DeFi UI",
    "Decentralized Finance",
    "Crypto UI Designer",
    "Next.js",
    "React",
    "Aerospace Engineer",
    "Frontend Engineer",
    "Blockchain Developer",
    "Crypto Portfolio",
    "DeFi Portfolio",
    "TailwindCSS",
    "ethers.js",
    "wagmi",
    "UI/UX",
    "Dapp Designer",
    "Web3 Portfolio",
  ],
  openGraph: {
    title: "Tom Blake | Web3 & DeFi UI Specialist",
    description:
      "Web3 and DeFi UI specialist with a background in Aerospace Engineering. Explore my portfolio, projects, and skills.",
    url: "https://tomblake.dev/",
    siteName: "Tom Blake Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tom Blake Web3 Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Blake | Web3 & DeFi UI Specialist",
    description:
      "Web3 and DeFi UI specialist with a background in Aerospace Engineering. Explore my portfolio, projects, and skills.",
    creator: "@dev_pom",
  },
  icons: {
    icon: "/waving-hand.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

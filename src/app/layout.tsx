import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import "../styles/globals.scss";
import "../styles/mainPage/mainPage.scss";
import React from "react";

export const metadata: Metadata = {
  title: "Forte Mirare | Composer & Music Producer for Games",
  description: "Czech composer and coder specializing in ambient orchestral music for games and artistic projects. Custom soundtracks with mythic gravitas and emotional depth.",
  keywords: "game composer, music producer, orchestral music, ambient soundtrack, Czech composer, video game music, custom composition",
  authors: [{ name: "Forte Mirare" }],
  creator: "Forte Mirare",
  openGraph: {
    title: "Forte Mirare | Composer & Music Producer",
    description: "Czech composer and coder specializing in ambient orchestral music for games and artistic projects. Custom soundtracks with mythic gravitas and emotional depth.",
    url: "https://fortemirare.com",
    siteName: "Forte Mirare",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Forte Mirare - Composer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Forte Mirare | Composer & Music Producer",
    description: "Custom orchestral and ambient music for games and artistic projects",
    images: ["/images/og-image.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
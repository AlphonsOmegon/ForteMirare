import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import "../styles/globals.scss";
import "../styles/mainPage/mainPage.scss";
import React from "react";

export const metadata: Metadata = {
  title: "ForteMirare",
  description: "SEO optimized web application",
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
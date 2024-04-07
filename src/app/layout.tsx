import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "stack overflow v2",
  description: "description of the stack overflow v2",
  icons: { icon: "/assets/images/site-logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-test-gradients hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body
          className={` ${inter.variable} ${spaceGrotesk.variable} flex-center`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

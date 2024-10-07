import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CraftlyWeb – Innovating Design, Empowering Brands",
  description: "Creative solutions for digital success.",
  keywords: "CraftlyWeb, web design, branding, digital solutions, app development, UI design",
  applicationName: "CraftlyWeb",
  author: "Soham Manrjekar, Mihir Narvekar",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  language: "en-US",
  themeColor: "#000000",
  colorScheme: "light dark",
  
  // Open Graph for social sharing
  openGraph: {
    title: "CraftlyWeb – Innovating Design, Empowering Brands",
    description: "Creative solutions for digital success.",
    url: "https://www.craftlyweb.com",
    type: "website",
    locale: "en_US",
    siteName: "CraftlyWeb",
    images: [
      {
        url: "https://www.craftlyweb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CraftlyWeb Portfolio",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@craftlyweb",
    creator: "@sohammanrjekar",
    title: "CraftlyWeb – Innovating Design, Empowering Brands",
    description: "Creative solutions for digital success.",
    images: [
      {
        url: "https://www.craftlyweb.com/twitter-image.jpg",
        alt: "CraftlyWeb Portfolio",
      },
    ],
  },
  
  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    shortcutIcon: "/favicon-32x32.png",
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Z2mmnv2SNW6MypIwJEXj3lyJtpi-wHM4GDRw79EmZGE" />
      

        <link rel="icon" href="/CraftlyWeblogo.png" sizes="any" />
         <link rel="manifest" href="/manifest.json" />
<link rel="canonical" href="https://www.craftlyweb.com/" />

      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KRS52T6B"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Creative solutions for digital success." />
        <meta name="keywords" content="CraftlyWeb, web design, branding, digital solutions, app development, UI design" />
        <meta name="application-name" content="CraftlyWeb" />
        <meta name="author" content="Soham Manrjekar, Mihir Narvekar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta http-equiv="Content-Language" content="en-US" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <meta name="google-site-verification" content="Z2mmnv2SNW6MypIwJEXj3lyJtpi-wHM4GDRw79EmZGE" />
        <link rel="icon" href="/CraftlyWeblogo.png" sizes="any" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="canonical" href="https://www.craftlyweb.com/" />
        <title>CraftlyWeb</title>
      </head>
      <body className={inter.className}>
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

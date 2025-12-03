import type { Metadata } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heart of the Forest Dramatic Society",
  description: "Heart of the Forest Dramatic Society",
};

/**
 * Defines the application's root HTML layout and wraps page content.
 *
 * @param children - The content to render inside the document body.
 * @returns The root JSX element containing html (lang="en") and a body that applies the configured font CSS variables and renders `children`.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}
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

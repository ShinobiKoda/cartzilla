import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartzilla - E-commerce Platform",
  description: "A modern e-commerce platform with light and dark theme support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
 
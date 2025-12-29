import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { CalendlyProvider } from "@/components/CalendlyProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Course Companion - AI for Teaching That Lives in Your LMS",
  description: "Your course companion for professors, departments, and publishers. Zero-log AI tutoring that protects your IP and promotes academic integrity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <CalendlyProvider>
          <Navigation />
          <main>{children}</main>
        </CalendlyProvider>
      </body>
    </html>
  );
}


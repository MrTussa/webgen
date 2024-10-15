import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { domAnimation, LazyMotion } from "framer-motion";

export const metadata: Metadata = {
  title: "WebGenuz",
  description: "Создаем бизнес решения быстро и качественно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased overflow-x-hidden`}>
        <LazyMotion features={domAnimation}>
          {children}
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}

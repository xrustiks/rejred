import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProvider } from "@/contexts/ScrollContext";

// Use Poppins as the primary sans-serif font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Rejected Pre-Med Podcast - Your source for inspiration and growth",
  description: "Welcome to The Rejected Pre-Med Podcast - Your source for inspiring conversations, video podcasts, and exclusive content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ScrollProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}

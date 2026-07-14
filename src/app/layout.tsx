import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageProvider } from "@/context/PageContext";
import { fetchMenuFront } from "@/lib/api";

// Matches the source site: Inter Tight for headings/buttons, Inter for body copy.
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aerievo - Top Software, Mobile and Web App Development Company",
  description:
    "Aerievo designs and builds custom software, web, and mobile applications for ambitious companies across manufacturing, healthcare, finance, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let menu: Menu[] = [];
  try {
    const res = await fetchMenuFront();
    if (res && res.success && Array.isArray(res.data)) {
      menu = res.data;
    }
  } catch (error) {
    console.error("Failed to fetch menu in RootLayout:", error);
  }

  return (
    <html lang="en" className={`h-full antialiased ${interTight.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <PageProvider>
          <div className="flex flex-col min-h-screen">
            <Header menu={menu} />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </PageProvider>
      </body>
    </html>
  );
}

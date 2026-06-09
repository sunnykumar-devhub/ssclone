import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import ReduxProvider from "@/store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sujansingh.in"),
  title: {
    default: "Sujan Singh - SEBI Registered Investment Adviser",
    template: "%s - Sujan Singh",
  },
  description: "Bespoke wealth management, SEBI compliant advisory, and investment planning services by Sujan Singh.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Sujan Singh - SEBI Registered Investment Adviser",
    description: "Bespoke wealth management, SEBI compliant advisory, and investment planning services by Sujan Singh.",
    url: "https://sujansingh.in",
    siteName: "Sujan Singh RIA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujan Singh - SEBI Registered Investment Adviser",
    description: "Bespoke wealth management, SEBI compliant advisory, and investment planning services by Sujan Singh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 font-sans antialiased">
        <ReduxProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Breadcrumbs />
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

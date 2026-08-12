import { Manrope, Geist_Mono } from "next/font/google";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Scroll from './Components/Scroll';
import 'lenis/dist/lenis.css';
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taerg Campus Laundry | Premium Care Solutions",
  description: "Next-generation animated campus laundry solutions and operational services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans bg-white text-slate-900 min-h-full flex flex-col selection:bg-[#0B2545] selection:text-white">
        <Scroll>
          {/* Navigation Header */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer/>
        </Scroll>
      </body>
    </html>
  );
}

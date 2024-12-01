import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Heebo } from "next/font/google";

// Import Inter font
const inter = Inter({
  subsets: ['latin'], // Specify the subset
  weight: ['100','200','300','500','600','400', '500', '700'], // Specify font weights
});

// Import Heebo font
const heebo = Heebo({ subsets: ["latin"] });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "John's PortFolio",
  description: "Converting Figma Design to Reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${heebo.className} bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

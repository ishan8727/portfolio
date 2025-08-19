import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

import { CursorContext, CursorProvider } from "@/context/cursor-context";
import ZoomCursor from "@/components/ZoomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Bebas_Neue = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ishan Chaudhary",
  description: "Welcome to my portfolio!",
  icons:{
    icon:'/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <CursorProvider>
        <ZoomCursor />
        {children}
        </CursorProvider>
      </body>
    </html>
  );
}


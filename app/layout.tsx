import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const imbPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight:['400','700'],
  variable:'--font-imb-plex-serif'
})

export const metadata: Metadata = {
  title: "WiseMoney",
  description: "Modern Banking Platform for Everyone",
  icons:{
    icon:'/icons/logo.svg' // change icon
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${imbPlexSerif.variable}`}>{children}</body>
    </html>
  );
}

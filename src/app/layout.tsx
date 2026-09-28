import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisSmoothScroll from "@/components/scroll";


const EditorialNewRegular = localFont({
  src: [
    {
      path: "./fonts/EditorialNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    //  {
    //   path: './fonts/EditorialNew-Italic.woff2',
    //   weight: '400',
    //   style: 'normal',
    // },
  ],
  variable: "--font-display",
});

const PPMoriRegular = localFont({
  src: [
    {
      path: "./fonts/PPMori-Regular.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

const EditorialNewItalic = localFont({
  src: [
    {

      path: './fonts/EditorialNew-Italic.woff2',
      weight: "200",
      style: "normal"
    },
  ],
  variable:"--font-italic"
})

export const metadata: Metadata = {
  title: "TrueKind",
  description: "TrueKind skincare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LenisSmoothScroll />
      <html lang="en">
        <body
          className={`${EditorialNewRegular.variable} ${PPMoriRegular.variable} ${EditorialNewItalic.variable}`}
        >
          {children}
        </body>
      </html>
    x`</>
  );
}

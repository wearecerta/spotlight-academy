import type { Metadata } from "next";
import { DM_Sans, Shadows_Into_Light } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});


const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows-into-light",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spotlight Academy",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
              <link rel="icon" type="image/png" href="/favicon.svg" />

      </head>
      <body
        className={`
          ${dmSans.variable}
          ${shadowsIntoLight.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}

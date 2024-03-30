import { Jost, Khand } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jost",
});

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-khand",
});

export const metadata = {
  title: "BabyDoge",
  description:
    "Multiplayer on chain action game and minting platform - Baby doge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${khand.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
}

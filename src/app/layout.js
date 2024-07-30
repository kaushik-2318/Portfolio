import { Inter } from "next/font/google";
import "./globals.css";
import { Vonique, Decomart, Varino, Syne, MonaSansExpandedBold, Montserrat, Lora } from "../../utils/customFonts";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaushik Verma",
  description: "Full Stack Developer - Designer",
  generate: "Next.js",
  keywords: ["Kaushik Verma",
    "Full Stack Developer",
    "Designer",
    "Web Developer",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Vonique.variable} ${Decomart.variable} ${Varino.variable} ${Syne.variable} ${MonaSansExpandedBold.variable} ${Montserrat.variable} ${Lora.variable}`}>
        {children}
      </body>
    </html>
  );
}

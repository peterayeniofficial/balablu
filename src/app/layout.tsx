import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balablu: Track and rate Bola Ahmed Tinubu",
  description:
    "An OpenSource Civic Tech tool to Track and Rate Bola Ahmed Tinubu the 16th President of Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

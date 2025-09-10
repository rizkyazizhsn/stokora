import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/layouts/app-header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoKora Dashboard",
  description: "Shopee Store Monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}

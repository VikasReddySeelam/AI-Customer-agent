import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporate Legal Assistant - AI-Powered Business & Compliance Advisor",
  description: "Expert guidance on Indian corporate law, company incorporation, compliance, Income Tax, GST, FEMA, and business consulting for startups and SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

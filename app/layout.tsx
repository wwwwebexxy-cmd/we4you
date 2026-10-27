import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "WE4YOU UAE | Trading, Printing & Digital Solutions",
  description: "Your trusted partner for trading, printing and digital solutions in the UAE.",
  icons: {
    icon: [{ url: "/assets/we4you-favicon.webp", type: "image/webp" }],
    shortcut: "/assets/we4you-favicon.webp",
    apple: "/assets/we4you-favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

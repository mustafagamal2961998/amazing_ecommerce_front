import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

// const noto = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "Amazing",
  description: "Amazing e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" >{children}</body>
    </html>
  );
}

import "./globals.css";
import { Cairo } from 'next/font/google'
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Amazing",
  description: "Amazing e-commerce",
};
 
const cairo = Cairo({
  weight: '400',
  subsets: ['arabic'],
})
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" className={cairo.className} >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}

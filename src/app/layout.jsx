import "./globals.css";
import { Cairo } from 'next/font/google'
import { StatusContextProvider } from '../Utils/Status/statusContext'
import MaintenanceMood from '../components/Maintenance Mood/MaintenanceMood'
import ContactUs from '../components/Contact Us/ContactUs'

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
        <StatusContextProvider>
          <MaintenanceMood children={children} />
        </StatusContextProvider>
        <ContactUs />
      </body>
    </html>
  );
}

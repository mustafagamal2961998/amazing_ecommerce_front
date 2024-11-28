import "./globals.css";
import { Lamar } from '../assets/fonts/Lamar'
import { StatusContextProvider } from '../Utils/Status/statusContext'
import MaintenanceMood from '../components/Maintenance Mood/MaintenanceMood'
import ContactUs from '../components/Contact Us/ContactUs'

export const metadata = {
  title: "شركة خلابة لتصنيع الملابس",
  description: "خلاقين ونمتلك القيادة في مجال الأزياء",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" className={Lamar.className} >
        <StatusContextProvider>
          <MaintenanceMood children={children} />
        </StatusContextProvider>
        <ContactUs />
      </body>
    </html>
  );
}

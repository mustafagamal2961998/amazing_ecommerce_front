import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Logo from '../../components/Logo/logo.svg'
import main from '../../assets/dashboard/main.png'
import orders from '../../assets/dashboard/orders.png'
import products from '../../assets/dashboard/products.png'
import clients from '../../assets/dashboard/clients.png'
import bills from '../../assets/dashboard/bills.png'
import reports from '../../assets/dashboard/reports.png'
import offers from '../../assets/dashboard/offers.png'
import support from '../../assets/dashboard/support.png'
import shipping from '../../assets/dashboard/shipping.png'
import rating from '../../assets/dashboard/rating.png'
import settings from '../../assets/dashboard/settings.png'
import activeMain from '../../assets/dashboard/activeMain.svg'
import activeOrders from '../../assets/dashboard/activeOrders.svg'
import activeProducts from '../../assets/dashboard/activeProducts.svg'
import activeClients from '../../assets/dashboard/activeClients.svg'
import activeBills from '../../assets/dashboard/activeBills.svg'
import activeReports from '../../assets/dashboard/activeReports.svg'
import activeOffers from '../../assets/dashboard/activeOffers.svg'
import activeSupport from '../../assets/dashboard/activeSupport.svg'
import activeShipping from '../../assets/dashboard/activeShipping.svg'
import activeRating from '../../assets/dashboard/activeRating.svg'
import activeSettings from '../../assets/dashboard/activeSettings.svg'
import Link from 'next/link'

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <aside className='w-1/5 min-h-screen -mt-[50px] flex flex-col justify-start items-center gap-20 p-5 bg-gradient-to-br from-[#8AD0C3] to-[#00B6A9]'>
        <Image src={Logo} alt='logo' className='mt-[40px] w-[170px] h-[38px]' />
        <div className='w-full flex flex-col gap-2'>
            <Link href='/dashboard' className={`cursor-pointer p-2 w-full ${pathname === '/dashboard' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname === '/dashboard' ? activeMain : main} alt='main' className='w-5 h-5' />
                <p className={`${pathname === '/dashboard' ? 'text-[#00B6A9]' : 'text-white'}`}>الرئيسية</p>
            </Link>
            <Link href='/dashboard/orders' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/orders') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/orders') ? activeOrders : orders} alt='orders' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/orders') ? 'text-[#00B6A9]' : 'text-white'}`}>الطلبات</p>
                <span className='bg-[#FF0000] text-white text-xs text-center rounded-full w-4 h-4 mr-auto'>12</span>
            </Link>
            <Link href='/dashboard/products' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/products') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/products') ? activeProducts : products} alt='products' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/products') ? 'text-[#00B6A9]' : 'text-white'}`}>المنتجات</p>
            </Link>
            <Link href='/dashboard/clients' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/clients') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/clients') ? activeClients : clients} alt='clients' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/clients') ? 'text-[#00B6A9]' : 'text-white'}`}>العملاء</p>
            </Link>
            <Link href='/dashboard/bills' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/bills') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/bills') ? activeBills : bills} alt='bills' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/bills') ? 'text-[#00B6A9]' : 'text-white'}`}>الفواتير</p>
            </Link>
            <Link href='/dashboard/reports' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/reports') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/reports') ? activeReports : reports} alt='reports' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/reports') ? 'text-[#00B6A9]' : 'text-white'}`}>التقارير والإحصائيات</p>
            </Link>
            <Link href='/dashboard/offers' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/offers') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/offers') ? activeOffers : offers} alt='offers' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/offers') ? 'text-[#00B6A9]' : 'text-white'}`}>التخفيضات والقسائم</p>
            </Link>
            <Link href='/dashboard/support' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/support') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/support') ? activeSupport : support} alt='support' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/support') ? 'text-[#00B6A9]' : 'text-white'}`}>الدعم الفني والمساعدة</p>
            </Link>
            <Link href='/dashboard/shipping' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/shipping') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/shipping') ? activeShipping : shipping} alt='shipping' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/shipping') ? 'text-[#00B6A9]' : 'text-white'}`}>شركات الشحن</p>
            </Link>
            <Link href='/dashboard/rating' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/rating') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/rating') ? activeRating : rating} alt='rating' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/rating') ? 'text-[#00B6A9]' : 'text-white'}`}>التقييمات</p>
            </Link>
            <Link href='/dashboard/settings' className={`cursor-pointer p-2 w-full ${pathname.startsWith('/dashboard/settings') && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`}>
                <Image src={pathname.startsWith('/dashboard/settings') ? activeSettings : settings} alt='settings' className='w-5 h-5' />
                <p className={`${pathname.startsWith('/dashboard/settings') ? 'text-[#00B6A9]' : 'text-white'}`}>الإعدادات</p>
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar

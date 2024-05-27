'use client'
import './style.css'
import { useState } from 'react'
import Image from 'next/image'
import Main from './Main/main'
import Orders from './Orders/Orders'
import Products from './Products/Products'
import purpleLogo from '../../components/Logo/purpleLogo.svg'
import Logo from '../../components/Logo/logo.svg'
import email from '../../assets/auth/email.svg'
import eye from '../../assets/auth/eye.svg'
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
import activeMain from '../../assets/dashboard/activeMain.png'
import activeOrders from '../../assets/dashboard/activeOrders.png'
import activeProducts from '../../assets/dashboard/activeProducts.png'
import activeClients from '../../assets/dashboard/activeClients.png'
import activeBills from '../../assets/dashboard/activeBills.png'
import activeReports from '../../assets/dashboard/activeReports.png'
import activeOffers from '../../assets/dashboard/activeOffers.png'
import activeSupport from '../../assets/dashboard/activeSupport.png'
import activeShipping from '../../assets/dashboard/activeShipping.png'
import activeRating from '../../assets/dashboard/activeRating.png'
import activeSettings from '../../assets/dashboard/activeSettings.png'

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [mainMood, setMainMood] = useState('main');

  const handleMood = (mood) => {
    setMainMood(mood);
  }

  return (
    isLoggedIn ?
    <main className='w-full flex flex-col'>
      <div className='flex pl-[60px]'>
        <aside className='dashboard-aside w-1/5 min-h-screen flex flex-col justify-start items-center gap-20 p-5 bg-gradient-to-br from-[#252B42] to-[#5E6DA8]'>
          <Image src={Logo} alt='logo' className='mt-[40px] w-[170px] h-[38px]' />
          <ul className='flex flex-col gap-2 w-full'>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'main' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('main')}>
              <Image src={mainMood === 'main' ? activeMain : main} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'main' ? 'text-[#4A588D]' : 'text-white'}`}>الرئيسية</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'orders' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('orders')}>
              <Image src={mainMood === 'orders' ? activeOrders : orders} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'orders' ? 'text-[#4A588D]' : 'text-white'}`}>الطلبات</p>
              <span className='bg-[#FF0000] text-white text-xs text-center rounded-full w-4 h-4 mr-auto'>12</span>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'products' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('products')}>
              <Image src={mainMood === 'products' ? activeProducts : products} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'products' ? 'text-[#4A588D]' : 'text-white'}`}>المنتجات</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'clients' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('clients')}>
              <Image src={mainMood === 'clients' ? activeClients : clients} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'clients' ? 'text-[#4A588D]' : 'text-white'}`}>العملاء</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'bills' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('bills')}>
              <Image src={mainMood === 'bills' ? activeBills : bills} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'bills' ? 'text-[#4A588D]' : 'text-white'}`}>الفواتير</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'reports' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('reports')}>
              <Image src={mainMood === 'reports' ? activeReports : reports} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'reports' ? 'text-[#4A588D]' : 'text-white'}`}>التقارير والإحصائيات</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'offers' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('offers')}>
              <Image src={mainMood === 'offers' ? activeOffers : offers} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'offers' ? 'text-[#4A588D]' : 'text-white'}`}>التخفيضات والقسائم</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'support' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('support')}>
              <Image src={mainMood === 'support' ? activeSupport : support} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'support' ? 'text-[#4A588D]' : 'text-white'}`}>الدعم الفني والمساعدة</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'shipping' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('shipping')}>
              <Image src={mainMood === 'shipping' ? activeShipping : shipping} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'shipping' ? 'text-[#4A588D]' : 'text-white'}`}>شركات الشحن</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'rating' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('rating')}>
              <Image src={mainMood === 'rating' ? activeRating : rating} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'rating' ? 'text-[#4A588D]' : 'text-white'}`}>التقييمات</p>
            </li>
            <li className={`cursor-pointer p-2 w-full ${mainMood === 'settings' && 'bg-white active relative'} rounded-xl flex justify-start items-center gap-2`} onClick={() => handleMood('settings')}>
              <Image src={mainMood === 'settings' ? activeSettings : settings} alt='main' className='w-5 h-5' />
              <p className={`${mainMood === 'settings' ? 'text-[#4A588D]' : 'text-white'}`}>الإعدادات</p>
            </li>
          </ul>
        </aside>
        {mainMood === 'main' && <Main />}
        {mainMood === 'orders' && <Orders />}
        {mainMood === 'products' && <Products />}
      </div>
    </main>
    :
    <main className='h-screen w-full login-dashboard'>
      <form className='dashboard-form w-1/4 h-fit flex flex-col justify-center items-center gap-5 absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-white rounded-md p-5'>
        <Image src={purpleLogo} alt='logo' className='w-[200px] h-[70px]' />
        <p className='text-[#252B42] font-bold'>تسجيل الدخول</p>
        <span className='relative  w-3/4'>
            <input type='email' placeholder='البريد الالكتروني' className='border-[1px] border-[#E0E0E0] rounded-2xl w-full text-[12px] p-4 mb-3 outline-none ' />
            <Image src={email} className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-[45%] -translate-y-2/4 -translate-x-2/4' alt='Amazing' />
        </span>
        <span className='relative rounded-2xl w-3/4'>
            <input type='password' placeholder='كلمة المرور' className='border-[1px] border-[#E0E0E0] rounded-2xl w-full text-[12px] p-4 mb-3 outline-none ' />
            <Image src={eye} className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-[45%] -translate-y-2/4 -translate-x-2/4 ' alt='Amazing' />
        </span>
        <input type='submit' value='تسجيل الدخول' className='login w-[75%] text-[12px] text-white bg-gradient-to-br from-[#252B42] to-[#5E6DA8] rounded-xl cursor-pointer p-3 mb-3 mt-5 outline-none' />
      </form>
    </main>
  )
}

export default Dashboard
'use client'

import { usePathname } from "next/navigation"
import Image from 'next/image'
import Link from "next/link"
import settings from '../../../assets/dashboard/blackSettings.svg'
import activeSettings from '../../../assets/dashboard/settings.png'
import coins from '../../../assets/dashboard/coins.svg'
import activeCoins from '../../../assets/dashboard/activeCoins.svg'
import paymentMethods from '../../../assets/dashboard/paymentMethods.svg'
import activePaymentMethods from '../../../assets/dashboard/activePaymentMethods.svg'
import managers from '../../../assets/dashboard/managers.svg'
import activeManagers from '../../../assets/dashboard/activeManagers.svg'
import maintenance from '../../../assets/dashboard/maintenance.svg'
import activeMaintenance from '../../../assets/dashboard/activeMaintenance.svg'
import returnPolicy from '../../../assets/dashboard/returnPolicy.svg'
import activeReturnPolicy from '../../../assets/dashboard/activeReturnPolicy.svg'

const SettingsSidebar = () => {
    
    const pathname = usePathname();

  return (
    <div className='flex flex-col items-start gap-4'>
        <Link href='/dashboard/settings' className='flex items-center gap-3'>
            <div className={`w-[270px] h-[150px] cursor-pointer select-none ${pathname === '/dashboard/settings' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`}>
                <Image src={pathname === '/dashboard/settings' ? activeSettings : settings} alt='general settings' className='w-[60px] h-[60px]' />
                <p className={`${pathname === '/dashboard/settings' && 'text-white'} text-lg font-bold`}>الاعدادات الاساسية</p>
            </div>
        {pathname === '/dashboard/settings' &&
            <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
        }
        </Link>
        <Link href='/dashboard/settings/coins' className='flex items-center gap-3'>
            <div className={`w-[270px] h-[150px] cursor-pointer select-none ${pathname === '/dashboard/settings/coins' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`}>
                <Image src={pathname === '/dashboard/settings/coins' ? activeCoins : coins} alt='coins' className='w-[60px] h-[60px]' />
                <p className={`${pathname === '/dashboard/settings/coins' && 'text-white'} text-lg font-bold`}>العملات</p>
            </div>
        {pathname === '/dashboard/settings/coins' &&
            <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
        }
        </Link>
        <Link href='/dashboard/settings/paymentMethods' className='flex items-center gap-3'>
            <div className={`w-[270px] h-[150px] cursor-pointer select-none ${pathname === '/dashboard/settings/paymentMethods' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`}>
                <Image src={pathname === '/dashboard/settings/paymentMethods' ? activePaymentMethods : paymentMethods} alt='paymentMethods' className='w-[60px] h-[60px]' />
                <p className={`${pathname === '/dashboard/settings/paymentMethods' && 'text-white'} text-lg font-bold`}>طرق الدفع</p>
            </div>
        {pathname === '/dashboard/settings/paymentMethods' &&
            <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
        }
        </Link>
        <Link href='/dashboard/settings/managers' className='flex items-center gap-3'>
            <div className={`w-[270px] h-[150px] cursor-pointer select-none ${pathname === '/dashboard/settings/managers' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`}>
                <Image src={pathname === '/dashboard/settings/managers' ? activeManagers : managers} alt='managers' className='w-[60px] h-[60px]' />
                <p className={`${pathname === '/dashboard/settings/managers' && 'text-white'} text-lg font-bold`}>المدراء والصلاحيات</p>
            </div>
        {pathname === '/dashboard/settings/managers' &&
            <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
        }
        </Link>
        <Link href='/dashboard/settings/maintenance' className='flex items-center gap-3'>
            <div className={`w-[270px] h-[150px] cursor-pointer select-none ${pathname === '/dashboard/settings/maintenance' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`}>
                <Image src={pathname === '/dashboard/settings/maintenance' ? activeMaintenance: maintenance} alt='maintenance' className='w-[60px] h-[60px]' />
                <p className={`${pathname === '/dashboard/settings/maintenance' && 'text-white'} text-lg font-bold`}>وضع الصيانة</p>
            </div>
        {pathname === '/dashboard/settings/maintenance' &&
            <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-bl-none'></span>
        }
        </Link>
        <Link href='/dashboard/settings/returnPolicy' className='flex items-center gap-3'>
            <div className={`w-[270px] h-[150px] cursor-pointer select-none ${pathname === '/dashboard/settings/returnPolicy' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`}>
                <Image src={pathname === '/dashboard/settings/returnPolicy' ? activeReturnPolicy: returnPolicy} alt='returnPolicy' className='w-[60px] h-[60px]' />
                <p className={`${pathname === '/dashboard/settings/returnPolicy' && 'text-white'} text-lg font-bold`}>سياسة الاسترجاع</p>
            </div>
        {pathname === '/dashboard/settings/returnPolicy' &&
            <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-bl-none'></span>
        }
        </Link>
    </div>
  )
}

export default SettingsSidebar

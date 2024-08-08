import DashboardHeader from '../dashboardHeader/dashboardHeader'
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
import Image from 'next/image'
import { useState } from 'react'
import GeneralSettings from './General Settings/GeneralSettings'
import Coins from './Coins/Coins'
import PaymentMethods from './Payment Methods/PaymentMethods'
import Managers from './Managers/Managers'
import Maintenance from './Maintenance/Maintenance'
import ReturnPolicy from './Return Policy/ReturnPolicy'

const Settings = () => {
    const [mood, setMood] = useState('general settings');

    const handleMood = (moodWord) => {
        setMood(moodWord);
    }

  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
        <h2 className='text-lg font-bold ml-auto'>الإعدادات</h2>
        <div className='w-full flex pb-5'>
            <div className='flex flex-col items-start gap-4'>
                <div className='flex items-center gap-3'>
                    <div className={`w-[270px] h-[150px] cursor-pointer select-none ${mood === 'general settings' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`} onClick={() => handleMood('general settings')}>
                        <Image src={mood === 'general settings' ? activeSettings : settings} alt='general settings' className='w-[60px] h-[60px]' />
                        <p className={`${mood === 'general settings' && 'text-white'} text-lg font-bold`}>الاعدادات الاساسية</p>
                    </div>
                {mood === 'general settings' &&
                    <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
                }
                </div>
                <div className='flex items-center gap-3'>
                    <div className={`w-[270px] h-[150px] cursor-pointer select-none ${mood === 'coins' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`} onClick={() => handleMood('coins')}>
                        <Image src={mood === 'coins' ? activeCoins : coins} alt='coins' className='w-[60px] h-[60px]' />
                        <p className={`${mood === 'coins' && 'text-white'} text-lg font-bold`}>العملات</p>
                    </div>
                {mood === 'coins' &&
                    <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
                }
                </div>
                <div className='flex items-center gap-3'>
                    <div className={`w-[270px] h-[150px] cursor-pointer select-none ${mood === 'paymentMethods' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`} onClick={() => handleMood('paymentMethods')}>
                        <Image src={mood === 'paymentMethods' ? activePaymentMethods : paymentMethods} alt='paymentMethods' className='w-[60px] h-[60px]' />
                        <p className={`${mood === 'paymentMethods' && 'text-white'} text-lg font-bold`}>طرق الدفع</p>
                    </div>
                {mood === 'paymentMethods' &&
                    <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
                }
                </div>
                <div className='flex items-center gap-3'>
                    <div className={`w-[270px] h-[150px] cursor-pointer select-none ${mood === 'managers' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`} onClick={() => handleMood('managers')}>
                        <Image src={mood === 'managers' ? activeManagers : managers} alt='managers' className='w-[60px] h-[60px]' />
                        <p className={`${mood === 'managers' && 'text-white'} text-lg font-bold`}>المدراء والصلاحيات</p>
                    </div>
                {mood === 'managers' &&
                    <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-tl-none'></span>
                }
                </div>
                <div className='flex items-center gap-3'>
                    <div className={`w-[270px] h-[150px] cursor-pointer select-none ${mood === 'maintenance' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`} onClick={() => handleMood('maintenance')}>
                        <Image src={mood === 'maintenance' ? activeMaintenance: maintenance} alt='maintenance' className='w-[60px] h-[60px]' />
                        <p className={`${mood === 'maintenance' && 'text-white'} text-lg font-bold`}>وضع الصيانة</p>
                    </div>
                {mood === 'maintenance' &&
                    <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-bl-none'></span>
                }
                </div>
                <div className='flex items-center gap-3'>
                    <div className={`w-[270px] h-[150px] cursor-pointer select-none ${mood === 'returnPolicy' ? 'bg-[#0B1C3F]' : 'bg-[#D9E1FF]'} rounded-2xl flex flex-col justify-center items-center gap-2`} onClick={() => handleMood('returnPolicy')}>
                        <Image src={mood === 'returnPolicy' ? activeReturnPolicy: returnPolicy} alt='returnPolicy' className='w-[60px] h-[60px]' />
                        <p className={`${mood === 'returnPolicy' && 'text-white'} text-lg font-bold`}>سياسة الاسترجاع</p>
                    </div>
                {mood === 'returnPolicy' &&
                    <span className='w-[70px] h-[150px] z-10 bg-[#EFEFEF] rounded-2xl rounded-bl-none'></span>
                }
                </div>
            </div>
        {mood === 'general settings' &&
            <GeneralSettings />
        }
        {mood === 'coins' &&
            <Coins />
        }
        {mood === 'paymentMethods' &&
            <PaymentMethods />
        }
        {mood === 'managers' &&
            <Managers />
        }
        {mood === 'maintenance' &&
            <Maintenance />
        }
        {mood === 'returnPolicy' &&
            <ReturnPolicy />
        }
        </div>
    </main>
  )
}

export default Settings

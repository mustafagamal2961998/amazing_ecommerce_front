import DashboardHeader from '../dashboardHeader/dashboardHeader'
import blackSettings from '../../../assets/dashboard/blackSettings.svg'
import coins from '../../../assets/dashboard/coins.svg'
import securityCard from '../../../assets/dashboard/securityCard.svg'
import managers from '../../../assets/dashboard/managers.svg'
import maintenance from '../../../assets/dashboard/maintenance.svg'
import Image from 'next/image'

const Settings = () => {
  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
        <div className='w-full flex flex-col items-start gap-5'>
            <h2 className='text-lg font-bold'>الإعدادات</h2>
            <div className='w-full grid grid-cols-4 gap-4'>
                <div className='w-[280px] h-[150px] cursor-pointer select-none bg-[#D9E1FF] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={blackSettings} alt='settings' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>الاعدادات الاساسية</p>
                </div>
                <div className='w-[280px] h-[150px] cursor-pointer select-none bg-[#D9E1FF] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={coins} alt='settings' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>العملات</p>
                </div>
                <div className='w-[280px] h-[150px] cursor-pointer select-none bg-[#D9E1FF] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={securityCard} alt='settings' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>طرق الدفع</p>
                </div>
                <div className='w-[280px] h-[150px] cursor-pointer select-none bg-[#D9E1FF] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={managers} alt='settings' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>المدراء والصلاحيات</p>
                </div>
                <div className='w-[280px] h-[150px] cursor-pointer select-none bg-[#D9E1FF] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={maintenance} alt='settings' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>وضع الصيانة</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Settings

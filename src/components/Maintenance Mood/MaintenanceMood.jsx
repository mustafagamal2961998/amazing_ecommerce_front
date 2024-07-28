'use client'
import './style.css'
import maintenanceMoodImg from '../../assets/dashboard/maintenanceMoodImg.svg';
import Image from 'next/image';
import { useStatusContext } from '../../Utils/Status/statusContext';
import { usePathname } from 'next/navigation';

const MaintenanceMood = (props) => {
    const {maintenanceMood} = useStatusContext();
    const pathname = usePathname();
  return (
    maintenanceMood && pathname !== '/dashboard' 
    ?
    <div className='maintenance min-h-screen p-10 flex flex-col justify-start items-center gap-16'>
      <Image src={maintenanceMoodImg} alt='maintenance mood' className='w-[350px] h-[350px] max-md:w-[150px] max-md:h-[150px] z-10' />
      <div className='w-2/4 max-md:w-full rounded-xl p-10 flex flex-col justify-center items-center gap-10 bg-white -mt-20'>
        <h2 className='text-2xl max-md:text-lg text-[#FF0000] font-bold'>نأسف الموقع حالياً في وضع الصيانة</h2>
        <h2 className='text-2xl max-md:text-lg text-black font-bold'>سيتم معاودة العمل بالموقع</h2>
        <h2 className='text-2xl max-md:text-lg text-black font-bold -mt-10'>بعد</h2>
        <div className='flex flex-row-reverse items-center justify-center gap-10'>
            <span className='flex flex-col items-center gap-2'>
                <p className='text-2xl max-md:text-lg font-bold text-black'>يوم</p>
                <div className='flex justify-center items-center py-4 px-6 rounded-md bg-[#D9D9D9] shadow'>
                    <p className='text-2xl max-md:text-lg font-bold text-black'>00</p>
                </div>
            </span>
            <span className='flex flex-col items-center gap-2'>
                <p className='text-2xl max-md:text-lg font-bold text-black'>ساعة</p>
                <div className='flex justify-center items-center py-4 px-6 rounded-md bg-[#D9D9D9] shadow'>
                    <p className='text-2xl max-md:text-lg font-bold text-black'>05</p>
                </div>
            </span>
            <span className='flex flex-col items-center gap-2'>
                <p className='text-2xl max-md:text-lg font-bold text-black'>دقيقة</p>
                <div className='flex justify-center items-center py-4 px-6 rounded-md bg-[#D9D9D9] shadow'>
                    <p className='text-2xl max-md:text-lg font-bold text-black'>44</p>
                </div>
            </span>
        </div>
      </div>
    </div>
    :
    props.children
  )
}

export default MaintenanceMood

import Image from 'next/image'
import topRight from '../../../assets/dashboard/topRight.svg';
import topLeft from '../../../assets/dashboard/topLeft.svg';
import bottomRight from '../../../assets/dashboard/bottomRight.svg';
import bottomLeft from '../../../assets/dashboard/bottomLeft.svg';
import center from '../../../assets/dashboard/center.svg';
import dailyImg from '../../../assets/dashboard/dailyImg.svg';
import weeklyImg from '../../../assets/dashboard/weeklyImg.svg';
import monthlyImg from '../../../assets/dashboard/monthlyImg.svg';
import yearlyImg from '../../../assets/dashboard/yearlyImg.svg';

const Visits = () => {
  return (
    <div className='relative mt-20'>
      <Image src={center} alt='daily' className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4' />
      <span
      className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center gap-2'
      >
        <p
        className='font-bold'
        >
            مجمل الزيارات
        </p>
        <p
        className='font-bold text-2xl'
        >
            200
        </p>
      </span>
      <div 
      className='flex justify-center items-center'
      >
        <span 
        className='relative'
        >
            <Image src={topRight} alt='daily' />
            <p 
            className='absolute top-5 right-5 font-bold'
            >
                عدد الزيارات اليومية    
            </p>
            <p 
            className='absolute bottom-5 right-5 font-bold text-3xl'
            >
                56
            </p>
            <Image src={dailyImg} alt='daily' className='absolute bottom-5 left-20' />
        </span>
        <span 
        className='relative'
        >
            <p 
            className='absolute top-5 right-5 font-bold'
            >
                عدد الزيارات االاسبوعية
            </p>
            <p 
            className='absolute bottom-5 right-16 font-bold text-3xl'
            >
                56
            </p>
            <Image src={topLeft} alt='weekly' />
            <Image src={weeklyImg} alt='weekly' className='absolute bottom-5 left-8' />
        </span>
      </div>
      <div 
      className='flex justify-center items-center'
      >
        <span 
        className='relative'
        >
            <p 
            className='absolute top-5 right-5 font-bold'
            >
                عدد الزيارات الشهرية  
            </p>
            <p 
            className='absolute bottom-5 right-5 font-bold text-3xl'
            >
                56
            </p>
            <Image src={bottomRight} alt='monthly' />
            <Image src={monthlyImg} alt='monthly' className='absolute bottom-5 left-20' />
        </span>
        <span 
        className='relative'
        >
            <p 
            className='absolute top-5 right-16 font-bold'
            >
                عدد الزيارات السنوية
            </p>
            <p 
            className='absolute bottom-5 right-16 font-bold text-3xl'
            >
                56
            </p>
            <Image src={bottomLeft} alt='yearly' />
            <Image src={yearlyImg} alt='yearly' className='absolute bottom-5 left-8' />
        </span>
      </div>
    </div>
  )
}

export default Visits

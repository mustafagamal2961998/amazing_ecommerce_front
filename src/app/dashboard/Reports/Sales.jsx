import daily from '../../../assets/dashboard/daily.svg'
import weekly from '../../../assets/dashboard/weekly.svg'
import monthly from '../../../assets/dashboard/monthly.svg'
import yearly from '../../../assets/dashboard/yearly.svg'
import clothesIcon from '../../../assets/dashboard/clothesIcon.svg'
import money from '../../../assets/dashboard/money.svg'
import profit from '../../../assets/dashboard/profit.svg'
import report from '../../../assets/dashboard/report.svg'
import { useState } from 'react'
import Image from 'next/image'
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const Sales = () => {
    const [reportMood, setReportMood] = useState('daily');
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());

  return (
    <div className='w-full flex flex-col justify-center items-center gap-20'>
      <div className='w-full flex justify-center items-center gap-20'>
        <span className={`${reportMood === 'daily' && 'shadow-xl'} w-full h-[150px] cursor-pointer select-none bg-[#E9FBB8] rounded-2xl flex justify-center items-center gap-2`} onClick={() => setReportMood('daily')}>
            <h2 className='text-xl'>تقرير <br /> يومي</h2>
            <Image src={daily} alt='daily report' className='w-[100px] h-[100px]' />
        </span>
        <span className={`${reportMood === 'weekly' && 'shadow-xl'} w-full h-[150px] cursor-pointer select-none bg-[#C9E8FF] rounded-2xl flex justify-center items-center gap-2`} onClick={() => setReportMood('weekly')}>
            <h2 className='text-xl'>تقرير <br /> إسبوعي</h2>
            <Image src={weekly} alt='weekly report' className='w-[100px] h-[100px]' />
        </span>
        <span className={`${reportMood === 'monthly' && 'shadow-xl'} w-full h-[150px] cursor-pointer select-none bg-[#FFC9C9] rounded-2xl flex justify-center items-center gap-2`} onClick={() => setReportMood('monthly')}>
            <h2 className='text-xl'>تقرير <br /> شهري</h2>
            <Image src={monthly} alt='monthly report' className='w-[100px] h-[100px]' />
        </span>
        <span className={`${reportMood === 'yearly' && 'shadow-xl'} w-full h-[150px] cursor-pointer select-none bg-[#5E6DA8D4] rounded-2xl flex justify-center items-center gap-2`} onClick={() => setReportMood('yearly')}>
            <h2 className='text-xl'>تقرير <br /> سنوي</h2>
            <Image src={yearly} alt='yearly report' className='w-[100px] h-[100px]' />
        </span>
      </div>
    { reportMood === 'daily' &&
      <div className='w-full flex items-start gap-44'>
        <p className='font-bold'>تقرير عن  فترة محددة</p>
        <span className='flex items-center gap-3'>
            <p className='font-bold'>من</p>
            <DatePicker onChange={setFrom} value={from} />
        </span>
        <span className='flex items-center gap-3'>
            <p className='font-bold'>إلى</p>
            <DatePicker onChange={setTo} value={to} />
        </span>
      </div>
    }
    </div>
  )
}

export default Sales

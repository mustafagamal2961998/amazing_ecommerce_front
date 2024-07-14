import daily from '../../../assets/dashboard/daily.svg'
import weekly from '../../../assets/dashboard/weekly.svg'
import monthly from '../../../assets/dashboard/monthly.svg'
import yearly from '../../../assets/dashboard/yearly.svg'
import clothesIcon from '../../../assets/dashboard/clothesIcon.svg'
import money from '../../../assets/dashboard/money.svg'
import profit from '../../../assets/dashboard/profit.svg'
import printReport from '../../../assets/dashboard/printReport.svg'
import download from '../../../assets/dashboard/download.svg'
import { useState } from 'react'
import Image from 'next/image'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import NotFoundComp from './NotFoundComp'

const Sales = () => {
    const [reportMood, setReportMood] = useState('daily');
    const [data, setData] = useState(true);

    const [fromDay, setFromDay] = useState(new Date());
    const [toDay, setToDay] = useState(new Date(Date.now() + 86400000));
    
    const [fromWeek, setFromWeek] = useState(new Date());
    const [toWeek, setToWeek] = useState(new Date(Date.now() + 604800000));
    
    const [fromMonth, setFromMonth] = useState(new Date());
    const [toMonth, setToMonth] = useState(new Date(Date.now() + 2592000000));
    
    const [fromYear, setFromYear] = useState(new Date());
    const [toYear, setToYear] = useState(new Date(Date.now() + 31536000000));

    const handleDailyReportChange = (date) => {
        setFromDay(date);
        setToDay(new Date(date.getTime() + 86400000));
    };

    const handleWeeklyReportChange = (date) => {
        setFromWeek(date);
        setToWeek(new Date(date.getTime() + 604800000));
    };

    const handleMonthlyReportChange = (date) => {
        setFromMonth(date);
        setToMonth(new Date(date.getTime() + 2592000000));
    };

    const handleYearlyReportChange = (date) => {
        setFromYear(date);
        setToYear(new Date(date.getTime() + 31536000000));
    };

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
            {reportMood === 'daily' && (
                <div className='w-full flex flex-col items-start gap-5'>
                    <div className='w-full flex items-start gap-44'>
                        <p className='font-bold'>تقرير عن  فترة محددة</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>من</p>
                            <DatePicker onChange={handleDailyReportChange} value={fromDay} />
                        </span>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>إلى</p>
                            <DatePicker 
                                value={toDay} 
                                disabled={true} 
                            />
                        </span>
                    </div>
                    <p className='ml-auto mt-5 font-bold'>ملخص الاحصائيات</p>
                    {data ? (
                        <div className='w-full mt-5 flex justify-center items-center gap-10'>
                            <div className='w-full flex flex-col justify-center items-center gap-3 p-5 rounded-2xl shadow-lg bg-[#EFEFEF]'>
                                <p className='font-bold'>عدد القطع المباعة</p>
                                <span className='w-full flex justify-evenly items-center'>
                                    <p className='font-bold text-xl'>56</p>
                                    <Image src={clothesIcon} alt='clothes' className='w-[80px] h-[80px]' />
                                </span>
                            </div>
                            <div className='w-full flex flex-col justify-center items-center gap-3 p-5 rounded-2xl shadow-lg bg-[#EFEFEF]'>
                                <p className='font-bold'>قيمة المبيعات بالجنية المصري</p>
                                <span className='w-full flex justify-evenly items-center'>
                                    <p className='font-bold text-xl'>5000</p>
                                    <Image src={money} alt='clothes' className='w-[80px] h-[80px]' />
                                </span>
                            </div>
                            <div className='w-full flex flex-col justify-center items-center gap-3 p-5 rounded-2xl shadow-lg bg-[#EFEFEF]'>
                                <p className='font-bold'>قيمة الربح بالجنية المصري</p>
                                <span className='w-full flex justify-evenly items-center'>
                                    <p className='font-bold text-xl'>3000</p>
                                    <Image src={profit} alt='clothes' className='w-[80px] h-[80px]' />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <NotFoundComp />
                    )}
                </div>
            )}
            {reportMood === 'weekly' && (
                <div className='w-full'>
                    <div className='w-full flex items-start gap-44'>
                        <p className='font-bold'>المنتجات المباعة في  فترة محددة</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>من</p>
                            <DatePicker onChange={handleWeeklyReportChange} value={fromWeek} />
                        </span>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>إلى</p>
                            <DatePicker 
                                value={toWeek} 
                                disabled={true} 
                            />
                        </span>
                    </div>
                    {data ? (
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full mt-10">
                            <div className="inline-block min-w-full">
                                <div className="overflow-hidden rounded-3xl shadow">
                                    <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                                        <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                                            <tr>
                                                <th className="px-6 py-4 font-normal">اليوم</th>
                                                <th className="px-6 py-4 font-normal">التاريخ</th>
                                                <th className="px-6 py-4 font-normal">عدد القطع</th>
                                                <th className="px-6 py-4 font-normal">قيمة المبيعات</th>
                                                <th className="px-6 py-4 font-normal">قيمة الربح</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-black p-3">
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">السبت</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأحد</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الاثنين</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الثلاثاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأربعاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الخميس</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الجمعة</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='p-3 flex justify-center items-center gap-10'>
                              <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5'>
                                <p>طباعة التقرير</p>
                                <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                              </button>
                              <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5'>
                                <p>تنزيل التقرير</p>
                                <Image src={download} alt='download report' className='w-[30px] h-[30px]' />
                              </button>
                          </div>
                        </div>
                    ) : (
                        <NotFoundComp />
                    )}
                </div>
            )}
            {reportMood === 'monthly' && (
                <div className='w-full'>
                    <div className='w-full flex items-start gap-44'>
                        <p className='font-bold'>المنتجات المباعة في  فترة محددة</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>من</p>
                            <DatePicker onChange={handleMonthlyReportChange} value={fromMonth} />
                        </span>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>إلى</p>
                            <DatePicker 
                                value={toMonth} 
                                disabled={true} 
                            />
                        </span>
                    </div>
                    {data ? (
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full mt-10">
                            <div className="inline-block min-w-full">
                                <div className="overflow-hidden rounded-3xl shadow">
                                    <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                                        <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                                            <tr>
                                                <th className="px-6 py-4 font-normal">اليوم</th>
                                                <th className="px-6 py-4 font-normal">التاريخ</th>
                                                <th className="px-6 py-4 font-normal">عدد القطع</th>
                                                <th className="px-6 py-4 font-normal">قيمة المبيعات</th>
                                                <th className="px-6 py-4 font-normal">قيمة الربح</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-black p-3">
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">السبت</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأحد</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الاثنين</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الثلاثاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأربعاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الخميس</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الجمعة</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">السبت</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأحد</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الاثنين</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الثلاثاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأربعاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الخميس</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الجمعة</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">السبت</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأحد</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الاثنين</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الثلاثاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأربعاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الخميس</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الجمعة</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">السبت</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأحد</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الاثنين</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الثلاثاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الأربعاء</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الخميس</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                            <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                                <td className="whitespace-nowrap">الجمعة</td>
                                                <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                                <td className="whitespace-nowrap">26</td>
                                                <td className="whitespace-nowrap">5000</td>
                                                <td className="whitespace-nowrap">3000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='p-3 flex justify-center items-center gap-10'>
                              <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5'>
                                <p>طباعة التقرير</p>
                                <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                              </button>
                              <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5'>
                                <p>تنزيل التقرير</p>
                                <Image src={download} alt='download report' className='w-[30px] h-[30px]' />
                              </button>
                            </div>
                        </div>
                    ) : (
                        <NotFoundComp />
                    )}
                </div>
            )}
            {reportMood === 'yearly' && (
                <div className='w-full'>
                    <div className='w-full flex items-start gap-44'>
                        <p className='font-bold'>المنتجات المباعة في  فترة محددة</p>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>من</p>
                            <DatePicker onChange={handleYearlyReportChange} value={fromYear} />
                        </span>
                        <span className='flex items-center gap-3'>
                            <p className='font-bold'>إلى</p>
                            <DatePicker 
                                value={toYear} 
                                disabled={true} 
                            />
                        </span>
                    </div>
                    {data ? (
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full mt-10">
                          <div className="inline-block min-w-full">
                              <div className="overflow-hidden rounded-3xl shadow">
                                  <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                                      <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                                          <tr>
                                              <th className="px-6 py-4 font-normal">اليوم</th>
                                              <th className="px-6 py-4 font-normal">التاريخ</th>
                                              <th className="px-6 py-4 font-normal">عدد القطع</th>
                                              <th className="px-6 py-4 font-normal">قيمة المبيعات</th>
                                              <th className="px-6 py-4 font-normal">قيمة الربح</th>
                                          </tr>
                                      </thead>
                                      <tbody className="text-black p-3">
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">السبت</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأحد</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الاثنين</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الثلاثاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأربعاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الخميس</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الجمعة</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">السبت</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأحد</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الاثنين</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الثلاثاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأربعاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الخميس</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الجمعة</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">السبت</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأحد</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الاثنين</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الثلاثاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأربعاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الخميس</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الجمعة</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">السبت</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأحد</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الاثنين</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الثلاثاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الأربعاء</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الخميس</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                          <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                              <td className="whitespace-nowrap">الجمعة</td>
                                              <td className="p-5" dir="ltr">2024 - 05 - 10</td>
                                              <td className="whitespace-nowrap">26</td>
                                              <td className="whitespace-nowrap">5000</td>
                                              <td className="whitespace-nowrap">3000</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <div className='p-3 flex justify-center items-center gap-10'>
                            <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5'>
                              <p>طباعة التقرير</p>
                              <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                            </button>
                            <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5'>
                              <p>تنزيل التقرير</p>
                              <Image src={download} alt='download report' className='w-[30px] h-[30px]' />
                            </button>
                          </div>
                        </div>
                    ) : (
                        <NotFoundComp />
                    )}
                </div>
            )}
        </div>
    )
}

export default Sales;

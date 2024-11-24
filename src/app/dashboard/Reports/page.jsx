'use client'
import './style.css'
import Wrapper from '../Wrapper';
import Reports from './Reports';
import printReport from '../../../assets/dashboard/printReport.svg'
import download from '../../../assets/dashboard/download.svg'
import { useState } from 'react'
import Image from 'next/image'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Cell, Pie, PieChart } from 'recharts';

const ReportsPage = () => {

    const [data, setData] = useState(true);

    const salesData = [
        { name: 'السبت', value: 1200, week: 'الأسبوع الأول' },
        { name: 'الأحد', value: 800, week: 'الأسبوع الثاني' },
        { name: 'الإثنين', value: 1500, week: 'الأسبوع الثالث' },
        { name: 'الثلاثاء', value: 2400, week: 'الأسبوع الرابع' },
        { name: 'الأربعاء', value: 900 },
        { name: 'الخميس', value: 980 },
        { name: 'الجمعة', value: 1285 }
    ];
    
    const COLORS = ['#6E8CFF', '#A277FD', '#F76C6C', '#F7B32B', '#6AAB9B', '#FF9A9E', '#E1BEE7'];

    const [fromDay, setFromDay] = useState(new Date());
    const [toDay, setToDay] = useState(new Date(Date.now()));

    const handleFromDateChange = (date) => {
        setFromDay(date);
        if (date > toDay) {
            setToDay(date);
        }
    };

    const handleToDateChange = (date) => {
        if (date < fromDay) {
            setFromDay(date);
        }
        setToDay(date);
    };

  return (
    <Wrapper>
        <Reports />
        <div className='w-full mb-auto flex flex-col justify-center items-center gap-4'>
            <div className='w-full flex items-center gap-5'>
                <div className='w-2/4 h-full flex flex-col justify-center items-center gap-5 rounded-xl border-[1px] border-[#CFCFCF]'>
                    <span className='w-full mb-auto text-right p-5 font-bold bg-[#00B6A9] text-white rounded-t-xl'>ملخص الأسبوع</span>
                    <span className='flex flex-col items-center justify-center pb-5'>
                        <PieChart width={250} height={400}>
                            <Pie
                            data={salesData}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            label
                            >
                            {salesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        <span className='flex items-center gap-2 text-base'>
                            {COLORS.map((color, i) => (
                                <>
                                    <p>{salesData[i].name}</p>
                                    <FontAwesomeIcon
                                    key={i}
                                    icon={faCircle}
                                    style={{ width: '25px', height: '25px', color: color }}
                                    />
                                </>
                            ))}
                        </span>
                    </span>
                </div>
                <div className='w-2/4 h-full flex flex-col justify-center items-center gap-5 rounded-xl border-[1px] border-[#CFCFCF]'>
                    <span className='w-full mb-auto text-right p-5 font-bold bg-[#00B6A9] text-white rounded-t-xl'>ملخص الشهر</span>
                    <span className='flex flex-col items-center justify-center pb-5'>
                        <PieChart width={250} height={400}>
                            <Pie
                            data={salesData.slice(0, 4)}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            label
                            >
                            {salesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        <span className='flex items-center gap-2 text-base'>
                            {COLORS.slice(0, 4).map((color, i) => (
                                <>
                                    <p>{salesData[i].week}</p>
                                    <FontAwesomeIcon
                                    key={i}
                                    icon={faCircle}
                                    style={{ width: '25px', height: '25px', color: color }}
                                    />
                                </>
                            ))}
                        </span>
                    </span>
                </div>
            </div>
            {/* <div className='flex items-start gap-3'>
                <div className='relative w-full h-[400px] border-[1px] border-[#ddd] rounded-xl rounded-tr-3xl'>
                    <p className='w-2/5 text-center rounded-tr-3xl rounded-bl-3xl p-3 bg-[#00B6A9] text-white absolute top-0 right-0'>ملخص الاسبوع</p>
                    <div className='w-full h-full p-2'>
                        <div className='h-full flex justify-center gap-2'>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[20%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>السبت</p>
                                    <p>1200 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[18%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الأحد</p>
                                    <p>990 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[24%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الاثنين</p>
                                    <p>1300 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[30%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الثلاثاء</p>
                                    <p>2000 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[50%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الأربعاء</p>
                                    <p>3400 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[90%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الخميس</p>
                                    <p>4600 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[100%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الجمعة</p>
                                    <p>4700 ر.س</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-[400px] border-[1px] border-[#ddd] rounded-xl rounded-tr-3xl'>
                    <p className='w-2/5 text-center rounded-tr-3xl rounded-bl-3xl p-3 bg-[#00B6A9] text-white absolute top-0 right-0'>ملخص الاسبوع</p>
                    <div className='w-full h-full p-2'>
                        <div className='h-full flex justify-center gap-2'>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[20%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>السبت</p>
                                    <p>1200 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[18%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الأحد</p>
                                    <p>990 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[24%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الاثنين</p>
                                    <p>1300 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[30%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الثلاثاء</p>
                                    <p>2000 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[50%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الأربعاء</p>
                                    <p>3400 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[90%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الخميس</p>
                                    <p>4600 ر.س</p>
                                </span>
                            </div>
                            <div className='flex flex-col justify-end items-center gap-1'>
                                <span className={`w-3 h-[100%] rounded-t-2xl bg-[#00B6A9]`}></span>
                                <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
                                    <p>الجمعة</p>
                                    <p>4700 ر.س</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='w-full flex items-start gap-52 mt-5'>
                <p className='font-bold'>المنتجات المباعة في  فترة محددة</p>
                <span className='flex items-center gap-3'>
                    <p className='font-bold'>من</p>
                    <DatePicker 
                        selected={fromDay} 
                        onChange={handleFromDateChange} 
                        value={fromDay}
                        dateFormat="yyyy/MM/dd" 
                    />
                </span>
                <span className='flex items-center gap-3'>
                    <p className='font-bold'>إلى</p>
                    <DatePicker 
                        selected={toDay} 
                        onChange={handleToDateChange} 
                        dateFormat="yyyy/MM/dd" 
                        value={toDay}
                        minDate={fromDay}
                    />
                </span>
            </div>
            {data ? (
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full mt-10">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden rounded-3xl shadow">
                            <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                                <thead className="bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
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
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faChevronRight} className='cursor-pointer p-2 rounded-[200%] duration-200 hover:bg-[#00000049]' />
                            <p className='font-bold text-base mx-4'>السابق</p>
                            <button className="px-3 py-1 bg-[#8AD0C3] font-bold rounded-lg mr-2 focus:outline-none">1</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">2</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">3</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">4</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">5</button>
                            <span>...</span>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">11</button>
                            <p className='font-bold text-base text-[#0F62FE] mx-4'>التالي</p>
                            <FontAwesomeIcon icon={faChevronLeft} className='cursor-pointer text-[#0F62FE] p-2 rounded-[200%] duration-200 hover:bg-[#0f63fe59]' />
                        </div>
                    </div>
                    <div className='p-3 flex justify-center items-center gap-10'>
                        <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5 shadow-xl'>
                        <p>طباعة التقرير</p>
                        <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                        </button>
                        <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5 shadow-xl'>
                        <p>تنزيل التقرير</p>
                        <Image src={download} alt='download report' className='w-[30px] h-[30px]' />
                        </button>
                    </div>
                </div>
            ) : (
                <p>لا توجد بيانات لعرضها</p>
            )}
            {/* <div className='w-full flex justify-center items-center gap-20'>
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
                <span className={`${reportMood === 'yearly' && 'shadow-xl'} w-full h-[150px] cursor-pointer select-none bg-[#8AD0C3D4] rounded-2xl flex justify-center items-center gap-2`} onClick={() => setReportMood('yearly')}>
                    <h2 className='text-xl'>تقرير <br /> سنوي</h2>
                    <Image src={yearly} alt='yearly report' className='w-[100px] h-[100px]' />
                </span>
            </div> */}
            {/* {reportMood === 'daily' && (
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
                                        <thead className="bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
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
                            <div className="flex items-center justify-center mt-4">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faChevronRight} className='cursor-pointer p-2 rounded-[200%] duration-200 hover:bg-[#00000049]' />
                                    <p className='font-bold text-base mx-4'>السابق</p>
                                    <button className="px-3 py-1 bg-[#8AD0C3] font-bold rounded-lg mr-2 focus:outline-none">1</button>
                                    <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">2</button>
                                    <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">3</button>
                                    <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">4</button>
                                    <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">5</button>
                                    <span>...</span>
                                    <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#8ad0c370]">11</button>
                                    <p className='font-bold text-base text-[#0F62FE] mx-4'>التالي</p>
                                    <FontAwesomeIcon icon={faChevronLeft} className='cursor-pointer text-[#0F62FE] p-2 rounded-[200%] duration-200 hover:bg-[#0f63fe59]' />
                                </div>
                            </div>
                            <div className='p-3 flex justify-center items-center gap-10'>
                              <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5 shadow-xl'>
                                <p>طباعة التقرير</p>
                                <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                              </button>
                              <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5 shadow-xl'>
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
                                        <thead className="bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
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
                              <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5 shadow-xl'>
                                <p>طباعة التقرير</p>
                                <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                              </button>
                              <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5 shadow-xl'>
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
                                      <thead className="bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
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
                            <button className='w-fit p-3 bg-[#07932E] rounded-full flex items-center justify-center gap-5 shadow-xl'>
                              <p>طباعة التقرير</p>
                              <Image src={printReport} alt='print report' className='w-[30px] h-[30px]' />
                            </button>
                            <button className='w-fit p-3 bg-[#FFC42D] rounded-full flex items-center justify-center gap-5 shadow-xl'>
                              <p>تنزيل التقرير</p>
                              <Image src={download} alt='download report' className='w-[30px] h-[30px]' />
                            </button>
                          </div>
                        </div>
                    ) : (
                        <NotFoundComp />
                    )}
                </div>
            )} */}
        </div>
    </Wrapper>
  )
}

export default ReportsPage

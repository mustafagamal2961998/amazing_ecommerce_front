'use client'
import { useState } from 'react';
import Image from 'next/image';
import Wrapper from '../../Wrapper'
import Reports from '../Reports'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import printReport from '../../../../assets/dashboard/printReport.svg'
import download from '../../../../assets/dashboard/download.svg'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const ProductsReports = () => {

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
    
    const data = [
        {
          name: 'بدل رجالي',
          total: 4000,
        },
        {
          name: 'بلوزة',
          total: 3000,
        },
        {
          name: 'جيبة',
          total: 2000,
        },
        {
          name: 'قميص',
          total: 2780,
        },
      ];

      const searchData = [
        { name: 'بدل رجالي', value: 100 },
        { name: 'بلوزة', value: 55 },
        { name: 'جيبة', value: 35 },
        { name: 'قميص', value: 15 },
    ];

      const COLORS = ['#62B2FD', '#FFB44F', '#F99BAB', '#9BDFC4'];

  return (
    <Wrapper>
        <Reports />
        <div 
        className='w-full flex flex-col justify-start items-center'
        >
            <div 
            className='w-full p-10 flex justify-evenly items-center'
            >
                <div
                className='flex flex-col items-start gap-5'
                >
                    <h2 
                    className='font-bold'
                    >
                        أكثر المنتجات مبيعاً
                    </h2>
                    <div
                    className='p-5 rounded-2xl border-2 border-solid border-[#E1E7EC] h-[500px]'
                    >
                        <BarChart
                        width={400}
                        height={450}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" stackId="a" fill='#62B2FD' />
                        </BarChart>
                    </div>
                </div>
                <div
                className='flex flex-col items-start gap-5'
                >
                    <h2 
                    className='font-bold'
                    >
                        أكثر المنتجات بحثاً
                    </h2>
                    <div
                    className='p-5 rounded-2xl border-2 border-solid border-[#E1E7EC] h-[500px] flex justify-between items-center'
                    >
                        <div 
                        className='flex flex-col gap-3'
                        >
                            <span 
                            className='flex justify-between items-center gap-2'
                            >
                                <p>
                                    بدل رجالي
                                </p>
                                <FontAwesomeIcon icon={faCircle} className='w-[16px] h-[16px] text-[#62B2FD]' />
                            </span>
                            <span 
                            className='flex justify-between items-center gap-2'
                            >
                                <p>
                                    بلوزة
                                </p>
                                <FontAwesomeIcon icon={faCircle} className='w-[16px] h-[16px] text-[#FFB44F]' />
                            </span>
                            <span 
                            className='flex justify-between items-center gap-2'
                            >
                                <p>
                                    جيبة
                                </p>
                                <FontAwesomeIcon icon={faCircle} className='w-[16px] h-[16px] text-[#F99BAB]' />
                            </span>
                            <span 
                            className='flex justify-between items-center gap-2'
                            >
                                <p>
                                    قميص
                                </p>
                                <FontAwesomeIcon icon={faCircle} className='w-[16px] h-[16px] text-[#9BDFC4]' />
                            </span>
                        </div>
                        <PieChart width={400} height={450}>
                            <Pie
                            data={searchData}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            label
                            >
                            {searchData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full flex items-start gap-44'>
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
            </div>
        </div>
    </Wrapper>
  )
}

export default ProductsReports

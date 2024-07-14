import DashboardHeader from '../dashboardHeader/dashboardHeader';
import Sales from './Sales';
import greenArrow from '../../../assets/dashboard/greenArrow.svg'
import Image from 'next/image';
import NotFoundComp from './NotFoundComp';
import { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Reports = () => {
    const [mood, setMood] = useState('sales');

    const data = [
        { name: 'bought', value: 215 },
        { name: 'not bought', value: 451 },
    ];
    
    const COLORS = ['#6E8CFF', '#A277FD'];

    const rating = [
        { name: '5stars', value: 451 },
        { name: '4stars', value: 215 },
        { name: '3stars', value: 141 },
        { name: '2stars', value: 42 },
        { name: '1stars', value: 22 },
    ];
    
    const ratingCOLORS = ['#BC6600', '#FF8A00', '#F3A74D', '#FFC700', '#FDDF77'];

  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
      <DashboardHeader />
      <div className='w-full flex flex-col items-start gap-5'>
        <h2 className='text-xl'>التقارير والاحصائيات</h2>
        <div className='flex justify-center items-center gap-10 w-full pr-10 pl-10'>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${mood === 'sales' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`} onClick={() => setMood('sales')}>
                <span className={`${mood === 'sales' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>المبيعات</p>
            </div>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${mood === 'products' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`} onClick={() => setMood('products')}>
                <span className={`${mood === 'products' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>المنتجات</p>
            </div>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${mood === 'clients' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`} onClick={() => setMood('clients')}>
                <span className={`${mood === 'clients' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>العملاء</p>
            </div>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${mood === 'visits' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`} onClick={() => setMood('visits')}>
                <span className={`${mood === 'visits' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>الزيارات</p>
            </div>
        </div>
      </div>
    { mood === 'sales' &&
        <Sales />
    }
    { mood === 'products' &&
        <div className='w-full flex flex-col items-start gap-2'>
            <p className='text-lg'>مبيعات المنتجات</p>
            <select className='w-full p-2 outline-none rounded-lg border-2 border-[#CFCFCF]'>
                <option>مبيعات المنتجات</option>
            </select>
            <NotFoundComp />
        </div>
    }
    { mood === 'clients' &&
        <div className='w-full flex flex-col items-start gap-4 pb-36'>
            <p className='text-xl'>تقارير العملاء</p>
            <div className='w-full flex items-center gap-5'>
                <div className='w-2/4 h-full flex flex-col justify-center items-center gap-5 rounded-xl border-[1px] border-[#CFCFCF]'>
                    <span className='w-full mb-auto text-right p-5 font-bold bg-[#4A588D] text-white rounded-t-xl'>العملاء</span>
                    <span className='flex flex-col items-center justify-center pb-5'>
                        <PieChart width={250} height={400}>
                            <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            label
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        <span className='flex items-center gap-5 text-base'>
                            <span className='flex items-center gap-1'>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#A277FD]' />
                                <p>لم يشتري بعد</p>
                                <p className='text-[#A277FD]'>{(data[1].value * 100 / (data[0].value + data[1].value)).toFixed(2)}%</p>
                            </span>
                            <span className='flex items-center gap-1'>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#6E8CFF]' />
                                <p>قام بالشراء</p>
                                <p className='text-[#6E8CFF]'>{(data[0].value * 100 / (data[0].value + data[1].value)).toFixed(2)}%</p>
                            </span>
                        </span>
                    </span>
                </div>
                <div className='w-2/4 h-full flex flex-col justify-center items-center gap-5 rounded-xl border-[1px] border-[#CFCFCF]'>
                    <span className='w-full text-right p-5 font-bold bg-[#4A588D] text-white rounded-t-xl'>رضا العملاء</span>
                    <div className='p-5 w-full flex justify-between items-center'>
                        <span className='flex items-center gap-1'>
                            <p className='font-bold'>80%</p>
                            <p className='text-[#B7B7B7]'>راضين</p>
                        </span>
                        <span className='flex items-center gap-1'>
                            <p className='text-[#07932E]'>90%</p>
                            <Image src={greenArrow} alt='rate' className='w-8 h-8' />
                        </span>
                    </div>
                    <span className='flex flex-col items-center justify-center pb-5'>
                        <PieChart width={250} height={400}>
                            <Pie
                            data={rating}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            label
                            >
                            {rating.map((entry, index) => (
                                <Cell key={`cell-${entry}`} fill={ratingCOLORS[index % ratingCOLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        <span className='p-2 flex flex-wrap justify-center gap-2 text-sm'>
                            <span className='flex items-center gap-1'>
                                <p className='text-[#BC6600]'>{(rating[0].value * 100 / (rating[0].value + rating[1].value + rating[2].value + rating[3].value + rating[4].value)).toFixed(2)}%</p>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#BC6600]' />
                                <p>تقييم 5 نجوم</p>
                            </span>
                            <span className='flex items-center gap-1'>
                                <p className='text-[#FF8A00]'>{(rating[1].value * 100 / (rating[0].value + rating[1].value + rating[2].value + rating[3].value + rating[4].value)).toFixed(2)}%</p>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#FF8A00]' />
                                <p>تقييم 4 نجوم</p>
                            </span>
                            <span className='flex items-center gap-1'>
                                <p className='text-[#F3A74D]'>{(rating[2].value * 100 / (rating[0].value + rating[1].value + rating[2].value + rating[3].value + rating[4].value)).toFixed(2)}%</p>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#F3A74D]' />
                                <p>تقييم 3 نجوم</p>
                            </span>
                            <span className='flex items-center gap-1'>
                                <p className='text-[#FFC700]'>{(rating[3].value * 100 / (rating[0].value + rating[1].value + rating[2].value + rating[3].value + rating[4].value)).toFixed(2)}%</p>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#FFC700]' />
                                <p>تقييم 2 نجوم</p>
                            </span>
                            <span className='flex items-center gap-1'>
                                <p className='text-[#FDDF77]'>{(rating[4].value * 100 / (rating[0].value + rating[1].value + rating[2].value + rating[3].value + rating[4].value)).toFixed(2)}%</p>
                                <FontAwesomeIcon icon={faCircle} className='w-[25px] h-[25px] text-[#FDDF77]' />
                                <p>تقييم 1 نجوم</p>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
            <div className='w-2/4 h-[600px] flex flex-col justify-center items-center gap-5 rounded-xl border-[1px] border-[#CFCFCF]'>
                <span className='w-full text-right p-5 mb-auto font-bold bg-[#4A588D] text-white rounded-t-xl'>العملاء الأكثر دفعا</span>
            </div>
        </div>
    }
    { mood === 'visits' &&
        <div className='w-full flex flex-col items-start gap-2'>
            <p className='text-lg'>الزيارات</p>
            <NotFoundComp />
        </div>
    }
    </main>
  )
}

export default Reports

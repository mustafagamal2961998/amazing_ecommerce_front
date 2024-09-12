'use client'
import Image from 'next/image';
import Wrapper from '../../Wrapper'
import Reports from '../Reports'
import greenArrow from '../../../../assets/dashboard/greenArrow.svg'
import { PieChart, Pie, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Clients = () => {

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
            <div className='w-full mt-5'>
                <div className='w-full flex items-start gap-44'>
                    <p className='font-bold'>عرض العملاء خلال فترة محددة</p>
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
                                        <th className="px-6 py-4 font-normal">اسم العميل</th>
                                        <th className="px-6 py-4 font-normal">عدد عمليات الشراء</th>
                                        <th className="px-6 py-4 font-normal">قيمة عمليات الشراء</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black p-3">
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
                                        <td className="p-5">3</td>
                                        <td className="whitespace-nowrap">5000</td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
                                        <td className="p-5">3</td>
                                        <td className="whitespace-nowrap">5000</td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
                                        <td className="p-5">3</td>
                                        <td className="whitespace-nowrap">5000</td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
                                        <td className="p-5">3</td>
                                        <td className="whitespace-nowrap">5000</td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
                                        <td className="p-5">3</td>
                                        <td className="whitespace-nowrap">5000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Clients

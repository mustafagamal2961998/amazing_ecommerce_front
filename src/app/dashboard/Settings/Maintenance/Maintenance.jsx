import Image from 'next/image';
import maintenanceIcon from '../../../../assets/dashboard/maintenanceIcon.svg';
import clockIcon from '../../../../assets/dashboard/clockIcon.svg';
import dateIcon from '../../../../assets/dashboard/dateIcon.svg';
import checked from '../../../../assets/dashboard/checked.svg';
import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Maintenance = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(Date.now()));

    const [startTime, setStartTime] = useState('23:59');
    const [endTime, setEndTime] = useState('23:59');

    const [isActive, setIsActive] = useState(false);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        if (date > endDate) {
            setEndDate(date);
        }
    };

    const handleEndDateChange = (date) => {
        if (date < startDate) {
            setStartDate(date);
        }
        setEndDate(date);
    };

  return (
    <div className='w-full ml-auto min-h-full p-5 -mr-2 shadow-lg bg-[#EFEFEF] rounded-3xl rounded-br-none flex flex-col justify-start items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-xl font-bold'>وضع الصيانة</h2>
            <Image src={maintenanceIcon} alt='maintenance icon' className='w-[150px] h-[150px]' />
        </div>
        <div className='w-fit px-6 py-3 rounded-2xl bg-[#07932E] drop-shadow-2xl font-bold text-xl ml-auto flex justify-center items-center'>
            <p>بداية تفعيل وضع الصيانة</p>
        </div>
        <div className='flex justify-center items-center gap-20'>
            <div dir='ltr' className='flex flex-col items-end gap-6'>
                <span className='flex items-center gap-2'>
                    <p className='text-xl font-bold'>الوقت</p>
                    <Image src={clockIcon} alt='time' className='w-8 h-8' />                            
                </span>
                <TimePicker onChange={setStartTime} value={startTime} />
            </div>
            <div className='flex flex-col items-start gap-6'>
                <span className='flex items-center gap-2'>
                    <p className='text-xl font-bold'>التاريخ</p>
                    <Image src={dateIcon} alt='time' className='w-8 h-8' />
                </span>
                <DatePicker 
                    selected={startDate} 
                    onChange={handleStartDateChange} 
                    value={startDate}
                    dateFormat="yyyy/MM/dd" 
                />
            </div>
        </div>
        <div className='w-fit px-6 py-3 mt-14 rounded-2xl bg-[#FFC42D] drop-shadow-2xl font-bold text-xl ml-auto flex justify-center items-center'>
            <p> نهاية تفعيل وضع الصيانة</p>
        </div>
        <div className='flex justify-center items-center gap-20'>
            <div dir='ltr' className='flex flex-col items-end gap-6'>
                <span className='flex items-center gap-2'>
                    <p className='text-xl font-bold'>الوقت</p>
                    <Image src={clockIcon} alt='time' className='w-8 h-8' />                            
                </span>
                <TimePicker onChange={setEndTime} value={endTime} />
            </div>
            <div className='flex flex-col items-start gap-6'>
                <span className='flex items-center gap-2'>
                    <p className='text-xl font-bold'>التاريخ</p>
                    <Image src={dateIcon} alt='time' className='w-8 h-8' />
                </span>
                <DatePicker 
                    selected={endDate} 
                    onChange={handleEndDateChange} 
                    dateFormat="yyyy/MM/dd" 
                    value={endDate}
                    minDate={startDate}
                />
            </div>
        </div>
        <div 
        className='w-full mt-14'
        >
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onChange={(e) => setIsActive(e.target.checked)} />
            <div class="relative w-11 h-6 bg-[#F12222] rounded-full peer 0 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#07932E]"></div>
            <span class="ms-3 text-sm font-medium">{isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>
        <button className='w-fit mt-auto p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
            <p>حفظ التعديلات</p>
            <Image src={checked} alt='save' className='w-[30px] h-[30px]' />
        </button>
    </div>
  )
}

export default Maintenance

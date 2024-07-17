import './style.css'
import DashboardHeader from '../dashboardHeader/dashboardHeader';
import Sales from './Sales';
import Products from './Products';
import Clients from './Clients';
import Visits from './Visits';
import { useState } from 'react';


const Reports = () => {
    const [mood, setMood] = useState('sales');

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
        <Products />
    }
    { mood === 'clients' &&
        <Clients />
    }
    { mood === 'visits' &&
        <Visits />
    }
    </main>
  )
}

export default Reports

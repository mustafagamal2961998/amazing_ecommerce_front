'use client'

import { usePathname } from "next/navigation"

const Reports = () => {
    
    const pathname = usePathname();

  return (
    <div className='w-full mb-auto flex flex-col items-start gap-5'>
        <h2 className='text-xl'>التقارير والاحصائيات</h2>
        <div className='flex justify-center items-center gap-10 w-full pr-10 pl-10'>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${pathname === '/dashboard/reports/' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`}>
                <span className={`${pathname === '/dashboard/reports/' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>المبيعات</p>
            </div>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${pathname === '/dashboard/reports/products' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`}>
                <span className={`${pathname === '/dashboard/reports/products' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>المنتجات</p>
            </div>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${pathname === '/dashboard/reports/clients' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`}>
                <span className={`${pathname === '/dashboard/reports/clients' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>العملاء</p>
            </div>
            <div className={`p-3 w-[100%] h-[55px] cursor-pointer select-none duration-200 flex items-center justify-start gap-3 rounded-3xl ${pathname === '/dashboard/reports/visits' ? 'bg-[#ADD4FF] shadow-lg' : 'bg-[#DFEEFF]'}`}>
                <span className={`${pathname === '/dashboard/reports/visits' ? 'bg-green-500' : 'bg-white'} w-[40px] h-[40px] p-2 rounded-2xl`}></span>
                <p className='text-lg'>الزيارات</p>
            </div>
        </div>
    </div>
  )
}

export default Reports

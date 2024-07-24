import Image from "next/image"
import back from '../../../assets/dashboard/back.svg'
import smsa from '../../../assets/dashboard/smsa.svg'
import saveCompany from '../../../assets/dashboard/saveCompany.svg'
import deleteCompany from '../../../assets/dashboard/deleteCompany.svg'
import { useState } from "react"
import { useStatusContext } from "../../../Utils/Status/statusContext"

const Company = () => {
    const [isActive, setIsActive] = useState(false);
    const {setShowCompanyMood} = useStatusContext();

  return (
    <div
    className='w-full flex flex-col justify-center items-center gap-5'
    >
        <div className='w-full flex justify-between items-center'>
            <h2 className='text-lg'>تعديل الشركة</h2>
            <span
            onClick={() => setShowCompanyMood(false)}
            className='py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
            >
                <p
                className='text-white'
                >
                    العودة إلى قائمة الشركات
                </p>
                <Image 
                src={back} 
                alt='back'
                className='w-[16px] h-[16px]' 
                />
            </span>
        </div>
        <div 
        className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center'
        >
        <Image 
        src={smsa} 
        alt='smsa'
        className='w-full' 
        />
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    اسم الشركة
                </span>
                <input 
                type='text'
                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    هاتف الشركة
                </span>
                <input 
                type='text'
                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    البريد الالكتروني
                </span>
                <input 
                type='text'
                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    تاريخ بداية التعاقد
                </span>
                <input 
                type='date'
                className='w-full text-right bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    تاريخ نهاية التعاقد
                </span>
                <input 
                type='date'
                className='w-full text-right bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    حالة التعاقد
                </span>
                <div 
                className='w-full'
                >
                    <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" onChange={(e) => setIsActive(e.target.checked)} />
                    <div class="relative w-11 h-6 bg-[#F12222] rounded-full peer 0 dark:bg-[#F12222] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#07932E]"></div>
                    <span class="ms-3 text-sm font-medium">{isActive ? 'نشط' : 'غير نشط'}</span>
                    </label>
                </div>
            </div>
        </div>
        <div className='p-3 flex justify-center items-center gap-10'>
            <button className='w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
                <p>حفظ التعديلات</p>
                <Image src={saveCompany} alt='save company' className='w-[30px] h-[30px]' />
            </button>
            <button className='w-fit p-3 bg-[#E40D0D] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
                <p>حذف الشركة</p>
                <Image src={deleteCompany} alt='delete company' className='w-[30px] h-[30px]' />
            </button>
        </div>
    </div>
  )
}

export default Company

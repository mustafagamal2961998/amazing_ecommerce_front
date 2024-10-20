'use client'
import Navbar from '../../../components/Navbar/Navbar'
import ProfileSidebar from '../ProfileSidebar'
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useStatusContext } from '../../../Utils/Status/statusContext'
import visa from '../../../assets/profile/VISA.png'
import masterCard from '../../../assets/profile/Mastercard.png'
import amex from '../../../assets/profile/AMEX.png'
import discover from '../../../assets/profile/discover.png'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import trash from '../../../assets/trash.png'
import addLocation from '../../../assets/profile/addLocation.png'

const Cards = () => {

    const { sidebar } = useStatusContext();
    
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
            <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
                <span className='flex justify-between w-full'>
                    <h2 className='text-2xl max-md:text-base font-bold'>بطاقات الإئتمان</h2>
                    <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-2xl bg-[#00B6A9] p-2 mt-6'>
                        <Image src={addLocation} className='w-[24px] h-[24px]' alt='Amazing' />
                        <p className='text-white'>إضافة بطاقة جديدة</p>
                    </span>
                </span>
                <form className='relative w-full mt-4 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5'>
                    <span className='absolute right-0 p-2 bg-[#00B6A9] text-white w-[10%] max-md:w-1/4 max-md:text-sm rounded-tr-2xl rounded-bl-2xl text-center mt-[-20px]'>
                        بطاقة جديدة
                    </span>
                    <span className='relative w-3/4 mt-[30px]'>
                        <p className='absolute left-0 text-[#4F5B76]'>Card number</p>
                        <input dir='ltr' type='text' placeholder='1234 1234 1234 1234' className='placeholder:absolute placeholder:left-5 p-3 max-md:p-2 max-md:placeholder:text-xs mb-4 rounded-xl placeholder:text-[#E7E7E7] outline-none w-full mt-[30px]' />
                        <span className='flex flex-row-reverse items-center gap-2 absolute -right-14 top-[60%] -translate-x-2/4 -translate-y-2/4'>
                            <Image src={visa} className='w-[24px] h-[16px]' alt='Amazing' />
                            <Image src={masterCard} className='w-[24px] h-[16px]' alt='Amazing' />
                            <Image src={amex} className='w-[24px] h-[16px]' alt='Amazing' />
                            <Image src={discover} className='w-[24px] h-[16px]' alt='Amazing' />
                        </span>
                    </span>
                    <span className='flex items-center gap-3 w-3/4'>
                        <span className='relative w-2/4'>                    
                            <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Expiry</p>
                            <input dir='ltr' type='text' placeholder='MM / YY' className='placeholder:absolute placeholder:left-5 p-3 max-md:p-2 max-md:placeholder:text-xs mt-[18px] mb-[16px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                        </span>
                        <span className='relative w-2/4'>                    
                            <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>CVV</p>
                            <input dir='ltr' type='text' placeholder='CVV' className='placeholder:absolute placeholder:left-5 p-3 max-md:p-2 max-md:placeholder:text-xs mt-[18px] mb-[16px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                        </span>
                    </span>
                    <span className='flex flex-row-reverse items-center gap-3 w-3/4'>
                        <span className='relative w-2/4'>                    
                            <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Country</p>
                            <Select options={options} value={value} onChange={changeHandler} className='mt-[18px] mb-[16px]' />
                        </span>
                        <span className='relative w-2/4'>                    
                            <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Postal code</p>
                            <input dir='ltr' type='text' className='p-3 max-md:p-2 max-md:placeholder:text-xs mt-[18px] mb-[16px] rounded-xl outline-none w-full' />
                        </span>
                    </span>
                    <input type='submit' value='حفظ' className='bg-[#00B6A9] p-3 max-md:p-2 rounded-xl text-white cursor-pointer outline-none w-3/4' />
                </form>
                <h2 className='text-2xl max-md:text-base font-bold'>بطاقات مسجلة</h2>
                <div className='w-2/4 p-5 m-auto flex justify-between items-center bg-[#EDF0FF] rounded-2xl'>
                    <button className='w-fit p-3 bg-[#D9D9D9B8] text-white rounded-xl border-[1px] border-black flex items-center justify-center gap-5 shadow-xl'>
                        <p className='text-[#9C1111]'>Remove</p>
                        <Image src={trash} alt='delete icon' className='w-[30px] h-[30px]' />
                    </button>
                    <span className='flex flex-col items-end gap-2'>
                        <Image src={masterCard} alt='master card' className='w-[80px]' />
                        <p>XXXX-6543</p>
                        <p>Expire in: 03/26</p>
                    </span>
                </div>
                <div className='w-2/4 p-5 m-auto flex justify-between items-center bg-[#EDF0FF] rounded-2xl'>
                    <button className='w-fit p-3 bg-[#D9D9D9B8] text-white rounded-xl border-[1px] border-black flex items-center justify-center gap-5 shadow-xl'>
                        <p className='text-[#9C1111]'>Remove</p>
                        <Image src={trash} alt='delete icon' className='w-[30px] h-[30px]' />
                    </button>
                    <span className='flex flex-col items-end gap-2'>
                        <Image src={visa} alt='master card' className='w-[80px]' />
                        <p>XXXX-6543</p>
                        <p>Expire in: 03/26</p>
                    </span>
                </div>
            </section>
            </div>
        </div>
    </div>
  )
}

export default Cards

'use client'

import { useState } from "react";
import Image from "next/image"
import filter from '../../../assets/filter.png';
import purpleFilter from '../../../assets/purpleFilter.svg';
import PriceRange from "./priceRange";

const Filter = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <div className='relative flex flex-col items-start gap-5'>
        <span className='flex items-center gap-2 cursor-pointer select-none' onClick={() => setIsFilterActive(!isFilterActive)}>
            <p>فلتر</p>
        { isFilterActive ?
            <span className='p-2 bg-[#00B6A9] rounded-xl'>
                <Image src={filter} width={20} height={20} alt='filter' className='w-[20px] h-[20px]' />
            </span>
            :
            <Image src={purpleFilter} width={20} height={20} alt='filter' className='w-[20px] h-[20px]' />
        }
        </span>
        <div className={`bg-white absolute -right-48 top-10 z-50 shadow rounded-md p-1 ${!isFilterActive && 'hidden'}`}>
            <span className='size p-3 flex flex-col gap-2 items-start'>
                <p className='font-bold'>المقاس</p>
                <span className='flex items-center gap-2'>
                    <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#00B6A9] text-white rounded-md cursor-pointer'>S</span>
                    <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#00B6A9] text-white rounded-md cursor-pointer'>M</span>
                    <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#00B6A9] text-white rounded-md cursor-pointer'>L</span>
                    <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#00B6A9] text-white rounded-md cursor-pointer'>XL</span>
                    <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#00B6A9] text-white rounded-md cursor-pointer'>XXL</span>
                </span>
            </span>
            <span className='color p-3 flex flex-col gap-2 items-start'>
                <p className='font-bold'>اللون</p>
                <span className='flex items-center gap-2'>
                    <span className='p-3 bg-red-700 text-white rounded-full cursor-pointer'></span>
                    <span className='p-3 bg-yellow-700 text-white rounded-full cursor-pointer'></span>
                    <span className='p-3 bg-green-700 text-white rounded-full cursor-pointer'></span>
                    <span className='p-3 bg-blue-400 text-white rounded-full cursor-pointer'></span>
                    <span className='p-3 bg-green-200 text-white rounded-full cursor-pointer'></span>
                    <span className='p-3 bg-blue-700 text-white rounded-full cursor-pointer'></span>
                </span>
            </span>
            <span className='price p-3 flex flex-col gap-2 items-start'>
                <p>السعر</p>
                <PriceRange />
            </span>
            <button className='w-[35%] p-[7px] text-sm bg-[#00B6A9] text-white rounded-lg mb-3 float-left ml-4'>تطبيق</button>
        </div>
    </div>
  )
}

export default Filter

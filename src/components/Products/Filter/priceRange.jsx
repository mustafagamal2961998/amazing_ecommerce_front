'use client'

import { useState, useEffect } from "react";
import '../style.css'

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleMinProgress = (value) => {
    if (value > maxPrice) {
      setMaxPrice(Math.min(value + 200, 2000));
    }
    setMinPrice(value);
  };
  
  const handleMaxProgress = (value) => {
    if (value < minPrice) {
      setMinPrice(Math.max(value - 200, 0));
    }
    setMaxPrice(value);
  };

  useEffect(() => {
    const minPriceProgress = (minPrice * 100) / 2000;
    const maxPriceProgress = (maxPrice * 100) / 2000;
    document.getElementById('minPriceProgress').style.width = `${minPriceProgress}%`;
    document.getElementById('maxPriceProgress').style.width = `${maxPriceProgress}%`;
  }, [minPrice, maxPrice]);

  return (
    <div className='flex flex-col justify-center items-center gap-3 overflow-hidden w-full'>
      <div className='relative flex justify-between items-center gap-4 w-full'>
        <input
          type='text'
          value={minPrice}
          onChange={(e) => handleMinProgress(Number(e.target.value))}
          className='min bg-[#d9d9d9] text-right text-black font-bold text-xs rounded-md border-none outline-none w-[70px] h-[15px]'
        />
        <input
          type='text'
          value={maxPrice}
          onChange={(e) => handleMaxProgress(Number(e.target.value))}
          className='min bg-[#D9D9D9] text-right text-black font-bold text-xs rounded-md border-none outline-none w-[70px] h-[15px]'
        />
        <span className='duration-75 absolute top-2/4 left-3 -translate-x-2/4 -translate-y-2/4 text-xs font-bold'>SAR</span>
        <span className='duration-75 absolute top-2/4 right-9 -translate-x-2/4 -translate-y-2/4 text-xs font-bold'>SAR</span>
      </div>
      <span className='duration-75 relative w-full h-[15px] bg-[#E4E4E4] rounded-xl'>
        <span id='minPriceProgress' className='duration-75 absolute right-0 bg-[#E4E4E4] z-10 rounded-xl h-[15px]'></span>
        <span id='maxPriceProgress' className='duration-75 absolute right-0 bg-[#5E6DA8] w-full rounded-xl h-[15px]'></span>
        <input
          type='range'
          step={50}
          min={0}
          max={2000}
          value={minPrice}
          onChange={(e) => handleMinProgress(Number(e.target.value))}
          className='duration-75 absolute left-0 top-0 z-10 outline-none bg-transparent w-full'
        />
        <input
          type='range'
          step={50}
          min={0}
          max={2000}
          value={maxPrice}
          onChange={(e) => handleMaxProgress(Number(e.target.value))}
          className='duration-75 absolute left-0 top-0 outline-none bg-transparent w-full'
        />
      </span>
    </div>
  );
};

export default PriceRange;

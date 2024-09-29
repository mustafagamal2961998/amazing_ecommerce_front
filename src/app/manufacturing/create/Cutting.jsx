'use client'
import { useState, useEffect } from 'react';

const Cutting = () => {
  const [cuttingData, setCuttingData] = useState({
    fabricWeight: '',
    fabricLength: '',
    fabricWidth: '',
    numberOfPieces: ''
  });

  useEffect(() => {
    localStorage.setItem('cuttingData', JSON.stringify(cuttingData));
  }, [cuttingData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCuttingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className='w-full flex flex-col justify-start gap-6'>
      <span className='flex justify-start items-center gap-14'>
        <p className='font-bold w-max'>وزن التوب</p>
        <span className='flex items-center gap-3'>
          <input
            type='number'
            name='fabricWeight'
            value={cuttingData.fabricWeight}
            onChange={handleInputChange}
            className='w-2/4 p-2 outline-none rounded-md shadow-inner'
          />
          <p className='font-bold'>كجم</p>
        </span>
      </span>

      <span className='flex justify-start items-center gap-14'>
        <p className='font-bold w-max'>طول التوب</p>
        <span className='flex items-center gap-3'>
          <input
            type='number'
            name='fabricLength'
            value={cuttingData.fabricLength}
            onChange={handleInputChange}
            className='w-2/4 p-2 outline-none rounded-md shadow-inner'
          />
          <p className='font-bold'>متر</p>
        </span>
      </span>

      <span className='flex justify-start items-center gap-14'>
        <p className='font-bold w-max'>عرض التوب</p>
        <span className='flex items-center gap-3'>
          <input
            type='number'
            name='fabricWidth'
            value={cuttingData.fabricWidth}
            onChange={handleInputChange}
            className='w-2/4 p-2 outline-none rounded-md shadow-inner'
          />
          <p className='font-bold'>متر</p>
        </span>
      </span>

      <span className='flex justify-start items-center gap-14'>
        <p className='font-bold w-max'>عدد القطع المراد تصنيعها</p>
        <span className='flex items-center gap-3'>
          <input
            type='number'
            name='numberOfPieces'
            value={cuttingData.numberOfPieces}
            onChange={handleInputChange}
            className='w-2/4 p-2 outline-none rounded-md shadow-inner'
          />
          <p className='font-bold'>قطعة</p>
        </span>
      </span>
    </div>
  );
}

export default Cutting;

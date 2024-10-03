'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import egyptFlag from '../../../assets/manufacturing/egypt.svg'
import ksaFlag from '../../../assets/manufacturing/ksa.svg'
import arrowDown from '../../../assets/manufacturing/arrowDown.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ClientData = () => {
  const [clientData, setClientData] = useState({
    clientName: '',
    phoneNumber: '',
    email: '',
    city: '',
    area: '',
    streetName: '',
    buildingNumber: '',
    country: 'egypt',
  });

  useEffect(() => {
    localStorage.setItem('clientData', JSON.stringify(clientData));
  }, [clientData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (newCountry) => {
    setClientData(prevData => ({
      ...prevData,
      country: newCountry,
    }));
  };

  return (
    <div className='w-full flex flex-col justify-start gap-6'>
      <span className='w-full flex justify-between items-center max-md:flex-col max-md:gap-2'>
        <p className='font-bold text-lg max-md:text-base'>اسم العميل / الشركة</p>
        <input
          required
          type='text'
          name='clientName'
          placeholder='الرجاء كتابة اسم العميل أو الشركة'
          value={clientData.clientName}
          onChange={handleInputChange}
          className='w-3/4 max-md:w-full rounded-lg outline-none p-2 shadow-inner placeholder:text-center placeholder:text-gray max-md:placeholder:text-sm md:placeholder:font-bold'
        />
      </span>
      <span className='w-full flex justify-between items-center max-md:flex-col max-md:gap-2'>
        <p className='font-bold text-lg max-md:text-base'>رقم الهاتف</p>
        <span className='relative w-3/4 flex items-center gap-3 max-md:w-full max-md:flex-col max-md:gap-2'>
          <input
            required
            type='text'
            name='phoneNumber'
            placeholder='يفضل كتابة هاتف مرتبط ببرنامج الواتس اب'
            value={clientData.phoneNumber}
            onChange={handleInputChange}
            className='w-3/4 max-md:w-full rounded-lg outline-none p-2 shadow-inner placeholder:text-center placeholder:text-gray max-md:placeholder:text-sm md:placeholder:font-bold'
          />
          <select
            className='rounded-lg p-2 shadow-inner outline-none cursor-pointer'
            value={clientData.country}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value='egypt'>مصر</option>
            <option value='ksa'>السعودية</option>
          </select>
          <Image
            src={clientData.country === 'egypt' ? egyptFlag : ksaFlag}
            alt={`علم ${clientData.country === 'egypt' ? 'مصر' : 'السعودية'}`}
            className='w-8 h-8 '
          />
        </span>
      </span>
      <span className='w-full flex justify-between items-center max-md:flex-col max-md:gap-2'>
        <p className='font-bold text-lg max-md:text-base'>البريد الإلكتروني</p>
        <input
          required
          type='email'
          name='email'
          placeholder='info@amazing.sa'
          value={clientData.email}
          onChange={handleInputChange}
          className='w-3/4 max-md:w-full rounded-lg outline-none p-2 shadow-inner placeholder:text-center placeholder:text-gray max-md:placeholder:text-sm md:placeholder:font-bold'
        />
      </span>
      <span className='w-full flex justify-start items-center max-md:flex-col max-md:gap-2'>
        <p className='font-bold text-lg max-md:text-base ml-auto'>العنوان</p>
        <div className='flex flex-col items-start gap-5 m-auto'>
          <div className='flex items-center gap-10'>
            <span
              className='flex items-center gap-3 select-none cursor-pointer'
              onClick={() => handleCountryChange('egypt')}
            >
              <Image src={egyptFlag} alt='علم مصر' className='w-8 h-8' />
              <p className='font-bold'>مصر</p>
              <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${clientData.country === 'egypt' ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                {clientData.country === 'egypt' && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  />
                )}
              </span>
            </span>
            <span
              className='flex items-center gap-3 select-none cursor-pointer'
              onClick={() => handleCountryChange('ksa')}
            >
              <Image src={ksaFlag} alt='علم السعودية' className='w-8 h-8' />
              <p className='font-bold'>السعودية</p>
              <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${clientData.country === 'ksa' ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                {clientData.country === 'ksa' && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                  />
                )}
              </span>
            </span>
          </div>
          <div className='w-full flex items-center gap-10 max-md:flex-col max-md:gap-2'>
            <span className='w-full flex items-center gap-3'>
              <p className='font-bold'>المدينة</p>
              <input
                required
                type='text'
                name='city'
                value={clientData.city}
                onChange={handleInputChange}
                className='w-full rounded-full outline-none p-2 shadow-inner'
              />
            </span>
            <span className='w-full flex items-center gap-3'>
              <p className='font-bold'>المنطقة</p>
              <input
                required
                type='text'
                name='area'
                value={clientData.area}
                onChange={handleInputChange}
                className='w-full rounded-full outline-none p-2 shadow-inner'
              />
            </span>
          </div>
          <div className='w-full flex items-center gap-10 max-md:flex-col max-md:gap-2'>
            <span className='w-full flex items-center gap-3'>
              <p className='font-bold'>اسم الشارع</p>
              <input
                required
                type='text'
                name='streetName'
                value={clientData.streetName}
                onChange={handleInputChange}
                className='w-full rounded-full outline-none p-2 shadow-inner'
              />
            </span>
            <span className='w-full flex items-center gap-3'>
              <p className='font-bold'>رقم البناية</p>
              <input
                required
                type='text'
                name='buildingNumber'
                value={clientData.buildingNumber}
                onChange={handleInputChange}
                className='w-full rounded-full outline-none p-2 shadow-inner'
              />
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ClientData;

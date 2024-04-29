'use client'
import './style.css'
import { useState, useMemo } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import VISA_logo from '../../assets/checkout/VISA_logo.png'
import mastercard_logo from '../../assets/checkout/mastercard_logo.png'
import ApplePay_logo from '../../assets/checkout/ApplePay_logo.png'
import STCPay_logo from '../../assets/checkout/STCPay_logo.png'
import Mada_logo from '../../assets/checkout/Mada_logo.png'
import Fawry_logo from '../../assets/checkout/Fawry_logo.png'
import PayPal_logo from '../../assets/checkout/PayPal_logo.png'
import visa from '../../assets/profile/visa.png'
import masterCard from '../../assets/profile/Mastercard.png'
import amex from '../../assets/profile/AMEX.png'
import discover from '../../assets/profile/discover.png'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Link from 'next/link'

const checkout = () => {
    
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

  return (
    <div className='p-5 flex flex-col justify-center items-center gap-10'>
      <span className='flex justify-between items-center w-full'>
        <p className='font-bold'>اتمام عملية الشراء</p>
        <Link href='/' className='flex items-center gap-1'>
            <p>رجوع</p>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </span>
      <span className='flex flex-row-reverse items-center gap-7'>
            <Image src={VISA_logo} className='w-[120px] h-[100px]' alt='Amazing' />
            <Image src={mastercard_logo} className='w-[120px] h-[100px]' alt='Amazing' />
            <Image src={ApplePay_logo} className='w-[120px] h-[100px]' alt='Amazing' />
            <Image src={STCPay_logo} className='w-[120px] h-[100px]' alt='Amazing' />
            <Image src={Mada_logo} className='w-[120px] h-[100px]' alt='Amazing' />
            <Image src={Fawry_logo} className='w-[120px] h-[100px]' alt='Amazing' />
            <Image src={PayPal_logo} className='w-[120px] h-[100px]' alt='Amazing' />
    </span>
    <form className='w-full rounded-md h-full flex flex-col items-center gap-4 p-5'>
        <span className='relative w-full mt-[30px]'>
            <p className='absolute left-0 text-[#4F5B76]'>Card number</p>
            <input type='text' placeholder='1234 1234 1234 1234' className='border-[#E0E0E0] border-2 text-left placeholder:absolute placeholder:left-0 p-3 rounded-xl placeholder:text-[#E7E7E7] outline-none w-full mt-[30px]' />
            <span className='flex flex-row-reverse items-center gap-3 absolute -right-14 top-[70%] -translate-x-2/4 -translate-y-2/4'>
                <Image src={visa} className='w-[24px] h-[16px]' alt='Amazing' />
                <Image src={masterCard} className='w-[24px] h-[16px]' alt='Amazing' />
                <Image src={amex} className='w-[24px] h-[16px]' alt='Amazing' />
                <Image src={discover} className='w-[24px] h-[16px]' alt='Amazing' />
            </span>
        </span>
        <span className='flex items-center gap-3'>
            <span className='relative'>                    
                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Expiry</p>
                <input type='text' placeholder='MM / YY' className='border-[#E0E0E0] border-2 text-left placeholder:absolute placeholder:left-0 p-2 mt-[12px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
            </span>
            <span className='relative'>                    
                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>CVV</p>
                <input type='text' placeholder='CVV' className='border-[#E0E0E0] border-2 text-left placeholder:absolute placeholder:left-0 p-2 mt-[12px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
            </span>
        </span>
        <span className='flex flex-row-reverse items-center gap-3'>
            <span className='relative'>                    
                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Country</p>
                <Select options={options} value={value} onChange={changeHandler} className='mt-[12px]' />
            </span>
            <span className='relative'>                    
                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Postal code</p>
                <input type='text' className='border-[#E0E0E0] border-2 text-left p-2 mt-[12px] rounded-xl outline-none' />
            </span>
        </span>
        <input type='submit' value='دفع' className='bg-[#4664FF] p-3 rounded-xl text-white cursor-pointer outline-none w-3/4' />
    </form>
    </div>
  )
}

export default checkout

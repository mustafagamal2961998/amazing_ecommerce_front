'use client'
import './style.css'
import Image from 'next/image'
import cartItem1 from '../../assets/cartItem1.png'
import cartItem2 from '../../assets/cartItem2.png'
import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import locationAdd from '../../assets/locationAdd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'

const cart = () => {
    const [cash, setCash] = useState(true)
  return (
    <div className='flex flex-col items-start gap-10 p-5 w-[98%]'>
      <span className='flex items-center gap-3 text-xl font-bold mr-[45px]'>
        سلة المشتريات
        <p className='text-xs'>عدد العناصر (2)</p>
      </span>
      <div className='grid grid-rows-1 gap-5 w-full'>
        <div className='w-full flex justify-between items-start'>
            <span className='relative flex items-start gap-2'>
                <span className='bg-[#5E6DA8] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto absolute top-2/4 -translate-x-2/4 -translate-y-2/4 right-0'>
                    1
                </span>
                <Image src={cartItem1} className='w-[200px] h-[200px] mr-[45px]' width={200} height={200} alt='Amazing' />
                <span className='flex flex-col items-start gap-4'>
                    <p className='text-xl'>بدلة بصف أزرار</p>
                    <span className='flex items-center gap-3 text-xs font-bold'>
                        اللون   :
                        <Image src={cartItem1} className='w-[20px] h-[27px] rounded-md' width={20} height={27} alt='Amazing' />
                    </span>
                    <span className='flex items-center gap-3 text-xs font-bold'>
                        المقاس   :
                        <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>S</span>
                    </span>
                    <span className='flex gap-5 p-2 mt-[15px] rounded-full text-white bg-[#5E6DA8]'>
                        <FontAwesomeIcon icon={faPlus} className='border-2 rounded-full border-white cursor-pointer' />
                             1
                        <FontAwesomeIcon icon={faMinus} className='border-2 rounded-full border-white cursor-pointer' />
                    </span>
                </span>
            </span>
            <span className='flex flex-col items-start h-full'>
                <span className='flex items-center gap-2 text-base font-bold'>
                    500 ر.س
                    <p className='font-normal text-xs text-red-500 line-through'>750 ر.س</p>
                </span>
                <Image src={trash} className='w-[20px] h-[20px] cursor-pointer mr-auto mt-auto' width={20} height={20} onClick={() => console.log('Hi')} alt='Amazing' />
            </span>
        </div>
        <hr className='bg-[#DEDEDE] text-[#DEDEDE] w-full h-[1px] rounded-md' />
        <div className='w-full flex justify-between items-start'>
            <span className='relative flex items-start gap-2'>
                <span className='bg-[#5E6DA8] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto absolute top-2/4 -translate-x-2/4 -translate-y-2/4 right-0'>
                    2
                </span>
                <Image src={cartItem2} className='w-[200px] h-[200px] mr-[45px]' width={200} height={200} alt='Amazing' />
                <span className='flex flex-col items-start gap-4'>
                    <p className='text-xl'>بدلة كاروهات</p>
                    <span className='flex items-center gap-3 text-xs font-bold'>
                        اللون   :
                        <Image src={cartItem2} className='w-[20px] h-[27px] rounded-md' width={20} height={27} alt='Amazing' />
                    </span>
                    <span className='flex items-center gap-3 text-xs font-bold'>
                        المقاس   :
                        <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>S</span>
                    </span>
                    <span className='flex gap-5 p-2 mt-[15px] rounded-full text-white bg-[#5E6DA8]'>
                        <FontAwesomeIcon icon={faPlus} className='border-2 rounded-full border-white cursor-pointer' />
                             1
                        <FontAwesomeIcon icon={faMinus} className='border-2 rounded-full border-white cursor-pointer' />
                    </span>
                </span>
            </span>
            <span className='flex flex-col items-start h-full'>
                <span className='flex items-center gap-2 text-base font-bold'>
                    500 ر.س
                    <p className='font-normal text-xs text-red-500 line-through'>750 ر.س</p>
                </span>
                <Image src={trash} className='w-[20px] h-[20px] cursor-pointer mr-auto mt-auto' width={20} height={20} onClick={() => console.log('Hi')} alt='Amazing' />
            </span>
        </div>
      </div>
      <div className='w-full flex justify-between items-start gap-5 mr-[45px]'>
        <div className='flex flex-col items-start gap-10 w-full'>
            <div className='location w-full p-5 flex flex-col items-start gap-5 rounded-2xl shadow relative h-[200px]'>
                <span className='absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl bg-[#5E6DA8] text-white text-center w-[118px] p-3'>
                    عنوان العميل
                </span>
                <span className='flex items-center gap-3 mt-[60px]'>
                    <input type='radio' checked className='' />
                    الطالبية - الهرم - الجيزة
                    <Image src={edit} className='w-[18px] h-[18px] cursor-pointer' width={18} height={18} onClick={() => console.log('Hi')} alt='Amazing' />
                </span>
                <span className='flex items-center gap-2'>
                    <Image src={locationAdd} className='w-[24px] h-[24px] cursor-pointer' width={24} height={24} onClick={() => console.log('Hi')} alt='Amazing' />
                    <p>عنوان جديد</p>
                </span>
            </div>
            <div className='payment w-full p-5 flex flex-col items-start gap-2 rounded-2xl shadow relative h-[200px]'>
                <span className='absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl bg-[#5E6DA8] text-white text-center w-[118px] p-3'>
                    طريقة الدفع
                </span>
                <span className='flex items-center gap-3 mt-[60px]'>
                    <input type='radio' id='paymentOnDelivery' name='paymentMethod' onClick={() => setCash(true)} checked={cash ? true : false} />
                    <label htmlFor='paymentOnDelivery'>الدفع عند التسليم</label>
                </span>
                <span className='flex items-center gap-3'>
                    <input type='radio' id='paymentByCard' name='paymentMethod' onClick={() => setCash(false)} checked={!cash ? true : false} />
                    <label htmlFor='paymentByCard'>الدفع بالبطاقة</label>
                </span>
            </div>
        </div>
        <div className='w-1/4 flex flex-col justify-center items-start gap-5 shadow relative p-5 rounded-2xl h-[440px]'>
            <span className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[24px] rounded-br-xl rounded-bl-xl bg-[#5E6DA8] text-white text-center w-[118px] p-3'>
               ملخص الطلب
            </span>
            <span className='w-full flex justify-between font-bold mt-[45px]'>
                عدد المنتجات (2)
                <p className='text-[#434343]'>1000 ر.س</p>
            </span>
            <span className='w-full flex justify-between font-bold'>
                مصاريف الشحن
                <p className='text-[#434343]'>40 ر.س</p>
            </span>
            <span className='w-full flex justify-between font-bold'>
                خصومات
                <p className='text-[#434343]'>00.00 ر.س</p>
            </span>
            <span className='w-full flex justify-between font-bold'>
                <input type='text' className='w-3/4 p-2 rounded-xl outline-none border-2 border-[#CCCCCC] placeholder:text-[#CCCCCC]' placeholder='ادخل كود الخصم' />
                <button className='rounded-xl bg-[#5E6DA8] text-white p-3'>تطبيق</button>
            </span>
            <hr className='bg-[#DEDEDE] text-[#DEDEDE] w-full h-[1px] rounded-md' />
            <span className='w-full flex justify-between font-bold'>
                الإجمالي
                <p className='text-[#434343]'>1040 ر.س</p>
            </span>
            <Link href='checkout' className='rounded-xl bg-[#3DA241] text-white p-3 w-full mt-auto text-center'>تأكيد الطلب</Link>
        </div>
      </div>
    </div>
  )
}

export default cart

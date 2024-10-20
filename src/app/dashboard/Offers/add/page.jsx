'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '../../Wrapper'
import calendar from '../../../../assets/dashboard/calendar.svg'
import checkbox from '../../../../assets/dashboard/Checkbox.svg'
import emptyCheckbox from '../../../../assets/dashboard/emptyCheckbox.svg'
import back from '../../../../assets/dashboard/whiteBack.svg'

const AddCoupon = () => {

    const [withFreeShipping, setWithFreeShipping] = useState(true)
    const [discountedProductsExcluded, setDiscountedProductsExcluded] = useState(false)

  return (
    <Wrapper>
        <div className='w-3/4 flex flex-col justify-center items-center gap-5 shadow-lg rounded-2xl'>
            <span className='flex justify-center items-center p-2 mb-auto ml-auto w-1/5 rounded-tr-2xl rounded-bl-2xl bg-[#00B6A9] text-white'>
                <p>التخفيضات والقسائم</p>
            </span>
            <form className='w-full flex flex-col justify-center items-center gap-5 pb-16'>
                <div className='w-full flex flex-col gap-3 items-start pr-8 pl-8 mt-12'>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>كود الكوبون </p>(
                        <p className='text-[#FC9898]'>حروف انجليزية وأرقام بدون مسافات</p>)
                    </span>
                    <input type='text' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg' />
                </div>
                <div className='w-full flex flex-col gap-3 items-start pr-8 pl-8'>
                    <p className='font-bold'>نوع الخصم</p>
                    <span className='w-full relative'>
                        <input type='text' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg' />
                        <select className='w-[12%] outline-none bg-[#00B6A9] text-white text-center rounded-lg absolute left-0 top-0'>
                            <option className='bg-white text-black'>نسبة(%)</option>
                            <option className='bg-white text-black'>ر.س</option>
                        </select>
                    </span>
                </div>
                <div className='w-full flex justify-center items-center gap-4 pr-8 pl-8'>
                    <div className='w-full flex flex-col gap-3 items-start'>
                        <p className='font-bold'>تاريخ بداية الكوبون</p>
                        <span className='w-full !h-10 relative p-1 border-[1px] border-[#D6D6D6] rounded-lg'>
                            <input type='date' className='w-[62%] !h-5 text-[12px] p-3 mb-3 outline-none' />
                            <Image src={calendar} className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-2/4 -translate-y-2/4 -translate-x-2/4 z-50' alt='calendar' />
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-3 items-start'>
                        <p className='font-bold'>تاريخ إنتهاء الكوبون</p>
                        <span className='w-full !h-10 relative p-1 border-[1px] border-[#D6D6D6] rounded-lg'>
                            <input type='date' className='w-[62%] !h-5 text-[12px] p-3 mb-3 outline-none' />
                            <Image src={calendar} className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-2/4 -translate-y-2/4 -translate-x-2/4 z-50' alt='calendar' />
                        </span>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-4 pr-8 pl-8'>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <p className='font-bold'>مع شحن مجاني</p>
                        <div className='w-full p-1 select-none border-[1px] border-[#D6D6D6] rounded-lg flex items-center gap-2'>
                            <Image src={withFreeShipping ? checkbox : emptyCheckbox} alt='empty check box' className='cursor-pointer bg-[#F2F2F2]' onClick={() => setWithFreeShipping(!withFreeShipping)} />
                            <p className={withFreeShipping ? 'text-black' : 'text-[#AEAEAE]'}>مع شحن مجاني</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <p className='font-bold'>استثناء المنتجات المخفضة</p>
                        <div className='w-full p-1 select-none border-[1px] border-[#D6D6D6] rounded-lg flex items-center gap-2'>
                            <Image src={discountedProductsExcluded ? checkbox : emptyCheckbox} alt='empty check box' className='cursor-pointer bg-[#F2F2F2]' onClick={() => setDiscountedProductsExcluded(!discountedProductsExcluded)} />
                            <p className={discountedProductsExcluded ? 'text-black' : 'text-[#AEAEAE]'}>استثناء المنتجات المخفضة</p>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 flex flex-col items-start gap-3 pr-8 pl-8 ml-auto mt-12'>
                    <p className='font-bold'>الحد الأدني للمشتريات(غير شامل قيمة الضريبة) </p>
                    <input type='number' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg placeholder:text-black' placeholder='0' />
                </div>
                <div className='w-full flex flex-col items-start gap-3 pr-8 pl-8 ml-auto mt-12'>
                    <p className='font-bold'>الحد الأدني عدد مرات الإستخدام للجميع </p>
                    <input type='number' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg placeholder:text-black' placeholder='0' />
                </div>
                <div className='w-full flex flex-col items-start gap-3 pr-8 pl-8 ml-auto'>
                    <p className='font-bold'>عدد مرات الإستخدام للعميل الواحد </p>
                    <input type='number' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg placeholder:text-black' placeholder='0' />
                </div>
                <div className='w-full flex justify-center items-center gap-5 mt-12'>
                    <input type='submit' value='حفظ' className='w-[250px] p-2 rounded-3xl bg-[#00B6A9] text-white' />
                    <Link href='/dashboard/offers' className='w-[250px] p-2 rounded-3xl cursor-pointer select-none flex justify-center items-center gap-5 bg-[#00B6A9] text-white'>
                        <Image src={back} alt='back' className='w-[25px] h-[25px]' />
                        <p>رجوع</p>
                    </Link>
                </div>
            </form>
        </div>
    </Wrapper>
  )
}

export default AddCoupon

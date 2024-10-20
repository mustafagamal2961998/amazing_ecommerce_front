'use client'

import back from '../../../../assets/dashboard/back.svg';
import showPurchasesBills from '../../../../assets/dashboard/showPurchasesBills.svg';
import addOrderImg from '../../../../assets/dashboard/addOrder.svg';
import Image from "next/image";
import Link from 'next/link';

const PurchasesBills = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
        <div className='w-full flex justify-between items-center px-20 mt-5'>
            <h2 className='text-lg'>فواتير المشتريات</h2>
            <Link href='/dashboard/bills' className='flex items-center gap-2 cursor-pointer'>
                <p className='text-xl text-[#00B6A9]'>قائمة الفواتير</p>
                <Image src={back} alt='back' className='w-[25px] h-[25px]' />
            </Link>
         </div>
        <div className='flex justify-center items-center gap-3'>
            <Link href='/dashboard/bills/purchasesBills/add' className='w-[300px] h-[150px] bg-[#E9FBB8] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                <Image src={addOrderImg} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>إضافة فاتورة جديدة</p>
            </Link>
            <Link href='/dashboard/bills/purchasesBills/bills' className='w-[300px] h-[150px] bg-[#C9E8FF] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                <Image src={showPurchasesBills} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>عرض جميع الفواتير</p>
            </Link>
        </div>
    </div>
  )
}

export default PurchasesBills

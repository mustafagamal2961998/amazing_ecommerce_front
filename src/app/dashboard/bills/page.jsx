'use client'
import salesBillsImg from '../../../assets/dashboard/salesBills.svg';
import purchasesBillsImg from '../../../assets/dashboard/purchasesBills.svg';
import settingBills from '../../../assets/dashboard/settingBills.svg';
import Image from 'next/image';
import Link from 'next/link';

const BillsPage = () => {

  return (
        <div className='flex flex-col mb-auto ml-auto'>
            <h2 className='text-lg mb-2'>الفواتير</h2>
            <div className='flex justify-start items-center gap-3'>
                <Link href='/dashboard/bills/salesBills' className='w-[300px] h-[150px] bg-[#E9FBB8] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                    <Image src={salesBillsImg} alt='sales bills' className='w-[70px] h-[70px]' />
                    <p className='text-xl'>فواتير المبيعات</p>
                </Link>
                <Link href='/dashboard/bills/purchasesBills' className='w-[300px] h-[150px] bg-[#C9E8FF] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                    <Image src={purchasesBillsImg} alt='sales bills' className='w-[70px] h-[70px]' />
                    <p className='text-xl'>فواتير المشتريات</p>
                </Link>
                <Link href='/dashboard/bills/settings' className='w-[300px] h-[150px] bg-[#FFC9C9] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                    <Image src={settingBills} alt='sales bills' className='w-[70px] h-[70px]' />
                    <p className='text-xl'>إعدادات الفواتير</p>
                </Link>
            </div>
        </div>
  )
}

export default BillsPage

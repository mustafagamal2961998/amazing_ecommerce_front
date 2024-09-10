'use client'
import Wrapper from '../../Wrapper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import back from '../../../../assets/dashboard/back.svg';
import printIcon from '../../../../assets/dashboard/print.svg';
import showBill from '../../../../assets/dashboard/chevrons-left.svg';
import Image from "next/image";
import Link from 'next/link';

const SalesBills = () => {
    
  return (
    <div className='w-full flex flex-col items-start gap-5'>
        <div className='w-full pl-10 mt-5 flex justify-between items-center'>
            <h2 className='text-xl'>فواتير المبيعات</h2>
            <Link href='/dashboard/bills' className='flex items-center gap-2 cursor-pointer'>
                <p className='text-xl text-[#4A588D]'>قائمة الفواتير</p>
                <Image src={back} alt='back' className='w-[25px] h-[25px]' />
            </Link>
        </div>
        <span className='relative w-2/4'>
            <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
            <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
        </span>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full">
                <div className="overflow-hidden rounded-3xl shadow">
                <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                    <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                    <tr>
                        <th className="px-6 py-4 font-normal">اسم العميل</th>
                        <th className="px-6 py-4 font-normal">رقم الفاتورة</th>
                        <th className="px-6 py-4 font-normal">إجمالي الفاتورة</th>
                        <th className="px-6 py-4 font-normal">تاريخ الفاتورة</th>
                        <th className="px-6 py-4 font-normal">طباعة الفاتورة</th>
                        <th className="px-6 py-4 font-normal">تفاصيل الفاتورة</th>
                    </tr>
                    </thead>
                    <tbody className="text-black p-3">
                        <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                            <td className="whitespace-nowrap">سيد عبد العظيم</td>
                            <td className='text-base' dir="ltr">00235</td>
                            <td className='whitespace-nowrap'>400 ر.س</td>
                            <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                            <td className='relative'>
                                <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                    <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                    <p>طباعة</p>
                                </span>
                            </td>
                            <td className='relative'>
                                <Link href='/dashboard/bills/salesBills/1' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                    <p>عرض الفاتورة</p>
                                    <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                </Link>
                            </td>
                        </tr>
                        <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                            <td className="whitespace-nowrap">سيد عبد العظيم</td>
                            <td className='text-base' dir="ltr">00235</td>
                            <td className='whitespace-nowrap'>400 ر.س</td>
                            <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                            <td className='relative'>
                                <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                    <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                    <p>طباعة</p>
                                </span>
                            </td>
                            <td className='relative'>
                                <Link href='/dashboard/bills/salesBills/1' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                    <p>عرض الفاتورة</p>
                                    <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                </Link>
                            </td>
                        </tr>
                        <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                            <td className="whitespace-nowrap">سيد عبد العظيم</td>
                            <td className='text-base' dir="ltr">00235</td>
                            <td className='whitespace-nowrap'>400 ر.س</td>
                            <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                            <td className='relative'>
                                <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                    <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                    <p>طباعة</p>
                                </span>
                            </td>
                            <td className='relative'>
                                <Link href='/dashboard/bills/salesBills/1' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                    <p>عرض الفاتورة</p>
                                    <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                </Link>
                            </td>
                        </tr>
                        <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                            <td className="whitespace-nowrap">سيد عبد العظيم</td>
                            <td className='text-base' dir="ltr">00235</td>
                            <td className='whitespace-nowrap'>400 ر.س</td>
                            <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                            <td className='relative'>
                                <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                    <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                    <p>طباعة</p>
                                </span>
                            </td>
                            <td className='relative'>
                                <Link href='/dashboard/bills/salesBills/1' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                    <p>عرض الفاتورة</p>
                                    <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                </Link>
                            </td>
                        </tr>
                        <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                            <td className="whitespace-nowrap">سيد عبد العظيم</td>
                            <td className='text-base' dir="ltr">00235</td>
                            <td className='whitespace-nowrap'>400 ر.س</td>
                            <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                            <td className='relative'>
                                <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                    <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                    <p>طباعة</p>
                                </span>
                            </td>
                            <td className='relative'>
                                <Link href='/dashboard/bills/salesBills/1' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                    <p>عرض الفاتورة</p>
                                    <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                </Link>
                            </td>
                        </tr>
                        <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                            <td className="whitespace-nowrap">سيد عبد العظيم</td>
                            <td className='text-base' dir="ltr">00235</td>
                            <td className='whitespace-nowrap'>400 ر.س</td>
                            <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                            <td className='relative'>
                                <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                    <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                    <p>طباعة</p>
                                </span>
                            </td>
                            <td className='relative'>
                                <Link href='/dashboard/bills/salesBills/1' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                    <p>عرض الفاتورة</p>
                                    <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SalesBills

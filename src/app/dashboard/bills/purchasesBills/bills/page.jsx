'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import back from '../../../../../assets/dashboard/back.svg';
import editIcon from '../../../../../assets/dashboard/editIcon.svg';
import deleteIcon from '../../../../../assets/dashboard/deleteIcon.svg';
import yes from '../../../../../assets/dashboard/yes.svg';
import no from '../../../../../assets/dashboard/no.svg';
import printIcon from '../../../../../assets/dashboard/print.svg';
import showBill from '../../../../../assets/dashboard/chevrons-left.svg';

const Bills = () => {
    
    const [showDeletedPopup, setShowDeletedPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleDeleteBill = (e) => {
        setShowDeletePopup(!showDeletePopup)
    }

  return (
    <div className='w-full flex flex-col items-start gap-5'>
        <div className='w-full flex justify-between items-center px-20 mt-5'>
            <h2 className='text-lg'>فواتير المشتريات</h2>
            <Link href='/dashboard/bills/purchasesBills' className='flex items-center gap-2 cursor-pointer'>
                <p className='text-xl text-[#00B6A9]'>العودة</p>
                <Image src={back} alt='back' className='w-[25px] h-[25px]' />
            </Link>
         </div>
        <div className='relative w-full flex flex-col items-start gap-10 pr-20 pl-20'>
            <span className='relative w-2/4'>
                <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
                <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden rounded-3xl shadow">
                        <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                            <thead className="bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
                                <tr>
                                    <th className="px-6 py-4 font-normal">اسم العميل</th>
                                    <th className="px-6 py-4 font-normal">رقم الفاتورة</th>
                                    <th className="px-6 py-4 font-normal">إجمالي الفاتورة</th>
                                    <th className="px-6 py-4 font-normal">تاريخ الفاتورة</th>
                                    <th className="px-6 py-4 font-normal">طباعة الفاتورة</th>
                                    <th className="px-6 py-4 font-normal">تفاصيل الفاتورة</th>
                                    <th className="px-6 py-4 font-normal">تعديل / حذف الفاتورة</th>
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
                                        <Link href={`/dashboard/bills/purchasesBills/bills/1`} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </Link>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                            <Link href={`/dashboard/bills/purchasesBills/bills/edit/1`}>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' />
                                            </Link>
                                            <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                        </span>
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
                                        <Link href={`/dashboard/bills/purchasesBills/bills/1`} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </Link>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                            <Link href={`/dashboard/bills/purchasesBills/bills/edit/1`}>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' />
                                            </Link>
                                            <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                        </span>
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
                                        <Link href={`/dashboard/bills/purchasesBills/bills/1`} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </Link>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                            <Link href={`/dashboard/bills/purchasesBills/bills/edit/1`}>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' />
                                            </Link>
                                            <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                        </span>
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
                                        <Link href={`/dashboard/bills/purchasesBills/bills/1`} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </Link>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                            <Link href={`/dashboard/bills/purchasesBills/bills/edit/1`}>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' />
                                            </Link>
                                            <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                        </span>
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
                                        <Link href={`/dashboard/bills/purchasesBills/bills/1`} className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </Link>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                            <Link href={`/dashboard/bills/purchasesBills/bills/edit/1`}>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' />
                                            </Link>
                                            <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showDeletePopup && 
                <div className='w-fit bg-white absolute left-2/4 top-1/4 mt-3 flex flex-col justify-center items-center gap-5 p-10 rounded-3xl border-2 border-[#DDD]'>
                    <Image src={deleteIcon} alt='delete bill' className='w-[60px] h-[60px]' />
                    <h2 className='text-2xl font-bold text-[#E40D0D]'>حذف فاتورة</h2>
                    <h2 className='text-xl font-bold text-black'>هل أنت متأكد من حذف الفاتورة ؟</h2>
                    <span className='flex justify-center items-center'>
                        <Image src={no} alt='no' className='w-full cursor-pointer duration-200 hover:-translate-x-2' onClick={(e) => handleDeleteBill(e)} />
                        <Image src={yes} alt='yes' className='w-full cursor-pointer duration-200 hover:translate-x-2' onClick={() => setShowDeletedPopup(true)} />
                    </span>
                </div>
            }
            {showDeletedPopup && 
                <div className='w-fit bg-white absolute left-2/4 top-1/4 mt-3 flex flex-col justify-center items-center gap-5 p-10 rounded-3xl border-2 border-[#DDD]'>
                    <Image src={deleteIcon} alt='delete bill' className='w-[60px] h-[60px]' />
                    <h2 className='text-2xl font-bold text-[#E40D0D]'>حذف فاتورة</h2>
                    <h2 className='text-xl font-bold text-black'>تم حذف الفاتورة بنجاح</h2>
                </div>
            }
        </div>
    </div>
  )
}

export default Bills

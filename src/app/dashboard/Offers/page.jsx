'use client'
import './style.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import plus from '../../../assets/dashboard/plus.svg'
import discountCoupon from '../../../assets/dashboard/discountCoupon.svg'
import greenEdit from '../../../assets/dashboard/greenEdit.svg'
import removeCoupon from '../../../assets/dashboard/removeCoupon.svg'
import couponOptions from '../../../assets/dashboard/couponOptions.svg'
import Image from 'next/image';

import Wrapper from '../Wrapper';
import Link from 'next/link';

const Offers = () => {
    const [options, setOptions] = useState(false)
    
  return (
    <Wrapper>
        <div className='w-full mb-auto flex flex-col items-start gap-5'>
            <h2 className='text-lg'>التخفيضات والقسائم</h2>
            <div className='w-full flex items-center justify-between'>
                <span className='relative w-2/4'>
                    <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
                    <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
                </span>
                <Link href='/dashboard/offers/add' className='flex justify-center items-center gap-2 pt-2 pb-2 pr-8 pl-8 bg-[#4A588D] text-white rounded-3xl cursor-pointer'>
                    <Image src={plus} alt='add' className='w-[18px] h-[18px]' />
                    <Image src={discountCoupon} alt='offers' className='w-[30px] h-[30px] -mr-4' />
                    <p className='text-md'>إضافة كوبون جديد</p>
                </Link>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[103%]">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden rounded-3xl shadow">
                        <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                            <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                                <tr>
                                    <th className="px-6 py-4 font-normal">عنوان الكوبون</th>
                                    <th className="px-6 py-4 font-normal">تاريخ البدء</th>
                                    <th className="px-6 py-4 font-normal">تاريخ الإنتهاء</th>
                                    <th className="px-6 py-4 font-normal">الكوبون</th>
                                    <th className="px-6 py-4 font-normal">المبلغ/النسبة</th>
                                    <th className="px-6 py-4 font-normal">المبلغ/النسبة</th>
                                </tr>
                            </thead>
                            <tbody className="text-black p-3">
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap p-5">خصم الافتتاح</td>
                                    <td className='text-base p-5' dir="ltr">2024 - 05 - 04</td>
                                    <td className='whitespace-nowrap p-5' dir="ltr">2024 - 05 - 11</td>
                                    <td className="whitespace-nowrap p-5">amazing24</td>
                                    <td className='whitespace-nowrap p-5'>50 ر.س</td>
                                    <td className='relative p-5 flex justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={couponOptions} alt="coupon options" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOptions(!options)} />
                                            <span className={`w-fit z-50 absolute right-[-85px] top-2 bg-white p-5 rounded-3xl shadow-2xl ${options ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                                                <Link href={`/dashboard/offers/edit/1`} className='flex items-center gap-2 font-bold select-none cursor-pointer w-full'>
                                                    <Image src={greenEdit} alt="edit" className="w-[30px] h-[30px]" />
                                                    <p>تعديل</p>
                                                </Link>
                                                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer w-full'>
                                                    <Image src={removeCoupon} alt="remove" className="w-[30px] h-[30px]" />
                                                    <p>حذف الكوبون</p>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap p-5">عيد الأضحي</td>
                                    <td className='text-base p-5' dir="ltr">2024 - 05 - 04</td>
                                    <td className='whitespace-nowrap p-5' dir="ltr">2024 - 05 - 11</td>
                                    <td className="whitespace-nowrap p-5">amazing24</td>
                                    <td className='whitespace-nowrap p-5'>%25</td>
                                    <td className='relative p-5 flex justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={couponOptions} alt="coupon options" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOptions(!options)} />
                                            {/* <span className={`w-fit absolute right-[-60px] top-2 bg-white p-5 rounded-3xl shadow-2xl ${options ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={greenEdit} alt="edit" className="w-[30px] h-[30px]" />
                                                    <p>تعديل</p>
                                                </span>
                                                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={removeCoupon} alt="remove" className="w-[30px] h-[30px]" />
                                                    <p>حذف الكوبون</p>
                                                </span>
                                            </span> */}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap p-5">خصم خاص</td>
                                    <td className='text-base p-5' dir="ltr">2024 - 05 - 04</td>
                                    <td className='whitespace-nowrap p-5' dir="ltr">2024 - 05 - 11</td>
                                    <td className="whitespace-nowrap p-5">vip24</td>
                                    <td className='whitespace-nowrap p-5'>%40</td>
                                    <td className='relative p-5 flex justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={couponOptions} alt="coupon options" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOptions(!options)} />
                                            {/* <span className={`w-fit absolute right-[-60px] top-2 bg-white p-5 rounded-3xl shadow-2xl ${options ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={greenEdit} alt="edit" className="w-[30px] h-[30px]" />
                                                    <p>تعديل</p>
                                                </span>
                                                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={removeCoupon} alt="remove" className="w-[30px] h-[30px]" />
                                                    <p>حذف الكوبون</p>
                                                </span>
                                            </span> */}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Offers

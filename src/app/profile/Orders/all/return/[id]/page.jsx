'use client'
import Image from 'next/image'
import lineCircle from '../../../../../../assets/profile/lineCircle.svg'
import lineArrow from '../../../../../../assets/profile/lineArrow.svg'
import cloth from '../../../../../../assets/dashboard/clothes1.svg'
import item from '../../../../../../assets/profile/item.svg'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../../../../components/Navbar/Navbar'
import ProfileSidebar from '../../../../ProfileSidebar'
import Header from '../../../Header'
import { useStatusContext } from '../../../../../../Utils/Status/statusContext'

const ReturnProduct = () => {

    const [visaCard, setVisaCard] = useState(true);
    const [purchaseVoucher, setPurchaseVouchery] = useState(false);
    const { sidebar } = useStatusContext();

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            <div className={`w-full ${sidebar ? 'max-md:hidden' : ''} max-md:p-5 mt-12 mb-12 flex flex-col gap-8`}>
                <Header />
                <div className='w-full flex flex-col justify-center items-center gap-10'>
                    <form className='relative w-full flex flex-col justify-center items-center gap-10'>
                        <div className='w-full flex flex-col justify-center items-center gap-1'>
                            <div className='w-full flex items-center justify-center gap-14 max-md:flex-col max-md:gap-2 p-3 rounded-tr-3xl rounded-tl-3xl bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>تاريخ الطلب</p>
                                    <p className='text-[#00B6A9]'>16 يوليو 2014</p>
                                </span>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>حالة الطلب</p>
                                    <p className='text-[#00B6A9]'>تم التسليم</p>
                                </span>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>تاريخ التسليم</p>
                                    <p className='text-[#00B6A9]'>17 يوليو 2014</p>
                                </span>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>قيمة الطلب</p>
                                    <p className='text-[#00B6A9]'>500 ر.س</p>
                                </span>
                            </div>
                            <div className='w-full p-5 max-md:pb-14 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                                <div className='flex items-center gap-3 max-md:flex-col max-md:justify-center'>
                                    <Image src={cloth} alt='cloth' className='w-full' />
                                    <span className='flex flex-col items-start gap-2 font-bold'>
                                        <p className='text-lg'>بدلة بأزرار</p>
                                        <span className='flex items-center gap-2 font-bold'>
                                            اللون
                                            <p className='text-lg'>: أزرق</p>
                                        </span>
                                        <span className='flex items-center gap-2 font-bold'>
                                            المقاس
                                            <p className='text-lg'>:XL</p>
                                        </span>
                                    </span>
                                </div>
                                <div className='w-2/4 max-md:w-full flex flex-col gap-5'>
                                    <div className='w-3/4 max-md:w-full flex flex-col items-center gap-5 ml-auto'>
                                        <div className='w-full flex flex-col gap-5 items-start max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                            <span className='flex items-center gap-2'>
                                                <Image src={item} alt='item' className='w-4 h-4' />
                                                <p className='font-bold'>سبب الإرجاع</p>
                                            </span>
                                            <div className='relative w-full flex items-center gap-5'>
                                                <select className='w-full p-1 rounded-xl shadow-inner outline-none'>
                                                    <option>غير راضي عن جودة المنتج</option>
                                                    <option>المنتج غير مطابق للمواصفات</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-col gap-5 items-start max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                            <span className='flex items-center gap-2'>
                                                <Image src={item} alt='item' className='w-4 h-4' />
                                                <p className='font-bold'>طريقة إرجاع النقود</p>
                                            </span>
                                            <div className='relative w-full flex items-center gap-5'>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-start gap-2 cursor-pointer select-none' onClick={() => {setVisaCard(true); setPurchaseVouchery(false)}}>
                                                        <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${visaCard ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}></span>
                                                        <span className='flex flex-col items-start gap-2'>
                                                            <p>فيزا كارد</p>
                                                            <p className='text-[#C50D0D]'>في حالة الدفع بالفيزا فقط</p>
                                                        </span>
                                                    </div>
                                                    <div className='flex items-start gap-2 cursor-pointer select-none' onClick={() => {setPurchaseVouchery(true); setVisaCard(false)}}>
                                                        <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${purchaseVoucher ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}></span>
                                                        <span className='flex flex-col items-start gap-2'>
                                                            <p>قسيمة مشتريات</p>
                                                            <p className='text-[#C50D0D]'>في حالة الدفع كاش عند الاستلام</p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className='w-full flex justify-center items-center gap-2'>
                                        <Image src={lineCircle} alt='line circle' className='w-1/5 h-8' />
                                        <Link href='/return-policy' className='min-w-max text-[#001C63] max-md:text-xs'>اضغط هنا للاطلاع على سياسة الاسترجاع</Link>
                                        <Image src={lineArrow} alt='line arrow' className='w-1/5 h-6' />
                                    </span>
                                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                                        <input type='submit' value='تأكيد الطلب' className='w-1/4 max-md:w-2/4 p-2 bg-[#34C759] shadow-xl rounded-tr-full rounded-bl-full text-center font-bold cursor-pointer' />
                                        <p className='text-[#FF0209]'>هذا المنتج قابل للإرجاع حتى 2 أغسطس 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form className='relative w-full flex flex-col justify-center items-center gap-10'>
                        <div className='w-full flex flex-col justify-center items-center gap-1'>
                            <div className='w-full flex items-center justify-center gap-14 max-md:flex-col max-md:gap-2 p-3 rounded-tr-3xl rounded-tl-3xl bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>تاريخ الطلب</p>
                                    <p className='text-[#00B6A9]'>16 يوليو 2014</p>
                                </span>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>حالة الطلب</p>
                                    <p className='text-[#00B6A9]'>تم التسليم</p>
                                </span>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>تاريخ التسليم</p>
                                    <p className='text-[#00B6A9]'>17 يوليو 2014</p>
                                </span>
                                <span className='flex flex-col justify-center items-center gap-2'>
                                    <p className='text-lg font-bold'>قيمة الطلب</p>
                                    <p className='text-[#00B6A9]'>500 ر.س</p>
                                </span>
                            </div>
                            <div className='w-full p-5 max-md:pb-14 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                                <div className='flex items-center gap-3 max-md:flex-col max-md:justify-center'>
                                    <Image src={cloth} alt='cloth' className='w-full' />
                                    <span className='flex flex-col items-start gap-2 font-bold'>
                                        <p className='text-lg'>بدلة بأزرار</p>
                                        <span className='flex items-center gap-2 font-bold'>
                                            اللون
                                            <p className='text-lg'>: أزرق</p>
                                        </span>
                                        <span className='flex items-center gap-2 font-bold'>
                                            المقاس
                                            <p className='text-lg'>:XL</p>
                                        </span>
                                    </span>
                                </div>
                                <div className='w-2/4 max-md:w-full flex flex-col gap-5'>
                                    <div className='w-3/4 max-md:w-full flex flex-col items-center gap-5 ml-auto'>
                                        <div className='w-full flex flex-col gap-5 items-start max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                            <span className='flex items-center gap-2'>
                                                <Image src={item} alt='item' className='w-4 h-4' />
                                                <p className='font-bold'>سبب الإرجاع</p>
                                            </span>
                                            <div className='relative w-full flex items-center gap-5'>
                                                <select className='w-full p-1 rounded-xl shadow-inner outline-none'>
                                                    <option>غير راضي عن جودة المنتج</option>
                                                    <option>المنتج غير مطابق للمواصفات</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-col gap-5 items-start max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                            <span className='flex items-center gap-2'>
                                                <Image src={item} alt='item' className='w-4 h-4' />
                                                <p className='font-bold'>طريقة إرجاع النقود</p>
                                            </span>
                                            <div className='relative w-full flex items-center gap-5'>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-start gap-2 cursor-pointer select-none' onClick={() => {setVisaCard(true); setPurchaseVouchery(false)}}>
                                                        <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${visaCard ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}></span>
                                                        <span className='flex flex-col items-start gap-2'>
                                                            <p>فيزا كارد</p>
                                                            <p className='text-[#C50D0D]'>في حالة الدفع بالفيزا فقط</p>
                                                        </span>
                                                    </div>
                                                    <div className='flex items-start gap-2 cursor-pointer select-none' onClick={() => {setPurchaseVouchery(true); setVisaCard(false)}}>
                                                        <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${purchaseVoucher ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}></span>
                                                        <span className='flex flex-col items-start gap-2'>
                                                            <p>قسيمة مشتريات</p>
                                                            <p className='text-[#C50D0D]'>في حالة الدفع كاش عند الاستلام</p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className='w-full flex justify-center items-center gap-2'>
                                        <Image src={lineCircle} alt='line circle' className='w-1/5 h-8' />
                                        <Link href='/return-policy' className='min-w-max text-[#001C63] max-md:text-xs'>اضغط هنا للاطلاع على سياسة الاسترجاع</Link>
                                        <Image src={lineArrow} alt='line arrow' className='w-1/5 h-6' />
                                    </span>
                                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                                        <input type='submit' value='تأكيد الطلب' disabled className='w-1/4 max-md:w-2/4 p-2 bg-[#8E8E93] shadow-xl rounded-tr-full rounded-bl-full text-center font-bold cursor-pointer' />
                                        <p className='text-[#FF0209]'>معذرة لا يمكنك إرجاع هذا المنتج</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReturnProduct

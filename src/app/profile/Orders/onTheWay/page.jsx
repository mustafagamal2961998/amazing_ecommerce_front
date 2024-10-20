'use client'
import Image from 'next/image'
import cloth from '../../../../assets/dashboard/clothes1.svg'
import orderTracking from '../../../../assets/profile/orderTracking.svg'
import returnProduct from '../../../../assets/profile/returnProduct.svg'
import Navbar from '../../../../components/Navbar/Navbar'
import ProfileSidebar from '../../ProfileSidebar'
import Header from '../Header'
import Link from 'next/link'
import { useStatusContext } from '../../../../Utils/Status/statusContext'

const OnTheWay = () => {

    const { sidebar } = useStatusContext()

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            <div className={`w-full ${sidebar ? 'max-md:hidden' : ''} max-md:p-5 mt-12 mb-12 flex flex-col gap-8`}>
                <Header />
                <div className='w-full flex flex-col justify-center items-center gap-10'>
                    <div className='w-full flex flex-col justify-center items-center gap-1'>
                        <div className='w-full flex items-center justify-center gap-14 max-md:flex-col max-md:gap-2 p-3  rounded-tr-3xl rounded-tl-3xl bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>تاريخ الطلب</p>
                                <p className='text-[#00B6A9]'>16 يوليو 2014</p>
                            </span>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>حالة الطلب</p>
                                <p className='text-[#00B6A9]'>لم يتم الشحن بعد</p>
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
                        <div className='w-full p-5 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
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
                            <div className='w-1/4 max-md:w-3/4 max-md:pb-10 flex flex-col items-center justify-center gap-3'>
                                <Link href={`/profile/orders/onTheWay/tracking/1`} className='w-full h-[40px] flex justify-evenly items-center shadow-lg bg-[#FFCC00] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                                    <p>تتبع الطلب</p>
                                    <Image src={orderTracking} alt='order tracking' className='w-6 h-6 cursor-pointer' />
                                </Link>
                                <Link href={`/profile/orders/onTheWay/return/1`} className='w-full h-[40px] md:mb-10 flex justify-evenly items-center shadow-lg bg-[#FF3B30] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                                    <p> إرجاع المنتج</p>
                                    <Image src={returnProduct} alt='return product' className='w-6 h-6 cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                        <p className='m-auto text-[#FF0209] -mt-10'>هذا المنتج قابل للإرجاع حتى 2 أغسطس 2024</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-1'>
                        <div className='w-full flex items-center justify-center gap-14 max-md:flex-col max-md:gap-2 p-3  rounded-tr-3xl rounded-tl-3xl bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>تاريخ الطلب</p>
                                <p className='text-[#00B6A9]'>16 يوليو 2014</p>
                            </span>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>حالة الطلب</p>
                                <p className='text-[#00B6A9]'>لم يتم الشحن بعد</p>
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
                        <div className='w-full p-5 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
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
                            <div className='w-1/4 max-md:w-3/4 max-md:pb-10 flex flex-col items-center justify-center gap-3'>
                                <Link href={`/profile/orders/onTheWay/tracking/1`} className='w-full h-[40px] flex justify-evenly items-center shadow-lg bg-[#FFCC00] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                                    <p>تتبع الطلب</p>
                                    <Image src={orderTracking} alt='order tracking' className='w-6 h-6 cursor-pointer' />
                                </Link>
                                <Link href={`/profile/orders/onTheWay/return/1`} className='w-full h-[40px] md:mb-10 flex justify-evenly items-center shadow-lg bg-[#FF3B30] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                                    <p> إرجاع المنتج</p>
                                    <Image src={returnProduct} alt='return product' className='w-6 h-6 cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                        <p className='m-auto text-[#FF0209] -mt-10'>هذا المنتج قابل للإرجاع حتى 2 أغسطس 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnTheWay



'use client'
import Image from 'next/image'
import cloth from '../../../../../../assets/dashboard/clothes1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import timer from '../../../../../../assets/dashboard/timer.svg'
import boxTime from '../../../../../../assets/dashboard/box-time.svg'
import shipping from '../../../../../../assets/dashboard/shipping.svg'
import boxTick from '../../../../../../assets/dashboard/box-tick.svg'
import dots from '../../../../../../assets/dashboard/dots.svg'
import loading from '../../../../../../assets/profile/loading.svg'
import greenTickCircle from '../../../../../../assets/dashboard/greenTickCircle.svg'
import grayTickCircle from '../../../../../../assets/dashboard/grayTickCircle.svg'
import Navbar from '../../../../../../components/Navbar/Navbar'
import Header from '../../../Header'
import ProfileSidebar from '../../../../ProfileSidebar'
import { useStatusContext } from '../../../../../../Utils/Status/statusContext'

const Tracking = ({params}) => {
    
    const productId = params.productId;
    const { sidebar } = useStatusContext();

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            <div className={`w-full ${sidebar ? 'max-md:hidden' : ''} max-md:p-5 mt-12 mb-12 flex flex-col gap-8`}>
                <Header />
                <form className='w-full flex flex-col justify-center items-center gap-10'>
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
                        <div className='w-full p-5 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                            <div className='flex items-center gap-3 max-md:flex-col max-md:justify-center'>
                                <div className='flex flex-col justify-center items-center gap-3'>
                                    <span className='flex flex-row-reverse justify-center items-center gap-2'>
                                        <FontAwesomeIcon
                                        icon={faStar}
                                        className='w-full duration-200 text-yellow-500'
                                        />
                                        <FontAwesomeIcon
                                        icon={faStar}
                                        className='w-full duration-200 text-yellow-500'
                                        />
                                        <FontAwesomeIcon
                                        icon={faStar}
                                        className='w-full duration-200 text-yellow-500'
                                        />
                                        <FontAwesomeIcon
                                        icon={faStar}
                                        className='w-full duration-200 text-yellow-500'
                                        />
                                        <FontAwesomeIcon
                                        icon={faStar}
                                        className='w-full duration-200 text-gray-300'
                                        />
                                    </span>
                                    <Image src={cloth} alt='cloth' className='w-full' />
                                </div>
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
                            <div className='w-2/4 flex flex-col items-start gap-5'>
                                <p className='font-medium text-lg'>تتبع الشحنة</p>
                                <div className='flex gap-2'>
                                    <span className='flex flex-col justify-center items-center gap-2'>
                                        <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
                                        <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
                                    </span>
                                    <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#FEF5A8]">
                                        <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                        <p className="text-sm">قيد المراجعة</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 '>
                                    <span className='flex flex-col justify-center items-center gap-2'>
                                        <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
                                        <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
                                    </span>
                                    <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#FEE1A8]">
                                        <Image src={boxTime} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                        <p className="text-sm">قيد التحضير</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 '>
                                    <span className='flex flex-col justify-center items-center gap-2'>
                                        <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
                                        <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
                                    </span>
                                    <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#F2FEA8]">
                                        <Image src={shipping} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                        <p className="text-sm">قيد الشحن</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 '>
                                    <span className='flex flex-col justify-center items-center gap-2'>
                                        <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
                                        <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
                                    </span>
                                    <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#C9FEA8]">
                                        <Image src={boxTick} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                        <p className="text-sm">تم تسليمها</p>
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <Image src={grayTickCircle} alt='done' className='w-full h-[20px]' />
                                    <Image src={loading} alt='loading' className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Tracking

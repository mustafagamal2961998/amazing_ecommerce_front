'use client'
import Image from 'next/image'
import cloth from '../../../../../../assets/dashboard/clothes1.svg'
import item from '../../../../../../assets/profile/item.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Navbar from '../../../../../../components/Navbar/Navbar'
import ProfileSidebar from '../../../../ProfileSidebar'
import Header from '../../../Header'
import { useStatusContext } from '../../../../../../Utils/Status/statusContext'

const Notes = () => {
    const [isProductDeliveredOnTime, setIsProductDeliveredOnTime] = useState(true);
    const [isProductAsDescribed, setIsProductAsDescribed] = useState(true);
    const [isServiceFastAndExcellent, setIsServiceFastAndExcellent] = useState(true);
    const [isPriceFairForQuality, setIsPriceFairForQuality] = useState(false);
    const { sidebar } = useStatusContext()

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            <div className={`w-full ${sidebar ? 'max-md:hidden' : ''} max-md:p-5 mt-12 mb-12 flex flex-col gap-8`}>
                <Header />
                <form className='relative w-full flex flex-col justify-center items-center gap-10'>
                    <div className='w-full flex flex-col justify-center items-center gap-1'>
                        <div className='w-full flex items-center justify-center gap-14 max-md:flex-col max-md:gap-2 p-3 rounded-tr-3xl rounded-tl-3xl bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>تاريخ الطلب</p>
                                <p className='text-[#5E6DA8]'>16 يوليو 2014</p>
                            </span>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>حالة الطلب</p>
                                <p className='text-[#5E6DA8]'>تم التسليم</p>
                            </span>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>تاريخ التسليم</p>
                                <p className='text-[#5E6DA8]'>17 يوليو 2014</p>
                            </span>
                            <span className='flex flex-col justify-center items-center gap-2'>
                                <p className='text-lg font-bold'>قيمة الطلب</p>
                                <p className='text-[#5E6DA8]'>500 ر.س</p>
                            </span>
                        </div>
                        <div className='w-full p-5 max-md:pb-14 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
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
                            <div className='w-2/4 max-md:w-full flex flex-col gap-5'>
                            <div className='w-3/4 max-md:w-full flex flex-col items-center gap-5 ml-auto'>
                                <div className='w-full flex items-center justify-between max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                    <span className='flex items-center gap-2'>
                                        <Image src={item} alt='item' className='w-4 h-4' />
                                        <p className='font-bold'>هل وصل المنتج في موعده ؟</p>
                                    </span>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsProductDeliveredOnTime(true)}>
                                            <p>نعم</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${isProductDeliveredOnTime ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {isProductDeliveredOnTime && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsProductDeliveredOnTime(false)}>
                                            <p>لا</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${!isProductDeliveredOnTime ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {!isProductDeliveredOnTime && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                    <span className='flex items-center gap-2'>
                                        <Image src={item} alt='item' className='w-4 h-4' />
                                        <p className='font-bold'>هل يبدو المنتج كما هو في الوصف ؟</p>
                                    </span>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsProductAsDescribed(true)}>
                                            <p>نعم</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${isProductAsDescribed ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {isProductAsDescribed && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsProductAsDescribed(false)}>
                                            <p>لا</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${!isProductAsDescribed ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {!isProductAsDescribed && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                    <span className='flex items-center gap-2'>
                                        <Image src={item} alt='item' className='w-4 h-4' />
                                        <p className='font-bold'>هل الخدمة سريعة و رائعة ؟</p>
                                    </span>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsServiceFastAndExcellent(true)}>
                                            <p>نعم</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${isServiceFastAndExcellent ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {isServiceFastAndExcellent && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsServiceFastAndExcellent(false)}>
                                            <p>لا</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${!isServiceFastAndExcellent ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {!isServiceFastAndExcellent && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between max-md:justify-center max-md:gap-3 max-md:flex-col'>
                                    <span className='flex items-center gap-2'>
                                        <Image src={item} alt='item' className='w-4 h-4' />
                                        <p className='font-bold'>هل السعر مناسب مقابلة بجودة المنتج ؟</p>
                                    </span>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsPriceFairForQuality(true)}>
                                            <p>نعم</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${isPriceFairForQuality ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {isPriceFairForQuality && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-1 cursor-pointer select-none' onClick={() => setIsPriceFairForQuality(false)}>
                                            <p>لا</p>
                                            <span className={`w-6 h-6 flex justify-center items-center rounded-full p-1 ${!isPriceFairForQuality ? 'bg-[#34A853]' : 'bg-[#D9D9D9]'} shadow-inner`}>
                                                {!isPriceFairForQuality && <FontAwesomeIcon icon={faCheck} className='w-4 h-4' />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='w-full flex flex-col justify-center items-center gap-3'>
                                    <p className='ml-auto font-bold'>أضف تعليق</p>
                                    <input required type='text' placeholder='الرجاء ادخل تعليق عن تجربتك مع الخدمة المقدمة' className='w-full p-10 rounded-xl outline-none shadow-inner bg-[#FFFFFF] placeholder:text-center placeholder:text-[#7F7B7F]' />
                                    <input type='submit' value='أرسل ملاحظات' className='w-1/4 max-md:w-2/4 p-2 bg-[#34C759] shadow-xl rounded-tr-full rounded-bl-full text-center font-bold cursor-pointer' />
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

export default Notes
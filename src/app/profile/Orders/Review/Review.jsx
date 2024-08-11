import Image from 'next/image'
import cloth from '../../../../assets/dashboard/clothes1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Review = () => {
    const [rating, setRating] = useState(4);

    const handleStarClick = (value) => {
      setRating(value);
    };

  return (
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
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon
                                key={star}
                                icon={faStar}
                                className={`w-full cursor-pointer duration-200 ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => handleStarClick(star)}
                                />
                            ))}
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
                <div className='w-2/4 max-md:w-full flex flex-col justify-center items-center gap-3'>
                    <p className='ml-auto font-bold'>عنوان التقييم</p>
                    <input required type='text' placeholder='ما هو اهم شئ يجب معرفته عن المنتج؟' className='w-full p-2 rounded-xl outline-none shadow-inner bg-[#FFFFFF] placeholder:text-center placeholder:text-[#7F7B7F]' />
                    <p className='ml-auto font-bold'>أضف تقييم</p>
                    <textarea required placeholder='ما الذي أحببته أو لم تحبه؟ لماذا قمت باستخدام هذا المنتج' className='w-full min-h-[250px] p-2 rounded-xl outline-none bg-[#FFFFFF] shadow-inner relative placeholder:absolute placeholder:top-2/4 placeholder:left-2/4 placeholder:-translate-x-2/4 placeholder:-translate-y-2/4 placeholder:text-center placeholder:text-[#7F7B7F]'></textarea>
                    <input type='submit' value='نشر التقييم' className='w-1/4 max-md:w-2/4 p-2 bg-[#34C759] shadow-xl rounded-tr-full rounded-bl-full text-center font-bold cursor-pointer' />
                </div>
                <p className='w-max max-md:text-sm absolute right-14 bottom-5 max-md:right-5 text-[#FF0209]'>سنقوم بإخطارك عبر البريد الإلكتروني بمجرد معالجة تقييمك</p>
            </div>
        </div>
    </form>
  )
}

export default Review

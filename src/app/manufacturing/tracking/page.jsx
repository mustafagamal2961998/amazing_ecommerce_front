import '../style.css'

import Image from 'next/image'
import Link from 'next/link'
import titleIcon from '../../../assets/manufacturing/track order icon.svg'
import facebookLogo from '../../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../../assets/manufacturing/whatsapp.svg'

const Tracking = () => {
  return (
    <div className='manufacturing w-full min-h-screen p-14 bg-[#CAE4F2] flex flex-col items-center gap-4'>
        <span className='relative'>
            <Image 
            src={titleIcon} 
            alt='title icon'
            className='w-full'
            />
            <h2 className='text-white text-2xl font-bold select-none absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>متابعة حالة الطلب</h2>
        </span>
        <form className='w-2/4 p-10 bg-[#D9D9D9] rounded-xl flex flex-col justify-center items-center gap-5'>
            <h3 className='font-bold'>الرجاء إدخال رقم الطلب ورقم الهاتف المسجل في الطلب</h3>
            <span className='flex items-center gap-3'>
                <p className='font-bold'>رقم الطلب</p>
                <input required type='text' className='w-fit p-2 bg-[#FFFFFF] outline-none text-center placeholder:text-[#979797] placeholder:font-bold rounded-md' placeholder='112' />
            </span>
            <span className='flex items-center gap-3'>
                <p className='font-bold'>رقم الهاتف</p>
                <input required type='text' className='w-fit p-2 bg-[#FFFFFF] outline-none text-center placeholder:text-[#979797] placeholder:font-bold rounded-md' placeholder='+201129240117' />
            </span>
            <Link 
            href={`/manufacturing/tracking/1`}
            className='px-10 py-3 rounded-2xl bg-[#20B038] text-white text-center font-bold shadow-lg'
            >
                دخول
            </Link>
        </form>
        <div className='flex justify-center items-center gap-4 mt-auto ml-auto'>
            <Link
                href={`https://www.facebook.com`}
                target='_blank'
                title='facebook page link'
            >
                <Image
                    src={facebookLogo}
                    alt='facebook page link'
                    loading='lazy'
                    className='w-full h-full'
                />
            </Link>
            <Link
                href={`https://www.youtube.com`}
                target='_blank'
                title='youtube link'
            >
                <Image
                    src={youtubeLogo}
                    alt='youtube channel link'
                    loading='lazy'
                    className='w-full h-full'
                />
            </Link>
            <Link
                href={`https://www.facebook.com`}
                target='_blank'
                title='whatsapp link'
            >
                <Image
                    src={whatsappLogo}
                    alt='whatsapp link'
                    loading='lazy'
                    className='w-full h-full'
                />
            </Link>
        </div>
    </div>
  )
}

export default Tracking

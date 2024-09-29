import '../style.css'

import Image from 'next/image'
import Link from 'next/link'
import titleIcon from '../../../assets/manufacturing/track order icon.svg'
import facebookLogo from '../../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../../assets/manufacturing/whatsapp.svg'
import Navbar from '../../../components/Navbar/Navbar'

const Tracking = () => {
  return (
    <div className='w-full flex flex-col'>
        <Navbar />
        <div className='manufacturing w-full min-h-screen p-14 bg-[#CAE4F2] flex flex-col items-center gap-4'>
            <span className='relative'>
                <Image 
                src={titleIcon} 
                alt='title icon'
                className='w-full'
                />
                <h2 className='text-white text-2xl max-md:text-base font-bold select-none absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>متابعة حالة الطلب</h2>
            </span>
            <form className='w-2/4 max-md:w-full max-md:m-4 p-10 bg-[#D9D9D9] rounded-xl flex flex-col justify-center items-center gap-5'>
                <h3 className='font-bold max-md:text-sm'>الرجاء إدخال رقم الطلب ورقم الهاتف المسجل في الطلب</h3>
                <span className='flex items-center gap-3'>
                    <p className='font-bold max-md:text-sm'>رقم الطلب</p>
                    <input required type='text' className='w-fit p-2 bg-[#FFFFFF] outline-none text-center max-md:placeholder:text-sm placeholder:text-[#979797] md:placeholder:font-bold rounded-md' placeholder='112' />
                </span>
                <span className='flex items-center gap-3'>
                    <p className='font-bold max-md:text-sm'>رقم الهاتف</p>
                    <input required type='text' className='w-fit p-2 bg-[#FFFFFF] outline-none text-center placeholder:text-[#979797] max-md:placeholder:text-sm md:placeholder:font-bold rounded-md' placeholder='+201129240117' />
                </span>
                <Link 
                href={`/manufacturing/tracking/1`}
                className='px-10 max-md:px-7 py-3 max-md:py-1 rounded-2xl bg-[#20B038] text-white text-center font-bold max-md:font-normal shadow-lg'
                >
                    دخول
                </Link>
            </form>
            <div className='flex justify-center items-center gap-4 mt-auto md:ml-auto'>
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
    </div>
  )
}

export default Tracking

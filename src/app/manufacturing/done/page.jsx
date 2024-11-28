'use client'
import '../style.css'
import logo from '../../../assets/manufacturing/logo.svg'
import shakehands from '../../../assets/manufacturing/shakehands.svg'
import emailTelephone from '../../../assets/manufacturing/email-telephone.svg'
import Image from 'next/image'
import Link from 'next/link'
import facebookLogo from '../../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../../assets/manufacturing/whatsapp.svg'
import Navbar from '../../../components/Navbar/Navbar'
import { useStatusContext } from '../../../Utils/Status/statusContext'
import { useEffect, useState } from 'react'

const Done = () => {
  const [orderNumber, setOrderNumber] = useState(null);
    
    useEffect(() => {   
        window.localStorage.getItem('orderNumber') && setOrderNumber(window.localStorage.getItem('orderNumber'));

    }, [])

    const handleExit = () => {
        window.localStorage.removeItem('orderNumber');
        window.location.href = '/';
    }

  return (
    <div className='w-full flex flex-col'>
        <Navbar />
        <div className='manufacturing w-full min-h-screen p-14 bg-[#17616642] flex flex-col justify-start items-center gap-12'>
            <Image
            src={logo}
            alt='logo'
            className='w-48'
            />
            <Image
            src={shakehands}
            alt='done'
            className='w-48 z-10'
            />
            <div className='relative w-[800px] max-md:w-full h-[300px] text-center p-5 -mt-20 bg-[#17616642] rounded-2xl flex justify-center items-center'>
                <h2 className='text-3xl max-md:text-base font-bold leading-relaxed z-10'>شكرا لتواصلك مع شركة خلابة سوف نقوم بإرسال عرض السعر في أقرب وقت وسيتم التواصل معكم من قِبل أحد مندوبينا</h2>
                <Image
                src={emailTelephone}
                alt='email-telephone'
                className='w-28 max-md:w-20 absolute -right-14 max-md:-right-10 bottom-8'
                />
            </div>
            <div className='w-1/4 max-md:w-full flex flex-col justify-center items-center gap-4'>
                <p className='font-bold text-xl max-md:text-base text-[#62010D]'>رقم الطلب الخاص بك هو</p>
                <span className='w-full bg-[#17616642] text-[#62010D] text-3xl max-md:text-base font-bold p-6 rounded-full flex justify-center items-center'>
                    <p>{orderNumber}</p>
                </span>
                <p className='font-bold text-[#FF0000] max-md:text-sm'>الرجاء الاحتفاظ بهذا الرقم لمتابعة حالة الطلب</p>
            </div>
            <button 
            className='px-20 py-4 font-bold bg-[#01A185] hover:bg-[#86CEC1] hover:text-black duration-200 text-white rounded-xl max-md:text-sm max-md:font-normal'
            onClick={handleExit}
            >
                الصفحة الرئيسية
            </button>
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

export default Done

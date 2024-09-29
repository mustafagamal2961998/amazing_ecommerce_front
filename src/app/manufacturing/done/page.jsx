import '../style.css'
import logo from '../../../assets/manufacturing/logo.svg'
import shakehands from '../../../assets/manufacturing/shakehands.svg'
import emailTelephone from '../../../assets/manufacturing/email-telephone.svg'
import Image from 'next/image'
import Link from 'next/link'
import facebookLogo from '../../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../../assets/manufacturing/whatsapp.svg'

const Done = () => {
  return (
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
        <div className='relative w-[800px] h-[300px] text-center p-5 -mt-20 bg-[#17616642] rounded-2xl flex justify-center items-center'>
            <h2 className='text-3xl font-bold leading-relaxed z-10'>شكرا لتواصلك مع شركة خلابة سوف نقوم بإرسال عرض السعر في أقرب وقت وسيتم التواصل معكم من قِبل أحد مندوبينا</h2>
            <Image
            src={emailTelephone}
            className='w-28 absolute -right-14 bottom-8'
            />
        </div>
        <div className='w-1/4 flex flex-col justify-center items-center gap-4'>
            <p className='font-bold text-xl text-[#62010D]'>رقم الطلب الخاص بك هو</p>
            <span className='w-full bg-[#17616642] text-[#62010D] text-3xl font-bold p-6 rounded-full flex justify-center items-center'>
                <p>112</p>
            </span>
            <p className='font-bold text-[#FF0000]'>الرجاء الاحتفاظ بهذا الرقم لمتابعة حالة الطلب</p>
        </div>
        <Link 
        href='/manufacturing'
        className='px-20 py-4 font-bold bg-[#0C042D] hover:bg-[#0c042dc9] duration-200 text-white rounded-xl'
        >
            الصفحة الرئيسية
        </Link>
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

export default Done

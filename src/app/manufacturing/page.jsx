import './style.css'
import Image from 'next/image'
import logo from '../../assets/manufacturing/logo.svg'
import welcome from '../../assets/manufacturing/welcome.svg'
import Link from 'next/link'
import facebookLogo from '../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../assets/manufacturing/whatsapp.svg'
import Navbar from '../../components/Navbar/Navbar'

const Manufacturing = () => {
  return (
    <div className='w-full flex flex-col'>
        <Navbar />
        <div className='manufacturing w-full min-h-screen p-14 bg-[#CAE4F2] flex flex-col items-center gap-4'>
            <Image 
            src={logo} 
            alt='logo'
            className='w-48'
            />
            <div className='w-[800px] max-md:w-full h-[300px] max-md:h-[150px] text-center p-5 bg-[#17616642] rounded-2xl flex justify-center items-center'>
                <h2 className='text-3xl max-md:text-base font-bold leading-relaxed z-10'>مرحباً بكم في قسم التصنيع للغير بشركة خلابة لتصنيع الملابس</h2>
            </div>
            <div className='w-full flex justify-evenly items-center'>
                <div className='flex flex-col gap-4'>
                    <Link
                    href='/manufacturing/create'
                    title='طلب تصنيع ملابس'
                    className='w-48 h-fit shadow-md text-center font-bold max-md:font-normal rounded-xl p-4 max-md:p-2 text-white bg-[#375EF9] hover:bg-[#375ef9be] duration-200'
                    >
                        طلب جديد
                    </Link>
                    <Link
                    href='/manufacturing/tracking'
                    title='متابعة طلب التصنيع'
                    className='w-48 h-fit shadow-md text-center font-bold max-md:font-normal rounded-xl p-4 max-md:p-2 text-white bg-[#FF0000] hover:bg-[#ff0000b9] duration-200'
                    >
                        متابعة الطلبات
                    </Link>
                </div>
                <Image 
                src={welcome} 
                alt='welcome'
                className='w-96 max-md:hidden -mt-14'
                />
            </div>
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

export default Manufacturing

import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import cartNav from '../../assets/cartNav.png';
import favNav from '../../assets/favNav.png';
import Image from 'next/image';
import Logo from '../../components/Logo/logo.svg'
import ProfileImg from '../../assets/profile.jpg'

const Navbar = () => {
  return (
    <nav className='flex flex-col relative z-50'>
        <div className='h-[50px] p-5 flex flex-row-reverse justify-between items-center pb-5 pt-5 pr-[60px] pl-[60px]'>
            <div className='flex flex-row-reverse gap-3 items-center mr-auto'>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faFacebook} className='duration-200 hover:text-blue-400 text-blue-500' />
                </Link>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faInstagram} className='duration-200 hover:text-slate-400' />
                </Link>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faTiktok} className='duration-200 hover:text-slate-400' />
                </Link>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faTwitter} className='duration-200 hover:text-slate-400' />
                </Link>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faLinkedin} className='duration-200 hover:text-blue-400 text-blue-500' />
                </Link>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faWhatsapp} className='duration-200 hover:text-green-400 text-green-500' />
                </Link>
                <Link href='https://www.facebook.com' target={'_blank'}>
                    <FontAwesomeIcon icon={faYoutube} className='duration-200 hover:text-red-400 text-red-500' />
                </Link>
            </div>
            <span className='search-input relative'>
                <input type='text' placeholder='بحث عن منتج' className='p-1 w-[180%] border-2 border-gray-300 rounded-full outline-none' />
                <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-[-120px] top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
        </div>
        <div className='nav h-[71px] p-5 flex flex-row justify-between pb-5 pt-5 pr-[60px] pl-[60px]'>
            <Link href='/'>
                <Image src={Logo} className='w-[170px] h-[38px] ml-auto' alt='Amazing' />
            </Link>
            <div className='links flex gap-5 items-center text-white text-[14px]'>
                <Link className='relative' href='/'>دولاب رجالي</Link>
                <Link className='relative' href='/'>دولاب نسائي</Link>
                <Link className='relative' href='/'>دولاب أطفالي</Link>
            </div>
            <div className='profile flex flex-row-reverse items-center gap-5'>
                <Link className='flex flex-row-reverse gap-5 items-center' href='/profile'>
                    <Image src={ProfileImg} className='w-[40px] h-[40px] rounded-full' alt='Amazing' />
                    <p className='text-white text-[12px]'>أحمد حسن</p>
                </Link>
                <span className='flex flex-row-reverse gap-3'>
                    <Link className='relative flex flex-row-reverse gap-5 items-center' href='cart'>
                        <Image src={cartNav} width={20} height={20} alt='cart' className='w-[20px] h-[20px]' />
                        <span className='absolute -right-1 top-0 bg-red-500 text-white rounded-full text-[8px] w-[12px] h-[12px] text-center'>
                            1
                        </span>
                    </Link>
                    <Link className='relative flex flex-row-reverse gap-5 items-center' href='profile'>
                        <Image src={favNav} width={20} height={20} alt='cart' className='w-[16px] h-[16px]' />
                        <span className='absolute -right-1 top-0 bg-red-500 text-white rounded-full text-[8px] w-[12px] h-[12px] text-center'>
                            1
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
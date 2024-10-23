'use client';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter, faWhatsapp, faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import cartNav from '../../assets/cartNav.png';
import favNav from '../../assets/favNav.png';
import purpleFav from '../../assets/purpleFav.svg';
import purpleCart from '../../assets/purpleCart.svg';
import Image from 'next/image';
import Logo from '../../components/Logo/logo.svg';
import ProfileImg from '../../assets/profile.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_SECTIONS } from '../../Utils/APIs';
import { GetUserInfo } from '../../Utils/Auth/UserInfo';
import { useStatusContext } from '../../Utils/Status/statusContext';
import Cookies from 'js-cookie';

const socialLinks = [
    { icon: faFacebook, url: 'https://www.facebook.com' },
    { icon: faInstagram, url: 'https://www.instagram.com' },
    { icon: faTiktok, url: 'https://www.tiktok.com' },
    { icon: faTwitter, url: 'https://www.twitter.com' },
    { icon: faLinkedin, url: 'https://www.linkedin.com' },
    { icon: faWhatsapp, url: 'https://www.whatsapp.com' },
    { icon: faYoutube, url: 'https://www.youtube.com' },
];

const Navbar = () => {
    const { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useStatusContext();
    const [sections, setSections] = useState([]);

    const getSections = async () => {
        const response = await axios.get(GET_SECTIONS);
        setSections(response.data.data);
    };

    const token = Cookies.get('token');
    const checkIsLoggedIn = async () => {
        if (token) {
            await GetUserInfo().then((data) => setUserInfo(data));
            setIsLoggedIn(true);
        }else {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        getSections();
        checkIsLoggedIn();
    }, []);

    return (
        <nav className='flex flex-col relative z-50'>
            <div className={`bg-white h-[50px] p-5 max-md:p-2 flex justify-between items-center md:pr-[60px] md:pl-[60px]`}>
                <div className={`flex flex-row-reverse gap-3 max-md:gap-[2px] items-center`}>
                    {socialLinks.map((link, index) => (
                        <Link key={index} href={link.url} target='_blank'>
                            <FontAwesomeIcon icon={link.icon} className='duration-200 hover:text-slate-400' />
                        </Link>
                    ))}
                </div>
                <div className='profile flex flex-row-reverse items-center gap-2'>
                    {isLoggedIn ? (
                        <Link className='flex flex-row-reverse gap-5 items-center' href='/profile'>
                            <Image src={userInfo?.avatar || ProfileImg} width={100} height={100} className='w-[40px] h-[40px] rounded-full' alt='avatar' />
                            <p className='font-bold text-[12px]'>{`${userInfo?.first_name || 'User'} ${userInfo?.last_name || ''}`}</p>
                        </Link>
                    ) : (
                        <Link className='flex flex-row-reverse gap-5 items-center' href='/auth/login'>
                            <Image src={ProfileImg} width={100} height={100} className='w-[40px] h-[40px] rounded-full' alt='avatar' />
                            <p className='font-bold text-[12px]'>تسجيل الدخول</p>
                        </Link>
                    )}
                    <span className='flex flex-row-reverse gap-3'>
                        <Link className='relative flex flex-row-reverse gap-5 items-center' href='cart'>
                            <Image src={purpleCart} width={20} height={20} alt='cart' className='w-[20px] h-[20px]' />
                            <span className='absolute -right-1 top-0 bg-red-500 text-white rounded-full text-[8px] w-[12px] h-[12px] text-center'>1</span>
                        </Link>
                        <Link className='relative flex flex-row-reverse gap-5 items-center' href='profile'>
                            <Image src={purpleFav} width={20} height={20} alt='fav' className='w-[20px] h-[20px]' />
                            <span className='absolute -right-1 top-0 bg-red-500 text-white rounded-full text-[8px] w-[12px] h-[12px] text-center'>1</span>
                        </Link>
                    </span>
                </div>
            </div>
            <div className='nav bg-gradient-to-br from-[#8AD0C3] to-[#00B6A9] h-[71px] max-md:h-[140px] p-5 flex flex-row justify-between max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-2 pb-5 pt-5 pr-[60px] pl-[60px]'>
                <Link href='/'>
                    <Image src={Logo} className='w-[170px] h-[38px] ml-auto' alt='Amazing' />
                </Link>
                <div className='links flex gap-5 items-center text-white text-[14px]'>
                    {sections.map((section) => (
                        <Link key={section.id} className='relative' href={`/section/${section.id}/${section.slug}`}>
                            {section.name}
                        </Link>
                    ))}
                </div>
                <span className='relative w-[15%] max-md:w-full'>
                    <input type='text' placeholder='بحث عن منتج' className='w-full p-2 text-sm text-white placeholder:text-white placeholder:pr-2 bg-transparent border-[1px] border-white rounded-full outline-none' />
                    <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-white absolute left-5 top-[60%] -translate-y-2/4 -translate-x-2/4' />
                </span>
            </div>
        </nav>
    );
};

export default Navbar;

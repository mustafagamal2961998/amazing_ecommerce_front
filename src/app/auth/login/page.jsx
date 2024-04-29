import './style.css'
import Image from "next/image"
import "react-datepicker/dist/react-datepicker.css";
import purpleLogo from '../../../components/Logo/purpleLogo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEnvelope, faEye, faPhone, faUser, faVenusMars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import AppleIcon from '../../../assets/apple.png'
import GoogleIcon from '../../../assets/google.png'
import FacebookIcon from '../../../assets/facebook.png'
import Slogan from '../../../components/Slogan/Slogan';

const Login = () => {
  return (  
    <div className='login-con flex flex-row-reverse max-md:flex-col'>
    <Slogan />
      <div className='flex flex-col justify-center items-center gap-5 text-center max-md:w-full p-5 w-[40%]'>
        <Image src={purpleLogo} className='max-md:hidden' alt='Amazing' />
        <p>تسجيل الدخول</p>
        <form className='mb-5'>
            <span className='relative'>
                <input type='email' placeholder='البريد الالكتروني' className='w-[75%] text-[12px] p-3 mb-3 outline-none ' />
                <FontAwesomeIcon icon={faEnvelope} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <span className='relative'>
                <input type='password' placeholder='كلمة المرور' className='w-[75%] text-[12px] p-3 mb-3 outline-none ' />
                <FontAwesomeIcon icon={faEye} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <input type='submit' value='تسجيل الدخول' className='login w-[75%] text-[12px] text-white cursor-pointer p-3 mb-3 mt-5 outline-none' />
            <p className='mb-5'>أو</p>
            <span className='flex flex-row-reverse justify-center items-center gap-3 mb-7 mt-7'>
                <Link href='/'>
                    <Image src={AppleIcon} className='w-[55px]' alt='login with apple' />
                </Link>
                <Link href='/'>
                    <Image src={GoogleIcon} className='w-[55px]' alt='login with google' />
                </Link>
                <Link href='/'>
                    <Image src={FacebookIcon} className='w-[55px]' alt='login with facebook' />
                </Link>
            </span>
            <span> ليس لديك حساب ؟ <Link className='login-link' href='/auth/signup'>حساب جديد </Link></span>
        </form>
        <span className='relative'>
            <Link href='/' className='shopping-btn block w-[300px] h-[50px] text-[12px] text-white rounded-[12px] mb-5'> 
                <h3 className='text-white absolute right-5 top-[40%] -translate-y-2/4 -translate-x-2/4'>تصفح المتجر</h3>         
            </Link>
            <FontAwesomeIcon icon={faArrowLeft} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-[40%] -translate-y-2/4 -translate-x-2/4' />
        </span>
      </div>
    </div>
  )
}

export default Login

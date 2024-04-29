import './style.css'
import Image from "next/image"
import "react-datepicker/dist/react-datepicker.css";
import purpleLogo from '../../../components/Logo/purpleLogo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faEye, faPhone, faUser, faVenusMars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import AppleIcon from '../../../assets/apple.png'
import GoogleIcon from '../../../assets/google.png'
import FacebookIcon from '../../../assets/facebook.png'
import Slogan from '../../../components/Slogan/Slogan';

const Signup = () => {
  return (
    <div className='signup flex flex-row-reverse max-md:flex-col'>
    <Slogan />
      <div className='flex flex-col justify-center items-center gap-5 text-center max-md:w-full p-5 w-[40%]'>
        <Image src={purpleLogo} className='max-md:hidden' alt='Amazing' />
        <p>حساب جديد</p>
        <form>
            <span className='relative'>
                <input type='text' placeholder='الاسم كامل' className='w-[62%] text-[12px] p-3 mb-3 outline-none' />
                <FontAwesomeIcon icon={faUser} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <span className='relative'>
                <input type='email' placeholder='البريد الالكتروني' className='w-[62%] text-[12px] p-3 mb-3 outline-none' />
                <FontAwesomeIcon icon={faEnvelope} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <span className='relative'>
                <input type='text' placeholder='رقم الجوال' className='w-[62%] text-[12px] p-3 mb-3 outline-none' />
                <FontAwesomeIcon icon={faPhone} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <span className='relative'>
                <select className="gender mb-3 w-[62%] text-[12px] p-2 outline-none">
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
                <FontAwesomeIcon icon={faVenusMars} className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <span className='custom-date-input relative'>
                <input type='date' placeholder='تاريخ الميلاد' className='w-[62%] text-[12px] p-3 mb-3 outline-none ' />
            </span>
            <span className='relative'>
                <input type='password' placeholder='كلمة المرور' className='w-[62%] text-[12px] p-3 mb-3 outline-none ' />
                <FontAwesomeIcon icon={faEye} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <input type='submit' value='تسجيل' className='signup-btn w-[62%] text-[12px] text-white cursor-pointer p-3 mb-3 mt-5 outline-none' />
            <p className='mb-2'>أو</p>
            <span className='flex flex-row-reverse justify-center items-center gap-3 mb-2'>
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
        </form>
        <span> لديك حساب بالفعل ؟<Link className='login-link mt-5' href='/auth/login' > تسجيل الدخول </Link></span>
      </div>
    </div>
  )
}

export default Signup

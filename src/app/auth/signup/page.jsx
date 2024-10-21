'use client'

import './style.css';
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import purpleLogo from '../../../components/Logo/purpleLogo.svg';
import Link from "next/link";
import AppleIcon from '../../../assets/apple.png';
import GoogleIcon from '../../../assets/google.png';
import FacebookIcon from '../../../assets/facebook.png';
import Slogan from '../../../components/Slogan/Slogan';
import nameIcon from '../../../assets/auth/name.svg';
import emailIcon from '../../../assets/auth/email.svg';
import numberIcon from '../../../assets/auth/number.svg';
import genderIcon from '../../../assets/auth/gender.svg';
import birthdayIcon from '../../../assets/auth/birthday.svg';
import eyeIcon from '../../../assets/auth/eye.svg';
import { useState } from 'react';
import LoadingSpinner from '../../../components/Loading/LoadingSpinner'
import { useStatusContext } from '../../../Utils/Status/statusContext'
import { handleAuth } from '../../../Utils/Auth/Auth'

const Signup = () => {

  const { isLoading, setIsLoading } = useStatusContext();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: 'male',
    birthday: '',
    password: ''
  })

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  return (
    <div className='signup flex flex-row-reverse max-md:flex-col'>
      <Slogan />
      <div className='flex flex-col justify-center items-center gap-5 text-center max-md:w-full p-5 w-[40%]'>
        <Image src={purpleLogo} className='max-md:hidden' alt='Amazing' />
        <p>حساب جديد</p>
        <form>
          <span className='relative'>
            <input
              name='name'
              type='text' 
              placeholder='الاسم كامل' 
              className='w-[62%] text-[12px] p-3 mb-3 outline-none'
              onChange={(e) => handleFormChange(e)} 
            />
            <Image 
              src={nameIcon} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-2/4 -translate-y-2/4 -translate-x-2/4' 
              alt='Amazing' 
            />
          </span>
          <span className='relative'>
            <input 
              name='email'
              type='email' 
              placeholder='البريد الالكتروني' 
              className='w-[62%] text-[12px] p-3 mb-3 outline-none'
              onChange={(e) => handleFormChange(e)} 
            />
            <Image 
              src={emailIcon} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-2/4 -translate-y-2/4 -translate-x-2/4' 
              alt='Amazing' 
            />
          </span>
          <span className='relative'>
            <input 
              name='phoneNumber'
              type='text'
              placeholder='رقم الجوال' 
              className='w-[62%] text-[12px] p-3 mb-3 outline-none'
              onChange={(e) => handleFormChange(e)} 
            />
            <Image 
              src={numberIcon} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-2/4 -translate-y-2/4 -translate-x-2/4' 
              alt='Amazing' 
            />
          </span>
          <span className='relative'>
            <select className="gender mb-3 w-[62%] text-[12px] p-2 outline-none"
            name='gender'
            onChange={(e) => handleFormChange(e)}
            >
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
            <Image 
              src={genderIcon} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-2/4 -translate-y-2/4 -translate-x-2/4' 
              alt='Amazing' 
            />
          </span>
          <span className='custom-date-input relative'>
            <input 
              name='birthday'
              type='date'
              placeholder='تاريخ الميلاد' 
              className='w-[62%] text-[12px] p-3 mb-3 outline-none'
              onChange={(e) => handleFormChange(e)} 
            />
            <Image 
              src={birthdayIcon} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-2/4 -translate-y-2/4 -translate-x-2/4 z-50' 
              alt='Amazing' 
            />
          </span>
          <span className='relative'>
            <input
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='كلمة المرور' 
              className='w-[62%] text-[12px] p-3 mb-3 outline-none'
              onChange={(e) => handleFormChange(e)} 
            />
            <Image 
              src={eyeIcon} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-6 top-2/4 -translate-y-2/4 -translate-x-2/4 cursor-pointer' 
              alt='Amazing'
              onClick={() => setShowPassword(!showPassword)}
            />
          </span>
        {
        isLoading ?
          <LoadingSpinner />
        :
          <input 
            type='submit' 
            value='تسجيل' 
            onClick={(e) => handleAuth(e, form, 'signup', setIsLoading)}
            className='w-[62%] text-md bg-gradient-to-r from-[#09A489B2] to-[#C9B10087] cursor-pointer p-3 mb-3 mt-5 outline-none' 
          />
        }
        </form>
        <span> لديك حساب بالفعل ؟<Link className='login-link mt-5' href='/auth/login'> تسجيل الدخول </Link></span>
      </div>
    </div>
  );
}

export default Signup;

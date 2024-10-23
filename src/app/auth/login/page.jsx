'use client';

import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';
import purpleLogo from '../../../components/Logo/purpleLogo.svg';
import Link from 'next/link';
import Slogan from '../../../components/Slogan/Slogan';
import email from '../../../assets/auth/email.svg';
import eye from '../../../assets/auth/eye.svg';
import blackArrow from '../../../assets/auth/blackArrow.svg';

import { useStatusContext } from '../../../Utils/Status/statusContext';
import LoadingSpinner from '../../../components/Loading/LoadingSpinner';
import { handleAuth } from '../../../Utils/Auth/Auth';
import { useState } from 'react';

const Login = () => {
  const { isLoading, setIsLoading, setIsLoggedIn } = useStatusContext();
  const [showPassword, setShowPassword] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: 'male',
    birthday: '',
    password: '',
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-row-reverse max-md:flex-col items-center justify-center bg-[#BCE3DC]'>
      <Slogan />
      <div className='flex flex-col justify-center items-center gap-5 text-center max-md:w-full p-5 w-[40%]'>
        <Image src={purpleLogo} className='max-md:hidden mb-4' alt='Amazing' />
        <p className='text-lg font-semibold text-black'>تسجيل الدخول</p>
        <form className='flex flex-col items-center w-full'>
          <span className='relative w-2/4'>
            <input 
              name='email'
              type='email' 
              placeholder='البريد الالكتروني' 
              className='w-full text-[12px] p-3 mb-3 outline-none border rounded-lg'
              onChange={handleFormChange} 
            />
            <Image 
              src={email} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-[42%] -translate-x-2/4 -translate-y-2/4'
              alt='email' 
            />
          </span>
          <span className='relative w-2/4'>
            <input 
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='كلمة المرور' 
              className='w-full text-[12px] p-3 mb-3 outline-none border rounded-lg'
              onChange={handleFormChange} 
            />
            <Image 
              src={eye} 
              className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-[42%] -translate-y-2/4 -translate-x-2/4 cursor-pointer' 
              alt='show password' 
              onClick={() => setShowPassword(!showPassword)}
            />
          </span>
          {
            isLoading ? (
              <LoadingSpinner />
            ) : (
              <input 
                type='submit' 
                value='تسجيل الدخول' 
                className='w-2/4 text-md bg-gradient-to-r from-[#09A489B2] to-[#C9B10087] cursor-pointer p-3 mb-3 mt-5 outline-none rounded-lg' 
                onClick={(e) => handleAuth(e, form, 'login', setIsLoading, setIsLoggedIn)}
              />
            )
          }
          <Link 
            href='/' 
            className='bg-gradient-to-r from-[#09A489B2] to-[#C9B10087] w-2/4 p-3 flex items-center justify-center text-[12px] rounded-[12px] mb-5 gap-2'>
            <h3 className='text-base'>تصفح المتجر</h3>         
            <Image 
              src={blackArrow} 
              className='w-[16px] h-[16px] text-gray-300' 
              alt='arrow'
            />
          </Link>
          <span> ليس لديك حساب ؟<Link className='login-link mt-5' href='/auth/signup'> حساب جديد </Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;

'use client'

import './style.css'
import { useEffect, useState, useMemo } from "react"
import Select from 'react-select'
import countryList from 'react-select-country-list'

import Image from "next/image"

import profilePicture from '../../assets/profile/profilePicture.png'
import edit from '../../assets/profile/edit.png'
import darkEdit from '../../assets/profile/darkEdit.png'
import information from '../../assets/profile/information.png'
import darkInformation from '../../assets/profile/darkInformation.png'
import location from '../../assets/profile/location.png'
import darkLocation from '../../assets/profile/darkLocation.png'
import addLocation from '../../assets/profile/addLocation.png'
import cards from '../../assets/profile/cards.png'
import darkCards from '../../assets/profile/darkCards.png'
import shop from '../../assets/profile/shop.png'
import darkShop from '../../assets/profile/darkShop.png'
import favourite from '../../assets/profile/favourite.png'
import darkFavourite from '../../assets/profile/darkFavourite.png'
import visa from '../../assets/profile/VISA.png'
import masterCard from '../../assets/profile/Mastercard.png'
import amex from '../../assets/profile/AMEX.png'
import discover from '../../assets/profile/discover.png'
import HomePage from "../../components/Home page/HomePage"
import ProductCard from "../../components/Products/ProductCard"
import { GET_PRODUCTS } from "../../Utils/Products/GetProducts/GET_PRODUCTS"

const profile = () => {
    const [products, setProducts] = useState([]);
    const [mode, setMode] = useState('information');
    const handleMode = (mode) => {
        setMode(mode)
    }

    const fetchProducts = async() => {
        const products = await GET_PRODUCTS();
        setProducts(products['products'].slice(5, 9));
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

  return (
    <div className='flex items-start gap-20 h-screen'>
      <aside className='w-1/4 flex flex-col justify-start items-center gap-20 p-5 bg-gradient-to-br from-[#252B42] to-[#5E6DA8] h-screen'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <span className='relative'>
                <Image src={profilePicture} className='w-[120px] h-[120px] rounded-full' alt='Amazing' />
                <Image src={edit} className='w-[24px] h-[24px] absolute left-[15px] bottom-0' alt='Amazing' />
            </span>
            <h2 className='text-white'>احمد حسن علي علي احمد</h2>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center w-full'>
            <span className={`${mode === 'information' ? 'bg-white text-black' : 'text-white'} flex items-start gap-3 rounded-full cursor-pointer p-3 w-full`} onClick={() => handleMode('information')}>
                <Image src={mode === 'information' ? darkInformation : information} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>معلومات الحساب</h2>
            </span>
            <span className={`${mode === 'location' ? 'bg-white text-black' : 'text-white'} flex items-start gap-3 rounded-full cursor-pointer p-3 w-full`} onClick={() => handleMode('location')}>
                <Image src={mode === 'location' ? darkLocation : location} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>عناوين الشحن</h2>
            </span>
            <span className={`${mode === 'cards' ? 'bg-white text-black' : 'text-white'} flex items-start gap-3 rounded-full cursor-pointer p-3 w-full`} onClick={() => handleMode('cards')}>
                <Image src={mode === 'cards' ? darkCards : cards} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2 >بطاقات الإئتمان</h2>
            </span>
            <span className={`${mode === 'shop' ? 'bg-white text-black' : 'text-white'} flex items-center gap-3 rounded-full cursor-pointer p-3 w-full`} onClick={() => handleMode('shop')}>
                <Image src={mode === 'shop' ? darkShop : shop} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>خزانتي</h2>
                <span className='bg-red-500 text-white rounded-full text-[10px] w-[16px] h-[16px] text-center mr-auto'>
                    1
                </span>
            </span>
            <span className={`${mode === 'favourite' ? 'bg-white text-black' : 'text-white'} flex items-start gap-3 rounded-full cursor-pointer p-3 w-full`} onClick={() => handleMode('favourite')}>
                <Image src={mode === 'favourite' ? darkFavourite : favourite} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>منتجات مفضلة</h2>
            </span>
        </div>
      </aside>
    {mode === 'information' &&
    <section className='w-2/4 mt-12 bg-[#EDF0FF] rounded-md h-fit flex flex-col gap-20'>
        <span className='flex justify-between'>
            <span className='p-2 bg-[#252B42] rounded-md text-white rounded-tr-xl rounded-bl-xl'>
                معلومات الحساب
            </span>
            <span className='flex items-center gap-2 ml-2 cursor-pointer'>
                <Image src={darkEdit} className='w-[24px] h-[24px]' alt='Amazing' />
                <p className='text-black'>تعديل</p>
            </span>
        </span>
        <div className='flex flex-col items-center gap-3 mb-5'>
            <span className='flex items-center bg-white shadow-md rounded-md text-center w-3/4'>
                <p className='bg-[#5E6DA8] text-white p-2 rounded-md ml-[75px] w-[20%]'>البريد الإلكتروني</p>
                a.hassan@amazing.sa
            </span>
            <span className='flex items-center bg-white shadow-md rounded-md text-center w-3/4'>
                <p className='bg-[#5E6DA8] text-white p-2 rounded-md ml-[75px] w-[20%]'>رقم الجوال</p>
                +201093954615
            </span>
            <span className='flex items-center bg-white shadow-md rounded-md text-center w-3/4'>
                <p className='bg-[#5E6DA8] text-white p-2 rounded-md ml-[75px] w-[20%]'>الجنس</p>
                ذكر
            </span>
            <span className='flex items-center bg-white shadow-md rounded-md text-center w-3/4'>
                <p className='bg-[#5E6DA8] text-white p-2 rounded-md ml-[75px] w-[20%]'>تاريخ الميلاد</p>
                2 يناير 1996
            </span>
            <span className='flex items-center bg-white shadow-md rounded-md text-center w-3/4'>
                <p className='bg-[#5E6DA8] text-white p-2 rounded-md ml-[75px] w-[20%]'>كلمة المرور</p>
                *************
            </span>
        </div>
    </section>
    }
    {
    mode === 'shop' &&
    <HomePage />
    }
    {
    mode === 'favourite' &&
    <section className='flex flex-col items-start gap-5 p-10'>
        <h2 className='text-2xl'>المفضلة</h2>
        <span className='grid grid-cols-4 gap-3'>
            {
            products.map((product) => (
                <ProductCard id={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price} />
            ))
            }
        </span>
    </section>
    }
    {mode === 'location' &&
    <section className='w-2/4 mt-12 flex flex-col gap-5'>
        <span className='flex justify-between w-full'>
            <h2 className='text-2xl'>عناوين الشحن</h2>
            <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-xl bg-[#5E6DA8] p-2 mt-6'>
                <Image src={addLocation} className='w-[24px] h-[24px]' alt='Amazing' />
                <p className='text-white'>إضافة عنوان جديد</p>
            </span>
        </span>
        <form className='relative w-full mt-12 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5'>
            <span className='absolute right-0 p-2 bg-[#5E6DA8] text-white rounded-tr-xl rounded-bl-xl text-center mt-[-20px]'>
                عنوان جديد
            </span>
            <span className='flex items-center gap-3 mt-[30px]'>                
                <input type='text' placeholder='الاسم الاول' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4' />
                <input type='text' placeholder='الاسم الاخير' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4' />
            </span>
            <span className='flex items-center gap-3'>
                <input type='text' placeholder='رقم الجوال' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4' />
                <input type='text' placeholder='رقم جوال اضافي' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4' />
            </span>
            <input type='text' placeholder='العنوان' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
            <input type='text' placeholder='تتفاصيل أكثر حول العنوان' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
            <span className='flex items-center gap-3'>
                <input type='text' placeholder='المنطقة' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4' />
                <input type='text' placeholder='المدينة' className='p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4' />
            </span>
            <span className='flex items-center gap-3 w-2/4'>
                <input type='submit' value='حفظ' className='bg-[#5E6DA8] p-2 rounded-xl text-white cursor-pointer outline-none w-2/4' />
                <button className='bg-[#F24747] p-2 rounded-xl text-white outline-none w-2/4'>إلغاء</button>
            </span>
        </form>
        <h2 className='text-2xl'>عناوين مسجلة</h2>
        <div className='relative flex justify-between p-5 w-full bg-[#EDF0FF] rounded-2xl'>
            <span className='bg-[#252B42] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto absolute top-2/4 -translate-x-2/4 -translate-y-2/4 right-0'>
                1
            </span>
            <div className='flex-col items-start gap-3 text-black mr-[25px]'>
                <p>احمد حسن</p>
                <p>+20109395615</p>
                <span className='flex items-center gap-4'>
                    <p>طالبية - الهرم - الجيزة</p>
                    <p>الهرم</p>
                    <p>الجيزة</p>
                </span>
            </div>
            <span className='flex items-center gap-2 ml-2 cursor-pointer mb-auto'>
                <Image src={darkEdit} className='w-[24px] h-[24px]' alt='Amazing' />
                <p className='text-black'>تعديل</p>
            </span>
        </div>
    </section>
    }
    {mode === 'cards' &&
    <section className='w-2/4 mt-12 flex flex-col gap-5'>
        <span className='flex justify-between w-full'>
            <h2 className='text-2xl'>بطاقات الإئتمان</h2>
            <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-xl bg-[#5E6DA8] p-2 mt-6'>
                <Image src={addLocation} className='w-[24px] h-[24px]' alt='Amazing' />
                <p className='text-white'>إضافة بطاقة جديدة</p>
            </span>
        </span>
        <form className='relative w-full mt-12 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5'>
            <span className='absolute right-0 p-2 bg-[#5E6DA8] text-white rounded-tr-xl rounded-bl-xl text-center mt-[-20px]'>
                بطاقة جديدة
            </span>
            <span className='relative w-full mt-[30px]'>
                <p className='absolute left-0 text-[#4F5B76]'>Card number</p>
                <input type='text' placeholder='1234 1234 1234 1234' className='placeholder:absolute placeholder:left-0 p-2 rounded-xl placeholder:text-[#E7E7E7] outline-none w-full mt-[30px]' />
                <span className='flex flex-row-reverse items-center gap-2 absolute -right-14 top-3/4 -translate-x-2/4 -translate-y-2/4'>
                    <Image src={visa} className='w-[24px] h-[16px]' alt='Amazing' />
                    <Image src={masterCard} className='w-[24px] h-[16px]' alt='Amazing' />
                    <Image src={amex} className='w-[24px] h-[16px]' alt='Amazing' />
                    <Image src={discover} className='w-[24px] h-[16px]' alt='Amazing' />
                </span>
            </span>
            <span className='flex items-center gap-3'>
                <span className='relative'>                    
                    <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Expiry</p>
                    <input type='text' placeholder='MM / YY' className='placeholder:absolute placeholder:left-0 p-2 mt-[12px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                </span>
                <span className='relative'>                    
                    <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>CVV</p>
                    <input type='text' placeholder='CVV' className='placeholder:absolute placeholder:left-0 p-2 mt-[12px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                </span>
            </span>
            <span className='flex flex-row-reverse items-center gap-3'>
                <span className='relative'>                    
                    <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Country</p>
                    <Select options={options} value={value} onChange={changeHandler} className='mt-[12px]' />
                </span>
                <span className='relative'>                    
                    <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Postal code</p>
                    <input type='text' className='p-2 mt-[12px] rounded-xl outline-none' />
                </span>
            </span>
            <input type='submit' value='حفظ' className='bg-[#5E6DA8] p-2 rounded-xl text-white cursor-pointer outline-none w-2/4' />
        </form>
        <h2 className='text-2xl'>بطاقات مسجلة</h2>
        <div className='relative flex justify-between p-5 w-full bg-[#EDF0FF] rounded-2xl'>
            {/* <span className='bg-[#252B42] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto absolute top-2/4 -translate-x-2/4 -translate-y-2/4 right-0'>
                
            </span> */}
            <div className='flex-col items-start gap-3 text-black mr-[25px]'>
                <p></p>
                <p></p>
                <span className='flex items-center gap-4'>
                    <p></p>
                    <p></p>
                    <p></p>
                </span>
            </div>
            <span className='flex items-center gap-2 ml-2 cursor-pointer mb-auto'>
                <Image src={darkEdit} className='w-[24px] h-[24px]' alt='Amazing' />
                <p className='text-black'>تعديل</p>
            </span>
        </div>
    </section>
    }
    </div>
  )
}

export default profile
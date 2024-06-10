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
import img1 from '../../assets/products/pro5.svg'
import HomePage from "../../components/Home page/HomePage"
import ProductCard from "../../components/Products/ProductCard"
import { GET_PRODUCTS } from "../../Utils/Products/GetProducts/GET_PRODUCTS"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/Navbar/Navbar'

const profile = () => {
    const [products, setProducts] = useState([]);
    const [mode, setMode] = useState('information');
    const [sidebar, setSidebar] = useState(false);
    
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
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <aside className={`relative w-1/4 max-md:w-full min-h-screen ${sidebar ? 'translate-x-0' : 'hidden translate-x-full'} flex flex-col justify-start items-center gap-20 p-5 bg-gradient-to-br from-[#252B42] to-[#5E6DA8]`}>
                <div className='mt-[60px] flex flex-col gap-3 justify-center items-center'>
                    <span className='relative'>
                        <Image src={profilePicture} className='w-[120px] h-[120px] rounded-full' alt='Amazing' />
                        <Image src={edit} className='w-[24px] h-[24px] absolute left-[15px] bottom-0' alt='Amazing' />
                    </span>
                    <h2 className='text-white'>احمد حسن علي علي احمد</h2>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center w-full'>
                    <span className={`${mode === 'information' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('information')}>
                        <Image src={mode === 'information' ? darkInformation : information} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>معلومات الحساب</h2>
                    </span>
                    <span className={`${mode === 'location' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('location')}>
                        <Image src={mode === 'location' ? darkLocation : location} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>عناوين الشحن</h2>
                    </span>
                    <span className={`${mode === 'cards' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('cards')}>
                        <Image src={mode === 'cards' ? darkCards : cards} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2 >بطاقات الإئتمان</h2>
                    </span>
                    <span className={`${mode === 'shop' ? 'bg-white text-black active' : 'text-white'} relative flex items-center gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('shop')}>
                        <Image src={mode === 'shop' ? darkShop : shop} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>خزانتي</h2>
                        <span className='bg-red-500 text-white rounded-full text-[10px] w-[16px] h-[16px] text-center mr-auto'>
                            1
                        </span>
                    </span>
                    <span className={`${mode === 'favourite' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('favourite')}>
                        <Image src={mode === 'favourite' ? darkFavourite : favourite} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>منتجات مفضلة</h2>
                    </span>
                </div>
                <FontAwesomeIcon icon={faXmark} onClick={() => setSidebar(!sidebar)} className='md:hidden absolute w-[12px] h-[12px] left-5  top-5 cursor-pointer duration-200 rounded-[999px] p-[8px] bg-red-500 text-center text-white hover:bg-black hover:text-red-500' />
            </aside>
            {!sidebar && <FontAwesomeIcon icon={faBars} className='w-5 h-5 absolute right-2 top-5 cursor-pointer duration-200 hover:text-red-500 md:hidden' onClick={() => setSidebar(!sidebar)} />}
            {mode === 'information' &&
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`w-full h-fit mt-[100px] pb-[60px] bg-[#EDF0FF] rounded-md flex flex-col gap-20`}>
                    <span className='flex justify-between'>
                        <span className='p-2 w-[12%] max-md:w-1/4 text-center bg-[#252B42] text-white rounded-tr-xl rounded-bl-xl'>
                            معلومات الحساب
                        </span>
                        <span className='flex items-center gap-2 ml-5 cursor-pointer mt-4 '>
                            <Image src={darkEdit} className='w-[24px] h-[24px]' alt='Amazing' />
                            <p className='text-black'>تعديل</p>
                        </span>
                    </span>
                    <div className='flex flex-col items-center gap-3 mb-5'>
                        <span className='flex items-center justify-start gap-[300px] max-md:gap-[50px] bg-white shadow-md rounded-xl text-center w-3/4'>
                            <p className='bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl w-[20%] max-md:w-[40%] max-md:text-xs'>البريد الإلكتروني</p>
                            <p className='font-bold max-md:text-xs md:w-[10%]'>a.hassan@amazing.sa</p>
                        </span>
                        <span className='flex items-center justify-start gap-[300px] max-md:gap-[50px] bg-white shadow-md rounded-xl text-center w-3/4'>
                            <p className='bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl w-[20%] max-md:w-[40%] max-md:text-xs'>رقم الجوال</p>
                            <p className='font-bold max-md:text-xs md:w-[10%]'>201554854128+</p>
                        </span>
                        <span className='flex items-center justify-start gap-[300px] max-md:gap-[50px] bg-white shadow-md rounded-xl text-center w-3/4'>
                            <p className='bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl w-[20%] max-md:w-[40%] max-md:text-xs'>الجنس</p>
                            <p className='font-bold max-md:text-xs md:w-[10%]'>ذكر</p>
                        </span>
                        <span className='flex items-center justify-start gap-[300px] max-md:gap-[50px] bg-white shadow-md rounded-xl text-center w-3/4'>
                            <p className='bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl w-[20%] max-md:w-[40%] max-md:text-xs'>تاريخ الميلاد</p>
                            <p className='font-bold max-md:text-xs md:w-[10%]'>2 يناير 1996</p>
                        </span>
                        <span className='flex items-center justify-start gap-[300px] max-md:gap-[50px] bg-white shadow-md rounded-xl text-center w-3/4'>
                            <p className='bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl w-[20%] max-md:w-[40%] max-md:text-xs'>كلمة المرور</p>
                            <p className='font-bold max-md:text-xs md:w-[10%]'>*************</p>
                        </span>
                    </div>
                </section>
            </div>
            }
            {mode === 'location' &&
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
                    <span className='flex justify-between w-full'>
                        <h2 className='text-2xl max-md:text-base font-bold'>عناوين الشحن</h2>
                        <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-2xl bg-[#5E6DA8] p-2 mt-6'>
                            <Image src={addLocation} className='w-[24px] h-[24px]' alt='Amazing' />
                            <p className='text-white'>إضافة عنوان جديد</p>
                        </span>
                    </span>
                    <form className='relative w-full mt-4 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5'>
                        <span className='absolute right-0 p-2 bg-[#5E6DA8] text-white w-[10%] max-md:w-1/4 rounded-tr-2xl rounded-bl-2xl text-center mt-[-20px]'>
                            عنوان جديد
                        </span>
                        <FontAwesomeIcon icon={faXmark} className='absolute w-[12px] h-[12px] left-5 top-5 cursor-pointer duration-200 rounded-[999px] p-[8px] bg-red-500 text-center text-white hover:bg-black hover:text-red-500' />
                        <span className='flex items-center  gap-[40px] w-2/4 max-md:w-3/4 mt-[30px]'>                
                            <input type='text' placeholder='الاسم الاول' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                            <input type='text' placeholder='الاسم الاخير' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                        </span>
                        <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4'>
                            <input type='text' placeholder='رقم الجوال' className='p-2  max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                            <input type='text' placeholder='رقم جوال اضافي' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                        </span>
                        <input type='text' placeholder='العنوان' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4 max-md:w-3/4' />
                        <input type='text' placeholder='تفاصيل أكثر حول العنوان' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4 max-md:w-3/4' />
                        <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4'>
                            <input type='text' placeholder='المنطقة' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                            <input type='text' placeholder='المدينة' className='p-2 max-md:placeholder:text-xs  rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                        </span>
                        <span className='flex items-center gap-3 w-1/4'>
                            <input type='submit' value='حفظ' className='bg-[#5E6DA8]  hover:bg-[#5e6da8e3] duration-200 p-2 rounded-xl text-white cursor-pointer outline-none w-2/4 max-md:w-3/4' />
                            <button className='bg-[#F24747]  hover:bg-[#f24747d2] duration-200 p-2 rounded-xl text-white outline-none w-2/4 max-md:w-3/4'>إلغاء</button>
                        </span>
                    </form>
                    <h2 className='text-2xl max-md:text-base font-bold'>عناوين مسجلة</h2>
                    <div className='relative max-md:text-sm flex justify-between p-5 w-full bg-[#EDF0FF] rounded-2xl'>
                        <span className='bg-[#252B42] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto absolute top-2/4 -translate-x-2/4 -translate-y-2/4 right-0'>
                            1
                        </span>
                        <div className='flex-col items-start gap-3 text-black mr-[25px] font-bold'>
                            <p>احمد حسن</p>
                            <p>20109395615+</p>
                            <span className='flex items-center gap-4'>
                                <p>طالبية - الهرم - الجيزة</p>
                                <p className='mr-6'>الهرم</p>
                                <p className='mr-6'>الجيزة</p>
                            </span>
                        </div>
                        <span className='flex items-center gap-2 ml-2 cursor-pointer mb-auto'>
                            <Image src={darkEdit} className='w-[24px] h-[24px]' alt='Amazing' />
                            <p className='text-black'>تعديل</p>
                        </span>
                    </div>
                </section>
            </div>
            }
            {mode === 'cards' &&
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
                    <span className='flex justify-between w-full'>
                        <h2 className='text-2xl max-md:text-base font-bold'>بطاقات الإئتمان</h2>
                        <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-2xl bg-[#5E6DA8] p-2 mt-6'>
                            <Image src={addLocation} className='w-[24px] h-[24px]' alt='Amazing' />
                            <p className='text-white'>إضافة بطاقة جديدة</p>
                        </span>
                    </span>
                    <form className='relative w-full mt-4 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5'>
                        <span className='absolute right-0 p-2 bg-[#5E6DA8] text-white w-[10%] max-md:w-1/4 max-md:text-sm rounded-tr-2xl rounded-bl-2xl text-center mt-[-20px]'>
                            بطاقة جديدة
                        </span>
                        <span className='relative w-3/4 mt-[30px]'>
                            <p className='absolute left-0 text-[#4F5B76]'>Card number</p>
                            <input dir='ltr' type='text' placeholder='1234 1234 1234 1234' className='placeholder:absolute placeholder:left-5 p-3 max-md:p-2 max-md:placeholder:text-xs mb-4 rounded-xl placeholder:text-[#E7E7E7] outline-none w-full mt-[30px]' />
                            <span className='flex flex-row-reverse items-center gap-2 absolute -right-14 top-[60%] -translate-x-2/4 -translate-y-2/4'>
                                <Image src={visa} className='w-[24px] h-[16px]' alt='Amazing' />
                                <Image src={masterCard} className='w-[24px] h-[16px]' alt='Amazing' />
                                <Image src={amex} className='w-[24px] h-[16px]' alt='Amazing' />
                                <Image src={discover} className='w-[24px] h-[16px]' alt='Amazing' />
                            </span>
                        </span>
                        <span className='flex items-center gap-3 w-3/4'>
                            <span className='relative w-2/4'>                    
                                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Expiry</p>
                                <input dir='ltr' type='text' placeholder='MM / YY' className='placeholder:absolute placeholder:left-5 p-3 max-md:p-2 max-md:placeholder:text-xs mt-[18px] mb-[16px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                            </span>
                            <span className='relative w-2/4'>                    
                                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>CVV</p>
                                <input dir='ltr' type='text' placeholder='CVV' className='placeholder:absolute placeholder:left-5 p-3 max-md:p-2 max-md:placeholder:text-xs mt-[18px] mb-[16px] rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                            </span>
                        </span>
                        <span className='flex flex-row-reverse items-center gap-3 w-3/4'>
                            <span className='relative w-2/4'>                    
                                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Country</p>
                                <Select options={options} value={value} onChange={changeHandler} className='mt-[18px] mb-[16px]' />
                            </span>
                            <span className='relative w-2/4'>                    
                                <p className='absolute left-0 top-[-15px] text-[#4F5B76]'>Postal code</p>
                                <input dir='ltr' type='text' className='p-3 max-md:p-2 max-md:placeholder:text-xs mt-[18px] mb-[16px] rounded-xl outline-none w-full' />
                            </span>
                        </span>
                        <input type='submit' value='حفظ' className='bg-[#5E6DA8] p-3 max-md:p-2 rounded-xl text-white cursor-pointer outline-none w-3/4' />
                    </form>
                    <h2 className='text-2xl max-md:text-base font-bold'>بطاقات مسجلة</h2>
                    <div className='relative flex justify-between p-5 w-full bg-[#EDF0FF] rounded-2xl'>
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
            </div>
            }
            {
            mode === 'shop' &&
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
                    <h2 className='text-2xl max-md:text-base font-bold'>خزانتي</h2>
                    <HomePage />
                </section>
            </div>
            }
            {
            mode === 'favourite' &&
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`fav-products w-full flex flex-col items-start gap-5 p-10 favourite-products`}>
                    <h2 className='text-2xl font-bold'>المفضلة</h2>
                    <span className='grid grid-cols-4 max-md:grid-cols-2 max-md:items-start gap-3'>
                        {
                        products.map((product) => (
                            <ProductCard id={product.id} title={product.title} thumbnail={img1} price={product.price} />
                        ))
                        }
                    </span>
                </section>
            </div>
            }
        </div>
    </div>
  )
}

export default profile
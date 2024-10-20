'use client'

import Wrapper from '../../Wrapper'
import userImg from '../../../../assets/dashboard/userImg.svg'
import more from '../../../../assets/dashboard/more.svg'
import remove from '../../../../assets/dashboard/remove.svg'
import block from '../../../../assets/dashboard/block.svg'
import clothes1 from '../../../../assets/dashboard/clothes1.svg'
import timer from '../../../../assets/dashboard/timer.svg'
import boxTime from '../../../../assets/dashboard/box-time.svg'
import shipping from '../../../../assets/dashboard/shipping.svg'
import boxTick from '../../../../assets/dashboard/box-tick.svg'
import tickCircle from '../../../../assets/dashboard/tick-circle.svg'
import boxRemove from '../../../../assets/dashboard/box-remove.svg'
import rotate from '../../../../assets/dashboard/3d-rotate.svg'
import trash from '../../../../assets/dashboard/trash.svg'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'

const Client = () => {
    const [actions, setActions] = useState(false);
    const [mood, setMood] = useState('details');

  return (
    <Wrapper>
        <div className='w-full flex flex-col justify-center items-center gap-4 shadow-xl rounded-3xl'>
            <div className='w-full h-[150px] p-5 rounded-t-3xl bg-gradient-to-br from-[#00B6A9] to[#8AD0C3] flex justify-around items-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src={userImg} alt="user" className="w-[70px] h-[70px]" />
                <span className='w-fit p-1 pr-4 pl-4 text-sm rounded-3xl text-center bg-[#8AD0C3] text-black'>سيد عبد العظيم</span>
            </div>
            <div className='relative flex justify-center items-center gap-3'>
                <span className='flex flex-col items-center justify-center gap-2 bg-[#C8FEA8] font-bold p-8 rounded-2xl'>
                <p>5</p>
                <p>الطلبات المستلمة</p>
                </span>
                <span className='flex flex-col items-center justify-center gap-2 bg-[#FEA8A8] font-bold p-8 rounded-2xl'>
                <p>7</p>
                <p>الطلبات الملغية</p>
                </span>
                <span className='flex flex-col items-center justify-center gap-2 bg-[#A8CFFE] font-bold p-8 rounded-2xl'>
                <p>3</p>
                <p>الطلبات المرتجعة</p>
                </span>
                <span className='flex flex-col items-center justify-center gap-2 bg-[#FEF5A8] font-bold p-8 rounded-2xl'>
                <p>2</p>
                <p>الطلبات المعلقة</p>
                </span>
            </div>
            <div>
                <Image src={more} alt="more" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setActions(!actions)} />
                <span className={`w-fit absolute left-[9%] top-48 bg-white p-5 rounded-3xl shadow-2xl ${actions ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                    <Image src={block} alt="block" className="w-[30px] h-[30px]" />
                    <p>حظر</p>
                </span>
                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                    <Image src={remove} alt="remove" className="w-[30px] h-[30px]" />
                    <p>حذف الملف</p>
                </span>
                </span>
            </div>
            </div>
            <div className='w-full h-full pb-72 flex flex-col justify-center items-center gap-20'>
            <span className='flex justify-center items-center gap-20'>
                <p className={`${mood === 'details' ? 'text-[#00B6A9] border-b-4 border-b-[#00B6A9] rounded-r-sm rounded-l-sm' : 'text-[#6C6C6C]'} cursor-pointer select-none text-lg`} onClick={() => setMood('details')}>بيانات العميل</p>
                <p className={`${mood === 'favProducts' ? 'text-[#00B6A9] border-b-4 border-b-[#00B6A9] rounded-r-sm rounded-l-sm' : 'text-[#6C6C6C]'} cursor-pointer select-none text-lg`} onClick={() => setMood('favProducts')}>المفضلات</p>
                <p className={`${mood === 'ordersHistory' ? 'text-[#00B6A9] border-b-4 border-b-[#00B6A9] rounded-r-sm rounded-l-sm' : 'text-[#6C6C6C]'} cursor-pointer select-none text-lg`} onClick={() => setMood('ordersHistory')}>سجل المشتريات</p>
            </span>
            { mood === 'details' &&
            <div className='w-full flex flex-col justify-center items-center gap-10'>
                <div className='w-[65%] flex items-center justify-center gap-8'>
                <div className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                    <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>الإسم</span>
                    <span className='text-center outline-none '>سيد عبد العظيم</span>
                </div>
                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                    <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>الجوال</span>
                    <span className='text-center '>+966 656585454</span>
                </div>
                </div>
                <div className='w-[65%] flex items-center justify-center gap-8'>
                <div className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                    <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>البريد الإلكتروني</span>
                    <span className='text-center outline-none '>a.hassan@amazing.sa</span>
                </div>
                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                    <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>النوع</span>
                    <span className='text-center '>ذكر</span>
                </div>
                </div>
                <div className='w-[65%] flex items-center justify-center gap-8'>
                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                    <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>تاريخ الميلاد</span>
                    <span className='text-center outline-none '>1996 - 01 - 02</span>
                </div>
                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                    <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>تاريخ الإنضمام</span>
                    <span className='text-center '>2024 - 05 - 05</span>
                </div>
                </div>
            </div>
            }
            { mood === 'favProducts' &&
            <div className='w-full h-full p-10 grid grid-cols-4 gap-10'>
                <div className='flex flex-col items-start shadow rounded-2xl'>
                <Image src={clothes1} alt="product image" className="w-full h-full rounded-t-2xl" />
                <span className='p-3 flex flex-col gap-2'>
                    <p className='text-xl font-bold'>بدلة بصف أزرار</p>
                    <span className='flex items-center gap-2'>
                    <p className='font-semibold'>500 ر.س</p>
                    <p className='text-[#9B9B9B] text-xs'>750 ر.س</p>
                    </span>
                </span>
                </div>
                <div className='flex flex-col items-start shadow rounded-2xl'>
                <Image src={clothes1} alt="product image" className="w-full h-full rounded-t-2xl" />
                <span className='p-3 flex flex-col gap-2'>
                    <p className='text-xl font-bold'>بدلة بصف أزرار</p>
                    <span className='flex items-center gap-2'>
                    <p className='font-semibold'>500 ر.س</p>
                    <p className='text-[#9B9B9B] text-xs'>750 ر.س</p>
                    </span>
                </span>
                </div>
                <div className='flex flex-col items-start shadow rounded-2xl'>
                <Image src={clothes1} alt="product image" className="w-full h-full rounded-t-2xl" />
                <span className='p-3 flex flex-col gap-2'>
                    <p className='text-xl font-bold'>بدلة بصف أزرار</p>
                    <span className='flex items-center gap-2'>
                    <p className='font-semibold'>500 ر.س</p>
                    <p className='text-[#9B9B9B] text-xs'>750 ر.س</p>
                    </span>
                </span>
                </div>
                <div className='flex flex-col items-start shadow rounded-2xl'>
                <Image src={clothes1} alt="product image" className="w-full h-full rounded-t-2xl" />
                <span className='p-3 flex flex-col gap-2'>
                    <p className='text-xl font-bold'>بدلة بصف أزرار</p>
                    <span className='flex items-center gap-2'>
                    <p className='font-semibold'>500 ر.س</p>
                    <p className='text-[#9B9B9B] text-xs'>750 ر.س</p>
                    </span>
                </span>
                </div>
            </div>
            }
            { mood === 'ordersHistory' &&
            <div className='w-full h-full p-10 flex flex-col justify-center items-center gap-14'>
                <div className='grid grid-cols-4 gap-10 w-full'>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FEF5A8]'>
                    <Image src={timer} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات قيد المراجعة</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FEE1A8]'>
                    <Image src={boxTime} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات قيد التحضير</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#F2FEA8]'>
                    <Image src={shipping} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات قيد الشحن</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#C9FEA8]'>
                    <Image src={boxTick} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات تم تسليمها</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#A8FEC0]'>
                    <Image src={tickCircle} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات منجزة</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FEA8A8]'>
                    <Image src={boxRemove} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات ملغية</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#A8CFFE]'>
                    <Image src={rotate} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات مرتجعة</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FF7A7A]'>
                    <Image src={trash} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                    <p className='text-lg'>طلبات محذوفة</p>
                </div>
                </div>
                <span className='relative w-3/4'>
                <input type='text' placeholder='بحث عن منتج' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
                <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
                </span>
                <div className='w-3/4 flex flex-col justify-center items-center gap-4'>
                <h2 className='ml-auto font-semibold'>الإثنين 13 مايو 2024</h2>
                <div className='w-full flex justify-around items-center gap-36 p-4 border-[1px] border-[#F1F1F1] rounded-3xl text-base'>
                    <span className='flex items-center gap-2'>
                    <Image src={clothes1} alt='item' className='w-[45px] h-[45px]' />
                    <p>بدلة كاروهات</p>
                    </span>
                    <span className='flex justify- items-start gap-5'>
                        <span className='flex flex-col justify-center items-center gap-5'>
                        <p>الكمية</p>
                        <p>1</p>
                        </span>
                        <span className='flex flex-col justify-center items-center gap-5'>
                        <p>اللون</p>
                        <span className='bg-[#193859] rounded-full p-1 w-6 h-6'></span>
                        </span>
                        <span className='flex flex-col justify-center items-center gap-3'>
                        <p>المقاس</p>
                        <span className='text-center bg-[#00B6A9] rounded-md text-white pt-2 pb-2 pl-3 pr-3'>
                            s
                        </span>
                        </span>
                    </span>
                    <p>500.00 ر.س</p>
                </div>
                <div className='w-full flex justify-around items-center gap-36 p-4 border-[1px] border-[#F1F1F1] rounded-3xl text-base'>
                    <span className='flex items-center gap-2'>
                    <Image src={clothes1} alt='item' className='w-[45px] h-[45px]' />
                    <p>بدلة كاروهات</p>
                    </span>
                    <span className='flex justify- items-start gap-5'>
                        <span className='flex flex-col justify-center items-center gap-5'>
                        <p>الكمية</p>
                        <p>1</p>
                        </span>
                        <span className='flex flex-col justify-center items-center gap-5'>
                        <p>اللون</p>
                        <span className='bg-[#193859] rounded-full p-1 w-6 h-6'></span>
                        </span>
                        <span className='flex flex-col justify-center items-center gap-3'>
                        <p>المقاس</p>
                        <span className='text-center bg-[#00B6A9] rounded-md text-white pt-2 pb-2 pl-3 pr-3'>
                            s
                        </span>
                        </span>
                    </span>
                    <p>500.00 ر.س</p>
                </div>
                <h2 className='ml-auto font-semibold mt-5'>الأحد 12 مايو 2024</h2>
                <div className='w-full flex justify-around items-center gap-36 p-4 border-[1px] border-[#F1F1F1] rounded-3xl text-base'>
                    <span className='flex items-center gap-2'>
                    <Image src={clothes1} alt='item' className='w-[45px] h-[45px]' />
                    <p>بدلة كاروهات</p>
                    </span>
                    <span className='flex justify- items-start gap-5'>
                        <span className='flex flex-col justify-center items-center gap-5'>
                        <p>الكمية</p>
                        <p>1</p>
                        </span>
                        <span className='flex flex-col justify-center items-center gap-5'>
                        <p>اللون</p>
                        <span className='bg-[#193859] rounded-full p-1 w-6 h-6'></span>
                        </span>
                        <span className='flex flex-col justify-center items-center gap-3'>
                        <p>المقاس</p>
                        <span className='text-center bg-[#00B6A9] rounded-md text-white pt-2 pb-2 pl-3 pr-3'>
                            s
                        </span>
                        </span>
                    </span>
                    <p>500.00 ر.س</p>
                </div>
                </div>
            </div>
            }
            </div>
        </div>
    </Wrapper>
  )
}

export default Client

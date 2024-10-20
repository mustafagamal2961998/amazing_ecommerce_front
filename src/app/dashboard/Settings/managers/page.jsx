'use client'
import Wrapper from '../../Wrapper'
import SettingsSidebar from '../SettingsSidebar'
import { useState } from "react";
import Image from "next/image";
import editIcon from '../../../../assets/dashboard/editIcon.svg'
import deleteIcon from '../../../../assets/dashboard/deleteIcon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Managers = () => {
  
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
        <div className='w-full flex pb-5 mb-auto ml-auto'>
            <SettingsSidebar />
            <div className='relative w-full ml-auto min-h-full p-5 -mr-2 shadow-lg bg-[#EFEFEF] rounded-3xl flex flex-col justify-start items-center gap-10'>
            <h2 className='text-xl font-bold'>المدراء والصلاحيات</h2>
            <div className='w-full flex flex-col items-start gap-5'>
                <span className='w-1/5 p-2 flex justify-center items-center bg-gradient-to-br from-[#00B6A9] to-[##8AD0C3] rounded-br-3xl rounded-tl-3xl'>
                <p className='font-bold text-white'>إضافة مسئول جديد</p>
                </span>
                <div className='w-full flex items-center gap-14'>
                    <input type='text' placeholder='الاسم الأول' className='w-full shadow-xl placeholder:text-[#00B6A9] font-bold bg-[#F5F5F5] rounded-full py-3 px-8 outline-none' />
                    <input type='text' placeholder='الاسم الأخير' className='w-full shadow-xl placeholder:text-[#00B6A9] font-bold bg-[#F5F5F5] rounded-full py-3 px-8 outline-none' />
                </div>
                <div className='w-full flex items-center gap-14'>
                    <input type='text' placeholder='الوظيفة' className='w-full shadow-xl placeholder:text-[#00B6A9] font-bold bg-[#F5F5F5] rounded-full py-3 px-8 outline-none' />
                    <input type='text' placeholder='اسم المستخدم' className='w-full shadow-xl placeholder:text-[#00B6A9] font-bold bg-[#F5F5F5] rounded-full py-3 px-8 outline-none' />
                </div>
                <div className='w-full flex items-center gap-14'>
                    <input type='email' placeholder='البريد الإلكتروني' className='w-full shadow-xl placeholder:text-[#00B6A9] font-bold bg-[#F5F5F5] rounded-full py-3 px-8 outline-none' />
                    <input type='password' placeholder='كلمة السر' className='w-full shadow-xl placeholder:text-[#00B6A9] font-bold bg-[#F5F5F5] rounded-full py-3 px-8 outline-none' />
                </div>
            </div>
            <div className='w-full relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
                    <p className='absolute right-5 -top-3 font-bold '>الصلاحيات</p>
                    <div className='w-full flex justify-evenly items-center'>
                        <div className='mt-5 flex flex-col items-start gap-2'>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox"
                                    checked />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>الطلبات</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>المنتجات</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>العملاء</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>الفواتير</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>التقارير والاحصائيات</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>التخفيضات والقسائم</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>الشكاوى والمقترحات</p>
                            </span>
                        </div>
                        <div className='mt-5 flex flex-col items-start gap-2'>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox"
                                    />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>الإعدادات</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>العملات</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>وضع الصيانة</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>طرق الدفع</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>المدراء والصلاحيات</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>شركات الشحن</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                                    id="checkbox" />
                                    <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                <p className='text-base font-bold'>المحادثة المباشرة مع العملاء</p>
                            </span>
                        </div>
                    </div>
            </div>
            <h2 className='text-xl font-bold ml-auto'>الحالة</h2>
            <div 
                className='w-full'
                >
                    <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" onChange={(e) => setIsActive(e.target.checked)} />
                    <div class="relative w-11 h-6 bg-[#F12222] rounded-full peer 0 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#07932E]"></div>
                    <span class="ms-3 text-sm font-medium">{isActive ? 'نشط' : 'غير نشط'}</span>
                    </label>
            </div>
            <button className='w-fit py-3 px-8 bg-[#00B6A9] text-white rounded-full shadow-xl'>
                إضافة 
            </button>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-3xl border-[1px] border-[#E3E3E3]">
                        <table className="w-fit text-center text-sm  text-surface text-white">
                            <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#00B6A9] to-[#00b6a99d]">
                                <tr>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">م</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">الاسم</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">الوظيفة</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">البريد الإلكتروني</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">رقم الهاتف</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">الشركة</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">الحالة</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">تعديل</th>
                                <th className="p-2 border-r-[1px] border-[#E3E3E3] font-bold">حذف</th>
                                </tr>
                            </thead>
                            <tbody className="text-black border-[1px] border-[#E3E3E3] p-3">
                                <tr className="text-center border-b-[1px] border-[#E3E3E3]">
                                    <td className='p-5'>1</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>سيد عبد العظيم</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>IT Senior</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>s.hassan@amazing.sa</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>01129240117</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>خلابة مصر</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>
                                        <div 
                                        className='w-full'
                                        >
                                            <label class="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" checked onChange={(e) => setIsActive(e.target.checked)} />
                                            <div class="relative w-11 h-6 bg-[#F12222] rounded-full peer 0 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#07932E]"></div>
                                            </label>
                                        </div>
                                    </td>
                                    <td className='border-r-[1px] border-[#E3E3E3]'>
                                        <Image src={editIcon} alt='edit' className='w-6 h-6 m-auto cursor-pointer' />
                                    </td>
                                    <td className='border-r-[1px] border-[#E3E3E3]'>
                                        <Image src={deleteIcon} alt='delete' className='w-6 h-6 m-auto cursor-pointer' />
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#E3E3E3]">
                                    <td className='p-5'>2</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>سيد عبد العظيم</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>IT Senior</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>s.hassan@amazing.sa</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>01129240117</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>خلابة مصر</td>
                                    <td className='p-5 border-r-[1px] border-[#E3E3E3]'>
                                        <div 
                                        className='w-full'
                                        >
                                            <label class="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" onChange={(e) => setIsActive(e.target.checked)} />
                                            <div class="relative w-11 h-6 bg-[#F12222] rounded-full peer 0 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#07932E]"></div>
                                            </label>
                                        </div>
                                    </td>
                                    <td className='border-r-[1px] border-[#E3E3E3]'>
                                        <Image src={editIcon} alt='edit' className='w-6 h-6 m-auto cursor-pointer' />
                                    </td>
                                    <td className='border-r-[1px] border-[#E3E3E3]'>
                                        <Image src={deleteIcon} alt='delete' className='w-6 h-6 m-auto cursor-pointer' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faChevronRight} className='cursor-pointer p-2 rounded-[200%] duration-200 hover:bg-[#00000049]' />
                            <p className='font-bold text-base mx-4'>السابق</p>
                            <button className="px-3 py-1 bg-[#A6C8FF] font-bold rounded-lg mr-2 focus:outline-none">1</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#a6c8ff70]">2</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#a6c8ff70]">3</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#a6c8ff70]">4</button>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#a6c8ff70]">5</button>
                            <span>...</span>
                            <button className="px-3 py-1 text-[#0F62FE] rounded-lg mr-2 focus:outline-none duration-200 hover:bg-[#a6c8ff70]">11</button>
                            <p className='font-bold text-base text-[#0F62FE] mx-4'>التالي</p>
                            <FontAwesomeIcon icon={faChevronLeft} className='cursor-pointer text-[#0F62FE] p-2 rounded-[200%] duration-200 hover:bg-[#0f63fe59]' />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Managers

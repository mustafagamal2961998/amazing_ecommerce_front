import Image from 'next/image';
import returnPolicy from '../../../../assets/dashboard/Return Policy.svg';
import plus from '../../../../assets/dashboard/plus.svg';
import checked from '../../../../assets/dashboard/checked.svg';
import { useState } from 'react';

const ReturnPolicy = () => {

    const [addCategoryMood, setAddCategoryMood] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleAddCategory = (id) => {
      setAddCategoryMood(true)
    }

  return (
    <div className='relative w-full ml-auto min-h-full p-5 -mr-2 shadow-lg bg-[#EFEFEF] rounded-3xl rounded-br-none flex flex-col justify-start items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-xl font-bold'>سياسية الاسترجاع</h2>
            <Image src={returnPolicy} alt='return policy icon' className='w-[150px] h-[150px]' />
        </div>
        <h2 className='ml-auto font-bold text-xl'>المنتجات الخاضعة لسياسة الاسترجاع</h2>
        <div className='flex items-center gap-10'>
            <div className='w-full flex items-center gap-10'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
                        <p className='absolute right-5 -top-3 font-bold '>دولاب رجالي</p>
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
                            <p className='text-base font-bold'>بدل رسمي</p>
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
                            <p className='text-base font-bold'>أطقم موحدة</p>
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
                            <p className='text-base font-bold'>داخلية</p>
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
                            <p className='text-base font-bold'>بنطلونات متنوعة</p>
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
                            <p className='text-base font-bold'>قمصان متنوعة</p>
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
                            <p className='text-base font-bold'>ملابس رياضية</p>
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
                            <p className='text-base font-bold'>أطقم بيتي</p>
                            </span>
                        </div>
                    </div>
                    <span className='select-none flex items-center gap-4' onClick={() => handleAddCategory('as17')}>
                    <Image src={plus} alt='add category' className='cursor-pointer w-6 h-6 p-2 bg-green-500 rounded-full' />
                    <p className='text-base font-bold'>إضافة تصنيف</p>
                    </span>
                </div>
            </div>
            <div className='w-full flex items-center gap-10'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
                        <p className='absolute right-5 -top-3 font-bold '> دولاب حريمي</p>
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
                            <p className='text-base font-bold'>بدل رسمي</p>
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
                            <p className='text-base font-bold'>أطقم موحدة</p>
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
                            <p className='text-base font-bold'>داخلية</p>
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
                            <p className='text-base font-bold'>بنطلونات متنوعة</p>
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
                            <p className='text-base font-bold'>قمصان متنوعة</p>
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
                            <p className='text-base font-bold'>ملابس رياضية</p>
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
                            <p className='text-base font-bold'>أطقم بيتي</p>
                            </span>
                        </div>
                    </div>
                    <span className='select-none flex items-center gap-4' onClick={() => handleAddCategory('as17')}>
                    <Image src={plus} alt='add category' className='cursor-pointer w-6 h-6 p-2 bg-green-500 rounded-full' />
                    <p className='text-base font-bold'>إضافة تصنيف</p>
                    </span>
                </div>
            </div>
            <div className='w-full flex items-center gap-10'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
                        <p className='absolute right-5 -top-3 font-bold '>دولاب أطفالي</p>
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
                            <p className='text-base font-bold'>بدل رسمي</p>
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
                            <p className='text-base font-bold'>أطقم موحدة</p>
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
                            <p className='text-base font-bold'>داخلية</p>
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
                            <p className='text-base font-bold'>بنطلونات متنوعة</p>
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
                            <p className='text-base font-bold'>قمصان متنوعة</p>
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
                            <p className='text-base font-bold'>ملابس رياضية</p>
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
                            <p className='text-base font-bold'>أطقم بيتي</p>
                            </span>
                        </div>
                    </div>
                    <span className='select-none flex items-center gap-4' onClick={() => handleAddCategory('as17')}>
                    <Image src={plus} alt='add category' className='cursor-pointer w-6 h-6 p-2 bg-green-500 rounded-full' />
                    <p className='text-base font-bold'>إضافة تصنيف</p>
                    </span>
                </div>
            </div>
        </div>
        {addCategoryMood &&
            <form className='absolute left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-2xl bg-white w-2/4 h-fit flex flex-col justify-evenly items-center gap-10'>
                <input type='text' placeholder='اسم التصنيف' className='w-full outline-none border-2 border-[#EFEFEF] rounded-md p-2' autoFocus={true} />
                <button className='w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl' onClick={() => setAddCategoryMood(false)}>
                <p>حفظ</p>
                <Image src={checked} alt='save' className='w-[30px] h-[30px]' />
                </button>
            </form>
        }
        <h2 className='ml-auto font-bold text-xl'>أسباب الاسترجاع</h2>
        <div className='w-full flex items-center gap-10'>
            <div className='w-full flex justify-between items-center p-2 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
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
                    <p className='text-base font-bold'>تم شراؤها عن طريق الخطأ</p>
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
                    <p className='text-base font-bold'>المنتج لا يلبي التوقعات</p>
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
                    <p className='text-base font-bold'>السلعة تالفة / متضررة</p>
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
                    <p className='text-base font-bold'>تم إرسال سلعة خاطئة</p>
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
                    <p className='text-base font-bold'>المقاس غير سليم</p>
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
                    <p className='text-base font-bold'>غير راضي عن جودة المنتج</p>
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
                    <p className='text-base font-bold'>تأخر وصول المنتج</p>
                    </span>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <input autoFocus={true} type='text' className='w-full p-4 rounded-lg outline-none bg-[#D9D9D9]' />
                    <button className='w-fit px-12 py-3 bg-[#FFC42D] font-bold text-lg rounded-xl shadow-xl'>
                        إضافة سبب جديد  
                    </button>
                </div>
            </div>
        </div>
        <h2 className='ml-auto font-bold text-xl m-auto'>عدد الأيام المسموح بها للاسترجاع من تاريخ الشراء</h2>
        <span className='flex justify-center items-center gap-4'>
            <input type='number' min={0} className='w-1/4 p-2 bg-[#D9D9D9] outline-none rounded-xl' />
            <p className='font-bold text-base'>يوم</p>
        </span>
        <h2 className='ml-auto font-bold text-xl m-auto'>تفعيل وإيقاف سياسة الاسترجاع</h2>
        <div 
        className='w-full flex justify-center'
        >
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onChange={(e) => setIsActive(e.target.checked)} />
            <div class="relative w-11 h-6 bg-[#F12222] rounded-full peer 0 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#07932E]"></div>
            <span class="ms-3 text-sm font-medium">{isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
      </div>
      <button className='w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
        <p>حفظ التعديلات</p>
        <Image src={checked} alt='save changes' className='w-[30px] h-[30px]' />
      </button>
    </div>
  )
}

export default ReturnPolicy

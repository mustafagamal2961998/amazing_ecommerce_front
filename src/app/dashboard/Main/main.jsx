'use client'
import Image from 'next/image';
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import alertClothes from '../../../assets/dashboard/alertClothes.png'
import alertVector from '../../../assets/dashboard/alertVector.png'
import TopArrow from '../../../assets/dashboard/TopArrow.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

const Main = () => {

  const [data, setData] = useState(['40%', '30%', '45%', '42%', '60%', '33%', '15%', '70%', '90%', '94%', '3%', '56%'])

  return (
    <></>
    // <section className='pr-[60px] flex flex-col justify-center items-center gap-10 w-4/5'>
    //   <div className='grid grid-cols-4 gap-8 w-full'>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#E2FFDD]'>
    //       <p className='text-lg'>المنتجات</p>
    //       <p className='text-xl font-bold'>56</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#DDFFFD]'>
    //       <p className='text-lg'>التصنيفات</p>
    //       <p className='text-xl font-bold'>3</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#DDE2FF]'>
    //       <p className='text-lg'>المخزون</p>
    //       <p className='text-xl font-bold'>1022</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#DDF3FF]'>
    //       <p className='text-lg'>العملاء</p>
    //       <p className='text-xl font-bold'>600</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#DDE8FF]'>
    //       <p className='text-lg'>الطلبات الجديدة</p>
    //       <p className='text-xl font-bold'>50</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#FFF8DD]'>
    //       <p className='text-lg'>طلبات قيد الإنتظار</p>
    //       <p className='text-xl font-bold'>40</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#FFC6C6]'>
    //       <p className='text-lg'>الطلبات الملغية</p>
    //       <p className='text-xl font-bold'>10</p>
    //     </div>
    //     <div className='p-3 w-[100%] h-[150px] flex flex-col items-start justify-center gap-4 rounded-2xl bg-[#FFDDDD]'>
    //       <p className='text-lg'>الشكاوي والمقترحات</p>
    //       <p className='text-xl font-bold'>6</p>
    //     </div>
    //   </div>
    //   <div className='w-full flex items-start gap-5'>
    //     <div className='relative w-3/4 flex items-center gap-3 border-2 border-[#CFCFCF] rounded-xl rounded-tr-3xl p-3 h-full overflow-auto'>
    //       <div className='summary w-full h-full p-3 flex flex-col justify-start items-center gap-[60px]'>
    //         <span className='pl-1 w-full flex justify-between items-center'>
    //           <p className='w-2/5 text-center rounded-tr-3xl rounded-bl-3xl p-3 bg-[#4A588D] text-white absolute -top-[14px] -right-[14px]'>ملخص الشهر</p>
    //           <p className='mr-auto'>إبريل</p>
    //         </span>
    //         <div className='w-full flex justify-center items-center gap-4'>
    //           <span className='flex flex-col justify-center items-center gap-3 w-full'>
    //             <p className='text-[#3A4777]'>المبيعات</p>
    //             <CircularProgressbar value={65} className='h-[60px]' text={`213`} />
    //           </span>
    //           <span className='flex flex-col justify-center items-center gap-3 w-full'>
    //             <p className='text-[#3A4777]'>المنتجات</p>
    //             <CircularProgressbar value={65} className='h-[60px]' text={`213`} />
    //           </span>
    //           <span className='flex flex-col justify-center items-center gap-3 w-full'>
    //             <p className='text-[#3A4777]'>الزيارات</p>
    //             <CircularProgressbar value={80} className='h-[60px]' text={`421`} />
    //           </span>
    //           <span className='flex flex-col justify-center items-center gap-3 w-full'>
    //             <p className='text-[#3A4777]'>العملاء</p>
    //             <CircularProgressbar value={65} className='h-[60px]' text={`213`} />
    //           </span>
    //         </div>
    //         <div className='w-full flex flex-col gap-8'>
    //           <p className='text-xl font-bold ml-auto'>الأكثر طلبا</p>
    //           <div className='flex justify-between items-center w-full bg-[#93A9FF80] rounded-2xl p-3'>
    //             <span className='flex items-center gap-2'>
    //               <Image src={alertClothes} alt='most selling' className='w-[45px] h-[45px]' />
    //               <p>بدلة كاروهات</p>
    //             </span>
    //             <span className='flex items-center gap-2'>
    //               <p className='font-bold'>450</p>
    //               <Image src={TopArrow} alt='most selling' className='w-[24px] h-[24px]' />
    //             </span>
    //           </div>
    //           <div className='flex justify-between items-center w-full bg-[#93A9FF80] rounded-2xl p-3'>
    //             <span className='flex items-center gap-2'>
    //               <Image src={alertClothes} alt='most selling' className='w-[45px] h-[45px]' />
    //               <p>بدلة كاروهات</p>
    //             </span>
    //             <span className='flex items-center gap-2'>
    //               <p className='font-bold'>450</p>
    //               <Image src={TopArrow} alt='most selling' className='w-[24px] h-[24px]' />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='w-full h-full p-2'>
    //         <div className='h-full flex justify-center gap-2'>
    //         {data.map((col, i) => (
    //           <div key={i} className='flex flex-col justify-end items-center gap-1'>
    //             <span className={`w-3 rounded-t-2xl bg-[#4A588D]`} style={{height: col}}></span>
    //             <span className='flex flex-col justify-end items-center gap-1 text-sm font-bold'>
    //               <p>1</p>
    //               <p>April</p>
    //             </span>
    //           </div>
    //         ))
    //         }
    //         </div>
    //       </div>
    //     </div>
    //     <div className='w-1/4 h-full flex flex-col items-center gap-5 border-2 border-[#CFCFCF] rounded-xl rounded-tr-3xl p-3 relative'>
    //       <p className='w-2/5 text-center rounded-tr-3xl rounded-bl-3xl p-2 bg-[#4A588D] text-white absolute -top-[2px] -right-[2px]'>التنبيهات</p>
    //       <div className='flex flex-col gap-7 mt-[65px]'>
    //         <span className='flex items-center gap-2'>
    //           <Image src={alertVector} alt='user' className='w-14 h-14' />
    //           <span className='flex flex-col text-sm'>
    //           زائر اضاف بدلة كاروهات للسلة
    //           <p className='text-[#A7A7A7]'>منذ 3 ساعات</p>
    //           </span>
    //           <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //         </span>
    //         <span className='flex justify-center items-center gap-2'>
    //           <Image src={alertVector} alt='user' className='w-14 h-14' />
    //           <span className='flex flex-col text-sm'>
    //           زائر اضاف بدلة كاروهات للسلة
    //           <p className='text-[#A7A7A7]'>منذ 3 ساعات</p>
    //           </span>
    //           <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //         </span>
    //         <span className='flex justify-center items-center gap-2'>
    //           <Image src={alertVector} alt='user' className='w-14 h-14' />
    //           <span className='flex flex-col text-sm'>
    //           زائر اضاف بدلة كاروهات للسلة
    //           <p className='text-[#A7A7A7]'>منذ 3 ساعات</p>
    //           </span>
    //           <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //         </span>
    //         <span className='flex justify-center items-center gap-2'>
    //           <Image src={alertVector} alt='user' className='w-14 h-14' />
    //           <span className='flex flex-col text-sm'>
    //           زائر اضاف بدلة كاروهات للسلة
    //           <p className='text-[#A7A7A7]'>منذ 3 ساعات</p>
    //           </span>
    //           <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='w-full pb-10 flex items-start gap-5'>
    //     <div className='relative w-3/4 h-full flex items-start gap-3 bg-[#C9D4FF80] rounded-3xl p-3'>
    //       <div className='w-full p-3 flex flex-col justify-center gap-8 items-center'>
    //         <p className='w-1/5 text-center rounded-tr-3xl rounded-bl-3xl p-2 bg-[#4A588D] text-white absolute top-0 right-0'>أحدث الطلبات</p>
    //         <div className='mt-[65px] flex flex-col gap-3 w-full'>
    //           <span className='flex items-center justify-between gap-2 bg-white w-full rounded-xl p-7'>
    //             <span className='flex items-start gap-2'>
    //               <Image src={alertVector} alt='user' className='w-14 h-14' />
    //               <span className='flex flex-col items-start gap-2'>
    //                 <p className='font-bold'>سيد عبد العظيم</p>
    //                 <p className='text-sm text-[#A7A7A7]'>منذ 3 ساعات</p>
    //                 <p className='text-sm text-[#A7A7A7]'>#0021544</p>
    //               </span>
    //             </span>
    //             <span className='flex items-start gap-2'>
    //               <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //               <span className='flex flex-col items-start gap-2'>
    //                 <p className='font-bold'>بدلة كاروهات</p>
    //                 <p>500 ر.س</p>
    //               </span>
    //             </span>
    //           </span>
    //           <span className='flex items-center justify-between gap-2 bg-white w-full rounded-xl p-7'>
    //             <span className='flex items-start gap-2'>
    //               <Image src={alertVector} alt='user' className='w-14 h-14' />
    //               <span className='flex flex-col items-start gap-2'>
    //                 <p className='font-bold'>سيد عبد العظيم</p>
    //                 <p className='text-sm text-[#A7A7A7]'>منذ 3 ساعات</p>
    //                 <p className='text-sm text-[#A7A7A7]'>#0021544</p>
    //               </span>
    //             </span>
    //             <span className='flex items-start gap-2'>
    //               <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //               <span className='flex flex-col items-start gap-2'>
    //                 <p className='font-bold'>بدلة كاروهات</p>
    //                 <p>500 ر.س</p>
    //               </span>
    //             </span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='relative w-1/4 h-full flex flex-col justify-start gap-5 bg-[#C9D4FF80] rounded-3xl p-4'>
    //       <p className='w-3/5 text-center rounded-tr-3xl rounded-bl-3xl p-2 bg-[#4A588D] text-white absolute top-0 right-0'>منتجات نفذت</p>
    //       <div className='flex flex-col gap-3 w-full mt-[65px]'>
    //         <span className='flex justify-between items-center gap-2 w-full'>
    //           <span className='flex items-center gap-2'>
    //           <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //           بدلة كاروهات
    //           </span>
    //           <p className='font-bold'>500 ر.س</p>
    //         </span>
    //         <hr className='bg-[#FFFFFF] w-full h-[2px]'></hr>
    //         <span className='flex justify-between items-center gap-2 w-full'>
    //           <span className='flex items-center gap-2'>
    //           <Image src={alertClothes} alt='user' className='w-14 h-14' />
    //           بدلة كاروهات
    //           </span>
    //           <p className='font-bold'>500 ر.س</p>
    //         </span>
    //         <hr className='bg-[#FFFFFF] w-full h-[2px]'></hr>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Main

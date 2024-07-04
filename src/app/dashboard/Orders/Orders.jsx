'use client'
import Image from "next/image"
import DashboardHeader from "../dashboardHeader/dashboardHeader"
import timer from '../../../assets/dashboard/timer.svg'
import boxTime from '../../../assets/dashboard/box-time.svg'
import shipping from '../../../assets/dashboard/shipping.svg'
import boxTick from '../../../assets/dashboard/box-tick.svg'
import tickCircle from '../../../assets/dashboard/tick-circle.svg'
import boxRemove from '../../../assets/dashboard/box-remove.svg'
import rotate from '../../../assets/dashboard/3d-rotate.svg'
import trash from '../../../assets/dashboard/trash.svg'
import searchIcon from '../../../assets/dashboard/search.svg'
import userImg from '../../../assets/dashboard/userImg.svg'
import itemImg from '../../../assets/dashboard/alertClothes.png'
import printIcon from '../../../assets/dashboard/print.svg'
import dots from '../../../assets/dashboard/dots.svg'
import loading from '../../../assets/dashboard/loading.svg'
import loadingDot from '../../../assets/dashboard/loadingDot.svg'
import greenTickCircle from '../../../assets/dashboard/greenTickCircle.svg'
import grayTickCircle from '../../../assets/dashboard/grayTickCircle.svg'
import Link from "next/link"
import { useState } from "react"

const Orders = () => {
  const [orders, setOrders] = useState(true);
  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
      <DashboardHeader />
          { orders ?
            <>
              <div className='grid grid-cols-5 gap-10 w-full'>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FEF5A8] shadow-lg'>
                  <Image src={timer} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات قيد المراجعة</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FEE1A8]'>
                  <Image src={boxTime} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات قيد التحضير</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#F2FEA8]'>
                  <Image src={shipping} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات قيد الشحن</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#C9FEA8]'>
                  <Image src={boxTick} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات تم تسليمها</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#A8FEC0]'>
                  <Image src={tickCircle} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات منجزة</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FEA8A8]'>
                  <Image src={boxRemove} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات ملغية</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#A8CFFE]'>
                  <Image src={rotate} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات مرتجعة</p>
                </div>
                <div className='p-3 w-[100%] h-[55px] flex items-center justify-start gap-3 rounded-3xl bg-[#FF7A7A]'>
                  <Image src={trash} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                  <p className='text-base'>طلبات محذوفة</p>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-3xl border-[1px] border-[#F1F1F1]">
                      <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                        <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                          <tr>
                            <th className="px-6 py-4 relative">
                              <input
                                type="search"
                                placeholder="بحث"
                                className="placeholder:text-xs placeholder:font-normal outline-none text-black placeholder:pr-5 p-1 rounded-3xl w-2/4 float-right"
                              />
                              <Image
                                src={searchIcon}
                                alt="search"
                                className="w-[14px] h-[12px] absolute top-2/4 left-[55%] -translate-y-2/4 -translate-x-2/4"
                              />
                            </th>
                            <th className="px-6 py-4"></th>
                            <th className="px-6 py-4 font-normal">إجمالي الطلب</th>
                            <th className="px-6 py-4 font-normal border-r-[1px] border-[#F1F1F1]">حالة الطلب</th>
                          </tr>
                        </thead>
                        <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={``} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>1</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" onClick={() => setOrders(false)} />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>2</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>3</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>4</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>5</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>6</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>7</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td className="whitespace-nowrap">
                              <Link href={`/`} className="flex justify-start items-center gap-2 p-3">
                                <p className='text-base'>8</p>
                                <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                                <span className="flex flex-col items-start gap-1">
                                  <p className="text-md font-medium">أحمد حسن</p>
                                  <span className="flex gap-5 items-center">
                                    <p className="text-[#BFBFBF]">#565654</p>
                                    <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                                  </span>
                                </span>
                              </Link>
                            </td>
                            <td></td>
                            <td><p className="font-bold">1000.00 ر.س</p></td>
                            <td className="flex justify-center items-center px-6 py-4 border-r-[1px] border-[#F1F1F1]">
                              <div className="p-3 w-fit h-[35px] flex items-center gap-3 rounded-3xl bg-[#FEF5A8]">
                                <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
                                <p className="text-sm">قيد المراجعة</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
      :
      <div className='flex flex-col justify-start gap-24 w-full'>
        <div className='p-5 border-[1px] border-[#F1F1F1] rounded-3xl flex items-center justify-between'>
          <div className='w-3/4 flex-col flex justify-start items-start gap-6 p-3'>
            <div className="flex justify-start items-center gap-2 p-3">
              <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
              <span className="flex flex-col items-start gap-1">
                <p className="text-md font-medium">أحمد حسن</p>
                <span className="flex gap-5 items-center">
                  <p className="text-[#BFBFBF]">#565654</p>
                  <p className="text-[#BFBFBF] text-sm">رجالي/ بدل رسمي</p>
                </span>
              </span>
            </div>
            <div className='flex justify-center items-center gap-36 mt-12 p-4 border-[1px] border-[#F1F1F1] rounded-3xl text-base'>
              <span className='flex items-center gap-2'>
                <Image src={itemImg} alt='item' className='w-[45px] h-[45px]' />
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
                  <span className='text-center bg-[#5E6DA8] rounded-md text-white pt-2 pb-2 pl-3 pr-3'>
                    s
                  </span>
                </span>
              </span>
              <p>500.00 ر.س</p>
            </div>
            <div className='flex justify-center items-center gap-36 p-4 border-[1px] border-[#F1F1F1] rounded-3xl text-base'>
              <span className='flex items-center gap-2'>
                <Image src={itemImg} alt='item' className='w-[45px] h-[45px]' />
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
                  <span className='text-center bg-[#5E6DA8] rounded-md text-white pt-2 pb-2 pl-3 pr-3'>
                    s
                  </span>
                </span>
              </span>
              <p>500.00 ر.س</p>
            </div>
          </div>
          <div className='w-1/4 h-full flex flex-col gap-5 rounded-2xl relative order-status'>
            <span className='w-full flex justify-between font-bold mt-[45px]'>
              عدد المنتجات (2)
              <p className='text-[#434343]'>1000 ر.س</p>
            </span>
            <span className='w-full flex justify-between font-bold'>
              مصاريف الشحن
              <p className='text-[#434343]'>40 ر.س</p>
            </span>
            <span className='w-full flex justify-between font-bold'>
              خصومات
              <p className='text-[#434343]'>00.00 ر.س</p>
            </span>
            <span className='w-full flex justify-between gap-3 font-bold'>
              <input type='text' className='w-3/4 p-1 rounded-xl outline-none border-[1px] border-[#CCCCCC] placeholder:text-xs placeholder:font-light placeholder:text-[#CCCCCC] placeholder:pr-1 font-light' placeholder='ادخل كود الخصم' />
              <button className='text-sm rounded-xl bg-[#5E6DA8] text-white p-1 w-1/4 font-light'>تطبيق</button>
            </span>
            <hr className='bg-[#DEDEDE] text-[#DEDEDE] w-full h-[1px] rounded-md' />
            <span className='w-full flex justify-between font-bold'>
              الإجمالي
              <p className='text-[#434343]'>1040 ر.س</p>
            </span>
            <div className='flex flex-col gap-3 w-full mt-20'>
              <p>حالة الطلب</p>
              <div className="p-6 w-full h-[35px] flex justify-center items-center gap-6 rounded-2xl bg-[#FEF5A8]">
                <Image src={timer} alt="timer" className="w-[35px] h-[35px] bg-white p-2 rounded-3xl" />
                <p>قيد المراجعة</p>
              </div>
              <span className='p-2 rounded-2xl cursor-pointer bg-[#3DA241] text-white flex justify-center items-center gap-5' onClick={() => setOrders(true)}>
                <Image src={printIcon} alt='print' className='w-[35px] h-[35px]' />
                <p>طباعة الفاتورة</p>
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <p className='font-medium text-lg'>تتبع الشحنة</p>
          <div className='flex gap-8 min-w-[14%]'>
            <span className='flex flex-col justify-center items-center gap-2'>
              <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
              <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
            </span>
            <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#FEF5A8]">
              <Image src={timer} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
              <p className="text-sm">قيد المراجعة</p>
            </div>
          </div>
          <div className='flex gap-8 min-w-[14%]'>
            <span className='flex flex-col justify-center items-center gap-2'>
              <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
              <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
            </span>
            <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#FEE1A8]">
              <Image src={boxTime} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
              <p className="text-sm">قيد التحضير</p>
            </div>
          </div>
          <div className='flex gap-8 min-w-[14%]'>
            <span className='flex flex-col justify-center items-center gap-2'>
              <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
              <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
            </span>
            <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#F2FEA8]">
              <Image src={shipping} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
              <p className="text-sm">قيد الشحن</p>
            </div>
          </div>
          <div className='flex gap-8 min-w-[14%]'>
            <span className='flex flex-col justify-center items-center gap-2'>
              <Image src={greenTickCircle} alt='done' className='w-[20px] h-[20px]' />
              <Image src={dots} alt='dots' className='w-[40px] h-[40px]' />
            </span>
            <div className="p-3 w-full h-[35px] flex justify-center items-center gap-3 rounded-2xl bg-[#C9FEA8]">
              <Image src={boxTick} alt="timer" className="w-[30px] h-[30px] bg-white p-2 rounded-3xl" />
              <p className="text-sm">تم تسليمها</p>
            </div>
          </div>
          <div className='flex gap-8'>
            <span className='flex flex-col justify-center items-center gap-2'>
              <Image src={grayTickCircle} alt='done' className='w-[20px] h-[20px]' />
            </span>
            <span className='relative'>
              <Image src={loading} alt="loading" className="w-[70px] h-[50px] bg-white p-2 rounded-3xl" />
              <span className='flex justify-center items-center gap-1 absolute top-2/4 -translate-y-2/4 -translate-x-2/4 right-2'>
                <Image src={loadingDot} alt="loading" className="w-[7px] h-[7px]" />
                <Image src={loadingDot} alt="loading" className="w-[7px] h-[7px]" />
                <Image src={loadingDot} alt="loading" className="w-[7px] h-[7px]" />
              </span>
            </span>
          </div>
        </div>
      </div>
    }
    </main>
  )
}

export default Orders

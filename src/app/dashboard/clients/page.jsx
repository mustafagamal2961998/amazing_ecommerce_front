'use client'

import Wrapper from "../Wrapper"
import searchIcon from '../../../assets/dashboard/search.svg'
import addIcon from '../../../assets/dashboard/plus.svg'
import userImg from '../../../assets/dashboard/userImg.svg'
import chevronsLeft from '../../../assets/dashboard/chevrons-left.svg'
import userIcon from '../../../assets/dashboard/userIcon.svg'
import Image from "next/image"
import Link from "next/link"

const Clients = () => {
  return (
    <Wrapper>
      <div className='w-full flex flex-col items-start gap-5'>
        <p className='font-bold'>العملاء</p>
        <div className='w-full flex justify-between items-center'>
          <div className='relative w-2/5'>
            <input type='text' placeholder='بحث' className='w-full outline-none shadow shadow-[] p-2 rounded-3xl' onChange={(e) => handleSearch(e.target.value)} />
            <Image src={searchIcon} alt='search' className='w-[16px] h-[16px] absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
          </div>
          <span className='flex justify-center items-center gap-2 pt-2 pb-2 pr-8 pl-8 bg-[#00B6A9] text-white rounded-3xl cursor-pointer'>
            <Image src={addIcon} alt='add' className='w-[16px] h-[16px]' />
            <p className='text-sm'>إضافة عميل جديد</p>
          </span>
        </div>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
              <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#8AD0C3] to-[#00B6A9]">
                  <tr>
                    <th className="px-6 py-4 font-normal">الإسم</th>
                    <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">البريد الإلكتروني</th>
                    <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">الجوال</th>
                    <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تاريخ الإنضمام</th>
                    <th className="px-6 py-4 font-normal border-r-[1px] border-[#F1F1F1]">الملف الشخصي</th>
                  </tr>
                </thead>
                <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>1</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>2</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>3</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>4</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>5</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>6</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>7</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <Link href={`/dashboard/clients/1`} className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>8</p>
                        <Image src={userImg} alt="user" className="w-[40px] h-[40px]" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">سيد عبدالعظيم</p>
                          <p className="text-[#BFBFBF]">#565654</p>
                        </span>
                      </Link>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>sayed@amazing.sa</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">+966 656585454</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">2024 - 05 - 05</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={``} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt="user" className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default Clients

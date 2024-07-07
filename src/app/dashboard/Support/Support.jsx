import './style.css'
import { useState } from 'react'
import Image from 'next/image'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import chatsIcon from '../../../assets/dashboard/chats.svg'
import complaintsIcon from '../../../assets/dashboard/complaints.svg'
import back from '../../../assets/dashboard/back.svg'
import person1 from '../../../assets/dashboard/person1.svg'
import person2 from '../../../assets/dashboard/person2.svg'
import send from '../../../assets/dashboard/send.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Support = () => {
    const [chats, setChats] = useState(false)
    const [complaints, setComplaints] = useState(false)

  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
    {!chats && !complaints &&
        <div className='w-full flex flex-col items-start gap-5'>
            <h2 className='text-lg'>الدعم الفني والمساعدة</h2>
            <div className='w-full flex items-start gap-5'>
                <div className='relative w-[280px] h-[150px] cursor-pointer select-none bg-[#BAFBB8] rounded-2xl flex flex-col justify-center items-center gap-2' onClick={() => {setChats(true); setComplaints(false);}}>
                    <Image src={chatsIcon} alt='chats' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>المحادثات المباشرة للعملاء</p>
                    <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-sm w-[24px] h-[24px] text-center'>
                        5
                    </span>
                </div>
                <div className='relative w-[280px] h-[150px] cursor-pointer select-none bg-[#FFFDC9] rounded-2xl flex flex-col justify-center items-center gap-2' onClick={() => {setComplaints(true); setChats(false);}}>
                    <Image src={complaintsIcon} alt='complaints' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>شكاوي ومقترحات</p>
                    <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-sm w-[24px] h-[24px] text-center'>
                        5
                    </span>
                </div>
            </div>
        </div>
    }
    {
        chats &&
        <div className='chats-container w-full flex flex-col items-start gap-5 pb-12'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-lg'>المحادثات المباشرة للعملاء</h2>
                <span className='flex items-center gap-2 select-none cursor-pointer'>
                    <p className='text-[#4A588D] text-lg'>الدعم الفني والمساعدة</p>
                    <Image src={back} alt='back' className='w-[25px] h-[25px]' />
                </span>
            </div>
            <div className='w-full min-h-screen flex flex-col justify-start items-center rounded-2xl shadow-lg'>
                <div className='w-full relative h-[70px] p-2 bg-[#BAFBB8] rounded-t-2xl flex justify-start items-center gap-10'>
                    <span className='relative w-1/4 search-con'>
                        <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-[98%] shadow-md rounded-full outline-none' />
                        <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-7 top-2/4 -translate-y-2/4 -translate-x-2/4' />
                    </span>
                    <span className='flex items-center gap-2'>
                        <Image src={person1} alt='user image' className='w-[50px] h-[50px]' />
                        <p>سيد عبد العظيم</p>
                    </span>
                </div>
                <div className='w-full h-full flex justify-start items-center'>
                    <div className='w-1/4 mb-auto p-2 mt-5 pl-0 flex flex-col justify-center items-center gap-5'>
                        <div className='w-full cursor-pointer relative flex justify-start items-center gap-2'>
                            <Image src={person1} alt='user image' className='w-[60px] h-[60px]' />
                            <span className='flex flex-col items-start gap-3'>
                                <p>سيد عبد العظيم</p>
                                <p className='text-sm'>الطلب رقم 02354 اريد تبديله...</p>
                            </span>
                            <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-xs w-[20px] h-[20px] text-center'>
                                12
                            </span>
                        </div>
                        <hr className='w-full h-[2px] bg-[#E3E3E3]'></hr>
                        <div className='w-full cursor-pointer relative flex justify-start items-center gap-2'>
                            <Image src={person2} alt='user image' className='w-[60px] h-[60px]' />
                            <span className='flex flex-col items-start gap-3'>
                                <p>محمد عصام</p>
                                <p className='text-sm'>لدي مشكلة في تغير بيانات الـمل...</p>
                            </span>
                            <span className='absolute left-2 top-4 bg-[#FF0000] text-white rounded-full text-xs w-[20px] h-[20px] text-center'>
                                2
                            </span>
                        </div>
                        <hr className='w-full h-[2px] bg-[#E3E3E3]'></hr>
                    </div>
                    <div className='w-3/4 h-full border-r-[1px] border-[#E3E3E3] p-5 flex flex-col justify-center items-end gap-10'>
                        <div className='w-full h-full flex flex-col justify-end items-center gap-5'>
                            <span className='p-3 rounded-2xl rounded-bl-none text-sm shadow-lg mr-auto'>السلام عليكم ورحمة الله وبركاته</span>
                            <span className='bg-[#BAFBB8] p-3 rounded-2xl rounded-bl-none text-sm shadow-lg ml-auto'>وعليكم السلام ورحمة الله وبركاته</span>
                        </div>
                        <div className='w-full mt-auto flex items-center justify-start gap-2'>
                            <input type='text' placeholder='اكتب هنا...' className='p-1 pr-2 w-full border-[1px] border-[#D7D7D7] rounded-2xl outline-none' />
                            <span className='w-[30px] h-[30px] rounded-full duration-200 bg-[#BAFBB8] hover:bg-[#bafbb8da] flex justify-center items-center select-none cursor-pointer'>
                                <Image src={send} alt='user image' className='w-[18px] h-[18px]' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    {
        complaints &&
        <div className='chats-container w-full flex flex-col items-start gap-5 pb-12'>
            <h2 className='text-lg'>شكاوي ومقترحات</h2>
            <div className='w-full min-h-screen flex flex-col justify-start items-center rounded-2xl shadow-lg'>
                <div className='w-full h-[70px] p-2 bg-[#FFFDC9] rounded-t-2xl flex justify-start items-center gap-10'>
                    <span className='relative w-1/4 search-con'>
                        <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-[98%] shadow-md rounded-full outline-none' />
                        <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-7 top-2/4 -translate-y-2/4 -translate-x-2/4' />
                    </span>
                    <span className='flex items-center gap-2'>
                        <Image src={person1} alt='user image' className='w-[50px] h-[50px]' />
                        <p>سيد عبد العظيم</p>
                    </span>
                </div>
                <div className='w-full h-full flex justify-start items-center'>
                    <div className='w-1/4 mb-auto mt-5 p-2 pl-0 flex flex-col justify-center items-center gap-5'>
                        <div className='w-full cursor-pointer relative flex justify-start items-center gap-2'>
                            <Image src={person1} alt='user image' className='w-[60px] h-[60px]' />
                            <span className='flex flex-col items-start gap-3'>
                                <p>سيد عبد العظيم</p>
                                <p className='text-sm'>الطلب رقم 02354 اريد تبديله...</p>
                            </span>
                            <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-xs w-[20px] h-[20px] text-center'>
                                12
                            </span>
                        </div>
                        <hr className='w-full h-[2px] bg-[#E3E3E3]'></hr>
                        <div className='w-full cursor-pointer relative flex justify-start items-center gap-2'>
                            <Image src={person2} alt='user image' className='w-[60px] h-[60px]' />
                            <span className='flex flex-col items-start gap-3'>
                                <p>محمد عصام</p>
                                <p className='text-sm'>لدي مشكلة في تغير بيانات الـمل...</p>
                            </span>
                            <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-xs w-[20px] h-[20px] text-center'>
                                2
                            </span>
                        </div>
                        <hr className='w-full h-[2px] bg-[#E3E3E3]'></hr>
                    </div>
                    <div className='w-3/4 h-full p-5 flex flex-col justify-center items-end gap-10 border-r-[1px] border-[#E3E3E3]'>
                        <div className='w-full h-full flex flex-col justify-end items-center gap-5'>
                            <span className='p-3 rounded-2xl rounded-bl-none text-sm shadow-lg mr-auto'>السلام عليكم ورحمة الله وبركاته</span>
                            <span className='bg-[#FFFDC9] p-3 rounded-2xl rounded-bl-none text-sm shadow-lg ml-auto'>وعليكم السلام ورحمة الله وبركاته</span>
                        </div>
                        <div className='w-full mt-auto flex items-center justify-start gap-2'>
                            <input type='text' placeholder='اكتب هنا...' className='p-1 pr-2 w-full border-[1px] border-[#D7D7D7] rounded-2xl outline-none' />
                            <span className='w-[30px] h-[30px] rounded-full duration-200 bg-[#FFFDC9] hover:bg-[#fffdc9dc] flex justify-center items-center select-none cursor-pointer'>
                                <Image src={send} alt='user image' className='w-[18px] h-[18px]' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    </main>
  )
}

export default Support

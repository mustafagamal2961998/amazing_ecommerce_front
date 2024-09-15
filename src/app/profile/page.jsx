'use client'
import './style.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useStatusContext } from '../../Utils/Status/statusContext'
import ProfileSidebar from './ProfileSidebar'
import Navbar from '../../components/Navbar/Navbar'
import darkEdit from '../../assets/profile/darkEdit.png'

const profile = () => {
    const { sidebar, setSidebar } = useStatusContext();

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            {!sidebar && <FontAwesomeIcon icon={faBars} className='w-5 h-5 absolute right-2 top-5 cursor-pointer duration-200 hover:text-red-500 md:hidden' onClick={() => setSidebar(!sidebar)} />}
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`w-full h-fit mt-[100px] pb-[60px] bg-[#EDF0FF] rounded-md flex flex-col gap-20`}>
                    <span className='flex justify-between'>
                        <span className='p-2 w-[12%] max-md:w-1/4 text-center bg-[#252B42] text-white rounded-tr-xl rounded-bl-xl'>
                            معلومات الحساب
                        </span>
                        <span className='flex items-center gap-2 ml-5 cursor-pointer mt-4 '>
                            <Image src={darkEdit} className='w-[24px] h-[24px]' alt='edit icon' />
                            <p className='text-black'>تعديل</p>
                        </span>
                    </span>
                    <div className='flex flex-col items-center gap-3 mb-5'>
                        <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                            <span className='w-1/6 max-md:w-1/4 text-center bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>البريد الإلكتروني</span>
                            <p className='font-bold max-md:text-xs m-auto'>a.hassan@amazing.sa</p>
                        </span>
                        <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                            <span className='w-1/6 max-md:w-1/4 text-center bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>رقم الجوال</span>
                            <p className='font-bold max-md:text-xs m-auto'>+201237478521</p>
                        </span>
                        <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                            <span className='w-1/6 max-md:w-1/4 text-center bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>الجنس</span>
                            <p className='font-bold max-md:text-xs m-auto'>ذكر</p>
                        </span>
                        <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                            <span className='w-1/6 max-md:w-1/4 text-center bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>تاريخ الميلاد</span>
                            <p className='font-bold max-md:text-xs m-auto'>2 يناير 1996</p>
                        </span>
                        <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                            <span className='w-1/6 max-md:w-1/4 text-center bg-[#5E6DA8] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>كلمة المرور</span>
                            <p className='font-bold max-md:text-xs m-auto'>*************</p>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default profile
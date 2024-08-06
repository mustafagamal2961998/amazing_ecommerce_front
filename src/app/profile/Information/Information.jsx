import Image from 'next/image';
import { useStatusContext } from '../../../Utils/Status/statusContext'
import darkEdit from '../../../assets/profile/darkEdit.png'

const Information = () => {
    const { sidebar } = useStatusContext();
  return (
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
  )
}

export default Information

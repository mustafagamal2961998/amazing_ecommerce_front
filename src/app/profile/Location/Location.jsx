import { useStatusContext } from '../../../Utils/Status/statusContext'
import Image from "next/image"
import addLocation from '../../../assets/profile/addLocation.png'
import darkEdit from '../../../assets/profile/darkEdit.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Location = () => {

    const { sidebar } = useStatusContext();

  return (
    <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
        <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
            <span className='flex justify-between w-full'>
                <h2 className='text-2xl max-md:text-base font-bold'>عناوين الشحن</h2>
                <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-2xl bg-[#5E6DA8] p-2 mt-6'>
                    <Image src={addLocation} className='w-[24px] h-[24px]' alt='add location' />
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
                    <p>سيد عبد العظيم</p>
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
  )
}

export default Location

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import clothes1 from '../../../assets/dashboard/clothes1.svg'
import star from '../../../assets/dashboard/star.svg'
import Image from 'next/image'

const Rating = () => {
  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
        <div className='w-full flex flex-col items-start gap-5'>
            <h2 className='text-lg'>تقييمات المنتجات</h2>
            <span className='relative w-2/4'>
                <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
                <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </span>
            <div className='w-full grid grid-cols-5 gap-10 pb-5'>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
                <div className='w-full p-1 border-[1px] border-[#404B70] rounded-2xl flex flex-col justify-center items-center gap-2'>
                    <Image src={clothes1} alt='product image' className='w-full h-full object-cover' />
                    <p>اسم المنتج</p>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>500 ر.س</p>
                        <p className='text-xs line-through text=[#9B9B9B]'>750 ر.س</p>
                    </span>
                    <span className='flex items-center gap-1'>
                        <p>3 ألوان</p>
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#001C63]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#409ACE]' />
                        <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#1A6872]' />
                    </span>
                    <span className='w-full p-2 mb-2 select-none cursor-pointer flex justify-center items-center gap-3 bg-[#404B70] rounded-xl'>
                        <Image src={star} alt='product image' className='w-[25px] h-[25px]' />
                        <p className='text-lg text-white'>التقييمات</p>
                    </span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Rating

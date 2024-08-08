import Image from 'next/image'
import cloth from '../../../../assets/dashboard/clothes1.svg'
import orderTracking from '../../../../assets/profile/orderTracking.svg'
import reBuy from '../../../../assets/profile/reBuy.svg'
import notes from '../../../../assets/profile/notes.svg'
import review from '../../../../assets/profile/review.svg'
import returnProduct from '../../../../assets/profile/returnProduct.svg'

const ArchivedOrders = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-10'>
        <div className='w-full flex flex-col justify-center items-center gap-1'>
            <div className='w-full flex items-center justify-center gap-14 max-md:flex-col max-md:gap-2 p-3 rounded-tr-3xl rounded-tl-3xl bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                <span className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-lg font-bold'>تاريخ الطلب</p>
                    <p className='text-[#5E6DA8]'>16 يوليو 2014</p>
                </span>
                <span className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-lg font-bold'>حالة الطلب</p>
                    <p className='text-[#5E6DA8]'>تم التسليم</p>
                </span>
                <span className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-lg font-bold'>تاريخ التسليم</p>
                    <p className='text-[#5E6DA8]'>17 يوليو 2014</p>
                </span>
                <span className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-lg font-bold'>قيمة الطلب</p>
                    <p className='text-[#5E6DA8]'>500 ر.س</p>
                </span>
            </div>
            <div className='w-full p-5 bg-[#D9D9D98A] rounded-br-3xl rounded-bl-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                <div className='flex items-center gap-3 max-md:flex-col max-md:justify-center'>
                    <Image src={cloth} alt='cloth' className='w-full' />
                    <span className='flex flex-col items-start gap-2 font-bold'>
                        <p className='text-lg'>بدلة بأزرار</p>
                        <span className='flex items-center gap-2 font-bold'>
                            اللون
                            <p className='text-lg'>: أزرق</p>
                        </span>
                        <span className='flex items-center gap-2 font-bold'>
                            المقاس
                            <p className='text-lg'>:XL</p>
                        </span>
                    </span>
                </div>
                <div className='w-1/4 max-md:w-3/4 max-md:pb-10 flex flex-col items-center justify-center gap-3'>
                    <span className='w-full h-[40px] flex justify-evenly items-center shadow-lg bg-[#34C759] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <p>شراء مرة أخرى</p>
                        <Image src={reBuy} alt='re buy' className='w-6 h-6 cursor-pointer' />
                    </span>
                    <span className='w-full h-[40px] flex justify-evenly items-center shadow-lg bg-[#FF9500] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <p>اكتب ملاحظات للبائع</p>
                        <Image src={notes} alt='notes' className='w-6 h-6 cursor-pointer' />
                    </span>
                    <span className='w-full h-[40px] flex justify-evenly items-center shadow-lg bg-[#30B0C7] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <p>اكتب تقييم للمنتج</p>
                        <Image src={review} alt='review' className='w-6 h-6 cursor-pointer' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArchivedOrders
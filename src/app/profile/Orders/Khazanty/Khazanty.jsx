import Image from "next/image"
import HomePage from "../../../../components/Home page/HomePage"
import cloth from '../../../../assets/dashboard/clothes1.svg'
import addToCart from '../../../../assets/profile/addToCart.svg'
import removeFromCart from '../../../../assets/profile/removeFromCart.svg'

const Khazanty = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-10'>
        <HomePage />
        <div className='w-3/4 flex flex-col justify-center items-center gap-1'>
            <span className='w-full p-3 rounded-tr-full rounded-tl-full bg-gradient-to-br from-[#7F7B7F] to-[#E5DEE5]'>
                <p className='text-lg font-bold mr-5'>سلة المشتريات</p>
            </span>
            <div className='w-full p-5 bg-[#D9D9D98A] flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                <div className='flex items-center gap-3 max-md:flex-col max-md:justify-center'>
                    <Image src={cloth} alt='cloth' className='w-full' />
                    <span className='flex flex-col items-start gap-2'>
                        <p className='text-lg'>بدلة بأزرار</p>
                        <span className='flex items-center gap-2'>
                            اللون
                            <p className='text-lg'>: أزرق</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            المقاس
                            <p className='text-lg'>:XL</p>
                        </span>
                        <span className='flex flex-col gap-2 justify-center items-center'>
                            <p className='font-bold'>الكمية</p>
                            <span className='flex items-center gap-2'>
                                <Image src={addToCart} alt='add to cart' className='w-6 h-6 cursor-pointer' />
                                <input type='number' min={0} className='w-[40px] outline-none rounded-md bg-[#FFFFFF] text-center' />
                                <Image src={removeFromCart} alt='remove from cart' className='w-6 h-6 cursor-pointer' />
                            </span>
                        </span>
                    </span>
                </div>
                <div className='w-1/4 max-md:w-3/4 flex flex-col items-center justify-center gap-3'>
                    <span className='relative w-full h-[40px] shadow-lg bg-[#FF9500] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <h2 className='w-max select-none text-lg text-white max-md:text-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>تعديل</h2>
                    </span>
                    <span className='relative w-full h-[40px] shadow-lg bg-[#FF3B30] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <h2 className='w-max select-none text-lg text-white max-md:text-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>إرسال إلي المفضلة</h2>
                    </span>
                    <span className='relative w-full h-[40px] shadow-lg bg-[#34C759] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <h2 className='w-max select-none text-lg text-white max-md:text-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>متابعة عملية الشراء</h2>
                    </span>
                </div>
            </div>
            <div className='w-full p-5 bg-[#D9D9D98A] rounded-bl-3xl rounded-br-3xl flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                <div className='flex items-center gap-3 max-md:flex-col max-md:justify-center'>
                    <Image src={cloth} alt='cloth' className='w-full' />
                    <span className='flex flex-col items-start gap-2'>
                        <p className='text-lg'>بدلة بأزرار</p>
                        <span className='flex items-center gap-2'>
                            اللون
                            <p className='text-lg'>: أزرق</p>
                        </span>
                        <span className='flex items-center gap-2'>
                            المقاس
                            <p className='text-lg'>:XL</p>
                        </span>
                        <span className='flex flex-col gap-2 justify-center items-center'>
                            <p className='font-bold'>الكمية</p>
                            <span className='flex items-center gap-2'>
                                <Image src={addToCart} alt='add to cart' className='w-6 h-6 cursor-pointer' />
                                <input type='number' min={0} className='w-[40px] outline-none rounded-md bg-[#FFFFFF] text-center' />
                                <Image src={removeFromCart} alt='remove from cart' className='w-6 h-6 cursor-pointer' />
                            </span>
                        </span>
                    </span>
                </div>
                <div className='w-1/4 max-md:w-3/4 flex flex-col items-center justify-center gap-3'>
                    <span className='relative w-full h-[40px] shadow-lg bg-[#FF9500] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <h2 className='w-max select-none text-lg text-white max-md:text-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>تعديل</h2>
                    </span>
                    <span className='relative w-full h-[40px] shadow-lg bg-[#FF3B30] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <h2 className='w-max select-none text-lg text-white max-md:text-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>إرسال إلي المفضلة</h2>
                    </span>
                    <span className='relative w-full h-[40px] shadow-lg bg-[#34C759] p-2 rounded-br-full rounded-tl-full select-none cursor-pointer'>
                        <h2 className='w-max select-none text-lg text-white max-md:text-base absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>متابعة عملية الشراء</h2>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Khazanty


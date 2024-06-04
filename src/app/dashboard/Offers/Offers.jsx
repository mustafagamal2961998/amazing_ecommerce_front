import './style.css'
import { useState } from 'react'
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import plus from '../../../assets/dashboard/plus.svg'
import discountCoupon from '../../../assets/dashboard/discountCoupon.svg'
import greenEdit from '../../../assets/dashboard/greenEdit.svg'
import removeCoupon from '../../../assets/dashboard/removeCoupon.svg'
import couponOptions from '../../../assets/dashboard/couponOptions.svg'
import Image from 'next/image';
import calendar from '../../../assets/dashboard/calendar.svg'
import checkbox from '../../../assets/dashboard/Checkbox.svg'
import emptyCheckbox from '../../../assets/dashboard/emptyCheckbox.svg'
import back from '../../../assets/dashboard/whiteBack.svg'

const Offers = () => {
    const [addCoupon, setAddCoupon] = useState(false)
    const [options, setOptions] = useState(false)
    const [withFreeShipping, setWithFreeShipping] = useState(true)
    const [discountedProductsExcluded, setDiscountedProductsExcluded] = useState(false)

  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
    {
        !addCoupon ?
        <div className='w-full flex flex-col items-start gap-5'>
            <h2 className='text-lg'>التخفيضات والقسائم</h2>
            <div className='w-full flex items-center justify-between'>
                <span className='relative w-2/4'>
                    <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
                    <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
                </span>
                <span className='flex justify-center items-center gap-2 pt-2 pb-2 pr-8 pl-8 bg-[#4A588D] text-white rounded-3xl cursor-pointer' onClick={() => setAddCoupon(true)}>
                    <Image src={plus} alt='add' className='w-[18px] h-[18px]' />
                    <Image src={discountCoupon} alt='offers' className='w-[30px] h-[30px] -mr-4' />
                    <p className='text-md'>إضافة كوبون جديد</p>
                </span>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-[103%]">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden rounded-3xl shadow">
                        <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                            <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                                <tr>
                                    <th className="px-6 py-4 font-normal">عنوان الكوبون</th>
                                    <th className="px-6 py-4 font-normal">تاريخ البدء</th>
                                    <th className="px-6 py-4 font-normal">تاريخ الإنتهاء</th>
                                    <th className="px-6 py-4 font-normal">الكوبون</th>
                                    <th className="px-6 py-4 font-normal">المبلغ/النسبة</th>
                                    <th className="px-6 py-4 font-normal">المبلغ/النسبة</th>
                                </tr>
                            </thead>
                            <tbody className="text-black p-3">
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap p-5">خصم الافتتاح</td>
                                    <td className='text-base p-5' dir="ltr">2024 - 05 - 04</td>
                                    <td className='whitespace-nowrap p-5' dir="ltr">2024 - 05 - 11</td>
                                    <td className="whitespace-nowrap p-5">amazing24</td>
                                    <td className='whitespace-nowrap p-5'>50 ر.س</td>
                                    <td className='relative p-5 flex justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={couponOptions} alt="coupon options" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOptions(!options)} />
                                            <span className={`w-fit z-50 absolute right-[-85px] top-2 bg-white p-5 rounded-3xl shadow-2xl ${options ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer w-full'>
                                                    <Image src={greenEdit} alt="edit" className="w-[30px] h-[30px]" />
                                                    <p>تعديل</p>
                                                </span>
                                                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer w-full'>
                                                    <Image src={removeCoupon} alt="remove" className="w-[30px] h-[30px]" />
                                                    <p>حذف الكوبون</p>
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap p-5">عيد الأضحي</td>
                                    <td className='text-base p-5' dir="ltr">2024 - 05 - 04</td>
                                    <td className='whitespace-nowrap p-5' dir="ltr">2024 - 05 - 11</td>
                                    <td className="whitespace-nowrap p-5">amazing24</td>
                                    <td className='whitespace-nowrap p-5'>%25</td>
                                    <td className='relative p-5 flex justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={couponOptions} alt="coupon options" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOptions(!options)} />
                                            {/* <span className={`w-fit absolute right-[-60px] top-2 bg-white p-5 rounded-3xl shadow-2xl ${options ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={greenEdit} alt="edit" className="w-[30px] h-[30px]" />
                                                    <p>تعديل</p>
                                                </span>
                                                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={removeCoupon} alt="remove" className="w-[30px] h-[30px]" />
                                                    <p>حذف الكوبون</p>
                                                </span>
                                            </span> */}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap p-5">خصم خاص</td>
                                    <td className='text-base p-5' dir="ltr">2024 - 05 - 04</td>
                                    <td className='whitespace-nowrap p-5' dir="ltr">2024 - 05 - 11</td>
                                    <td className="whitespace-nowrap p-5">vip24</td>
                                    <td className='whitespace-nowrap p-5'>%40</td>
                                    <td className='relative p-5 flex justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={couponOptions} alt="coupon options" className="w-[30px] h-[30px] cursor-pointer" onClick={() => setOptions(!options)} />
                                            {/* <span className={`w-fit absolute right-[-60px] top-2 bg-white p-5 rounded-3xl shadow-2xl ${options ? 'flex flex-col justify-center items-start gap-3' : 'hidden'}`}>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={greenEdit} alt="edit" className="w-[30px] h-[30px]" />
                                                    <p>تعديل</p>
                                                </span>
                                                <hr className='w-full h-[2px] bg-[#DFDFDF]'></hr>
                                                <span className='flex items-center gap-2 font-bold select-none cursor-pointer'>
                                                    <Image src={removeCoupon} alt="remove" className="w-[30px] h-[30px]" />
                                                    <p>حذف الكوبون</p>
                                                </span>
                                            </span> */}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className='w-3/4 flex flex-col justify-center items-center gap-5 shadow-lg rounded-2xl'>
            <span className='flex justify-center items-center p-2 mb-auto ml-auto w-1/5 rounded-tr-2xl rounded-bl-2xl bg-[#4A588D] text-white'>
                <p>التخفيضات والقسائم</p>
            </span>
            <form className='w-full flex flex-col justify-center items-center gap-5 pb-16'>
                <div className='w-full flex flex-col gap-3 items-start pr-8 pl-8 mt-12'>
                    <span className='flex items-center gap-1'>
                        <p className='font-bold'>كود الكوبون </p>(
                        <p className='text-[#FC9898]'>حروف انجليزية وأرقام بدون مسافات</p>)
                    </span>
                    <input type='text' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg' />
                </div>
                <div className='w-full flex flex-col gap-3 items-start pr-8 pl-8'>
                    <p className='font-bold'>نوع الخصم</p>
                    <span className='w-full relative'>
                        <input type='text' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg' />
                        <select className='w-[12%] outline-none bg-[#4A588D] text-white text-center rounded-lg absolute left-0 top-0'>
                            <option className='bg-white text-black'>نسبة(%)</option>
                            <option className='bg-white text-black'>ر.س</option>
                        </select>
                    </span>
                </div>
                <div className='w-full flex justify-center items-center gap-4 pr-8 pl-8'>
                    <div className='w-full flex flex-col gap-3 items-start'>
                        <p className='font-bold'>تاريخ بداية الكوبون</p>
                        <span className='w-full !h-10 relative p-1 border-[1px] border-[#D6D6D6] rounded-lg'>
                            <input type='date' className='w-[62%] !h-5 text-[12px] p-3 mb-3 outline-none' />
                            <Image src={calendar} className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-2/4 -translate-y-2/4 -translate-x-2/4 z-50' alt='calendar' />
                        </span>
                    </div>
                    <div className='w-full flex flex-col gap-3 items-start'>
                        <p className='font-bold'>تاريخ إنتهاء الكوبون</p>
                        <span className='w-full !h-10 relative p-1 border-[1px] border-[#D6D6D6] rounded-lg'>
                            <input type='date' className='w-[62%] !h-5 text-[12px] p-3 mb-3 outline-none' />
                            <Image src={calendar} className='w-[16px] h-[16px] text-gray-300 absolute left-4 top-2/4 -translate-y-2/4 -translate-x-2/4 z-50' alt='calendar' />
                        </span>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-4 pr-8 pl-8'>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <p className='font-bold'>مع شحن مجاني</p>
                        <div className='w-full p-1 select-none border-[1px] border-[#D6D6D6] rounded-lg flex items-center gap-2'>
                            <Image src={withFreeShipping ? checkbox : emptyCheckbox} alt='empty check box' className='cursor-pointer bg-[#F2F2F2]' onClick={() => setWithFreeShipping(!withFreeShipping)} />
                            <p className={withFreeShipping ? 'text-black' : 'text-[#AEAEAE]'}>مع شحن مجاني</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <p className='font-bold'>استثناء المنتجات المخفضة</p>
                        <div className='w-full p-1 select-none border-[1px] border-[#D6D6D6] rounded-lg flex items-center gap-2'>
                            <Image src={discountedProductsExcluded ? checkbox : emptyCheckbox} alt='empty check box' className='cursor-pointer bg-[#F2F2F2]' onClick={() => setDiscountedProductsExcluded(!discountedProductsExcluded)} />
                            <p className={discountedProductsExcluded ? 'text-black' : 'text-[#AEAEAE]'}>استثناء المنتجات المخفضة</p>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 flex flex-col items-start gap-3 pr-8 pl-8 ml-auto mt-12'>
                    <p className='font-bold'>الحد الأدني للمشتريات(غير شامل قيمة الضريبة) </p>
                    <input type='number' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg placeholder:text-black' placeholder='0' />
                </div>
                <div className='w-full flex flex-col items-start gap-3 pr-8 pl-8 ml-auto mt-12'>
                    <p className='font-bold'>الحد الأدني عدد مرات الإستخدام للجميع </p>
                    <input type='number' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg placeholder:text-black' placeholder='0' />
                </div>
                <div className='w-full flex flex-col items-start gap-3 pr-8 pl-8 ml-auto'>
                    <p className='font-bold'>عدد مرات الإستخدام للعميل الواحد </p>
                    <input type='number' className='w-full p-1 pr-4 border-[1px] border-[#D6D6D6] outline-none rounded-lg placeholder:text-black' placeholder='0' />
                </div>
                <div className='w-full flex justify-center items-center gap-5 mt-12'>
                    <input type='submit' value='حفظ' className='w-[250px] p-2 rounded-3xl bg-[#4A588D] text-white' />
                    <span className='w-[250px] p-2 rounded-3xl cursor-pointer select-none flex justify-center items-center gap-5 bg-[#4A588D] text-white'>
                        <Image src={back} alt='back' className='w-[25px] h-[25px]' />
                        <p>رجوع</p>
                    </span>
                </div>
            </form>
        </div>
    }
    </main>
  )
}

export default Offers

import { useState } from 'react';
import DashboardHeader from '../dashboardHeader/dashboardHeader';
import salesBills from '../../../assets/dashboard/salesBills.svg';
import purchasesBills from '../../../assets/dashboard/purchasesBills.svg';
import settingBills from '../../../assets/dashboard/settingBills.svg';
import back from '../../../assets/dashboard/back.svg';
import printIcon from '../../../assets/dashboard/print.svg';
import showBill from '../../../assets/dashboard/chevrons-left.svg';
import logo from '../../../assets/dashboard/logo.svg';
import qrCode from '../../../assets/dashboard/qrCode.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Bills = () => {
    const [bills, setBills] = useState(true);
    const [bill, setBill] = useState(false);
  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
      <DashboardHeader />
    {  bills &&
        <div className='w-full flex flex-col gap-5'>
        <h2 className='text-lg'>الفواتير</h2>
        <div className='flex justify-start items-center gap-3'>
            <div className='w-[300px] h-[150px] bg-[#E9FBB8] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer' onClick={() => setBills(false)}>
                <Image src={salesBills} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>فواتير المبيعات</p>
            </div>
            <div className='w-[300px] h-[150px] bg-[#C9E8FF] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                <Image src={purchasesBills} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>فواتير المشتريات</p>
            </div>
            <div className='w-[300px] h-[150px] bg-[#FFC9C9] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                <Image src={settingBills} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>إعدادات الفواتير</p>
            </div>
        </div>
        </div>
    }
    { !bills && !bill &&
        <div className='w-full flex flex-col items-start gap-5'>
            <div className='w-full flex flex-col items-start gap-10 pr-20 pl-20'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-xl'>فواتير المبيعات</h2>
                    <span className='flex items-center gap-2 cursor-pointer' onClick={() => setBills(true)}>
                        <p className='text-xl text-[#4A588D]'>قائمة الفواتير</p>
                        <Image src={back} alt='back' className='w-[25px] h-[25px]' />
                    </span>
                </div>
                <span className='relative w-2/4'>
                    <input type='text' placeholder='بحث' className='p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none' />
                    <FontAwesomeIcon icon={faSearch} className='w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
                </span>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden rounded-3xl shadow">
                        <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                            <thead className="bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                            <tr>
                                <th className="px-6 py-4 font-normal">اسم العميل</th>
                                <th className="px-6 py-4 font-normal">رقم الفاتورة</th>
                                <th className="px-6 py-4 font-normal">إجمالي الفاتورة</th>
                                <th className="px-6 py-4 font-normal">تاريخ الفاتورة</th>
                                <th className="px-6 py-4 font-normal">طباعة الفاتورة</th>
                                <th className="px-6 py-4 font-normal">تفاصيل الفاتورة</th>
                            </tr>
                            </thead>
                            <tbody className="text-black p-3">
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap">احمد حسن</td>
                                    <td className='text-base' dir="ltr">00235</td>
                                    <td className='whitespace-nowrap'>400 ر.س</td>
                                    <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                            <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                            <p>طباعة</p>
                                        </span>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => {setBills(false); setBill(true);}}>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </span>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap">احمد حسن</td>
                                    <td className='text-base' dir="ltr">00235</td>
                                    <td className='whitespace-nowrap'>400 ر.س</td>
                                    <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                            <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                            <p>طباعة</p>
                                        </span>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </span>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap">احمد حسن</td>
                                    <td className='text-base' dir="ltr">00235</td>
                                    <td className='whitespace-nowrap'>400 ر.س</td>
                                    <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                            <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                            <p>طباعة</p>
                                        </span>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </span>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap">احمد حسن</td>
                                    <td className='text-base' dir="ltr">00235</td>
                                    <td className='whitespace-nowrap'>400 ر.س</td>
                                    <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                            <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                            <p>طباعة</p>
                                        </span>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </span>
                                    </td>
                                </tr>
                                <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                    <td className="whitespace-nowrap">احمد حسن</td>
                                    <td className='text-base' dir="ltr">00235</td>
                                    <td className='whitespace-nowrap'>400 ر.س</td>
                                    <td className="p-5" dir="ltr">2024 - 05 - 02</td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#07932E] text-white flex justify-center items-center gap-2'>
                                            <Image src={printIcon} alt='print' className='w-[25px] h-[25px]' />
                                            <p>طباعة</p>
                                        </span>
                                    </td>
                                    <td className='relative'>
                                        <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2'>
                                            <p>عرض الفاتورة</p>
                                            <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    { bill &&
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='w-full flex flex-col items-start gap-10 pr-20 pl-20'>
                <span className='mr-auto flex items-center gap-2 cursor-pointer' onClick={() => {setBills(true); setBill(false);}}>
                    <p className='text-xl text-[#4A588D]'>الفواتير</p>
                    <Image src={back} alt='back' className='w-[25px] h-[25px]' />
                </span>
                <div className='w-full h-full p-5 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-10'>
                    <Image src={logo} alt='Logo' className='w-[400px] h-[40px]' />
                    <div className='w-full flex justify-around items-start'>
                        <span className='flex flex-col justify-center items-start gap-2'>
                            <p className='text-sm'>فاتورة ضريبية مبسطة 844505#</p>
                            <p className='text-sm'>رمز الفاتورة : 0200000</p>
                            <p className='text-sm'>مصدرة من:</p>'
                            <ul className='mr-8 -mt-8 list-disc flex flex-col gap-2'>
                                <li className='text-sm'>شركة خلابة</li>
                                <li className='text-sm'>الرقم الضريبي : 310461435700003</li>
                                <li className='text-sm'>المملكة العربية السعودية (SA)</li>
                                <li className='text-sm'>شارع الامير ناصر بن عبدالعزيز آل سعود</li>
                                <li className='text-sm'>رقم المبني : 2861</li>
                                <li className='text-sm'>المدينة الرياض</li>
                                <li className='text-sm'>الرمزي البريدي : 24353</li>
                                <li className='text-sm'>حي الملك فهد</li>
                                <li className='text-sm'>البريد الإلكتروني : info@ِamazing.sa</li>
                                <li className='text-sm'>رقم الجوال : 8001111210</li>
                            </ul>
                        </span>
                        <span className='flex flex-col justify-center items-start gap-2'>
                            <p className='text-sm'>تاريخ الإصدار : 2023-08-31</p>
                            <p className='text-sm'>فترة الفاتورة : 2023-08-01 - 2023-08-31</p>
                            <Image src={qrCode} alt='qr Code' className='w-[200px] h-full' />
                        </span>
                    </div>
                    <hr className='h-[2px] w-full rounded-md bg-[#E4E4E4]'></hr>
                    <table className='w-full shadow-lg'>
                        <thead className='bg-[#D9D9D9]'>
                            <tr>
                                <th className='font-medium p-4'>اسم المنتج</th>
                                <th className='font-medium p-4'>الكمية</th>
                                <th className='font-medium p-4'>سعر الوحدة</th>
                                <th className='font-medium p-4'>سعر الخصم</th>
                                <th className='font-medium p-4'>الضريبة (15%)</th>
                                <th className='font-medium p-4'>مبلغ ضريبة القيمة المضافة</th>
                                <th className='font-medium p-4'>المجموع الفرعي (شامل ضريبة القيمة المضافة)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-4 text-center'>بدلة كاروهات</td>
                                <td className='p-4 text-center'>1</td>
                                <td className='p-4 text-center'>400 ر.س</td>
                                <td className='p-4 text-center'>400 ر.س</td>
                                <td className='p-4 text-center'>15.00</td>
                                <td className='p-4 text-center'>400 ر.س</td>
                                <td className='p-4 text-center'>400 ر.س</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='p-4 -mt-8 w-full border-[1px] border-[#D2D2D2]'>
                        <span className='w-full mb-2 flex justify-between items-center'>
                            <p>الإجمالي الفرعي (غير شامل الضريبة)</p>
                            <p>الإجمالي 400 ر.س</p>
                        </span>
                        <span className='w-full mb-2 flex justify-between items-center'>
                            <p>الإجمالي إجمالي مبلغ ضريبة القيمة المضافة (15%)</p>
                            <p>الإجمالي 400 ر.س</p>
                        </span>
                        <span className='w-full mb-2 flex justify-between items-center'>
                            <p>إجمالي الفاتورة (شامل ضريبة القيمة المضافة)</p>
                            <p>الإجمالي 400 ر.س</p>
                        </span>
                    </div>
                    <Image src={qrCode} alt='qr Code' className='w-[200px] h-full' />
                </div>
            </div>
        </div>
    }
    </main>
  )
}

export default Bills

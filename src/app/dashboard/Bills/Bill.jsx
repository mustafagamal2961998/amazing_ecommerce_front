import logo from '../../../assets/dashboard/logo.svg';
import qrCode from '../../../assets/dashboard/qrCode.svg';
import back from '../../../assets/dashboard/back.svg';
import Image from 'next/image';
import { useStatusContext } from '../../../Utils/Status/statusContext';

const Bill = () => {
    const {setSalesBills, setPurchasesBills, setBillMood, setBillsMood} = useStatusContext();

  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
        <div className='w-full flex flex-col items-start gap-10 pr-20 pl-20'>
            <span className='mr-auto flex items-center gap-2 cursor-pointer' onClick={() => {setBillMood(false); setPurchasesBills(false); setSalesBills(false); setBillsMood(true);}}>
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
  )
}

export default Bill

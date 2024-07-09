import back from '../../../../assets/dashboard/back.svg';
import showPurchasesBills from '../../../../assets/dashboard/showPurchasesBills.svg';
import addOrderImg from '../../../../assets/dashboard/addOrder.svg';
import editIcon from '../../../../assets/dashboard/editIcon.svg';
import deleteIcon from '../../../../assets/dashboard/deleteIcon.svg';
import yes from '../../../../assets/dashboard/yes.svg';
import no from '../../../../assets/dashboard/no.svg';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import printIcon from '../../../../assets/dashboard/print.svg';
import showBill from '../../../../assets/dashboard/chevrons-left.svg';
import Bill from '../Bill'
import Create from './Create'
import Edit from './Edit'
import { useStatusContext } from "../../../../Utils/Status/statusContext";
import { useState } from 'react';

const PurchasesBills = () => {
    const [purchasesBillsMood, setPurchasesBillsMood] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showDeletedPopup, setShowDeletedPopup] = useState(false);
    const {billMood, setBillMood, setBillsMood, setPurchasesBills} = useStatusContext();
    const [createMood, setCreateMood] = useState(false);
    const [editMood, setEditMood] = useState(false);

    const handleDeleteBill = (e) => {
        setShowDeletePopup(!showDeletePopup)
    }

  return (
    <div className='w-full flex flex-col gap-5'>
        {!billMood && !createMood && !editMood &&
            <div className='w-full flex justify-between items-center pr-20 pl-20'>
                <h2 className='text-lg'>فواتير المشتريات</h2>
                <span className='flex items-center gap-2 cursor-pointer' onClick={() => {setBillsMood(true); setPurchasesBills(false);}}>
                    <p className='text-xl text-[#4A588D]'>قائمة الفواتير</p>
                    <Image src={back} alt='back' className='w-[25px] h-[25px]' />
                </span>
            </div>
        }
    { !billMood && !createMood && !editMood &&
        <div className='flex justify-center items-center gap-3'>
            <div className={`${purchasesBillsMood && 'hidden'} w-[300px] h-[150px] bg-[#E9FBB8] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer`} onClick={() => setCreateMood(true)}>
                <Image src={addOrderImg} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>إضافة فاتورة جديدة</p>
            </div>
            <div className={`${purchasesBillsMood && 'hidden'} w-[300px] h-[150px] bg-[#C9E8FF] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer`} onClick={() => setPurchasesBillsMood(true)}>
                <Image src={showPurchasesBills} alt='sales bills' className='w-[70px] h-[70px]' />
                <p className='text-xl'>عرض جميع الفواتير</p>
            </div>
        </div>
    }
    { purchasesBillsMood && !billMood && !editMood &&
        <div className='w-full flex flex-col items-start gap-5'>
            <div className='relative w-full flex flex-col items-start gap-10 pr-20 pl-20'>
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
                                    <th className="px-6 py-4 font-normal">تعديل / حذف الفاتورة</th>
                                </tr>
                                </thead>
                                <tbody className="text-black p-3">
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
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
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => setBillMood(true)}>
                                                <p>عرض الفاتورة</p>
                                                <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                            </span>
                                        </td>
                                        <td className='relative'>
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' onClick={() => setEditMood(true)} />
                                                <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
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
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => setBillMood(true)}>
                                                <p>عرض الفاتورة</p>
                                                <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                            </span>
                                        </td>
                                        <td className='relative'>
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' onClick={() => setEditMood(true)} />
                                                <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
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
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => setBillMood(true)}>
                                                <p>عرض الفاتورة</p>
                                                <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                            </span>
                                        </td>
                                        <td className='relative'>
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' onClick={() => setEditMood(true)} />
                                                <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
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
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => setBillMood(true)}>
                                                <p>عرض الفاتورة</p>
                                                <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                            </span>
                                        </td>
                                        <td className='relative'>
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' onClick={() => setEditMood(true)} />
                                                <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
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
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => setBillMood(true)}>
                                                <p>عرض الفاتورة</p>
                                                <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                            </span>
                                        </td>
                                        <td className='relative'>
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' onClick={() => setEditMood(true)} />
                                                <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="text-center border-b-[1px] border-[#F2F2F2]">
                                        <td className="whitespace-nowrap">سيد عبد العظيم</td>
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
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 rounded-3xl bg-[#4A588D] text-white flex justify-center items-center gap-2' onClick={() => setBillMood(true)}>
                                                <p>عرض الفاتورة</p>
                                                <Image src={showBill} alt='show bill' className='w-[25px] h-[25px]' />
                                            </span>
                                        </td>
                                        <td className='relative'>
                                            <span className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 cursor-pointer p-2 flex justify-center items-center gap-2'>
                                                <Image src={editIcon} alt='edit bill' className='w-[25px] h-[25px]' onClick={() => setEditMood(true)} />
                                                <Image src={deleteIcon} alt='delete bill' className='w-[25px] h-[25px]' onClick={(e) => handleDeleteBill(e)} />
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {showDeletePopup && 
                    <div className='w-fit bg-white absolute left-2/4 top-1/4 mt-3 flex flex-col justify-center items-center gap-5 p-10 rounded-3xl border-2 border-[#DDD]'>
                        <Image src={deleteIcon} alt='delete bill' className='w-[60px] h-[60px]' />
                        <h2 className='text-2xl font-bold text-[#E40D0D]'>حذف فاتورة</h2>
                        <h2 className='text-xl font-bold text-black'>هل أنت متأكد من حذف الفاتورة ؟</h2>
                        <span className='flex justify-center items-center'>
                            <Image src={no} alt='no' className='w-full cursor-pointer duration-200 hover:-translate-x-2' onClick={(e) => handleDeleteBill(e)} />
                            <Image src={yes} alt='yes' className='w-full cursor-pointer duration-200 hover:translate-x-2' onClick={() => setShowDeletedPopup(true)} />
                        </span>
                    </div>
                }
                {showDeletedPopup && 
                    <div className='w-fit bg-white absolute left-2/4 top-1/4 mt-3 flex flex-col justify-center items-center gap-5 p-10 rounded-3xl border-2 border-[#DDD]'>
                        <Image src={deleteIcon} alt='delete bill' className='w-[60px] h-[60px]' />
                        <h2 className='text-2xl font-bold text-[#E40D0D]'>حذف فاتورة</h2>
                        <h2 className='text-xl font-bold text-black'>تم حذف الفاتورة بنجاح</h2>
                    </div>
                }
            </div>
        </div>
    }
    { createMood &&
        <Create />
    }
    { editMood &&
        <Edit />
    }
    { billMood &&
        <Bill />
    }
    </div>
  )
}

export default PurchasesBills

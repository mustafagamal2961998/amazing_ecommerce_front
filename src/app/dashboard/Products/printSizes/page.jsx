'use client'

import { useEffect, useState } from "react"
import ProductsLinks from "../ProductsLinks"
import axios from "axios";
import { ADD_SIZE_DIRECTION, UPDATE_SIZE_DIRECTION, DELETE_SIZE_DIRECTION, GET_SIZES_DIRECTIONS_DASHBOARD } from "../../../../Utils/APIs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import confirm from '../../../../assets/dashboard/confirm.svg'
import decline from '../../../../assets/dashboard/decline.svg'
import { CONFIG } from "../../../../Utils/Auth/Config";
import { handleShowAlert } from "../../../../Utils/Alerts/handleShowAlert";
import Image from "next/image";

const PrintSizes = () => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [printSizes, setPrintSizes] = useState([]);
  const [printSize, setPrintSize] = useState({
    name_ar: "",
    name_en: "",
    price: 0,
    isActive: true,
  });
  const [printSizeId, setPrintSizeId] = useState(null);
  const [deleteMood, setDeleteMood] = useState(false);

  const fetchPrintSizes = async () => {
      try {
        const res = await axios.get(GET_SIZES_DIRECTIONS_DASHBOARD);
        const data = res.data.data;
        setPrintSizes(data);
      }catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
      fetchPrintSizes();
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrintSize({...printSize, [name]: value });
  };

  const handleAddPrintSize = async (e) => {
      e.preventDefault();
      try {
          const formData = new FormData();
          formData.append("name_ar", printSize.name_ar);
          formData.append("name_en", printSize.name_en);
          formData.append("price", printSize.price);
          formData.append("status", printSize.isActive ? 'active' : 'archived');
          
          const res = await axios.post(ADD_SIZE_DIRECTION, formData, CONFIG, {
              headers: {
                'Content-Type': 'application/json',
              },
          });
          const data = res.data;
          fetchPrintSizes();
          handleShowAlert(data.statusCode, data.message);
  
          setPrintSize({name_ar: "", name_en: "", price: "", isActive: true})
      }catch (error) {
        console.log(error);
      }
    }
  
    const handleUpdatePrintSize = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append("name_ar", printSize.name_ar);
        formData.append("name_en", printSize.name_en);
        formData.append("price", printSize.price);
        formData.append("status", printSize.isActive ? 'active' : 'archived');

        const res = await axios.put(UPDATE_SIZE_DIRECTION + printSizeId, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
        });
        const data = res.data;
        fetchPrintSizes();
        handleShowAlert(data.statusCode, data.message);
        setIsEditingMode(false);
        setPrintSizeId(null);
        setPrintSize({name_ar: "", name_en: "", price: "", isActive: true})
      }catch (error) {
        console.log(error);
      }
    }
  
      const deletePrintSizeModal = (id) => {
          setPrintSizeId(id);
          setDeleteMood(true);
          window.scrollTo({
              top: 0,
              behavior: "smooth",
          })
      }
  
      const updatePrintSizeModal = (id) => {
        setPrintSizeId(id);
        setIsEditingMode(true);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
  
        const selectedPrintSize = printSizes.find((type) => type.id === id);
        setPrintSize({
            name_ar: selectedPrintSize.name_ar,
            name_en: selectedPrintSize.name_en,
            price: selectedPrintSize.price,
            isActive: selectedPrintSize.status === 'active',
        });
      }
  
    const handleDeletePrintSize = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(DELETE_SIZE_DIRECTION + printSizeId);
          const data = res.data;
          fetchPrintSizes();
          handleShowAlert(data.statusCode, data.message);
          setDeleteMood(false)
      }catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='w-full flex flex-col items-center gap-6 p-5'>
      <ProductsLinks />
      <div className="relative w-full h-fit flex flex-col gap-2 rounded-lg border-[1px] border-[#C3C3C3] p-3">
        <div className="absolute top-0 right-0 w-full rounded-t-lg bg-[#34766A] p-2">
          <h1 className="text-right text-white font-bold text-lg p-1">
            {isEditingMode ? 'تعديل' : 'اضافة'} مقاسات أو اتجاهات   
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 mt-12 p-2">
          <input
            type="text"
            name="name_ar"
            value={printSize.name_ar}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص اسم المقاس أو الاتجاه باللغة العربية"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة اسم المقاس أو الاتجاه باللغة العربية</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="text"
            name="name_en"
            value={printSize.name_en}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص المقاس أو الاتجاه باللغة الانجليزية"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص المقاس أو الاتجاه باللغة الانجليزية</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="number"
            name="price"
            value={printSize.price}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="إضافة سعر المقاس أو الاتجاه"
          />
          <p className="text-[#FFABAB] text-sm mr-4">
            كتابة سعر المقاس أو الاتجاه
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة المقاس أو الاتجاه</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={printSize.isActive} className="sr-only peer" onChange={() => setPrintSize({...printSize, isActive: !printSize.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                  <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${printSize.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{printSize.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdatePrintSize : handleAddPrintSize}>
          حفظ
        </button>
      </div>
      <div className={`w-full p-5 rounded-md ${deleteMood ? 'flex' : 'hidden'} flex-col justify-center items-center bg-[#D9D9D97D]`}>
            <div className='w-full p-5 border-[1px] border-[#FFFFFF] rounded-md flex flex-col justify-center items-center gap-3'>
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا المقاس أو الاتجاه</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeletePrintSize}
                        className='w-full cursor-pointer'
                        alt='confirmation'
                    />
                    <Image
                        src={decline}
                        onClick={() => setDeleteMood(false)}
                        className='w-full cursor-pointer'
                        alt='decline'
                    />
                </span>
            </div>
        </div> 
        <h1 className='text-center text-2xl font-bold ml-auto'>
        المقاسات و الاتجاهات
        </h1>
       <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
                <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                  <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
                    <tr>
                      <th className="px-6 py-4 font-normal">المقاس أو الاتجاه باللغة العربية</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">المقاس أو الاتجاه باللغة الانجليزية</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">السعر</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">الحالة</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تعديل</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">حذف</th>
                    </tr>
                  </thead>
                  <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                    {
                      printSizes && printSizes.length > 0 && printSizes.map((printSize) => (
                        <tr className="text-center border-b-[1px] border-[#F1F1F1]" key={printSize.id}>
                          <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                            {printSize.name_ar}
                          </td>
                          <td className='text-base border-l-[1px] border-[#F1F1F1]'>{printSize.name_en}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            {printSize.price} ر.س
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            {printSize.status === 'active' ? 'نشط' : 'غير نشط'}
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                                onClick={() => updatePrintSizeModal(printSize.id)}
                                icon={faEdit}
                                className='w-4 h-4 text-center text-blue-500 hover:text-blue-300 duration-200 cursor-pointer'
                            />
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                                onClick={() => deletePrintSizeModal(printSize.id)}
                                icon={faTrash}
                                className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer'
                            />
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PrintSizes
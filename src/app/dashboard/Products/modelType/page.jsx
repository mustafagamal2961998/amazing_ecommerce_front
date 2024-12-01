'use client'

import { useEffect, useState } from "react"
import ProductsLinks from "../ProductsLinks"
import axios from "axios";
import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL, GET_MODELS_DASHBOARD } from "../../../../Utils/APIs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import confirm from '../../../../assets/dashboard/confirm.svg'
import decline from '../../../../assets/dashboard/decline.svg'
import { CONFIG } from "../../../../Utils/Auth/Config";
import { handleShowAlert } from "../../../../Utils/Alerts/handleShowAlert";
import Image from "next/image";

const Model = () => {
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [models, setModels] = useState([]);
    const [model, setModel] = useState({
        name_ar: "",
        name_en: "",
        price: 0,
        isActive: true,
    });
    const [modelId, setModelId] = useState(null);
    const [deleteMood, setDeleteMood] = useState(false);

    const fetchModels = async () => {
        try {
            const res = await axios.get(GET_MODELS_DASHBOARD);
            const data = res.data.data;
            setModels(data);
        }catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchModels();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setModel({...model, [name]: value });
    };

    const handleAddModel = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name_ar", model.name_ar);
            formData.append("name_en", model.name_en);
            formData.append("price", model.price);
            formData.append("status", model.isActive ? 'active' : 'archived');
            
            const res = await axios.post(ADD_MODEL, formData, CONFIG, {
                headers: {
                  'Content-Type': 'application/json',
                },
            });
            const data = res.data;
            fetchModels();
            handleShowAlert(data.statusCode, data.message);
    
            setModel({name_ar: "", name_en: "", price: "", isActive: true})
        }catch (error) {
          console.log(error);
        }
      }
    
      const handleUpdateModel = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append("name_ar", model.name_ar);
            formData.append("name_en", model.name_en);
            formData.append("price", model.price);
            formData.append("status", model.isActive ? 'active' : 'archived');

            const res = await axios.put(UPDATE_MODEL + modelId, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = res.data;
            fetchModels();
            handleShowAlert(data.statusCode, data.message);
            setIsEditingMode(false);
            setModelId(null);
            setModel({name_ar: "", name_en: "", price: "", isActive: true})
        }catch (error) {
          console.log(error);
        }
      }
    
        const deleteModelModal = (id) => {
            setModelId(id);
            setDeleteMood(true);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    
        const updateModelModal = (id) => {
            setModelId(id);
            setIsEditingMode(true);
    
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    
            const selectedModel = models.find((type) => type.id === id);
            setModel({
                name_ar: selectedModel.name_ar,
                name_en: selectedModel.name_en,
                price: selectedModel.price,
                isActive: selectedModel.status === 'active',
            });
        }
    
      const handleDeleteModel = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(DELETE_MODEL + modelId);
            const data = res.data;
            fetchModels();
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
            {isEditingMode ? 'تعديل' : 'اضافة'} نوع موديل   
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 mt-12 p-2">
          <input
            type="text"
            name="name_ar"
            value={model.name_ar}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص نوع الموديل"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص نوع الموديل باللغة العربية</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="text"
            name="name_en"
            value={model.name_en}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص نوع الموديل باللغة الانجليزية"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص نوع الموديل باللغة الانجليزية</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="number"
            name="price"
            value={model.price}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="إضافة سعر نوع الموديل"
          />
          <p className="text-[#FFABAB] text-sm mr-4">
            كتابة سعر نوع الموديل
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة نوع الموديل</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={model.isActive} className="sr-only peer" onChange={() => setModel({...model, isActive: !model.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                    <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${model.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{model.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdateModel : handleAddModel}>
          حفظ
        </button>
      </div>
      <div className={`w-full p-5 rounded-md ${deleteMood ? 'flex' : 'hidden'} flex-col justify-center items-center bg-[#D9D9D97D]`}>
            <div className='w-full p-5 border-[1px] border-[#FFFFFF] rounded-md flex flex-col justify-center items-center gap-3'>
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا الموديل</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeleteModel}
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
          أنواع الموديل
        </h1>
       <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
                <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                  <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
                    <tr>
                      <th className="px-6 py-4 font-normal">الاسم باللغة العربية</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">الاسم باللغة الانجليزية</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">السعر</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">الحالة</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تعديل</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">حذف</th>
                    </tr>
                  </thead>
                  <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                    {
                      models && models.length > 0 && models.map((model) => (
                        <tr className="text-center border-b-[1px] border-[#F1F1F1]" key={model.id}>
                          <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                            {model.name_ar}
                          </td>
                          <td className='text-base border-l-[1px] border-[#F1F1F1]'>{model.name_en}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            {model.price} ر.س
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            {model.status === 'active' ? 'نشط' : 'غير نشط'}
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                                onClick={() => updateModelModal(model.id)}
                                icon={faEdit}
                                className='w-4 h-4 text-center text-blue-500 hover:text-blue-300 duration-200 cursor-pointer'
                            />
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                                onClick={() => deleteModelModal(model.id)}
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

export default Model

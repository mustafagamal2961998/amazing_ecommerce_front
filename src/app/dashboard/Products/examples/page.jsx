'use client'
import ProductsLinks from "../ProductsLinks";
import { useEffect, useState } from "react";
import axios from "axios";
import { ADD_EXAMPLE, DELETE_EXAMPLE, GET_EXAMPLES_DASHBOARD, UPDATE_EXAMPLE } from "../../../../Utils/APIs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPaperclip, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { handleShowAlert } from "../../../../Utils/Alerts/handleShowAlert";
import { CONFIG } from "../../../../Utils/Auth/Config";
import confirm from '../../../../assets/dashboard/confirm.svg'
import decline from '../../../../assets/dashboard/decline.svg'
import ExamplesLinks from './ExamplesLinks';

const Examples = () => {
  const [examples, setExamples] = useState([]);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [deleteMood, setDeleteMood] = useState(false);
  const [exampleId, setExampleId] = useState(null);

  const [example, setExample] = useState({
    name: "",
    price: "",
    image: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setExample({...example, [e.target.name]: e.target.value });
  }

  const fetchExamples = async () => {
    try {
      const res = await axios.get(GET_EXAMPLES_DASHBOARD);
      const data = res.data.data;
      setExamples(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExamples();
  }, []);

  const handleFileClick = () => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleAddExample = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("name", example.name);
        formData.append("price", example.price);
        formData.append("image", example.image);
        formData.append("status", example.isActive ? 'active' : 'archived');
        
        const res = await axios.post(ADD_EXAMPLE, formData, CONFIG);
        const data = res.data;
        fetchExamples();
        handleShowAlert(data.statusCode, data.message);

        setExample({name: "", price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

  const handleUpdateExample = async (e) => {
    e.preventDefault();

    if(!example.image) {
        handleShowAlert(422, 'يجب إرفاق صورة للمثال');
        return;
    }

    try {
        const formData = new FormData();
        formData.append("name", example.name);
        formData.append("price", example.price);
        formData.append("status", example.isActive ? 'active' : 'archived');
        formData.append("image", example.image);

        const res = await axios.post(UPDATE_EXAMPLE + exampleId, formData, CONFIG);
        const data = res.data;
        fetchExamples();
        handleShowAlert(data.statusCode, data.message);
        setIsEditingMode(false);
        setExampleId(null);
        setExample({name: "", price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

    const deleteExampleModal = (id) => {
        setExampleId(id);
        setDeleteMood(true);
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        })
    }

    const updateExampleModal = (id) => {
        setExampleId(id);
        setIsEditingMode(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const example = examples.find((example) => example.id === id);
        setExample({name: example.name, price: example.price, isActive: example.status === 'active' ? true : false, image: ""})
    }

  const handleDeleteExample = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.delete(DELETE_EXAMPLE + exampleId);
        const data = res.data;
        fetchExamples();
        handleShowAlert(data.statusCode, data.message);
        setDeleteMood(false)
    }catch (error) {
      console.log(error);
    }
  }

  const handleRemoveExampleImage = () => {
    setExample({...example, image: "" });
  }

  return (
    <div className="w-full p-5 flex flex-col gap-2">
      <ProductsLinks />
      <ExamplesLinks />
      <div className="relative w-full h-fit flex flex-col gap-2 rounded-lg border-[1px] border-[#C3C3C3] p-3">
        <div className="absolute top-0 right-0 w-full rounded-t-lg bg-[#34766A] p-2">
          <h1 className="text-right text-white font-bold text-lg p-1">
            {isEditingMode ? 'تعديل' : 'اضافة'} مثال
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 mt-12 p-2">
          <input
            type="text"
            name="name"
            value={example.name}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص المثال"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص المثال</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="number"
            name="price"
            value={example.price}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="إضافة سعر المثال"
          />
          <p className="text-[#FFABAB] text-sm mr-4">
            كتابة سعر المثال
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة المثال</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={example.isActive} className="sr-only peer" onChange={() => setExample({...example, isActive: !example.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                    <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${example.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{example.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <div className="flex items-center gap-2 p-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setExample({...example, image: e.target.files[0] })}
            id="hiddenFileInput"
            className="hidden"
          />
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-5 h-5 text-center text-black cursor-pointer"
            onClick={handleFileClick}
          />
          <p className="text-[#FFABAB] text-sm">اختر صورة للمثال</p>
        </div>      
        {
            example.image && (
                <div className='relative w-fit h-fit'>
                    <FontAwesomeIcon
                        onClick={handleRemoveExampleImage}
                        icon={faTrash}
                        className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer absolute top-0 left-0'
                    />
                    <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(example.image)}
                        alt={example.name}
                        className="w-full h-[200px] rounded-md"
                    />
                </div>
            )
        }
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdateExample :handleAddExample}>
          حفظ
        </button>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Swiper spaceBetween={50} slidesPerView={6} className='w-full cursor-grab'>
            {examples.map((example) => (
                <SwiperSlide key={example.id}>
                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                        <Image
                            width={300}
                            height={300}
                            src={example.media}
                            alt={example.name}
                            className='w-full h-[200px] object-cover rounded-md shadow-lg'
                        />
                        <p className='text-xs font-bold text-gray-500'>{example.name}</p>
                        <p className='text-xs font-bold text-gray-500'>{example.price} ر.س</p>
                        <div className='w-full rounded-lg shadow-2xl bg-[#D9D9D97D] p-2 flex justify-around items-center'>
                            <FontAwesomeIcon
                                onClick={() => deleteExampleModal(example.id)}
                                icon={faTrash}
                                className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer'
                            />
                            <FontAwesomeIcon
                                onClick={() => updateExampleModal(example.id)}
                                icon={faEdit}
                                className='w-4 h-4 text-center text-blue-500 hover:text-blue-300 duration-200 cursor-pointer'
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>      
      </div>
      <div className={`w-full p-5 rounded-md ${deleteMood ? 'flex' : 'hidden'} flex-col justify-center items-center bg-[#D9D9D97D]`}>
            <div className='w-full p-5 border-[1px] border-[#FFFFFF] rounded-md flex flex-col justify-center items-center gap-3'>
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا المثل</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeleteExample}
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
    </div>
  );
};

export default Examples;

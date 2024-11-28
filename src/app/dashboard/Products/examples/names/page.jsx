'use client'
import ProductsLinks from "../../ProductsLinks";
import { useEffect, useState } from "react";
import axios from "axios";
import { ADD_NAME, DELETE_NAME, UPDATE_NAME, GET_NAMES_DASHBOARD } from "../../../../../Utils/APIs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPaperclip, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { handleShowAlert } from "../../../../../Utils/Alerts/handleShowAlert";
import { CONFIG } from "../../../../../Utils/Auth/Config";
import confirm from '../../../../../assets/dashboard/confirm.svg'
import decline from '../../../../../assets/dashboard/decline.svg'
import ExamplesLinks from '../ExamplesLinks';

const Names = () => {
  const [names, setNames] = useState([]);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [deleteMood, setDeleteMood] = useState(false);
  const [nameId, setNameId] = useState(null);

  const [name, setName] = useState({
    name: "",
    price: "",
    image: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setName({...name, [e.target.name]: e.target.value });
  }

  const fetchNames = async () => {
    try {
      const res = await axios.get(GET_NAMES_DASHBOARD);
      const data = res.data.data;
      console.log(data)
      setNames(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const handleFileClick = () => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleAddName = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("name", name.name);
        formData.append("price", name.price);
        formData.append("image", name.image);
        formData.append("status", name.isActive ? 'active' : 'archived');
        
        const res = await axios.post(ADD_NAME, formData, CONFIG);
        const data = res.data;
        fetchNames();
        handleShowAlert(data.statusCode, data.message);

        setName({name: "", price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

  const handleUpdateName = async (e) => {
    e.preventDefault();

    if(!name.image) {
        handleShowAlert(422, 'يجب إرفاق صورة للاسم');
        return;
    }

    try {
        const formData = new FormData();
        formData.append("name", name.name);
        formData.append("price", name.price);
        formData.append("status", name.isActive ? 'active' : 'archived');
        formData.append("image", name.image);

        const res = await axios.post(UPDATE_NAME + nameId, formData, CONFIG);
        const data = res.data;
        fetchNames();
        handleShowAlert(data.statusCode, data.message);
        setIsEditingMode(false);
        setNameId(null);
        setName({name: "", price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

    const deleteNameModal = (id) => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        })
        setNameId(id);
        setDeleteMood(true);
    }

    const updateNameModal = (id) => {
        setNameId(id);
        setIsEditingMode(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const name = names.find((name) => name.id === id);
        setName({name: name.name, price: name.price, isActive: name.status === 'active' ? true : false, image: ""})
    }

  const handleDeleteName = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.delete(DELETE_NAME + nameId);
        const data = res.data;
        console.log(data)
        fetchNames();
        handleShowAlert(data.statusCode, data.message);
        setDeleteMood(false)
    }catch (error) {
      console.log(error);
    }
  }

  const handleRemoveNameImage = () => {
    setName({...name, image: "" });
  }

  return (
    <div className="w-full p-5 flex flex-col gap-2">
      <ProductsLinks />
      <ExamplesLinks />
      <div className="relative w-full h-fit flex flex-col gap-2 rounded-lg border-[1px] border-[#C3C3C3] p-3">
        <div className="absolute top-0 right-0 w-full rounded-t-lg bg-[#34766A] p-2">
          <h1 className="text-right text-white font-bold text-lg p-1">
            {isEditingMode ? 'تعديل' : 'اضافة'} اسم
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 mt-12 p-2">
          <input
            type="text"
            name="name"
            value={name.name}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص الاسم"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص الاسم</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="number"
            name="price"
            value={name.price}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="إضافة سعر الاسم"
          />
          <p className="text-[#FFABAB] text-sm mr-4">
            كتابة سعر الاسم
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة الاسم</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={name.isActive} className="sr-only peer" onChange={() => setName({...name, isActive: !name.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                    <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${name.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{name.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <div className="flex items-center gap-2 p-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setName({...name, image: e.target.files[0] })}
            id="hiddenFileInput"
            className="hidden"
          />
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-5 h-5 text-center text-black cursor-pointer"
            onClick={handleFileClick}
          />
          <p className="text-[#FFABAB] text-sm">اختر صورة للاسم</p>
        </div>      
        {
            name.image && (
                <div className='relative w-fit h-fit'>
                    <FontAwesomeIcon
                        onClick={handleRemoveNameImage}
                        icon={faTrash}
                        className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer absolute top-0 left-0'
                    />
                    <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(name.image)}
                        alt={name.name}
                        className="w-full h-[200px] rounded-md"
                    />
                </div>
            )
        }
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdateName : handleAddName}>
          حفظ
        </button>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Swiper spaceBetween={50} slidesPerView={6} className='w-full cursor-grab'>
            {names.map((name) => (
                <SwiperSlide key={name.id}>
                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                        <Image
                            width={300}
                            height={300}
                            src={name.media}
                            alt={name.name}
                            className='w-full h-[200px] object-cover rounded-md shadow-lg'
                        />
                        <p className='text-xs font-bold text-gray-500'>{name.name}</p>
                        <p className='text-xs font-bold text-gray-500'>{name.price} ر.س</p>
                        <div className='w-full rounded-lg shadow-2xl bg-[#D9D9D97D] p-2 flex justify-around items-center'>
                            <FontAwesomeIcon
                                onClick={() => deleteNameModal(name.id)}
                                icon={faTrash}
                                className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer'
                            />
                            <FontAwesomeIcon
                                onClick={() => updateNameModal(name.id)}
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
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا الاسم</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeleteName}
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

export default Names;

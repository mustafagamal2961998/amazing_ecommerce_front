'use client'
import ProductsLinks from "../../ProductsLinks";
import { useEffect, useState } from "react";
import axios from "axios";
import { ADD_LOGO, DELETE_LOGO, UPDATE_LOGO, GET_LOGOS_DASHBOARD } from "../../../../../Utils/APIs";
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

const Logos = () => {
  const [logos, setLogos] = useState([]);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [deleteMood, setDeleteMood] = useState(false);
  const [logoId, setLogoId] = useState(null);

  const [logo, setLogo] = useState({
    price: "",
    image: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setLogo({...logo, [e.target.name]: e.target.value });
  }

  const fetchLogos = async () => {
    try {
      const res = await axios.get(GET_LOGOS_DASHBOARD);
      const data = res.data.data;
      console.log(data)
      setLogos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const handleFileClick = () => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleAddLogo = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("price", logo.price);
        formData.append("image", logo.image);
        formData.append("status", logo.isActive ? 'active' : 'archived');
        
        const res = await axios.post(ADD_LOGO, formData, CONFIG);
        const data = res.data;
        fetchLogos();
        handleShowAlert(data.statusCode, data.message);

        setLogo({price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

  const handleUpdateLogo = async (e) => {
    e.preventDefault();

    if(!logo.image) {
      handleShowAlert(422, 'يجب إرفاق صورة للشعار');
      return;
    }

    try {
        const formData = new FormData();
        formData.append("price", logo.price);
        formData.append("status", logo.isActive ? 'active' : 'archived');
        formData.append("image", logo.image);

        const res = await axios.post(UPDATE_LOGO + logoId, formData, CONFIG);
        const data = res.data;
        fetchLogos();
        handleShowAlert(data.statusCode, data.message);
        setIsEditingMode(false);
        setLogoId(null);
        setLogo({price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

    const deleteLogoModal = (id) => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        })
        setLogoId(id);
        setDeleteMood(true);
    }

    const updateLogoModal = (id) => {
        setLogoId(id);
        setIsEditingMode(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const logo = logos.find((logo) => logo.id === id);
        setLogo({price: logo.price, isActive: logo.status === 'active' ? true : false, image: ""})
    }

  const handleDeleteLogo = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.delete(DELETE_LOGO + logoId);
        const data = res.data;
        console.log(data)
        fetchLogos();
        handleShowAlert(data.statusCode, data.message);
        setDeleteMood(false)
    }catch (error) {
      console.log(error);
    }
  }

  const handleRemoveLogoImage = () => {
    setLogo({...logo, image: "" });
  }

  return (
    <div className="w-full p-5 flex flex-col gap-2">
      <ProductsLinks />
      <ExamplesLinks />
      <div className="relative w-full h-fit flex flex-col gap-2 rounded-lg border-[1px] border-[#C3C3C3] p-3">
        <div className="absolute top-0 right-0 w-full rounded-t-lg bg-[#34766A] p-2">
          <h1 className="text-right text-white font-bold text-lg p-1">
            {isEditingMode ? 'تعديل' : 'اضافة'} شعار
          </h1>
        </div>
        <div className="mt-12 flex flex-col items-start gap-2 p-2">
          <input
            type="number"
            name="price"
            value={logo.price}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="إضافة سعر الشعار"
          />
          <p className="text-[#FFABAB] text-sm mr-4">
            كتابة سعر الشعار
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة الشعار</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={logo.isActive} className="sr-only peer" onChange={() => setLogo({...logo, isActive: !logo.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                    <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${logo.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{logo.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <div className="flex items-center gap-2 p-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo({...logo, image: e.target.files[0] })}
            id="hiddenFileInput"
            className="hidden"
          />
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-5 h-5 text-center text-black cursor-pointer"
            onClick={handleFileClick}
          />
          <p className="text-[#FFABAB] text-sm">اختر صورة للشعار</p>
        </div>      
        {
            logo.image && (
                <div className='relative w-fit h-fit'>
                    <FontAwesomeIcon
                        onClick={handleRemoveLogoImage}
                        icon={faTrash}
                        className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer absolute top-0 left-0'
                    />
                    <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(logo.image)}
                        alt={logo.price}
                        className="w-full h-[200px] rounded-md"
                    />
                </div>
            )
        }
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdateLogo : handleAddLogo}>
          حفظ
        </button>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Swiper spaceBetween={50} slidesPerView={6} className='w-full cursor-grab'>
            {logos.map((logo) => (
                <SwiperSlide key={logo.id}>
                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                        <Image
                            width={300}
                            height={300}
                            src={logo.image}
                            alt={logo.price}
                            className='w-full h-[200px] object-cover rounded-md shadow-lg'
                        />
                        <p className='text-xs font-bold text-gray-500'>{logo.price} ر.س</p>
                        <div className='w-full rounded-lg shadow-2xl bg-[#D9D9D97D] p-2 flex justify-around items-center'>
                            <FontAwesomeIcon
                                onClick={() => deleteLogoModal(logo.id)}
                                icon={faTrash}
                                className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer'
                            />
                            <FontAwesomeIcon
                                onClick={() => updateLogoModal(logo.id)}
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
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا الشعار</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeleteLogo}
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

export default Logos;

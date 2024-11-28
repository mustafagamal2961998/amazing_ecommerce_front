'use client'
import ProductsLinks from "../../ProductsLinks";
import { useEffect, useState } from "react";
import axios from "axios";
import { ADD_IMAGE, DELETE_IMAGE, UPDATE_IMAGE, GET_IMAGES_DASHBOARD } from "../../../../../Utils/APIs";
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

const Images = () => {
  const [images, setImages] = useState([]);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [deleteMood, setDeleteMood] = useState(false);
  const [imageId, setImageId] = useState(null);

  const [image, setImage] = useState({
    price: "",
    image: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setImage({...image, [e.target.name]: e.target.value });
  }

  const fetchImages = async () => {
    try {
      const res = await axios.get(GET_IMAGES_DASHBOARD);
      const data = res.data.data;
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileClick = () => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("price", image.price);
        formData.append("image", image.image);
        formData.append("status", image.isActive ? 'active' : 'archived');
        
        const res = await axios.post(ADD_IMAGE, formData, CONFIG);
        const data = res.data;
        fetchImages();
        handleShowAlert(data.statusCode, data.message);

        setImage({price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

  const handleUpdateImage = async (e) => {
    e.preventDefault();

    if(!image.image) {
      handleShowAlert(422, 'يجب إرفاق صورة للصورة');
      return;
    }

    try {
        const formData = new FormData();
        formData.append("price", image.price);
        formData.append("status", image.isActive ? 'active' : 'archived');
        formData.append("image", image.image);

        const res = await axios.post(UPDATE_IMAGE + imageId, formData, CONFIG);
        const data = res.data;
        fetchImages();
        handleShowAlert(data.statusCode, data.message);
        setIsEditingMode(false);
        setImageId(null);
        setImage({price: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

    const deleteImageModal = (id) => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        })
        setImageId(id);
        setDeleteMood(true);
    }

    const updateImageModal = (id) => {
        setImageId(id);
        setIsEditingMode(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const image = images.find((image) => image.id === id);
        setImage({price: image.price, isActive: image.status === 'active' ? true : false, image: ""})
    }

  const handleDeleteImage = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.delete(DELETE_IMAGE + imageId);
        const data = res.data;
        fetchImages();
        handleShowAlert(data.statusCode, data.message);
        setDeleteMood(false)
    }catch (error) {
      console.log(error);
    }
  }

  const handleRemoveImageImage = () => {
    setImage({...image, image: "" });
  }

  return (
    <div className="w-full p-5 flex flex-col gap-2">
      <ProductsLinks />
      <ExamplesLinks />
      <div className="relative w-full h-fit flex flex-col gap-2 rounded-lg border-[1px] border-[#C3C3C3] p-3">
        <div className="absolute top-0 right-0 w-full rounded-t-lg bg-[#34766A] p-2">
          <h1 className="text-right text-white font-bold text-lg p-1">
            {isEditingMode ? 'تعديل' : 'اضافة'} صورة
          </h1>
        </div>
        <div className="mt-12 flex flex-col items-start gap-2 p-2">
          <input
            type="number"
            name="price"
            value={image.price}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="إضافة سعر الصورة"
          />
          <p className="text-[#FFABAB] text-sm mr-4">
            كتابة سعر الصورة
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة الصورة</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={image.isActive} className="sr-only peer" onChange={() => setImage({...image, isActive: !image.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                    <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${image.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{image.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <div className="flex items-center gap-2 p-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage({...image, image: e.target.files[0] })}
            id="hiddenFileInput"
            className="hidden"
          />
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-5 h-5 text-center text-black cursor-pointer"
            onClick={handleFileClick}
          />
          <p className="text-[#FFABAB] text-sm">اختر صورة للصورة</p>
        </div>      
        {
            image.image && (
                <div className='relative w-fit h-fit'>
                    <FontAwesomeIcon
                        onClick={handleRemoveImageImage}
                        icon={faTrash}
                        className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer absolute top-0 left-0'
                    />
                    <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(image.image)}
                        alt={image.price}
                        className="w-full h-[200px] rounded-md"
                    />
                </div>
            )
        }
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdateImage : handleAddImage}>
          حفظ
        </button>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Swiper spaceBetween={50} slidesPerView={6} className='w-full cursor-grab'>
            {images.map((image) => (
                <SwiperSlide key={image.id}>
                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                        <Image
                            width={300}
                            height={300}
                            src={image.image}
                            alt={image.price}
                            className='w-full h-[200px] object-cover rounded-md shadow-lg'
                        />
                        <p className='text-xs font-bold text-gray-500'>{image.price} ر.س</p>
                        <div className='w-full rounded-lg shadow-2xl bg-[#D9D9D97D] p-2 flex justify-around items-center'>
                            <FontAwesomeIcon
                                onClick={() => deleteImageModal(image.id)}
                                icon={faTrash}
                                className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer'
                            />
                            <FontAwesomeIcon
                                onClick={() => updateImageModal(image.id)}
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
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا الصورة</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeleteImage}
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

export default Images;

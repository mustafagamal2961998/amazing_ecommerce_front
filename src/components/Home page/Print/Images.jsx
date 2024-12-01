'use client';

import { faCheck, faPaperclip, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import axios from "axios";
import { GET_IMAGES } from "../../../Utils/APIs";
import { useStatusContext } from "../../../Utils/Status/statusContext";

const Images = () => {
    const [images, setImages] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const { customImg, setCustomImg } = useStatusContext();
    let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};

    const getImages = async () => {
        try {
            const res = await axios.get(GET_IMAGES);
            setImages(res.data.data || []);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const handleOptionClick = (id, image) => {
        setSelectedOption(prev => (prev === id ? null : id)); 
        setSelectedImage(prev => (prev === image ? null : image)); 
        setCustomImg(null);
        setImage(null);
    };

    const handleChooseImage = () => {
        let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.image_id = selectedOption || null;
        customOrder.image_img = selectedImage || null;

        customOrder.name_id = null;
        customOrder.name_img = null;
        customOrder.logo_id = null;
        customOrder.logo_img = null;
        customOrder.example_id = null;
        customOrder.example_img = null;
        customOrder.number = null;

        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
        setCustomImg(null);
        setImage(null);
    };

    useEffect(() => {
        getImages();
    }, []);

    useEffect(() => {
        if (selectedOption !== null) {
            handleChooseImage(); 
        }
    }, [selectedOption]);

    const handleFileClick = () => {
        document.getElementById("hiddenFileInput").click();
    };

    const handleRemoveImageImage = () => {
        setImage(null);
        setCustomImg(null);

        let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.image_id = null;
        customOrder.image_img = null;

        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    const handleCustomImageUpload = (e) => {
        setImage(e.target.files[0]);
        setSelectedOption(null); 
        setSelectedImage(null); 
        setCustomImg(e.target.files);

        let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.image_id = null;
        customOrder.image_img = null;

        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='w-full'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                    className='cursor-grab'
                >
                    {images.map((img) => (
                        <SwiperSlide key={img.id} className='relative' onClick={() => handleOptionClick(img.id, img.image)}>
                            <div className='relative flex flex-col justify-center items-center gap-3'>
                                <Image
                                    width={300}
                                    height={300}
                                    src={img.image}
                                    alt='Image'
                                    className='w-3/4 object-cover rounded-lg'
                                />
                                <p className='text-xs font-bold text-gray-500'>{img.price} ر.س</p>
                            </div>
                            <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-0`}>
                                {selectedOption === img.id && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className='w-5 h-5 text-[#222]'
                                    />
                                )}
                            </span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex items-center gap-2 p-2">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleCustomImageUpload}
                    id="hiddenFileInput"
                    className="hidden"
                />
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="w-5 h-5 text-center text-black cursor-pointer"
                    onClick={handleFileClick}
                />
                <p className="text-[#FFABAB] text-sm">أو اختر صورة خاصة</p>
            </div>  

            {image && (
                <div className='relative w-fit h-fit'>
                    <FontAwesomeIcon
                        onClick={handleRemoveImageImage}
                        icon={faTrash}
                        className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer absolute top-0 left-0'
                    />
                    <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(image)}
                        alt="custom image"
                        className="w-full h-[200px] rounded-md"
                    />
                </div>
            )}
        </div>
    );
};

export default Images;

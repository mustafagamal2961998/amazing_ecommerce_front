'use client';

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import axios from "axios";
import { GET_IMAGES } from "../../../Utils/APIs";

const Images = () => {
    const [images, setImages] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOptionClick = (id, image) => {
        setSelectedOption(prev => (prev === id ? null : id)); 
        setSelectedImage(prev => (prev === image ? null : image)); 
    };

    const getImages = async () => {
        try {
            const res = await axios.get(GET_IMAGES);
            const data = res.data.data;
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChooseImage = () => {
        let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.image_id = selectedOption;
        customOrder.image_img = selectedImage;

        customOrder.name_id = null;
        customOrder.name_img = null;
        customOrder.logo_id = null;
        customOrder.logo_img = null;
        customOrder.example_id = null;
        customOrder.example_img = null;
        customOrder.number = null;

        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        getImages();
    }, []);

    useEffect(() => {
        handleChooseImage(); 
    }, [selectedOption]);

    return (
        <div className='w-full'>
            <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                {images.map((img) => (
                    <SwiperSlide key={img.id} className='relative' onClick={() => handleOptionClick(img.id, img.image)}>
                        <div className='relative flex flex-col justify-center items-center gap-3'>
                            <Image
                                width={300}
                                height={300}
                                src={img.image}
                                alt='Image'
                                className='w-3/4'
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
    );
};

export default Images;

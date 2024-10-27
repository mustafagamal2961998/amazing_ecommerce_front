'use client'

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import axios from "axios";
import { GET_IMAGES } from "../../../Utils/APIs";

const Images = () => {

    const [images, setImages] = useState([]);
    const [selectedOption, setSelectedOption] = useState('none');

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? 'none' : id);
    };
    
    const getImages = async () => {
        try {
            const res = await axios.get(GET_IMAGES);
            const data = res.data.data;
            setImages(data);
        }catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getImages();
    }, [])

  return (
    <div className='w-full'>
        <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
            {images.map((img) => (
                <SwiperSlide key={img.id} className='relative' onClick={() => handleOptionClick(img.id)}>
                    <Image 
                    width={300}
                    height={300}
                    src={img.image} 
                    alt={`شعار`} 
                    className='w-3/4' 
                    />
                    <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
                        {selectedOption === img.id && 
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='w-5 h-5 text-[#222]'
                            />
                        }
                    </span>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Images

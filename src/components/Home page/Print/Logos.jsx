'use client';

import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import axios from "axios";
import { GET_LOGOS } from "../../../Utils/APIs";

const Logos = () => {
    const [logos, setLogos] = useState([]);
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionClick = (id, img) => {
        setSelectedOption(prev => (prev === id ? null : id)); 
        setSelectedLogo(prev => (prev === img ? null : img)); 
    };

    const getLogos = async () => {
        try {
            const res = await axios.get(GET_LOGOS);
            const data = res.data.data;
            setLogos(data);
        } catch (error) {
            console.log(error);
        }
    };

    const searchLogos = async () => {
        try {
            const res = await axios.get(GET_LOGOS, { params: { name: searchTerm } });
            const data = res.data.data;
            setLogos(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChooseLogo = () => {
        let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.logo_id = selectedOption; 
        customOrder.logo_img = selectedLogo; 
        
        customOrder.name_id = null;
        customOrder.name_img = null;
        customOrder.image_id = null;
        customOrder.image_img = null;
        customOrder.example_id = null;
        customOrder.example_img = null;
        customOrder.number = null;

        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        getLogos();
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            getLogos(); 
        } else {
            searchLogos();
        }
    }, [searchTerm]);

    useEffect(() => {
        handleChooseLogo();
    }, [selectedOption]);

    return (
        <div className='w-full'>
            {/* Search Bar */}
            <div className='w-full p-5 relative rounded-md border-[1px] border-[#C1C1C1] mb-6'>
                <input
                    type='search'
                    className='w-full rounded-3xl border-2 border-[#C1C1C1] outline-none p-3'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm === '' && (
                    <FontAwesomeIcon
                        icon={faSearch}
                        className='absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#C1C1C1]'
                    />
                )}
            </div>

            {/* Swiper for logos */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className='cursor-grab'
            >
                {logos.map((logo) => (
                    <SwiperSlide key={logo.id} onClick={() => handleOptionClick(logo.id, logo.image)}>
                        <div className='relative flex flex-col justify-center items-center gap-3'>
                            {/* Logo Image */}
                            <Image
                                width={300}
                                height={300}
                                src={logo.image}
                                alt='شعار'
                                className='w-3/4 object-cover rounded-lg'
                            />
                            {/* Price */}
                            <p className='text-xs font-bold text-gray-500'>{logo.price} ر.س</p>
                        </div>

                        {/* Checkmark for selected option */}
                        <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-0`}>
                            {selectedOption === logo.id && (
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

export default Logos;

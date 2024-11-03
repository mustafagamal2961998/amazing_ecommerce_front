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
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? null : id);
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
        if (searchTerm === '') {
            getLogos();
            return;
        }

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
        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        getLogos();
    }, []);

    useEffect(() => {
        searchLogos();
    }, [searchTerm]);

    useEffect(() => {
        handleChooseLogo();
    }, [selectedOption]);

    return (
        <div className='w-full'>
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
            <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                {logos.map((logo) => (
                    <SwiperSlide key={logo.id} className='relative' onClick={() => handleOptionClick(logo.id)}>
                        <Image
                            width={300}
                            height={300}
                            src={logo.image}
                            alt='شعار'
                            className='w-3/4'
                        />
                        <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
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

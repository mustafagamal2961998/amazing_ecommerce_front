'use client';

import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GET_NAMES } from "../../../Utils/APIs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import axios from "axios";
import { GET_DATA } from "../../../Utils/Data/getData";

const Names = () => {
    const [names, setNames] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null); 
    const [selectedName, setSelectedName] = useState(null); 
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleOptionClick = (id, img) => {
        setSelectedOption(prev => (prev === id ? null : id));
        setSelectedName(prev => (prev === img ? null : img));
    };

    const fetchNames = async (search = '') => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(GET_NAMES, { params: { name: search } });
            const data = res.data.data;
            setNames(data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch names. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChooseName = () => {
        let customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {}; 
        customOrder.name_id = selectedOption;
        customOrder.name_img = selectedName;

        customOrder.logo_id = null;
        customOrder.logo_img = null;
        customOrder.image_id = null;
        customOrder.image_img = null;
        customOrder.example_id = null;
        customOrder.example_img = null;
        customOrder.number = null;
        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        fetchNames(); 
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const timer = setTimeout(() => fetchNames(searchTerm), 300); 
            return () => clearTimeout(timer);
        } else {
            fetchNames();
        }
    }, [searchTerm]);

    useEffect(() => {
        handleChooseName(); 
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

            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}

            <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                {names.map((name) => (
                    <SwiperSlide key={name.id} onClick={() => handleOptionClick(name.id, name.media)}>
                        <div className='relative flex flex-col justify-center items-center gap-3'>
                            <Image
                                width={300}
                                height={300}
                                src={name.media}
                                alt={name.name}
                                className='w-3/4'
                            />
                            <p className='text-xs font-bold text-gray-500'>{name.price} ر.س</p>
                        </div>
                        <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-0`}>
                            {selectedOption === name.id && (
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

export default Names;

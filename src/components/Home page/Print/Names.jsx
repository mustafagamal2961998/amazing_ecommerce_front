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
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? null : id);
    };

    const search = async () => {
        try {
            if (searchTerm === '') return;
            const res = await axios.get(GET_NAMES, { params: { name: searchTerm } });
            const data = res.data.data;
            setNames(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChooseName = () => {
        let custom_order = JSON.parse(window.localStorage.getItem('custom_order')) || {}; 

        custom_order.name_id = selectedOption;

        window.localStorage.setItem('custom_order', JSON.stringify(custom_order));

        console.log(custom_order);
    };

    useEffect(() => {
        GET_DATA(GET_NAMES).then((data) => setNames(data));
        console.log(names);
    }, []);

    useEffect(() => {
        search();
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
            <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                {names.map((name) => (
                    <SwiperSlide key={name.id} className='relative' onClick={() => handleOptionClick(name.id)}>
                        <Image
                            width={300}
                            height={300}
                            src={name.media}
                            alt={name.name}
                            className='w-3/4'
                        />
                        <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
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

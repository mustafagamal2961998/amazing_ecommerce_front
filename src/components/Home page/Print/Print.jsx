'use client';

import Examples from './Examples';
import Names from './Names';
import Logos from './Logos';
import Images from './Images';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useEffect, useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import { GET_EXAMPLES, GET_IMAGES, GET_LOGOS, GET_NAMES } from '../../../Utils/APIs';

const Print = () => {
    const [selectedOption, setSelectedOption] = useState('none');

    const options = [
        { id: 'none', label: 'بدون', labelEn: 'None' },
        { id: 'examples', label: 'امثلة', labelEn: 'Examples' },
        { id: 'names', label: 'اسماء', labelEn: 'Names' },
        { id: 'logos', label: 'شعار', labelEn: 'Logos' },
        { id: 'images', label: 'صورة', labelEn: 'Images' }
    ];

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? 'none' : id);
    };

    useEffect(() => {
    }, [selectedOption]);

    return (
        <div className='w-full p-10 flex flex-col items-center gap-6'>
            <div className='flex justify-center items-center gap-10'>
                {options.map(option => (
                    <div key={option.id} className='flex justify-center items-center gap-4 font-bold'>
                        <span
                            className={`w-8 h-8 flex justify-center items-center ${selectedOption !== option.id && 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleOptionClick(option.id)}
                        >
                            {selectedOption === option.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{option.label}</p>
                            <p>{option.labelEn}</p>
                        </div>
                    </div>
                ))}
            </div>

            {(selectedOption === 'examples') && (
                <Examples />
            )}

            {(selectedOption === 'names') && (
                <Names />
            )}

            {(selectedOption === 'logos') && (
                <Logos />
            )}

            {(selectedOption === 'images') && (
                <Images />
            )}
        </div>
    );
}

export default Print;

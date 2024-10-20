'use client';

import proverb1 from '../../assets/home page/proverb1.svg';
import proverb2 from '../../assets/home page/proverb2.svg';
import proverb3 from '../../assets/home page/proverb3.svg';
import proverb4 from '../../assets/home page/proverb1.svg';
import proverb5 from '../../assets/home page/proverb2.svg';
import proverb6 from '../../assets/home page/proverb3.svg';
import proverb7 from '../../assets/home page/proverb1.svg';
import proverb8 from '../../assets/home page/proverb2.svg';
import proverb9 from '../../assets/home page/proverb3.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useState } from 'react';
import Image from "next/image";

const Print = () => {
    const [selectedOption, setSelectedOption] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');

    const options = [
        { id: 'none', label: 'بدون', labelEn: 'None' },
        { id: 'examples', label: 'امثلة', labelEn: 'Examples' },
        { id: 'names', label: 'اسماء', labelEn: 'Names' },
        { id: 'logo', label: 'شعار', labelEn: 'Logo' },
        { id: 'images', label: 'صورة', labelEn: 'Images' }
    ];

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? null : id);
    };

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
            {
                selectedOption === 'names' && (
                    <div className='w-full p-5 relative rounded-md border-[1px] border-[#C1C1C1]'>
                        <input
                            type='search'
                            className='w-full rounded-3xl border-2 border-[#C1C1C1] outline-none p-3'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#C1C1C1]'
                        />  
                    </div>
                )
            }
            {
                selectedOption === 'examples' && (
                    <div className='w-full'>
                        <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                            {[proverb1, proverb2, proverb3, proverb4, proverb5, proverb6, proverb7, proverb8, proverb9].map((proverb, index) => (
                                <SwiperSlide key={index} className='relative' onClick={() => handleOptionClick(`proverb${index + 1}`)}>
                                    <Image src={proverb} alt={`proverb${index + 1}`} className='w-3/4' />
                                    <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
                                        {selectedOption === `proverb${index + 1}` && 
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
            {
                selectedOption === 'logo' && (
                    <div className='w-full'>
                        <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                            {[proverb1, proverb2, proverb3, proverb4, proverb5, proverb6, proverb7, proverb8, proverb9].map((proverb, index) => (
                                <SwiperSlide key={index} className='relative' onClick={() => handleOptionClick(`proverb${index + 1}`)}>
                                    <Image src={proverb} alt={`proverb${index + 1}`} className='w-3/4' />
                                    <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
                                        {selectedOption === `proverb${index + 1}` && 
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
            {
                selectedOption === 'images' && (
                    <div className='w-full'>
                        <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                            {[proverb1, proverb2, proverb3, proverb4, proverb5, proverb6, proverb7, proverb8, proverb9].map((proverb, index) => (
                                <SwiperSlide key={index} className='relative' onClick={() => handleOptionClick(`proverb${index + 1}`)}>
                                    <Image src={proverb} alt={`proverb${index + 1}`} className='w-3/4' />
                                    <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
                                        {selectedOption === `proverb${index + 1}` && 
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
        </div>
    );
}

export default Print;

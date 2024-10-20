'use client';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Image from "next/image";
import sun from '../../assets/home page/sun.svg';

const PrintSizes = () => {
    const [selectedOption, setSelectedOption] = useState('front');

    const options = [
        { id: 'front', label: 'أمامي', labelEn: 'Front' },
        { id: 'back', label: 'خلفي', labelEn: 'Back' },
        { id: 'small', label: 'صغير', labelEn: 'Small' },
        { id: 'side', label: 'جانبي', labelEn: 'Side' },
        { id: 'number', label: 'رقم', labelEn: 'Number' },
    ];

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? null : id);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full p-5 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
                <p className='text-xl text-white font-bold'>
                    مقاسات و اتجاهات الطباعة
                    <br />
                    Print Sizes and Directions
                </p>
                <Image 
                    src={sun}
                    alt='sun'
                    className='w-12 absolute left-0 top-0'
                />
            </div>
            <div className='w-full flex justify-center items-center gap-4'>
                {options.map(option => (
                    <div key={option.id} className='flex justify-center items-center gap-4 font-bold w-fit'>
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
        </div>
    );
};

export default PrintSizes;

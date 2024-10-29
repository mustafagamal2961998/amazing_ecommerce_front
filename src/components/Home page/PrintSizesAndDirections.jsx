'use client';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Image from "next/image";
import sun from '../../assets/home page/sun.svg';
import { GET_DATA } from '../../Utils/Data/getData';
import { GET_SIZES_DIRECTIONS } from '../../Utils/APIs';

const PrintSizesAndDirections = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [sizesAndDirections, setSizesAndDirections] = useState([]);

    const handleOptionClick = (id) => {
        if (selectedOptions.includes(id)) {
            setSelectedOptions(selectedOptions.filter(option => option !== id));
        } else {
            setSelectedOptions([...selectedOptions, id]);
        }
    };

    useEffect(() => {
        GET_DATA(GET_SIZES_DIRECTIONS).then((data) => {
            setSizesAndDirections(data);
            setSelectedOptions([data[0]?.id]); 
        });
    }, []);

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
            <div className='w-full flex justify-center items-center gap-20 flex-wrap'>
                {sizesAndDirections.map(option => (
                    <div key={option.id} className='flex justify-center items-center gap-4 font-bold w-fit'>
                        <span
                            className={`w-8 h-8 flex justify-center items-center ${!selectedOptions.includes(option.id) && 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleOptionClick(option.id)}
                        >
                            {selectedOptions.includes(option.id) && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7 text-black'
                                />
                            )}
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{option.name_ar}</p>
                            <p>{option.name_en}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrintSizesAndDirections;

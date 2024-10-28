'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import sun from '../../assets/home page/sun.svg';
import { GET_PRINT_TYPES } from "../../Utils/APIs";
import { GET_DATA } from "../../Utils/Data/getData";

const PrintType = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [printTypes, setPrintTypes] = useState([]);

    const handleOptionClick = (id) => {
        setSelectedOption(prevOption => (prevOption === id ? null : id));
    };

    useEffect(() => {
        GET_DATA(GET_PRINT_TYPES).then((data) => setPrintTypes(data));
    }, []);

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full p-5 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
                <p className='text-xl text-white font-bold'>
                    نوع الطباعة
                    <br />
                    Type of print
                </p>
                <Image
                    src={sun}
                    alt='sun'
                    className='w-12 absolute left-0 top-0'
                />
            </div>
            <div className='w-full flex justify-center items-center gap-20 flex-wrap'>
                <div className='flex justify-center items-center gap-4 font-bold w-fit'>
                    <span 
                        className={`w-8 h-8 flex justify-center items-center ${selectedOption === null ? 'bg-[#F5F3F3]' : ''} border-2 border-black cursor-pointer`}
                        onClick={() => setSelectedOption(null)}
                    >
                        {selectedOption === null && 
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='w-7 h-7'
                            />
                        }
                    </span>
                    <div className='flex flex-col items-start gap-2'>
                        <p>بدون</p>
                        <p>none</p>
                    </div>
                </div>
                {printTypes.map(printType => (
                    <div key={printType.id} className='flex justify-center items-center gap-4 font-bold w-fit'>
                        <span 
                            className={`w-8 h-8 flex justify-center items-center ${selectedOption === printType.id ? '' : 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleOptionClick(printType.id)}
                        >
                            {selectedOption === printType.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{printType.name_ar}</p>
                            <p>{printType.name_en}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrintType;

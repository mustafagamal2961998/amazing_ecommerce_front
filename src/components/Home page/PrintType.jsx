'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import sun from '../../assets/home page/sun.svg';
import { GET_PRINT_TYPES } from "../../Utils/APIs";
import { GET_DATA } from "../../Utils/Data/getData";

const PrintType = () => {
    const [selectedPrintType, setSelectedPrintType] = useState(null); // Stores selected print type ID
    const [selectedPrintName, setSelectedPrintName] = useState(null); // Stores selected print type name
    const [printTypes, setPrintTypes] = useState([]);
    
    useEffect(() => {
        const customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        setSelectedPrintType(customOrder.print_type || null);
        setSelectedPrintName(customOrder.print_name || null);
    }, []);

    const handleOptionClick = (id, name) => {
        if (id === null) {
            setSelectedPrintType(null); // Reset print type
            setSelectedPrintName(null); // Reset print name
        } else {
            setSelectedPrintType(id);
            setSelectedPrintName(name);
        }
    };

    const handleChoosePrintType = () => {
        const customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.print_type = selectedPrintType;
        customOrder.print_name = selectedPrintName;
        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        GET_DATA(GET_PRINT_TYPES)
            .then((data) => setPrintTypes(data))
            .catch((err) => console.error("Failed to fetch print types", err)); // Graceful error handling
    }, []);

    useEffect(() => {
        handleChoosePrintType(); // Update localStorage on changes to selection
    }, [selectedPrintType, selectedPrintName]);

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
                {/* 'None' option */}
                <div className='flex justify-center items-center gap-4 font-bold w-fit'>
                    <span
                        className={`w-8 h-8 flex justify-center items-center ${selectedPrintType === null ? 'bg-[#F5F3F3]' : ''} border-2 border-black cursor-pointer`}
                        onClick={() => handleOptionClick(null, null)}
                    >
                        {selectedPrintType === null && 
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
                
                {/* Render print types */}
                {printTypes && printTypes.length > 0 && printTypes.map(printType => (
                    <div key={`${printType.id}-${printType.name_en}`} className='flex justify-center items-center gap-4 font-bold w-fit'>
                        <span
                            className={`w-8 h-8 flex justify-center items-center ${selectedPrintType === printType.id ? '' : 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleOptionClick(printType.id, printType.name_ar)}
                        >
                            {selectedPrintType === printType.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{printType.name_ar}</p>
                            <p>{printType.name_en}</p>
                            <p className='text-xs font-bold text-gray-500'>{printType.price} ر.س</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrintType;

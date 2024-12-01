'use client';

import Examples from './Examples';
import Names from './Names';
import Logos from './Logos';
import Images from './Images';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

const Print = () => {
    const [selectedOption, setSelectedOption] = useState('none');
    const [number, setNumber] = useState(0);

    const options = [
        { id: 'none', label: 'بدون', labelEn: 'None' },
        { id: 'examples', label: 'امثلة', labelEn: 'Examples' },
        { id: 'names', label: 'اسماء', labelEn: 'Names' },
        { id: 'logos', label: 'شعار', labelEn: 'Logos' },
        { id: 'images', label: 'صورة', labelEn: 'Images' },
        { id: 'number', label: 'رقم', labelEn: 'Number' },
    ];

    useEffect(() => {
        const customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        setSelectedOption(customOrder.selectedOption || 'none'); 
        setNumber(customOrder.number || 0); 
    }, []);

    const handleOptionClick = (id) => {
        const newOption = selectedOption === id ? 'none' : id;
        setSelectedOption(newOption);
    };

    const updateLocalStorage = (customOrder) => {
        customOrder.selectedOption = selectedOption;
        if (selectedOption === 'none') {
            customOrder.example_id = null;
            customOrder.name_id = null;
            customOrder.logo_id = null;
            customOrder.image_id = null;
            customOrder.example_img = null;
            customOrder.name_img = null;
            customOrder.logo_img = null;
            customOrder.image_img = null;
            customOrder.number = null;
        } else if (selectedOption === 'number') {
            customOrder.number = number > 0 ? number : null; 
        }
        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        const customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        updateLocalStorage(customOrder);
    }, [selectedOption, number]);

    return (
        <div className='w-full p-10 flex flex-col items-center gap-6'>
            <div className='flex flex-wrap justify-center items-center gap-10'>
                {options.map(option => (
                    <div key={option.id} className='flex justify-center items-center gap-4 font-bold'>
                        <span
                            className={`w-8 h-8 flex justify-center items-center ${selectedOption !== option.id ? 'bg-[#F5F3F3]' : 'bg-[#E0E0E0]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleOptionClick(option.id)}
                            role="button"
                            aria-pressed={selectedOption === option.id}
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
            {selectedOption === 'examples' && <Examples />}
            {selectedOption === 'names' && <Names />}
            {selectedOption === 'logos' && <Logos />}
            {selectedOption === 'images' && <Images />}
            {selectedOption === 'number' && (
                <input
                    type='number'
                    min="0" 
                    className='w-full rounded-3xl border-2 border-[#C1C1C1] outline-none p-3'
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                    aria-label="Enter a number"
                />
            )}
        </div>
    );
};

export default Print;

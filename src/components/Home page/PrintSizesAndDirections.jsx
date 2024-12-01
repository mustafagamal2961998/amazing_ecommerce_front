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

    // Function to check if an option is selected
    const isSelected = (id) => selectedOptions.some(option => option.id === id);

    // Handle click event for option selection
    const handleOptionClick = (id, name_ar) => {
        const updatedOptions = isSelected(id)
            ? selectedOptions.filter(option => option.id !== id) // Deselect if already selected
            : [...selectedOptions, { id, name_ar }]; // Select if not selected

        setSelectedOptions(updatedOptions);
        updateLocalStorage(updatedOptions);

        // Auto-select the first option if none are selected
        if (updatedOptions.length === 0 && sizesAndDirections.length > 0) {
            const firstOption = sizesAndDirections[0];
            setSelectedOptions([{ id: firstOption.id, name_ar: firstOption.name_ar }]);
            updateLocalStorage([{ id: firstOption.id, name_ar: firstOption.name_ar }]);
        }
    };

    // Update local storage with the selected options
    const updateLocalStorage = (options) => {
        const ids = options.map(option => option.id);
        const names_ar = options.map(option => option.name_ar);

        const custom_order = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        custom_order.sizedirection_ids = ids;
        custom_order.sizedirection_names_ar = names_ar;

        window.localStorage.setItem('custom_order', JSON.stringify(custom_order));
    };

    // Fetch sizes and directions data
    useEffect(() => {
        GET_DATA(GET_SIZES_DIRECTIONS)
            .then((data) => {
                setSizesAndDirections(data);

                // Retrieve stored selection from localStorage
                const storedOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
                const initialSelection = storedOrder?.sizedirection_ids?.map((id, index) => ({
                    id,
                    name_ar: storedOrder.sizedirection_names_ar[index]
                })) || [{ id: data[0]?.id, name_ar: data[0]?.name_ar }];
                
                setSelectedOptions(initialSelection);
                updateLocalStorage(initialSelection);
            })
            .catch((err) => {
                console.error("Failed to fetch sizes and directions:", err);
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
                            className={`w-8 h-8 flex justify-center items-center ${!isSelected(option.id) ? 'bg-[#F5F3F3]' : ''} border-2 border-black cursor-pointer`}
                            onClick={() => handleOptionClick(option.id, option.name_ar)}
                            role="button"
                            aria-pressed={isSelected(option.id)}
                        >
                            {isSelected(option.id) && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7 text-black'
                                />
                            )}
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{option.name_ar}</p>
                            <p>{option.name_en}</p>
                            <p className='text-xs font-bold text-gray-500'>{option.price} ر.س</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrintSizesAndDirections;

'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import sun from '../../assets/home page/sun.svg';
import color from '../../assets/home page/color.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PrintColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        const storedColor = JSON.parse(window.localStorage.getItem('custom_order'))?.print_color || null;
        setSelectedColor(storedColor);
    }, []);

    const handleColorClick = (color) => {
        const newColor = selectedColor === color ? null : color;
        setSelectedColor(newColor);
        updateLocalStorage(newColor);
    };

    const updateLocalStorage = (color) => {
        let custom_order = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        custom_order.print_color = color; 
        window.localStorage.setItem('custom_order', JSON.stringify(custom_order));
    };

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full p-5 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
                <p className='text-xl text-white font-bold'>
                    لون الطباعة
                    <br />
                    Color of print
                </p>
                <Image 
                    src={sun}
                    alt='sun'
                    className='w-12 absolute left-0 top-0'
                />
            </div>
            <div className='w-full flex justify-start items-center gap-4 font-bold'>
                <span 
                    className={`w-8 h-8 flex justify-center items-center ${selectedColor !== 'none' ? 'bg-[#F5F3F3]' : 'bg-transparent'} border-2 border-black cursor-pointer`}
                    onClick={() => handleColorClick(null)}
                >
                    {!selectedColor && 
                        <FontAwesomeIcon
                            icon={faCheck}
                            className='w-7 h-7'
                        />
                    }
                </span>
                <div className='flex flex-col items-start gap-2'>
                    <p>بدون</p>
                    <p>None</p>
                </div>
                <div className='w-full p-5 relative flex flex-col justify-center items-center gap-2'>
                    {
                        selectedColor && selectedColor !== 'none' ?
                        <span className='w-full h-10' style={{ backgroundColor: selectedColor }}></span>
                        :
                        <Image
                            src={color}
                            alt='color'
                            className='w-full h-10'
                        />
                    }
                    <input
                        type='color'
                        className='w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer'
                        onChange={(e) => handleColorClick(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default PrintColor;

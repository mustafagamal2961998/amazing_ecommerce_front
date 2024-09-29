'use client'

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"

const IroningPackaging = () => {
    const [ironing, setIroning] = useState(true);
    const [folding, setFolding] = useState(false);
    const [packing, setPacking] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('ironingPackagingOptions'));
        if (savedData) {
            setIroning(savedData.ironing);
            setFolding(savedData.folding);
            setPacking(savedData.packing);
        }
    }, []);

    useEffect(() => {
        const packagingData = {
            ironing,
            folding,
            packing
        };
        localStorage.setItem('ironingPackagingOptions', JSON.stringify(packagingData));
    }, [ironing, folding, packing]);

    return (
        <div className='w-full flex flex-col justify-start gap-6'>
            <h2 className='font-bold'>الرجاء اختيار الخدمات المطلوبة</h2>
            <span
                className='mr-8 select-none flex items-center gap-6 cursor-pointer'
                onClick={() => setIroning(!ironing)}
            >
                <p className='font-bold'>كوي</p>
                <span
                    className={`relative w-5 h-5 p-1 rounded-full ${ironing ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}
                >
                    {
                        ironing &&
                        <FontAwesomeIcon
                            icon={faCheck}
                            className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                        />
                    }
                </span>
            </span>
            <span
                className='mr-8 select-none flex items-center gap-6 cursor-pointer'
                onClick={() => setFolding(!folding)}
            >
                <p className='font-bold'>تطبيق</p>
                <span
                    className={`relative w-5 h-5 p-1 rounded-full ${folding ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}
                >
                    {
                        folding &&
                        <FontAwesomeIcon
                            icon={faCheck}
                            className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                        />
                    }
                </span>
            </span>
            <span
                className='mr-8 select-none flex items-center gap-6 cursor-pointer'
                onClick={() => setPacking(!packing)}
            >
                <p className='font-bold'>تغليف</p>
                <span
                    className={`relative w-5 h-5 p-1 rounded-full ${packing ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}
                >
                    {
                        packing &&
                        <FontAwesomeIcon
                            icon={faCheck}
                            className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                        />
                    }
                </span>
            </span>
        </div>
    )
}

export default IroningPackaging;

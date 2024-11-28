'use client'

import { useState, useEffect } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Shipping from "./Shipping";

const Storage = () => {
    const [storage, setStorage] = useState(true);
    const [storageType, setStorageType] = useState('boxes');
    const [storageDuration, setStorageDuration] = useState(1);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('storageOptions'));
        if (savedData) {
            setStorage(savedData.storage);
            setStorageType(savedData.storageType);
            setStorageDuration(savedData.storageDuration);
        }
    }, []);

    useEffect(() => {
        const storageData = {
            storage,
            storageType,
            storageDuration
        };
        localStorage.setItem('storageOptions', JSON.stringify(storageData));
    }, [storage, storageType, storageDuration]);

    return (
        <div className='relative w-full flex flex-col justify-start gap-6'>
            <span className='absolute -right-14 -top-14 p-2 font-bold flex justify-center items-center w-1/6 max-md:w-1/3 rounded-2xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>التخزين</span>
            <span className='w-2/4 max-md:w-full max-md:flex-col max-md:gap-3 flex justify-between items-center'>
                <p className='font-bold'>هل ترغب في تخزين المنتج</p>
                <div className='flex max-md:flex-row max-md:gap-6 flex-col items-start gap-3'>
                    <span 
                        className='flex items-center max-md:gap-3 gap-6 cursor-pointer select-none'
                        onClick={() => setStorage(true)}
                    >
                        <p className='font-bold'>نعم</p>
                        <span className={`relative w-5 h-5 p-1 rounded-full ${storage ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                            {
                                storage &&
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                />
                            }
                        </span>
                    </span>
                    <span 
                        className='flex items-center max-md:gap-3 gap-6 cursor-pointer select-none'
                        onClick={() => setStorage(false)}
                    >
                        <p className='font-bold'>لا</p>
                        <span className={`relative w-5 h-5 p-1 rounded-full ${!storage ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                            {
                                !storage &&
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                />
                            }
                        </span>
                    </span>
                </div>
            </span>
            {
                storage &&
                <>                
                    <span className='w-2/4 max-md:w-full max-md:flex-col max-md:gap-3 flex justify-between items-center'>
                        <p className='font-bold'>نوعية التخزين</p>
                        <div className='flex flex-col items-start gap-3'>
                            <span 
                                className='flex items-center gap-6 cursor-pointer select-none'
                                onClick={() => setStorageType('boxes')}
                            >
                                <p className='font-bold'>تخزين المنتج في كراتين</p>
                                <span className={`relative w-5 h-5 p-1 rounded-full ${storageType === 'boxes' ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                                    {
                                        storageType === 'boxes' &&
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                        />
                                    }
                                </span>
                            </span>
                            <span 
                                className='flex items-center gap-6 cursor-pointer select-none'
                                onClick={() => setStorageType('bags')}
                            >
                                <p className='font-bold'>تخزين المنتج في أكياس كبيرة</p>
                                <span className={`relative w-5 h-5 p-1 rounded-full ${storageType === 'bags' ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                                    {
                                        storageType === 'bags' &&
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                        />
                                    }
                                </span>
                            </span>
                        </div>
                    </span>
                    <span className='w-2/4 max-md:w-full flex items-center gap-10'>
                        <p className='font-bold'>مدة التخزين</p>
                        <input
                            type='number'
                            value={storageDuration}
                            onChange={(e) => setStorageDuration(e.target.value)}
                            className='w-1/4 p-2 outline-none rounded-md shadow-inner'
                        />
                        <p className='font-bold'>يوم</p>
                    </span>
                </>
            }
            <Shipping />
        </div>
    );
}

export default Storage;

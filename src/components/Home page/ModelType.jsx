'use client';

import Image from "next/image";
import sun from '../../assets/home page/sun.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const ModelType = () => {
    const [selectedModel, setSelectedModel] = useState('tshirt');

    const models = [
        { id: 'tshirt', label: 'تيشيرت', labelEn: 'T-shirt' },
        { id: 'blazers', label: 'بليزر', labelEn: 'Blazers' },
        { id: 'shirt', label: 'قميص', labelEn: 'Shirt' },
        { id: 'polo', label: 'بولو', labelEn: 'Polo' },
        { id: 'hoodie', label: 'هودي', labelEn: 'Hoodie' },
        { id: 'jacket', label: 'جاكت', labelEn: 'Jacket' },
        { id: 'jakaia', label: 'جكايا', labelEn: 'Jakaia' },
        { id: 'tekoh', label: 'تكوه', labelEn: 'Tekoh' },
        { id: 'ball', label: 'كورة', labelEn: 'Ball' },
        { id: 'meshkshk', label: 'مشكشك', labelEn: 'Meshkshk' },
        { id: 'coppolo', label: 'كوبولو', labelEn: 'Coppolo' },
        { id: 'fur', label: 'فروة', labelEn: 'Fur' },
    ];

    const handleModelClick = (id) => {
        setSelectedModel(selectedModel === id ? null : id);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full p-5 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
                <p className='text-xl text-white font-bold'>
                    نوع الموديل
                    <br />
                    Model Type
                </p>
                <Image
                    src={sun}
                    alt='sun'
                    className='w-12 absolute left-0 top-0'
                />
            </div>
            <div className='flex flex-wrap justify-center items-center gap-10'>
                {models.map(model => (
                    <div key={model.id} className='w-fit flex justify-center items-center gap-4 font-bold'>
                        <span 
                            className={`w-8 h-8 flex justify-center items-center ${selectedModel !== model.id && 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleModelClick(model.id)}
                        >
                            {selectedModel === model.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{model.label}</p>
                            <p>{model.labelEn}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelType;

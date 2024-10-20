'use client';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import sun from '../../assets/home page/sun.svg';
import { useState } from 'react';

const MaterialType = () => {
    const [selectedMaterial, setSelectedMaterial] = useState('cotton100');

    const materials = [
        { id: 'cotton100', label: 'قطن 100', labelEn: '100% Cotton' },
        { id: 'cottonBlend', label: 'قطن مخلوط', labelEn: 'Cotton Blend' },
        { id: 'polyester', label: 'بلوستر', labelEn: 'Polyester' },
        { id: 'fauxLeather', label: 'جلد صناعي', labelEn: 'Faux Leather' },
        { id: 'naturalLeather', label: 'جلد طبيعي', labelEn: 'Natural Leather' },
        { id: 'naturalFur', label: 'فرو طبيعي', labelEn: 'Natural Fur' },
        { id: 'fauxFur', label: 'فرو صناعي', labelEn: 'Faux Fur' },
        { id: 'fauxWool', label: 'صوف صناعي', labelEn: 'Faux Wool' },
        { id: 'naturalWool', label: 'صوف طبيعي', labelEn: 'Natural Wool' },
    ];

    const handleMaterialClick = (id) => {
        setSelectedMaterial(selectedMaterial === id ? null : id);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full p-5 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
                <p className='text-xl text-white font-bold'>
                    نوع الخامة
                    <br />
                    Type of material
                </p>
                <Image 
                    src={sun}
                    alt='sun'
                    className='w-12 absolute left-0 top-0'
                />
            </div>    
            <div className='flex flex-wrap justify-center items-center gap-10'>
                {materials.map(material => (
                    <div key={material.id} className='w-fit flex justify-center items-center gap-4 font-bold'>
                        <span 
                            className={`w-8 h-8 flex justify-center items-center ${selectedMaterial !== material.id && 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleMaterialClick(material.id)}
                        >
                            {selectedMaterial === material.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{material.label}</p>
                            <p>{material.labelEn}</p>
                        </div>
                    </div>
                ))}
            </div>      
        </div>
    );
};

export default MaterialType;

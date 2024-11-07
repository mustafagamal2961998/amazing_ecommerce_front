'use client';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import sun from '../../assets/home page/sun.svg';
import { useEffect, useState } from 'react';
import { GET_DATA } from '../../Utils/Data/getData';
import { GET_MATERIALS } from '../../Utils/APIs';

const MaterialType = () => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchMaterials = async () => {
            const data = await GET_DATA(GET_MATERIALS);
            setMaterials(data);

            // Initialize selection from local storage if available
            const storedOrder = JSON.parse(window.localStorage.getItem('custom_order'));
            const initialMaterialId = storedOrder?.material_id || data[0]?.id || null;
            setSelectedMaterial(initialMaterialId);
        };

        fetchMaterials();
    }, []);

    useEffect(() => {
        const custom_order = JSON.parse(window.localStorage.getItem('custom_order')) || {};

        // Store the selected material's ID and name_ar in local storage
        if (selectedMaterial !== null) {
            const selectedMaterialData = materials.find(material => material.id === selectedMaterial);
            custom_order.material_id = selectedMaterial; // Save selected material's ID
            custom_order.material_name_ar = selectedMaterialData?.name_ar || ''; // Save selected material's name_ar

            window.localStorage.setItem('custom_order', JSON.stringify(custom_order));
        }
    }, [selectedMaterial, materials]);

    const handleMaterialClick = (id) => {
        // Deselect the current material or select a new one
        if (selectedMaterial === id) {
            const newMaterialId = materials[0]?.id || null; // Revert to the first material if the same one is clicked
            setSelectedMaterial(newMaterialId);
        } else {
            setSelectedMaterial(id);
        }
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
            <div className='flex flex-wrap justify-center items-center gap-20'>
                {materials.map(material => (
                    <div key={material.id} className='w-fit flex justify-center items-center gap-4 font-bold'>
                        <span 
                            className={`w-8 h-8 flex justify-center items-center ${selectedMaterial !== material.id ? 'bg-[#F5F3F3]' : ''} border-2 border-black cursor-pointer`}
                            role="button"
                            tabIndex={0}
                            onClick={() => handleMaterialClick(material.id)}
                            onKeyDown={(e) => e.key === 'Enter' && handleMaterialClick(material.id)} // Accessibility for keyboard users
                        >
                            {selectedMaterial === material.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{material.name_ar}</p>
                            <p>{material.name_en}</p>
                            <p className='text-xs font-bold text-gray-500'>{material.price} ر.س</p>
                        </div>
                    </div>
                ))}
            </div>      
        </div>
    );
};

export default MaterialType;

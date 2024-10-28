'use client';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import sun from '../../assets/home page/sun.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_MATERIALS } from '../../Utils/APIs';

const MaterialType = () => {
    const [selectedMaterial, setSelectedMaterial] = useState('cotton100');
    const [materials, setMaterials] = useState([]);
    
    const getMaterials = async () => {
        const res = await axios.get(GET_MATERIALS);
        const data = res.data.data;
        setMaterials(data);
        setSelectedMaterial(data[0].id)
    }

    useEffect(() => {
        getMaterials();
    }, []);

    const handleMaterialClick = (id) => {
        setSelectedMaterial(selectedMaterial === id ? 1 : id);
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
                            <p>{material.name_ar}</p>
                            <p>{material.name_en}</p>
                        </div>
                    </div>
                ))}
            </div>      
        </div>
    );
};

export default MaterialType;

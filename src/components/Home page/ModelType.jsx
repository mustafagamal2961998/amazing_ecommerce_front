'use client';

import Image from "next/image";
import sun from '../../assets/home page/sun.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_MODELS } from "../../Utils/APIs";

const ModelType = () => {
    const [selectedModel, setSelectedModel] = useState(null);
    const [models, setModels] = useState([]);
    
    const getModels = async () => {
        const res = await axios.get(GET_MODELS);
        const data = res.data.data;
        setModels(data);
        setSelectedModel(data[0].id)
    }

    useEffect(() => {
        getModels();
    }, [])

    const handleModelClick = (id) => {
        setSelectedModel(selectedModel === id ? 1 : id);
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
            <div className='flex flex-wrap justify-center items-center gap-20'>
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
                            <p>{model.name_ar}</p>
                            <p>{model.name_en}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelType;

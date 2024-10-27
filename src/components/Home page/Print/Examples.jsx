'use client'

import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import axios from "axios";
import { GET_EXAMPLES } from "../../../Utils/APIs";

const Examples = () => {

    const [examples, setExamples] = useState([]);
    const [selectedOption, setSelectedOption] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');

    const handleOptionClick = (id) => {
        setSelectedOption(selectedOption === id ? 'none' : id);
    };
    
    const getExamples = async () => {
        try {
            const res = await axios.get(GET_EXAMPLES);
            const data = res.data.data;
            setExamples(data);
        }catch(error) {
            console.log(error)
        }
    }

    const search = async () => {
        try {
            if(searchTerm === '')
                return;
            const res = await axios.get(GET_EXAMPLES, {params: {name: searchTerm}})
            const data = res.data.data;;
            setExamples(data);
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getExamples();
        search();
    }, [searchTerm])

  return (
    <div className='w-full'>
        <div className='w-full p-5 relative rounded-md border-[1px] border-[#C1C1C1] mb-6'>
            <input
                type='search'
                className='w-full rounded-3xl border-2 border-[#C1C1C1] outline-none p-3'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        {
            searchTerm === '' &&
            <FontAwesomeIcon
                icon={faSearch}
                className='absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#C1C1C1]'
            />  
        } 
        </div>
        <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
            {examples.map((example) => (
                <SwiperSlide key={example.id} className='relative' onClick={() => handleOptionClick(example.id)}>
                    <Image 
                    width={300}
                    height={300}
                    src={example.media} 
                    alt={example.name} 
                    className='w-3/4' 
                    />
                    <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute right-5 top-3`}>
                        {selectedOption === example.id && 
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='w-5 h-5 text-[#222]'
                            />
                        }
                    </span>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Examples

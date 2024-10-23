'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import Link from 'next/link';
import thumbnail from '../../../../assets/products/pro4.svg';
import details from '../../../../assets/details.svg';

const Slider = (props) => {
    const section = props.section;
  return (
    <div className='p-10'>
        <Swiper autoplay={{ delay: 2000 }} spaceBetween={50} slidesPerView={6}>
            {section.categories.map((category) => (
                <SwiperSlide key={section.id}>
                  <div key={category.id} className='w-full p-1 duration-200 border-2 border-transparent hover:border-[#00B6A9] rounded-md flex flex-col justify-center items-center gap-2 cursor-grab'>
                      <Image src={category.media || thumbnail} width={1280} height={720} title={category.description} alt={category.description} className='w-full' />
                      <p className='font-bold text-lg'>{category.name}</p>
                      <Link href={`/category/${category.id}/${category.slug}`} title={category.description} className='w-full p-2 mb-2 flex justify-center items-center gap-3 bg-[#00B6A9] rounded-lg'>
                          <p className='text-base text-white max-md:text-sm'>{category.description}</p>
                          <Image src={details} title={category.description} alt={category.description} className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px]' />
                      </Link>
                  </div>
                </SwiperSlide>
            ))}
        </Swiper>      
    </div>
  )
}

export default Slider

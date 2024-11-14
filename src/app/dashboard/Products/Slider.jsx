import Image from 'next/image';
import React, { useState } from 'react';

const ImageSlider = (props) => {
  const { images } = props;
  const [current, setCurrent] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrent(index);
  };

  return (
    <span className='absolute top-0 w-full flex flex-col justify-center items-center gap-2 float-start'>
      <Image 
        src={images[current].url} 
        alt='Amazing' 
        width={500} 
        height={500} 
        className='w-full h-[200px] object-cover' 
      />
      <div className='flex justify-center items-center gap-2'>
        {images.map((image, index) => (
          <span 
            key={index} 
            className={`cursor-pointer w-[12px] h-[12px] rounded-full ${index === current ? 'bg-[#00B6A9]' : 'bg-[#8AD0C3]'}`} 
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </span>
  );
};

export default ImageSlider;

'use client'

import { useState } from "react";
import Image from "next/image";

const ProductImages = (props) => {
  const [selectedImage, setSelectedImage] = useState(props.thumbnail);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className='flex items-center gap-3 p-5 max-md:flex-col'>
      <div>
        <Image src={selectedImage} width={1200} height={1024} className='w-[512px] h-[500px] rounded-md' alt={props.title} />
      </div>
      <div className='flex md:flex-col items-center gap-3'>
        {props.images.map((img, index) => (
          <div key={index} onClick={() => handleImageClick(img)} className={`${selectedImage === img ? 'opacity-100' : 'opacity-50'} hover:opacity-100 duration-200 w-[57px] h-[70px] cursor-pointer rounded-md`}>
            <Image src={img} width={1200} height={1024} className='w-full h-full rounded-md object-cover' alt={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
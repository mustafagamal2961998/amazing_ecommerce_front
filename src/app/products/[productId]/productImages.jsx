'use client'

import Image from "next/image";
import { useState } from "react"

const ProductImages = (props) => {
  const [selectedImage, setSelectedImage] = useState(props.thumbnail);
  return (
    <div className='flex items-center gap-3 p-5 w-full'>
        <Image src={props.thumbnail} width={1200} height={1024} className='w-[512px] h-[500px] rounded-md' alt={props.title} />
        <span className='flex flex-col gap-3'>
        {props.images.map((img) => (
            <Image src={img} width={1200} height={1024} onClick={() => setSelectedImage(img)} className={`${selectedImage === img ? 'opacity-100' : 'opacity-50'} hover:opacity-100 duration-200 w-[57px] h-[70px] cursor-pointer rounded-md`} alt={props.title} />
        ))}
        </span>
    </div>
  )
}

export default ProductImages

'use client'

import Image from "next/image"
import Link from "next/link"
import cartPlus from '../../assets/cartPlus.png'
import fav from '../../assets/fav.png'
import redFav from '../../assets/redFav.png'
import { useState } from "react"

const ProductCard = (props) => {
  const [favImg, setFavImg] = useState(fav);

  const [showFullTitle, setShowFullTitle] = useState(false);

  const handleMouseEnter = () => {
    setShowFullTitle(true);
  };

  const handleMouseLeave = () => {
    setShowFullTitle(false);
  };

  return (
    <div className='product relative w-full flex flex-col justify-center gap-5 rounded-xl shadow-xl'>
        <Image src={favImg} onMouseOver={() => setFavImg(redFav)} onMouseOut={() => setFavImg(fav)} width={20} height={20} className='absolute left-[20px] top-[15px] cursor-pointer w-[20px] h-[20px] object-cover z-50' alt={props.title} />
        <Link href={`/products/${props.id}`}>
            <Image src={props.thumbnail} width={240} height={270} className='thumbnail w-full h-[200px] rounded-md object-cover duration-200 hover:opacity-80' alt={props.title} />
        </Link>
        <span className='flex flex-col p-1'>
            <p className='font-bold z-50' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{showFullTitle ? props.title : `${props.title.slice(0, 10)} ...`}</p>
            <span className='flex justify-between max-md:justify-center max-md:flex-col items-center w-full p-1'>
                <span className='flex items-center gap-2 max-md:flex-col max-md:justify-center max-md:items-center'>
                    <p className='font-bold'>{props.price} ر.س</p>
                    <p className='text-xs text-gray-500 line-through'>{(props.price - 2).toFixed(2)} ر.س</p>
                 </span>
                <Image src={cartPlus} width={35} height={35} className='cursor-pointer md:mt-[-25px] max-md:mt-2 bg-[#5E6DA8] duration-200 hover:bg-green-500 p-2 rounded-md w-[35px] h-[35px] object-cover' alt={props.title} />
            </span>
        </span>
    </div>
  )
}

export default ProductCard
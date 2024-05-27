'use client'

import Image from "next/image"
import Link from "next/link"
import cartPlus from '../../assets/cartPlus.png'
import fav from '../../assets/fav.png'
import redFav from '../../assets/redFav.png'
import { useState } from "react"

const ProductCard = (props) => {
  const [favImg, setFavImg] = useState(fav);
  return (
    <div className='product relative w-full flex flex-col justify-center gap-5 rounded-md shadow'>
        <Image src={favImg} onMouseOver={() => setFavImg(redFav)} onMouseOut={() => setFavImg(fav)} width={20} height={20} className='absolute left-[20px] top-[15px] cursor-pointer w-[20px] h-[20px] object-cover z-50
        
        
        
        
        ' alt={props.title} />
        <Link href={`/products/${props.id}`}>
            <Image src={props.thumbnail} width={240} height={270} className='thumbnail w-full h-[200px] rounded-md object-cover duration-200 hover:opacity-80' alt={props.title} />
        </Link>
        <span className='flex flex-col p-1'>
            <p className='font-bold'>{props.title}</p>
            <span className='flex justify-between items-center w-full p-1'>
                <span className='flex items-center gap-2'>
                    <p className='font-bold'>{props.price} ر.س</p>
                    <p className='text-xs text-gray-500 line-through'>{props.price - 50} ر.س</p>
                 </span>
                <Image src={cartPlus} width={35} height={35} className='cursor-pointer mt-[-25px] bg-[#5E6DA8] duration-200 hover:bg-green-500 p-2 rounded-md w-[35px] h-[35px] object-cover' alt={props.title} />
            </span>
        </span>
    </div>
  )
}

export default ProductCard
'use client'

import { useState } from 'react';
import Image from 'next/image';
import fav from '../../assets/fav.png'
import redFav from '../../assets/redFav.png'

const FavImg = () => {
  const [favImg, setFavImg] = useState(fav);
  
  return (
    <Image src={favImg} onMouseOver={() => setFavImg(redFav)} onMouseOut={() => setFavImg(fav)} width={240} height={270} alt='fav icon' className='w-[24px] h-[24px] object-cover absolute left-5 top-5 cursor-pointer' />
  )
}

export default FavImg
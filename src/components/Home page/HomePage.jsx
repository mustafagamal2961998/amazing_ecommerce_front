'use client'
import Image from 'next/image'

import wardrobe from '../../assets/wardrobe/wardrobe.png'
import rightOpen from '../../assets/wardrobe/rightOpen.png'
import leftOpen from '../../assets/wardrobe/leftOpen.png'

import middleTopOpen from '../../assets/wardrobe/middleTopOpen.png'
import middleCenterOpen from '../../assets/wardrobe/middleCenterOpen.png'
import middleBottomOpen from '../../assets/wardrobe/middleBottomOpen.png'

import endTopOpen from '../../assets/wardrobe/endTopOpen.png'
import endBottomOpen from '../../assets/wardrobe/endBottomOpen.png'

import { useState } from 'react'
import Link from 'next/link'

const HomePage = () => {
  const [mainImg, setMainImg] = useState(wardrobe);

  return (
    <div className='wardrobe-container relative flex justify-center items-center'>
        <div className={`wardrobe h-[700px] mt-[40px] w-3/4 relative flex justify-center items-center`}>
            <Image src={mainImg ? mainImg : wardrobe} alt='Home page' width={4388} height={2650} className={`w-full h-full`} />
            <div className='wardrobe-overlay flex items-center justify-start' style={{ top: '46px', right: '104px', width: '36%', height: '91%', position: 'absolute', zIndex: '1' }}>
                <span className='w-full h-full' onMouseOver={() => setMainImg(rightOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/1' className='block w-full h-full'></Link>
                </span>
                <span className='w-full h-full' onMouseOver={() => setMainImg(leftOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/2' className='block w-full h-full'></Link>
                </span>
            </div>
            <div className='wardrobe-overlay flex flex-col justify-center items-center' style={{ top: '43px', right: '44%', width: '31%', height: '92%', position: 'absolute', zIndex: '1' }}>
                <span className='w-full h-[80%] -mb-2' onMouseOver={() => setMainImg(middleTopOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/3' className='block w-full h-full'></Link>
                </span>
                <span className='w-full h-full' onMouseOver={() => setMainImg(middleCenterOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/4' className='block w-full h-full'></Link>
                </span>
                <span className='w-full h-[80%]' onMouseOver={() => setMainImg(middleBottomOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/5' className='block w-full h-full'></Link>
                </span>
            </div>
            <div className='wardrobe-overlay flex flex-col justify-center items-center' style={{ top: '46px', left: '98px', width: '18%', height: '91%', position: 'absolute', zIndex: '1' }}>
                <span className='w-full h-[55%]' onMouseOver={() => setMainImg(endTopOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/6' className='block w-full h-full'></Link>
                </span>
                <span className='w-full h-2/4 mt-4' onMouseOver={() => setMainImg(endBottomOpen)} onMouseOut={() => setMainImg(wardrobe)}>
                    <Link href='/7' className='block w-full h-full'></Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default HomePage

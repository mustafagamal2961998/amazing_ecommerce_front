'use client'
import './style.css'
import Image from 'next/image'
import rightBubble from '../../assets/rightBubble.png'
import leftBubble from '../../assets/leftBubble.png'
import startRight from '../../assets/wardrobe/startRight.png'
import startLeft from '../../assets/wardrobe/startLeft.png'
import middleTop from '../../assets/wardrobe/middleTop.png'
import middleCenter from '../../assets/wardrobe/middleCenter.png'
import middleBottom from '../../assets/wardrobe/middleBottom.png'
import endTop from '../../assets/wardrobe/endTop.png'
import endBottom from '../../assets/wardrobe/endBottom.png'

import rightOpen from '../../assets/wardrobe/rightOpen.png'
import leftOpen from '../../assets/wardrobe/leftOpen.png'
import middleTopOpen from '../../assets/wardrobe/middleTopOpen.png'
import middleCenterOpen from '../../assets/wardrobe/middleCenterOpen.png'
import middleBottomOpen from '../../assets/wardrobe/middleBottomOpen.png'
import endTopOpen from '../../assets/wardrobe/endTopOpen.png'
import endBottomOpen from '../../assets/wardrobe/endBottomOpen.png'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const HomePage = () => {
  const pathname = usePathname()

  const [rightImg, setRightImg] = useState(null);
  const [leftImg, setLeftImg] = useState(null);

  const [middleTopImg, setMiddleTopImg] = useState(null);
  const [middleCenterImg, setMiddleCenterImg] = useState(null);
  const [middleBottomImg, setMiddleBottomImg] = useState(null);
  
  const [endTopImg, setEndTopImg] = useState(null);
  const [endBottomImg, setEndBottomImg] = useState(null);

  return (
    <div className='w-full h-screen relative'>
      {pathname === '/' &&
        <>
          <Image src={rightBubble} alt="Amazing" width={378} height={378} className='absolute right-0 top-0 z-0 w-[378px] h-[378px]' />
          <Image src={leftBubble} alt="Amazing" width={378} height={378} className='absolute left-0 bottom-0 w-[378px] h-[378px]' />
        </>
      }
    {      
      rightImg || leftImg || middleTopImg || middleCenterImg || middleBottomImg || endTopImg || endBottomImg ?
      <Link href={rightImg && '/1' || leftImg && '/2' || middleTopImg && '/3' || middleCenterImg && '/4' || middleBottomImg && '/5' || endTopImg && '/6' || endBottomImg && '/7' || ''}
      className="wardrobe absolute left-2/4 -translate-y-2/4 -translate-x-2/4 top-[35%] flex p-10 h-[700px] mt-[120px]">
          <div className="w-full flex -ml-2">
            <Image src={rightImg ? rightOpen : startRight} alt="Amazing" className={`w-2/4 ${rightImg ? 'h-[108.5%] min-w-[73%] z-10 mt-[-20px] mr-[-77px] ' : 'h-full'}`} 
              onMouseOver={() => setRightImg(rightOpen)}
              onMouseOut={() => setRightImg(null)}
            />
            <Image src={leftImg ? leftOpen : startLeft} alt="Amazing" className={`w-2/4 ${leftImg ? 'h-[113%] ml-[-1px] min-w-[73%] z-10 mt-[-45px] ' : 'h-full'}`}
              onMouseOver={() => setLeftImg(leftOpen)}
              onMouseOut={() => setLeftImg(null)}
            />
          </div>
          <div className="w-[35%] flex flex-col -ml-2">
            <Image src={middleTopImg ? middleTopOpen : middleTop} alt="Amazing" className={`${middleTopImg ? 'mr-[-47px] min-w-[130%] z-50 h-[36%] ' : ''} h-[36.3%] mb-[-1.25rem]`}
              onMouseOver={() => setMiddleTopImg(middleTopOpen)}
              onMouseOut={() => setMiddleTopImg(null)}
            />
            <Image src={middleCenterImg ? middleCenterOpen : middleCenter} alt="Amazing" className={`${middleCenterImg ? 'mr-[-47px] min-w-[143%] z-50 h-[36%] ' : ''} h-[36.3%] mb-[-1.25rem]`}
              onMouseOver={() => setMiddleCenterImg(middleCenterOpen)}
              onMouseOut={() => setMiddleCenterImg(null)}
            />
            <Image src={middleBottomImg ? middleBottomOpen : middleBottom} alt="Amazing" className={`${middleBottomImg ? 'mr-[-47px] min-w-[130%] z-50 h-[36.3%] ' : ''} h-[33.3%] mb-[-1.25rem]`}
              onMouseOver={() => setMiddleBottomImg(middleBottomOpen)}
              onMouseOut={() => setMiddleBottomImg(null)}
            />
          </div>
          <div className="w-[20%] ">
            <Image src={endTopImg ? endTopOpen : endTop} alt="Amazing" className={`${endTopImg ? 'mr-[4px] min-w-[160%] h-[51%] mb-[-12px]' : 'h-2/4'}`}
              onMouseOver={() => setEndTopImg(endTopOpen)}
              onMouseOut={() => setEndTopImg(null)}
            />
            <Image src={endBottomImg ? endBottomOpen : endBottom} alt="Amazing" className={`${endBottomImg ? 'mr-[4px] min-w-[160%] h-[57%] mt-[-22px] ' : 'h-2/4'}`}
              onMouseOver={() => setEndBottomImg(endBottomOpen)}
              onMouseOut={() => setEndBottomImg(null)}
            />
          </div>
      </Link>
        :
      <div className="wardrobe absolute left-2/4 -translate-y-2/4 -translate-x-2/4 top-[35%] flex p-10 h-[700px] mt-[120px]">
          <div className="w-full flex -ml-2">
            <Image src={rightImg ? rightOpen : startRight} alt="Amazing" className={`w-2/4 ${rightImg ? 'h-[108.5%] min-w-[73%] z-10 mt-[-20px] mr-[-77px] ' : 'h-full'}`} 
              onMouseOver={() => setRightImg(rightOpen)}
              onMouseOut={() => setRightImg(null)}
            />
            <Image src={leftImg ? leftOpen : startLeft} alt="Amazing" className={`w-2/4 ${leftImg ? 'h-[113%] ml-[-1px] min-w-[73%] z-10 mt-[-45px] ' : 'h-full'}`}
              onMouseOver={() => setLeftImg(leftOpen)}
              onMouseOut={() => setLeftImg(null)}
            />
          </div>
          <div className="w-[35%] flex flex-col -ml-2">
            <Image src={middleTopImg ? middleTopOpen : middleTop} alt="Amazing" className={`${middleTopImg ? 'mr-[-47px] min-w-[130%] z-50 h-[36%] ' : ''} h-[36.3%] mb-[-1.25rem]`}
              onMouseOver={() => setMiddleTopImg(middleTopOpen)}
              onMouseOut={() => setMiddleTopImg(null)}
            />
            <Image src={middleCenterImg ? middleCenterOpen : middleCenter} alt="Amazing" className={`${middleCenterImg ? 'mr-[-47px] min-w-[143%] z-50 h-[36%] ' : ''} h-[36.3%] mb-[-1.25rem]`}
              onMouseOver={() => setMiddleCenterImg(middleCenterOpen)}
              onMouseOut={() => setMiddleCenterImg(null)}
            />
            <Image src={middleBottomImg ? middleBottomOpen : middleBottom} alt="Amazing" className={`${middleBottomImg ? 'mr-[-47px] min-w-[130%] z-50 h-[36.3%] ' : ''} h-[33.3%] mb-[-1.25rem]`}
              onMouseOver={() => setMiddleBottomImg(middleBottomOpen)}
              onMouseOut={() => setMiddleBottomImg(null)}
            />
          </div>
          <div className="w-[20%] ">
            <Image src={endTopImg ? endTopOpen : endTop} alt="Amazing" className={`${endTopImg ? 'mr-[4px] min-w-[160%] h-[51%] mb-[-12px]' : 'h-2/4'}`}
              onMouseOver={() => setEndTopImg(endTopOpen)}
              onMouseOut={() => setEndTopImg(null)}
            />
            <Image src={endBottomImg ? endBottomOpen : endBottom} alt="Amazing" className={`${endBottomImg ? 'mr-[4px] min-w-[160%] h-[57%] mt-[-22px] ' : 'h-2/4'}`}
              onMouseOver={() => setEndBottomImg(endBottomOpen)}
              onMouseOut={() => setEndBottomImg(null)}
            />
          </div>
      </div>
    }
    </div>
  )
}

export default HomePage

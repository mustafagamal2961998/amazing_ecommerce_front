'use client'

import Image from "next/image";
import sun from '../../assets/home page/sun.svg';
import name1 from '../../assets/home page/name1.svg';
import name2 from '../../assets/home page/name2.svg';
import name3 from '../../assets/home page/name3.svg';
import name4 from '../../assets/home page/name4.svg';
import name5 from '../../assets/home page/name5.svg';

const Landing = () => {
  return (
    <div className='w-full max-h-screen relative overflow-hidden flex justify-start gap-10 p-10 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
      <div className='w-1/4 h-1/4 absolute left-0 top-0'>
        <Image 
          src={sun}
          alt='sun'
          className='w-full relative'
        />
        <p className='text-3xl absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-1/4 z-10 w-max'>
          صمم عبارتك بنفسك
          <br />
          Design your words
        </p>
      </div>
      <div className='w-full flex flex-col items-start gap-7'>
        <Image 
          src={name1}
          alt='name1'
          className='w-full animate-move1'
        />
        <Image 
          src={name2}
          alt='name2'
          className='w-1/4 animate-move2'
        />
        <Image 
          src={name3}
          alt='name3'
          className='w-3/4 animate-move3'
        />
        <Image 
          src={name4}
          alt='name4'
          className='w-2/4 animate-move4'
        />
        <Image 
          src={name5}
          alt='name5'
          className='w-full animate-move5'
        />
      </div>
      <div className='w-full flex flex-col items-start gap-7'>
        <Image 
          src={name2}
          alt='name2'
          className='w-1/4 animate-move2'
        />
        <Image 
          src={name1}
          alt='name1'
          className='w-full animate-move1'
        />
        <Image 
          src={name3}
          alt='name3'
          className='w-3/4 animate-move3'
        />
        <Image 
          src={name5}
          alt='name5'
          className='w-full animate-move5'
        />
        <Image 
          src={name2}
          alt='name2'
          className='w-1/4 animate-move2'
        />
      </div>
      <div className='w-full flex flex-col items-start gap-7'>
        <Image 
          src={name3}
          alt='name3'
          className='w-3/4 animate-move3'
        />
        <Image 
          src={name4}
          alt='name4'
          className='w-2/4 animate-move4'
        />
        <Image 
          src={name1}
          alt='name1'
          className='w-full animate-move1'
        />
        <Image 
          src={name2}
          alt='name2'
          className='w-1/4 animate-move2'
        />
        <Image 
          src={name5}
          alt='name5'
          className='w-full animate-move5'
        />
      </div>
      <div className='w-full flex flex-col items-start gap-7'>
        <Image 
          src={name4}
          alt='name4'
          className='w-2/4 animate-move4'
        />
        <Image 
          src={name5}
          alt='name5'
          className='w-full animate-move5'
        />
        <Image 
          src={name2}
          alt='name2'
          className='w-1/4 animate-move2'
        />
        <Image 
          src={name3}
          alt='name3'
          className='w-3/4 animate-move3'
        />
        <Image 
          src={name1}
          alt='name1'
          className='w-full animate-move1'
        />
      </div>
      <div className='w-full flex flex-col items-start gap-7'>
        <Image 
          src={name5}
          alt='name5'
          className='w-full animate-move5'
        />
        <Image 
          src={name1}
          alt='name1'
          className='w-full animate-move1'
        />
        <Image 
          src={name2}
          alt='name2'
          className='w-1/4 animate-move2'
        />
        <Image 
          src={name4}
          alt='name4'
          className='w-2/4 animate-move4'
        />
        <Image 
          src={name3}
          alt='name3'
          className='w-3/4 animate-move3'
        />
      </div>
    </div>
  );
};

export default Landing;

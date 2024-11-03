'use client';

import Link from 'next/link';
import Image from "next/image";
import name1 from '../../assets/home page/name1.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from '../../Utils/Cart/AddToCart';

const HomePageCart = () => {
  const cartItems = Array.from({ length: 8 });

  const product = JSON.parse(window.localStorage.getItem('custom_order'));

  return (
    <div className='w-3/4 p-5 mb-6 rounded-xl border border-black flex flex-col justify-center items-center gap-3 bg-gradient-to-tr from-[#FEF8B3] to-[#FEDF2B]'>
      <div className='w-full flex justify-start gap-12'>
        <div className='w-full p-7 rounded-2xl border border-black flex justify-center items-center gap-3 bg-gradient-to-tr from-[#87CFC3] to-[#00A387]'>
          {cartItems.map((_, index) => (
            <div key={index} className="flex items-center">
              <Image src={name1} alt={`Item ${index + 1}`} className='w-12' />
              <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-2'>
          <button className='p-2 w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-[#28B571] to-[#00954D]'>
            <FontAwesomeIcon icon={faCheck} className='w-8 h-8 text-white' onClick={addToCart} />
          </button>
          <button className='p-2 w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-[#F26A4C] to-[#D72128]'>
            <FontAwesomeIcon icon={faXmark} className='w-8 h-8 text-white' />
          </button>
        </div>
      </div>
      <Link href='/checkout' className='font-bold text-center'>
        اتمام الدفع
        <br />
        Complete payment
      </Link>
    </div>
  );
}

export default HomePageCart;

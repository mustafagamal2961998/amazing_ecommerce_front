'use client';

import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from '../../Utils/Cart/AddToCart';
import { useStatusContext } from '../../Utils/Status/statusContext';
import { useEffect, useState } from 'react';

const HomePageCart = () => {
  const [customOrder, setCustomOrder] = useState(null);
  const { isLoggedIn } = useStatusContext();
  const { customImg, setCustomImg } = useStatusContext();

  const fetchCustomOrder = () => {
    const custom_order = JSON.parse(window.localStorage.getItem('custom_order')) || null;
    setCustomOrder(custom_order);
  }

  useEffect(() => {
    setInterval(() => {
        fetchCustomOrder();
      }, 1000);
  }, []);

  const renderExampleImg = () => (
    customOrder?.example_img && (
      <div className="flex items-center gap-2">
        <Image width={74} height={74} src={customOrder.example_img} className='w-[74px] rounded-md' alt="example Image" />
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    )
  );

  const renderNameImg = () => (
    customOrder?.name_img && (
      <div className="flex items-center gap-2">
        <Image width={74} height={74} src={customOrder.name_img} className='w-[74px] rounded-md' alt="name Image" />
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    )
  );

  const renderLogoImg = () => (
    customOrder?.logo_img && (
      <div className="flex items-center gap-2">
        <Image width={74} height={74} src={customOrder.logo_img} className='w-[74px] rounded-md' alt="logo Image" />
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    )
  );

  const renderImg = () => (
    customOrder?.image_img && (
      <div className="flex items-center gap-2">
        <Image width={74} height={74} src={customOrder.image_img} className='w-[74px] rounded-md' alt="Image" />
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    )
  );

  const renderNumber = () => (
    customOrder?.number && (
      <div className="flex items-center gap-2">
        {customOrder.number}
        <p>رقم : {customOrder.number}</p>
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    )
  );

  const renderMaterialName = () => (
    customOrder?.material_name_ar && (
      <div className="flex items-center gap-2">
        {customOrder.material_name_ar}
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    )
  );

  const renderSizeDirections = () => (
    customOrder?.sizedirection_names_ar?.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <p>{item}</p>
        <FontAwesomeIcon icon={faPlus} className='w-8 h-8' />
      </div>
    ))
  );

  const renderPrintColor = () => (
    customOrder?.print_color && (
      <div className="flex items-center gap-2">
        <p>لون طباعة:</p>
        <FontAwesomeIcon icon={faCircle} style={{ color: customOrder.print_color }} className='w-8 h-8' />
      </div>
    )
  );

  const renderProductImage = () => (
    customOrder?.product_img && (
      <div className="flex items-center gap-2">
        <Image width={74} height={74} src={customOrder.product_img} className='w-[74px] rounded-md' alt="Product Image" />
      </div>
    )
  );

  const removeCart = () => {
    window.localStorage.removeItem('custom_order');
    setCustomOrder(null);
    setCustomImg(null);
  }

  return (
    <div className='w-3/4 p-5 mb-6 rounded-xl border border-black flex flex-col justify-center items-center gap-3 bg-gradient-to-tr from-[#FEF8B3] to-[#FEDF2B]'>
      <div className='w-full flex max-md:flex-col max-md:justify-center max-md:gap-4 justify-start gap-12'>
        <div className='w-full p-7 rounded-2xl border border-black flex flex-wrap justify-center items-center gap-3 bg-gradient-to-tr from-[#87CFC3] to-[#00A387]'>
          {renderExampleImg()}
          {renderNameImg()}
          {renderLogoImg()}
          {renderImg()}
          {renderNumber()}
          {renderMaterialName()}
          {renderSizeDirections()}
          {renderPrintColor()}
          {renderProductImage()}
        </div>
        <div className='flex flex-col gap-2 max-md:flex-row max-md:justify-center'>
          {isLoggedIn ? (
            <button
              className='p-2 w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-[#28B571] to-[#00954D]'
              onClick={() => addToCart(customImg)}
              aria-label="Add to Cart"
            >
              <FontAwesomeIcon icon={faCheck} className='w-8 h-8 text-white' />
            </button>
          ) : (
            <Link href='/auth/login' className='p-2 w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-[#28B571] to-[#00954D]'>
              <FontAwesomeIcon icon={faCheck} className='w-8 h-8 text-white' />
            </Link>
          )}
          <button
            className='p-2 w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-[#F26A4C] to-[#D72128]'
            onClick={removeCart}
          >
            <FontAwesomeIcon icon={faXmark} className='w-8 h-8 text-white' />
          </button>
        </div>
      </div>
      <Link href='/cart' className='font-bold text-center'>
        عربة المنتجات
        <br />
        Cart items
      </Link>
    </div>
  );
}

export default HomePageCart;

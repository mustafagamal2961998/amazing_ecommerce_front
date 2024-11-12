'use client'

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCircle, faHeart, faMinus, faPlus, faShare } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../../../Utils/Cart/AddToCart";

const ProductData = (props) => {
  const product = props.product;
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedImage, setSelectedImage] = useState(selectedColor.images[0].url);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleChangeColor = (colorId) =>{
    const findColor = product.colors.find(color => color.id === colorId);
    setSelectedColor(findColor);
    setSelectedImage(findColor.images[0].url);
  }

  const handleSizeChange = (sizeId) => {
    const findSize = product.sizes.find(size => size.id === sizeId);
    setSelectedSize(findSize);
  }

  const handleAddToCart = () => {
    const cartItem = {
      product_id: product.id,
      size_id: selectedSize.id,
      color_id: selectedColor.id,
      quantity,
    }
    localStorage.setItem('custom_order', JSON.stringify(cartItem));
    addToCart();
  }

  const handleChangeQuantity = (operation) => {
    setQuantity(prev => operation === 'plus' ? prev + 1 : Math.max(prev - 1, 1));
  };

  return (
    <div className='flex justify-between w-full max-md:flex-col'>
      <div className='flex flex-col gap-5 items-start'>
        <h2 className='text-[24px] font-bold'>{product.name} </h2>
        <span className='color flex flex-col gap-2 items-start'>
          <p className='font-bold'>اللون</p>
          <span className='flex items-center gap-2'>
            {product.colors.map((color, index) => (
                <FontAwesomeIcon
                onClick={() => handleChangeColor(color.id)}
                key={index}
                icon={faCircle} 
                className='w-8 h-8 cursor-pointer max-md:w-[14px] max-md:h-[14px]' 
                style={{color: color.color_code}}
                />
            ))}
          </span>
        </span>
        <span className='size flex flex-col gap-2 items-start'>
          <p className='font-bold'>المقاس</p>
          <span className='flex items-center gap-2'>
            {
              product.sizes.map((size) => (
                <span 
                key={size.id} 
                onClick={() => handleSizeChange(size.id)}
                className={`p-5 w-[35px] h-[35px] flex justify-center items-center ${selectedSize.id === size.id ? 'bg-[#00B6A9] text-white' : '' } font-bold rounded-md cursor-pointer`}
                >
                  {size.size_code.toUpperCase()}
                </span>
              )
            )}
          </span>
        </span>
        <span className='flex gap-5 p-2 rounded-2xl text-white bg-[#00B6A9]'>
          <FontAwesomeIcon onClick={() => handleChangeQuantity('plus')} icon={faPlus} className='border-2 rounded-full border-white cursor-pointer' />
            {quantity}
          <FontAwesomeIcon onClick={() => handleChangeQuantity('minus')} icon={faMinus} className='border-2 rounded-full border-white cursor-pointer' />
        </span>
        {
          selectedSize.discount_rate ? 
          <span className='flex items-center gap-3 mt-[26px]'>
              <p className='font-bold'>{selectedSize.discount_price} ر.س</p>
              <p className='text-[#E5A3A3] text-xs line-through'>{selectedSize.basic_price} ر.س</p>
          </span>
          :
          <p className='font-bold'>{selectedSize.basic_price} ر.س</p>
        }
        <span className='w-[300px] max-md:w-full flex flex-col items-start gap-2'>
          <button onClick={handleAddToCart} className='bg-[#00B6A9] duration-200 hover:bg-[#00b6a9da] text-white p-4 rounded-xl relative w-[154%] max-md:w-full'>
            اضف إلى السلة
            <FontAwesomeIcon icon={faCartPlus} className='absolute left-5 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[20px] h-[20px]' />
          </button>
          <span className='flex items-center gap-2 w-[192%] max-md:w-full ml-auto'>
            <button onClick={handleAddToCart} className='bg-[#409F49] duration-200 hover:bg-[#409f4acc] text-white p-[14px] rounded-xl w-full'>
              اشتري الأن  
            </button>
            <span className='w-[55px] h-[55px] p-4 bg-[#00B6A9] duration-200 hover:bg-red-500 rounded-xl cursor-pointer relative'>
              <FontAwesomeIcon icon={faHeart} className='text-white absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4' />
            </span>
            <span className='w-[55px] h-[55px] p-4 bg-[#00B6A9] duration-200 hover:bg-black rounded-xl cursor-pointer relative'>
              <FontAwesomeIcon icon={faShare} className='text-white absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4' />
            </span>
          </span>
        </span>
      </div>
      <div className='flex items-center gap-3 p-5 max-md:flex-col'>
        <div>
          <Image src={selectedImage} width={1200} height={1024} className='w-[512px] h-[500px] rounded-md' alt={product.name} />
        </div>
        <div className='flex md:flex-col items-center gap-3'>
          {selectedColor.images.map((img, index) => (
            <div key={index} onClick={() => handleImageClick(img.url)} className={`${selectedImage === img.url ? 'opacity-100' : 'opacity-50'} hover:opacity-100 duration-200 w-[57px] h-[70px] cursor-pointer rounded-md`}>
              <Image src={img.url} width={1200} height={1024} className='w-full h-full rounded-md object-cover' alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
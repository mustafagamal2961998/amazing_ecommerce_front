import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_PRODUCT } from "../../../Utils/Products/GETProduct/GET_PRODUCT";
import { GET_PRODUCTS } from "../../../Utils/Products/GetProducts/GET_PRODUCTS";
import { faArrowLeft, faCartPlus, faHeart, faMinus, faPlus, faShare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import ProductImages from './ProductImages.jsx'
import ProductCard from "../../../components/Products/ProductCard";

const page = async ({params}) => {
  const productId = params.productId;
  const product = await GET_PRODUCT(productId);
  const products = await GET_PRODUCTS();

  if(product)
  return (
    <div className='min-h-screen flex flex-col items-start gap-5 p-5 w-fit'>
      <span className='w-[84%] flex justify-between items-center mr-36 mt-8 mb-8'>
        <span className='flex items-center text-gray-300'>بدلة بصف أزرار  / <p className='text-black mr-1'> بدل رسمي </p></span>
        <Link href='/' className='flex gap-2 items-center'>
            رجوع    
            <FontAwesomeIcon icon={faArrowLeft} className='w-[16px] h-[16px] text-black' />
        </Link>
      </span>
      <div className='flex justify-between gap-[295px] mr-36'>
        <div className='flex flex-col gap-5 items-start'>
          <h2 className='text-[24px]'>بدلة بصف أزرار</h2>
          <span className='color flex flex-col gap-2 items-start'>
                <p>اللون</p>
                <span className='flex items-center gap-2'>
                    <Image src={product.thumbnail} width={200} height={200} className='rounded-md w-[72px] h-[72px] cursor-pointer' alt={productId.title} />
                    <Image src={product.thumbnail} width={200} height={200} className='rounded-md w-[72px] h-[72px] cursor-pointer' alt={productId.title} />
                    <Image src={product.thumbnail} width={200} height={200} className='rounded-md w-[72px] h-[72px] cursor-pointer' alt={productId.title} />
                    <Image src={product.thumbnail} width={200} height={200} className='rounded-md w-[72px] h-[72px] cursor-pointer' alt={productId.title} />
                </span>
            </span>
          <span className='size flex flex-col gap-2 items-start'>
                <p>المقاس</p>
                <span className='flex items-center gap-2'>
                    <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>S</span>
                    <span className='p-2 text-black rounded-md cursor-pointer'>M</span>
                    <span className='p-2 text-black rounded-md cursor-pointer'>L</span>
                    <span className='p-2 text-black rounded-md cursor-pointer'>XL</span>
                    <span className='p-2 text-black rounded-md cursor-pointer'>XXL</span>
                </span>
            </span>
          <span className='flex gap-5 p-2 rounded-full text-white bg-[#5E6DA8]'>
            <FontAwesomeIcon icon={faPlus} className='border-2 rounded-full border-white cursor-pointer' />
              0
            <FontAwesomeIcon icon={faMinus} className='border-2 rounded-full border-white cursor-pointer' />
        </span>
        <span className='flex items-center gap-3'>
          <p className='font-bold'>500 ر.س</p>
          <p className='text-[#E5A3A3] text-xs line-through'>750 ر.س</p>
        </span>
        <span className='w-[300px] flex flex-col items-start gap-2'>
          <button className='bg-[#5E6DA8] text-white p-4 rounded-md relative w-[154%]'>
            اضف إلى السلة
            <FontAwesomeIcon icon={faCartPlus} className='absolute left-5 top-2/4 -translate-x-2/4 -translate-y-2/4' />
          </button>
          <span className='flex items-center gap-2 w-[192%] ml-auto'>
            <button className='bg-[#409F49] text-white p-[14px] rounded-md w-full'>
              اشتري الأن  
            </button>
            <span className='w-[55px] h-[55px] p-4 bg-[#5E6DA8] rounded-md cursor-pointer relative'>
              <FontAwesomeIcon icon={faHeart} className='text-white absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4' />
            </span>
            <span className='w-[55px] h-[55px] p-4 bg-[#5E6DA8] rounded-md cursor-pointer relative'>
              <FontAwesomeIcon icon={faShare} className='text-white absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4' />
            </span>
          </span>
        </span>
        </div>
        <ProductImages title={product.title} thumbnail={product.thumbnail} images={product.images} />
      </div>
      <div className='relative flex flex-col gap-5 items-start mr-36'>
        <span className='absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl bg-[#5E6DA8] text-white text-center w-[118px] p-3'>
         تفاصيل المنتج
        </span>
          <span className='flex items-start gap-20 mt-20 mr-16'>
          <span className='flex flex-col items-start gap-2'>
            <h2>البنطال:</h2>
            <ul className='list-disc'>
              <li>
                حلقات للحزام  
              </li>
              <li>
              جيبان جانبيان مائلان    
              </li>
              <li>
              قصة مستقيمة   
              </li>
              <li>
              ثنية في المنتصف  
              </li>
              <li>
              جيبان خلفيان بأزرار ومحددان بقماش  
              </li>
              <li>
                غلق بأزرار مخبأة  
              </li>
            </ul>
          </span>
          <span className='flex flex-col items-start gap-2'>
            <h2>البليزر:</h2>
            <ul className='list-disc'>
              <li>
                طية صدر بشكل حرف V  
              </li>
              <li>
               جيب مبطن على الصدر      
              </li>
              <li>
                وسائد كتف   
              </li>
              <li>
               أكمام طويلة   
              </li>
              <li>
                أساور بأزرار  
              </li>
              <li>
               شعار مخيوط على الأكمام    
              </li>
              <li>
               جيبان أماميان بقلاب    
              </li>
              <li>
               جيب داخلي محدد بقماش    
              </li>
              <li>
                بطانة جزئية     
              </li>
              <li>
               أزرار أمامية     
              </li>
            </ul>
          </span>
          <span className='flex flex-col items-start gap-2'>
            <h2>البليزر:</h2>
            <ul className='list-disc'>
              <li>
                طية صدر بشكل حرف V  
              </li>
              <li>
               جيب مبطن على الصدر      
              </li>
              <li>
                وسائد كتف   
              </li>
              <li>
               أكمام طويلة   
              </li>
              <li>
                أساور بأزرار  
              </li>
              <li>
               شعار مخيوط على الأكمام    
              </li>
              <li>
               جيبان أماميان بقلاب    
              </li>
              <li>
               جيب داخلي محدد بقماش    
              </li>
              <li>
                بطانة جزئية     
              </li>
              <li>
               أزرار أمامية     
              </li>
            </ul>
          </span>
        </span>
      </div>
      <div className='flex flex-col items-start gap-5 mr-36 w-[81%]'>
        <h2 className='font-bold text-[24px]'>منتجات اخرى</h2>
        <span className='grid grid-cols-5'>
          {products['products']?.slice(0, 5).map((productData) => (
            <ProductCard key={productData.id} id={productData.id} title={productData.title} price={productData.price} thumbnail={productData.thumbnail} />
          ))}
        </span>
      </div>
    </div>
  )
}

export default page

import './style.css';
import { faArrowLeft, faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import {GET_PRODUCTS} from '../../Utils/Products/GetProducts/GET_PRODUCTS'
import Image from "next/image"
import bottomSale from '../../assets/bottomSale.PNG'
import rightSale from '../../assets/rightSale.png'
import ProductCard from '../../components/Products/ProductCard';
import PriceRange from './priceRange'
const Products = async () => {
const products = await GET_PRODUCTS();

  return (
    <main className='flex items-start gap-5 max-md:flex-col max-md:items-center p-5 z-50'>
        <span className='relative w-1/4 max-md:w-full flex flex-col gap-5 '>
            <aside className='shadow h-full rounded-md mt-11'>
                    <span className='flex items-center gap-2 w-1/4 p-2 bg-[#5E6DA8] rounded-md text-white rounded-tr-xl rounded-bl-xl'>
                        <FontAwesomeIcon icon={faFilter} />
                        <p>فلتر</p>    
                    </span>
                    <span className='size p-3 flex flex-col gap-2 items-start'>
                        <p>المقاس</p>
                        <span className='flex items-center gap-2'>
                            <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>S</span>
                            <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>M</span>
                            <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>L</span>
                            <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>XL</span>
                            <span className='p-2 bg-[#5E6DA8] text-white rounded-md cursor-pointer'>XXL</span>
                        </span>
                    </span>
                    <span className='color p-3 flex flex-col gap-2 items-start'>
                        <p>اللون</p>
                        <span className='flex items-center gap-2'>
                            <span className='p-4 bg-red-700 text-white rounded-full cursor-pointer'></span>
                            <span className='p-4 bg-yellow-700 text-white rounded-full cursor-pointer'></span>
                            <span className='p-4 bg-green-700 text-white rounded-full cursor-pointer'></span>
                            <span className='p-4 bg-blue-700 text-white rounded-full cursor-pointer'></span>
                        </span>
                    </span>
                    <span className='price p-3 flex flex-col gap-2 items-start'>
                        <p>السعر</p>
                        <span className='w-full flex items-center gap-2 mt-6'>
                            <PriceRange />
                        </span>
                    </span>
                    <button className='w-1/4 p-1 bg-[#5E6DA8] text-white rounded-md mb-3 float-left'>تطبيق</button>
            </aside>
            <span className='sale  w-full relative'>
                <Image src={rightSale} alt='Amazing' className='w-full h-[549px]' />
                <h2 className='text-[20px] font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white'>تخفيضات حتى</h2>
                <h2 className='text-[50px] absolute left-2/4 top-[60%] -translate-x-2/4 -translate-y-2/4 text-white'>%50</h2>
            </span>
        </span>
      <div className='w-full flex flex-col items-start gap-5'>
        <span className='w-full flex justify-between items-center'>
            <span className='flex items-center text-gray-300'>دولاب رجالي  / <p className='text-black mr-1'> بدل رسمي </p></span>
            <Link href='/' className='flex gap-2 items-center'>
                رجوع    
                <FontAwesomeIcon icon={faArrowLeft} className='w-[16px] h-[16px] text-black' />
            </Link>
        </span>
        <section className='flex flex-col items-start gap-5'>
            <h2>بدل مناسبات</h2>
            <div className='grid grid-cols-4 max-md:grid-cols-2 gap-3'>
                {
                    products['products']?.map((product) => (
                        <ProductCard key={product.id} id={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price} />
                    ))
                }
            </div>
            <span className='sale w-full relative'>
                <Image src={bottomSale} alt='Amazing' className='w-full h-[211px]' />
                <h2 className='text-[50px] absolute -right-[120px] top-2/4 -translate-x-2/4 -translate-y-2/4 text-white '>عروض خاصة</h2>
                <h2 className='text-[24px] absolute left-20 top-1/4 -translate-x-2/4 -translate-y-2/4 text-white '>تخفيضات حتى</h2>
                <h2 className='text-[50px] absolute left-20 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white '>%50</h2>
            </span>
        </section>
      </div>
    </main>
  )
}

export default Products


import './style.css';
import Link from "next/link"
import arrow from '../../assets/arrow.png'
import {GET_PRODUCTS} from '../../Utils/Products/GetProducts/GET_PRODUCTS'
import Image from "next/image"
import bottomSale from '../../assets/bottomSale.PNG'
import rightSale from '../../assets/rightSale.png'
import ProductCard from '../../components/Products/ProductCard';
import PriceRange from './priceRange'
import filter from '../../assets/filter.png';

const Products = async () => {
const products = await GET_PRODUCTS();

  return (
    <main className='flex items-start gap-5 max-md:flex-col max-md:items-center p-5 z-50'>
        <span className='relative max-w-1/4 max-md:w-full flex flex-col gap-5 '>
            <aside className='shadow h-full rounded-md mt-11'>
                    <span className='flex justify-center items-center gap-2 w-2/4 p-1 bg-[#5E6DA8] text-white rounded-tr-2xl rounded-bl-2xl'>
                        <Image src={filter} width={20} height={20} alt='filter' className='w-[20px] h-[20px]' />
                        <p>فلتر</p>    
                    </span>
                    <span className='size p-3 flex flex-col gap-2 items-start'>
                        <p>المقاس</p>
                        <span className='flex items-center gap-2'>
                            <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#5E6DA8] text-white rounded-md cursor-pointer'>S</span>
                            <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#5E6DA8] text-white rounded-md cursor-pointer'>M</span>
                            <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#5E6DA8] text-white rounded-md cursor-pointer'>L</span>
                            <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#5E6DA8] text-white rounded-md cursor-pointer'>XL</span>
                            <span className='p-5 w-[35px] h-[35px] flex justify-center items-center bg-[#5E6DA8] text-white rounded-md cursor-pointer'>XXL</span>
                        </span>
                    </span>
                    <span className='color p-3 flex flex-col gap-2 items-start'>
                        <p>اللون</p>
                        <span className='flex items-center gap-2'>
                            <span className='p-3 bg-red-700 text-white rounded-full cursor-pointer'></span>
                            <span className='p-3 bg-yellow-700 text-white rounded-full cursor-pointer'></span>
                            <span className='p-3 bg-green-700 text-white rounded-full cursor-pointer'></span>
                            <span className='p-3 bg-blue-400 text-white rounded-full cursor-pointer'></span>
                            <span className='p-3 bg-green-200 text-white rounded-full cursor-pointer'></span>
                            <span className='p-3 bg-blue-700 text-white rounded-full cursor-pointer'></span>
                        </span>
                    </span>
                    <span className='price p-3 flex flex-col gap-2 items-start'>
                        <p>السعر</p>
                        <PriceRange />
                    </span>
                    <button className='w-[35%] p-[7px] text-sm bg-[#5E6DA8] text-white rounded-lg mb-3 float-left ml-4'>تطبيق</button>
            </aside>
            <span className='sale  w-full relative'>
                <Image src={rightSale} alt='Amazing' className='w-full h-[549px]' />
                <h2 className='text-[20px] font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white'>تخفيضات حتى</h2>
                <h2 className='text-[50px] absolute left-2/4 top-[60%] -translate-x-2/4 -translate-y-2/4 text-white'>%50</h2>
            </span>
        </span>
        <div className='w-full flex flex-col items-start gap-5 pr-[50px] pl-[50px] pt-5 pb-5'>
            <span className='w-full flex justify-between items-center'>
                <span className='flex items-center text-gray-300'>دولاب رجالي  / <p className='text-black mr-1'> بدل رسمي </p></span>
                <Link href='/' className='flex gap-2 items-center'>
                    رجوع    
                    <Image src={arrow} width={8} height={8} alt='back' className='w-[8px] h[8px] mt-1' />
                </Link>
            </span>
            <section className='flex flex-col items-start gap-5'>
                <h2>بدل مناسبات</h2>
                <div className='grid grid-cols-5 max-md:grid-cols-2 gap-5'>
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


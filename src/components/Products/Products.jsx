import './style.css';
import Navbar from '../Navbar/Navbar';
import Link from "next/link"
import arrow from '../../assets/arrow.png'
import {GET_PRODUCTS} from '../../Utils/Products/GetProducts/GET_PRODUCTS'
import Image from "next/image"
import details from '../../assets/details.svg';
import Filter from './Filter/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import FavImg from './FavImg'
import img1 from '../../assets/products/pro1.svg'
import img2 from '../../assets/products/pro2.svg'
import img3 from '../../assets/products/pro3.svg'
import img4 from '../../assets/products/pro4.svg'
import img5 from '../../assets/products/pro5.svg'
import img6 from '../../assets/products/pro6.svg'
import img7 from '../../assets/products/pro7.svg'
import img8 from '../../assets/products/pro8.svg'
import img9 from '../../assets/products/pro9.svg'
import img10 from '../../assets/products/pro10.svg'
import img11 from '../../assets/products/pro11.svg'
import img12 from '../../assets/products/pro12.svg'

const Products = async () => {
const products = await GET_PRODUCTS();
const imgs = [img1, img2, img3,  img4,  img5,  img6,  img7,  img8,  img9,  img10,  img11, img12]

  return (
    <main className='w-full'>
        <Navbar />
        <div className='flex items-start gap-5 max-md:flex-col max-md:items-center p-5 z-50'>
            <div className='w-full flex flex-col items-start gap-5 pr-[50px] pl-[50px] pt-5 pb-5'>
                <span className='w-full flex justify-between items-center'>
                    <span className='flex items-center text-gray-300'>دولاب رجالي  / <p className='text-black mr-1'> بدل رسمي </p></span>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <Link href='/' className='flex gap-2 items-center'>
                            رجوع    
                            <Image src={arrow} width={8} height={8} alt='back' className='w-[8px] h-[8px] mt-1' />
                        </Link>
                        <Filter />
                    </div>
                </span>
                <section className='product-con w-full grid grid-cols-4 max-md:grid-cols-2 gap-14'>
                    {
                        products['products']?.slice(0, 12).map((product) => (
                            <div key={product.id} className='relative w-full p-1 duration-200 border-2 border-transparent hover:border-[#404B70] rounded-md flex flex-col justify-center items-center gap-2'>
                                <Image src={imgs[product.id - 1]} width={500} height={500} alt='product thumbnail' className='w-full h-full object-cover' />
                                <FavImg />
                                <p className='max-md:text-sm'>اسم المنتج</p>
                                <span className='flex items-center gap-1 max-md:flex-col max-md:justify-center'>
                                    <p className='font-bold max-md:text-sm'>{product.price} ر.س</p>
                                    <p className='text-xs max-md:text-xs line-through text=[#9B9B9B]'>{(product.price - 2).toFixed(2)} ر.س</p>
                                </span>
                                <span className='flex items-center gap-1 max-md:flex-col max-md:justify-center'>
                                    <p className='max-md:text-sm'>3 ألوان</p>
                                    <span className='flex items-center gap-1'>
                                        <FontAwesomeIcon icon={faCircle} className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px] text-[#001C63]' />
                                        <FontAwesomeIcon icon={faCircle} className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px] text-[#409ACE]' />
                                        <FontAwesomeIcon icon={faCircle} className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px] text-[#1A6872]' />
                                    </span>
                                </span>
                                <Link href={`/products/${product.id}`} className='w-full p-2 mb-2 flex justify-center items-center gap-3 bg-[#404B70] rounded-lg'>
                                    <p className='text-base text-white max-md:text-sm'>تفاصيل المنتج</p>
                                    <Image src={details} alt='product image' className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px]' />
                                </Link>
                            </div>
                        ))
                    }
                </section>
            </div>
        </div>
    </main>
  )
}

export default Products


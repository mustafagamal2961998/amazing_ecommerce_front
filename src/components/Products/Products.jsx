import './style.css';
import Link from "next/link"
import arrow from '../../assets/arrow.png'
import Image from "next/image"
import details from '../../assets/details.svg';
import Filter from './Filter/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import FavImg from './FavImg'

const Products = (props) => {
    const products = props.products;
    console.log(products[0].colors[0].images[0].url)
  return (
    <section className='w-full flex flex-col items-start gap-5 pr-[50px] pl-[50px] pt-5 pb-5'>
        <span className='w-full flex justify-between items-center'>
            <span className='flex items-center text-gray-300'>{props.section}  / <p className='text-black mr-1'> {props.category} </p></span>
            <div className='flex flex-col justify-center items-center gap-8'>
                <Link href='/' className='flex gap-2 items-center'>
                    رجوع    
                    <Image src={arrow} width={8} height={8} alt='back' className='w-[8px] h-[8px] mt-1' />
                </Link>
                <Filter />
            </div>
        </span>
        <div className='product-con w-full grid grid-cols-4 max-md:grid-cols-2 gap-14'>
            {
                products.map((product) => (
                    <div key={product.id} className='relative w-full p-1 duration-200 border-2 border-transparent hover:border-[#00B6A9] rounded-md flex flex-col justify-center items-center gap-2'>
                        <Image 
                        src={product.colors[0].images[0].url}
                        alt={product.name}
                        title={product.name}
                        loading='lazy'
                        width={500} 
                        height={500} 
                        className='w-full h-full object-cover' 
                        />
                        <FavImg />
                        <p className='max-md:text-sm'>{product.name}</p>
                        <span className='flex items-center gap-1 max-md:flex-col max-md:justify-center'>
                            <p className='font-bold max-md:text-sm'>{product.sizes[0].discount_price} ر.س</p>
                            <p className='text-xs max-md:text-xs line-through text=[#9B9B9B]'>{product.sizes[0].basic_price} ر.س</p>
                        </span>
                        <span className='flex items-center gap-1 max-md:flex-col max-md:justify-center'>
                            <p className='max-md:text-sm'>{product.colors.length} ألوان</p>
                            <span className='flex items-center gap-1'>
                                {
                                    product.colors.map((color, i) => (
                                        <FontAwesomeIcon 
                                        key={i}
                                        icon={faCircle} 
                                        className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px]' 
                                        style={{color: color.color_code}}
                                        />
                                    ))
                                }
                            </span>
                        </span>
                        <Link 
                        href={`/products/${product.id}/${product.slug}`} 
                        title={product.name}
                        className='w-full p-2 mb-2 flex justify-center items-center gap-3 bg-[#00B6A9] rounded-lg'
                        >
                            <p className='text-base text-white max-md:text-sm'>تفاصيل المنتج</p>
                            <Image src={details} alt='product image' className='w-[20px] h-[20px] max-md:w-[14px] max-md:h-[14px]' />
                        </Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products


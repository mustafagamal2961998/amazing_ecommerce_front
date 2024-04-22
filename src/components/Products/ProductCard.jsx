import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

const ProductCard = (props) => {
  return (
    <div className='product relative flex flex-col gap-5 rounded-md shadow p-2'>
        <FontAwesomeIcon icon={faHeart} className='absolute left-[20px] top-[15px] cursor-pointer text-gray-500 duration-200 hover:text-red-500' />
        <Link href={`/products/${props.id}`}>
            <Image src={props.thumbnail} width={240} height={215} className='w-[240px] h-[215px] rounded-md' alt={props.title} />
        </Link>
        <span className='flex flex-col items-start'>
            <p>{props.title}</p>
            <span className='flex justify-between items-center w-full'>
                <span className='flex items-center gap-2'>
                    <p className='font-bold'>{props.price} ر.س</p>
                    <p className='text-xs text-gray-500 line-through'>{props.price - 50} ر.س</p>
                 </span>
                 <FontAwesomeIcon icon={faCartPlus} className='cursor-pointer text-white bg-[#5E6DA8] p-2 rounded-md w-[30px] h-[30px]' />
            </span>
        </span>
    </div>
  )
}

export default ProductCard

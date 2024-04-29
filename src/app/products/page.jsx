import Image from "next/image";
import rightBubble from '../../assets/rightBubble.png'
import leftBubble from '../../assets/leftBubble.png'
import Products from "../../components/Products/Products";

const products = () => {
  return (
    <div className='relative'>
      <Image src={rightBubble} alt="Amazing" width={378} height={378} className='absolute right-0 top-[-63px] w-[180px] h-[125px]' />
      <Image src={leftBubble} alt="Amazing" width={378} height={378} className='absolute left-0 bottom-0 w-[180px] h-[125px]' /> 
      <Products />
    </div>
  )
}

export default products

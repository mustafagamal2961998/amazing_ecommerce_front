import Image from 'next/image'
import './style.css'
import Logo from '../../components/Logo/logo.svg'
import sloganBackground from '../../assets/sloganBackground.png'

const Slogan = () => {
  return (
    <div className='slogan relative w-[60%] max-md:w-full max-md:h-[29vh]'>
        <Image src={sloganBackground} className='h-screen w-full max-md:h-[29vh]' alt='Amazing' />
        <span className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center flex-col gap-2'>
            <Image src={Logo} alt='Amazing' />
            <h2 className='text-[29px] text-white max-md:text-xs'>خلاقين ونمتلك القيادة في مجال الأزياء</h2>
        </span>
    </div>
  )
}

export default Slogan
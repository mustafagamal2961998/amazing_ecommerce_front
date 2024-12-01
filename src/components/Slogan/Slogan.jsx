import Image from 'next/image'
import Logo from '../../components/Logo/logo.svg'
import sloganBackground from '../../assets/sloganBackground.png'

const Slogan = () => {
  return (
    <div className='relative w-[60%] min-h-screen max-md:w-full max-md:h-[29vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#09A489B2] to-[#C9B10087]'>
        <Image src={sloganBackground} className='h-screen w-full' alt='Amazing' />
        <span className='absolute left-2/4 top-2/4 max-md:top-[20%] -translate-x-2/4 -translate-y-2/4 flex justify-center items-center flex-col gap-2'>
            <Image src={Logo} alt='Amazing' />
            <h2 className='text-[29px] text-white max-md:text-xs'>خلاقين ونمتلك القيادة في مجال الأزياء</h2>
        </span>
    </div>
  )
}

export default Slogan

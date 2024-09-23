import Image from 'next/image'
import Navbar from '../../../components/Navbar/Navbar'
import background from '../../../assets/manufacturing/background.svg'
import Sidebar from './Sidebar'

const Create = () => {
  return (
    <div
    className='w-full h-screen flex flex-col'
    >
        <Navbar />
        <div 
        className='relative w-full h-full bg-[#17616642] flex gap-12'
        >
            <Image
            src={background}
            alt='background'
            loading='lazy'
            className='w-full h-full absolute left-0 top-0'
            />
                <Sidebar />
            <form
            className=''
            >
            </form>
        </div>
    </div>
  )
}

export default Create

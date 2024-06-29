import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import notFoundImg from '../assets/dashboard/notFound.svg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function Custom404() {
    return (
      <main className='w-full flex flex-col gap-14'>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-3'>
          <Image src={notFoundImg} alt='Not Found' className='w-[400px] h-2/4' />
          <h2 className='text-3xl text-black'>هذا الرابط لا يوجد</h2>
          <span className='flex items-center gap-3'>
            <FontAwesomeIcon icon={faGear} className='animate-spin text-2xl text-[#5e6da8]' />
            <Link href='/' className='font-bold text-2xl text-[#5e6da8d5] hover:text-[#5e6da8b7] duration-200'>الصفحة الرئيسية</Link>
          </span>
        </div>
      </main>
    )
  }
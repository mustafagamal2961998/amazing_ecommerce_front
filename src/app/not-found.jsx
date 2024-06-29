import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import notFoundImg from '../assets/dashboard/notFound.svg'
import Image from 'next/image'

export default function Custom404() {
    return (
      <main className='w-full flex flex-col gap-14'>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-3'>
          <Image src={notFoundImg} alt='Not Found' className='w-[400px] h-2/4' />
          <h2 className='text-3xl text-black'>هذا الرابط لا يوجد</h2>
          <Link href='/' className='text-2xl text-[#5E6DA8] hover:text-[#5e6da8d7] duration-200'>الصفحة الرئيسية</Link>
        </div>
      </main>
    )
  }
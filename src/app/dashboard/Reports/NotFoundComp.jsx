import Image from 'next/image';
import notFoundImg from '../../../assets/dashboard/notFound.svg';

const NotFoundComp = () => {
  return (
    <div className='w-full p-10 flex flex-col justify-center items-center gap-5 rounded-lg border-2 border-[#CFCFCF]'>
        <Image src={notFoundImg} alt='not found' className='w-[300px] h-full' />
        <p className='text-lg'>لا توجد بيانات</p>
    </div>
  )
}

export default NotFoundComp

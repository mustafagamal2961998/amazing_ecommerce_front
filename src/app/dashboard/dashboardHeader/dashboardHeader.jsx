import Image from 'next/image'
import profilePicture from '../../../assets/profile/profilePicture.png'

const DashboardHeader = () => {
  return (
    <nav className='flex h-[50px] items-center justify-end gap-2 mr-auto'>
        <p className='w-full text-xs'>احمد حسن</p>
        <Image src={profilePicture} alt='logo' className='w-[40px] h-[40px]' />
    </nav>
  )
}

export default DashboardHeader

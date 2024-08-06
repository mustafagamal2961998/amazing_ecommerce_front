'use client'

import './style.css'

import { useState } from "react"
import Image from "next/image"
import profilePicture from '../../assets/profile/profilePicture.png'
import edit from '../../assets/profile/edit.png'
import information from '../../assets/profile/information.png'
import darkInformation from '../../assets/profile/darkInformation.png'
import location from '../../assets/profile/location.png'
import darkLocation from '../../assets/profile/darkLocation.png'
import cards from '../../assets/profile/cards.png'
import darkCards from '../../assets/profile/darkCards.png'
import orders from '../../assets/profile/orders.png'
import darkOrders from '../../assets/profile/darkOrders.png'
import favourite from '../../assets/profile/favourite.png'
import darkFavourite from '../../assets/profile/darkFavourite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useStatusContext } from '../../Utils/Status/statusContext'
import Navbar from '../../components/Navbar/Navbar'
import Information from './Information/Information'
import Location from './Location/Location'
import Cards from './Cards/Cards'
import Orders from './Orders/Orders'
import Favourite from './Favourite/Favourite'

const profile = () => {
    const [mode, setMode] = useState('information');
    const { sidebar, setSidebar } = useStatusContext();
    
    const handleMode = (mode) => {
        setMode(mode)
    }

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <aside className={`relative w-1/4 max-md:w-full min-h-screen ${sidebar ? 'translate-x-0' : 'hidden translate-x-full'} flex flex-col justify-start items-center gap-20 p-5 bg-gradient-to-br from-[#252B42] to-[#5E6DA8]`}>
                <div className='mt-[60px] flex flex-col gap-3 justify-center items-center'>
                    <span className='relative'>
                        <Image src={profilePicture} className='w-[120px] h-[120px] rounded-full' alt='Amazing' />
                        <Image src={edit} className='w-[24px] h-[24px] absolute left-[15px] bottom-0' alt='Amazing' />
                    </span>
                    <h2 className='text-white'>سيد عبد العظيم</h2>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center w-full'>
                    <span className={`${mode === 'information' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('information')}>
                        <Image src={mode === 'information' ? darkInformation : information} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>معلومات الحساب</h2>
                    </span>
                    <span className={`${mode === 'location' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('location')}>
                        <Image src={mode === 'location' ? darkLocation : location} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>عناوين الشحن</h2>
                    </span>
                    <span className={`${mode === 'cards' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('cards')}>
                        <Image src={mode === 'cards' ? darkCards : cards} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2 >بطاقات الإئتمان</h2>
                    </span>
                    <span className={`${mode === 'orders' ? 'bg-white text-black active' : 'text-white'} relative flex items-center gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('orders')}>
                        <Image src={mode === 'orders' ? darkOrders : orders} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>خزانتي</h2>
                        <span className='bg-red-500 text-white rounded-full text-[10px] w-[16px] h-[16px] text-center mr-auto'>
                            1
                        </span>
                    </span>
                    <span className={`${mode === 'favourite' ? 'bg-white text-black active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`} onClick={() => handleMode('favourite')}>
                        <Image src={mode === 'favourite' ? darkFavourite : favourite} className='w-[24px] h-[24px]' alt='Amazing' />
                        <h2>منتجات مفضلة</h2>
                    </span>
                </div>
                <FontAwesomeIcon icon={faXmark} onClick={() => setSidebar(!sidebar)} className='md:hidden absolute w-[12px] h-[12px] left-5  top-5 cursor-pointer duration-200 rounded-[999px] p-[8px] bg-red-500 text-center text-white hover:bg-black hover:text-red-500' />
            </aside>
            {!sidebar && <FontAwesomeIcon icon={faBars} className='w-5 h-5 absolute right-2 top-5 cursor-pointer duration-200 hover:text-red-500 md:hidden' onClick={() => setSidebar(!sidebar)} />}
        {
            mode === 'information' && <Information />
        }
        {
            mode === 'location' && <Location />
        }
        {
            mode === 'cards' && <Cards />
        }
        {
            mode === 'orders' && <Orders />
        }
        {
            mode === 'favourite' && <Favourite />
        }
        </div>
    </div>
  )
}

export default profile
'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useStatusContext } from '../../Utils/Status/statusContext'
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
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { CONFIG } from "../../Utils/Auth/Config"
import { handleShowAlert } from "../../Utils/Alerts/handleShowAlert"
import { GET_USER_INFO, UPDATE_PROFILE } from "../../Utils/APIs"
import Swal from "sweetalert2"

const ProfileSidebar = () => {

    const { sidebar, setSidebar, userInfo, setUserInfo } = useStatusContext();

    const pathname = usePathname();

    const handleAvatarChange = async (avatar) => {
        const userData = new FormData();

        userData.append('email', userInfo.email);
        userData.append('mobile', userInfo.mobile);
        userData.append('gender', userInfo.gender);
        userData.append('date_of_birth', userInfo.date_of_birth);
        userData.append('first_name', userInfo.first_name);
        userData.append('last_name', userInfo.last_name);

        Swal.fire({
            title: "يجب إدخال كلمة السر",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "حفظ",
            showLoaderOnConfirm: true,
            preConfirm: async (password) => {

                if (avatar) {
                    userData.append('avatar', avatar); 
                }

                try {
                    userData.append('password', password);
            
                    const res = await axios.post(UPDATE_PROFILE, userData, CONFIG);
                    const data = res.data;

                    const response = await axios.get(GET_USER_INFO, CONFIG);
                    const userInfo = response.data.data;
                    setUserInfo(userInfo);

                    handleShowAlert(data.statusCode, data.message);
                } catch (error) {
                    console.log(error)
                }
                },
                    allowOutsideClick: () => !Swal.isLoading()
            })
    };

  return (
    <aside className={`relative w-1/4 max-md:w-full min-h-screen ${sidebar ? 'translate-x-0' : 'hidden translate-x-full'} flex flex-col justify-start items-center gap-20 p-5 bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]`}>
        <div className='mt-[60px] flex flex-col gap-3 justify-center items-center'>
            <span className='relative'>
                <Image 
                    src={userInfo?.avatar} 
                    className='w-[120px] h-[120px] rounded-full' 
                    width={120} 
                    height={120} 
                    alt='صورة الملف الشخصي' 
                />
                <Image 
                    src={edit} 
                    className='w-[24px] h-[24px] absolute left-[15px] bottom-0' 
                    alt='تعديل الصورة الشخصية' 
                />
                <input 
                    type='file' 
                    onChange={(e) => handleAvatarChange(e.target.files[0])} 
                    className='absolute left-[15px] bottom-0 w-full h-full opacity-0 cursor-pointer z-10'
                    accept="image/*"
                />
            </span>
            <h2 className='text-white'>{userInfo?.first_name} {userInfo?.last_name}</h2>
        </div>
        <div className='flex flex-col gap-3 justify-center items-center w-full'>
            <Link href='/profile' className={`${pathname === '/profile' ? 'bg-white text-[#00b6a9] active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`}>
                <Image src={pathname === '/profile' ? darkInformation : information} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>معلومات الحساب</h2>
            </Link>
            <Link href='/profile/location' className={`${pathname === '/profile/location' ? 'bg-white text-[#00b6a9] active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`}>
                <Image src={pathname === '/profile/location' ? darkLocation : location} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>عناوين الشحن</h2>
            </Link>
            <Link href='/profile/cards' className={`${pathname === '/profile/cards' ? 'bg-white text-[#00b6a9] active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`}>
                <Image src={pathname === '/profile/cards' ? darkCards : cards} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2 >بطاقات الإئتمان</h2>
            </Link>
            <Link href='/profile/orders' className={`${pathname.startsWith('/profile/orders') ? 'bg-white text-[#00b6a9] active' : 'text-white'} relative flex items-center gap-3 rounded-xl cursor-pointer p-3 w-full`}>
                <Image src={pathname.startsWith('/profile/orders') ? darkOrders : orders} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>خزانتي</h2>
                <span className='bg-red-500 text-white rounded-full text-[10px] w-[16px] h-[16px] text-center mr-auto'>
                    1
                </span>
            </Link>
            <Link href='/profile/favourite' className={`${pathname === '/profile/favourite' ? 'bg-white text-[#00b6a9] active' : 'text-white'} relative flex items-start gap-3 rounded-xl cursor-pointer p-3 w-full`}>
                <Image src={pathname === '/profile/favourite' ? darkFavourite : favourite} className='w-[24px] h-[24px]' alt='Amazing' />
                <h2>منتجات مفضلة</h2>
            </Link>
        </div>
        <FontAwesomeIcon icon={faXmark} onClick={() => setSidebar(!sidebar)} className='md:hidden absolute w-[12px] h-[12px] left-5  top-5 cursor-pointer duration-200 rounded-[999px] p-[8px] bg-red-500 text-center text-white hover:bg-black hover:text-red-500' />
    </aside>
  )
}

export default ProfileSidebar

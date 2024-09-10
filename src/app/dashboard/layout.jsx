'use client'

import Image from "next/image";
import profilePicture from '../../assets/profile/profilePicture.png'
import Sidebar from "./Sidebar";

export default function RootLayout({ children }) {
    return(
        <div className='flex flex-col'>
            <nav className='flex h-[50px] items-center justify-end gap-2 ml-[30px]'>
                <p className='text-xs'>سيد عبد العظيم</p>
                <Image src={profilePicture} alt='logo' className='w-[40px] h-[40px]' />
            </nav>
            <div className="flex gap-14">
                <Sidebar />
                {children}
            </div>
        </div>
    )
}
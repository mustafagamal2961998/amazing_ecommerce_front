'use client'
import './style.css'
import Link from 'next/link'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import chatsIcon from '../../../assets/dashboard/chats.svg'
import complaintsIcon from '../../../assets/dashboard/complaints.svg'

const Support = () => {

  return (
    <Wrapper>
        <div className='w-full mb-auto flex flex-col items-start gap-5'>
            <h2 className='text-lg'>الدعم الفني والمساعدة</h2>
            <div className='w-full flex items-start gap-5'>
                <Link className='relative w-[280px] h-[150px] cursor-pointer select-none bg-[#BAFBB8] rounded-2xl flex flex-col justify-center items-center gap-2' href='/dashboard/support/chats'>
                    <Image src={chatsIcon} alt='chats' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>المحادثات المباشرة للعملاء</p>
                    <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-sm w-[24px] h-[24px] text-center'>
                        5
                    </span>
                </Link>
                <Link className='relative w-[280px] h-[150px] cursor-pointer select-none bg-[#FFFDC9] rounded-2xl flex flex-col justify-center items-center gap-2'  href='/dashboard/support/complaints'>
                    <Image src={complaintsIcon} alt='complaints' className='w-[60px] h-[60px]' />
                    <p className='text-lg font-bold'>شكاوي ومقترحات</p>
                    <span className='absolute left-2 top-2 bg-[#FF0000] text-white rounded-full text-sm w-[24px] h-[24px] text-center'>
                        5
                    </span>
                </Link>
            </div>
        </div>
    </Wrapper>
  )
}

export default Support

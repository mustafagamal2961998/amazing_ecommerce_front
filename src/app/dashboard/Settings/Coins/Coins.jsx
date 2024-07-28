import Image from 'next/image'
import checked from '../../../../assets/dashboard/checked.svg'
import { useState } from 'react'
import ksaFlag from '../../../../assets/dashboard/ksa.svg'
import egyptFlag from '../../../../assets/dashboard/eg.svg'
import usaFlag from '../../../../assets/dashboard/usa.svg'

const Coins = () => {
    const [sr, setSr] = useState(true);
    const [egp, setEgp] = useState(false);
    const [usd, setUsd] = useState(false);

    return (
        <div className='w-full min-h-full -mr-2 p-10 ml-auto shadow-xl bg-[#EFEFEF] rounded-2xl rounded-tr-none flex flex-col items-center gap-10'>
            <h2 className='text-xl font-bold'> العملات المستخدمة</h2>
            <form className='w-full h-full text-right flex flex-col justify-center items-center gap-10'>
                <div className='w-full flex justify-start items-center gap-20'>
                    <span className='flex items-center gap-2'>
                        <Image src={ksaFlag} alt='ksa flag' className='w-[24px] h-[24px]' />
                        <h2 className='font-bold text-xl'>الريال السعودي</h2>
                    </span>
                    <h2 className='font-bold text-xl'>ر.س</h2>
                    <span className={`w-[30px] h-[30px] select-none ${sr ? 'bg-[#07932E]' : 'bg-[#A8A8A8]'} rounded-full cursor-pointer`} onClick={() => setSr(!sr)}>
                        { sr && <Image src={checked} alt='checked' className='w-[30px] h-[30px]' /> }
                    </span>
                </div>
                <div className='w-full flex justify-start items-center gap-20'>
                    <span className='flex items-center gap-2'>
                        <Image src={egyptFlag} alt='egypt flag' className='w-[24px] h-[24px]' />
                        <h2 className='font-bold text-xl'>الجنية المصري</h2>
                    </span>
                    <h2 className='font-bold text-xl'>ج.م</h2>
                    <span className={`w-[30px] h-[30px] select-none ${egp ? 'bg-[#07932E]' : 'bg-[#A8A8A8]'} rounded-full cursor-pointer`} onClick={() => setEgp(!egp)}>
                        { egp && <Image src={checked} alt='checked' className='w-[30px] h-[30px]' /> }
                    </span>
                </div>
                <div className='w-full flex justify-start items-center gap-20'>
                    <span className='flex items-center gap-2'>
                        <Image src={usaFlag} alt='usa flag' className='w-[24px] h-[24px]' />
                        <h2 className='font-bold text-xl'>الدولار الأمريكي</h2>
                    </span>
                    <h2 className='font-bold text-xl'>USD</h2>
                    <span className={`w-[30px] h-[30px] select-none ${usd ? 'bg-[#07932E]' : 'bg-[#A8A8A8]'} rounded-full cursor-pointer`} onClick={() => setUsd(!usd)}>
                        { usd && <Image src={checked} alt='checked' className='w-[30px] h-[30px]' /> }
                    </span>
                </div>
                <button className='w-fit mt-auto p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
                    <p>حفظ التعديلات</p>
                    <Image src={checked} alt='save' className='w-[30px] h-[30px]' />
                </button>
            </form>
        </div>
    )
    }

export default Coins

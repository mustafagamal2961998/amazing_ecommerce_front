import Image from 'next/image'
import checked from '../../../../assets/dashboard/checked.svg'
import { useState } from 'react'

const PaymentMethods = () => {
    const [onlinePayment, setOnlinePayment] = useState(true);
    const [cod, setCod] = useState(false);

    return (
        <div className='w-full min-h-full -mr-2 p-10 ml-auto shadow-xl bg-[#EFEFEF] rounded-2xl rounded-tr-none flex flex-col items-center gap-10'>
            <h2 className='text-xl font-bold'>طرق الدفع</h2>
            <form className='w-full h-full flex flex-col justify-center items-center gap-10'>
                <div className='w-full flex justify-evenly items-center'>
                    <h2 className='font-bold text-xl'>دفع إلكتروني</h2>
                    <span className={`w-[30px] h-[30px] select-none ${onlinePayment ? 'bg-[#07932E]' : 'bg-[#A8A8A8]'} rounded-full cursor-pointer`} onClick={() => setOnlinePayment(!onlinePayment)}>
                        { onlinePayment && <Image src={checked} alt='checked' className='w-[30px] h-[30px]' /> }
                    </span>
                </div>
                <div className='w-full flex justify-evenly items-center'>
                    <h2 className='font-bold text-xl'>دفع عند الاستلام</h2>
                    <span className={`w-[30px] h-[30px] select-none ${cod ? 'bg-[#07932E]' : 'bg-[#A8A8A8]'} rounded-full cursor-pointer`} onClick={() => setCod(!cod)}>
                        {cod && <Image src={checked} alt='checked' className='w-[30px] h-[30px]' />}
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

export default PaymentMethods

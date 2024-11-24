'use client'
import Image from 'next/image';
import allOrders from '../../../assets/profile/1.svg';
import onTheWay from '../../../assets/profile/2.svg';
import cancelledOrders from '../../../assets/profile/3.svg';
import archivedOrders from '../../../assets/profile/4.svg';
import activeAllOrders from '../../../assets/profile/active1.svg';
import activeOnTheWay from '../../../assets/profile/active2.svg';
import activeCancelledOrders from '../../../assets/profile/active3.svg';
import activeArchivedOrders from '../../../assets/profile/active4.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

  return (
    <div className='w-full flex flex-col gap-4'>
        <div className='w-full flex max-md:gap-5 justify-center items-center'>
            <Link href='/profile/orders/all' className='relative'>
                <Image src={pathname.startsWith('/profile/orders/all') ? activeAllOrders : allOrders} alt='all orders' className='w-full cursor-pointer select-none' />
                <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-[8px] md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>جميع الطلبات</h2>
            </Link>
            <Link href='/profile/orders/onTheWay' className='relative -mr-9'>
                <Image src={pathname.startsWith('/profile/orders/onTheWay') ? activeOnTheWay : onTheWay} alt='on the way' className='w-full cursor-pointer select-none' />
                <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-[8px] md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>لم يتم الشحن بعد</h2>
            </Link>
            <Link href='/profile/orders/cancelled' className='relative -mr-9'>
                <Image src={pathname ==='/profile/orders/cancelled' ? activeCancelledOrders : cancelledOrders} alt='cancelled orders' className='w-full cursor-pointer select-none' />
                <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-[8px] md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>الطلبات الملغاة</h2>
            </Link>
            <Link href='/profile/orders/archived' className='relative -mr-9'>
                <Image src={pathname.startsWith('/profile/orders/archived') ? activeArchivedOrders : archivedOrders} alt='archived orders' className='w-full cursor-pointer select-none' />
                <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-[8px] md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>الطلبات المؤرشفة</h2>
            </Link>
        </div>
    </div>
  )
}

export default Header

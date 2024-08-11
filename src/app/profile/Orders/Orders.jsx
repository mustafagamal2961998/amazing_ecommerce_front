import Image from 'next/image';
import { useStatusContext } from '../../../Utils/Status/statusContext'
import allOrders from '../../../assets/profile/1.svg';
import onTheWay from '../../../assets/profile/2.svg';
import cancelledOrders from '../../../assets/profile/3.svg';
import archivedOrders from '../../../assets/profile/4.svg';
import activeAllOrders from '../../../assets/profile/active1.svg';
import activeOnTheWay from '../../../assets/profile/active2.svg';
import activeCancelledOrders from '../../../assets/profile/active3.svg';
import activeArchivedOrders from '../../../assets/profile/active4.svg';
import Khazanty from './Khazanty/Khazanty';
import AllOrders from './All Orders/AllOrders';
import OnTheWay from './On The Way/OnTheWay';
import CancelledOrders from './Cancelled Orders/CancelledOrders';
import ArchivedOrders from './Archived Orders/ArchivedOrders';
import Review from './Review/Review';
import Tracking from './Tracking/Tracking';
import Notes from './Notes/Notes';

const Orders = () => {

    const { sidebar, ordersMood, setOrdersMood } = useStatusContext();

    const handleOrdersMood = (mood) => {
      setOrdersMood(mood);
    }

  return (
    <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
        <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
          <span className={`relative w-[120px] h-[40px] ${ordersMood === 'khazanty' ? 'bg-[#252B42]' : 'bg-[#404B70]'} p-2 rounded-br-full rounded-tl-full`} onClick={() => handleOrdersMood('khazanty')}>
            <h2 className='select-none cursor-pointer text-xl text-white max-md:text-xs md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>خزانتي</h2>
          </span>
        {ordersMood === 'review' &&
          <span className='relative w-[120px] h-[40px] shadow-xl bg-[#30B0C7] p-2 rounded-tr-full rounded-bl-full'>
            <h2 className='w-max select-none text-md max-md:text-xs absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>تقييم المنتج</h2>
          </span>
        }
        {ordersMood === 'tracking' &&
          <span className='relative w-[120px] h-[40px] shadow-xl bg-[#FFCC00] p-2 rounded-tr-full rounded-bl-full'>
            <h2 className='w-max select-none text-md max-md:text-xs absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>تتبع الطلب</h2>
          </span>
        }
        {ordersMood === 'notes' &&
          <span className='relative w-[120px] h-[40px] shadow-xl bg-[#FF9500] p-2 rounded-tr-full rounded-bl-full'>
            <h2 className='w-max select-none text-md max-md:text-xs absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>ملاحظات للبائع</h2>
          </span>
        }
        {
          ordersMood !== 'review' && ordersMood !=='tracking' && ordersMood !=='notes' &&
          <div className='w-full flex justify-center items-center'>
            <span className='relative' onClick={() => handleOrdersMood('allOrders')}>
              <Image src={ordersMood === 'allOrders' ? activeAllOrders : allOrders} alt='all orders' className='w-full cursor-pointer select-none' />
              <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-xs md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>جميع الطلبات</h2>
            </span>
            <span className='relative' onClick={() => handleOrdersMood('onTheWay')}>
              <Image src={ordersMood === 'onTheWay' ? activeOnTheWay : onTheWay} alt='on the way' className='w-full cursor-pointer select-none' />
              <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-xs md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>لم يتم الشحن بعد</h2>
            </span>
            <span className='relative' onClick={() => handleOrdersMood('cancelledOrders')}>
              <Image src={ordersMood === 'cancelledOrders' ? activeCancelledOrders : cancelledOrders} alt='cancelled orders' className='w-full cursor-pointer select-none' />
              <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-xs md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>الطلبات الملغاة</h2>
            </span>
            <span className='relative' onClick={() => handleOrdersMood('archivedOrders')}>
              <Image src={ordersMood === 'archivedOrders' ? activeArchivedOrders : archivedOrders} alt='archived orders' className='w-full cursor-pointer select-none' />
              <h2 className='w-max select-none cursor-pointer text-lg text-white max-md:text-xs md:font-bold absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>الطلبات المؤرشفة</h2>
            </span>
          </div>
        }
          {
            ordersMood === 'khazanty' && <Khazanty />
          }
          {
            ordersMood === 'allOrders' && <AllOrders />
          }
          {
            ordersMood === 'onTheWay' && <OnTheWay />
          }
          {
            ordersMood === 'cancelledOrders' && <CancelledOrders />
          }
          {
            ordersMood === 'archivedOrders' && <ArchivedOrders />
          }
          {
            ordersMood === 'review' && <Review />
          }
          {
            ordersMood === 'tracking' && <Tracking />
          }
          {
            ordersMood === 'notes' && <Notes />
          }
        </section>
    </div>
  )
}

export default Orders

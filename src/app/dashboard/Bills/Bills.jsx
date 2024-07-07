import DashboardHeader from '../dashboardHeader/dashboardHeader';
import salesBillsImg from '../../../assets/dashboard/salesBills.svg';
import purchasesBillsImg from '../../../assets/dashboard/purchasesBills.svg';
import settingBills from '../../../assets/dashboard/settingBills.svg';
import Image from 'next/image';
import SalesBills from './SalesBills'
import PurchasesBills from './PurchasesBills'
import { useStatusContext } from '../../../Utils/Status/statusContext';

const Bills = () => {
    const {purchasesBills, salesBills, setSalesBills, setPurchasesBills, billsMood, setBillsMood} = useStatusContext();

  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
      <DashboardHeader />
    {billsMood &&        
        <div className='w-full flex flex-col gap-5'>
            <h2 className='text-lg'>الفواتير</h2>
            <div className='flex justify-start items-center gap-3'>
                <div className='w-[300px] h-[150px] bg-[#E9FBB8] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer' onClick={() => {setSalesBills(true); setPurchasesBills(false); setBillsMood(false);}}>
                    <Image src={salesBillsImg} alt='sales bills' className='w-[70px] h-[70px]' />
                    <p className='text-xl'>فواتير المبيعات</p>
                </div>
                <div className='w-[300px] h-[150px] bg-[#C9E8FF] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer' onClick={() => {setPurchasesBills(true); setSalesBills(false); setBillsMood(false);}}>
                    <Image src={purchasesBillsImg} alt='sales bills' className='w-[70px] h-[70px]' />
                    <p className='text-xl'>فواتير المشتريات</p>
                </div>
                <div className='w-[300px] h-[150px] bg-[#FFC9C9] p-2 rounded-2xl flex flex-col justify-center items-center gap-2 select-none cursor-pointer'>
                    <Image src={settingBills} alt='sales bills' className='w-[70px] h-[70px]' />
                    <p className='text-xl'>إعدادات الفواتير</p>
                </div>
            </div>
        </div>
    }
    { salesBills &&
        <SalesBills />
    }
    { purchasesBills &&
        <PurchasesBills />
    }
    </main>
  )
}

export default Bills

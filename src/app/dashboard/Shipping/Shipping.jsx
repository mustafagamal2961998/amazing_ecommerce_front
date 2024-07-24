import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DashboardHeader from "../dashboardHeader/dashboardHeader"
import smsa from '../../../assets/dashboard/smsa.svg'
import aramex from '../../../assets/dashboard/aramex.svg'
import fedex from '../../../assets/dashboard/fedex.svg'
import bosta from '../../../assets/dashboard/bosta.svg'
import companyDetailsIcon from '../../../assets/dashboard/company details.svg'
import Image from "next/image"
import { useStatusContext } from "../../../Utils/Status/statusContext"
import AddCompany from './AddCompany'
import Company from './Company'

const Shipping = () => {
    const {addCompanyMood, setAddCompanyMood, showCompanyMood, setShowCompanyMood} = useStatusContext();
  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
    {
        !addCompanyMood && !showCompanyMood &&
        <div className='w-full flex flex-col items-start gap-5'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-lg'>شركات الشحن</h2>
                <span
                onClick={() => setAddCompanyMood(true)}
                className='py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                >
                    <p
                    className='text-white'
                    >
                        إضافة شركة
                    </p>
                    <FontAwesomeIcon 
                    icon={faPlus} 
                    className='w-[16px] h-[16px] p-1 border-[1px] border-[#7E869E40] rounded-md text-gray-300' 
                    />
                </span>
            </div>
            <div className='w-full flex justify-start items-start gap-10 flex-wrap'>
                <div
                className='flex flex-col justify-center items-center gap-4'
                >
                    <div 
                    className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center'
                    >
                    <Image 
                    src={smsa} 
                    alt='smsa'
                    className='w-full' 
                    />
                    </div>
                    <span
                    onClick={() => setShowCompanyMood(true)}
                    className='w-[250px] py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                    >
                        <p
                        className='text-white'
                        >
                            عرض التفاصيل
                        </p>
                        <Image 
                        src={companyDetailsIcon} 
                        alt='company details'
                        className='w-[16px] h-[16px]' 
                        />
                    </span>
                </div>
                <div
                className='flex flex-col justify-center items-center gap-4'
                >
                    <div 
                    className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center'
                    >
                    <Image 
                    src={aramex} 
                    alt='aramex'
                    className='w-full'
                    />
                    </div>
                    <span
                    onClick={() => setShowCompanyMood(true)}
                    className='w-[250px] py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                    >
                        <p
                        className='text-white'
                        >
                            عرض التفاصيل
                        </p>
                        <Image 
                        src={companyDetailsIcon} 
                        alt='company details'
                        className='w-[16px] h-[16px]' 
                        />
                    </span>
                </div>
                <div
                className='flex flex-col justify-center items-center gap-4'
                >
                    <div 
                    className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center'
                    >
                    <Image 
                    src={fedex} 
                    alt='fedex'
                    className='w-full' 
                    />
                    </div>
                    <span
                    onClick={() => setShowCompanyMood(true)}
                    className='w-[250px] py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                    >
                        <p
                        className='text-white'
                        >
                            عرض التفاصيل
                        </p>
                        <Image 
                        src={companyDetailsIcon} 
                        alt='company details'
                        className='w-[16px] h-[16px]' 
                        />
                    </span>
                </div>
                <div
                className='flex flex-col justify-center items-center gap-4'
                >
                    <div 
                    className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center'
                    >
                    <Image 
                    src={bosta} 
                    alt='bosta'
                    className='w-full h-2/4' 
                    />
                    </div>
                    <span
                    onClick={() => setShowCompanyMood(true)}
                    className='w-[250px] py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                    >
                        <p
                        className='text-white'
                        >
                            عرض التفاصيل
                        </p>
                        <Image 
                        src={companyDetailsIcon} 
                        alt='company details'
                        className='w-[16px] h-[16px]' 
                        />
                    </span>
                </div>
            </div>
        </div>
    }
    {
        addCompanyMood && <AddCompany />
    }
    {
        showCompanyMood && <Company />
    }
    </main>
  )
}

export default Shipping

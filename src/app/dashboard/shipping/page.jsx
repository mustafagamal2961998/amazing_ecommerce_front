'use client'
import Wrapper from "../Wrapper"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import smsa from '../../../assets/dashboard/smsa.svg'
import aramex from '../../../assets/dashboard/aramex.svg'
import fedex from '../../../assets/dashboard/fedex.svg'
import bosta from '../../../assets/dashboard/bosta.svg'
import companyDetailsIcon from '../../../assets/dashboard/company details.svg'
import Link from "next/link"
import { useEffect, useState } from "react"
import { GET_DATA } from "../../../Utils/Data/getData"
import { GET_SHIPPING_COMPANIES } from "../../../Utils/APIs"

const Shipping = () => {
    const [shippingCompanies, setShippingCompanies] = useState([]);

    useEffect(() => {
        GET_DATA(GET_SHIPPING_COMPANIES).then((data) => setShippingCompanies(data));
    }, [])

  return (
    <Wrapper>
        <div className='w-full flex flex-col items-start gap-5 mb-auto'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-lg'>شركات الشحن</h2>
                <Link
                href='/dashboard/shipping/add'
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
                </Link>
            </div>
            <div className='w-full flex justify-start items-start gap-10 flex-wrap'>
                {shippingCompanies.length > 0 ?
                shippingCompanies.map((company) => (
                    <div
                    key={company.id}
                    className='flex flex-col justify-center items-center gap-4'
                    >
                        <div 
                        className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center'
                        >
                        <Image 
                        src={company.image} 
                        width={300}
                        height={300}
                        alt={company.name}
                        className='w-full' 
                        />
                        </div>
                        <Link
                        href={`/dashboard/shipping/company/${company.id}`}
                        className='w-[250px] py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                        >
                            <p
                            className='text-white'
                            >
                                عرض التفاصيل
                            </p>
                            <Image 
                            src={companyDetailsIcon} 
                            alt={company.name}
                            className='w-[16px] h-[16px]' 
                            />
                        </Link>
                    </div>
                ))
                :
                <h2 className='text-center'>لا يوجد شركات الشحن</h2>
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default Shipping

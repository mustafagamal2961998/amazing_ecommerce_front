'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../assets/manufacturing/logo.svg'
import arrowLeft from '../../../assets/manufacturing/arrowLeft.svg'
import facebookLogo from '../../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../../assets/manufacturing/whatsapp.svg'
import { useStatusContext } from '../../../Utils/Status/statusContext'

const Sidebar = () => {

    const { manufacturingMood, setManufacturingMood } = useStatusContext();

    const sidebarItems = [
        { label: 'بيانات العميل', mood: 'clientData' },
        { label: 'مرحلة اختيار الموديل', mood: 'modelSelection' },
        { label: 'مرحلة اختيار القماش', mood: 'fabricSelection' },
        { label: 'مرحلة تصميم الباترون', mood: 'patternDesign' },
        { label: 'مرحلة القص', mood: 'cutting' },
        { label: 'مرحلة التصنيع', mood: 'manufacturing' },
        { label: 'مرحلة الكوي والتغليف', mood: 'ironingPackaging' },
        { label: 'مرحلة التخزين والشحن', mood: 'storageShipping' },
        { label: 'مراجعة البيانات', mood: 'dataReview' },
    ];

    return (
        <aside className='relative w-1/4 max-md:hidden min-h-screen p-5 flex flex-col items-center gap-4'>
            <div className='w-full h-full opacity-[50%] bg-[#4A4458] rounded-2xl rounded-tr-none rounded-br-none absolute left-0 top-0 -z-10'></div>
            <Image 
                src={logo}
                alt='logo'
                loading='lazy'
                className='w-48'
            />
            <ul className='w-full mt-24'>
                {sidebarItems.map(item => (
                    <li key={item.mood} className='w-full flex items-center mb-2'>
                        {manufacturingMood === item.mood && 
                            <Image 
                                src={arrowLeft}
                                className='w-8 h-8'
                                alt='arrow'
                                loading='lazy'
                            />
                        }
                        <span className={`${manufacturingMood === item.mood ? 'bg-[#FF9500]' : 'mr-8'} w-full select-none font-bold rounded-xl p-2 duration-200`}>
                            <p className={`ml-auto ${manufacturingMood === item.mood ? 'text-black' : 'text-white'}`}>
                                {item.label}
                            </p>
                        </span>
                    </li>
                ))}
            </ul>
            <div className='flex justify-center items-center gap-4 mt-auto'>
                <Link
                    href={`https://www.facebook.com`}
                    target='_blank'
                    title='facebook page link'
                >
                    <Image
                        src={facebookLogo}
                        alt='facebook page link'
                        loading='lazy'
                        className='w-full h-full'
                    />
                </Link>
                <Link
                    href={`https://www.youtube.com`}
                    target='_blank'
                    title='youtube link'
                >
                    <Image
                        src={youtubeLogo}
                        alt='youtube channel link'
                        loading='lazy'
                        className='w-full h-full'
                    />
                </Link>
                <Link
                    href={`https://www.facebook.com`}
                    target='_blank'
                    title='whatsapp link'
                >
                    <Image
                        src={whatsappLogo}
                        alt='whatsapp link'
                        loading='lazy'
                        className='w-full h-full'
                    />
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar

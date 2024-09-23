import '../../style.css'

import Image from 'next/image'
import Link from 'next/link'
import titleIcon from '../../../../assets/manufacturing/track order icon.svg'
import facebookLogo from '../../../../assets/manufacturing/facebook.svg'
import youtubeLogo from '../../../../assets/manufacturing/youtube.svg'
import whatsappLogo from '../../../../assets/manufacturing/whatsapp.svg'
import pdfIcon from '../../../../assets/manufacturing/pdf.svg'
import modelSelection from '../../../../assets/manufacturing/modelSelection.svg'
import fabricSelection from '../../../../assets/manufacturing/fabricSelection.svg'
import patternDesign from '../../../../assets/manufacturing/patternDesign.svg'
import cutting from '../../../../assets/manufacturing/cutting.svg'
import manufacturing from '../../../../assets/manufacturing/manufacturing.svg'
import ironingPackaging from '../../../../assets/manufacturing/ironingPackaging.svg'
import storageShipping from '../../../../assets/manufacturing/storageShipping.svg'
import checked from '../../../../assets/manufacturing/checked.svg'
import inProcess from '../../../../assets/manufacturing/in process.svg'
import pendingStep from '../../../../assets/manufacturing/pendingStep.svg'
import completedStep from '../../../../assets/manufacturing/completedStep.svg'

const page = (params) => {
    const orderId = params.params['id'];

    const stepsData = [
        { label: 'مرحلة اختيار الموديل', icon: modelSelection, completed: true },
        { label: 'مرحلة اختيار القماش', icon: fabricSelection, completed: true },
        { label: 'مرحلة تصميم الباترون', icon: patternDesign, completed: false },
        { label: 'مرحلة القص', icon: cutting, completed: false },
        { label: 'مرحلة التصنيع', icon: manufacturing, completed: false },
        { label: 'مرحلة الكوي والتغليف', icon: ironingPackaging, completed: false },
        { label: 'مرحلة التخزين والشحن', icon: storageShipping, completed: false },
    ];

  return (
    <div className='manufacturing w-full min-h-screen p-14 bg-[#CAE4F2] flex flex-col items-center gap-4'>
        <span className='relative'>
            <Image 
            src={titleIcon} 
            alt='title icon'
            className='w-full'
            />
            <h2 className='text-white text-2xl font-bold select-none absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>متابعة حالة الطلب</h2>
        </span>
        <span className='w-full p-2 rounded-2xl relative flex justify-center items-center gap-3 border-2 border-t-0 border-black'>
            <p className='absolute right-5 -top-3'>عرض السعر</p>
            <p>الرجاء الضغط على الايقونة لتحميل ملف عرض السعر</p>
            <Link
            href={`/`}
            >
                <Image
                    src={pdfIcon}
                    alt='عرض سعر الفاتورة'
                    loading='lazy'
                    className='w-8 h-8'
                />
            </Link>
        </span>
        <ul className='w-1/5 mt-auto ml-auto'>
            {stepsData.map(item => (
                <li key={item.icon} className='w-full flex items-center gap-2 mb-2'>
                    <Image 
                        src={item.completed ? checked : inProcess}
                        className='w-8 h-8'
                        alt='حالة اتمام المرحلة'
                        loading='lazy'
                    />
                    <span className={`relative p-3 rounded-full ${item.completed ? 'bg-[#20B038]' : 'bg-[#FFD964]'}`}>
                        <Image 
                            src={item.icon}
                            className='w-8 h-8'
                            alt={item.label}
                            width={200}
                            height={200}
                            loading='lazy'
                        />
                    </span>
                    <span className='relative p-2 rounded-full -mr-5'>
                        <Image 
                            src={item.completed ? completedStep : pendingStep}
                            className='w-48'
                            alt={item.label}
                            width={200}
                            height={200}
                            loading='lazy'
                        />
                        <p className='absolute top-7 right-7 font-bold text-black'>
                            {item.label}
                        </p>
                    </span>
                </li>
            ))}
        </ul>
        <div className='flex justify-center items-center gap-4 mt-auto ml-auto'>
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
    </div>
  )
}

export default page

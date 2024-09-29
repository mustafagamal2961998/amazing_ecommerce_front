'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import arrowLeft from '../../../assets/manufacturing/arrowLeft.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Manufacturing = () => {
    const [singerSewing, setSingerSewing] = useState(true);
    const [orlehSewing, setOrlehSewing] = useState(true);
    const [overSewing, setOverSewing] = useState(true);
    const [eyelets, setEyelets] = useState(true);
    const [buttons, setButtons] = useState(true);
    const [zippers, setZippers] = useState(true);
    const [cleaningTape, setCleaningTape] = useState(true);
    const [adidasTape, setAdidasTape] = useState(true);
    const [badge, setBadge] = useState(true);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('manufacturingOptions'));
        if (savedData) {
            setSingerSewing(savedData.singerSewing);
            setOrlehSewing(savedData.orlehSewing);
            setOverSewing(savedData.overSewing);
            setEyelets(savedData.eyelets);
            setButtons(savedData.buttons);
            setZippers(savedData.zippers);
            setCleaningTape(savedData.cleaningTape);
            setAdidasTape(savedData.adidasTape);
            setBadge(savedData.badge);
        }
    }, []);

    useEffect(() => {
        const manufacturingData = {
            singerSewing,
            orlehSewing,
            overSewing,
            eyelets,
            buttons,
            zippers,
            cleaningTape,
            adidasTape,
            badge
        };
        localStorage.setItem('manufacturingOptions', JSON.stringify(manufacturingData));
    }, [singerSewing, orlehSewing, overSewing, eyelets, buttons, zippers, cleaningTape, adidasTape, badge]);

    const Option = ({ title, state, setState }) => (
        <span className='w-2/4 max-md:w-full flex justify-around items-center gap-4'>
            <span className='ml-auto flex items-center gap-2'>
                <Image
                    src={arrowLeft}
                    alt={title}
                    className='w-8 h-8'
                />
                <p className='w-max ml-auto font-bold text-lg'>{title}</p>
            </span>
            <div className='flex items-center gap-10'>
                <span
                    className='flex items-center gap-3 select-none cursor-pointer'
                    onClick={() => setState(true)}
                >
                    <p className='font-bold'>نعم</p>
                    <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${state ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                        {
                            state &&
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                            />  
                        }
                    </span>
                </span>
                <span
                    className='flex items-center gap-3 select-none cursor-pointer'
                    onClick={() => setState(false)}
                >
                    <p className='font-bold'>لا</p>
                    <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${!state ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                        {
                            !state &&
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                            />  
                        }
                    </span>
                </span>
            </div>
        </span>
    )

    return (
        <div className='w-full flex flex-col justify-start gap-6'>
            <Option title="خياطة سنجر" state={singerSewing} setState={setSingerSewing} />
            <Option title="خياطة أورليه" state={orlehSewing} setState={setOrlehSewing} />
            <Option title="خياطة أوفر" state={overSewing} setState={setOverSewing} />
            <Option title="عمل عراوي" state={eyelets} setState={setEyelets} />
            <Option title="تركيب زراير" state={buttons} setState={setButtons} />
            <Option title="تركيب سوستة" state={zippers} setState={setZippers} />
            <Option title="شريط تنظيف" state={cleaningTape} setState={setCleaningTape} />
            <Option title="شريط أديدس" state={adidasTape} setState={setAdidasTape} />
            <Option title="تركيب بادج" state={badge} setState={setBadge} />
        </div>
    )
}

export default Manufacturing;

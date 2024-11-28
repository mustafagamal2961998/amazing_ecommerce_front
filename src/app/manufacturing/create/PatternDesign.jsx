'use client';

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import uploadIcon from '../../../assets/dashboard/upload.svg';
import removeImg from '../../../assets/dashboard/removeImg.svg';
import comletedImg from '../../../assets/dashboard/comletedImg.svg';
import { useStatusContext } from "../../../Utils/Status/statusContext";

const PatternDesign = () => {
    const [patternDesign, setPatternDesign] = useState(true);
    const [manual, setManual] = useState(true);
    const [pltFiles, setPltFiles] = useState([]);
    const {pltFile, setPltFile} = useStatusContext();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('patternDesign'));
        if (savedData) {
            setPatternDesign(savedData.patternDesign);
            setManual(savedData.manual);
            setPltFiles(savedData.pltFiles || []);
            setPltFile(savedData.pltFiles || []);
        }
    }, []);

    useEffect(() => {
        const patternData = {
            patternDesign,
            manual,
            pltFiles
        };
        setPltFile(pltFiles)
        localStorage.setItem('patternDesign', JSON.stringify(patternData));
    }, [patternDesign, manual, pltFiles]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files || []);
        setPltFile(e.target.files[0])
        const newPltFiles = files.map(file => ({
            file,
            name: file.name,
            size: file.size
        }));
        setPltFiles([...pltFiles, ...newPltFiles]);
    };

    const handleRemoveFile = (fileName) => {
        setPltFiles(pltFiles.filter(file => file.name !== fileName));
    };

    return (
        <div className='w-full flex flex-col justify-start gap-6'>
            <span className='w-2/4 max-md:w-full max-md:flex-col flex justify-around items-center gap-4'>
                <p className='w-max ml-auto font-bold text-lg'>هل ترغب في عمل تصميم باترون</p>
                <div className='flex items-center gap-10'>
                    <span
                        className='flex items-center gap-3 select-none cursor-pointer'
                        onClick={() => setPatternDesign(true)}
                    >
                        <p className='font-bold'>نعم</p>
                        <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${patternDesign ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                            {patternDesign && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                />
                            )}
                        </span>
                    </span>
                    <span
                        className='flex items-center gap-3 select-none cursor-pointer'
                        onClick={() => setPatternDesign(false)}
                    >
                        <p className='font-bold'>لا</p>
                        <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${!patternDesign ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                            {!patternDesign && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                />
                            )}
                        </span>
                    </span>
                </div>
            </span>
            <span className='w-2/4 max-md:w-full max-md:flex-col flex justify-around items-center gap-4'>
                <p className='w-max ml-auto font-bold text-lg'>طريقة عمل التصميم المطلوب</p>
                <div className='flex items-center gap-10'>
                    <span
                        className='flex items-center gap-3 select-none cursor-pointer'
                        onClick={() => setManual(true)}
                    >
                        <p className='font-bold'>يدوي</p>
                        <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${manual ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                            {manual && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                />
                            )}
                        </span>
                    </span>
                    <span
                        className='flex items-center gap-3 select-none cursor-pointer'
                        onClick={() => setManual(false)}
                    >
                        <p className='font-bold'>جربر</p>
                        <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${!manual ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                            {!manual && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                />
                            )}
                        </span>
                    </span>
                </div>
            </span>
            <span className='w-full max-md:flex-col flex justify-around items-center gap-4'>
                <p className='w-max ml-auto font-bold text-lg'>في حالة وجود تصميم نرجو رفع ملف PLT</p>
                <span className='w-3/4 max-md:w-full flex flex-col items-center'>
                    <div className='w-full flex items-center gap-1'>
                        <p>تحميل ملف PLT</p>
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept=".plt"
                                className="hidden"
                                onChange={handleFileChange}
                                multiple
                            />
                            <Image
                                src={uploadIcon}
                                alt='upload icon'
                                className='w-[40px] h-[40px]'
                            />
                        </label>
                    </div>
                    {pltFiles.map((file, index) => (
                        <div className='w-full bg-[#F1F1F1] p-2 rounded-xl flex max-md:flex-col max-md:justify-center max-md:gap-3 flex-row-reverse justify-center items-center gap-10 mb-3' key={index}>
                            <div className='w-[80px] h-[80px] max-md:w-full max-md:h-full flex items-center justify-center bg-white rounded-lg'>
                                <p className="text-lg font-bold">.PLT</p>
                            </div>
                            <span className='flex flex-col items-end gap-3'>
                                <h2 className='font-bold'>{file.name}</h2>
                                <span className='flex items-center gap-2'>
                                    <p className='text-[#A9ACB4]'>.KB</p>
                                    <p className='text-[#A9ACB4]'>{(file.size / 1000).toFixed(2)}</p>
                                </span>
                            </span>
                            <span className='flex items-center gap-2'>
                                <p className='text-lg font-bold'>Completed</p>
                                <Image src={comletedImg} alt='completed image' className='w-[40px] h-[40px]' />
                            </span>
                            <Image 
                                src={removeImg} 
                                alt='remove image' 
                                className='w-[40px] h-[40px] cursor-pointer' 
                                onClick={() => handleRemoveFile(file.name)} 
                            />
                        </div>
                    ))}
                </span>
            </span>
        </div>
    );
};

export default PatternDesign;
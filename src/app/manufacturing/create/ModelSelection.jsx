'use client'

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"
import removeImg from '../../../assets/dashboard/removeImg.svg'
import comletedImg from '../../../assets/dashboard/comletedImg.svg'
import uploadIcon from '../../../assets/dashboard/upload.svg'
import ImageUploading from "react-images-uploading";
import Image from "next/image";

const ModelSelection = () => {

    const [modelKind, setModelKind] = useState('men');
    const [selectedModel, setSelectedModel] = useState('model-1');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [images, setImages] = useState([]);
    const maxNumber = 10;

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('modelSelectionData'));
        if (savedData) {
            setModelKind(savedData.modelKind);
            setSelectedModel(savedData.selectedModel);
            setSelectedSizes(savedData.selectedSizes);
            setImages(savedData.images);
        }
    }, []);

    useEffect(() => {
        const modelSelectionData = {
            modelKind,
            selectedModel,
            selectedSizes,
            images,
        };
        localStorage.setItem('modelSelectionData', JSON.stringify(modelSelectionData));
    }, [modelKind, selectedModel, selectedSizes, images]);

    const toggleSize = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const onChange = (imageList) => {
        setImages(imageList);
    };

    const handleRemoveImage = (data_url) => () => {
        setImages(images.filter(image => image.data_url !== data_url));
    };

    return (
        <div className='w-full flex flex-col justify-start gap-6'>
            <span className='w-full flex justify-between items-center max-md:flex-col max-md:gap-3'>
                <p className='font-bold text-lg'>نوعية الموديل</p>
                <div className='flex items-center gap-10'>
                    {['men', 'women', 'kids'].map(kind => (
                        <span
                            key={kind}
                            className='flex items-center gap-3 select-none cursor-pointer'
                            onClick={() => setModelKind(kind)}
                        >
                            <p className='font-bold'>{kind === 'men' ? 'رجالي' : kind === 'women' ? 'حريمي' : 'أطفال'}</p>
                            <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${modelKind === kind ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                                {modelKind === kind && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                    />
                                )}
                            </span>
                        </span>
                    ))}
                </div>
            </span>

            <span className='w-full flex justify-start items-center max-md:flex-col max-md:gap-3'>
                <p className='w-max font-bold text-lg'>اسم الموديل</p>
                <select
                    className='w-3/4 max-md:w-full mr-auto rounded-lg p-2 shadow-inner outline-none cursor-pointer'
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                >
                    <option value='model-1'>موديل 1</option>
                    <option value='model-2'>موديل 2</option>
                    <option value='model-3'>موديل 3</option>
                </select>
            </span>

            <span className='w-full flex justify-between items-center max-md:flex-col max-md:gap-3'>
                <p className='font-bold text-lg'>المقاس المطلوب</p>
                <div className='flex items-center gap-10 max-md:flex-wrap max-md:gap-3'>
                    {['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'].map((size) => (
                        <span
                            key={size}
                            className='flex items-center gap-3 select-none cursor-pointer'
                            onClick={() => toggleSize(size)}
                        >
                            <p className='font-bold'>{size}</p>
                            <span className={`relative w-5 h-5 cursor-pointer p-1 rounded-full ${selectedSizes.includes(size) ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                                {selectedSizes.includes(size) && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                                    />
                                )}
                            </span>
                        </span>
                    ))}
                </div>
            </span>

            <span className='w-full flex flex-col items-center'>
                <div className='flex items-center gap-1'>
                    <p>تحميل صور الموديل</p>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                        acceptType={["jpg", "png"]}
                    >
                        {({ onImageUpload }) => (
                            <div className="upload__image-wrapper">
                                <Image
                                    src={uploadIcon}
                                    alt='upload icon'
                                    className='w-[40px] h-[40px] cursor-pointer'
                                    onClick={onImageUpload}
                                />
                            </div>
                        )}
                    </ImageUploading>
                </div>

                {images && images.map((image, index) => (
                    <div className='w-2/4 max-md:w-full bg-[#F1F1F1] p-2 rounded-xl flex max-md:flex-col flex-row-reverse justify-center items-center gap-10 max-md:gap-3 mb-3' key={index}>
                        <img src={image.data_url} alt='company image' className='w-[80px] h-[80px] max-md:w-full max-md:h-full' />
                        <span className='flex flex-col items-end gap-3'>
                            <h2 className='font-bold'>{image.file.name}</h2>
                            <span className='flex items-center gap-2'>
                                <p className='text-[#A9ACB4]'>.KB</p>
                                <p className='text-[#A9ACB4]'>{(image.file.size / 1000).toFixed(2)}</p>
                            </span>
                        </span>
                        <span className='flex items-center gap-2'>
                            <p className='text-lg font-bold'>Completed</p>
                            <Image src={comletedImg} alt='completed image' className='w-[40px] h-[40px]' />
                        </span>
                        <Image src={removeImg} alt='remove image' className='w-[40px] h-[40px] cursor-pointer' onClick={handleRemoveImage(image.data_url)} />
                    </div>
                ))}
            </span>
        </div>
    );
}

export default ModelSelection;

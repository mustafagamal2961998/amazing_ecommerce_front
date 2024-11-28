'use client'

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import Image from "next/image";
import removeImg from '../../../assets/dashboard/removeImg.svg';
import comletedImg from '../../../assets/dashboard/comletedImg.svg';
import uploadIcon from '../../../assets/dashboard/upload.svg';
import { useStatusContext } from "../../../Utils/Status/statusContext";
import axios from "axios";
import { GET_MODELS, GET_SECTIONS } from "../../../Utils/APIs";

const ModelSelection = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [images, setImages] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState('');
    const [sections, setSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState('');
    const { setModelImages } = useStatusContext();
    const maxNumber = 10;

    // Fetch Sections
    const fetchSections = async () => {
        try {
            const res = await axios.get(GET_SECTIONS);
            const data = res.data.data || [];
            setSections(data);
            setSelectedSection(data[0]?.name || ''); // Default to first section
        } catch (err) {
            console.error("Error fetching sections:", err);
        }
    };

    // Fetch Models
    const fetchModels = async () => {
        try {
            const res = await axios.get(GET_MODELS);
            const data = res.data.data || [];
            setModels(data);
            setSelectedModel(data[0]?.name_ar || ''); // Default to first model
        } catch (err) {
            console.error("Error fetching models:", err);
        }
    };

    // Load Saved Data from LocalStorage
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('modelSelectionData'));
        if (savedData) {
            setSelectedSection(savedData.selectedSection || '');
            setSelectedModel(savedData.selectedModel || '');
            setSelectedSizes(savedData.selectedSizes || []);
            setImages(savedData.images || []);
        }
    }, []);

    // Save Data to LocalStorage
    useEffect(() => {
        const modelSelectionData = {
            selectedModel,
            selectedSection,
            selectedSizes,
            images,
        };
        localStorage.setItem('modelSelectionData', JSON.stringify(modelSelectionData));
        setModelImages(images.map(image => image.file));
    }, [selectedSection, selectedModel, selectedSizes, images]);

    // Fetch Initial Data
    useEffect(() => {
        fetchSections();
        fetchModels();
    }, []);

    const toggleSize = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const onChange = (imageList) => {
        setImages(imageList);
    };

    const handleRemoveImage = (data_url) => () => {
        setImages(images.filter(image => image.data_url !== data_url));
    };

    return (
        <div className='w-full flex flex-col justify-start gap-6'>
            {/* Model Type */}
            <span className='w-full flex justify-between items-center max-md:flex-col max-md:gap-3'>
                <p className='font-bold text-lg'>نوعية الموديل</p>
                <div className='flex items-center gap-10'>
                    {sections.map((section) => (
                        <span
                            key={section.id}
                            className='flex items-center gap-3 select-none cursor-pointer'
                            onClick={() => setSelectedSection(section.name)}
                        >
                            <p className='font-bold'>{section.name}</p>
                            <span
                                className={`relative w-5 h-5 p-1 rounded-full ${
                                    selectedSection === section.name ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'
                                } border-[1px] border-black`}
                            >
                                {selectedSection === section.name && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className='text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    />
                                )}
                            </span>
                        </span>
                    ))}
                </div>
            </span>

            {/* Model Name */}
            <span className='w-full flex justify-start items-center max-md:flex-col max-md:gap-3'>
                <p className='w-max font-bold text-lg'>اسم الموديل</p>
                <select
                    className='w-3/4 max-md:w-full mr-auto rounded-lg p-2 shadow-inner outline-none cursor-pointer'
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                >
                    {models.map((model) => (
                        <option key={model.id} value={model.name_ar}>
                            {model.name_ar}
                        </option>
                    ))}
                </select>
            </span>

            {/* Sizes */}
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
                            <span
                                className={`relative w-5 h-5 p-1 rounded-full ${
                                    selectedSizes.includes(size) ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'
                                } border-[1px] border-black`}
                            >
                                {selectedSizes.includes(size) && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className='text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    />
                                )}
                            </span>
                        </span>
                    ))}
                </div>
            </span>

            {/* Image Upload */}
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

                {images.map((image, index) => (
                    <div
                        key={index}
                        className='w-full max-md:w-full bg-[#F1F1F1] p-2 rounded-xl flex max-md:flex-col flex-row-reverse justify-center items-center gap-10 max-md:gap-3 mb-3'
                    >
                        <img src={image.data_url} alt='company image' className='w-[80px] h-[80px]' />
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
                        <Image
                            src={removeImg}
                            alt='remove image'
                            className='w-[40px] h-[40px] cursor-pointer'
                            onClick={handleRemoveImage(image.data_url)}
                        />
                    </div>
                ))}
            </span>
        </div>
    );
};

export default ModelSelection;

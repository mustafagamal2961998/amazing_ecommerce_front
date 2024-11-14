'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "../../Wrapper"
import saveCompany from '../../../../assets/dashboard/saveCompany.svg'
import removeImg from '../../../../assets/dashboard/removeImg.svg'
import comletedImg from '../../../../assets/dashboard/comletedImg.svg'
import uploadIcon from '../../../../assets/dashboard/upload.svg'
import ImageUploading from "react-images-uploading";
import axios from "axios"
import { ADD_SHIPPING_COMPANY } from "../../../../Utils/APIs"
import { CONFIG } from "../../../../Utils/Auth/Config"
import { handleShowAlert } from "../../../../Utils/Alerts/handleShowAlert"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBackward } from "@fortawesome/free-solid-svg-icons"

const AddCompany = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        logo: '',
        contract_start_date: '',
        contract_end_date: '',
        status: 'active'
    });

    const [images, setImages] = useState([]);
    const maxNumber = 1;

    const onChange = (imageList) => {
        setImages(imageList);
        setFormData((prevData) => ({
            ...prevData,
            logo: imageList[0].file
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post(ADD_SHIPPING_COMPANY, formData, CONFIG)
            const data = res.data;
            handleShowAlert(data.statusCode, data.message);
        }catch (error) {
            console.log(error)
        }
    };

    return (
        <Wrapper>
            <div className='w-full mb-auto flex flex-col justify-center items-center gap-5'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-lg'>إضافة شركة</h2>
                    <Link
                        href='/dashboard/shipping'
                        className='py-3 px-8 bg-[#00B6A9] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                    >
                        <p className='text-white'>العودة إلى قائمة الشركات</p>
                        <FontAwesomeIcon icon={faBackward} className='w-[16px] h-[16px] text-white' />
                    </Link>
                </div>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <div className='w-3/4 flex items-center gap-3'>
                        <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>اسم الشركة</span>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                        />
                    </div>
                </div>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <div className='w-3/4 flex items-center gap-3'>
                        <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>هاتف الشركة</span>
                        <input
                            type='text'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                        />
                    </div>
                </div>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <div className='w-3/4 flex items-center gap-3'>
                        <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>البريد الالكتروني</span>
                        <input
                            type='text'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                        />
                    </div>
                </div>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <div className='w-3/4 flex items-center gap-3'>
                        <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>تاريخ بداية التعاقد</span>
                        <input
                            type='date'
                            name='contract_start_date'
                            value={formData.contract_start_date}
                            onChange={handleInputChange}
                            className='w-full text-right bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                        />
                    </div>
                </div>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <div className='w-3/4 flex items-center gap-3'>
                        <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>تاريخ نهاية التعاقد</span>
                        <input
                            type='date'
                            name='contract_end_date'
                            value={formData.contract_end_date}
                            onChange={handleInputChange}
                            className='w-full text-right bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                        />
                    </div>
                </div>
                <div className='flex items-center gap-1 ml-auto'>
                    <p>تحميل شعار الشركة</p>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                        acceptType={["jpg", "png"]}
                    >
                        {({ imageList, onImageUpload, dragProps }) => (
                            <div className="upload__image-wrapper">
                                <Image
                                    src={uploadIcon}
                                    alt='upload icon'
                                    className='w-[40px] h-[40px] cursor-pointer'
                                    onClick={onImageUpload}
                                    {...dragProps}
                                />
                            </div>
                        )}
                    </ImageUploading>
                </div>
                {images[0] && 
                    <div className='w-2/4 bg-[#F1F1F1] p-2 rounded-xl flex flex-row-reverse justify-center items-center gap-10'>
                        <img src={images[0].data_url} alt='company image' className='w-[80px] h-[80px]' />
                        <span className='flex flex-col items-end gap-3'>
                            <h2 className='font-bold'>{images[0].file.name}</h2>
                            <span className='flex items-center gap-2'>
                                <p className='text-[#A9ACB4]'>.KB</p>
                                <p className='text-[#A9ACB4]'>{(images[0].file.size / 1000).toFixed(2)}</p>
                            </span>
                        </span>
                        <span className='flex items-center gap-2'>
                            <p className='text-lg font-bold'>Completed</p>
                            <Image src={comletedImg} alt='completed image' className='w-[40px] h-[40px]' />
                        </span>
                        <Image src={removeImg} alt='remove image' className='w-[40px] h-[40px] cursor-pointer' onClick={() => setImages([])} />
                    </div>
                }
                <button
                    onClick={handleSubmit}
                    className='mt-12 w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'
                >
                    <p>حفظ</p>
                    <Image src={saveCompany} alt='save company' className='w-[30px] h-[30px]' />
                </button>
            </div>
        </Wrapper>
    )
}

export default AddCompany

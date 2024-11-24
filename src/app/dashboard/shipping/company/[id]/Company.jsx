'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Wrapper from "../../../Wrapper";
import saveCompany from '../../../../../assets/dashboard/saveCompany.svg';
import deleteCompany from '../../../../../assets/dashboard/deleteCompany.svg';
import Link from "next/link";
import { GET_DATA } from "../../../../../Utils/Data/getData";
import { GET_SHIPPING_COMPANY, UPDATE_SHIPPING_COMPANY, DELETE_SHIPPING_COMPANY } from "../../../../../Utils/APIs";
import NotFoundComp from "../../../reports/NotFoundComp.jsx";
import axios from "axios";
import { handleShowAlert } from "../../../../../Utils/Alerts/handleShowAlert";
import { CONFIG } from "../../../../../Utils/Auth/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const ShippingCompanyPage = (props) => {
    const [company, setCompany] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(null);

    const id = props.id;

    useEffect(() => {
        GET_DATA(GET_SHIPPING_COMPANY + id).then((data) => {
            setCompany(data);
            setIsActive(data.status === 'active');
            setImage(data.image); 
        });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompany(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); 
            setCompany(prev => ({
                ...prev,
                logo: file 
            }));
            setUpdatedImage(file)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('name', company.name);
        formData.append('mobile', company.mobile);
        formData.append('email', company.email);
        formData.append('contract_start_date', company.contract_start_date);
        formData.append('contract_end_date', company.contract_end_date);
        
        if(image) {
            formData.append('logo', updatedImage);
        }

        formData.append('status', isActive ? 'active' : 'archived');

        try {
            const res = await axios.post(UPDATE_SHIPPING_COMPANY + id, formData, CONFIG);
            const data = res.data;
            handleShowAlert(data.statusCode, data.message);
        } catch (error) {
            console.log("Failed to update company", error);
        }
    };

    const handleDelete = async () => {
        try {
            const res = await axios.delete(DELETE_SHIPPING_COMPANY + id);
            const data = res.data;
            handleShowAlert(data.statusCode, data.message);
        } catch (error) {
            console.log("Failed to delete company", error);
        }
    };

    if (!company) return <NotFoundComp />;

    return (
        <Wrapper>
            <form
                className='w-full flex flex-col justify-center items-center gap-5'
                onSubmit={handleSubmit}
            >
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-lg'>تعديل الشركة</h2>
                    <Link
                        href='/dashboard/shipping'
                        className='py-3 px-8 bg-[#00B6A9] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
                    >
                        <p className='text-white'>العودة إلى قائمة الشركات</p>
                        <FontAwesomeIcon icon={faBackward} className='w-[16px] h-[16px] text-white' />
                    </Link>
                </div>
                <div className='w-[250px] h-[200px] p-5 rounded-xl bg-[#D9D9D9] shadow-lg flex justify-center items-center cursor-pointer' onClick={() => document.getElementById('imageUpload').click()}>
                    {image ? (
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={company.name}
                            className='w-full'
                        />
                    ) : (
                        <p>Upload Image</p>
                    )}
                    <input
                        id='imageUpload'
                        type='file'
                        accept='image/*'
                        className='hidden'
                        onChange={handleImageChange}
                    />
                </div>
                {[
                    { label: 'اسم الشركة', name: 'name', type: 'text', value: company.name },
                    { label: 'هاتف الشركة', name: 'mobile', type: 'text', value: company.mobile },
                    { label: 'البريد الالكتروني', name: 'email', type: 'text', value: company.email },
                    { label: 'تاريخ بداية التعاقد', name: 'contract_start_date', type: 'date', value: company.contract_start_date },
                    { label: 'تاريخ نهاية التعاقد', name: 'contract_end_date', type: 'date', value: company.contract_end_date },
                ].map((field, index) => (
                    <div key={index} className='w-full flex gap-3 justify-center items-center'>
                        <div className='w-3/4 flex items-center gap-3'>
                            <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>
                                {field.label}
                            </span>
                            <input
                                type={field.type}
                                name={field.name}
                                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                                value={field.value}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                ))}
                <div className='w-full flex gap-3 justify-center items-center'>
                    <div className='w-3/4 flex items-center gap-3'>
                        <span className='w-[300px] py-3 px-8 bg-[#00B6A9] text-white flex items-center justify-center gap-3 rounded-xl'>
                            حالة التعاقد
                        </span>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={isActive} className="sr-only peer" onChange={() => setIsActive(!isActive)} />
                            <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                                <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${isActive ? 'translate-x-full' : ''}`}></div>
                            </div>
                            <span className="ms-3 text-sm font-medium">{isActive ? 'نشط' : 'غير نشط'}</span>
                        </label>
                    </div>
                </div>
                <div className='p-3 flex justify-center items-center gap-10'>
                    <button type="submit" className='w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
                        <p>حفظ التعديلات</p>
                        <Image src={saveCompany} alt='save company' className='w-[30px] h-[30px]' />
                    </button>
                    <button type="button" onClick={handleDelete} className='w-fit p-3 bg-[#E40D0D] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
                        <p>حذف الشركة</p>
                        <Image src={deleteCompany} alt='delete company' className='w-[30px] h-[30px]' />
                    </button>
                </div>
            </form>
        </Wrapper>
    );
}

export default ShippingCompanyPage;
    
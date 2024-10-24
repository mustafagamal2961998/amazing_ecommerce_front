'use client';
import Navbar from '../../../components/Navbar/Navbar';
import ProfileSidebar from '../ProfileSidebar';
import { useStatusContext } from '../../../Utils/Status/statusContext';
import Image from "next/image";
import addLocation from '../../../assets/profile/addLocation.png';
import darkEdit from '../../../assets/profile/darkEdit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { GetUserInfo } from '../../../Utils/Auth/UserInfo';

const Location = () => {
    const { sidebar, userInfo, setUserInfo } = useStatusContext();
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        otherMobile: '',
        details: '',
        area: '',
        city: ''
    });
    const [editingAddressId, setEditingAddressId] = useState(null);

    useEffect(() => {
        if (userInfo && userInfo.addresses) {
            setAddresses(userInfo.addresses);
        }
    }, [userInfo]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingAddressId) {
            setAddresses(prev => 
                prev.map(address => 
                    address.id === editingAddressId ? { ...address, ...newAddress } : address
                )
            );
            setEditingAddressId(null);
        } else {
            setAddresses(prev => [
                ...prev,
                { id: Date.now(), ...newAddress } 
            ]);
        }

        setNewAddress({
            firstName: '',
            lastName: '',
            mobile: '',
            otherMobile: '',
            details: '',
            area: '',
            city: ''
        });
    };

    const handleEdit = (address) => {
        setNewAddress({
            firstName: address.firstName || '',
            lastName: address.lastName || '',
            mobile: address.mobile || '',
            otherMobile: address.otherMobile || '',
            details: address.details || '',
            area: address.area || '',
            city: address.city || ''
        });
        setEditingAddressId(address.id);
    };

    const handleDelete = (id) => {
        setAddresses(prev => prev.filter(address => address.id !== id));
    };

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='relative flex gap-20 md:pl-[60px]'>
                <ProfileSidebar />
                <div className={`w-full ${sidebar ? 'max-md:hidden' : ''} max-md:p-5 mt-12 mb-12 flex flex-col gap-8`}>
                    <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
                        <span className='flex justify-between w-full'>
                            <h2 className='text-2xl max-md:text-base font-bold'>عناوين الشحن</h2>
                            <span className='flex items-center gap-2 ml-2 cursor-pointer rounded-2xl bg-[#00B6A9] p-2 mt-6'>
                                <Image src={addLocation} className='w-[24px] h-[24px]' alt='add location' />
                                <p className='text-white'>إضافة عنوان جديد</p>
                            </span>
                        </span>
                        <form className='relative w-full mt-4 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5' onSubmit={handleSubmit}>
                            <span className='absolute right-0 p-2 bg-[#00B6A9] text-white w-[10%] max-md:w-1/4 rounded-tr-2xl rounded-bl-2xl text-center mt-[-20px]'>
                                عنوان جديد
                            </span>
                            <FontAwesomeIcon icon={faXmark} className='absolute w-[12px] h-[12px] left-5 top-5 cursor-pointer duration-200 rounded-[999px] p-[8px] bg-red-500 text-center text-white hover:bg-black hover:text-red-500' />
                            <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4 mt-[30px]'>
                                <input type='text' name='firstName' value={newAddress.firstName} onChange={handleInputChange} placeholder='الاسم الاول' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                <input type='text' name='lastName' value={newAddress.lastName} onChange={handleInputChange} placeholder='الاسم الاخير' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                            </span>
                            <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4'>
                                <input type='text' name='mobile' value={newAddress.mobile} onChange={handleInputChange} placeholder='رقم الجوال' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                <input type='text' name='otherMobile' value={newAddress.otherMobile} onChange={handleInputChange} placeholder='رقم جوال اضافي' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                            </span>
                            <input type='text' name='details' value={newAddress.details} onChange={handleInputChange} placeholder='العنوان' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4 max-md:w-3/4' required />
                            <input type='text' name='area' value={newAddress.area} onChange={handleInputChange} placeholder='المنطقة' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                            <input type='text' name='city' value={newAddress.city} onChange={handleInputChange} placeholder='المدينة' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                            <span className='flex items-center gap-3 w-1/4'>
                                <input type='submit' value='حفظ' className='bg-[#00B6A9] hover:bg-[#00b6a9e3] duration-200 p-2 rounded-xl text-white cursor-pointer outline-none w-2/4 max-md:w-3/4' />
                                <button type='button' className='bg-[#F24747] hover:bg-[#f24747d2] duration-200 p-2 rounded-xl text-white outline-none w-2/4 max-md:w-3/4'>إلغاء</button>
                            </span>
                        </form>
                        <h2 className='text-2xl max-md:text-base font-bold'>عناوين مسجلة</h2>
                        {addresses.length > 0 ? (
                            addresses.map((address, index) => (
                                <div key={address.id} className='relative max-md:text-sm flex justify-between p-5 w-full bg-[#EDF0FF] rounded-2xl mb-4'>
                                    <span className='bg-[#00B6A9] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto'>
                                        {index + 1}
                                    </span>
                                    <div className='w-full flex-col items-start gap-3 text-black mr-[25px] font-bold'>
                                        <p>{address.firstName} {address.lastName}</p>
                                        <p>{address.mobile}</p>
                                        {address.otherMobile && <p>{address.otherMobile}</p>}
                                        <p>{address.details}</p>
                                        <p>{address.city} - {address.area}</p>
                                    </div>
                                    <span className='flex items-center gap-2 ml-2 cursor-pointer mb-auto'>
                                        <Image src={darkEdit} className='w-[24px] h-[24px]' alt='Edit' onClick={() => handleEdit(address)} />
                                        <p className='text-black cursor-pointer' onClick={() => handleEdit(address)}>تعديل</p>
                                        <button className='text-red-500' onClick={() => handleDelete(address.id)}>حذف</button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className='text-center'>لا توجد عناوين مسجلة</p>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Location;

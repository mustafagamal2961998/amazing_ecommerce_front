'use client';
import Navbar from '../../../components/Navbar/Navbar';
import ProfileSidebar from '../ProfileSidebar';
import { useStatusContext } from '../../../Utils/Status/statusContext';
import Image from "next/image";
import addLocation from '../../../assets/profile/addLocation.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ADD_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS } from '../../../Utils/APIs';
import { handleShowAlert } from '../../../Utils/Alerts/handleShowAlert';
import { GetUserInfo } from '../../../Utils/Auth/UserInfo';
import Swal from 'sweetalert2';
import { CONFIG } from '../../../Utils/Auth/Config';

const Location = () => {
    const { sidebar, userInfo, setUserInfo } = useStatusContext();
    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        first_name: '',
        last_name: '',
        name: '',
        description: '',
        mobile: '',
        other_mobile: '',
        country_code: '',
        city: '',
        street: '',
        build: '',
        floor: '',
        apartment: '',
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
    
    const handleCountryChange = (newCountry) => {
        setNewAddress(prevData => ({
        ...prevData,
        country_code: newCountry,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingAddressId) {
            setAddresses(prev => 
                prev.map(address => 
                    address.id === editingAddressId ? { ...address, ...newAddress } : address
                )
            );
            try {
                const formData = new FormData();
                formData.append('first_name', newAddress.first_name);
                formData.append('last_name', newAddress.last_name);
                formData.append('name', newAddress.name);
                formData.append('description', newAddress.description);
                formData.append('mobile', newAddress.mobile);
                formData.append('other_mobile', newAddress.other_mobile);
                formData.append('city', newAddress.city);
                formData.append('street', newAddress.street);
                formData.append('build', newAddress.build);
                formData.append('floor', newAddress.floor);
                formData.append('apartment', newAddress.apartment);
                formData.append('country_code', newAddress.country_code === 'مصر' ? 'EG' : 'SA');
                const res = await axios.put(UPDATE_ADDRESS + editingAddressId , formData, CONFIG);
                const data = res.data;
                setEditingAddressId(null);
                GetUserInfo().then((data) => setUserInfo(data));
                handleShowAlert(data.statusCode, data.message);
            }catch(err) {
                console.log(err)
            }
        } else {
            try {
                const formData = new FormData();
                formData.append('first_name', newAddress.first_name);
                formData.append('last_name', newAddress.last_name);
                formData.append('name', newAddress.name);
                formData.append('description', newAddress.description);
                formData.append('mobile', newAddress.mobile);
                formData.append('other_mobile', newAddress.other_mobile);
                formData.append('city', newAddress.city);
                formData.append('street', newAddress.street);
                formData.append('build', newAddress.build);
                formData.append('floor', newAddress.floor);
                formData.append('apartment', newAddress.apartment);
                formData.append('country_code', newAddress.country_code === 'مصر' ? 'EG' : 'SA');

                const res = await axios.post(ADD_ADDRESS, formData, CONFIG);
                const data = res.data;
                GetUserInfo().then((data) => setUserInfo(data));
                handleShowAlert(data.statusCode, data.message);
            }catch(err) {
                console.log(err)
            }
        }

        setNewAddress({
            first_name: '',
            last_name: '',
            name: '',
            description: '',
            mobile: '',
            other_mobile: '',
            country_code: '',
            city: '',
            street: '',
            build: '',
            floor: '',
            apartment: '',
        });
        setShowForm(false);
    };

    const handleEdit = (address) => {
        setNewAddress({
            first_name: address.first_name,
            last_name: address.last_name,
            name: address.name,
            description: address.description,
            mobile: address.mobile,
            other_mobile: address.other_mobile,
            country_code: address.country_code,
            city: address.city,
            street: address.street,
            build: address.build,
            floor: address.floor,
            apartment: address.apartment,
        });
        setEditingAddressId(address.id);
        setShowForm(true);
    };

    // const handleAdd = async () => {
    //     try {
    //         const res = await axios.post(ADD_ADDRESS, newAddress);
    //         const data = res.data;
    //         GetUserInfo().then((data) => setUserInfo(data));
    //         handleShowAlert(data.statusCode, data.message);
    //     }catch(err) {
    //         console.log(err)
    //     }
    // };

    // const handleUpdate = async (id) => {
    //     try {
    //         const res = await axios.post(UPDATE_ADDRESS + id , newAddress);
    //         const data = res.data;
    //         GetUserInfo().then((data) => setUserInfo(data));
    //         handleShowAlert(data.statusCode, data.message);
    //     }catch(err) {
    //         console.log(err)
    //     }
    // };

    const deleteAddress = async (id) => {
        try {
            const res = await axios.delete(DELETE_ADDRESS + id, CONFIG);
            const data = res.data;
            handleShowAlert(data.statusCode, data.message);
            GetUserInfo().then((data) => setUserInfo(data));
        }catch(err) {
            console.log(err)
        }
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "هل أنت متأكد من حذف العنوان ؟",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "نعم",
            denyButtonText: `لا`
            }).then((result) => {
            if (result.isConfirmed) {
                deleteAddress(id);
            } else if (result.isDenied) {
                Swal.fire("لم يتم الحذف", "", "info");
            }
        });
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
                            <span 
                                className='flex items-center gap-2 ml-2 cursor-pointer rounded-2xl bg-[#00B6A9] p-2 mt-6' 
                                onClick={() => setShowForm(true)}
                            >
                                <Image src={addLocation} className='w-[24px] h-[24px]' alt='إضافة عنوان جديد' />
                                <p className='text-white'>إضافة عنوان جديد</p>
                            </span>
                        </span>

                        {showForm && (
                            <form className='relative w-full mt-4 bg-[#EDF0FF] rounded-md h-full flex flex-col items-center gap-4 p-5' onSubmit={handleSubmit}>
                                <span className='absolute right-0 p-2 bg-[#00B6A9] text-white w-[10%] max-md:w-1/4 rounded-tr-2xl rounded-bl-2xl text-center mt-[-20px]'>
                                    عنوان جديد
                                </span>
                                <FontAwesomeIcon icon={faXmark} className='absolute w-[12px] h-[12px] left-5 top-5 cursor-pointer duration-200 rounded-[999px] p-[8px] bg-red-500 text-center text-white hover:bg-black hover:text-red-500' onClick={() => setShowForm(false)} />

                                <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4 mt-[30px]'>
                                    <input type='text' name='first_name' value={newAddress.first_name} onChange={handleInputChange} placeholder='الاسم الاول' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                    <input type='text' name='last_name' value={newAddress.last_name} onChange={handleInputChange} placeholder='الاسم الاخير' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                </span>

                                <input type='text' name='name' value={newAddress.name} onChange={handleInputChange} placeholder='اسم العنوان' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4 max-md:w-3/4' required />

                                <input type='text' name='description' value={newAddress.description} onChange={handleInputChange} placeholder='الوصف' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4 max-md:w-3/4' />

                                <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4'>
                                    <input type='text' name='mobile' value={newAddress.mobile} onChange={handleInputChange} placeholder='رقم الجوال' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                    <input type='text' name='other_mobile' value={newAddress.other_mobile} onChange={handleInputChange} placeholder='رقم جوال إضافي' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                                </span>

                                <select
                                    className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-3/4'
                                    value={newAddress.country_code}
                                    onChange={(e) => handleCountryChange(e.target.value)}
                                >
                                    <option value='EG'>مصر</option>
                                    <option value='SA'>السعودية</option>
                                </select>

                                <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4'>
                                    <input type='text' name='city' value={newAddress.city} onChange={handleInputChange} placeholder='المدينة' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                    <input type='text' name='street' value={newAddress.street} onChange={handleInputChange} placeholder='الشارع' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' required />
                                </span>

                                <span className='flex items-center gap-[40px] w-2/4 max-md:w-3/4'>
                                    <input type='text' name='build' value={newAddress.build} onChange={handleInputChange} placeholder='البناية' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                                    <input type='text' name='floor' value={newAddress.floor} onChange={handleInputChange} placeholder='الطابق' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-full' />
                                    <input type='text' name='apartment' value={newAddress.apartment} onChange={handleInputChange} placeholder='الشقة' className='p-2 max-md:placeholder:text-xs rounded-xl placeholder:text-[#E7E7E7] outline-none w-2/4 max-md:w-3/4' />
                                </span>


                                <span className='flex items-center gap-3 w-1/4'>
                                    <input type='submit' value={editingAddressId ? 'تحديث' : 'حفظ'} className='bg-[#00B6A9] hover:bg-[#00b6a9e3] duration-200 p-2 rounded-xl text-white cursor-pointer outline-none w-2/4 max-md:w-3/4' />
                                    <button type='button' className='bg-[#F24747] hover:bg-[#f24747d2] duration-200 p-2 rounded-xl text-white outline-none w-2/4 max-md:w-3/4' onClick={() => setShowForm(false)}>إلغاء</button>
                                </span>
                            </form>
                        )}

                        <h2 className='text-2xl max-md:text-base font-bold'>عناوين مسجلة</h2>
                        {addresses.length > 0 ? (
                            addresses.map((address, index) => (
                                <div key={address.id} className='relative max-md:text-sm flex justify-between p-5 w-full bg-[#EDF0FF] rounded-2xl mb-4'>
                                    <span className='bg-[#00B6A9] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto'>
                                        {index + 1}
                                    </span>
                                    <div className='w-full flex-col items-start gap-3 text-black mr-[25px] font-bold'>
                                        <p>{address.first_name} {address.last_name}</p>
                                        <p>{address.mobile} {address.other_mobile && ' - ' + address.other_mobile}</p>
                                        
                                        <p>{address.name} - {address.description}</p>
                                        <p>{address.country_code} - {address.city} - {address.street}</p>
                                    </div>
                                    <span className='flex items-center gap-2 ml-2 cursor-pointer mb-auto'>
                                        <button 
                                        onClick={() => handleEdit(address)}
                                        >
                                            <FontAwesomeIcon
                                            icon={faEdit}
                                            className='w-5 h-5 text-slate-900 duration-200 hover:text-slate-700'
                                            />
                                        </button>
                                        <button 
                                        onClick={() => handleDelete(address.id)}
                                        >
                                            <FontAwesomeIcon
                                            icon={faTrash}
                                            className='w-5 h-5 text-red-500 duration-200 hover:text-red-400'
                                            />
                                        </button>
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

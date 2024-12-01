'use client';
import './style.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSave } from '@fortawesome/free-solid-svg-icons';
import { useStatusContext } from '../../Utils/Status/statusContext';
import ProfileSidebar from './ProfileSidebar';
import Navbar from '../../components/Navbar/Navbar';
import darkEdit from '../../assets/profile/darkEdit.png';
import { UPDATE_PROFILE } from '../../Utils/APIs';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { handleShowAlert } from '../../Utils/Alerts/handleShowAlert';
import { CONFIG } from '../../Utils/Auth/Config';
import Cookies from 'js-cookie';
import { GetUserInfo } from '../../Utils/Auth/UserInfo';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Profile = () => {
    const { sidebar, setSidebar, userInfo, setUserInfo } = useStatusContext();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false); 
    const token = Cookies.get('token');

    useEffect(() => {
        if (userInfo && token) {
            setFormData(userInfo);
        }
    }, [userInfo]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        if(!token){
            window.location.pathname = '/auth/login';
        }
    }, [])

    const handleProfileUpdate = async () => {
        if (!formData.email || !formData.first_name || !formData.last_name || !formData.mobile) {
            handleShowAlert(400, 'Please fill all the required fields.');
            return;
        }

        setLoading(true); 
        const userData = new FormData();

        userData.append('email', formData.email);
        userData.append('mobile', formData.mobile);
        userData.append('gender', formData.gender);
        userData.append('date_of_birth', formData.date_of_birth);
        userData.append('first_name', formData.first_name);
        userData.append('last_name', formData.last_name);
        userData.append('password', formData.password || ''); 

        try {
            const res = await axios.post(UPDATE_PROFILE, userData, CONFIG);
            const data = res.data;
            handleShowAlert(data.statusCode, data.message);
            setUserInfo(formData);
            setIsEditing(false);  
            GetUserInfo.then((data) => setUserInfo(data)); 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); 
        }
    };

    if(!token) return null;

    return (
        <div className='min-h-screen bg-[#f5f7fa]'>
            <Navbar />
            <div className='relative flex gap-10 md:pl-[60px]'>
                <ProfileSidebar />
                {!sidebar && (
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className='w-5 h-5 absolute right-2 top-5 cursor-pointer duration-200 hover:text-red-500 md:hidden' 
                        onClick={() => setSidebar(!sidebar)} 
                    />
                )}
                <div className={`w-full ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                    <form className={`w-full h-fit mt-[100px] pb-[60px] bg-[#EDF0FF] rounded-xl flex flex-col gap-8`}>
                        <span className='flex justify-between items-center'>
                            <span className='p-2 w-[12%] max-md:w-1/3 text-center bg-[#00B6A9] text-white rounded-tr-xl rounded-bl-xl'>
                                معلومات الحساب
                            </span>
                            {isEditing ? (
                                <button
                                    className='flex items-center gap-2 ml-5 cursor-pointer mt-4'
                                    type='button'
                                    onClick={handleProfileUpdate}
                                    disabled={loading} 
                                >
                                    <FontAwesomeIcon
                                        icon={faSave}
                                        className='w-[24px] h-[24px]' 
                                    />
                                    <p className='text-black'>{loading ? 'جاري الحفظ...' : 'حفظ'}</p>
                                </button>
                            ) : (
                                <button
                                    className='flex items-center gap-2 ml-5 cursor-pointer mt-4'
                                    type='button'
                                    onClick={() => setIsEditing(true)}
                                >
                                    <Image
                                        src={darkEdit} 
                                        className='w-[24px] h-[24px]' 
                                        alt='edit icon'
                                    />
                                    <p className='text-black'>تعديل</p>
                                </button>
                            )}
                        </span>
                        <div className='flex flex-col items-center gap-4 mb-5'>
                            <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    الاسم الأول
                                </span>
                                <input 
                                    className='font-bold max-md:text-xs m-auto text-center bg-white outline-none w-full'
                                    type='text'
                                    name='first_name'
                                    value={formData?.first_name || ''}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    required
                                />
                            </span>
                            <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    الاسم الأخير
                                </span>
                                <input 
                                    className='font-bold max-md:text-xs m-auto text-center bg-white outline-none w-full'
                                    type='text'
                                    name='last_name'
                                    value={formData?.last_name || ''}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    required
                                />
                            </span>
                            <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    البريد الإلكتروني
                                </span>
                                <input 
                                    className='font-bold max-md:text-xs m-auto text-center bg-white outline-none w-full'
                                    type='email'
                                    name='email'
                                    value={formData?.email || ''}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    required
                                />
                            </span>
                            <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    رقم الجوال
                                </span>
                                <PhoneInput
                                    defaultCountry="sa"
                                    value={formData?.mobile || ''} 
                                    onChange={(value) => setFormData({ ...formData, mobile: value })}
                                    disabled={!isEditing}
                                />
                            </span>
                            <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    الجنس
                                </span>
                                <select
                                    className='font-bold max-md:text-xs m-auto text-center bg-white outline-none w-full'
                                    name='gender'
                                    value={formData?.gender || ''}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                >
                                    <option value="male">ذكر</option>
                                    <option value="female">أنثى</option>
                                </select>
                            </span>
                            <span className='custom-date-input flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    تاريخ الميلاد
                                </span>
                                <input 
                                    className='font-bold max-md:text-xs m-auto text-center bg-white outline-none w-full'
                                    type='date'
                                    name='date_of_birth'
                                    value={formData?.date_of_birth || ''}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </span>
                            <span className='flex items-center bg-white shadow-md rounded-xl w-3/4'>
                                <span className='w-1/6 max-md:w-1/4 text-center bg-[#00B6A9] text-white p-2 max-md:p-1 rounded-tr-xl rounded-br-xl max-md:text-xs'>
                                    كلمة المرور
                                </span>
                                <input 
                                    className='font-bold max-md:text-xs m-auto text-center bg-white outline-none w-full'
                                    type='password'
                                    name='password'
                                    value={formData?.password || ''}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;

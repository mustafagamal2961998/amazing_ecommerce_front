'use client';

import { useState, useEffect } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shipping = () => {
    const [shippingType, setShippingType] = useState('local');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('shippingOptions'));
        if (savedData) {
            setShippingType(savedData.shippingType);
            setCountry(savedData.country);
            setCity(savedData.city);
            setRegion(savedData.region);
            setStreet(savedData.street);
            setBuildingNumber(savedData.buildingNumber);
            setPhoneNumber(savedData.phoneNumber);
        }
    }, []);

    useEffect(() => {
        const shippingData = {
            shippingType,
            country,
            city,
            region,
            street,
            buildingNumber,
            phoneNumber,
        };
        localStorage.setItem('shippingOptions', JSON.stringify(shippingData));
    }, [shippingType, country, city, region, street, buildingNumber, phoneNumber]);

    return (
        <div className='relative w-full flex flex-col justify-start gap-6'>
            <span className='absolute -right-14 top-0 p-2 font-bold flex justify-center items-center w-1/6 rounded-2xl rounded-tl-none rounded-br-none rounded-tr-none bg-[#176166] text-white'>الشحن</span>
            <span className='w-full flex justify-center items-center gap-10'>
                <span
                    className='flex items-center gap-3 select-none cursor-pointer'
                    onClick={() => setShippingType('local')}
                >
                    <p className='font-bold'>شحن محلي</p>
                    <span className={`relative w-5 h-5 p-1 rounded-full ${shippingType === 'local' ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                        {
                            shippingType === 'local' &&
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                            />
                        }
                    </span>
                </span>
                <span
                    className='flex items-center gap-3 select-none cursor-pointer'
                    onClick={() => setShippingType('international')}
                >
                    <p className='font-bold'>شحن دولي</p>
                    <span className={`relative w-5 h-5 p-1 rounded-full ${shippingType === 'international' ? 'bg-[#34C759]' : 'bg-[#FFFFFF]'} border-[1px] border-black`}>
                        {
                            shippingType === 'international' &&
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                            />
                        }
                    </span>
                </span>
            </span>
            <span className='w-full flex flex-col items-start gap-3'>
                <p className='font-bold text-lg ml-auto'>عنوان الشحن</p>
                <div className='flex flex-col items-start gap-3'>
                    <div className='w-full flex items-center gap-10'>
                        {shippingType === 'international' && (
                            <span className='w-full flex items-center gap-3'>
                                <p className='font-bold'>الدولة</p>
                                <input
                                    required
                                    type='text'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className='w-full rounded-full outline-none p-2 shadow-inner'
                                />
                            </span>
                        )}
                        <span className='w-full flex items-center gap-3'>
                            <p className='font-bold'>المدينة</p>
                            <input
                                required
                                type='text'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className='w-full rounded-full outline-none p-2 shadow-inner'
                            />
                        </span>
                        <span className='w-full flex items-center gap-3'>
                            <p className='font-bold'>المنطقة</p>
                            <input
                                required
                                type='text'
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                className='w-full rounded-full outline-none p-2 shadow-inner'
                            />
                        </span>
                    </div>
                    <div className='w-full flex items-center gap-10'>
                        <span className='w-full flex items-center gap-3'>
                            <p className='font-bold'>اسم الشارع</p>
                            <input
                                required
                                type='text'
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                className='w-full rounded-full outline-none p-2 shadow-inner'
                            />
                        </span>
                        <span className='w-full flex items-center gap-3'>
                            <p className='font-bold'>رقم البناية</p>
                            <input
                                required
                                type='text'
                                value={buildingNumber}
                                onChange={(e) => setBuildingNumber(e.target.value)}
                                className='w-full rounded-full outline-none p-2 shadow-inner'
                            />
                        </span>
                    </div>
                    <span className='w-2/4 flex items-center gap-3'>
                        <p className='font-bold'>رقم الهاتف</p>
                        <input
                            required
                            type='text'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='w-full rounded-full outline-none p-2 shadow-inner'
                        />
                    </span>
                </div>
            </span>
        </div>
    );
}

export default Shipping;

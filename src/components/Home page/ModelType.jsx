'use client';

import Image from "next/image";
import sun from '../../assets/home page/sun.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { GET_MODELS } from "../../Utils/APIs";
import { GET_DATA } from "../../Utils/Data/getData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const ModelType = () => {
    const [selectedModel, setSelectedModel] = useState(null);
    const [models, setModels] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        GET_DATA(GET_MODELS).then((data) => {
            setModels(data);
            if (data.length > 0) {
                setSelectedModel(data[0].id);
            }
        });
    }, []);

    useEffect(() => {
        if (selectedModel) {
            GET_DATA(`${GET_MODELS}/${selectedModel}`).then((data) => {
                setProducts(data);
                const firstProduct = data[0];
                setProduct(firstProduct);
                setSelectedSize(firstProduct?.sizes[0] || null);
                setSelectedColor(firstProduct?.colors[0] || null);
                setSelectedImage(firstProduct?.colors[0]?.images[0].url || null);
            });
        }
    }, [selectedModel]);

    const handleModelClick = (id) => {
        setSelectedModel(id);
    };

    const handleChangeColor = (colorId) => {
        const findColor = product.colors.find(color => color.id === colorId);
        if (findColor) {
            setSelectedColor(findColor);
            setSelectedImage(findColor.images[0].url);
        }
    };

    const handleSizeChange = (sizeId) => {
        if (product) {
            const findSize = product.sizes.find(size => size.id === sizeId);
            setSelectedSize(findSize);
        }
    };

    const handleChangeQuantity = (operation) => {
        setQuantity(prev => operation === 'plus' ? prev + 1 : Math.max(prev - 1, 1));
    };

    const updateLocalStorage = () => {
        const customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        customOrder.model_id = selectedModel;
        customOrder.product_id = product?.id;
        customOrder.size_id = selectedSize?.id;
        customOrder.color_id = selectedColor?.id;
        customOrder.quantity = quantity;
        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        updateLocalStorage();
    }, [selectedModel, product, selectedSize, selectedColor, quantity]);

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full p-5 bg-gradient-to-tr from-[#8AD0C3] to-[#00B6A9]'>
                <p className='text-xl text-white font-bold'>
                    نوع الموديل
                    <br />
                    Model Type
                </p>
                <Image
                    src={sun}
                    alt='sun'
                    className='w-12 absolute left-0 top-0'
                />
            </div>
            <div className='flex flex-wrap justify-center items-center gap-20'>
                {models.map(model => (
                    <div key={model.id} className='w-fit flex justify-center items-center gap-4 font-bold'>
                        <span 
                            className={`w-8 h-8 flex justify-center items-center ${selectedModel !== model.id && 'bg-[#F5F3F3]'} border-2 border-black cursor-pointer`}
                            onClick={() => handleModelClick(model.id)}
                        >
                            {selectedModel === model.id && 
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='w-7 h-7'
                                />
                            }
                        </span>
                        <div className='flex flex-col items-start gap-2'>
                            <p>{model.name_ar}</p>
                            <p>{model.name_en}</p>
                        </div>
                    </div>
                ))}
            </div>
            {products.length > 0 &&
                <Swiper spaceBetween={50} slidesPerView={6} className='cursor-grab'>
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className='relative w-full' onClick={() => setProduct(product)}>
                            <div className='w-full h-full p-5 bg-[#F5F3F3] rounded-md flex flex-col justify-center items-center gap-3'>
                                <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute left-5 top-3`}>
                                    {product.id === product.id && 
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='w-5 h-5 text-[#222]'
                                        />
                                    }
                                </span>
                                <Image 
                                    width={1200}
                                    height={1200}
                                    src={selectedImage || product.colors[0]?.images[0].url} 
                                    alt={product.name} 
                                    className='w-full' 
                                />
                                <p>{product.name}</p>
                                <span className='flex items-center gap-2'>
                                    {product.colors.map((color, index) => (
                                        <FontAwesomeIcon
                                            onClick={() => handleChangeColor(color.id)}
                                            key={index}
                                            icon={faCircle} 
                                            className='w-8 h-8 cursor-pointer max-md:w-[14px] max-md:h-[14px]' 
                                            style={{ color: color.color_code }}
                                        />
                                    ))}
                                </span>                                 
                                <span className='flex items-center gap-2'>
                                    {product.sizes.map((size) => (
                                        <span 
                                            key={size.id} 
                                            onClick={() => handleSizeChange(size.id)}
                                            className={`p-5 w-[35px] h-[35px] flex justify-center items-center ${selectedSize?.id === size.id ? 'bg-[#00B6A9] text-white' : ''} font-bold rounded-md cursor-pointer`}
                                        >
                                            {size.size_code.toUpperCase()}
                                        </span>
                                    ))}
                                </span>
                                {selectedSize ? (
                                    selectedSize.discount_rate ? 
                                    <span className='flex items-center gap-3 mt-[26px]'>
                                        <p className='font-bold'>{selectedSize.discount_price} ر.س</p>
                                        <p className='text-[#E5A3A3] text-xs line-through'>{selectedSize.basic_price} ر.س</p>
                                    </span>
                                    :
                                    <p className='font-bold'>{selectedSize.basic_price} ر.س</p>
                                ) : (
                                    <p className='font-bold'>No size selected</p>
                                )}
                                <span className='flex gap-5 p-2 rounded-2xl text-white bg-[#00B6A9]'>
                                    <FontAwesomeIcon 
                                        icon={faPlus}
                                        className='border-2 rounded-full border-white cursor-pointer'
                                        onClick={() => handleChangeQuantity('plus')}
                                    />
                                    {quantity}
                                    <FontAwesomeIcon 
                                        icon={faMinus}
                                        className='border-2 rounded-full border-white cursor-pointer'
                                        onClick={() => handleChangeQuantity('minus')}
                                    />
                                </span>                               
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </div>
    );
};

export default ModelType;

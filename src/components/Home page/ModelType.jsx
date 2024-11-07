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
    const [quantities, setQuantities] = useState({});  
    const [selectedProductId, setSelectedProductId] = useState(null);

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
                setProducts(data.map(product => ({
                    ...product,
                    selectedSize: product.sizes[0] || null,
                    selectedColor: product.colors[0] || null,
                    selectedImage: product.colors[0]?.images[0].url || null,
                })));
                const initialQuantities = data.reduce((acc, product) => {
                    acc[product.id] = 1; 
                    return acc;
                }, {});
                setQuantities(initialQuantities);  
            });
        }
    }, [selectedModel]);

    const handleModelClick = (id) => {
        setSelectedModel(id);
    };

    const handleProductSelect = (productId) => {
        setSelectedProductId(productId);
    };

    const handleChangeColor = (productId, colorId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId
                    ? {
                        ...product,
                        selectedColor: product.colors.find(color => color.id === colorId),
                        selectedImage: product.colors.find(color => color.id === colorId)?.images[0]?.url || null,
                    }
                    : product
            )
        );
    };

    const handleSizeChange = (productId, sizeId) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId
                    ? {
                        ...product,
                        selectedSize: product.sizes.find(size => size.id === sizeId),
                    }
                    : product
            )
        );
    };

    const handleChangeQuantity = (productId, operation) => {
        setQuantities(prevQuantities => {
            const newQuantity = operation === 'plus' 
                ? prevQuantities[productId] + 1 
                : Math.max(prevQuantities[productId] - 1, 1); 
            return { 
                ...prevQuantities, 
                [productId]: newQuantity 
            };
        });
    };

    const updateLocalStorage = () => {
        const customOrder = JSON.parse(window.localStorage.getItem('custom_order')) || {};
        const selectedProduct = products.find(product => product.id === selectedProductId); 
        customOrder.model_id = selectedModel;
        customOrder.product_id = selectedProduct?.id;
        customOrder.product_img = selectedProduct?.selectedImage;
        customOrder.size_id = selectedProduct?.selectedSize?.id;
        customOrder.color_id = selectedProduct?.selectedColor?.id;
        customOrder.quantity = quantities[selectedProductId]; 
        window.localStorage.setItem('custom_order', JSON.stringify(customOrder));
    };

    useEffect(() => {
        updateLocalStorage();
    }, [selectedModel, products, quantities, selectedProductId]);

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
                {models.map((model) => (
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

            {products.length > 0 && (
                <div className='w-full p-5'>
                    <Swiper spaceBetween={50} slidesPerView={6}>
                        {products.map((item) => (
                            <SwiperSlide key={item.id} className='relative w-full h-full cursor-grab'>
                                <div className={`w-full h-[500px] p-5 bg-[#F5F3F3] rounded-md flex flex-col justify-between items-center gap-3`} onClick={() => handleProductSelect(item.id)}>
                                    <span className={`w-6 h-6 flex justify-center items-center bg-[#F5F3F3] border-2 border-black cursor-pointer absolute left-5 top-3`}>
                                        {item.id === selectedProductId && 
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className='w-5 h-5 text-[#222]'
                                            />
                                        }
                                    </span>

                                    <Image
                                        width={1200}
                                        height={1200}
                                        src={item.selectedImage || item.colors[0]?.images[0].url}
                                        alt={item.name}
                                        className='w-full h-[200px] object-cover'
                                    />
                                    <p>{item.name}</p>

                                    <span className='flex items-center gap-2'>
                                        {item.colors.map((color, index) => (
                                            <FontAwesomeIcon
                                                key={index}
                                                onClick={() => handleChangeColor(item.id, color.id)}
                                                icon={faCircle} 
                                                className='w-8 h-8 cursor-pointer max-md:w-[14px] max-md:h-[14px]'
                                                style={{ color: color.color_code }}
                                            />
                                        ))}
                                    </span>

                                    <span className='flex items-center gap-2'>
                                        {item.sizes.map((size) => (
                                            <span 
                                                key={size.id}
                                                onClick={() => handleSizeChange(item.id, size.id)}
                                                className={`p-5 w-[35px] h-[35px] flex justify-center items-center ${item.selectedSize?.id === size.id ? 'bg-[#00B6A9] text-white' : ''} font-bold rounded-md cursor-pointer`}
                                            >
                                                {size.size_code.toUpperCase()}
                                            </span>
                                        ))}
                                    </span>

                                    {item.selectedSize ? (
                                        item.selectedSize.discount_rate ? 
                                            <span className='flex items-center gap-3 mt-[26px]'>
                                                <p className='font-bold'>{item.selectedSize.discount_price} ر.س</p>
                                                <p className='text-[#E5A3A3] text-xs line-through'>{item.selectedSize.basic_price} ر.س</p>
                                            </span>
                                        :
                                            <p className='font-bold'>{item.selectedSize.basic_price} ر.س</p>
                                    ) : (
                                        <p className='font-bold'>No size selected</p>
                                    )}

                                    <span className='flex gap-5 p-2 rounded-2xl text-white bg-[#00B6A9]'>
                                        <FontAwesomeIcon 
                                            icon={faPlus}
                                            className='border-2 rounded-full border-white cursor-pointer'
                                            onClick={() => handleChangeQuantity(item.id, 'plus')}
                                        />
                                        {quantities[item.id]}
                                        <FontAwesomeIcon 
                                            icon={faMinus}
                                            className='border-2 rounded-full border-white cursor-pointer'
                                            onClick={() => handleChangeQuantity(item.id, 'minus')}
                                        />
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default ModelType;

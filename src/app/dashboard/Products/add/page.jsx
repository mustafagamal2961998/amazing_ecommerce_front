'use client'
import Wrapper from '../../Wrapper'
import add from '../../../../assets/dashboard/add.svg'
import addIcon from '../../../../assets/dashboard/plus.svg'
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { ADD_PRODUCT, GET_CATEGORIES_DASHBOARD, GET_MODELS } from '../../../../Utils/APIs'
import DynamicJoditEditor from './Jodit';
import { handleShowAlert } from '../../../../Utils/Alerts/handleShowAlert'
import { CONFIG } from '../../../../Utils/Auth/Config'

const AddProduct = () => {
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [stock, setStock] = useState(0);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colorName, setColorName] = useState('');
    const [colorCode, setColorCode] = useState('');
    const [sizeCode, setSizeCode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');

    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };

    const [content, setContent] = useState('');
    const handleEditorChange = (newContent) => {
      setContent(newContent);
    };

    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);



    const fetchModels = async () => {
      try {
        const res = await axios.get(GET_MODELS);
        const data = res.data.data;
        setModels(data)
        setSelectedModel(data[0].id)
      }catch(error) {
        console.log(error)
      }
    }

    const fetchCategories = async () => {
      try {
        const res = await axios.get(GET_CATEGORIES_DASHBOARD);
        const data = res.data.data;
        setCategories(data)
        setSelectedCategory(data[0].id)
      }catch(error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fetchModels();
    }, []);
    
    useEffect(() => {
      if (selectedModel) fetchCategories();
    }, [selectedModel]);

    const handleColorChange = (e) => {
      setColorName(e.target.value);
    }

    const handleSizeChange = (e) => {
      setSizeCode(e.target.value);
    }

    const handleColorCodeChange = (e) => {
      setColorCode(e.target.value);
    }

    const handleStartDateChange = (e) => {
      setStartDate(e.target.value);
    }

    const handleEndDateChange = (e) => {
      setEndDate(e.target.value);
    }

    const handleDiscountChange = (e) => {
      setDiscount(e.target.value);
    }

    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    }

    const handleNameChange = (e) => {
      setName(e.target.value);
    }

    const handleStockChange = (e) => {
      setStock(e.target.value);
    }

    const handleAddColor = () => {
      if(colorName === '' || colorCode === '' || images.length === 0) {
        handleShowAlert(422, 'برجاء اختيار اسم اللون و درجة اللون و صور المنتجات بهذا اللون');
        return;
      }

      setColors([...colors, { color_name: colorName, color_code: colorCode, images: images.map((image) => image.file), showImages: images }])

      setColorCode('');
      setColorName('');
      setImages([]);
    }

    const handleAddSize = () => {
      if(sizeCode === '' || price === '') {
        handleShowAlert(422, 'برجاء اختيار المقاس و سعر المقاس');
        return;
      }

      setSizes([...sizes, { size_code: sizeCode, basic_price: price, discount_rate: discount, start_date: startDate, end_date: endDate }]);

      setSizeCode('s');
      setPrice('');
      setDiscount('');
      setStartDate('');
      setEndDate('');
    }


    const handleSubmit = async (e) => {
      e.preventDefault();
      const product = {
        name: name,
        description: content,
        category_id: selectedCategory,
        model_id: selectedModel,
        sizes,
        colors,
        stock,
        status: 'active'
      }

      try {
        const formData = new FormData();

        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('category_id', product.category_id);
        formData.append('model_id', product.model_id);
        formData.append('stock', product.stock);
        formData.append('status', product.status);

        product.colors.forEach((color, index) => {
          formData.append(`colors[${index}][color_code]`, color.color_code);
          formData.append(`colors[${index}][color_name]`, color.color_name);
          color.images.forEach((image, imageIndex) => {
            formData.append(`colors[${index}][images][${imageIndex}]`, image);
          });
        });
        
        product.sizes.forEach((size, index) => {
          formData.append(`sizes[${index}][basic_price]`, +size.basic_price);
          formData.append(`sizes[${index}][discount_rate]`, +size.discount_rate);
          formData.append(`sizes[${index}][end_date]`, size.end_date);
          formData.append(`sizes[${index}][size_code]`, size.size_code);
          formData.append(`sizes[${index}][start_date]`, size.start_date);
        });

        const res = await axios.post(ADD_PRODUCT, formData, CONFIG);
        handleShowAlert(res.data.statusCode, res.data.message);
        setStock(0);
        setColors([]);
        setSizes([]);
        setContent('');
        setImages([]);
        setName('');
      }catch(err) {
        console.log(err)
      }
    }

  return (
    <Wrapper>
        <div className='w-full flex justify-between'>
          <div className='w-[65%] flex flex-col gap-5'>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>اسم المنتج</span>
                <input type='text' onChange={(e) => handleNameChange(e)} value={name} className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' placeholder='أدخل اسم المنتج' />
              </div>
            </div>
            <div className='w-full flex flex-col items-start'>
              <span className='w-fit h-[45px] p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-bl-md bg-[#00B6A9]'>وصف المنتج</span>
              <DynamicJoditEditor value={content} onChange={handleEditorChange} />
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>سعر المنتج</span>
                <input type='text' onChange={(e) => handlePriceChange(e)} value={price} className='text-center outline-none text-black z-10' />
                <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#00B6A9]'>ر.س</span>
              </div>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>نسبة التخفيض</span>
                <input type='text' onChange={(e) => handleDiscountChange(e)} value={discount} className='text-center outline-none text-black z-10'  />
                <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#00B6A9]'>%</span>
              </div>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>بداية التخفيض</span>
                <input type='date' onChange={(e) => handleStartDateChange(e)} value={startDate} className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' placeholder='بداية التخفيض (إختياري)' />
              </div>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>نهاية التخفيض</span>
                <input type='date' onChange={(e) => handleEndDateChange(e)} value={endDate} className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' placeholder='نهاية التخفيض (إختياري)' />
              </div>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>عدد القطع المتاحة</span>
                <input type='number' onChange={(e) => handleStockChange(e)} value={stock} className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' placeholder='نهاية التخفيض (إختياري)' />
              </div>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>اسم اللون</span>
                <input type='text' onChange={(e) => handleColorChange(e)} value={colorName} className='text-center outline-none text-black z-10'  />
              </div>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <h2 className='font-bold'>درجة اللون</h2>
              <input type='color' onChange={(e) => handleColorCodeChange(e)} value={colorCode} className='w-full outline-none bg-slate-100 rounded-md p-1' />
            </div>
            <div className='flex flex-col items-start gap-3'>
              <h2 className='font-bold'>اختر المقاس</h2>
              <select className='w-full outline-none bg-slate-100 rounded-md p-1' onChange={(e) => handleSizeChange(e)}>
                <option value='s'>S</option>
                <option value='m'>M</option>
                <option value='l'>L</option>
                <option value='xl'>XL</option>
                <option value='2xl'>2XL</option>
                <option value='3xl'>3XL</option>
                <option value='4xl'>4XL</option>
                <option value='5xl'>5XL</option>
              </select>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <h2 className='font-bold'>اختر الموديل</h2>
              <select className='w-full outline-none bg-slate-100 rounded-md p-1' value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                {
                  models.map((model) => (
                    <option key={model.id} value={model.id}>{model.name_ar}</option>
                  ))
                }
              </select>
            </div>
            <div className='flex flex-col items-start gap-3'>
              <h2 className='font-bold'>اختر الفئة</h2>
              <select className='w-full outline-none bg-slate-100 rounded-md p-1' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div>
            <div className='mt-5 flex items-center justify-center gap-5'>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "png"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps
                }) => (
                  <div className="upload__image-wrapper">
                    &nbsp;
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" className='mb-2 rounded-lg w-20' width="100" onClick={() => onImageUpdate(index)} />
                      </div>
                    ))}
                    <span
                      style={isDragging ? { color: "red" } : null}
                      className='cursor-pointer border-2 border-dashed px-10 py-3 relative rounded-xl text-3xl text-[#B4B4B4] font-bold'
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <Image src={add} alt='add image' className='w-8 h-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4' />
                    </span>
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-start items-center gap-5'>
          <span className='w-full bg-[#00B6A9] pt-2 pb-2 pr-3 pl-3 text-sm cursor-pointer rounded-3xl flex justify-center items-center gap-2 text-white mr-auto' onClick={handleAddColor}>
            <Image src={addIcon} alt='add color' className='w-5 h-5 rounded-md cursor-pointer' />
            <p>إضافة لون</p>
          </span>
          <span className='w-full bg-[#00B6A9] pt-2 pb-2 pr-3 pl-3 text-sm cursor-pointer rounded-3xl flex justify-center items-center gap-2 text-white mr-auto' onClick={handleAddSize}>
            <Image src={addIcon} alt='add size' className='w-5 h-5 rounded-md cursor-pointer' />
            <p>إضافة مقاس</p>
          </span>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
                <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                  <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
                    <tr>
                      <th className="px-6 py-4 font-normal">اللون</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">اسم اللون</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">صور المنتج باللون</th>
                    </tr>
                  </thead>
                  <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                    {
                      colors.map((color, index) => (
                        <tr className="text-center border-b-[1px] border-[#F1F1F1]" key={index}>
                          <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                            <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px]' style={{color: color.color_code}} />
                          </td>
                          <td className='text-base border-l-[1px] border-[#F1F1F1]'>{color.color_name}</td>
                          <td className='whitespace-nowrap flex items-center justify-center gap-3 border-l-[1px] border-[#F1F1F1]'>
                            {
                              color.showImages.map((image, index) => (
                                <Image key={index} src={image.data_url} alt={color.color_name} width='50' height='50' className='rounded-md' />
                              ))
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
                <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                  <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
                    <tr>
                      <th className="px-6 py-4 font-normal">المقاس</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">سعر المقاس</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">نسبة التخفيض</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تاريخ بداية التخفيض</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تاريخ انتهاء التخفيض</th>
                    </tr>
                  </thead>
                  <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                    {
                      sizes.map((size, index) => (
                        <tr className="text-center border-b-[1px] border-[#F1F1F1]" key={index}>
                          <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1] font-bold">{size.size_code.toUpperCase()}</td>
                          <td className='text-base border-l-[1px] border-[#F1F1F1]'>{size.basic_price} ر.س</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>{size.discount_rate !== '' ? size.discount_rate + ' %' : ''}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>{size.start_date}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>{size.end_date}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button className='w-[14%] p-3 mb-12 bg-[#07932E] text-white rounded-3xl' onClick={handleSubmit}>حفظ</button>
    </Wrapper>
  )
}

export default AddProduct

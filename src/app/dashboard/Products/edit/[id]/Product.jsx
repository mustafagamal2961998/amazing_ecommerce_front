'use client'
import Wrapper from '../../../Wrapper'
import add from '../../../../../assets/dashboard/add.svg'
import addIcon from '../../../../../assets/dashboard/plus.svg'
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { ADD_PRODUCT, DELETE_COLOR, GET_CATEGORIES_DASHBOARD, GET_MODELS, GET_PRODUCT_DASHBOARD, UPDATE_COLOR } from '../../../../../Utils/APIs'
import DynamicJoditEditor from '../../add/Jodit';
import { handleShowAlert } from '../../../../../Utils/Alerts/handleShowAlert'
import { CONFIG } from '../../../../../Utils/Auth/Config'
import { useStatusContext } from '../../../../../Utils/Status/statusContext';
import Loading from '../../../../../components/Loading/LoadingSpinner'

const Product = (props) => {
    const id = props.id;

    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [stock, setStock] = useState(0);
    const [colors, setColors] = useState([]);
    const [oldColors, setOldColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colorName, setColorName] = useState('');
    const [colorCode, setColorCode] = useState('');
    const [sizeCode, setSizeCode] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const { isLoading, setIsLoading } = useStatusContext();
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState('active');
    const [colorId, setColorId] = useState(null);

    const [content, setContent] = useState('');
    const handleEditorChange = (newContent) => {
      setContent(newContent);
    };

    const fetchProduct = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(GET_PRODUCT_DASHBOARD + id);
            const data = res.data.data;
            setProduct(data);
            setColors(data.colors);
            setOldColors(data.colors);
            setSizes(data.sizes);
            setName(data.name);
            setStock(data.stock);
            setContent(data.description);
            setSelectedModel(data.model_id)
            setSelectedCategory(data.category_id)
            setStatus(data.status)
        }catch(error) {
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    }

    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };

    const [models, setModels] = useState([])
    const [categories, setCategories] = useState([]);

    const fetchModels = async () => {
      try {
        const res = await axios.get(GET_MODELS);
        const data = res.data.data;
        setModels(data)
      }catch(error) {
        console.log(error)
      }
    }

    const fetchCategories = async () => {
      try {
        const res = await axios.get(GET_CATEGORIES_DASHBOARD);
        const data = res.data.data;
        setCategories(data)
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
      
      setColors([...colors, { id: Date.now(), color_name: colorName, color_code: colorCode, images: images.map((image) => image.file) }])

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

      const updatedColors = colors.filter((color) => !oldColors.some((oldColor) => oldColor.color_code === color.color_code));
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', content);
        formData.append('category_id', selectedCategory);
        formData.append('model_id', selectedModel);
        formData.append('stock', stock);
        formData.append('status', status);

        updatedColors.forEach((color, index) => {
          formData.append(`colors[${index}][color_code]`, color.color_code);
          formData.append(`colors[${index}][color_name]`, color.color_name);
          color.images.forEach((image, imageIndex) => {
            formData.append(`colors[${index}][images][${imageIndex}]`, image);
          });
        });
        
        sizes.forEach((size, index) => {
          formData.append(`sizes[${index}][basic_price]`, +size.basic_price);
          formData.append(`sizes[${index}][discount_rate]`, +size.discount_rate);
          formData.append(`sizes[${index}][end_date]`, size.end_date);
          formData.append(`sizes[${index}][size_code]`, size.size_code);
          formData.append(`sizes[${index}][start_date]`, size.start_date);
        });

        const res = await axios.post(ADD_PRODUCT + id, formData, CONFIG);
        console.log(res.data)
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

    const handleUpdateColor = (color) => {
      setColorId(color.id);
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
      setIsEditing(true);
      setColorName(color.color_name);
      setColorCode(color.color_code);
    }

    const updateColor = async () => {
      if(images.length === 0) {
        handleShowAlert(422, 'برجاء اختيار صور المنتجات بهذا اللون');
        return;
      }

      try {
        const formData = new FormData();

        formData.append('color_name', colorName);
        formData.append('color_code', colorCode);
    
        images.forEach((image) => {
          if (image.file) {
            formData.append('images[]', image.file); 
            console.log('image.file ===', image.file);
          }
        });
        const res = await axios.post(UPDATE_COLOR + colorId, formData, CONFIG);

        setIsEditing(false);
        setColorId(null);
        setImages([])
        setColorCode('');
        setColorName('');
        handleShowAlert(res.data.statusCode, res.data.message);
        fetchProduct();
      }catch(err) {
        console.log(err)
      }
    }

    const handleRemoveColor = async (color) => {
      try {
        const res =await axios.delete(DELETE_COLOR + color.id)
        const data = res.data;
        console.log(data)
        handleShowAlert(res.data.statusCode, res.data.message);
        fetchProduct();
      }catch(err) {
        console.log(err)
      }
    }

    const handleRemoveSize = (size) => {
      const updatedSizes = sizes.filter((s) => s.size_code !== size.size_code);
      setSizes(updatedSizes);
    }

    useEffect(() => {
      fetchProduct();
    }, [id])

    if(isLoading) return <Loading />

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
              <DynamicJoditEditor value={product.description} onChange={handleEditorChange} />
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
                        <img src={image.data_url || image.url} alt="" className='mb-2 rounded-lg w-20' width="100" onClick={() => onImageUpdate(index)} />
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
          <span className='w-full bg-[#00B6A9] pt-2 pb-2 pr-3 pl-3 text-sm cursor-pointer rounded-3xl flex justify-center items-center gap-2 text-white mr-auto' onClick={isEditing ? updateColor : handleAddColor}>
            <Image src={addIcon} alt='add color' className='w-5 h-5 rounded-md cursor-pointer' />
            <p>{isEditing ? 'تحديث' : 'إضافة'} لون</p>
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
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تعديل</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">حذف</th>
                    </tr>
                  </thead>
                  <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                    {
                      colors && colors.length > 0 && colors.map((color, index) => (
                        <tr className="text-center border-b-[1px] border-[#F1F1F1]" key={index}>
                          <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                            <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px]' style={{color: color.color_code}} />
                          </td>
                          <td className='text-base border-l-[1px] border-[#F1F1F1]'>{color.color_name}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                            icon={faEdit}
                            className='w-4 h-4 cursor-pointer duration-200 text-blue-500 hover:text-blue-400'
                            onClick={() => handleUpdateColor(color)}
                            />
                          </td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                            icon={faTrash}
                            className='w-4 h-4 cursor-pointer duration-200 text-red-500 hover:text-red-400'
                            onClick={() => handleRemoveColor(color)}
                            />
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
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">حذف</th>
                    </tr>
                  </thead>
                  <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                    {
                      sizes && sizes.length > 0 && sizes.map((size, index) => (
                        <tr className="text-center border-b-[1px] border-[#F1F1F1]" key={index}>
                          <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1] font-bold">{size.size_code.toUpperCase()}</td>
                          <td className='text-base border-l-[1px] border-[#F1F1F1]'>{size.basic_price} ر.س</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>{size.discount_rate !== '' ? size.discount_rate + ' %' : ''}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>{size.start_date}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>{size.end_date}</td>
                          <td className='border-l-[1px] border-[#F1F1F1]'>
                            <FontAwesomeIcon
                            icon={faTrash}
                            className='w-4 h-4 cursor-pointer duration-200 text-red-500 hover:text-red-400'
                            onClick={() => handleRemoveSize(size)}
                            />
                          </td>
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

export default Product

'use client'

import { useEffect, useState } from "react"
import DashboardHeader from '../dashboardHeader/dashboardHeader'
import Image from "next/image"
import Checked from '../../../assets/dashboard/Checkbox.svg'
import CheckBox from '../../../assets/dashboard/Checkboxes.svg'
import searchIcon from '../../../assets/dashboard/search.svg'
import infinityOff from '../../../assets/dashboard/infinityOff.svg'
import infinityOn from '../../../assets/dashboard/infinityOn.svg'
import details from '../../../assets/dashboard/details.svg'
import addIcon from '../../../assets/dashboard/plus.svg'
import clothes1 from '../../../assets/dashboard/clothes1.svg'
import add from '../../../assets/dashboard/add.svg'
import emptyCheckBox from '../../../assets/dashboard/emptyCheckbox.svg';
import purpleCheckBox from '../../../assets/dashboard/purpleCheckbox.svg';
import percentage from '../../../assets/dashboard/percentage.svg';
import axios from "axios"
import ImageSlider from "./Slider"
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const Products = () => {
    const [productsMood, setProductsMood] = useState(true)

    const [all, setAll] = useState(true);
    const [men, setMen] = useState(true);
    const [women, setWomen] = useState(true);
    const [kids, setKids] = useState(false);
    const [tax, setTax] = useState(false);
    const [manyColors, setManyColors] = useState(true);

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products', {
          params: { limit: 200 }
        });
        const data = await res.data;
    
        const categories = [];
        if (men) categories.push('mens-shirts');
        if (women) categories.push('womens-dresses');
        if (kids) categories.push('sunglasses');

        const products = data.products.filter(product => categories.includes(product.category));
        setProducts(products)
        }catch (error) {
          console.error('Error fetching products:', error);
        }
    };

    const handleCategory = () => {
      if(all){
        setMen(true);
        setWomen(true);
        setKids(true);
      }
    }

    const handleSearch = async (searchKey) => {
      try{
        const res = await axios.get(`https://dummyjson.com/products/search?q=${searchKey}`);
        const data = await res.data;
        setProducts(data.products)
      }catch(err){
        console.log(err.response.data.message)
      }
    }

    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    useEffect(() => {
      fetchProducts();
      handleCategory();
    }, [all, men, women, kids])

  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
      <DashboardHeader />
    {productsMood ?
    <div className='w-full flex flex-col items-start gap-5'>
        <div className='grid grid-cols-4 gap-3'>
          <span className='w-full flex items-center gap-2 pt-2 pb-2 pr-8 pl-8 rounded-3xl bg-[#FEF5A8] cursor-pointer select-none' onClick={() => setAll(!all)}>
            <Image src={all ? Checked : CheckBox} alt='all' className='w-[16px] h-[16px]' />
            <p>الكل</p>
          </span>
          <span className='w-full flex items-center gap-2 pt-2 pb-2 pr-8 pl-8 rounded-3xl bg-[#FEE1A8] cursor-pointer select-none' onClick={() => setMen(!men)}>
            <Image src={men ? Checked : CheckBox} alt='men' className='w-[16px] h-[16px]' />
            <p>رجالي</p>
          </span>
          <span className='w-full flex items-center gap-2 pt-2 pb-2 pr-8 pl-8 rounded-3xl bg-[#F2FEA8] cursor-pointer select-none' onClick={() => setWomen(!women)}>
            <Image src={women ? Checked : CheckBox} alt='women' className='w-[16px] h-[16px]' />
            <p>حريمي</p>
          </span>
          <span className='w-full flex items-center gap-2 pt-2 pb-2 pr-8 pl-8 rounded-3xl bg-[#C9FEA8] cursor-pointer select-none' onClick={() => setKids(!kids)}>
            <Image src={kids ? Checked : CheckBox} alt='kids' className='w-[16px] h-[16px]' />
            <p>أطفالي</p>
          </span>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='relative w-2/5'>
            <input type='text' placeholder='بحث' className='w-full outline-none shadow shadow-[#00000026] p-2 rounded-3xl' onChange={(e) => handleSearch(e.target.value)} />
            <Image src={searchIcon} alt='search' className='w-[16px] h-[16px] absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
          </div>
          <span onClick={() => setProductsMood(false)} className='flex justify-center items-center gap-2 pt-2 pb-2 pr-8 pl-8 bg-[#4A588D] text-white rounded-3xl cursor-pointer'>
            <Image src={addIcon} alt='add' className='w-[16px] h-[16px]' />
            <p className='text-sm'>إضافة منتج جديد</p>
          </span>
        </div>
        <div className='w-full grid grid-cols-3 gap-5'>
          {products.map((product) => (
            <div key={product.id} className='relative flex p-5 flex-col justify-center items-center gap-4 p- rounded-xl shadow-lg'>
              <ImageSlider images={product.images} />
              <div className='relative mt-52 flex justify-center items-center gap-5 bg-[#EFEFEF] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D] z-20'>اسم المنتج</span>
                <input type='text' className='w-fit bg-[#EFEFEF] text-center outline-none text-black z-10' value={product.title} />
                <p></p>
              </div>
              <div className='relative flex justify-center items-center gap-5 bg-[#EFEFEF] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>سعر المنتج</span>
                <input type='text' className='bg-[#EFEFEF] text-center outline-none text-black z-10' value={product.price} />
                <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]'>ر.س</span>
              </div>
              <div className='relative flex justify-center items-center gap-5 bg-[#EFEFEF] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>الكمية</span>
                <input type='text' className={`bg-[#EFEFEF] text-center ${product.stock < 40 && 'text-[#D3D3D3]'} outline-none text-black z-10`} value={product.stock} />
                <span className={`cursor-pointer absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl ${product.stock < 40 ? 'bg-[#DDDDDD]' : 'bg-[#4A588D]'}`}>
                  <Image src={product.stock < 40 ? infinityOff : infinityOn} alt={product.title} width={200} height={200} className='w-2/4 h-2/4' />
                </span>
              </div>
              <div className='w-full flex justify-between items-center gap-3'>
                <span className='p-2 rounded-3xl cursor-pointer w-2/4 flex justify-center items-center text-white bg-[#07932E]'>حفظ</span>
                <span className='p-2 rounded-3xl cursor-pointer w-2/4 flex justify-center items-center gap-2 text-white bg-[#4A588D]'>
                  <Image src={details} width={200} height={200} alt='details' className='w-[26px] h-[26px]' />
                  <p>تفاصيل</p>
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
    :
    <div className='w-full flex flex-col justify-center items-center gap-8 min-h-screen h-full'>
      <div className='w-full flex justify-between'>
        <div className='w-[65%] flex flex-col gap-5'>
          <div className='flex justify-center items-center'>
            <span className='w-1/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>اسم المنتج</span>
            <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
          </div>
          <div className='relative'>
            <textarea className='w-full h-[400px] p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-3xl'></textarea>
            <span className='absolute top-0 w-1/6 h-[45px] p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-bl-3xl bg-[#4A588D]'>وصف المنتج</span>
          </div>
          <div className='w-full flex items-center gap-8'>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>سعر التكلفة</span>
              <input type='text' className='text-center outline-none text-black z-10' value='300' />
              <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]'>ر.س</span>
            </div>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>سعر المنتج</span>
              <input type='text' className='text-center outline-none text-black z-10' value='500' />
              <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]'>ر.س</span>
            </div>
          </div>
          <div className='w-full flex items-center gap-8'>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>السعر المخفض</span>
              <input type='text' className='text-center outline-none text-black z-10' value='450' />
              <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]'>ر.س</span>
            </div>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>نهاية التخفيض</span>
              <input type='text' className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' placeholder='نهاية التخفيض (إختياري)' />
            </div>
          </div>
          <div className='w-full flex items-center gap-8'>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>وزن المنتج</span>
              <input type='text' className='text-center outline-none text-black z-10' value='1.2' />
              <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]'>كجم</span>
            </div>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>الكمية</span>
              <input type='text' className='text-center outline-none text-[#D6D6D6] z-10' value={122} />
              <span className={`cursor-pointer absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]`}>
                <Image src={infinityOff} alt='infinity' width={200} height={200} className='w-2/4 h-2/4' />
              </span>
            </div>
          </div>
          <div className='w-full flex items-center gap-8'>
            <div className='relative flex justify-start items-center gap-3 rounded-3xl p-2 w-full'>
              <Image src={tax ? purpleCheckBox : emptyCheckBox} alt='tax' className='w-8 h-8 rounded-md cursor-pointer' onClick={() => setTax(!tax)} />
              <p className='text-sm'>المنتج خاضع للضريبة</p>
              { tax &&
              <>
                <input type='text' className='p-2 w-fit rounded-3xl border-[1px] border-[#C6C6C6] text-center outline-none' value={12} />
                <span className={`cursor-pointer absolute left-0 h-3/4 w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]`}>
                  <Image src={percentage} alt='tax' width={200} height={200} className='w-5 h-5' />
                </span>
              </>
              }
            </div>
            <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
              <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>التنبيه عند كمية</span>
              <input type='text' className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' value={10} />
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center gap-5'>
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
                    className='cursor-pointer border-2 border-dashed p-10 relative rounded-xl text-3xl text-[#B4B4B4] font-bold'
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <Image src={add} alt='add image' className='w-14 h-full absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4' />
                  </span>
                </div>
              )}
            </ImageUploading>
            <Image src={clothes1} alt='Amazing' width={500} height={500} className='w-[250px] h-full mb-auto' />
        </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-start items-center gap-5'>
        <div className='w-full flex justify-between'>
          <Image src={manyColors ? purpleCheckBox : emptyCheckBox} alt='colors' className='mr-2 w-8 h-8 rounded-md cursor-pointer' onClick={() => setManyColors(!manyColors)} />
          <span className='bg-[#538D4A] pt-2 pb-2 pr-3 pl-3 text-sm cursor-pointer rounded-3xl flex justify-center items-center gap-2 text-white'>
            <Image src={addIcon} alt='tax' className='w-5 h-5 rounded-md cursor-pointer' />
            <p>إضافة لون جديد</p>
          </span>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
              <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#252B42] to-[#5E6DA8]">
                  <tr>
                    <th className="px-6 py-4 font-normal">اللون</th>
                    <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">اسم اللون</th>
                    <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">صورة المنتج</th>
                    <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">الكمية</th>
                    <th className="px-6 py-4 font-normal border-r-[1px] border-[#F1F1F1]">السعر</th>
                  </tr>
                </thead>
                <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#153666]' />
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>أزرق داكن</td>
                    <td className='whitespace-nowrap'>
                      <Image src={clothes1} alt="product image" className="m-auto w-[80px] h-[80px] bg-white p-3 rounded-2xl" />
                    </td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]">
                      <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                        <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>الكمية</span>
                        <input type='text' className='text-center outline-none text-[#D6D6D6] z-10' value={122} />
                        <span className={`cursor-pointer absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#4A588D]`}>
                          <Image src={infinityOn} alt='infinity' width={200} height={200} className='w-2/4 h-2/4' />
                        </span>
                      </div>
                    </td>
                    <td className='text-base font-bold border-l-[1px] border-[#F1F1F1]'>
                      500 ر.س
                    </td>
                  </tr>
                  <tr className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <FontAwesomeIcon icon={faCircle} className='w-[30px] h-[30px] text-[#36577C]' />
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>بترولي</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]'>
                      <Image src={clothes1} alt="product image" className="m-auto w-[80px] h-[80px] bg-white p-3 rounded-2xl" />
                    </td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]">
                      <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                        <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>الكمية</span>
                        <input type='text' className='text-center outline-none z-10' value={50} />
                        <span className={`cursor-pointer absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#C8C8C8]`}>
                          <Image src={infinityOff} alt='infinity' width={200} height={200} className='w-2/4 h-2/4' />
                        </span>
                      </div>
                    </td>
                    <td className='text-base font-bold border-l-[1px] border-[#F1F1F1]'>
                      650 ر.س
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='relative w-full p-8 rounded-3xl border-[1px] border-[#C3C3C3] flex flex-col justify-center items-center gap-6'>
          <span className='absolute top-0 right-0 w-full bg-[#404D7F] text-white rounded-tr-3xl rounded-tl-3xl p-4'>
            <p>تحسينات SEO</p>
          </span>
          <span className='flex flex-col gap-2 items-start w-full mt-20'>
            <input type='text' className='w-full p-2 rounded-2xl outline-none border-[1px] border-[#C3C3C3] placeholder:text-[#C3C3C3]' placeholder='الوسوم' />
            <p className='text-[#FFABAB] text-sm'>كتابة الكلمات الدلالية والوسوم الخاصة بالمنتج لتحسين نتائج البحث</p>
          </span>
          <span className='flex flex-col gap-2 items-start w-full'>
            <input type='text' className='w-full p-2 rounded-2xl outline-none border-[1px] border-[#C3C3C3] placeholder:text-[#C3C3C3]' placeholder='عنوان صفحة المنتج' />
            <p className='text-[#FFABAB] text-sm'>عنوان صفحة المنتج في محرك البحث Google</p>
          </span>
          <span className='flex flex-col gap-2 items-start w-full'>
            <input type='text' className='w-full p-2 rounded-2xl outline-none border-[1px] border-[#C3C3C3] placeholder:text-[#C3C3C3]' placeholder='رابط صفحة المنتج' />
            <p className='text-[#FFABAB] text-sm'>رابط الصفحة الخاصة بالمنتج مثال : “amazing.com/name”</p>
          </span>
        </div>
      </div>
      <button className='w-[14%] p-3 mb-12 bg-[#07932E] text-white rounded-3xl'>حفظ</button>
    </div>
    }
    </main>
  )
}

export default Products
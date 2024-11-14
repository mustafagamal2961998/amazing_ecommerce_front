'use client'

import { useEffect, useState } from "react"
import Wrapper from '../Wrapper'
import Image from "next/image"
import Checked from '../../../assets/dashboard/Checkbox.svg'
import CheckBox from '../../../assets/dashboard/Checkboxes.svg'
import searchIcon from '../../../assets/dashboard/search.svg'
import infinityOff from '../../../assets/dashboard/infinityOff.svg'
import infinityOn from '../../../assets/dashboard/infinityOn.svg'
import details from '../../../assets/dashboard/details.svg'
import addIcon from '../../../assets/dashboard/plus.svg'
import axios from "axios"
import ImageSlider from "./Slider"
import Link from "next/link"
import { GET_PRODUCTS_DASHBOARD, GET_SECTIONS } from "../../../Utils/APIs"

const Products = () => {

    const [sections, setSections] = useState([]);
    const [sectionId, setSectionId] = useState(null);

    const [products, setProducts] = useState([]);

    const fetchSections = async () => {
      try {
        const res = await axios.get(GET_SECTIONS);;
        const data = res.data.data;
        setSections(data);
      }catch (error) {
        console.log(err)
      }
    }

    const fetchProducts = async () => {
      try {
        const res = await axios.get(GET_PRODUCTS_DASHBOARD, {params: {section_id: sectionId}});
        const data = await res.data.data;
    
        setProducts(data)
        }catch (error) {
          console.error('Error fetching products:', error);
        }
    };

    const handleSearch = async (searchKey) => {
      try{
        const res = await axios.get(GET_PRODUCTS_DASHBOARD, {params: {name: searchKey}});
        const data = await res.data;
        setProducts(data.products)
      }catch(err){
        console.log(err.response.data.message)
      }
    }

    const [images, setImages] = useState([]);
    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };

    // start data >= today 
    // today <= end data
    useEffect(() => {
      fetchProducts();
      fetchSections();
    }, [sectionId])

  return (
    <Wrapper>
      <div className='w-full flex flex-col items-start gap-5'>
          <div className='grid grid-cols-4 gap-3'>
            <span className='w-full flex items-center gap-2 pt-2 pb-2 pr-8 pl-8 rounded-3xl bg-[#FEF5A8] cursor-pointer select-none' onClick={() => setSectionId(null)}>
              <Image src={!sectionId ? Checked : CheckBox} alt='all' className='w-[16px] h-[16px]' />
              <p>الكل</p>
            </span>
            {sections.map((section) => (
              <span key={section.id} className='w-full flex items-center gap-2 pt-2 pb-2 pr-8 pl-8 rounded-3xl bg-[#FEF5A8] cursor-pointer select-none' onClick={() => setSectionId(section.id)}>
                <Image src={sectionId === section.id ? Checked : CheckBox} alt='all' className='w-[16px] h-[16px]' />
                <p>{section.name}</p>
              </span>
            ))}
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='relative w-2/5'>
              <input type='text' placeholder='بحث' className='w-full outline-none shadow shadow-[#00000026] p-2 rounded-3xl' onChange={(e) => handleSearch(e.target.value)} />
              <Image src={searchIcon} alt='search' className='w-[16px] h-[16px] absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
            </div>
            <Link href='products/add' className='flex justify-center items-center gap-2 pt-2 pb-2 pr-8 pl-8 bg-[#00B6A9] text-white rounded-3xl cursor-pointer'>
              <Image src={addIcon} alt='add' className='w-[16px] h-[16px]' />
              <p className='text-sm'>إضافة منتج جديد</p>
            </Link>
          </div>
          <div className='w-full grid grid-cols-3 gap-5'>
            {products.map((product) => (
              <div key={product.id} className='relative flex p-5 flex-col justify-center items-center gap-4 p- rounded-xl shadow-lg'>
                <ImageSlider images={product.colors[0].images} />
                <div className='relative mt-52 flex justify-center items-center gap-5 bg-[#EFEFEF] rounded-3xl p-2 w-full'>
                  <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9] z-20'>اسم المنتج</span>
                  <input type='text' className='w-fit bg-[#EFEFEF] text-center outline-none text-black z-10' value={product.name} />
                  <p></p>
                </div>
                <div className='relative flex justify-center items-center gap-5 bg-[#EFEFEF] rounded-3xl p-2 w-full'>
                  <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>سعر المنتج</span>
                  <input type='text' className='bg-[#EFEFEF] text-center outline-none text-black z-10' value={product.sizes[0].basic_price} />
                  <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#00B6A9]'>ر.س</span>
                </div>
                <div className='w-full flex justify-between items-center gap-3'>
                  <span className='p-2 rounded-3xl cursor-pointer w-2/4 flex justify-center items-center text-white bg-[#07932E]'>حفظ</span>
                  <span className='p-2 rounded-3xl cursor-pointer w-2/4 flex justify-center items-center gap-2 text-white bg-[#00B6A9]'>
                    <Image src={details} width={200} height={200} alt='details' className='w-[26px] h-[26px]' />
                    <p>تفاصيل</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
      </div>
    </Wrapper>
  )
}

export default Products

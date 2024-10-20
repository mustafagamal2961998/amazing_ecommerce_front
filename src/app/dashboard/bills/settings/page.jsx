'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import back from '../../../../assets/dashboard/back.svg'
import removeBill from '../../../../assets/dashboard/removeImg.svg'
import comletedBill from '../../../../assets/dashboard/comletedImg.svg'
import uploadIcon from '../../../../assets/dashboard/upload.svg'
import ImageUploading from "react-images-uploading";

const Settings = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className='w-full mb-auto mt-5 flex flex-col justify-center items-center gap-10'>
      <div className='w-full flex justify-between items-center pr-20 pl-20'>
          <h2 className='text-lg'>إعدادات الفواتير</h2>
          <Link href='/dashboard/bills' className='flex items-center gap-2 cursor-pointer'>
              <p className='text-xl text-[#00B6A9]'>قائمة الفواتير</p>
              <Image src={back} alt='back' className='w-[25px] h-[25px]' />
          </Link>
      </div>
      <div className='w-full flex flex-col gap-4 pr-20 pl-64'>
        <div className='flex justify-center items-center'>
          <span className='w-2/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>اسم الشركة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
        </div>
        <div className='flex justify-center items-center'>
          <span className='w-2/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>رقم هاتف الشركة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
        </div>
        <div className='flex justify-center items-center'>
          <span className='w-2/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>ايميل الشركة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
        </div>
        <div className='flex justify-center items-center'>
          <span className='w-2/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>عنوان الشركة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
        </div>
        <div className='flex justify-center items-center'>
          <span className='w-2/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>قيمة الضريبة المضافة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
        </div>
        <div className='flex items-center gap-1'>
        <p>إرفاق شعار الشركة</p>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg", "png"]}
        >
          {({ imageList, onImageUpload, onImageUpdate, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
              <Image
                src={uploadIcon}
                alt='upload icon'
                className='w-[40px] h-[40px] cursor-pointer'
                onClick={onImageUpload}
                {...dragProps}
              />
            </div>
          )}
        </ImageUploading>
      </div>
      {images[0] && 
      <div className='w-2/4 bg-[#F1F1F1] p-2 rounded-xl flex flex-row-reverse justify-center items-center gap-10'>
        <img src={images[0].data_url} alt='bill image' className='w-[80px] h-[80px]' />
        <span className='flex flex-col items-end gap-3'>
          <h2 className='font-bold'>{images[0].file.name}</h2>
          <span className='flex items-center gap-2'>
           <p className='text-[#A9ACB4]'>.KB</p>
           <p className='text-[#A9ACB4]'>{(images[0].file.size / 1000).toFixed(2)}</p>
          </span>
        </span>
        <span className='flex items-center gap-2'>
          <p className='text-lg font-bold'>Completed</p>
          <Image src={comletedBill} alt='completed bill' className='w-[40px] h-[40px]' />
        </span>
          <Image src={removeBill} alt='completed bill' className='w-[40px] h-[40px] cursor-pointer' onClick={() => setImages([])} />
      </div>
      }
      </div>
      <span className='p-2 rounded-3xl cursor-pointer w-[120px] flex justify-center items-center text-white bg-[#07932E]'>حفظ</span>
    </div>
  )
}

export default Settings

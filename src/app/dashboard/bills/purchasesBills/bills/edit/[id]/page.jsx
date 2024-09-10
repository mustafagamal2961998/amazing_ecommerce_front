'use client'
import { useState } from "react";
import Image from "next/image";
import back from '../../../../../../../assets/dashboard/back.svg'
import removeBill from '../../../../../../../assets/dashboard/removeImg.svg'
import comletedBill from '../../../../../../../assets/dashboard/comletedImg.svg'
import uploadIcon from '../../../../../../../assets/dashboard/upload.svg'
import editIcon from '../../../../../../../assets/dashboard/editIcon.svg'
import ImageUploading from "react-images-uploading";
import Link from "next/link";

const Edit = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className='w-full mb-auto mt-5 flex flex-col justify-center items-center gap-10'>
      <div className='w-full flex justify-between items-center pr-20 pl-20'>
          <h2 className='text-lg'>تعديل فاتورة مشتريات</h2>
          <Link href='/dashboard/bills/purchasesBills/bills' className='flex items-center gap-2 cursor-pointer'>
              <p className='text-xl text-[#4A588D]'>قائمة الفواتير</p>
              <Image src={back} alt='back' className='w-[25px] h-[25px]' />
          </Link>
      </div>
      <div className='w-full flex flex-col gap-4 pr-20 pl-64'>
        <div className='flex justify-center items-center'>
          <span className='w-1/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>مصدر الفاتورة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
          <Image src={editIcon} alt='edit icon' className='w-[30px] h-[30px] mr-2 cursor-pointer' />
        </div>
        <div className='flex justify-center items-center'>
          <span className='w-1/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>رقم الفاتورة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
          <Image src={editIcon} alt='edit icon' className='w-[30px] h-[30px] mr-2 cursor-pointer' />
        </div>
        <div className='flex justify-center items-center'>
          <span className='w-1/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#4A588D]'>تاريخ الفاتورة</span>
          <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
          <Image src={editIcon} alt='edit icon' className='w-[30px] h-[30px] mr-2 cursor-pointer' />
        </div>
        <div className='relative flex justify-center items-center'>
          <textarea className='w-full h-[200px] p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-3xl'></textarea>
          <span className='absolute right-0 top-0 w-1/6 h-[45px] p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-bl-3xl bg-[#4A588D]'>وصف الفاتورة</span>
          <Image src={editIcon} alt='edit icon' className='w-[30px] h-[30px] mr-2 cursor-pointer' />
        </div>
        <div className='flex items-center gap-1'>
        <p>إرفاق صورة الفاتورة</p>
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
      <span className='p-2 rounded-3xl cursor-pointer w-[120px] mb-3 flex justify-center items-center text-white bg-[#07932E]'>حفظ</span>
    </div>
  )
}

export default Edit

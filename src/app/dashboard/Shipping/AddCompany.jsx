import Image from "next/image"
import back from '../../../assets/dashboard/back.svg'
import saveCompany from '../../../assets/dashboard/saveCompany.svg'
import { useState } from "react"
import { useStatusContext } from "../../../Utils/Status/statusContext"
import removeImg from '../../../assets/dashboard/removeImg.svg'
import comletedImg from '../../../assets/dashboard/comletedImg.svg'
import uploadIcon from '../../../assets/dashboard/upload.svg'
import ImageUploading from "react-images-uploading";

const AddCompany = () => {
    const {setAddCompanyMood} = useStatusContext();

    const [images, setImages] = useState([]);
    const maxNumber = 1;
  
    const onChange = (imageList) => {
      setImages(imageList);
    };

  return (
    <div
    className='w-full flex flex-col justify-center items-center gap-5'
    >
        <div className='w-full flex justify-between items-center'>
            <h2 className='text-lg'>إضافة شركة</h2>
            <span
            onClick={() => setAddCompanyMood(false)}
            className='py-3 px-8 bg-[#0E183B] cursor-pointer select-none flex items-center justify-center gap-3 rounded-xl'
            >
                <p
                className='text-white'
                >
                    العودة إلى قائمة الشركات
                </p>
                <Image 
                src={back} 
                alt='back'
                className='w-[16px] h-[16px]' 
                />
            </span>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    اسم الشركة
                </span>
                <input 
                type='text'
                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    هاتف الشركة
                </span>
                <input 
                type='text'
                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    البريد الالكتروني
                </span>
                <input 
                type='text'
                className='w-full bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    تاريخ بداية التعاقد
                </span>
                <input 
                type='date'
                className='w-full text-right bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
            <div
            className='w-3/4 flex items-center gap-3'
            >
                <span
                className='w-[300px] py-3 px-8 bg-[#0E183B] text-white flex items-center justify-center gap-3 rounded-xl'
                >
                    تاريخ نهاية التعاقد
                </span>
                <input 
                type='date'
                className='w-full text-right bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none'
                />
            </div>
        </div>
        <div 
        className='w-full flex  gap-3 justify-center items-center'
        >
        </div>
            <div className='flex items-center gap-1 ml-auto'>
                <p>تحميل شعار الشركة</p>
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
            <img src={images[0].data_url} alt='company image' className='w-[80px] h-[80px]' />
            <span className='flex flex-col items-end gap-3'>
            <h2 className='font-bold'>{images[0].file.name}</h2>
            <span className='flex items-center gap-2'>
            <p className='text-[#A9ACB4]'>.KB</p>
            <p className='text-[#A9ACB4]'>{(images[0].file.size / 1000).toFixed(2)}</p>
            </span>
            </span>
            <span className='flex items-center gap-2'>
            <p className='text-lg font-bold'>Completed</p>
            <Image src={comletedImg} alt='completed image' className='w-[40px] h-[40px]' />
            </span>
            <Image src={removeImg} alt='completed image' className='w-[40px] h-[40px] cursor-pointer' onClick={() => setImages([])} />
        </div>
        }
        <button className='mt-12 w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
            <p>حفظ</p>
            <Image src={saveCompany} alt='save company' className='w-[30px] h-[30px]' />
        </button>
    </div>
  )
}

export default AddCompany

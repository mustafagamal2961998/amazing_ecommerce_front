import Image from "next/image"
import removeImg from '../../../../assets/dashboard/removeImg.svg'
import comletedImg from '../../../../assets/dashboard/comletedImg.svg'
import uploadIcon from '../../../../assets/dashboard/upload.svg'
import plus from '../../../../assets/dashboard/plus.svg'
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import checked from '../../../../assets/dashboard/checked.svg'

const GeneralSettings = () => {
  
  const [addCategoryMood, setAddCategoryMood] = useState(false);

  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const handleAddCategory = (id) => {
    setAddCategoryMood(true)
  }

  return (
    <div className='relative w-full ml-auto min-h-full p-5 -mr-2 shadow-lg bg-[#EFEFEF] rounded-3xl rounded-tr-none flex flex-col justify-start items-center gap-10'>
      <h2 className='text-xl font-bold'>الإعدادات الأساسية</h2>
      <div className='w-full flex flex-col items-start gap-5'>
        <span className='w-1/5 p-2 flex justify-center items-center bg-gradient-to-br from-[#0B1C3F] to-[#0B1C3F] rounded-br-3xl rounded-tl-3xl'>
          <p className='font-bold text-white'>معلومات الشركة</p>
        </span>
        <input type='text' placeholder='اسم الشركة باللغة العربية' className='w-full placeholder:text-center font-bold bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none' />
        <input type='text' placeholder='اسم الشركة باللغة الإنجليزية' className='w-full placeholder:text-center font-bold bg-[#D9D9D9] rounded-2xl py-3 px-8 outline-none' />
      </div>
      <div className='w-full flex flex-col items-start gap-5'>
        <span className='w-1/5 p-2 flex justify-center items-center bg-gradient-to-br from-[#0B1C3F] to-[#0B1C3F] rounded-br-3xl rounded-tl-3xl'>
          <p className='font-bold text-white'>شعار الشركة</p>
        </span>
        <div className='flex items-center gap-1 ml-auto mr-12'>
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
        <div className='w-2/4 mr-12 bg-[#4A588D33] shadow p-2 rounded-xl flex flex-row-reverse justify-center items-center gap-10'>
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
      </div>
      <span className='w-1/5 ml-auto p-2 flex justify-center items-center bg-gradient-to-br from-[#0B1C3F] to-[#0B1C3F] rounded-br-3xl rounded-tl-3xl'>
        <p className='font-bold text-white'>التصنيفات</p>
      </span>
      <div className='flex items-center gap-10'>
        <div className='w-full flex items-center gap-10'>
          <div className='flex flex-col items-center gap-3'>
            <div className='relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
              <p className='absolute right-5 -top-3 font-bold '>دولاب رجالي</p>
              <div className='mt-5 flex flex-col items-start gap-2'>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox"
                        checked />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>بدل رسمي</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>أطقم موحدة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>داخلية</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>بنطلونات متنوعة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>قمصان متنوعة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>ملابس رياضية</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>أطقم بيتي</p>
                </span>
              </div>
            </div>
            <span className='select-none flex items-center gap-4' onClick={() => handleAddCategory('as17')}>
              <Image src={plus} alt='add category' className='cursor-pointer w-6 h-6 p-2 bg-green-500 rounded-full' />
              <p className='text-base font-bold'>إضافة تصنيف</p>
            </span>
          </div>
        </div>
        <div className='w-full flex items-center gap-10'>
          <div className='flex flex-col items-center gap-3'>
            <div className='relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
              <p className='absolute right-5 -top-3 font-bold '>دولاب حريمي</p>
              <div className='mt-5 flex flex-col items-start gap-2'>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox"
                        checked />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>بدل رسمي</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>أطقم موحدة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>داخلية</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>بنطلونات متنوعة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>قمصان متنوعة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>ملابس رياضية</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>أطقم بيتي</p>
                </span>
              </div>
            </div>
            <span className='select-none flex items-center gap-4' onClick={() => handleAddCategory('as17')}>
              <Image src={plus} alt='add category' className='cursor-pointer w-6 h-6 p-2 bg-green-500 rounded-full' />
              <p className='text-base font-bold'>إضافة تصنيف</p>
            </span>
          </div>
        </div>
        <div className='w-full flex items-center gap-10'>
          <div className='flex flex-col items-center gap-3'>
            <div className='relative p-2 border-t-0 border-2 border-solid rounded-2xl border-[#A8A8A8] shadow'>
              <p className='absolute right-5 -top-3 font-bold '>دولاب أطفالي</p>
              <div className='mt-5 flex flex-col items-start gap-2'>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox"
                        checked />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>بدل رسمي</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>أطقم موحدة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>داخلية</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>بنطلونات متنوعة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>قمصان متنوعة</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>ملابس رياضية</p>
                </span>
                <span className='flex items-center gap-2'>
                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
                      <input type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#D9D9D9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#c2bbbb] before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  <p className='text-base font-bold'>أطقم بيتي</p>
                </span>
              </div>
            </div>
            <span className='select-none flex items-center gap-4' onClick={() => handleAddCategory('as17')}>
              <Image src={plus} alt='add category' className='cursor-pointer w-6 h-6 p-2 bg-green-500 rounded-full' />
              <p className='text-base font-bold'>إضافة تصنيف</p>
            </span>
          </div>
        </div>
      </div>
    {addCategoryMood &&
      <form className='absolute left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-2xl bg-white w-2/4 h-fit flex flex-col justify-evenly items-center gap-10'>
        <input type='text' placeholder='اسم التصنيف' className='w-full outline-none border-2 border-[#EFEFEF] rounded-md p-2' autoFocus={true} />
        <button className='w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl' onClick={() => setAddCategoryMood(false)}>
          <p>حفظ</p>
          <Image src={checked} alt='save' className='w-[30px] h-[30px]' />
        </button>
      </form>
    }
      <button className='w-fit p-3 bg-[#07932E] text-white rounded-full flex items-center justify-center gap-5 shadow-xl'>
        <p>حفظ التعديلات</p>
        <Image src={checked} alt='save changes' className='w-[30px] h-[30px]' />
      </button>
    </div>
  )
}

export default GeneralSettings

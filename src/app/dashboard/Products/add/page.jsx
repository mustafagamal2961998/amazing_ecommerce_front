'use client'
import Wrapper from '../../Wrapper'
import clothes1 from '../../../../assets/dashboard/clothes1.svg'
import add from '../../../../assets/dashboard/add.svg'
import addIcon from '../../../../assets/dashboard/plus.svg'
import emptyCheckBox from '../../../../assets/dashboard/emptyCheckbox.svg';
import purpleCheckBox from '../../../../assets/dashboard/purpleCheckbox.svg';
import percentage from '../../../../assets/dashboard/percentage.svg';
import infinityOff from '../../../../assets/dashboard/infinityOff.svg'
import infinityOn from '../../../../assets/dashboard/infinityOn.svg'
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';
import { useState } from 'react';

const AddProduct = () => {
    const [manyColors, setManyColors] = useState(true);
    const [images, setImages] = useState([]);
    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
    };

  return (
    <Wrapper>
        <div className='w-full flex justify-between'>
          <div className='w-[65%] flex flex-col gap-5'>
            <div className='flex justify-center items-center'>
              <span className='w-1/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>اسم المنتج</span>
              <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
            </div>
            <div className='flex justify-center items-center'>
              <span className='w-1/5 h-full p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>كود المنتج</span>
              <input type='text' className='w-full p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-tl-3xl rounded-bl-3xl' />
            </div>
            <div className='relative'>
              <textarea className='w-full h-[400px] p-3 border-[1px] border-[#C6C6C6] text-right outline-none text-black rounded-3xl'></textarea>
              <span className='absolute top-0 w-1/6 h-[45px] p-3 flex justify-center items-center text-white rounded-tr-3xl rounded-bl-3xl bg-[#00B6A9]'>وصف المنتج</span>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>سعر التكلفة</span>
                <input type='text' className='text-center outline-none text-black z-10' value='300' />
                <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#00B6A9]'>ر.س</span>
              </div>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>سعر المنتج</span>
                <input type='text' className='text-center outline-none text-black z-10' value='500' />
                <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#00B6A9]'>ر.س</span>
              </div>
            </div>
            <div className='w-full flex items-center gap-8'>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>السعر المخفض</span>
                <input type='text' className='text-center outline-none text-black z-10' value='450' />
                <span className='absolute left-0 h-full w-1/4 flex justify-center items-center text-white rounded-tl-3xl rounded-bl-3xl bg-[#00B6A9]'>ر.س</span>
              </div>
              <div className='relative flex justify-center items-center gap-5 border-[1px] border-[#C6C6C6] rounded-3xl p-2 w-full'>
                <span className='absolute right-0 h-full w-1/4 flex justify-center items-center text-white text-xs rounded-tr-3xl rounded-br-3xl bg-[#00B6A9]'>نهاية التخفيض</span>
                <input type='text' className='text-center outline-none text-black z-10 placeholder:[#D6D6D6]' placeholder='نهاية التخفيض (إختياري)' />
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
          <span className='bg-[#00B6A9] pt-2 pb-2 pr-3 pl-3 text-sm cursor-pointer rounded-3xl flex justify-center items-center gap-2 text-white mr-auto'>
            <Image src={addIcon} alt='add color' className='w-5 h-5 rounded-md cursor-pointer' />
            <p>إضافة لون جديد</p>
          </span>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
                <table className="min-w-full text-center text-sm font-normal text-surface text-white">
                  <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#00B6A9] to-[#8AD0C3]">
                    <tr>
                      <th className="px-6 py-4 font-normal">اللون</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">اسم اللون</th>
                      <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">صورة المنتج</th>
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
                      <td className='text-base font-bold border-l-[1px] border-[#F1F1F1]'>
                        650 ر.س
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button className='w-[14%] p-3 mb-12 bg-[#07932E] text-white rounded-3xl'>حفظ</button>
    </Wrapper>
  )
}

export default AddProduct

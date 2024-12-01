'use client'
import ProductsLinks from "../ProductsLinks";
import { useEffect, useState } from "react";
import axios from "axios";
import { ADD_SECTION, UPDATE_SECTION, DELETE_SECTION, GET_SECTIONS_DASHBOARD } from "../../../../Utils/APIs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPaperclip, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { handleShowAlert } from "../../../../Utils/Alerts/handleShowAlert";
import { CONFIG } from "../../../../Utils/Auth/Config";
import confirm from '../../../../assets/dashboard/confirm.svg'
import decline from '../../../../assets/dashboard/decline.svg'

const Names = () => {
  const [sections, setSections] = useState([]);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [deleteMood, setDeleteMood] = useState(false);
  const [sectionId, setSectionId] = useState(null);

  const [section, setSection] = useState({
    name: "",
    description: "",
    image: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setSection({...section, [e.target.name]: e.target.value });
  }

  const fetchSections = async () => {
    try {
      const res = await axios.get(GET_SECTIONS_DASHBOARD);
      const data = res.data.data;
      setSections(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleFileClick = () => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleAddSection = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("name", section.name);
        formData.append("description", section.description);
        formData.append("image", section.image);
        formData.append("status", section.isActive ? 'active' : 'archived');
        
        const res = await axios.post(ADD_SECTION, formData, CONFIG);
        const data = res.data;
        fetchSections();
        handleShowAlert(data.statusCode, data.message);

        setSection({name: "", description: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

  const handleUpdateSection = async (e) => {
    e.preventDefault();

    if(!section.image) {
        handleShowAlert(422, 'يجب إرفاق صورة للقسم');
        return;
    }

    try {
        const formData = new FormData();
        formData.append("name", section.name);
        formData.append("description", section.description);
        formData.append("status", section.isActive ? 'active' : 'archived');
        formData.append("image", section.image);

        const res = await axios.post(UPDATE_SECTION + sectionId, formData, CONFIG);
        const data = res.data;
        fetchSections();
        handleShowAlert(data.statusCode, data.message);
        setIsEditingMode(false);
        setSectionId(null);
        setSection({name: "", description: "", image: "", isActive: true})
    }catch (error) {
      console.log(error);
    }
  }

    const deleteSectionModal = (id) => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        })
        setSectionId(id);
        setDeleteMood(true);
    }

    const updateSectionModal = (id) => {
        setSectionId(id);
        setIsEditingMode(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const section = sections.find((section) => section.id === id);
        setSection({name: section.name, description: section.description, isActive: section.status === 'active' ? true : false, image: ""})
    }

  const handleDeleteSection = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.delete(DELETE_SECTION + sectionId);
        const data = res.data;
        fetchSections();
        handleShowAlert(data.statusCode, data.message);
        setDeleteMood(false)
    }catch (error) {
      console.log(error);
    }
  }

  const handleRemoveSectionImage = () => {
    setSection({...section, image: "" });
  }

  return (
    <div className="w-full p-5 flex flex-col gap-2">
      <ProductsLinks />
      <div className="relative w-full h-fit flex flex-col gap-2 rounded-lg border-[1px] border-[#C3C3C3] p-3">
        <div className="absolute top-0 right-0 w-full rounded-t-lg bg-[#34766A] p-2">
          <h1 className="text-right text-white font-bold text-lg p-1">
            {isEditingMode ? 'تعديل' : 'اضافة'} قسم
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2 mt-12 p-2">
          <input
            type="text"
            name="name"
            value={section.name}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص القسم"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص القسم</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <input
            type="text"
            name="description"
            value={section.description}
            onChange={handleChange}
            className="w-full p-2 placeholder:text-sm outline-none text-sm border-[1px] border-[#C3C3C3] rounded-full"
            placeholder="نص وصف القسم"
          />
          <p className="text-[#FFABAB] text-sm mr-4">كتابة نص وصف القسم</p>
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <p className="text-[#FFABAB] text-sm">حالة القسم</p>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={section.isActive} className="sr-only peer" onChange={() => setSection({...section, isActive: !section.isActive})} />
                <div className="relative w-11 h-6 bg-[#F12222] rounded-full peer-checked:bg-[#07932E]">
                    <div className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${section.isActive ? 'translate-x-full' : ''}`}></div>
                </div>
                <span className="ms-3 text-sm font-medium">{section.isActive ? 'نشط' : 'غير نشط'}</span>
            </label>
        </div>  
        <div className="flex items-center gap-2 p-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSection({...section, image: e.target.files[0] })}
            id="hiddenFileInput"
            className="hidden"
          />
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-5 h-5 text-center text-black cursor-pointer"
            onClick={handleFileClick}
          />
          <p className="text-[#FFABAB] text-sm">اختر صورة للقسم</p>
        </div>      
        {
            section.image && (
                <div className='relative w-fit h-fit'>
                    <FontAwesomeIcon
                        onClick={handleRemoveSectionImage}
                        icon={faTrash}
                        className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer absolute top-0 left-0'
                    />
                    <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(section.image)}
                        alt={section.name}
                        className="w-full h-[200px] rounded-md"
                    />
                </div>
            )
        }
        <button className="w-fit m-auto px-8 py-2 bg-[#007762] text-white rounded-full duration-200 hover:bg-[#014E40] hover:cursor-pointer" onClick={isEditingMode ? handleUpdateSection : handleAddSection}>
          حفظ
        </button>
      </div>
      <div className={`w-full p-5 rounded-md ${deleteMood ? 'flex' : 'hidden'} flex-col justify-center items-center bg-[#D9D9D97D]`}>
            <div className='w-full p-5 border-[1px] border-[#FFFFFF] rounded-md flex flex-col justify-center items-center gap-3'>
                <h2 className='font-bold text-lg'>هل أنت متأكد من حذف هذا القسم</h2>
                <span className='flex justify-center items-center gap-6'>
                    <Image
                        src={confirm}
                        onClick={handleDeleteSection}
                        className='w-full cursor-pointer'
                        alt='confirmation'
                    />
                    <Image
                        src={decline}
                        onClick={() => setDeleteMood(false)}
                        className='w-full cursor-pointer'
                        alt='decline'
                    />
                </span>
            </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Swiper spaceBetween={50} slidesPerView={6} className='w-full cursor-grab'>
            {sections.map((section) => (
                <SwiperSlide key={section.id}>
                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                        <Image
                            width={300}
                            height={300}
                            src={section.media}
                            alt={section.name}
                            className='w-full h-[200px] object-cover rounded-md shadow-lg'
                        />
                        <p className='text-xs font-bold text-gray-500'>{section.name}</p>
                        <div className='w-full rounded-lg shadow-2xl bg-[#D9D9D97D] p-2 flex justify-around items-center'>
                            <FontAwesomeIcon
                                onClick={() => deleteSectionModal(section.id)}
                                icon={faTrash}
                                className='w-4 h-4 text-center text-red-500 hover:text-red-300 duration-200 cursor-pointer'
                            />
                            <FontAwesomeIcon
                                onClick={() => updateSectionModal(section.id)}
                                icon={faEdit}
                                className='w-4 h-4 text-center text-blue-500 hover:text-blue-300 duration-200 cursor-pointer'
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>      
      </div>
    </div>
  );
};

export default Names;
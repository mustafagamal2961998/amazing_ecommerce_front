'use client';

import { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { BASE_URL } from '../../../Utils/APIs';
import { handleShowAlert } from '../../../Utils/Alerts/handleShowAlert';
import { useStatusContext } from '../../../Utils/Status/statusContext';
import { CONFIG } from '../../../Utils/Auth/Config';

const DataReview = () => {
  const [formattedData, setFormattedData] = useState(null);
  const [clientData, setClientData] = useState(null);
  const [cuttingData, setCuttingData] = useState(null);
  const [fabricSelection, setFabricSelection] = useState(null);
  const [ironingPackagingOptions, setIroningPackagingOptions] = useState(null);
  const [manufacturingOptions, setManufacturingOptions] = useState(null);
  const [modelSelectionData, setModelSelectionData] = useState(null);
  const [patternDesign, setPatternDesign] = useState(null);
  const [shippingOptions, setShippingOptions] = useState(null);
  const [storageOptions, setStorageOptions] = useState(null);



  useEffect(() => {
    const clientData = JSON.parse(localStorage.getItem('clientData') || '{}');
    const cuttingData = JSON.parse(localStorage.getItem('cuttingData') || '{}');
    const fabricSelection = JSON.parse(localStorage.getItem('fabricSelection') || '{}');
    const ironingPackagingOptions = JSON.parse(localStorage.getItem('ironingPackagingOptions') || '{}');
    const manufacturingOptions = JSON.parse(localStorage.getItem('manufacturingOptions') || '{}');
    const modelSelectionData = JSON.parse(localStorage.getItem('modelSelectionData') || '{}');
    const patternDesign = JSON.parse(localStorage.getItem('patternDesign') || '{}');
    const shippingOptions = JSON.parse(localStorage.getItem('shippingOptions') || '{}');
    const storageOptions = JSON.parse(localStorage.getItem('storageOptions') || '{}');

    setClientData(clientData);
    setCuttingData(cuttingData);
    setFabricSelection(fabricSelection);
    setIroningPackagingOptions(ironingPackagingOptions);
    setManufacturingOptions(manufacturingOptions);
    setModelSelectionData(modelSelectionData);
    setPatternDesign(patternDesign);
    setShippingOptions(shippingOptions);
    setStorageOptions(storageOptions);
    
    const displayData = {
      clientInfo: {
        title: 'بيانات العميل',
        data: [
          { label: 'اسم العميل / الشركة', value: clientData.clientName },
          { label: 'رقم الهاتف', value: `${clientData.country === 'ksa' ? '+966' : '+20'}${clientData.phoneNumber}` },
          { label: 'البريد الإلكتروني', value: clientData.email },
          { label: 'العنوان', value: `${clientData.streetName} - ${clientData.area} - ${clientData.city} - ${clientData.country === 'ksa' ? 'السعودية' : 'مصر'}` }
        ]
      },
      modelInfo: {
        title: 'بيانات الموديل',
        data: [
          { label: 'نوعية الموديل', value: modelSelectionData.modelKind },
          { label: 'اسم الموديل', value: modelSelectionData.selectedModel },
          { label: 'المقاس المطلوب', value: modelSelectionData.selectedSizes?.join(' - ') }
        ]
      },
      fabricInfo: {
        title: 'بيانات القماش',
        materials: [
          { 
            material: fabricSelection.materialOne,
            color: fabricSelection.materialOneColor,
            number: 1
          },
          {
            material: fabricSelection.materialTwo,
            color: fabricSelection.materialTwoColor,
            number: 2
          },
          {
            material: fabricSelection.materialThree,
            color: fabricSelection.materialThreeColor,
            number: 3
          }
        ],
        notes: fabricSelection.notes || 'لا يوجد ملاحظات'
      },
      patternInfo: {
        title: 'بيانات الباترون',
        data: [
          { label: 'هل ترغب في عمل تصميم باترون', value: patternDesign.patternDesign ? 'نعم' : 'لا' },
          { label: 'طريقة عمل التصميم المطلوب', value: patternDesign.manual ? 'يدوي' : 'جربر' },
          { label: 'الملفات المرفقة', value: patternDesign.pltFiles?.map(file => file.name).join(', ') || 'لا يوجد' }
        ]
      },
      cuttingInfo: {
        title: 'بيانات القص',
        data: [
          { label: 'وزن التوب', value: `${cuttingData.fabricWeight} كجم` },
          { label: 'طول التوب', value: `${cuttingData.fabricLength} متر` },
          { label: 'عرض التوب', value: `${cuttingData.fabricWidth} متر` },
          { label: 'عدد القطع المراد تصنيعها', value: `${cuttingData.numberOfPieces} قطعة` }
        ]
      },
      manufacturingInfo: {
        title: 'بيانات التصنيع',
        options: [
          { label: 'خياطة سنجر', value: manufacturingOptions.singerSewing },
          { label: 'خياطة أورليه', value: manufacturingOptions.orlehSewing },
          { label: 'خياطة أوفر', value: manufacturingOptions.overSewing },
          { label: 'عمل عراوي', value: manufacturingOptions.eyelets },
          { label: 'تركيب زراير', value: manufacturingOptions.buttons },
          { label: 'تركيب سوستة', value: manufacturingOptions.zippers },
          { label: 'شريط تنظيف', value: manufacturingOptions.cleaningTape },
          { label: 'شريط أديدس', value: manufacturingOptions.adidasTape },
          { label: 'تركيب بادج', value: manufacturingOptions.badge }
        ]
      },
      ironingInfo: {
        title: 'بيانات الكي والتغليف',
        services: [
          { label: 'كوي', value: ironingPackagingOptions.ironing },
          { label: 'تطبيق', value: ironingPackagingOptions.folding },
          { label: 'تغليف', value: ironingPackagingOptions.packing }
        ]
      },
      storageShippingInfo: {
        title: 'بيانات التخزين والشحن',
        data: [
          { label: 'هل ترغب في تخزين المنتج', value: storageOptions.storage ? 'نعم' : 'لا' },
          { label: 'نوعية التخزين', value: storageOptions.storageType === 'bags' ? 'تخزين المنتج في شنط' : 'تخزين المنتج في كراتين' },
          { label: 'مدة التخزين', value: `${storageOptions.storageDuration} يوم` },
          { label: 'نوع الشحن', value: shippingOptions.shippingType },
          { label: 'عنوان الشحن', value: `${shippingOptions.street} - ${shippingOptions.region} - ${shippingOptions.city} - ${shippingOptions.country === 'ksa' ? 'السعودية' : 'مصر'}` }
        ]
      }
    };

    setFormattedData(displayData);
  }, []);
  const {modelImages, setModelImages, pltFile, setPltFile, orderNumber, setOrderNumber} = useStatusContext();

  const handleSubmit = async () => {
    console.log(pltFile[0])
    const formData = new FormData();
    formData.append('name', clientData.clientName);
    formData.append('phone', clientData.phoneNumber);
    formData.append('phone_code', clientData.country === 'ksa' ? '+966' : '+20');
    formData.append('email', clientData.email);
    formData.append('country_code', clientData.country === 'ksa' ? 'SA' : 'EG');
    formData.append('city', clientData.city);
    formData.append('area', clientData.area);
    formData.append('street', clientData.streetName);
    formData.append('building_number', clientData.buildingNumber);

    formData.append('section_name', modelSelectionData.selectedSection);
    formData.append('model_name', modelSelectionData.selectedModel);
    if (modelImages) {
      modelImages.forEach((image, index) => {
        formData.append(`model[${index}]`, image);
        console.log(`model[${index}]`, image)
      });
    }
    
    modelSelectionData.selectedSizes.forEach((size, index) => {
      formData.append(`size[${index}]`, size);
    });
    
    const materials = [
      {
        name: fabricSelection.materialOne,
        color: fabricSelection.materialOneColor,
      },
      {
        name: fabricSelection.materialTwo,
        color: fabricSelection.materialTwoColor,
      },
      {
        name: fabricSelection.materialThree,
        color: fabricSelection.materialThreeColor,
      },
    ]

    materials.forEach((material, index) => {
      formData.append(`material[${index}]`, [material['name'], material['color']]);
    });

    formData.append('note', fabricSelection.notes || '');
    formData.append('patron_design', +patternDesign.patternDesign);
    formData.append('required_design', patternDesign.manual ? 'manual' : 'gerber');

    if (pltFile) {
      formData.append(`patron_design_file`, pltFile[0].file);
    }

    formData.append('top_weight', cuttingData.fabricWeight);
    formData.append('top_height', cuttingData.fabricLength);
    formData.append('top_width', cuttingData.fabricWidth);
    formData.append('quantity', cuttingData.numberOfPieces);

    formData.append('singer_sewing', +manufacturingOptions.singerSewing);
    formData.append('orlais_sewing', +manufacturingOptions.orlehSewing);
    formData.append('ofer_sewing', +manufacturingOptions.overSewing);
    formData.append('buttonhole_work', +manufacturingOptions.eyelets);
    formData.append('installing_buttons', +manufacturingOptions.buttons);
    formData.append('zipper_installation', +manufacturingOptions.zippers);
    formData.append('cleaning_bar', +manufacturingOptions.cleaningTape);
    formData.append('adidas_stripe', +manufacturingOptions.adidasTape);
    formData.append('badge_installation', +manufacturingOptions.badge);

    formData.append('presser', +ironingPackagingOptions.ironing);
    formData.append('fold', +ironingPackagingOptions.folding);
    formData.append('packaging', +ironingPackagingOptions.packing);

    formData.append('storage', +storageOptions.storage);
    formData.append('storage_type', storageOptions.storageType === 'bags' ? 'bags' : 'carton');
    formData.append('storage_duration', storageOptions.storageDuration);
    formData.append('shipping_type', shippingOptions.shippingType);
    formData.append('shipping_country_code', shippingOptions.country === 'ksa' ? 'SA' : 'EG');
    formData.append('shipping_phone', shippingOptions.phoneNumber);
    formData.append('shipping_city', shippingOptions.city);
    formData.append('shipping_area', shippingOptions.region);
    formData.append('shipping_street', shippingOptions.street);
    formData.append('shipping_building_number', shippingOptions.buildingNumber);

    try {
      const res = await axios.post(BASE_URL + 'manufacturings', formData, CONFIG)
      const data = res.data;
      handleShowAlert(data.statusCode, data.message)
      setOrderNumber(data.data)
      window.localStorage.setItem('orderNumber', JSON.stringify(data.data))
      setTimeout(() => {
        window.location.href = '/manufacturing/done'
      }, 3000)
    } catch (error) {
      console.log('Error submitting order:', error);
    }
  };

  if (!formattedData) return null;

  return (
    <div className='w-full flex flex-col items-start gap-8 font-bold'>
      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.clientInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.clientInfo.data.map((item, index) => (
            <div key={index} className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
              <p className='w-[250px]'>{item.label}</p>
              <p className='info'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.modelInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.modelInfo.data.map((item, index) => (
            <div key={index} className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
              <p className='w-[250px]'>{item.label}</p>
              <p className='info'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.fabricInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.fabricInfo.materials.map((item, index) => (
            item.material && (
              <div key={index} className='w-full flex justify-between info-con'>
                <span className='flex items-center gap-2'>
                  <p className='md:w-[250px]'>الخامة رقم {item.number}</p>
                  <p className='info'>{item.material}</p>
                </span>
                <span className='flex items-center gap-2'>
                  <p className='w-[120px]'>لون الخامة رقم {item.number}</p>
                  <p className='info w-8 h-8 rounded-full' style={{ backgroundColor: item.color }}></p>
                </span>
              </div>
            )
          ))}
          <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
            <p className='md:w-[210px]'>ملاحظات</p>
            <p className='info'>{formattedData.fabricInfo.notes}</p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.patternInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.patternInfo.data.map((item, index) => (
            <div key={index} className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
              <p className='w-[250px]'>{item.label}</p>
              <p className='info'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.cuttingInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.cuttingInfo.data.map((item, index) => (
            <div key={index} className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
              <p className='w-[250px]'>{item.label}</p>
              <p className='info'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.manufacturingInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.manufacturingInfo.options.map((item, index) => (
            <div key={index} className='w-full flex flex-col sm:flex-row justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='w-[250px]'>{item.label}</p>
                <p>{item.value ? 'نعم' : 'لا'}</p>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.ironingInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
            <p className='w-[250px]'>الخدمات المطلوبة</p>
            <span className='w-full flex items-center gap-12'>
              {formattedData.ironingInfo.services.map((service, index) => (
                service.value && <p key={index} className='info'>{service.label}</p>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>
          {formattedData.storageShippingInfo.title}
        </span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
          {formattedData.storageShippingInfo.data.map((item, index) => (
            <div key={index} className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
              <p className='w-[250px]'>{item.label}</p>
              <p className='info'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        type='button'
        className="w-full max-w-xs mx-auto py-3 px-6 bg-[#176166] text-white rounded-lg hover:bg-[#134e52] transition-colors"
      >
        تأكيد الطلب
      </button>
    </div>
  );
};

export default DataReview;
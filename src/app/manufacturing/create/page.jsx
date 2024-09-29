'use client';
import '../style.css';

import Navbar from '../../../components/Navbar/Navbar';
import Sidebar from './Sidebar';
import ClientData from './ClientData';
import ModelSelection from './ModelSelection';
import FabricSelection from './FabricSelection';
import PatternDesign from './PatternDesign';
import Cutting from './Cutting';
import Manufacturing from './Manufacturing';
import IroningPackaging from './IroningPackaging';
import Storage from './Storage';
import DataReview from './DataReview';
import { useStatusContext } from '../../../Utils/Status/statusContext';
import { useState } from 'react';
import Link from 'next/link';

const Create = () => {
  
  const { manufacturingMood, setManufacturingMood } = useStatusContext();
  const [currentStep, setCurrentStep] = useState(0);

  const sidebarItems = [
    { label: 'بيانات العميل', mood: 'clientData' },
    { label: 'مرحلة اختيار الموديل', mood: 'modelSelection' },
    { label: 'مرحلة اختيار القماش', mood: 'fabricSelection' },
    { label: 'مرحلة تصميم الباترون', mood: 'patternDesign' },
    { label: 'مرحلة القص', mood: 'cutting' },
    { label: 'مرحلة التصنيع', mood: 'manufacturing' },
    { label: 'مرحلة الكوي والتغليف', mood: 'ironingPackaging' },
    { label: 'مرحلة التخزين والشحن', mood: 'storageShipping' },
    { label: 'الرجاء مراجعة البيانات جيداً قبل تقديم الطلب', mood: 'dataReview' },
  ];

  const handleNextStep = () => {
    if (currentStep < sidebarItems.length - 1) {
      setCurrentStep(currentStep + 1);
      setManufacturingMood(sidebarItems[currentStep + 1].mood); 
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {  
        setCurrentStep(currentStep - 1);
        setManufacturingMood(sidebarItems[currentStep - 1].mood); 
    }
  };


  const handleSendData = () => {
    const consolidatedData = {
      clientData: JSON.parse(localStorage.getItem('clientData')),
      modelSelection: JSON.parse(localStorage.getItem('modelSelectionData')),
      fabricSelection: JSON.parse(localStorage.getItem('fabricSelection')),
      patternDesign: JSON.parse(localStorage.getItem('patternDesign')),
      cutting: JSON.parse(localStorage.getItem('cuttingData')),
      manufacturing: JSON.parse(localStorage.getItem('manufacturingOptions')),
      ironingPackaging: JSON.parse(localStorage.getItem('ironingPackagingOptions')),
      shipping: JSON.parse(localStorage.getItem('shippingOptions')),
      storage: JSON.parse(localStorage.getItem('storageOptions')),
    };

    console.log('Consolidated Data:', consolidatedData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ClientData />;
      case 1:
        return <ModelSelection />;
      case 2:
        return <FabricSelection />;
      case 3:
        return <PatternDesign />;
      case 4:
        return <Cutting />;
      case 5:
        return <Manufacturing />;
      case 6:
        return <IroningPackaging />;
      case 7:
        return <Storage />;
      case 8:
        return <DataReview />;
      default:
        return <ClientData />;
    }
  };

  return (
    <div className='w-full flex flex-col manufacturing'>
      <Navbar />
      <div className='w-full h-full bg-[#17616642] flex gap-12'>
        <Sidebar />
        <div className='w-full flex flex-col items-start gap-3 mt-24 md:pl-16 pb-12'>
          <h2 className={`text-2xl font-bold max-md:text-base max-md:mr-2 ${currentStep === sidebarItems.length - 1 ? 'mx-auto' : ''}`}>{sidebarItems[currentStep].label}</h2>
          <form className={`w-full min-h-screen h-full rounded-2xl ${currentStep !== sidebarItems.length - 1 ? 'p-14 bg-[#CAD1D3D9]' : 'p-0 bg-transparent'} flex flex-col gap-12`}>
            {renderStep()}
            {currentStep < sidebarItems.length - 1 ? (
              <div className='flex justify-between items-center w-full mt-auto'>
                <button 
                  type='button'
                  onClick={handlePreviousStep} 
                  className={`px-20 max-md:px-10 py-4 max-md:py-2 md:font-bold bg-[#0C042D] hover:bg-[#0c042dc9] duration-200 text-white rounded-xl ${currentStep === 0 ? 'hidden' : ''}`}
                >
                  السابق
                </button>
                <button 
                  type='button'
                  onClick={handleNextStep} 
                  className='px-20 max-md:px-10 py-4 max-md:py-2 md:font-bold bg-[#0C042D] hover:bg-[#0c042dc9] duration-200 text-white rounded-xl mr-auto'
                >
                  التالي
                </button>
              </div>
            ) : (
              // <button 
              //   type='submit'
              //   className='px-20 py-4 mb-12 font-bold bg-[#20B038] hover:bg-[#20b038c9] duration-200 text-white rounded-xl w-fit m-auto'
              // >
              //   تقديم الطلب
              // </button>
              <Link 
                href='/manufacturing/done'
                className='px-20 py-4 mb-12 font-bold bg-[#20B038] hover:bg-[#20b038c9] duration-200 text-white rounded-xl w-fit m-auto'
              >
                تقديم الطلب
              </Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;

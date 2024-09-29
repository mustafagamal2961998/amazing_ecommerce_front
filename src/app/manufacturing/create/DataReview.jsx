'use client'
import './style.css'

const DataReview = () => {
  return (
    <div className='w-full flex flex-col items-start gap-8 font-bold'>
      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات العميل</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            {/** Client Info Rows */}
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>اسم العميل / الشركة</p>
                <p className='info'>شركة خلابة لصناعة الملابس</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>رقم الهاتف</p>
                <p className='info'>+201129240117</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>البريد الإلكتروني</p>
                <p className='info'>s.hassan@amazing.sa</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>العنوان</p>
                <p className='info'>شارع تمثال جمال عبد الناصر - شبرا الخيمة - القليوبية - مصر</p>
            </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات الموديل</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>نوعية الموديل</p>
                <p className='info'>رجالي</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>اسم الموديل</p>
                <p className='info'>شروال</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>المقاس المطلوب</p>
                <p className='info'>S - L - XL - XXL</p>
            </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات القماش</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='md:w-[250px]'>الخامة رقم 1</p>
                <p className='info'>دوبي سلاب</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='md:w-[250px]'>لون الخامة رقم 1</p>
                <p className='info w-8 h-8 rounded-full bg-[#FF0000]'></p>
              </span>
            </div>
            <div className='w-full flex justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='md:w-[250px]'>الخامة رقم 2</p>
                <p className='info'>سمر ميلتون</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='w-[120px]'>لون الخامة رقم 2</p>
                <p className='info w-8 h-8 rounded-full bg-[#375EF9]'></p>
              </span>
            </div>
            <div className='w-full flex justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='md:w-[250px]'>الخامة رقم 3</p>
                <p className='info'>بوبلين</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='w-[120px]'>لون الخامة رقم 3</p>
                <p className='info w-8 h-8 rounded-full bg-[#20B038]'></p>
              </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='md:w-[210px]'>ملاحظات</p>
                <p className='info'>لا يوجد ملاحظات</p>
            </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات الباترون</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>هل ترغب في عمل تصميم باترون</p>
                <p className='info'>لا</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>طريقة عمل التصميم المطلوب</p>
                <p className='info'>جربر</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>الملفات المرفقة</p>
                <p className='info'>Abaya.plt</p>
            </div>
        </div>
      </div>
      
      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات القص</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>وزن التوب</p>
                <p className='info'>30 كجم</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>طول التوب</p>
                <p className='info'>100 متر</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>عرض التوب</p>
                <p className='info'>1.8 متر</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>عدد القطع المراد تصنيعها</p>
                <p className='info'>40 قطعة</p>
            </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات التصنيع</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex flex-col sm:flex-row justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='w-[250px]'>خياطة سنجر</p>
                <p>نعم</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='w-[120px]'>تركيب سوستة</p>
                <p>نعم</p>
              </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='w-[250px]'>خياطة أورليه</p>
                <p>نعم</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='w-[120px]'>شريط تنظيف</p>
                <p>نعم</p>
              </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='w-[250px]'>خياطة أوفر</p>
                <p>نعم</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='w-[120px]'>شريط أديدس</p>
                <p>نعم</p>
              </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='w-[250px]'>عمل عراوي</p>
                <p>نعم</p>
              </span>
              <span className='flex items-center gap-2'>
                <p className='w-[120px]'>تركيب بادج</p>
                <p>نعم</p>
              </span>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-between info-con'>
              <span className='flex items-center gap-2'>
                <p className='w-[250px]'>تركيب زراير</p>
                <p>نعم</p>
              </span>
            </div>
        </div>
      </div>
            
      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات الكي والتغليف</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>الخدمات المطلوبة</p>
                <span className='w-full flex items-center gap-12'>
                  <p className='info'>كوي</p>
                  <p>تطبيق</p>
                  <p>تغليف</p>
                </span>
            </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-start'>
        <span className='p-2 font-bold flex justify-center items-center w-full sm:w-1/6 rounded-3xl rounded-tl-none rounded-br-none bg-[#176166] text-white'>بيانات التخزين والشحن</span>
        <div className='w-full p-5 flex flex-col items-start gap-10 bg-[#D9D9D9D9] rounded-lg'>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>هل ترغب في تخزين المنتج</p>
                <p className='info'>نعم</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>نوعية التخزين</p>
                <p className='info'>تخزين المنتج في كراتين</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>مدة التخزين</p>
                <p className='info'>15 يوم</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>نوع الشحن</p>
                <p className='info'>شحن محلي</p>
            </div>
            <div className='w-full flex flex-col sm:flex-row justify-start gap-12 info-con'>
                <p className='w-[250px]'>عنوان الشحن</p>
                <p className='info'>شارع تمثال جمال عبد الناصر - شبرا الخيمة - القليوبية - مصر</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DataReview

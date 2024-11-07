'use client';
import './style.css';
import Image from 'next/image';
import trash from '../../assets/trash.png';
import edit from '../../assets/edit.png';
import locationAdd from '../../assets/locationAdd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import { GET_DATA } from '../../Utils/Data/getData';
import { BASE_URL, GET_CART_ITEMS, GET_USER_INFO, REMOVE_FROM_CART } from '../../Utils/APIs';
import axios from 'axios';
import { CONFIG } from '../../Utils/Auth/Config';
import { handleShowAlert } from '../../Utils/Alerts/handleShowAlert';
import { addToCart } from '../../Utils/Cart/AddToCart';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const shippingFees = 40;

  const fetchData = async () => {
    const cartData = await GET_DATA(GET_CART_ITEMS);
    if(cartData.cartitems) {
      setCartItems(cartData.cartitems);
    }else {
      setCartItems(cartData);
    }
    const userData = await GET_DATA(GET_USER_INFO);
    setUserInfo(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleRemoveFromCart = async (id) => {
    try {
      const res = await axios.delete(`${REMOVE_FROM_CART}/${id}`, CONFIG);
      const data = res.data;
      handleShowAlert(data.statusCode, data.message);
      const updatedCartItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeQuantity = async (operation, item) => {
    const newQuantity = operation === 'plus' ? item.quantity + 1 : Math.max(item.quantity - 1, 1);

    const cartItem = {
      product_id: item.product.id,
      size_id: item.size.id,
      color_id: item.color.id,
      quantity: newQuantity,
    };

    localStorage.setItem('custom_order', JSON.stringify(cartItem));
    
    await addToCart(cartItem); 

    fetchData();
  };

  const addOrder = async (e) => {
    e.preventDefault();


    const orderData = {
      cartitems: cartItems.map(item => ({
        ...item, 
        product_id: item.product.id 
      })),
      payment: {
          payment_method: paymentMethod
      },
      address: {
        address_id: selectedAddress 
      }
    };

    try {
      const res = await axios.post(BASE_URL + 'orders', {data: orderData}, CONFIG)
      const data = res.data;
      handleShowAlert(data.statusCode, data.message);
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      {
        cartItems.length > 0 ?
        <div className='w-[98%] flex flex-col items-start gap-10 p-5'>
          <span className='flex items-center gap-3 text-xl font-bold mr-[45px] max-md:mr-0'>
            سلة المشتريات
            <p className='text-xs'>عدد العناصر ({cartItems.length})</p>
          </span>

          {cartItems.length > 0 && cartItems.map((item, i) => (
            <div key={item.id} className='grid grid-rows-1 gap-5 w-full'>
              <div className='w-full flex justify-between max-md:flex-col max-md:items-end items-start'>
                <span className='relative flex items-start gap-2'>
                  <span className='bg-[#00B6A9] text-white rounded-full text-[14px] w-[24px] h-[24px] text-center mr-auto absolute top-2/4 -translate-x-2/4 -translate-y-2/4 right-0 max-md:right-[-60px]'>
                    {i + 1}
                  </span>
                  <Image src={item.color.images[0].url} className='w-[200px] h-[200px] mr-[45px] max-md:mr-0' width={200} height={200} alt={item.product.name} />
                  <span className='flex flex-col items-start gap-4'>
                    <p className='text-xl'>{item.product.name}</p>
                    <span className='w-full flex items-center justify-between text-xs font-bold'>
                      اللون:
                      <Image src={item.color.images[0].url} className='w-[20px] h-[27px] rounded-md' width={20} height={27} alt='Color' />
                    </span>
                    <span className='w-full flex items-center justify-between text-xs font-bold'>
                      المقاس:
                      <span className='p-2 bg-[#00B6A9] text-white rounded-md cursor-pointer'>{item.size.size_code}</span>
                    </span>
                    <span className='flex gap-5 p-2 rounded-2xl text-white bg-[#00B6A9]'>
                      <FontAwesomeIcon onClick={() => handleChangeQuantity('plus', item)} icon={faPlus} className='border-2 rounded-full border-white cursor-pointer' />
                      {item.quantity}
                      <FontAwesomeIcon onClick={() => handleChangeQuantity('minus', item)} icon={faMinus} className='border-2 rounded-full border-white cursor-pointer' />
                    </span>
                  </span>
                </span>
                <span className='flex flex-col items-start h-full max-md:flex-row'>
                  {item.size.discount_rate ? (
                    <span className='flex items-center gap-3 mt-[26px]'>
                      <p className='font-bold'>{item.size.discount_price} ر.س</p>
                      <p className='text-[#E5A3A3] text-xs line-through'>{item.size.basic_price} ر.س</p>
                    </span>
                  ) : (
                    <p className='font-bold'>{item.size.basic_price} ر.س</p>
                  )}
                  <Image src={trash} className='w-[20px] h-[20px] cursor-pointer mr-auto mt-auto' width={20} height={20} onClick={() => handleRemoveFromCart(item.id)} alt='حذف المنتج من السلة' />
                </span>
              </div>
            </div>
          )
          )}
          <div className='w-full flex justify-between max-md:flex-col items-start gap-5 mr-[45px] max-md:mr-0'>
            <div className='flex flex-col items-start gap-10 w-full'>
              <div className='location w-full p-5 flex flex-col items-start gap-5 rounded-2xl shadow relative h-[200px]'>
                <span className='absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl bg-[#00B6A9] text-white text-center w-[118px] p-3'>
                  عنوان العميل
                </span>
                <div className='flex flex-col items-start gap-4 mt-[60px]'>
                  {userInfo && userInfo.addresses.length > 0 ? (
                    userInfo.addresses.map((address) => (
                      <span key={address.id} className='flex items-center gap-3'>
                        <input
                          type='radio'
                          name='address'
                          checked={selectedAddress === address.id}
                          onChange={() => setSelectedAddress(address.id)}
                        />
                        {address.country_code} - {address.city} - {address.street}
                        <Link href='/profile/location'>
                          <Image src={edit} className='w-[18px] h-[18px] cursor-pointer' width={18} height={18} alt='تعديل العنوان' />
                        </Link>
                      </span>
                    ))
                  ) : (
                    <p className='text-center'>لا توجد عناوين مسجلة</p>
                  )}
                </div>
                <span className='flex items-center gap-2'>
                  <Link href='/profile/location'>
                    <Image src={locationAdd} className='w-[18px] h-[18px] cursor-pointer' width={18} height={18} alt='إضافة عنوان جديد' />
                  </Link>
                  <p>إضافة عنوان جديد</p>
                </span>
              </div>
              <div className='payment w-full p-5 flex flex-col items-start gap-2 rounded-2xl shadow relative h-[200px]'>
                <span className='absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl bg-[#00B6A9] text-white text-center w-[118px] p-3'>
                  طريقة الدفع
                </span>
                <span className='flex items-center gap-3 mt-[60px]'>
                  <input type='radio' id='paymentOnDelivery' name='paymentMethod' defaultChecked onChange={() => setPaymentMethod('cod')} />
                  <label htmlFor='paymentOnDelivery'>الدفع عند التسليم</label>
                </span>
                <span className='flex items-center gap-3'>
                  <input type='radio' id='paymentByCard' name='paymentMethod' onChange={() => setPaymentMethod('card')} />
                  <label htmlFor='paymentByCard'>الدفع بالبطاقة</label>
                </span>
              </div>
            </div>
            <div className='w-1/4 max-md:w-full flex flex-col justify-center items-start gap-5 shadow relative p-5 rounded-2xl h-[440px]'>
              <span className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[24px] rounded-br-xl rounded-bl-xl bg-[#00B6A9] text-white text-center w-[118px] p-3'>
                ملخص الطلب
              </span>
              <span className='w-full flex justify-between font-bold mt-[45px]'>
                عدد المنتجات ({cartItems.length})
                <p className='text-[#434343]'>{cartItems.reduce((acc, item) => acc + item.total, 0)} ر.س</p>
              </span>
              <span className='w-full flex justify-between font-bold'>
                مصاريف الشحن
                <p className='text-[#434343]'>{shippingFees} ر.س</p>
              </span>
              <span className='w-full flex justify-between font-bold'>
                خصومات
                <p className='text-[#434343]'>00.00 ر.س</p>
              </span>
              <span className='w-full flex justify-between gap-2 font-bold'>
                <input type='text' className='w-3/4 p-2 rounded-xl outline-none border-2 border-[#CCCCCC] placeholder:text-[#CCCCCC]' placeholder='ادخل كود الخصم' />
                <button className='rounded-xl bg-[#00B6A9] text-white p-3'>تطبيق</button>
              </span>
              <hr className='bg-[#DEDEDE] w-full h-[1px] rounded-md' />
              <span className='w-full flex justify-between font-bold'>
                الإجمالي
                <p className='text-[#434343]'>{cartItems.reduce((acc, item) => acc + item.total, 0) + shippingFees} ر.س</p>
              </span>
              <button onClick={(e) => addOrder(e)} className='rounded-xl bg-[#3DA241] border-2 border-black text-white p-3 w-full mt-auto text-center'>تأكيد الطلب</button>
            </div>
          </div>
        </div>
        :
        <p className='text-center text-xl font-bold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>لا توجد عناصر في السلة</p>
      }
    </div>
  );
}

export default Cart;

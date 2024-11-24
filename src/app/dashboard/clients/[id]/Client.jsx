'use client'

import Wrapper from '../../Wrapper'
import more from '../../../../assets/dashboard/more.svg'
import remove from '../../../../assets/dashboard/remove.svg'
import block from '../../../../assets/dashboard/block.svg'
import clothes1 from '../../../../assets/dashboard/clothes1.svg'
import timer from '../../../../assets/dashboard/timer.svg'
import boxTime from '../../../../assets/dashboard/box-time.svg'
import shipping from '../../../../assets/dashboard/shipping.svg'
import boxTick from '../../../../assets/dashboard/box-tick.svg'
import tickCircle from '../../../../assets/dashboard/tick-circle.svg'
import boxRemove from '../../../../assets/dashboard/box-remove.svg'
import rotate from '../../../../assets/dashboard/3d-rotate.svg'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import { GET_DATA } from '../../../../Utils/Data/getData'
import { GET_CLIENT } from '../../../../Utils/APIs'
import NotFoundComp from '../../reports/NotFoundComp.jsx'
import axios from 'axios'
import { handleShowAlert } from '../../../../Utils/Alerts/handleShowAlert'

const Client = (props) => {
    const [mood, setMood] = useState('details');
    const [client, setClient] = useState(null);

    const [deliveredOrders, setDeliveredOrders] = useState(null);
    const [returnedOrders, setReturnedOrders] = useState(null);
    const [cancelledOrders, setCancelledOrders] = useState(null);
    const [pendingOrders, setPendingOrders] = useState(null);
    const [shippingOrders, setShippingOrders] = useState(null);
    const [completedOrders, setCompletedOrders] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [orderType, setOrderType] = useState('all'); 
    const [filteredOrders, setFilteredOrders] = useState(client?.orders || []);

    const fetchPendingOrders = async () => {
        try {
            const res = await axios.get(GET_CLIENT + props.id, { params: { status: 'pending' } });
            const data = res.data.data.orders.length;
            setPendingOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchDeliveredOrders = async () => {
        try {
            const res = await axios.get(GET_CLIENT + props.id, { params: { status: 'delivered' } });
            const data = res.data.data.orders.length;
            setDeliveredOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchReturnedOrders = async () => {
        try {
            const res = await axios.get(GET_CLIENT + props.id, { params: { status: 'returned' } });
            const data = res.data.data.orders.length;
            setReturnedOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCancelledOrders = async () => {
        try {
            const res = await axios.get(GET_CLIENT + props.id, { params: { status: 'canceled' } });
            const data = res.data.data.orders.length;
            setCancelledOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchShippingOrders = async () => {
        try {
            const res = await axios.get(GET_CLIENT + props.id, { params: { status: 'shipping' } });
            const data = res.data.data.orders.length;
            setShippingOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCompletedOrders = async () => {
        try {
            const res = await axios.get(GET_CLIENT + props.id, { params: { status: 'completed' } });
            const data = res.data.data.orders.length;
            setCompletedOrders(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeClientSuatus = async (status) => {
        try {
            const res = await axios.put(GET_CLIENT + props.id, { status: status });
            const data = res.data;
            handleShowAlert(data.statusCode, data.message);
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        GET_DATA(GET_CLIENT + props.id).then((data) => {
            setClient(data);
            setFilteredOrders(data.orders);
        });
        fetchPendingOrders();
        fetchDeliveredOrders();
        fetchReturnedOrders();
        fetchCancelledOrders();
        fetchShippingOrders();
        fetchCompletedOrders();
    }, []);

    useEffect(() => {
        const filtered = client?.orders.filter(order => {
            const matchesType = orderType === 'all' || order.status === orderType;
            const matchesSearch = order.orderitems.some(item => item.product.name.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesType && matchesSearch;
        });
        setFilteredOrders(filtered);
    }, [searchQuery, orderType, client]);

    if (!client) return <p>Loading...</p>

    return (
        <Wrapper>
            <div className='w-full flex flex-col justify-center items-center gap-4 shadow-xl rounded-3xl'>
                <div className='w-full h-[150px] p-5 rounded-t-3xl bg-gradient-to-br from-[#00B6A9] to[#8AD0C3] flex justify-around items-center'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={client['avatar']} width={200} height={200} alt={client['first_name'] + " " + client['last_name']} className="w-[70px] h-[70px] rounded-full" />
                        <span className='w-fit p-1 pr-4 pl-4 text-sm rounded-3xl text-center bg-[#8AD0C3] text-black'>{client['first_name'] + " " + client['last_name']}</span>
                    </div>
                    <div className='relative flex justify-center items-center gap-3'>
                        <span className='flex flex-col items-center justify-center gap-2 bg-[#C8FEA8] font-bold p-8 rounded-2xl'>
                            <p>{deliveredOrders || 0}</p>
                            <p>الطلبات المستلمة</p>
                        </span>
                        <span className='flex flex-col items-center justify-center gap-2 bg-[#FEA8A8] font-bold p-8 rounded-2xl'>
                            <p>{cancelledOrders || 0}</p>
                            <p>الطلبات الملغية</p>
                        </span>
                        <span className='flex flex-col items-center justify-center gap-2 bg-[#A8CFFE] font-bold p-8 rounded-2xl'>
                            <p>{returnedOrders || 0}</p>
                            <p>الطلبات المرتجعة</p>
                        </span>
                        <span className='flex flex-col items-center justify-center gap-2 bg-[#FEF5A8] font-bold p-8 rounded-2xl'>
                            <p>{pendingOrders || 0}</p>
                            <p>الطلبات المعلقة</p>
                        </span>
                    </div>
                    {
                        client.status === 'active' ?
                        <div className='flex flex-col items-center gap-3 text-white select-none cursor-pointer' onClick={() => handleChangeClientSuatus('archived')}>
                            <Image src={block} alt="block" className="w-[30px] h-[30px]" />
                            <p>حظر المستخدم</p>
                        </div>
                    :    
                        <div className='flex flex-col items-center gap-3 text-white select-none cursor-pointer' onClick={() => handleChangeClientSuatus('active')}>
                            <Image src={block} alt="block" className="w-[30px] h-[30px]" />
                            <p>فك حظر المستخدم</p>
                        </div>
                    }
                </div>
                <div className='w-full h-full pb-72 flex flex-col justify-center items-center gap-20'>
                    <span className='flex justify-center items-center gap-20'>
                        <p className={`${mood === 'details' ? 'text-[#00B6A9] border-b-4 border-b-[#00B6A9] rounded-r-sm rounded-l-sm' : 'text-[#6C6C6C]'} cursor-pointer select-none text-lg`} onClick={() => setMood('details')}>بيانات العميل</p>
                        <p className={`${mood === 'ordersHistory' ? 'text-[#00B6A9] border-b-4 border-b-[#00B6A9] rounded-r-sm rounded-l-sm' : 'text-[#6C6C6C]'} cursor-pointer select-none text-lg`} onClick={() => setMood('ordersHistory')}>سجل المشتريات</p>
                    </span>
                    {mood === 'details' &&
                        <div className='w-full flex flex-col justify-center items-center gap-10'>
                            <div className='w-[65%] flex items-center justify-center gap-8'>
                                <div className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                                    <span className='absolute right-0 h-full w-1/5 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>الإسم</span>
                                    <span className='text-center outline-none'>{client.first_name + " " + client.last_name}</span>
                                </div>
                                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                                    <span className='absolute right-0 h-full w-1/5 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>الجوال</span>
                                    <span className='text-center'>{client.mobile}</span>
                                </div>
                            </div>
                            <div className='w-[65%] flex items-center justify-center gap-8'>
                                <div className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                                    <span className='absolute right-0 h-full w-1/5 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>البريد الإلكتروني</span>
                                    <span className='text-center outline-none'>{client.email}</span>
                                </div>
                                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                                    <span className='absolute right-0 h-full w-1/5 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>النوع</span>
                                    <span className='text-center'>{client.gender === 'male' ? 'ذكر' : 'أنثى'}</span>
                                </div>
                            </div>
                            <div className='w-[65%] flex items-center justify-center gap-8'>
                                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                                    <span className='absolute right-0 h-full w-1/5 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>تاريخ الميلاد</span>
                                    <span className='text-center outline-none'>{client.date_of_birth}</span>
                                </div>
                                <div dir="ltr" className='relative flex justify-center items-center gap-5 rounded-3xl p-2 w-full bg-[#8AD0C3] shadow-xl'>
                                    <span className='absolute right-0 h-full w-1/5 flex justify-center items-center text-xs text-black rounded-3xl bg-white'>تاريخ الإنضمام</span>
                                    <span className='text-center'>{client.created_at}</span>
                                </div>
                            </div>
                        </div>
                    }
                    {mood === 'ordersHistory' &&
                        <div className='w-full h-full p-10 flex flex-col justify-center items-center gap-14'>
                            <div className='grid grid-cols-4 gap-10 w-full'>
                                <div className={`p-3 w-[100%] h-[55px] cursor-pointer ${orderType === 'all' && 'shadow-lg'} select-none flex items-center justify-start gap-3 rounded-3xl bg-[#FEF5A8]`} onClick={() => setOrderType('pending')}>
                                    <Image src={timer} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                                    <p className='text-lg'>طلبات قيد المراجعة</p>
                                </div>
                                <div className={`p-3 w-[100%] h-[55px] cursor-pointer ${orderType === 'shipping' && 'shadow-lg'} select-none flex items-center justify-start gap-3 rounded-3xl bg-[#F2FEA8]`} onClick={() => setOrderType('shipping')}>
                                    <Image src={shipping} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                                    <p className='text-lg'>طلبات قيد الشحن</p>
                                </div>
                                <div className={`p-3 w-[100%] h-[55px] cursor-pointer ${orderType === 'delivered' && 'shadow-lg'} select-none flex items-center justify-start gap-3 rounded-3xl bg-[#C9FEA8]`} onClick={() => setOrderType('delivered')}>
                                    <Image src={boxTick} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                                    <p className='text-lg'>طلبات تم تسليمها</p>
                                </div>
                                <div className={`p-3 w-[100%] h-[55px] cursor-pointer ${orderType === 'completed' && 'shadow-lg'} select-none flex items-center justify-start gap-3 rounded-3xl bg-[#A8FEC0]`} onClick={() => setOrderType('completed')}>
                                    <Image src={tickCircle} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                                    <p className='text-lg'>طلبات منجزة</p>
                                </div>
                                <div className={`p-3 w-[100%] h-[55px] cursor-pointer ${orderType === 'canceled' && 'shadow-lg'} select-none flex items-center justify-start gap-3 rounded-3xl bg-[#FEA8A8]`} onClick={() => setOrderType('canceled')}>
                                    <Image src={boxRemove} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                                    <p className='text-lg'>طلبات ملغية</p>
                                </div>
                                <div className={`p-3 w-[100%] h-[55px] cursor-pointer ${orderType === 'returned' && 'shadow-lg'} select-none flex items-center justify-start gap-3 rounded-3xl bg-[#A8CFFE]`} onClick={() => setOrderType('returned')}>
                                    <Image src={rotate} alt='timer' className='w-[40px] h-[40px] bg-white p-2 rounded-3xl' />
                                    <p className='text-lg'>طلبات مرتجعة</p>
                                </div>
                            </div>
                            <div className="relative w-3/4 mb-6">
                                <input
                                    type="text"
                                    placeholder="بحث عن منتج"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="p-2 placeholder:pr-2 placeholder:text-sm w-full shadow-md rounded-full outline-none"
                                />
                                <FontAwesomeIcon icon={faSearch} className="w-[16px] h-[16px] text-gray-300 absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                            </div>
                            <div className='w-3/4 flex flex-col justify-center items-center gap-4'>
                                {
                                    filteredOrders && filteredOrders.length > 0 ?
                                        filteredOrders.map((order) => (
                                            <div key={order.id} className='w-full flex flex-col items-start gap-2'>
                                                <h2 className='ml-auto font-semibold mt-5 mb-1'>{order.created_at}</h2>
                                                {
                                                    order.orderitems && order.orderitems.length > 0 &&
                                                    order.orderitems.map((item, i) => (
                                                        <div key={i} className='w-full flex justify-around items-center gap-36 p-4 border-[1px] border-[#F1F1F1] rounded-3xl text-base'>
                                                            <span className='flex items-center gap-2'>
                                                                <Image src={item.color_image} alt={item.product.name} width={70} height={70} className='w-[45px] h-[45px]' />
                                                                <p>{item.product.name}</p>
                                                            </span>
                                                            <span className='flex justify- items-start gap-5'>
                                                                <span className='flex flex-col justify-center items-center gap-5'>
                                                                    <p>الكمية</p>
                                                                    <p>{item.quantity}</p>
                                                                </span>
                                                                <span className='flex flex-col justify-center items-center gap-5'>
                                                                    <p>اللون</p>
                                                                    <span className='rounded-full p-1 w-6 h-6' style={{ background: item.product.colors[0].color_code }} />
                                                                </span>
                                                                <span className='flex flex-col justify-center items-center gap-5'>
                                                                    <p>المقاس</p>
                                                                    <span className='p-2 text-sm text-white rounded-md bg-[#00B6A9]'>
                                                                        {item.size_code}
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <p>{item.total} ر.س</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                        : <p>لا توجد بيانات لعرضها</p>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Wrapper>
    );
};

export default Client;

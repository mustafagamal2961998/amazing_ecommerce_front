'use client';

import Wrapper from "../Wrapper";
import searchIcon from '../../../assets/dashboard/search.svg';
import addIcon from '../../../assets/dashboard/plus.svg';
import chevronsLeft from '../../../assets/dashboard/chevrons-left.svg';
import userIcon from '../../../assets/dashboard/userIcon.svg';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GET_DATA } from "../../../Utils/Data/getData";
import { GET_CLIENTS } from "../../../Utils/APIs";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      const data = await GET_DATA(GET_CLIENTS);
      setClients(data);
      setFilteredClients(data); // Initialize with all clients
    };

    fetchClients();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const lowercasedTerm = term.toLowerCase();
    const filtered = clients.filter(client => {
      const fullName = `${client.first_name} ${client.last_name}`.toLowerCase();
      return (
        fullName.includes(lowercasedTerm) ||
        client.email.toLowerCase().includes(lowercasedTerm) ||
        client.mobile.includes(lowercasedTerm)
      );
    });
    setFilteredClients(filtered);
  };

  return (
    <Wrapper>
      <div className='w-full flex flex-col items-start gap-5'>
        <p className='font-bold'>العملاء</p>
        <div className='w-full flex justify-between items-center'>
          <div className='relative w-2/5'>
            <input
              type='text'
              placeholder='بحث'
              className='w-full outline-none shadow shadow-[] p-2 rounded-3xl'
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Image src={searchIcon} alt='search' className='w-[16px] h-[16px] absolute left-5 top-2/4 -translate-y-2/4 -translate-x-2/4' />
          </div>
          <span className='flex justify-center items-center gap-2 pt-2 pb-2 pr-8 pl-8 bg-[#00B6A9] text-white rounded-3xl cursor-pointer'>
            <Image src={addIcon} alt='add' className='w-[16px] h-[16px]' />
            <p className='text-sm'>إضافة عميل جديد</p>
          </span>
        </div>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden rounded-3xl border-[1px] border-neutral-200">
            <table className="min-w-full text-center text-sm font-normal text-surface text-white">
              <thead className="border-b border-neutral-200 bg-gradient-to-br from-[#8AD0C3] to-[#00B6A9]">
                <tr>
                  <th className="px-6 py-4 font-normal">الإسم</th>
                  <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">البريد الإلكتروني</th>
                  <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">الجوال</th>
                  <th className="px-6 py-4 font-normal border-[1px] border-[#F1F1F1]">تاريخ الإنضمام</th>
                  <th className="px-6 py-4 font-normal border-r-[1px] border-[#F1F1F1]">الملف الشخصي</th>
                </tr>
              </thead>
              <tbody className="text-black border-[1px] border-[#F1F1F1] p-3">
                {filteredClients.map((client, i) => (
                  <tr key={client.id} className="text-center border-b-[1px] border-[#F1F1F1]">
                    <td className="whitespace-nowrap border-l-[1px] border-[#F1F1F1]">
                      <div className="flex justify-start items-center gap-2 p-3">
                        <p className='text-base'>{i + 1}</p>
                        <Image src={client.avatar} width={200} height={200} alt={client.first_name + " " + client.last_name} className="w-[40px] h-[40px] rounded-full" />
                        <span className="flex flex-col items-start gap-1">
                          <p className="text-md font-medium">{client.first_name + " " + client.last_name}</p>
                          <p className="text-[#BFBFBF]">#{client.id}</p>
                        </span>
                      </div>
                    </td>
                    <td className='text-base border-l-[1px] border-[#F1F1F1]'>{client.email}</td>
                    <td className='whitespace-nowrap border-l-[1px] border-[#F1F1F1]' dir="ltr">{client.mobile}</td>
                    <td className="p-5 border-l-[1px] border-[#F1F1F1]" dir="ltr">{client.created_at}</td>
                    <td className='border-l-[1px] border-[#F1F1F1]'>
                      <Link href={`/dashboard/clients/${client.id}`} className='w-fit rounded-3xl bg-[#00B6A9] text-white flex justify-center items-center gap-2 m-auto'>
                        <span className='w-[20px] h-[20px] rounded-full bg-white relative mr-2'>
                          <Image src={userIcon} alt={client.first_name + " " + client.last_name} className="w-[20px] h-[20px] absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
                        </span>
                        <p>تفاصيل الملف</p>
                        <Image src={chevronsLeft} alt="chevronsLeft" className="w-[30px] h-[30px]" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Clients;

'use client'

import Image from "next/image";
import { useState } from "react"
import contactUs from '../../assets/chat/contactUs.svg'
import womanModel from '../../assets/chat/womanModel.svg'
import manModel from '../../assets/chat/manModel.svg'
import send from '../../assets/chat/send.svg'
import closeChat from '../../assets/chat/closeChat.svg'
import minimizeChat from '../../assets/chat/minimizeChat.svg'
import attachFile from '../../assets/chat/attachFile.svg'
import attachMedia from '../../assets/chat/attachMedia.svg'
import connectaionError from '../../assets/chat/connectaionError.svg'
import connectionRestored from '../../assets/chat/connectionRestored.svg'
import user from '../../assets/chat/user.svg'
import companyLogo from '../../assets/chat/companyLogo.svg'
import handshake from '../../assets/chat/handshake.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const ContactUs = () => {
    
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [startChat, setStartChat] = useState(false);
    const [conversationEvaluation, setConversationEvaluation] = useState(false);
    const [connectaionStatus, setConnectaionStatus] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [warningMsg, setWarningMsg] = useState(null);

    const [rating, setRating] = useState(4);

    const handleStarClick = (value) => {
      setRating(value);
    };

    const handleClose = () => {
        if(conversationEvaluation) {
            setIsChatOpen(false);
            setConversationEvaluation(false);
            setStartChat(false);
        }
        if(!conversationEvaluation) {
            setConversationEvaluation(true);
            setStartChat(false);
        }
    }

    const pathname = usePathname();
    
    if(pathname.startsWith('/dashboard')) {
        return(
            null
        )
    }

  return (
    <div className='fixed bottom-2 left-5'>
        {isChatOpen ?
            <div className='flex flex-col items-center gap-10 px-5 py-12 pb-2 rounded-2xl bg-white shadow-2xl'>
        {startChat ? 
            <div className='flex flex-col gap-5'>
                <div className='w-full p-2 flex justify-between items-center border-b-[1px] border-[#EDEFF1]'>
                    <span className="flex items-center gap-2">
                        <Image src={closeChat} alt='close chat' className='w-8 h-8 cursor-pointer ml-auto -mt-8' onClick={handleClose} />
                        <Image src={minimizeChat} alt='minimize chat' className='w-8 h-8 cursor-pointer ml-auto -mt-8' onClick={() => setStartChat(false)} />
                    </span>
                    <span className="flex items-center gap-2 -mt-7">
                        <p className='font-bold text-[#00B6A9]'>
                            خدمة عملاء خلابة
                        </p>
                        <Image src={manModel} alt='model'/>
                    </span>
                </div>
                {conversationEvaluation ?
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <Image src={companyLogo} alt='company logo' className='w-48' />
                        <Image src={handshake} alt='handshake' className='w-48' />
                        <p className='font-bold'>
                            الرجاء تقييم المحادثة مع خدمة العملاء
                        </p>
                        <span className='flex flex-row-reverse justify-center items-center gap-2'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon
                                key={star}
                                icon={faStar}
                                className={`w-full cursor-pointer duration-200 ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => handleStarClick(star)}
                                />
                            ))}
                        </span>
                        <p>
                            هل ترغب في كتابة تعليق
                        </p>
                        <input type='text' className='w-full min-h-24 p-5 outline-none rounded-3xl bg-[#EBEBEB] shadow-inner' placeholder='اكتب تعليق' />
                        <input type='submit' value='أرسل تقييمك' className='w-2/4 max-md:w-2/4 p-2 bg-[#34C759] shadow-xl rounded-tr-full rounded-bl-full text-center font-bold cursor-pointer' />
                    </div>
                :
                <>
                    {!connectaionStatus && <p className='text-[#FF0209]'>هذه المحادثة قد تكون مسجلة حرصا منا على تقديم خدمة أفضل</p>}
                    {connectaionStatus === 'not stable' && 
                        <span className='p-2 shadow-lg flex justify-center items-center gap-2 bg-[#FF9500] rounded-2xl'>
                            <p dir='ltr'>Lost connection. Trying to reconnect...</p>
                            <Image src={connectaionError} alt='connectaion error' className='w-8 h-8' />
                        </span>
                    }
                    {connectaionStatus === 'ok' && 
                        <span className='p-2 shadow-lg flex justify-center items-center gap-2 bg-[#34C759] rounded-2xl'>
                            <p dir='ltr' className='text-white'>Connection Restored</p>
                            <Image src={connectionRestored} alt='connectaion restored' className='w-8 h-8' />
                        </span>
                    }
                    <div className='w-full flex items-start gap-1'>
                        <Image src={manModel} alt='model' className='w-8 h-8 rounded-full' />
                        <span className='w-full p-3 bg-[#00B6A98A] rounded-2xl rounded-tr-none flex justify-start'>
                            <p className='font-bold text-sm'>
                                السلام عليكم
                                <br />
                                مرحباً بكم في خدمة عملاء خلابة. يسعدني تقديم المساعدة لكم
                            </p>
                        </span>
                    </div>
                    <div className='w-full mr-auto flex items-start gap-1'>
                        <span className='w-full p-3 bg-[#C1C1C191] rounded-2xl rounded-tl-none flex justify-start'>
                            <p className='font-bold text-sm'>
                                عاوز  أرجع بنطلون علشان طلع قصير
                            </p>
                        </span>
                        <Image src={user} alt='user' className='w-8 h-8 rounded-full' />
                    </div>
                    {errMsg && 
                        <span className='p-2 shadow-lg flex justify-center items-center gap-2 bg-[#FF0209] mt-12 rounded-2xl'>
                            <p className='text-white'>{errMsg}</p>
                        </span>
                    }
                    {warningMsg && 
                        <span className='p-2 shadow-lg flex justify-center items-center gap-2 bg-[#6A0808] mt-12 rounded-2xl'>
                            <p className='text-white'>{warningMsg}</p>
                        </span>
                    }
                    <div className='w-full flex items-center gap-3'>
                        <span className='w-fit p-3 flex justify-center items-center shadow-lg bg-[#EDEFF1] rounded-2xl'>
                            <Image dir='ltr' src={send} alt='send' className='w-8 h-8 rotate-180 cursor-pointer' />
                        </span>
                        <span className='w-full relative'>
                            <input dir='ltr' type='text' className='outline-none w-full p-5 rounded-xl bg-[#F2F2F2] shadow-inner placeholder:text-[#8A8989]' placeholder='Type Message...' />
                            <span className='absolute -right-4 top-2/4 -translate-y-2/4 -translate-x-2/4 flex items-center justify-center gap-1'>
                                <Image src={attachMedia} alt='attach media' className='w-6 h-6 cursor-pointer' />
                                <Image src={attachFile} alt='attach file' className='w-6 h-6 cursor-pointer' />
                            </span>
                        </span>
                    </div>
                </>
                }
            </div>
        :
            <>
                <Image src={closeChat} alt='close chat' className='w-8 h-8 cursor-pointer ml-auto -mt-8' onClick={handleClose} />
                <div className='p-2 bg-[#D9D9D9B5] flex flex-col justify-center items-center gap-2 rounded-3xl shadow-xl'>
                    <h2 className='text-2xl max-md:text-base font-bold text-[#00B6A9]'>
                        مرحبا
                    </h2>
                    <p className='text-[#00B6A9] text-sm font-bold'>
                        أهلاً بكم في خدمة عملاء خلابة
                    </p>
                    <p className='text-[#00B6A9] text-sm font-bold'>
                        يسعدنا تقديم المساعدة لكم في أي وقت
                    </p>
                    <Image src={womanModel} alt='model' className='mt-auto -mb-2 w-3/4' />
                </div>
                <div className='cursor-pointer flex justify-center items-center px-8 py-2 rounded-full bg-[#D9D9D9B5] shadow-2xl' onClick={() => setStartChat(true)}>
                    <p className='font-bold text-[#00B6A9]'>
                        اضغط هنا لبدء المحادثة
                    </p>
                    <Image src={send} alt='start chat' className='w-6 h-6 mr-5' />
                </div>
            </>
        }
            </div>
            :
            <div className='cursor-pointer flex items-center gap-2' onClick={() => setIsChatOpen(!isChatOpen)}>
                <span className='w-full p-2 bg-[#00B6A9] flex justify-center items-center rounded-r-full shadow-xl'>
                    <p className='font-bold text-white'>
                        تحدث معانا  
                    </p>
                </span>
                <Image src={contactUs} alt='contact us' className='w-24' />
            </div>
        }
    </div>
  )
}

export default ContactUs

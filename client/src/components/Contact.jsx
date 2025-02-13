import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assests/message.png";
import "../css_styles/index.css";
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function Contact() {
    return (
        <div className='contact bg-gray-200 rounded-sm flex justify-between items-center
        lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%]
        lg:flex-row md:flex-col sm:flex-col flex-col
        pt-20 lg:p-4'>
            <div className="image mb-5 text-center md:w-full sm:w-full lg:w-1/4 flex justify-center items-center flex-col md:relative md:after:bottom-0 md:after:left-0 md:after:bg-zinc-700 md:after:w-4/5 md:after:h-0.5 sm:after:block md:after:block after:hidden">
                <div className=''></div>
                <img src={Logo} className="w-[150px] animate-bounce" alt="Logo" />
                <h4 className='text-sm text-zinc-700'>Feedbacks ...</h4>
            </div>
            <div className="contact_info relative after:absolute after:bg-zinc-800
                after:w-[2px] after:h-[100%] after:top-0 after:left-[-40px] w-[100%] lg:w-[70%] md:w-[100%] sm:w-[100%] p-3">
                <div className="inputs">
                        <div className="name flex justify-between items-center flex-col lg:flex-row md:flex-col sm:flex-col">
                            <input required className='text-zinc-700 w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] mb-6 p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='fname..'/>
                            <input required className='text-zinc-700 w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] mb-6 p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='lname..'/>
                        </div>
                        <div className="email_phone flex justify-between items-center flex-col lg:flex-row md:flex-col sm:flex-col">
                            <input required className='text-zinc-700 w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] mb-6 p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="email" placeholder='email..'/>
                            <input required className='text-zinc-700 w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] mb-6 p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='phone number...'/>
                        </div>
                        <div className="feedback w-[100%] mb-6">
                            <textarea className='p-2 border-2 border-b-yellow-500 border-solid rounded-sm w-[100%] h-[100px] outline-none' name="" id="" placeholder='messages...'></textarea>
                        </div>
                </div>
                <div className="btns flex  flex-col">
                    <button className='p-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700 transition-all rounded-sm bg-yellow-500 
                    md:w-[100%] sm:w-[100%] lg:w-[50%]  w-[100%] mb-3'>
                        <span className='mr-2'>Send</span>
                    </button>
                    <button className='p-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700 transition-all rounded-sm bg-yellow-500 
                    md:w-[100%] sm:w-[100%] lg:w-[50%]  w-[100%]'>Go As Admin</button>
                </div>
            </div>
        </div>
    );
}


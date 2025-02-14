import React, { useEffect, useState } from 'react';
import { Link, useFetcher } from "react-router-dom";
import Logo from "../assests/message.png";
import "../css_styles/index.css";
import ReactDOM from 'react-dom'
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";


// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    const [id, setId] = useState(0);
    const handleSending = () => {
        let fname = document.querySelector("input.fname");
        let lname = document.querySelector("input.lname");
        let email = document.querySelector("input.email");
        let phone_number = document.querySelector("input.phone_number");
        let message = document.querySelector("textarea.message");
        let error_sending_ele = document.querySelector(".error_sending");

        let group_ele = [fname, lname, email, phone_number, message];
        let errors_messages = ["first name", "last name", "email", "phone number", "message"];
        let valid_messages = ["first name", "last name", "email", "phone number", "message"];
        let check = 1;
        for (let i = 0; i < group_ele.length; i++) {
            if (group_ele[i].value === '') {
                let error_ele = group_ele[i].nextElementSibling;
                error_ele.textContent = "invalid " + errors_messages[i];
                error_ele.classList.add("showMessage");
                group_ele[i].classList.add("error_border");
                check--;
            } else {
                let error_ele = group_ele[i].nextElementSibling;
                error_ele.textContent = "valid " + valid_messages[i];
                error_ele.classList.add("valideMessage");
                group_ele[i].classList.add("valid_border");
            }
        }

        if (check === 1) {
            let send_btn = document.querySelector(".send_btn");
            send_btn.textContent = "sending...";
            send_btn.classList.add("sending");
            setTimeout(() => {
                send_btn.textContent = "send";
                send_btn.classList.remove("sending");
                console.log(group_ele);
                for (let i = 0; i < group_ele.length; i++) {
                    group_ele[i].nextElementSibling.textContent = "";
                    group_ele[i].nextElementSibling.classList.remove("showMessage");
                    group_ele[i].nextElementSibling.classList.remove("valideMessage");
                    group_ele[i].classList.remove("error_border");
                    group_ele[i].classList.remove("valid_border");
                }
            }, 2000);

            // Send The Data With Axios
            const SendingData = {
                id: id,
                full_name: fname.value + lname.value,
                email: email.value,
                phone_number: message.value
            }
            console.log(SendingData);
            // Send Data To Database With Axios
            try {
                axios.post("http://127.0.0.1:3001/postUser", SendingData)
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                }).catch((err) => {
                    console.log("❌ Can Not Send This Message" + err);
                });
            } catch (error) {
                error_sending_ele.classList.add("block");
                error_sending_ele.classList.remove("hidden");
            }
        }
    }
    useEffect(() => {
        AOS.init();
    });
    return (
        <div className='contact bg-gray-200 rounded-sm flex justify-between items-center
        lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%]
        lg:flex-row md:flex-col sm:flex-col flex-col
        pt-20 lg:p-4'>
            <div data-aos="fade-up" className="image mb-5 text-center md:w-[100%] sm:w-[100%] lg:w-[25%]  flex justify-center items-center flex-col
            ">
                <div className=''></div>
                <img src={Logo} className="w-[150px] animate-bounce" alt="Logo" />
                <h4 className='text-sm text-zinc-700'>Feedbacks ...</h4>
            </div> 
            <div className="contact_info relative after:absolute after:bg-zinc-800
                after:w-[2px] after:h-[100%] after:top-0 after:left-[-40px] w-[100%] lg:w-[70%] md:w-[100%] sm:w-[100%] p-3">
                <div className="error_sending text-red-800 hidden">can not send this message</div>
                <div className="inputs">
                    <div className="name flex justify-between items-start flex-col lg:flex-row mt-4 md:flex-col sm:flex-col">
                        <div className="fname w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] sm:mb-3 lg:mb-0 md:mb-3 mb-3">
                            <input required className='fname mb-1 text-zinc-700 w-[100%] p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='fname..'/>
                            <p className="h-[20px] invisible error_ele"></p>
                        </div>
                        <div className="lname w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] mb-0">
                            <input required className='lname mb-1 text-zinc-700 w-[100%] p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='lname..'/>
                            <p className="h-[20px] invisible error_ele"></p>
                        </div>
                    </div>
                    <div className="email_phone flex justify-between items-start flex-col lg:flex-row mt-4 md:flex-col sm:flex-col">
                        <div className="email w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] sm:mb-3 lg:mb-0 md:mb-3 mb-3">
                            <input required className='email mb-1 text-zinc-700 w-[100%] p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='email..'/>
                            <p className="h-[20px] invisible error_ele"></p>
                        </div>
                        <div className="phone_number w-[100%] md:w-100%] sm:w-[100%] lg:w-[47%] mb-0">
                            <input required className='phone_number mb-1 text-zinc-700 w-[100%] p-2 text-start text-sm rounded-sm border-2 border-b-yellow-500 border-solid outline-none' type="text" placeholder='phone number..'/>
                            <p className="h-[20px] invisible error_ele"></p>
                        </div>
                    </div>
                    <div className="feedback w-[100%] mb-8 mt-4">
                        <textarea className='message text-zinc-700 p-2 border-2 border-b-yellow-500 border-solid rounded-sm w-[100%] h-[100px] outline-none' name="" id="" placeholder='messages...'></textarea>
                        <p className="h-[20px] invisible error_ele"></p>
                    </div>
                </div>
                <div className="btns flex  flex-col">
                    <button data-aos="fade-up" onClick={() => handleSending()} className='send_btn p-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700 transition-all rounded-sm bg-yellow-500 
                    md:w-[100%] sm:w-[100%] lg:w-[50%]  w-[100%] mb-3'>
                        <span className='mr-2'>Send</span>
                     </button>
                    <Link to="/feedbacks">
                        <button data-aos="fade-up" className='p-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700 transition-all rounded-sm bg-yellow-500 
                        md:w-[100%] sm:w-[100%] lg:w-[50%]  w-[100%]'>Go As Admin</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


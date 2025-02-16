import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feedback() {
    const [users, setUsers] = useState([]);
    const [filtredUsers, setfiltredUsers] = useState([]);
    useEffect(() => {
        async function GetUsers() {
            await axios.get("http://127.0.0.1:3001/getUsers").then(async (res) => {
                const data_users = await res.data;
                setUsers(data_users);
                setfiltredUsers(data_users);
            });
        }
        GetUsers();
    }, []);
    const SetId = () => {
        users.map((user, index) => user.id = index);
        setfiltredUsers(users);
    }
    useEffect(() => {
        // Handle Delete User
        document.addEventListener("click", function(event) {
            if (event.target.classList.contains("delete")) {
                const idOfDeletedEle = event.target.parentElement.parentElement.firstElementChild.textContent;
                const userIndex = Number(idOfDeletedEle);
                if (users[userIndex]) {
                    console.log(users[userIndex]._id);
                    // Delete From Satates
                    setUsers(users.filter((user) => user.id !== userIndex));
                    setfiltredUsers(filtredUsers.filter((user) => user.id !== userIndex));
                    // Delete From DB
                    axios.delete(`http://127.0.0.1:3001/deleteUser/${users[userIndex]._id}`).then(async (res) => {
                        console.log(res);
                    });
                    // Set The If Of All Elements
                    SetId();
                } else {
                    console.error("Invalid user index", userIndex);
                }
            }
        });
    }, [users]);
    const handleGetAllUsers = () => {
        setfiltredUsers(users);
    }
    const handleFiltering = () => {
        const select_filter_type = document.querySelector(".select_filter_type");
        const input_value = document.querySelector(".input_value");
        const filter_type = select_filter_type.value;
        const input_value_searched = input_value.value;
        switch (filter_type) {
            case "email": {
                const EmailUsers = users.filter((user) => user.email.includes(input_value_searched) === true);
                setfiltredUsers(EmailUsers);
                break;
            }
            case "phone_number": {
                const Phone_NumberUsers = users.filter((user) => user.phone_number.includes(input_value_searched) === true);
                setfiltredUsers(Phone_NumberUsers);
                break;
            }
            case "full_name": {
                const FullNameUsers = users.filter((user) => user.full_name.includes(input_value_searched) === true);
                setfiltredUsers(FullNameUsers);
                break;
            }
            default:
                break;
        }
    }
    
    return (
        <div className='feedback p-10 bg-gray-200 w-[100%] lg:w-[80%] md:w-[100%] sm:w-[100%]'>
            <div className="inputs flex justify-between items-center border-solid border-b-yellow-500 border-2">
            <select className='p-3 select_filter_type rounded-sm w-[25%] mb-2' name="" id="">
                <option value="email">Email</option>
                <option value="phone_number">phone number</option>
                <option value="full_name">full name</option>
            </select>
            <input onChange={() => handleFiltering()} className='input_value w-[70%] p-2 mb-2 rounded-sm outline-none' type="text" placeholder='filter ...' />
            </div>
            <div className="feedbacks rounded-sm-auto w-[100%] overflow-auto">
                <table className="w-full border mt-5 border-gray-300 bg-yellow-500 text-center">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                            <th className="p-2 border whitespace-nowrap">ID</th>
                            <th className="p-2 border whitespace-nowrap">Full Name</th>
                            <th className="p-2 border whitespace-nowrap">Email</th>
                            <th className="p-2 border whitespace-nowrap">Phone Number</th>
                            <th className="p-2 border whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody  className="bg-white">
                            {
                                filtredUsers.map((user, index) => {
                                    return(
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="p-2 border whitespace-nowrap">{user.id}</td>
                                            <td className="p-2 border whitespace-nowrap">{user.full_name}</td>
                                            <td className="p-2 border whitespace-nowrap">{user.email}</td>
                                            <td className="p-2 border whitespace-nowrap">{user.phone_number}</td>
                                            <td className="p-2 border whitespace-nowrap">
                                                <button className="bg-red-500 delete text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                </table>
            </div>
            <div className="btns mt-2">
                <button onClick={() => handleGetAllUsers()} className='p-2 my-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700
                    transition-all rounded-sm bg-yellow-500 mr-2'>Get All Users</button>
                <Link to="/">
                    <button className='p-2 my-2 text-white border-b-4 border-gray-900 hover:bg-gray-800
                    transition-all rounded-sm bg-gray-700'>Go To Home</button>
                </Link>
            </div>
        </div>
    );
}

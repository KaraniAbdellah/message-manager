import React from 'react'
import { Link } from "react-router-dom";
import {useEffect} from "react-dom";


export default function Feedback() {

  return (
    <div className='feedback p-10 bg-gray-200 w-[100%] lg:w-[80%] md:w-[100%] sm:w-[100%]'>
        <div className="inputs flex justify-between items-center border-solid border-b-yellow-500 border-2">
          <select className='p-3 rounded-sm w-[25%] mb-2' name="" id="">
            <option value="email">Email</option>
            <option value="phone number">phone number</option>
            <option value="full name">full name</option>
          </select>
          <input className='w-[70%] p-2 mb-2 rounded-sm outline-none' type="text" placeholder='filter ...' />
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
                        <tr className="hover:bg-gray-100">
                        <td className="p-2 border whitespace-nowrap">1</td>
                        <td className="p-2 border whitespace-nowrap">John Doe</td>
                        <td className="p-2 border whitespace-nowrap">johndoe@example.com</td>
                        <td className="p-2 border whitespace-nowrap">+1234567890</td>
                        <td className="p-2 border whitespace-nowrap">
                            <button className="bg-red-500 delete text-white px-3 py-1 rounded hover:bg-red-700" onclick="this.closest('tr').remove()">Delete</button>
                        </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                        <td className="p-2 border whitespace-nowrap">2</td>
                        <td className="p-2 border whitespace-nowrap">Jane Smith</td>
                        <td className="p-2 border whitespace-nowrap">janesmith@example.com</td>
                        <td className="p-2 border whitespace-nowrap">+0987654321</td>
                        <td className="p-2 border whitespace-nowrap">
                            <button className="bg-red-500 delete text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                        </td>
                        </tr>
                    </tbody>
            </table>
        </div>

        <div className="btns mt-2">
            <button className='p-2 my-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700
                transition-all rounded-sm bg-yellow-500 mr-2'>Get All Data</button>
            <Link to="/">
                <button className='p-2 my-2 text-white border-b-4 border-gray-900 hover:bg-gray-800
                transition-all rounded-sm bg-gray-700'>Go To Home</button>
            </Link>
        </div>
    </div>
  );
}

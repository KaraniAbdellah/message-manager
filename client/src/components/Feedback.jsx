import React from 'react'
import { Link } from "react-router-dom";

export default function Feedback() {
  return (
    <div className='feedback p-10 bg-gray-200'>
        <div className="inputs flex justify-between items-center border-solid border-b-yellow-500 border-2">
          <select className='p-2 rounded-sm w-[30%] mb-2' name="" id="">
            <option value="email">Email</option>
            <option value="phone number">phone number</option>
            <option value="full name">full name</option>
          </select>
          <input className='w-[65%] p-2 mb-2 rounded-sm outline-none' type="text" placeholder='filter ...' />
        </div>
        <div className="feedbacks">
          <table class="w-full border my-5 border-gray-300 bg-yellow-500 text-center">
            <thead class="bg-gray-700 text-white">
              <tr>
                <th class="p-2 border">Full Name</th>
                <th class="p-2 border">Email</th>
                <th class="p-2 border">Phone Number</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="hover:bg-gray-100">
                <td class="p-2 border">John Doe</td>
                <td class="p-2 border">johndoe@example.com</td>
                <td class="p-2 border">+1234567890</td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="p-2 border">Jane Smith</td>
                <td class="p-2 border">janesmith@example.com</td>
                <td class="p-2 border">+0987654321</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="/">
            <button className='p-2 my-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700
            transition-all rounded-sm bg-yellow-500'>Go To Home</button>
        </Link>
    </div>
  );
}

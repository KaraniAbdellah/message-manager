import React from 'react'
import { Link } from "react-router-dom";

export default function Feedback() {
  return (
    <div className='feedback bg-red-800 p-10'>
        <h1>Feedback</h1>
        <Link to="/">
            <button className='p-2 text-white border-b-4 border-yellow-700 hover:bg-yellow-700
            transition-all rounded-sm bg-yellow-500'>Go As Admin</button>
        </Link>
    </div>
  );
}

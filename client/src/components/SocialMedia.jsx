import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";


function SocialMedia() {

  return (
    <ul data-aos="fade-up" className='justify-evenly items-center hidden lg:flex
    bottom-[30px] left-[20px] absolute  p-1 w-[200px] h-[60px] rounded-sm border-solid border-yellow-500 border-4 bg-gray-100'>
        <li className='flex justify-center items-center w-[30px] h-[30px] text-lg bg-white border-solid border-zinc-700 animate-[bounce_2s_cubic-bezier(0.25,1,0.5,1)_infinite] border-2 text-blue-500'>
            <a href="https://www.linkedin.com/in/abdellah-karani-965928294/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </li>
        <li className='flex justify-center items-center w-[30px] h-[30px] text-lg bg-white border-solid border-zinc-700 animate-[bounce_2s_cubic-bezier(0.25,1,0.5,1)_infinite] border-2 mx-2 text-zinc-700'>
            <a href="https://github.com/KaraniAbdellah"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </li>
        <li className='flex justify-center items-center w-[30px] h-[30px] text-lg bg-white border-solid border-zinc-700 animate-[bounce_2s_cubic-bezier(0.25,1,0.5,1)_infinite] border-2 text-blue-400'>
            <a href="https://x.com/karani66745"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
        </li>
    </ul>
  );
}

export default SocialMedia;


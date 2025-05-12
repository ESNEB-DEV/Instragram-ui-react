import React from 'react'
import { FaBuromobelexperte, FaRegMap, FaRegPlayCircle, FaVideo, FaUserFriends } from 'react-icons/fa'

function Toggle() {
    return (
        <div>
            <div className='border-t relative top-[20px]'></div>
            <ul className='flex flex-wrap justify-center my-[20px]'>
                <li className='mx-[30px] border-t border-black pt-[15px]'>
                    <a href="#" className='flex items-center'><FaBuromobelexperte className='mr-[6px]' />POSTS</a>
                </li>
                <li className='mx-[30px] pt-[15px]'>
                    <a href="#" className='flex items-center'><FaRegMap className='mr-[6px]' />GUIDES</a>
                </li>
                <li className='mx-[30px] pt-[15px]'>
                    <a href="#" className='flex items-center'><FaRegPlayCircle className='mr-[6px]' />RELLS</a>
                </li>
                <li className='mx-[30px] pt-[15px]'>
                    <a href="#" className='flex items-center'><FaVideo className='mr-[6px]' />VIDEO</a>
                </li>
                <li className='mx-[30px] pt-[15px]'>
                    <a href="#" className='flex items-center'><FaUserFriends className='mr-[6px]' />TAGGED</a>
                </li>

            </ul>
        </div>
    )
}

export default Toggle

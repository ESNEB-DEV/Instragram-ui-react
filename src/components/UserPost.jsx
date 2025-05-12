import React from 'react'
import post1 from '../assets/img/post1.png'
import post2 from '../assets/img/post2.png'
import post3 from '../assets/img/post3.png'
import post4 from '../assets/img/post4.png'
import post5 from '../assets/img/post5.png'
import post6 from '../assets/img/post6.png'

function UserPost() {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className='post-item'>
                <img src={post1} className='w-full' alt="post1" />
            </div>
            <div className='post-item'>
                <img src={post2} className='w-full' alt="post1" />
            </div>
            <div className='post-item'>
                <img src={post3} className='w-full' alt="post1" />
            </div>
            <div className='post-item'>
                <img src={post4} className='w-full' alt="post1" />
            </div>
            <div className='post-item'>
                <img src={post5} className='w-full' alt="post1" />
            </div>
            <div className='post-item'>
                <img src={post6} className='w-full' alt="post1" />
            </div>
        </div>
    )
}

export default UserPost

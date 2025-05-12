import React from 'react'
import StoryImg1 from '../assets/img/P1-stories.png'
import StoryImg2 from '../assets/img/P2-stories.png'
import StoryImg3 from '../assets/img/P3-stories.png'
import StoryImg4 from '../assets/img/P4-stories.png'

function Story() {
    return (
        <div>
            <ul className='flex text-center my-10 ml-[35px] flex-wrap'>
                <li className='mr-[30px] p-[10]'>
                    <img src={StoryImg1} className='w-16 md:w-16 lg:w-16  border-4 border-slate-100 rounded-full' alt="story-1" />
                    <p>Made Us</p>
                </li>
                <li className='mr-[30px] p-[10]'>
                    <img src={StoryImg2} className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' alt="story-2" />
                    <p>Made Us</p>
                </li>
                <li className='mr-[30px] p-[10]'>
                    <img src={StoryImg3} className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' alt="story-3" />
                    <p>Made Us</p>
                </li>
                <li className='mr-[30px] p-[10]'>
                    <img src={StoryImg4} className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' alt="story-4" />
                    <p>Made Us</p>
                </li>
            </ul>
        </div>

    )
}

export default Story

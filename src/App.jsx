import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserInfo from './components/UserInfo'
import Story from './components/Story'
import Toggle from './components/Toggle'
import UserPost from './components/UserPost'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full md:w-[60rem] lg:w-[60rem] mx-auto'>
        <UserInfo />
        <Story />
        <Toggle />
        <UserPost />
      </div>
    </>

  )
}

export default App

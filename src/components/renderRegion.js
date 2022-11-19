import React from 'react'
import Projects from './projects'
import '../css/item.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './aboutme'

export default function RenderRegion() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Navigate to={'/about_me'}/>}/>
        <Route path='about_me' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>

      </Routes>
    </div>
  )
}

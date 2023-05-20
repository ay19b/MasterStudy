import React from 'react'
import Logo from "../../images/logo_transparent.png"
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import "./header.css"


export default function Header() {
  return (
    <div className='navbar'>
      <div className='container'>
         <img src={Logo} className='logo'/>
         <div className='left'>
           <div className='item'>Courses</div>
           <div className='item'>Memberships</div>
           <div className='item'>Course Formats</div>
           <div className='item'>Add Course</div>
           <div className='item'>Demos</div>
           <div className='item'>Pages</div>
           <div className='item'>
             <AiOutlineHeart className='heart'/>
           </div>
           <div className='item'>
             <AiOutlineSearch className='search'/>
           </div>
         </div>       
      </div>
    </div>
  )
}

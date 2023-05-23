import React from 'react'
import Logo from "../../images/logo_transparent.png"
import logoResponsive from "../../images/logo-colored.png"
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import {BiMenu} from "react-icons/bi"
import "./header.css"
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Header() {
  const matches = useMediaQuery('(max-width:800px)');

  return (
    <div className='navbar'>
      <div className='container'>    
         <img src={!matches?Logo:logoResponsive} className='logo'/>
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
         <BiMenu className='menu'/>    
      </div>
    </div>
  )
}

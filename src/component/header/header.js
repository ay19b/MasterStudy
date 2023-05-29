import React, { useState ,useEffect} from 'react'
import Logo from "../../images/logo_transparent.png"
import logoResponsive from "../../images/logo-colored.png"
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import {BiMenu,BiChevronRight} from "react-icons/bi"
import "./header.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  const matches = useMediaQuery('(max-width:1040px)');
  const { dispatch } = useContext(MenuContext);
  const { menu } = useContext(MenuContext);
  const [open,setOpen]= useState(false);

  const clickSearch=()=>{
    setOpen(!open)
  }

  const handleSearchItemClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={!menu?'navbar':'navbar active'}>
      <div className='container'>    
         <img src={!matches?Logo:logoResponsive} className='logo'/>
         <div className='left'>
           <div className='item'><span>Courses</span><BiChevronRight className='arrow'/></div>
           <div className='item'><span>Memberships</span></div>
           <div className='item'><span>Course Formats</span><BiChevronRight className='arrow'/></div>
           <div className='item'><span>Add Course</span></div>
           <div className='item'><span>Demos</span><BiChevronRight className='arrow'/></div>
           <div className='item'><span>Pages</span><BiChevronRight className='arrow'/></div>
           <div className='item'>
             <AiOutlineHeart className='heart'/>
           </div>
           <div className='item'>
             <input placeholder='searach'/>
             <AiOutlineSearch className='search' onClick={clickSearch}/>
           </div>
         </div>   
         <BiMenu className='menu' onClick={() => dispatch({ type: "TOGGLE" })}/>    
      </div>
      <div className={open?'searchPage':'searchPageHidden'} onClick={clickSearch}>
          <div className='searchPart' onClick={handleSearchItemClick}>
             <h1>search</h1>  
             <div className='searchItem'>
                <input placeholder='Start typing here...'/>
                <AiOutlineSearch className='search'/>
              </div>   
          </div>
      </div>  
    </div>
  )
}

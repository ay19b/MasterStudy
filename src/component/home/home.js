import React from 'react'
import Header from '../header/header'
import {SlScreenDesktop} from "react-icons/sl"
import {BsTree} from "react-icons/bs"
import {AiOutlineCalculator} from "react-icons/ai"
import {TbBrandGoogleAnalytics} from "react-icons/tb"
import {GiMouse} from "react-icons/gi"
import "./home.css"

export default function Home() {
  return (
    // <div className='Home'>
      // <Header />
      <div className='hero'>
        <div className='content'>
          <h2>TAKE THE FIRST STEP </h2>
          <h1>TO KNOWLEDGE WITH US</h1>
          <button className='btn'>Ready to get Started ?</button>
        </div>
        <div className='carts'>
          <div className='cart' style={{backgroundColor:"#10c45c"}}>
            <SlScreenDesktop />
            <h2>Graphic & Web-design</h2>
          </div>
          <div className='cart' style={{backgroundColor:"#1ec1d9"}}>
            <BsTree />
            <h2>Environmental Sciences</h2>
          </div>
          <div className='cart' style={{backgroundColor:"#307ad5"}}>
            <AiOutlineCalculator />
            <h2>Economics & Finances</h2>
          </div>
          <div className='cart' style={{backgroundColor:"#eab830"}}>
            <TbBrandGoogleAnalytics />
            <h2>Analysis of Algorithms</h2>
          </div>
          <div className='cart' style={{backgroundColor:"#d94da6"}}>
            <GiMouse />
            <h2>Software Development</h2>
          </div>
        </div>
      </div>
    // </div>
  )
}

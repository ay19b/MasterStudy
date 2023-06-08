import React, { useEffect } from 'react';
import {SlScreenDesktop} from "react-icons/sl"
import {BsTree} from "react-icons/bs"
import {AiOutlineCalculator} from "react-icons/ai"
import {TbBrandGoogleAnalytics} from "react-icons/tb"
import {GiMouse} from "react-icons/gi"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../images/slide1-1919x793-1.jpg"

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div className='hero'>
        <LazyLoadImage 
          src={img}
          alt=""
          className='img'
      />
        <div className='content'>
        <div data-aos="fade-up" data-aos-duration="1200">
          <h2>TAKE THE FIRST STEP </h2>
          <h1>TO KNOWLEDGE WITH US</h1>
          <button className='btn'>Ready to get Started ?</button>
        </div>
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
  )
}

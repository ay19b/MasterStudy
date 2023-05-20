import React from 'react'
import "./footer.css"
import one from "../../images/Web-1-75x75.png"
import two from '../../images/Photographer-75x75.jpg'
import three from '../../images/old/3D-Concept-540x441.png'
import { MdLocationPin } from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs'
import {FaEnvelope,FaFax} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
       <div className='footer-content'>
          <div className='part'>
            <h5>About</h5>
            <p><span>Masterstudy</span> is Education WordPress theme featured by Learning Management System (LMS) for online education.
               Developed by <span>StylemixThemes</span>.
            </p>
            <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi at egestas magna.</p>
            <button>LEARNING NOW</button>
          </div>
          <div className='part'>
            <h5>Popular Courses</h5>
            <div className='footer-courses'>
                <div className='footer-course'>
                    <img src={one} />
                    <div className='dtl-course'>
                        <h3>Web Coding and Apache Basics theory</h3>
                        <span>By Demo Instructor</span>
                    </div>
                </div>
                <div className='footer-course'>
                    <img src={two} />
                    <div className='dtl-course'>
                        <h3>Fashion Photography from professional</h3>
                        <span>By Demo Instructor</span>
                    </div>
                </div>
                <div className='footer-course'>
                    <img src={three} />
                    <div className='dtl-course'>
                        <h3>Concept Art Printing on 3d Printer</h3>
                        <span>By Demo Instructor</span>
                    </div>
                </div>
            </div>
          </div>
          <div className='part'>
            <h5>Pages</h5>
            <div className='list-pages'>
                <div className='item-page'>
                    <h6>></h6>
                    <h5>About Us</h5>
                </div>
                <div className='item-page'>
                    <h6>></h6>
                    <h5>Blog</h5>
                </div>
                <div className='item-page'>
                    <h6>></h6>
                    <h5>Contact Us</h5>
                </div>
                <div className='item-page'>
                    <h6>></h6>
                    <h5>Shop</h5>
                </div>
                <div className='item-page'>
                    <h6>></h6>
                    <h5>Membership Plans</h5>
                </div>
            </div>
          </div>
          <div className='part'>
            <h5>Contact</h5>
            <div className='inf-contact'>
                <div className='item-contact'>
                    <MdLocationPin />
                    <h4>USA, Callifornia 20, First Avenue, Callifornia</h4>
                </div>
                <div className='item-contact'>
                    <BsTelephoneFill />
                    <h4>Tel.: +1 212 458 300 32</h4>
                </div>
                <div className='item-contact'>
                    <FaFax />
                    <h4>Fax: +1 212 375 24 14</h4>
                </div>
                <div className='item-contact'>
                    <FaEnvelope />
                    <h4>info@masterstudy.com</h4>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

import React from 'react'
import img from "../../images/featured__teacher.png"
import { New } from '../courses/data'
import Rating from '@mui/material/Rating';
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineUsers,HiOutlineEye} from "react-icons/hi"
import '../courses/courses.css'
import "./teacher.css"

export default function Teacher() {
  return (
    <div className='teacher'>
       <div className='teacher-content'>
         <button className='btn'>TEACHER OF MONTH</button>
         <div className='info-teacher'>
            <div className='item-teacher'>
               <h1>Colt Anand</h1>
               <h5>Teacher of Biology </h5>
               <p>It is a long established fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                  a more-or-less normal distribution of letters, as opposed to using 'Content here,
                  content here', making it look like readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                  evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
                  the like).
               </p>
            </div>
            <img src={img} className='person'/>
            <div className='teacher-course'>
            <h2>Teacher courses: </h2>
            <div className='list-course'>
            {New
            .slice(0,4)
             .map((item,id)=>{
            return(
            <div className='course' key={id}>
                <img src={item.img}/>
                <div className='overlay'></div>
                <div className='course-content'>
                  <div className='info-course'>
                    <h4>{item.type}</h4>
                    <h3>Basics of MasterStudy Education Theme</h3>
                    <span className='free'>Free</span>
                    <div className='detail-course'>
                      <p>MasterStudy is the best choice for everyone! Masterstudy LMS is a feature-rich WP product f..</p>
                      <div className='rating'>
                        <Rating name="read-only" value={4} readOnly className='iconRating'/>
                        <AiOutlineHeart className='svg'/>
                      </div>
                      <div className='viewes'>
                        <div className='view'>
                          <HiOutlineUsers />
                          <h6>1815</h6>
                        </div>
                        <div className='view'>
                          <HiOutlineEye />
                          <h6>288515</h6>
                        </div>
                      </div>
                    </div>
                  </div>                    
                </div>
            </div>
            )
           })}
            </div>
         </div>
         </div>

       </div>
    </div>
  )
}

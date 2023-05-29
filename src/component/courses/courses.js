import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineUsers,HiOutlineEye} from "react-icons/hi"
import { New,Old,Overall} from './data';
import "./courses.css"


export default function Courses() {
  const [item, setItem] = useState('New');
  const [Data, setData] = useState(New);
  const [count, setCount] = useState(8);
  const [showClassName, setShowClassName] = useState(false);


  const handleButtonClick = (value) => {
    setCount(8);
    setShowClassName(true);
    setItem(value);
  };

  const More = () => {
    if(count<Data.length){
      setShowClassName(true)
    }
    setTimeout(()=>{
      setCount(count + 4)
      setShowClassName(false)
    },2000)   
  };

  useEffect(() => {
    if (item === 'New') {
      setData(New);
    } else if (item === 'Old') {
      setData(Old);
    }else if (item === 'Overall') {
      setData(Overall);
    }
  }, [item]);

  useEffect(() => {
    if (showClassName) {
      const timeout = setTimeout(() => {
        setShowClassName(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showClassName]);

  return (
    <div className='courses'>
      <div className='container'>
        <div className='head-courses'>
          <h1>Top Courses</h1>
          <div className='btns'>
            <button 
              onClick={() => handleButtonClick('New')}
              className={item === 'New' ? 'active' : ''}
            >
            Newest
            </button>
            <button 
              onClick={() => handleButtonClick('Old')} 
              className={item === 'Old' ? 'active' : ''}
            >
              Oldest
            </button>
            <button 
             onClick={() => handleButtonClick('Overall')}
             className={item === 'Overall' ? 'active' : ''}
            >
              Overall Rating
            </button>
          </div>
        </div>
        <div className={showClassName?'list-course active':'list-course'}>
          {Data
          .slice(0,count)
          .map((item,id)=>{
            return(
            <div className='course' key={id}>
                <img src={item.img} alt={id}/>
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
          <button className='more' onClick={More}>Load More</button>
      </div>
    </div>
  )
}

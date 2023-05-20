import React from 'react'
import "./blog.css"
import one from "../../images/blog1.jpeg"
import two from "../../images/blog2.jpeg"
import three from '../../images/blog3.jpeg'
import {IoIosAddCircleOutline} from "react-icons/io"

export default function Blog() {
  return (
    <div className='blog'>
       <div className='blog-content'>
          <h2>MASTERSTUDY BLOG</h2>
          <div className='lineHeader'></div>
          <div className='list-blog'>
              <div className='item-blog'>
                 <div className='photo'>
                   <img src={one} />
                   <div className='overlay'>
                     <IoIosAddCircleOutline />
                   </div>
                 </div>
                 <div className='dtl-blog'>
                    <div className='date-blog'>
                      <div className='date'>
                         <h3>09</h3>
                         <h5>AUG</h5>
                      </div>   
                    </div>
                    <div className='inf-blog'>
                        <h3>Our main target is to “Developing Yourself as a Leader”</h3>
                        <p>The upcoming budget for the Chicago Public Schools will rely on $500
                          million in yet-to-be-enacted pension savings by Illinois, school officials
                          said on Monday.
                        </p> 
                        <div className='line'></div>
                        <div className='tags'>Posted in: <span>Adverisement</span></div>
                        <div className='tags'>Tags: <span>developing, leader, target</span></div>
                    </div>
                 </div>                      
              </div>
              <div className='item-blog'>
                 <div className='photo'>
                   <img src={two} />
                   <div className='overlay'>
                     <IoIosAddCircleOutline />
                   </div>
                 </div>
                 <div className='dtl-blog'>
                    <div className='date-blog'>
                      <div className='date'>
                         <h3>03</h3>
                         <h5>JUN</h5>
                      </div>   
                    </div>
                    <div className='inf-blog'>
                        <h3>Those Other College Expenses You Aren`t Thinking About</h3>
                        <p>Thousands of teenagers across the UK will have school lessons
                           in mindfulness in an experiment designed to see if it can protect
                           against mental illness.
                        </p> 
                        <div className='line'></div>
                        <div className='tags'>Posted in: <span>Hobbies</span></div>
                        <div className='tags'>Tags: <span>college, teens, thinking</span></div>
                    </div>
                 </div>                     
              </div>
              <div className='item-blog'>
                 <div className='photo'>
                   <img src={three} />
                   <div className='overlay'>
                     <IoIosAddCircleOutline />
                   </div>
                 </div>
                 <div className='dtl-blog'>
                    <div className='date-blog'>
                      <div className='date'>
                         <h3>03</h3>
                         <h5>JUN</h5>
                      </div>   
                    </div>
                    <div className='inf-blog'>
                        <h3>The Surprising Reason College Tuition Is Crazy Expensive</h3>
                        <p>The upcoming budget for the Chicago Public Schools will rely
                           on $500 million in yet-to-be-enacted pension savings by Illinois,
                           school officials said on Monday.
                        </p> 
                        <div className='line'></div>
                        <div className='tags'>Posted in: <span>Adverisement, Hobbies</span></div>
                        <div className='tags'>Tags: <span>Childhood</span></div>
                    </div>
                 </div>                       
              </div>
          </div>
       </div>
    </div>
  )
}

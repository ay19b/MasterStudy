import React from 'react'
import "./subscribe.css"

export default function Subscribe() {
  return (
    <div className='subscribe'>
      <div className='subsc-content'>
         <div className='defini-subsc'>
           <h3>Subscribe our newsletter</h3>
           <span>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected humour,
            or randomised words
           </span>
         </div>
         <div className='send-email'>
           <h5>Your e-mail address</h5>
           <div className='email'>
             <input placeholder='Enter Your Email'/>
             <button className='btn-email'>SUBSCRIBE</button>
           </div>        
         </div>
      </div>
    </div>
  )
}

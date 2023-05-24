import React, {useState} from 'react'
import {BiWorld} from "react-icons/bi"
import {BsBell,BsPeople} from "react-icons/bs"
import {FaChalkboardTeacher} from "react-icons/fa"
import "./statistic.css"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'


export default function Statistic() {
  const [counterOn,setCounterOn]= useState(false)

  return (
    <div className='statistic'>
      <div className='overlay-bg'></div>
      <div className='static-content'>
        <h1>SCHOOL ACHIEVEMENTS</h1>
        <span>Here you can review some statistics about our Education Center</span>
        <ScrollTrigger onEnter={()=>setCounterOn(true)}>
        <div className='info-static'>
          <div className='item-static'>
            <BiWorld />
            <h4 className='count'>
              {counterOn &&<CountUp start={0} end={94532} duration={2} delay={0} separator=''/>}
            </h4>
            <span>Foreign followers</span>
          </div>
          <div className='item-static'>
            <BsBell />
            <h4 className='count'>
              {counterOn &&<CountUp start={0} end={11223} duration={2} delay={0} separator=''/>}
            </h4>
            <span>Classes complete</span>
          </div>
          <div className='item-static'>
            <BsPeople />
            <h4 className='count'>
              {counterOn &&<CountUp start={0} end={282673} duration={2} delay={0} separator=''/>}
            </h4>
            <span>Students enrolled</span>
          </div>
          <div className='item-static'>
            <FaChalkboardTeacher />
            <h4 className='count'>
              {counterOn &&<CountUp start={0} end={37} duration={2} delay={0}/>}
            </h4>
            <span>Certified teachers</span>
          </div>
        </div>
        </ScrollTrigger>
      </div>
    </div>
  )
}

import React from 'react'
import {BiWorld} from "react-icons/bi"
import {BsBell,BsPeople} from "react-icons/bs"
import {FaChalkboardTeacher} from "react-icons/fa"
import "./statistic.css"


export default function Statistic() {
  return (
    <div className='statistic'>
      <div className='overlay-bg'></div>
      <div className='static-content'>
        <h1>SCHOOL ACHIEVEMENTS</h1>
        <span>Here you can review some statistics about our Education Center</span>
        <div className='info-static'>
          <div className='item-static'>
            <BiWorld />
            <h4>94532</h4>
            <span>Foreign followers</span>
          </div>
          <div className='item-static'>
            <BsBell />
            <h4>11223</h4>
            <span>Classes complete</span>
          </div>
          <div className='item-static'>
            <BsPeople />
            <h4>282673</h4>
            <span>Students enrolled</span>
          </div>
          <div className='item-static'>
            <FaChalkboardTeacher />
            <h4>37</h4>
            <span>Certified teachers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

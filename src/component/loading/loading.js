import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './loading.css'

export default function Loading() {
  return (
    <div className='loading'>
         <CircularProgress style={{ color: 'var(--primary-color)' }} />
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import Blog from './component/blog/blog';
import Courses from './component/courses/courses';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './component/home/home';
import Statistic from './component/statistic/statistic';
import Subscribe from './component/subscribe/subscribe';
import Teacher from './component/teacher/teacher';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return (
    <>
    {loading?
      <div className='loading'>
         <CircularProgress style={{ color: 'var(--primary-color)' }} />
       </div>:
       <div className="App">
        <Header />
        <Home />
        <Courses />
        <Statistic />
        <Teacher />
        <Subscribe />
        <Blog />
        <Footer />
      </div>
     }
  </>
  );
}

export default App;

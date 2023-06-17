import React, { useState, useEffect } from 'react';
import Blog from './component/blog/blog';
import Courses from './component/courses/courses';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './component/home/home';
import Statistic from './component/statistic/statistic';
import Subscribe from './component/subscribe/subscribe';
import Teacher from './component/teacher/teacher';
import './App.css';
import Loading from './component/loading/loading';


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return (
      <div className={!loading?"App":'AppLoading'}>
        <Header />
        <Home />
        <Courses />
        <Statistic />
        <Teacher />
        <Subscribe />
        <Blog />
        <Footer />
        {loading && <Loading />}
      </div>
  );
}

export default App;

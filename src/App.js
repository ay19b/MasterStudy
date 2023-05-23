import './App.css';
import Blog from './component/blog/blog';
import Courses from './component/courses/courses';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './component/home/home';
import Statistic from './component/statistic/statistic';
import Subscribe from './component/subscribe/subscribe';
import Teacher from './component/teacher/teacher';
import { useContext } from "react";

function App() {
  return (
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
  );
}

export default App;

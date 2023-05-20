import './App.css';
import Blog from './component/blog/blog';
import Courses from './component/courses/courses';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Statistic from './component/statistic/statistic';
import Subscribe from './component/subscribe/subscribe';
import Teacher from './component/teacher/teacher';

function App() {
  return (
    <div className="App">
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

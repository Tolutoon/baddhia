import { Routes, Route } from 'react-router-dom';
import './App.css';

// import pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Support from './pages/Support';
import BlogContent from './pages/BlogContent';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>

      <Route path='/blog' element={<Blog />} />
      <Route path='/blogcontent' element={<BlogContent />}/>
    </Routes>
  )
}

export default App;

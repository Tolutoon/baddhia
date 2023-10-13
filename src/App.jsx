import { Routes, Route } from 'react-router-dom';
import './App.css';

// import pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Support from './pages/Support';
import BlogContent from './pages/BlogContent';
import Terms from './pages/Terms';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/support' element={<Blog />}/>
      <Route path='/Terms' element={<Terms />}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/blogcontent' element={<BlogContent />}/>
    </Routes>
  )
}

export default App;

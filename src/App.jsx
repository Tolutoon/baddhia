import { Routes, Route } from 'react-router-dom';
import './App.css';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Blog from './pages/Blog';
import BlogContent from './pages/BlogContent';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/support' element={<Support />} />
      <Route path='/blog' element={<Blog />}/>
      <Route path='/blogContent' element={<BlogContent />}/>
    </Routes>
  )
}

export default App;

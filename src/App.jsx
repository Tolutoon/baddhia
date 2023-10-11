import { Routes, Route } from 'react-router-dom';
import './App.css';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/support' element={<Support />} />
    </Routes>
  )
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import BlogContent from "./pages/BlogContent";
import BlogContent2 from './pages/BlogContent2'

import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogContent" element={<BlogContent />} />
      <Route path='/blogcontent' element={<BlogContent />}/>
      <Route path='/blogcontent2' element={<BlogContent2 />}/>
      
      <Route path="/terms&condition" element={<Terms/>}/>
      <Route path="/faq" element={<FaqPage/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
    </Routes>
  );
}

export default App;

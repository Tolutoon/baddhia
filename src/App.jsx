import { Routes, Route } from "react-router-dom";
import "./App.css";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import BlogContent from "./pages/BlogContent";
import BlogContent2 from './pages/BlogContent2'
import BlogContent3 from './pages/BlogContent3';
import BlogContent4 from './pages/BlogContent4';
import BlogContent5 from './pages/BlogContent5';
import BlogContent6 from './pages/BlogContent6';
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FaqPage from "./pages/FaqPage";
import BlogAdvice from "./pages/BlogAdvice";
import ReadMoreArticle from "./pages/ReadMoreArticle";
import AdviceBlog1 from "./pages/AdviceBlog1";
import AdviceBlog2 from "./pages/AdviceBlog2";
import AdviceBlog3 from "./pages/AdviceBlog3";
import MasteringBaddhia from "./pages/MasteringBaddhia";
import AdviceBlog4 from "./pages/AdviceBlog4";
import AdviceBlog5 from "./pages/AdviceBlog5";
import DatingReadMore from "./pages/DatingReadMore";

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
      <Route path='/blogcontent3' element={<BlogContent3 />}/>
      <Route path='/blogcontent4' element={<BlogContent4 />}/>
      <Route path='/blogcontent5' element={<BlogContent5 />}/>
      <Route path='/blogcontent6' element={<BlogContent6 />}/>
      <Route path="/terms&condition" element={<Terms/>}/>
      <Route path="/faq" element={<FaqPage/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/Advice-tips" element={<BlogAdvice />}/>
      <Route path="/read-more" element={<ReadMoreArticle />}/>
      <Route path="/Dating-article1" element={<AdviceBlog1 />}/>
      <Route path="/Dating-article2" element={<AdviceBlog2 />}/>
      <Route path="/Dating-article3" element={<AdviceBlog3 />}/>
      <Route path="/Dating-article4" element={<AdviceBlog4 />}/>
      <Route path="/Mastering-Baddhia" element={<MasteringBaddhia />}/>
      <Route path="/Dating-article5" element={<AdviceBlog5 />}/>
      <Route path="/Dating-Read-more" element={<DatingReadMore />}/>
    </Routes>
  );
}

export default App;

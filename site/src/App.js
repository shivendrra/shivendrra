import './App.css';
import Navbar from './components/Navbar';
import Lander from './components/Lander';
import Blogs from './components/Blog';
import Gallery from './components/Gallery';
import BlogPage from './components/Blogpage';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path='/' element={<Lander />} />
            <Route exact path='/blogs' element={<Blogs />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/blogs/:name' element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

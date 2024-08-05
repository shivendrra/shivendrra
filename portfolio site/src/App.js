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
        <Navbar/>
        <div>
          <Routes>
            <Route exact path='/' Component={() => (< Lander/>)}/>
            <Route exact path='/blogs' Component={() => (< Blogs/>)}/>
            <Route exact path='/gallery' Component={() => (< Gallery/>)}/>
            <Route exact path='/portfolio' Component={() => (<Portfolio/>)}/>
            <Route exact path='/blog-main' Component={() => (< BlogPage/>)}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
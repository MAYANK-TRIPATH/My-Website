import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Project from './pages/Project';
import Blogs from './pages/Blogs';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
     <Navbar /> 
     <Hero />
     <Project />
     <Blogs />
     <Footer /> 
    </div>
  );
}

export default App;

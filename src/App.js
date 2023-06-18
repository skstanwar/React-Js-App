import {BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Home from  './components/home.js'
import About from './components/about.js'
import Layout from './components/Layout.js'
import Navbar from './components/navBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Home />}/>
        <Route path="about" element={<About />}>
         </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Sorting from './pages/Projects/Sorting';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/developer-portfolio/' element={<Home/>}></Route>
          <Route path='/developer-portfolio/projects/' element={<Projects/>}></Route>
          <Route path='/developer-portfolio/about-me/' element={<About/>}></Route>
          <Route path='/developer-portfolio/projects/sorting/' element={<Sorting/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

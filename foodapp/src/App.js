import './App.css';
import About from './Components/Aboutpage/About';
import Book from './Components/Booktable.jsx/Book';
import Footer from './Components/Footer/Footer';
import Menubar from './Components/Header/Header';
import Home from './Components/Homepage/Home';
import Menu from './Components/Menupage/Menu';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Menubar/>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/menu' element={ <Menu/> } />
            <Route path='/book' element={   <Book/> } />
        </Routes>
    <Footer/>
    </>
  );
}

export default App;

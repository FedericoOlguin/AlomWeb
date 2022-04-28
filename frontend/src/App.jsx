import './App.css';
import { BrowserRouter, Routes, Route, Link as LinkRouter } from "react-router-dom";
import HomePage from './Pages/Home/HomePege';
import Drawer from "./components/Drawer/Drawer"
import Footer from './components/Footer/Footer';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
function App() {
  return (
    <BrowserRouter>
      {/* <div className='App-header'> */}
        <Drawer />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='/services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio/>}/>
        </Routes>
        <Footer/>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

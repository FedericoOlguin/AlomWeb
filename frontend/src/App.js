import './App.css';
import { BrowserRouter, Routes, Route, Link as LinkRouter } from "react-router-dom";
import HomePage from './Pages/Home/HomePege';
import Drawer from "./components/Drawer/Drawer"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      {/* <div className='App-header'> */}
        <Drawer />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer/>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

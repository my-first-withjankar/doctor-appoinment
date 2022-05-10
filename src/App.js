import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Shared/Login';
import Appointment from './pages/Appointment/Appointment';



function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Shared/Login';
import Appointment from './pages/Appointment/Appointment';
import Signup from './pages/Shared/Signup';
import RequireAuth from './pages/Shared/RequireAuth';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

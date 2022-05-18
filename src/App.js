import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyHistory from './pages/Dashboard/MyHistory';
import MyReview from './pages/Dashboard/MyReview';
import Users from './pages/Dashboard/Users';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequireAdmin';
import SignUp from './pages/Login/Signup';
import Navbar from './pages/Shared/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About'
import RequireAuth from './pages/Login/RequireAuth'


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

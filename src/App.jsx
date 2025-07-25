import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import { AppContext } from './context/AppContext'; // Adjust path as needed
import Appointment from "./pages/Appointment"; // Ensure correct path
import RelatedDoctors from './components/RelatedDoctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Assisstant from './pages/Assisstant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  //console.log("apin");
  return (
    
    
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />}/>
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path='/about'element={<About/>} />
        <Route path='/contact'element={<Contact />} />
        <Route path='/login'element={<Login />} />
        <Route path='/pharmacist-assisstant' element={<Assisstant/>}/>
        <Route path='/my-profile'element={<MyProfile/>}/>
        <Route path='/my-appointments'element={<MyAppointments/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
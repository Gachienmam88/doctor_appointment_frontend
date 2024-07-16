import React from 'react'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from '../pages/Signup'
import Services from "../pages/Services"
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'
import { Routes, Route } from 'react-router-dom'
import MyAccount from '../DashBoard/user-account/MyAccount'
import DashBoard from '../DashBoard/doctor-account/DashBoard'
import PrivateRoute from './PrivateRoute'
const Routers = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:id' element={<DoctorDetails />} />
            <Route path='/users/profile/me' element={<PrivateRoute allowedRoles={['patient']}> <MyAccount /> </PrivateRoute>} />
            <Route path='/doctors/profile/me' element={<PrivateRoute allowedRoles={['doctor']}> <DashBoard /> </PrivateRoute>} />
        </Routes>
    )
}

export default Routers

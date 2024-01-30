
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './components/home/Home';
import { ForgotPassword } from "./components/navbar/user/ForgotPassword";
import { Header } from "./components/navbar/Header";
import { Login } from "./components/navbar/user/Login";
import { Signup } from "./components/navbar/user/Signup";
import { HostelDetail } from "./components/hostel/boys/HostelDetail";
import { Hostel } from "./components/hostel/boys/Hostel";
import { Owner } from "./components/hostelowner/Owner";
import { Cart } from "./components/navbar/Cart";
import { ManageUser } from "./components/admin/ManageUser";
import HostelMap from "./components/hostelMap/HostelMap";
import { useEffect } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSelector } from "react-redux";

function App() {

  const storage = useSelector((state) => state)

  return (
    <GoogleOAuthProvider clientId="1045489467062-clci15u88ajefk8pk827189rc8gn3usf.apps.googleusercontent.com">
      <div className={'app ' + storage.theme}>
        <Router>
          <Header />
          <div className='body'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/hosteldetail' element={<HostelDetail />} />
              <Route path='/hostel' element={<Hostel />} />
              <Route path='/hostelowner' element={<Owner />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/manageuser' element={<ManageUser />} />
              <Route path='/map' element={<HostelMap />} />
            </Routes>
          </div>
        </Router>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App

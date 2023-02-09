import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing';
import Signup from './Components/Login/signupComponent';
import { ChakraProvider } from '@chakra-ui/react'
import OtpHandler from './Components/Login/otp';
import UserDetails from './Components/Login/Details';
import LoginSuccessful from './Components/Login/LoginSuccessful';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
    <Signup/>
      <Routes>
      <Route path="/" element={<Signup />}/>
        <Route path="/Enter-OTP" element={<OtpHandler />}/>
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/RegisterationSuccessful" element={<LoginSuccessful />} />
      </Routes>
    </BrowserRouter>
    
    </ChakraProvider>
  );
}

export default App;

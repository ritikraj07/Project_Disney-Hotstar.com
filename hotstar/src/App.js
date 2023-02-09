import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing';
import Signup from './Components/Login/signupComponent';
import { ChakraProvider } from '@chakra-ui/react'
import OtpHandler from './Components/Login/otp';
import UserDetails from './Components/Login/Details';
import LoginSuccessful from './Components/Login/LoginSuccessful';

function App() {
  return (
    <ChakraProvider>
 
    <Signup/>
  <LoginSuccessful/>
  <OtpHandler/>
  <UserDetails/>
   </ChakraProvider>
  );
}

export default App;

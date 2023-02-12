
import './App.css';
// import Landing from './Pages/landing';
import Navbar from './Components/Navbar';
import SubNav from './Components/SubNav';
import { AllRoutes } from './Routes/AllRoutes';
import { useLocation } from 'react-router-dom';
import PaymentProcess from './Pages/Payment';
import PaymentOption from './Pages/Payment';

function App() {

 const match = useLocation();
  
  return (
   <>
   {match.pathname === '/subscribe' ? <SubNav /> : <Navbar />} 
    {/* <Navbar /> */}
    <AllRoutes />
   {/* <PaymentOption/> */}
   </>
  );
}

export default App;

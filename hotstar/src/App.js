import './App.css';
import Landing from './Pages/landing';
import Navbar from './Components/Navbar';
import SubNav from './Components/SubNav';
import { AllRoutes } from './Routes/AllRoutes';
import { useLocation } from 'react-router-dom';

function App() {

 const match = useLocation();
  
  return (
   <>
   
   {match.pathname === '/subscribe' ? <SubNav /> : <Navbar />}
    {/* <Navbar /> */}
   <AllRoutes />
  
   </>
  );
}

export default App;

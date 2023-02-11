import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing';
import Navbar from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';


function App() {
  return (
   <>
    <Navbar />
   <AllRoutes />
   </>
  );
}

export default App;

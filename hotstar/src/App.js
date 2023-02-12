import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing';
import Navbar from './Components/Navbar';
import SubNav from './Components/SubNav';
import { AllRoutes } from './Routes/AllRoutes';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/MyStore';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

 const match = useLocation();
  
  return (
  <>
  <ChakraProvider>
   <Provider store={store}>
   {match.pathname === '/subscribe' ? <SubNav /> : <Navbar />}
   <AllRoutes />
     </Provider>
     </ChakraProvider>
    </>
  );
}

export default App;

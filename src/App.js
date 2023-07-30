
import './App.css';
import {Fragment} from 'react'
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

      
    <Fragment>
  <ChakraProvider>
   <Provider store={store}>
    <Navbar />
   <AllRoutes />
     </Provider>
     </ChakraProvider>

    </Fragment>
  );
}

export default App;

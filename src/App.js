
import './App.css';
import {Fragment} from 'react'
import Navbar from './Components/Navbar';
import SubNav from './Components/SubNav';
import { AllRoutes } from './Routes/AllRoutes';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './Redux/Store/MyStore';

function App() {

  const match = useLocation();

  return (

      
    <Fragment>
      <ChakraProvider>
   <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
    <Navbar />
   <AllRoutes />
        </PersistGate>
          </Provider>
     </ChakraProvider>

    </Fragment>
  );
}

export default App;

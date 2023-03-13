
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from '../components/AuthLayout/AuthLayout';
import Navbar from './Navbar/Navbar';
import UserRoutes from './UseRoutes';
import { store, persistor } from './redux/store';




export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
          </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>

  );
}





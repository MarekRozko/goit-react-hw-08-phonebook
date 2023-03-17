

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from '../components/AuthLayout/AuthLayout';
import Navbar from './Navbar/Navbar';
import UserRoutes from '../Route/UseRoutes';
import { store, persistor } from '../redux/store';




export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <Navbar />
          <UserRoutes />
          </AuthLayout>
        </PersistGate>
      </Provider>

  );
}





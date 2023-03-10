import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar/Navbar';
import UserRoutes from './UseRoutes';
import { store } from './redux/store';




export const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
      </Provider>

  );
}





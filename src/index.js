import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/ADMIN/Login';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { Store } from './services/store/Store';
import AirlineLogin from './pages/AIRLINE/AirlineLogin';
import VendorLogin from './pages/VENDOR/VendorLogin';
import WelcomePage from './pages/WelcomePage';
import PrivateRoute from './routes/private/PrivateRoute';
import AccessErrorPage from './pages/AccessErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        {/* PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path='*' element={<App />} />
        </Route>

        <Route path='/' element={<WelcomePage />} />
        <Route path='/access-error' element={<AccessErrorPage />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/airline/login' element={<AirlineLogin />} />
        <Route path='/vendor/:airline_name/login' element={<VendorLogin />} />
      </Routes>
    </Router>
    <ToastContainer style={{ "fontSize": "15px" }} transition={Bounce} position="bottom-right" theme="dark" />
  </Provider>
);
reportWebVitals();

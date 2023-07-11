import React from 'react';
import Footer from './components/COMMON/Footer';
import NavBar from './components/COMMON/NavBar';
import SideBar from './components/COMMON/SideBar';
import AdminRoutes from './routes/AdminRoutes';
import AirlineRoutes from './routes/AirlineRoutes';
import VendorRoutes from './routes/VendorRoutes';

const App = () => {
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      {/* Side Nav Bar */}
      <SideBar />

      {/* Super Admin */}
      <AdminRoutes />

      {/* Airline */}
      <AirlineRoutes />

      {/* Vendor */}
      <VendorRoutes />

      <Footer />
    </>
  );
};

export default App;
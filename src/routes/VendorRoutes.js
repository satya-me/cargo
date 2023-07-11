import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorDashboard from '../pages/VENDOR/VendorDashboard';
import VendorPermission from '../pages/VENDOR/VendorPermission';
import EditBooking from '../components/VENDOR/core/EditBooking';
import AddBooking from '../components/VENDOR/core/AddBooking';

const VendorRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/vendor' element={<VendorDashboard />} />
                <Route path='/vendor/vendor-permission' element={<VendorPermission />} />
                <Route path='/vendor/add-booking' element={<AddBooking />} />
                <Route path='/vendor/edit-booking/:booking_id' element={<EditBooking />} />
            </Routes>
        </>
    )
}

export default VendorRoutes
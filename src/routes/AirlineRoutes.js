import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AirlineDashboard from '../pages/AIRLINE/AirlineDashboard';
import AddVendor from '../components/AIRLINE/core/AddVendor';
import EditVendor from '../components/AIRLINE/core/EditVendor';

const AirlineRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/airline' element={<AirlineDashboard />} />
                <Route path='/vendor/add-vendor' element={<AddVendor />} />
                <Route path='/vendor/edit-vendor/:vendor_id' element={<EditVendor />} />
            </Routes>
        </>
    )
}

export default AirlineRoutes
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/ADMIN/Dashboard';
import Airlines from '../pages/ADMIN/Airlines';
import Flights from '../pages/ADMIN/Flights';
import Vendors from '../pages/ADMIN/Vendors';
import Users from '../pages/ADMIN/Users';
import Permission from '../pages/ADMIN/Permission';
import UserPermission from '../pages/ADMIN/UserPermission';
import AddAirlines from '../components/ADMIN/core/airline/AddAirlines';
import AddUsers from '../components/ADMIN/core/user/AddUsers';
import EditAirlines from '../components/ADMIN/core/airline/EditAirlines';
import EditUser from '../components/ADMIN/core/user/EditUser';
import ViewBooking from '../pages/VENDOR/ViewBooking';
import AirlineAccess from './private/AirlineAccess';

const AdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<AirlineAccess />}>
                    <Route path='/users' element={<Users />} />
                    <Route path='/airlines' element={<Airlines />} />
                    <Route path='/permission' element={<Permission />} />
                </Route>
                <Route path='/admin' element={<Dashboard />} />
                <Route path='/add-airline' element={<AddAirlines />} />
                <Route path='/edit-airline/:airline_id' element={<EditAirlines />} />
                <Route path='/flights' element={<Flights />} />
                <Route path='/vendors' element={<Vendors />} />
                <Route path='/vendors/:vendor_id' element={<Vendors />} />
                <Route path='/edit-users/:user_id' element={<EditUser />} />
                <Route path='/user-permissions' element={<UserPermission />} />
                <Route path='/add-user' element={<AddUsers />} />
                <Route path='/viewbooking' element={<ViewBooking />} />
            </Routes>
        </>
    )
}

export default AdminRoutes
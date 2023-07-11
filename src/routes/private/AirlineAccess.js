import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AirlineAccess = () => {
    // user
    const user = JSON.parse(window.localStorage.getItem('user'))
    // AIRLINE
    const AIRLINE = (user?.type === 'airline') && (user?.role === 'Super Admin');
    // VENDOR
    const VENDOR = (user?.type === 'vendor') && (user?.role === 'Super Admin');

    return (
        <>
            {
                !(AIRLINE || VENDOR) ? <Outlet /> : <Navigate to='/access-error' />
            }
        </>
    )
}

export default AirlineAccess
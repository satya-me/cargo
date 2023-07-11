import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllAirlines } from '../services/slices/ADMIN/AirlineSlice';

const WelcomePage = () => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [airlineOptions, setAirlineOptions] = useState([]);

    useEffect(() => {
        if (selected === "admin") {
            navigate("/admin/login")
        } else if (selected === "airline") {
            navigate("/airline/login")
        } else if (selected === "vendor") {
            const airlineOptions = () => {
                const airlines = ['IndiGo', 'AirAsia', 'Air India', 'Air India Express', 'SpiceJet', 'Blue Dart', 'Vistara', 'Quick Jet', 'Akasa Air', 'Pradhaan Air'];
                setAirlineOptions(airlines);
            };

            airlineOptions();
        }
    }, [selected, navigate])

    // handleAirlineSelect func.
    const handleAirlineSelect = (e) => {
        const selectedAirline = e.target.value;
        navigate(`/vendor/${selectedAirline}/login`);
    };

    useEffect(() => {
        dispatch(getAllAirlines());
    }, [dispatch])

    return (
        <>
            <div className='text-center mt-5'>
                <h1 style={{ fontSize: "5rem" }}>Welcome To CargoBooking</h1>
                <h1 style={{ fontSize: "2rem" }}>Please select a login option</h1>
                <div style={{ fontSize: "1rem" }}>
                    <form >
                        <input
                            className='mx-1'
                            type="radio"
                            id="admin"
                            name="admin"
                            value="admin"
                            onChange={(e) => setSelected(e.target.value)}
                        />
                        <label htmlFor="admin">ADMIN</label><br />

                        <input
                            className='mx-1'
                            type="radio"
                            id="airline"
                            name="airline"
                            value="airline"
                            onChange={(e) => setSelected(e.target.value)}
                        />
                        <label htmlFor="airline">AIRLINE</label><br />

                        <input
                            className='mx-1'
                            type="radio"
                            id="vendor"
                            name="vendor"
                            value="vendor"
                            onChange={(e) => setSelected(e.target.value)}
                        />
                        <label htmlFor="vendor">VENDOR</label>
                    </form>
                </div>
            </div>
            {selected === 'vendor' && airlineOptions.length > 0 && (
                <div className='text-center mt-3'>
                    <h2>Select an airline:</h2>
                    <select
                        onChange={handleAirlineSelect}
                        style={{
                            "border": "1px solid gainsboro",
                            "borderRadius": "3px",
                            "padding": "5px",
                            "background": "#a9a9a91c"
                        }}
                    >
                        <option value=''>Select</option>
                        {airlineOptions.map((airline, index) => (
                            <option key={index} value={airline}>
                                {airline}
                            </option>
                        ))}
                    </select>
                </div >
            )}
        </>
    )
}

export default WelcomePage
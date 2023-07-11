import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAirlines } from '../../../../services/slices/ADMIN/AirlineSlice';
import { useDispatch } from 'react-redux';

const AirlineList = ({ item }) => {
    const dispatch = useDispatch();
    const token = JSON.parse(window.localStorage.getItem("token"));

    return (
        <>

            {/* Airline name */}
            <td>
                <div className="d-flex">
                    {
                        item?.airline === "IndiGo" ?
                            <img src="/assets/imgs/6E.png" className="rounded-circle"
                                style={{ width: "28px" }} alt='' />
                            : item?.airline === "Air India" ?
                                < img src="/assets/imgs/airindia.png" className="rounded-circle"
                                    style={{ width: "28px" }} alt='' />
                                : item?.airline === "AirAsia" ?
                                    < img src="/assets/imgs/I5.png" className="rounded-circle"
                                        style={{ width: "28px" }} alt='' />
                                    : item?.airline === "Air India Express" ?
                                        < img src="/assets/imgs/Air_India_Express.png" className="rounded-circle"
                                            style={{ width: "28px" }} alt='' />
                                        : item?.airline === "SpiceJet" ?
                                            < img src="/assets/imgs/sg.png" className="rounded-circle"
                                                style={{ width: "28px" }} alt='' />
                                            : item?.airline === "Blue Dart" ?
                                                < img src="/assets/imgs/BlueDartAviation.png" className="rounded-circle"
                                                    style={{ width: "28px" }} alt='' />
                                                : item?.airline === "Vistara" ?
                                                    < img src="/assets/imgs/vistara-logo.png" className="rounded-circle"
                                                        style={{ width: "28px" }} alt='' />
                                                    : item?.airline === "Quick Jet" ?
                                                        < img src="/assets/imgs/quickjet.jpg" className="rounded-circle"
                                                            style={{ width: "28px" }} alt='' />
                                                        : item?.airline === "Akasa Air" ?
                                                            < img src="/assets/imgs/akasa-air-logo.png" className="rounded-circle"
                                                                style={{ width: "28px" }} alt='' />
                                                            : < img src="/assets/imgs/pradhan-air.png" className="rounded-circle"
                                                                style={{ width: "28px" }} alt='' />
                    }
                    <h6 className="my-auto ms-2">{item?.airline}</h6>
                </div>
            </td>

            {/* Person designation */}
            <td>
                <h6 className="mb-0">{item?.person_name}</h6> <small className="text-muted">{item?.person_designation}</small>
            </td>

            {/* Email */}
            <td>{item?.email}</td>

            {/* Phone */}
            <td>+91{item?.phone}</td>

            {/* Role */}
            <td>{item?.role}</td>

            {/* Status */}
            <td>
                {
                    item?.status === "Active" ?
                        <span className="badge bg-success">{item?.status}</span>
                        : <span className="badge bg-danger">{item?.status}</span>
                }
            </td>

            {/* Actions */}
            <td>
                {
                    token?.length > 0 ?
                        <Link to={`/edit-airline/${item?._id}`} className="btn btn-sm btn-primary me-1"><i
                            className="fa fa-pencil-alt"></i></Link>
                        : <Link to="/admin/login" className="btn btn-sm btn-primary me-1"><i
                            className="fa fa-pencil-alt"></i></Link>
                }
                {
                    token?.length > 0 ?
                        <Link to="#" onClick={() => dispatch(deleteAirlines(item?._id))} className="btn btn-sm btn-danger me-1"><i
                            className="fa fa-trash-alt"></i></Link>
                        : <Link to="/admin/login" className="btn btn-sm btn-danger me-1"><i
                            className="fa fa-trash-alt"></i></Link>
                }
                <Link to={`/vendors/${item?._id}`} className="btn btn-sm btn-dark me-1"
                    title="Manage Vendor"><i className="fas fa-user-tie"></i></Link>
                <Link to="/flights" className="btn btn-sm btn-success"
                    title="Manage Flights"><i className="fas fa-plane"></i></Link>
            </td>
        </>
    )
}

export default AirlineList;
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteVendor } from '../../../../services/slices/ADMIN/VendorSlice';
import { getAllAirlines } from '../../../../services/slices/ADMIN/AirlineSlice';

const VendorList = ({ item }) => {
    const dispatch = useDispatch();
    // token
    const token = JSON.parse(window.localStorage.getItem("token"));
    // const BASE_URL = process.env.REACT_APP_NODE_HOST;
    const AIRLINE_DATA = JSON.parse(window.localStorage.getItem("airline_data"));
    const filteredData = AIRLINE_DATA?.filter(data => data?._id === item?._airlineId?._id);


    // console.log(filteredData[0]);

    useEffect(() => {
        dispatch(getAllAirlines());
    }, [dispatch])

    return (
        <>
            <td>
                {/* <div className="d-flex">
                    <img src={BASE_URL + item?.vendor_logo} className="rounded-circle"
                        style={{ width: "28px", height: "28px", objectFit: "cover" }} alt='' />
                </div> */}
                <h6 className="my-auto ms-2">{item?.vendor_name}</h6>
            </td>
            <td>
                <div className="d-flex">
                    {/* <img src={BASE_URL + item?.vendor_logo} className="rounded-circle"
                        style={{ width: "28px", height: "28px", objectFit: "cover" }} alt='' /> */}
                    {
                        filteredData[0]?.airline === "IndiGo" ?
                            <img src="/assets/imgs/6E.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                            : filteredData[0]?.airline === "Air India" ?
                                < img src="/assets/imgs/airindia.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                : filteredData[0]?.airline === "AirAsia" ?
                                    < img src="/assets/imgs/I5.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                    : filteredData[0]?.airline === "Air India Express" ?
                                        < img src="/assets/imgs/Air_India_Express.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                        : filteredData[0]?.airline === "SpiceJet" ?
                                            < img src="/assets/imgs/sg.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                            : filteredData[0]?.airline === "Blue Dart" ?
                                                < img src="/assets/imgs/BlueDartAviation.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                                : filteredData[0]?.airline === "Vistara" ?
                                                    < img src="/assets/imgs/vistara-logo.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                                    : filteredData[0]?.airline === "Quick Jet" ?
                                                        < img src="/assets/imgs/quickjet.jpg" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                                        : filteredData[0]?.airline === "Akasa Air" ?
                                                            < img src="/assets/imgs/akasa-air-logo.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                                                            : < img src="/assets/imgs/pradhan-air.png" className="img-fluid" alt='img' style={{ width: "28px", height: "28px", objectFit: "cover", borderRadius: "15px" }} />
                    }
                    <h6 className="my-auto ms-2">{filteredData[0]?.airline}</h6>
                </div>
            </td>
            <td>{item?.reporting_person_name}</td>
            <td>{item?.reporting_person_email}</td>
            <td>+91{item?.reporting_person_phone}</td>
            <td>
                {
                    item?.status === "Active" ?
                        <span className="badge bg-success">{item?.status}</span>
                        : <span className="badge bg-danger">{item?.status}</span>
                }
            </td>
            <td>
                {
                    token?.length > 0 ?
                        <Link to={`/vendor/edit-vendor/${item?._id}`} className="btn btn-sm btn-primary me-1"><i
                            className="fa fa-pencil-alt"></i></Link>
                        : <Link to="/admin/login" className="btn btn-sm btn-primary me-1"><i
                            className="fa fa-pencil-alt"></i></Link>
                }
                {
                    token?.length > 0 ?
                        <Link to="#" onClick={() => dispatch(deleteVendor(item?._id))} className="btn btn-sm btn-danger"><i
                            className="fa fa-trash-alt"></i></Link>
                        : <Link to="/admin/login" className="btn btn-sm btn-danger"><i
                            className="fa fa-trash-alt"></i></Link>
                }


            </td>
        </>
    )
}

export default VendorList;
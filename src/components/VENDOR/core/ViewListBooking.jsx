import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBookingData } from '../../../services/slices/VENDOR/VendorCargoBookingSlice';

const ViewListBooking = ({ item }) => {
    const dispatch = useDispatch();
    const AIRLINE_DATA = JSON.parse(window.localStorage.getItem("airline_data"));
    const filteredData = AIRLINE_DATA?.filter(data => data?._id === item?._vendorId?._airlineId);

    // console.log(item);

    return (
        <>
            <td>{item?._id?.toUpperCase()}</td>
            {
                item?.booking_status ?
                    <td><span className="badge bg-success">success</span></td>
                    : <td><span className="badge bg-danger">Pending</span></td>
            }
            <td>{item?.AWB_number}</td>
            <td>Delhi <span><img src="/assets/imgs/arrows.png" alt="" className="img_icon" /></span> Mumbai</td>
            <td>
                <div className="d-flex">
                    {/* <img src="/assets/imgs/dhl-logo.jpeg" className="rounded-circle"
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
                    <h6 className="my-auto ms-2">{item?.flight}</h6>
                </div></td>
            <td>₹ 1235</td>
            <td>{item?.shipment_date_time}</td>
            <td>{item?.type}</td>
            <td>
                <Link to={`/vendor/edit-booking/${item?._id}`} className="btn btn-sm btn-primary me-1"><i
                    className="fa fa-pencil-alt"></i>
                </Link>
                <Link to="#" onClick={() => dispatch(deleteBookingData(item?._id))} className="btn btn-sm btn-danger"><i
                    className="fa fa-trash-alt"></i>
                </Link>
            </td>
        </>
    )
}

export default ViewListBooking
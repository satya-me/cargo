import React from 'react'
import { Link } from 'react-router-dom'

const Flights = () => {
    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18"> Manage Flights</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item active"> Manage Flights</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="search-box me-2 mb-2 d-flex w-75">
                                            <div className="position-relative w-50">
                                                <input type="text" className="form-control" placeholder="Search..." />
                                                <i className="bx bx-search-alt search-icon"></i>
                                            </div>
                                            <div className="position-relative w-50 mx-2">
                                                <select className="form-select form-control">
                                                    <option disabled>Filter by Airline</option>
                                                    <option value="1">IndiGo</option>
                                                    <option value="2">AirAsia</option>
                                                    <option value="3">SpiceJet</option>
                                                </select>
                                                <i className="mdi mdi-filter-outline search-icon"></i>
                                            </div>
                                            <div className="position-relative w-25">
                                                <input type="date" className="form-control ps-3" />
                                            </div>
                                        </div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "150px" }}>Airline</th>
                                                    <th className="text-center" style={{ width: "200px" }}>Date</th>
                                                    <th className="text-center">From</th>
                                                    <th className="text-center" style={{ width: "250px" }}>Duration</th>
                                                    <th className="text-center">To</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img src="/assets/imgs/6E.png" className="rounded-circle"
                                                                style={{ width: "28px", height: "28px", objectFit: "cover" }} alt='' />
                                                            <div className="my-auto ms-2">
                                                                <h6 className="mb-0">
                                                                    IndiGo
                                                                </h6>
                                                                <small className="text-muted">6E 375</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        Sat, Jun 10, 2023
                                                    </td>
                                                    <td className="text-center">
                                                        <h5 className="mb-0">07:00</h5>
                                                        <small className="text-muted">Kolkata</small>
                                                    </td>
                                                    <td className="text-center">
                                                        <h6 className="mb-0">02 h 15 m</h6>
                                                        <div className="progress w-50 mx-auto" style={{ height: "5px" }}>
                                                            <div className="progress-bar progress-bar-striped bg-success"
                                                                role="progressbar" style={{ width: "100%" }}
                                                                aria-valuenow="50" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                        <small className="text-muted">Non stop</small>
                                                    </td>
                                                    <td className="text-center">
                                                        <h5 className="mb-0">09:15</h5>
                                                        <small className="text-muted">New Delhi</small>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img src="/assets/imgs/6E.png" className="rounded-circle"
                                                                style={{ width: "28px", height: "28px", objectFit: "cover" }} alt='' />
                                                            <div className="my-auto ms-2">
                                                                <h6 className="mb-0">
                                                                    IndiGo
                                                                </h6>
                                                                <small className="text-muted">6E 6183</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        Sat, Jun 10, 2023
                                                    </td>
                                                    <td className="text-center">
                                                        <h5 className="mb-0">18:55</h5>
                                                        <small className="text-muted">Kolkata</small>
                                                    </td>
                                                    <td className="text-center">
                                                        <h6 className="mb-0">02 h 15 m</h6>
                                                        <div className="progress w-50 mx-auto" style={{ height: "5px" }}>
                                                            <div className="progress-bar progress-bar-striped bg-success"
                                                                role="progressbar" style={{ width: "100%" }}
                                                                aria-valuenow="50" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                        <small className="text-muted">Non stop</small>
                                                    </td>
                                                    <td className="text-center">
                                                        <h5 className="mb-0">21:10</h5>
                                                        <small className="text-muted">New Delhi</small>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img src="/assets/imgs/6E.png" className="rounded-circle"
                                                                style={{ width: "28px", height: "28px", objectFit: "cover" }} alt='' />
                                                            <div className="my-auto ms-2">
                                                                <h6 className="mb-0">
                                                                    IndiGo
                                                                </h6>
                                                                <small className="text-muted">6E 271, 6E 367</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        Sat, Jun 10, 2023
                                                    </td>
                                                    <td className="text-center">
                                                        <h5 className="mb-0">05:40</h5>
                                                        <small className="text-muted">Kolkata</small>
                                                    </td>
                                                    <td className="text-center">
                                                        <h6 className="mb-0">09 h 05 m</h6>
                                                        <div className="progress w-50 mx-auto" style={{ height: "5px" }}>
                                                            <div className="progress-bar bg-success" role="progressbar"
                                                                style={{ width: "45%" }} aria-valuenow="15" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                            <div className="progress-bar bg-warning" role="progressbar"
                                                                style={{ width: "10%" }} aria-valuenow="30" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                            <div className="progress-bar bg-success" role="progressbar"
                                                                style={{ width: "45%" }} aria-valuenow="20" aria-valuemin="0"
                                                                aria-valuemax="100"></div>
                                                        </div>
                                                        <small className="text-muted">1 stop via Ahmedabad</small>
                                                    </td>
                                                    <td className="text-center">
                                                        <h5 className="mb-0">14:45</h5>
                                                        <small className="text-muted">Goa - Dabolim Airport</small>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

                {/* <!-- Transaction Modal --> */}
                <div className="modal fade" id="ErrorModal" tabIndex="-1" role="dialog" aria-labelledby="ErrorModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="ErrorModalLabel">Device Error</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive">
                                            <table className="table align-middle mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th className="align-middle">Serial Number</th>
                                                        <th className="align-middle">Battery Type</th>
                                                        <th className="align-middle">Cell Chenistry</th>
                                                        <th className="align-middle">No. of cells (Series)</th>
                                                        <th className="align-middle">No. of cells (Parallel)</th>
                                                        <th className="align-middle">Cell Capacity</th>
                                                        <th className="align-middle">GPS Enabled/Not</th>
                                                        <th className="align-middle">Warrenty Period</th>
                                                        <th className="align-middle">Date of Manufacturing</th>
                                                        <th className="align-middle">Assigned Mobile Number</th>
                                                        <th className="align-middle" style={{ width: "180px" }}>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>AITPL/01/221221/0006</td>
                                                        <td>Industrial</td>
                                                        <td>Liion</td>
                                                        <td>18</td>
                                                        <td>18</td>
                                                        <td></td>
                                                        <td><span className="badge bg-success">Yes</span></td>
                                                        <td>12month</td>
                                                        <td>12/04/2022</td>
                                                        <td>9830098300 </td>
                                                        <td>
                                                            <Link to="device-analys.html" title="View Details"><i
                                                                className="mdi mdi-file-eye font-size-24 me-2 text-info"></i></Link>
                                                            <Link to="#" title="Edit Battery Details"><i
                                                                className="mdi mdi-lead-pencil font-size-24 me-2"></i></Link>
                                                            <Link to="device-config-details.html"
                                                                title="Device Configuration"><i
                                                                    className="mdi mdi-application-cog font-size-24 text-danger"></i></Link>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>AITPL/01/221221/0006</td>
                                                        <td>Industrial</td>
                                                        <td>Liion</td>
                                                        <td>18</td>
                                                        <td>18</td>
                                                        <td></td>
                                                        <td><span className="badge bg-danger">No</span></td>
                                                        <td>12month</td>
                                                        <td>12/04/2022</td>
                                                        <td>9830098300 </td>
                                                        <td>
                                                            <Link to="device-analys.html" title="View Details"><i
                                                                className="mdi mdi-file-eye font-size-24 me-2 text-info"></i></Link>
                                                            <Link to="#" title="Edit Battery Details"><i
                                                                className="mdi mdi-lead-pencil font-size-24 me-2"></i></Link>
                                                            <Link to="device-config-details.html"
                                                                title="Device Configuration"><i
                                                                    className="mdi mdi-application-cog font-size-24 text-danger"></i></Link>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>AITPL/01/221221/0006</td>
                                                        <td>Industrial</td>
                                                        <td>Liion</td>
                                                        <td>18</td>
                                                        <td>18</td>
                                                        <td></td>
                                                        <td><span className="badge bg-success">Yes</span></td>
                                                        <td>12month</td>
                                                        <td>12/04/2022</td>
                                                        <td>9830098300 </td>
                                                        <td>
                                                            <Link to="device-analys.html" title="View Details"><i
                                                                className="mdi mdi-file-eye font-size-24 me-2 text-info"></i></Link>
                                                            <Link to="#" title="Edit Battery Details"><i
                                                                className="mdi mdi-lead-pencil font-size-24 me-2"></i></Link>
                                                            <Link to="device-config-details.html"
                                                                title="Device Configuration"><i
                                                                    className="mdi mdi-application-cog font-size-24 text-danger"></i></Link>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}

                {/* <!-- subscribeModal --> */}
                <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel"
                    aria-hidden="true" style={{ display: "none" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-4">
                                    <div className="avatar-md mx-auto mb-4">
                                        <div className="avatar-title bg-light rounded-circle text-primary h1">
                                            <i className="mdi mdi-email-open"></i>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <h4 className="text-primary">Subscribe !</h4>
                                            <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get
                                                notification to stay update.</p>

                                            <div className="input-group bg-light rounded">
                                                <input type="email" className="form-control bg-transparent border-0"
                                                    placeholder="Enter Email address" aria-label="Recipient's username"
                                                    aria-describedby="button-addon2" />

                                                <button className="btn btn-primary" type="button" id="button-addon2">
                                                    <i className="bx bxs-paper-plane"></i>
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end modal --> */}
            </div>
        </>
    )
}

export default Flights
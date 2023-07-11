import React from 'react'
import { Link } from 'react-router-dom'

const AirlineDashboard = () => {
    // user
    const user = JSON.parse(window.localStorage.getItem('user'));
    
    return (
        <>
            {/* <!-- Start right Content here --> */}
            {/* <!-- ============================================================== --> */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Airline Dashboard</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/airline">Airline Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Airline Dashboard</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <div className="card mini-stats-wid mb-0 h-100">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="fw-medium">Number of Flights</p>
                                                <h4 className="mb-2">
                                                    <Link to="#" className="text-info">1235</Link>
                                                </h4>
                                                <small className="text-muted">As on today</small>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <div
                                                    className="mini-stat-icon avatar-sm rounded-circle bg-info align-self-center">
                                                    <span className="avatar-title">
                                                        <i className="fas fa-plane font-size-24"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card mini-stats-wid mb-0 h-100">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="fw-medium">Cargo Delivered </p>
                                                <h4 className="mb-2">
                                                    <Link to="#"> 11357</Link>
                                                </h4>
                                                <small className="text-muted">As on today</small>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <div
                                                    className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                    <span className="avatar-title">
                                                        <i className="fas fa-plane-arrival font-size-24"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card mini-stats-wid mb-0 h-100">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="fw-medium">Cargo Volume Achiever</p>
                                                <div className="d-flex mb-2">
                                                    {
                                                        user?.airline === "IndiGo" ?
                                                            <img src="/assets/imgs/6E.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                            : user?.airline === "Air India" ?
                                                                < img src="/assets/imgs/airindia.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                : user?.airline === "AirAsia" ?
                                                                    < img src="/assets/imgs/I5.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                    : user?.airline === "Air India Express" ?
                                                                        < img src="/assets/imgs/Air_India_Express.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                        : user?.airline === "SpiceJet" ?
                                                                            < img src="/assets/imgs/sg.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                            : user?.airline === "Blue Dart" ?
                                                                                < img src="/assets/imgs/BlueDartAviation.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                : user?.airline === "Vistara" ?
                                                                                    < img src="/assets/imgs/vistara-logo.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                    : user?.airline === "Quick Jet" ?
                                                                                        < img src="/assets/imgs/quickjet.jpg" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                        : user?.airline === "Akasa Air" ?
                                                                                            < img src="/assets/imgs/akasa-air-logo.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                            : < img src="/assets/imgs/pradhan-air.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                    }
                                                    <h6 className="my-auto ms-2">
                                                        AIR12254
                                                    </h6>
                                                </div>
                                                <small className="text-muted">For this week</small>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <div
                                                    className="avatar-sm rounded-circle bg-success align-self-center mini-stat-icon">
                                                    <span className="avatar-title">
                                                        <i className="fa fa-award font-size-24"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card mini-stats-wid mb-0 h-100">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="fw-medium">Highest Flight Volume Today</p>
                                                <div className="d-flex mb-2">
                                                    {
                                                        user?.airline === "IndiGo" ?
                                                            <img src="/assets/imgs/6E.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                            : user?.airline === "Air India" ?
                                                                < img src="/assets/imgs/airindia.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                : user?.airline === "AirAsia" ?
                                                                    < img src="/assets/imgs/I5.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                    : user?.airline === "Air India Express" ?
                                                                        < img src="/assets/imgs/Air_India_Express.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                        : user?.airline === "SpiceJet" ?
                                                                            < img src="/assets/imgs/sg.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                            : user?.airline === "Blue Dart" ?
                                                                                < img src="/assets/imgs/BlueDartAviation.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                : user?.airline === "Vistara" ?
                                                                                    < img src="/assets/imgs/vistara-logo.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                    : user?.airline === "Quick Jet" ?
                                                                                        < img src="/assets/imgs/quickjet.jpg" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                        : user?.airline === "Akasa Air" ?
                                                                                            < img src="/assets/imgs/akasa-air-logo.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                                                            : < img src="/assets/imgs/pradhan-air.png" className="img-fluid" alt='img' style={{ width: "28px" }} />
                                                    }
                                                    <h6 className="my-auto ms-2">
                                                        <small className="ms-1">14555</small>
                                                    </h6>
                                                </div>
                                                <small className="text-muted">Highest for today</small>
                                            </div>

                                            <div className="flex-shrink-0">
                                                <div
                                                    className="avatar-sm rounded-circle bg-danger align-self-center mini-stat-icon">
                                                    <span className="avatar-title">
                                                        <i className="fas fa-plane-departure font-size-24"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="ml-auto float-end">
                                            <Link to="#"
                                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"><i
                                                    className="bx bx-search me-1"></i> Search Flight</Link>
                                        </div>
                                        <h4 className="card-title mb-4">Flight & Destination</h4>
                                        <div style={{ width: "100%" }}>
                                            <img src="/assets/imgs/map.jpg" className="img-fluid" alt='' style={{ width: "100%" }} />
                                        </div>
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
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
            </div >
            {/* <!-- end main content--> */}
        </>
    )
}

export default AirlineDashboard
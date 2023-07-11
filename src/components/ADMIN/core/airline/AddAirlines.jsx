import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, } from 'react-router-dom'
import { addAirlines, clearAddAirlineError } from '../../../../services/slices/ADMIN/AirlineSlice'
import { useEffect } from 'react'
import Loader from '../../../../util/Loader'

const AddAirlines = () => {
    const [formData, setFormData] = useState({
        airline: "IndiGo",
        person_name: "",
        person_designation: "",
        email: "",
        phone: "",
        role: "Super Admin",
        status: "Active"
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, loading } = useSelector(state => state.airlineSlice);

    // handleChange func.
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // handleSubmit func.
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData };
        dispatch(addAirlines({ data, navigate }));
    }

    useEffect(() => {
        dispatch(clearAddAirlineError());
    }, [dispatch])

    return (
        <>
            {/* Loader */}
            {loading && <Loader />}

            {/* <!-- Start right Content here --> */}
            {/* <!-- ============================================================== --> */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Airlines</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item"><Link to="/airlines">Airlines</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Add Airline</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}


                        <div className="row">
                            <div className="col-xl-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            <div className="ml-auto float-end">
                                                <Link to="/airlines"
                                                    className="btn btn-secondary btn-sm btn-rounded waves-effect waves-light"><i
                                                        className="dripicons-backspace me-1"></i> Back</Link>
                                            </div>
                                            <h4 className="card-title mb-4">Add Airline</h4>

                                            {/* error message */}
                                            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                                                {
                                                    (error?.success === false) ?
                                                        <div style={{ width: "30%", textAlign: 'center' }}>
                                                            <div className='login_error'>
                                                                <p className='fw-bold text-dark'>{error?.message}</p>
                                                            </div>
                                                        </div>
                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className="row">

                                                {/* Airline */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='airline'>Airline</label>
                                                        <select className="form-select"
                                                            id='airline'
                                                            name='airline'
                                                            value={formData?.airline}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option disabled>Select Airline</option>
                                                            <option value="IndiGo">IndiGo</option>
                                                            <option value="AirAsia">AirAsia</option>
                                                            <option value="Air India">Air India</option>
                                                            <option value="Air India Express">Air India Express</option>
                                                            <option value="SpiceJet">SpiceJet</option>
                                                            <option value="Blue Dart">Blue Dart</option>
                                                            <option value="Vistara">Vistara</option>
                                                            <option value="Quick Jet">Quick Jet</option>
                                                            <option value="Akasa Air">Akasa Air</option>
                                                            <option value="Pradhaan Air">Pradhaan Air</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Person Name */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='person_name'>Person Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='person_name'
                                                            name='person_name'
                                                            value={formData?.person_name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* Person Designation */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='person_designation'>Person Designation</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='person_designation'
                                                            name='person_designation'
                                                            value={formData?.person_designation}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='email'>Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id='email'
                                                            name='email'
                                                            value={formData?.email}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* Phone */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='phone'>Phone</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            maxLength={10}
                                                            id='phone'
                                                            name='phone'
                                                            value={formData?.phone}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                {/* <div className="w-100"></div> */}

                                                {/* Role */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='role'>Role</label>
                                                        <select
                                                            className="form-select"
                                                            id='role'
                                                            name='role'
                                                            value={formData?.role}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option disabled>Select Role</option>
                                                            <option value="Super Admin">Super Admin</option>
                                                            <option value="Revenue">Revenue</option>
                                                            <option value="Marketing">Marketing</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Status */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='stat'>Status</label>
                                                        <select
                                                            className="form-select"
                                                            id='stat'
                                                            name='status'
                                                            value={formData?.status}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option disabled>Select Status</option>
                                                            <option value="Active">Active</option>
                                                            <option value="Inactive">Inactive</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-sm btn-primary">Add Airline</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

                {/* <!-- Transaction Modal --> */}
                {/* <div className="modal fade" id="ErrorModal" tabIndex="-1" role="dialog" aria-labelledby="ErrorModalLabel"
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
                </div> */}
                {/* <!-- end modal --> */}

                {/* <!-- subscribeModal --> */}
                {/* <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel"
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
                </div> */}
                {/* <!-- end modal --> */}
            </div>
            {/* <!-- end main content--> */}
        </>
    )
}

export default AddAirlines
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addVendor, clearAddVendorError } from '../../../services/slices/AIRLINE/VendorAirlineSlice';
import { useEffect } from 'react';
import Loader from '../../../util/Loader';

const AddVendor = () => {
    // user
    const user = JSON.parse(window.localStorage.getItem('user'));

    const [formData, setFormData] = useState({
        vendor_name: "",
        reporting_person_name: "",
        reporting_person_email: "",
        reporting_person_phone: "",
        reporting_person_alt_phone: "",
        HO_address: "",
        status: "Active",
        role: "Super Admin",
        _airlineId: user?.id
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, loading } = useSelector(state => state.vendorAirlineSlice);

    // handleChange func.
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // handleSubmit func.
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData };
        // console.log(data);
        dispatch(addVendor({ data, navigate }));
    }

    useEffect(() => {
        dispatch(clearAddVendorError());
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
                                    <h4 className="mb-sm-0 font-size-18">Vendor</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/vendor">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item"><Link to="/vendors">Vendor</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Add vendor</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}


                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card mb-0">

                                    {/* form */}
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div className="ml-auto float-end">
                                                <Link to="/vendors" className="btn btn-secondary btn-sm btn-rounded waves-effect waves-light">
                                                    <i className="dripicons-backspace me-1"></i> Back
                                                </Link>
                                            </div>
                                            <h4 className="card-title mb-4">Add Vendor</h4>

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

                                                {/* vendor name */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='vendor_name'>Vendor Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='vendor_name'
                                                            name='vendor_name'
                                                            value={formData?.vendor_name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* HO address */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='HO_address'>HO Address</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='HO_address'
                                                            name='HO_address'
                                                            value={formData?.HO_address}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* admin email id */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='reporting_person_email'>Admin Email ID</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id='reporting_person_email'
                                                            name='reporting_person_email'
                                                            value={formData?.reporting_person_email}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* phone no */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='reporting_person_phone'>Phone No</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='reporting_person_phone'
                                                            name='reporting_person_phone'
                                                            value={formData?.reporting_person_phone}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                {/* alternative number */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='reporting_person_alt_phone'>Alternative Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='reporting_person_alt_phone'
                                                            name='reporting_person_alt_phone'
                                                            value={formData?.reporting_person_alt_phone}
                                                            onChange={handleChange}
                                                        // required
                                                        />
                                                    </div>
                                                </div>

                                                {/* contact person name */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='reporting_person_name'>Contact Person name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='reporting_person_name'
                                                            name='reporting_person_name'
                                                            value={formData?.reporting_person_name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-100"></div>

                                                {/* designation status */}
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label htmlFor='stat'>Designation Status</label>
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
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-sm btn-primary">Add Vendor</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

                {/* <!-- Transaction Modal --> */}
                {/* <div className="modal fade" id="ErrorModal" tabindex="-1" role="dialog" aria-labelledby="ErrorModalLabel"
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
                                                        <th className="align-middle" style="width: 180px;">Actions</th>
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
                {/* <div className="modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel"
                    aria-hidden="true" style="display: none;">
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

export default AddVendor
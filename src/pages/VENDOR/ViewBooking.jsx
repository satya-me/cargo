import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../util/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearDeleteBookingStatus, getAllBookingData } from '../../services/slices/VENDOR/VendorCargoBookingSlice';
import { useState } from 'react';
import ViewListBooking from '../../components/VENDOR/core/ViewListBooking';
import Loader from '../../util/Loader';

const ViewBooking = () => {
    // user
    const user = JSON.parse(window.localStorage.getItem("user"));
    const USER_ID = user?.id;

    const [pageNumber, setPageNumber] = useState(0);
    const [search, setSearch] = useState("");
    const [AllData, setAllData] = useState([]);

    const dispatch = useDispatch();
    const { all_booking_data, delete_booking_status } = useSelector(state => state.vendorCargoBookingSlice);
    const { loading } = useSelector(state => state.vendorCargoBookingSlice);
    const ALL_BOOKING_DATA = (user?.type === "vendor") ? AllData?.filter(item => item?._vendorId?._id === USER_ID)?.filter(item => item?.isDeleted === false) : AllData?.filter(item => item?.isDeleted === false);

    const D_BOOKING_STATUS = delete_booking_status?.success;

    // console.log(ALL_BOOKING_DATA);

    // pagination
    const userPerPage = 3;
    const pagesVisited = pageNumber * userPerPage;
    const newData = ALL_BOOKING_DATA?.slice(pagesVisited, pagesVisited + userPerPage);
    const pageCount = Math.ceil((ALL_BOOKING_DATA?.length || 0) / userPerPage);

    const changePage = (newData) => {
        setPageNumber(newData?.selected)
    }

    useEffect(() => {
        dispatch(getAllBookingData());
        return () => {
            dispatch(clearDeleteBookingStatus());
        };
    }, [dispatch, D_BOOKING_STATUS]);

    useEffect(() => {
        setAllData(all_booking_data?.data);
    }, [all_booking_data]);

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
                                    <h4 className="mb-sm-0 font-size-18">Booking List</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/vendor">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item active">View Booking List</li>
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
                                        <div className="ml-auto float-end">
                                            {
                                                (user?.type === "admin") || (user?.type === "airline") ?
                                                    null
                                                    :
                                                    <Link to="/vendor/add-booking" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                        <i className="bx bx-plus me-1"></i> Add Booking
                                                    </Link>
                                            }
                                        </div>
                                        <div className="search-box me-2 mb-2 d-flex w-50">
                                            <div className="position-relative w-50">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search..."
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <i className="bx bx-search-alt search-icon"></i>
                                            </div>
                                            <div className="position-relative w-50 ms-2">
                                                <select className="form-select form-control">
                                                    <option>Filter</option>
                                                    <option>Old-New</option>
                                                    <option>New-Old</option>
                                                    {/* <option>A-Z</option> */}
                                                    {/* <option>Z-A</option> */}
                                                </select>
                                                <i className="mdi mdi-filter-outline search-icon"></i>
                                            </div>

                                        </div>

                                        <table className="table text-center">
                                            <thead>
                                                <tr>

                                                    <th>Order ID</th>
                                                    <th>Booking Status</th>
                                                    <th>AWB Number</th>
                                                    <th>Departuer  Destination</th>
                                                    <th>Booked Flight</th>
                                                    <th>Price Paid</th>
                                                    <th>Time</th>
                                                    <th>Type</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ALL_BOOKING_DATA?.length > 0 ?
                                                        ALL_BOOKING_DATA?.filter((item) => {
                                                            if (search === "") {
                                                                return item;
                                                            }
                                                            return (
                                                                item?.AWB_number?.toLowerCase()?.includes(search.toLowerCase())
                                                            )
                                                        })?.map(item => {
                                                            return (
                                                                !(item?.isDeleted) ?
                                                                    <tr key={item?._id}>
                                                                        <ViewListBooking item={item} />
                                                                    </tr>
                                                                    : null
                                                            )
                                                        }).slice(pagesVisited, pagesVisited + userPerPage)
                                                        :
                                                        <tr>
                                                            <td><h2>No Data Found</h2></td>
                                                        </tr>
                                                }
                                            </tbody>
                                        </table>

                                        {/* Pagination */}
                                        <Pagination
                                            data={newData}
                                            pageCount={pageCount}
                                            changePage={changePage}
                                        />
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
                {/* <!-- end main content--> */}
            </div>
        </>
    )
}

export default ViewBooking
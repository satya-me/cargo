import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    // user
    const user = JSON.parse(window.localStorage.getItem('user'));
    // DASHBOARD_URL
    const DASHBOARD_URL = (user?.type === 'admin') ? "/admin"
        : (user?.type === 'airline') ? "/airline" : "/vendor"

    // ADMIN
    // const ADMIN = (user?.type === 'admin');
    // AIRLINE
    const AIRLINE = (user?.type === 'airline') && (user?.role === 'Super Admin');
    // VENDOR
    const VENDOR = (user?.type === 'vendor') && (user?.role === 'Super Admin');

    return (
        <>
            <div id="layout-wrapper">
                {/* <!-- ========== Left Sidebar Start ========== --> */}
                <div className="vertical-menu">

                    <div data-simplebar="init" className="h-100">
                        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={{ right: "-20px", bottom: "0px" }}>
                                    <div className="simplebar-content-wrapper"
                                        style={{ height: "100%", paddingRight: "20px", paddingBottom: "0px", overflow: "hidden scroll" }}>
                                        <div className="simplebar-content" style={{ padding: "0px" }}>

                                            {/* <!--- Sidemenu --> */}
                                            <div id="sidebar-menu" className="mm-active">
                                                {/* <!-- Left Menu Start --> */}
                                                <ul className="metismenu list-unstyled mm-show" id="side-menu">
                                                    <li className="menu-title">Menu</li>
                                                    <li>
                                                        <Link to={DASHBOARD_URL} className="waves-effect">
                                                            <i className="bx bx-home-circle"></i>
                                                            <span>Dashboard</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        {
                                                            !(AIRLINE || VENDOR) ?
                                                                <Link to="/users" className="waves-effect">
                                                                    <i className="fa fa-users-cog"></i>
                                                                    <span> Users</span>
                                                                </Link>
                                                                : null
                                                        }
                                                    </li>

                                                    <li className="menu-title">Manage Airlines</li>

                                                    <li>
                                                        {
                                                            !(AIRLINE || VENDOR) ?
                                                                <Link to="/airlines" className="waves-effect">
                                                                    <i className="bx bxs-plane-alt"></i>
                                                                    <span> Manage Airlines</span>
                                                                </Link>
                                                                : null
                                                        }
                                                    </li>
                                                    <li>
                                                        {
                                                            !(AIRLINE || VENDOR) ?
                                                                <Link to="/permission" className="waves-effect">
                                                                    <i className="bx bx-cog"></i>
                                                                    <span> Airline Permission</span>
                                                                </Link>
                                                                : null
                                                        }
                                                    </li>
                                                    <li>
                                                        {
                                                            !(VENDOR) ?
                                                                <Link to="/vendors" className="waves-effect">
                                                                    <i className="fa fa-user-tie"></i>
                                                                    <span> Manage Vendors</span>
                                                                </Link>
                                                                : null
                                                        }

                                                    </li>
                                                    <li>
                                                        <Link to="/flights" className="waves-effect">
                                                            <i className="mdi mdi-shield-airplane-outline"></i>
                                                            <span> Manage Flights</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/viewbooking" className="waves-effect">
                                                            <i className="mdi mdi-eye-outline"></i>
                                                            <span> View Bookings</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="waves-effect">
                                                            <i className="mdi mdi-file-chart-outline"></i>
                                                            <span> Report</span>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* <!-- Sidebar --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" style={{ width: "auto", height: "1321px" }}></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                            <div className="simplebar-scrollbar simplebar-visible"
                                style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical simplebar-hover" style={{ visibility: "visible" }}>
                            <div className="simplebar-scrollbar simplebar-visible"
                                style={{ height: "57px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Left Sidebar End --> */}
            </div>
        </>
    )
}

export default SideBar
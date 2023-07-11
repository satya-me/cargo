import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { doLogOut } from '../../services/slices/ADMIN/AuthSlice';

const NavBar = () => {
    // token
    const token = JSON.parse(window.localStorage.getItem('token'));
    // user
    const user = JSON.parse(window.localStorage.getItem('user'));
    // DASHBOARD_URL
    const DASHBOARD_URL = (user?.type === 'admin') ? "/admin"
        : (user?.type === 'airline') ? "/airline" : "/vendor"
    // SIGNIN_URL
    const SIGNIN_URL = (user?.type === 'admin') ? "/admin/login"
        : (user?.type === 'airline') ? "/airline/login" : "/vendor/login"

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // logOut function
    const logOut = () => {
        dispatch(doLogOut());
        navigate('/');
    }

    // handling hamburger menu
    const toggleBodyClass = () => {
        if (document.body.classList.contains('sidebar-enable', 'vertical-collapsed')) {
            document.body.classList.remove('sidebar-enable', 'vertical-collpsed');
        } else {
            document.body.classList.add('sidebar-enable', 'vertical-collpsed');
        }
    };

    useEffect(() => {
        // Handled "ResizeObserver loop limit exceeded" issue
        window.addEventListener('error', e => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        });
    }, []);

    return (
        <>
            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            {/* <!-- LOGO --> */}
                            <div className="navbar-brand-box">
                                <Link to={DASHBOARD_URL} className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="/assets/imgs/logo-icon.png" alt="img" height="30" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="/assets/imgs/logo.png" alt="img" height="60" />
                                    </span>
                                </Link>
                            </div>

                            <button onClick={toggleBodyClass} type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                                id="vertical-menu-btn">
                                <i className="fa fa-fw fa-bars"></i>
                            </button>

                            {/* <!-- App Search--> */}
                            <form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="bx bx-search-alt"></span>
                                </div>
                            </form>
                        </div>

                        <div className="d-flex">
                            {/* Notification bell */}
                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="true">
                                    <i className="bx bx-bell bx-tada"></i>
                                    <span className="badge bg-danger rounded-pill">3</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-notifications-dropdown" data-popper-placement="bottom-end">
                                    <div className="p-3">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="#!" className="small" key="t-view-all">View All </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-simplebar="init" style={{ maxHeight: "230px" }}>
                                        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer"></div>
                                            </div>
                                            <div className="simplebar-mask">
                                                <div className="simplebar-offset" style={{ right: "-20px", bottom: "0px" }}>
                                                    <div className="simplebar-content-wrapper"
                                                        style={{
                                                            height: "auto",
                                                            paddingRight: "20px",
                                                            paddingBottom: "0px",
                                                            overflow: "hidden scroll"
                                                        }}>
                                                        <div className="simplebar-content" style={{ padding: "0px" }}>
                                                            <Link to="#" className="text-reset notification-item">
                                                                <div className="d-flex">
                                                                    <div className="avatar-xs me-3">
                                                                        <span
                                                                            className="avatar-title bg-primary rounded-circle font-size-16">
                                                                            <i className="bx bx-bell"></i>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="mt-0 mb-1" key="t-your-order">
                                                                            No Alerts to display</h6>
                                                                        <div className="font-size-12 text-muted">

                                                                            <p className="mb-0 mt-2"><i
                                                                                className="mdi mdi-clock-outline"></i> <span
                                                                                    key="t-min-ago">3 min ago</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="#" className="text-reset notification-item">
                                                                <div className="d-flex">
                                                                    <div className="avatar-xs me-3">
                                                                        <span
                                                                            className="avatar-title bg-primary rounded-circle font-size-16">
                                                                            <i className="bx bx-bell"></i>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="mt-0 mb-1" key="t-your-order">
                                                                            No Alerts to display</h6>
                                                                        <div className="font-size-12 text-muted">

                                                                            <p className="mb-0 mt-2"><i
                                                                                className="mdi mdi-clock-outline"></i> <span
                                                                                    key="t-min-ago">3 min ago</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link to="#" className="text-reset notification-item">
                                                                <div className="d-flex">
                                                                    <div className="avatar-xs me-3">
                                                                        <span
                                                                            className="avatar-title bg-primary rounded-circle font-size-16">
                                                                            <i className="bx bx-bell"></i>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="mt-0 mb-1" key="t-your-order">
                                                                            No Alerts to display</h6>
                                                                        <div className="font-size-12 text-muted">

                                                                            <p className="mb-0 mt-2"><i
                                                                                className="mdi mdi-clock-outline"></i> <span
                                                                                    key="t-min-ago">3 min ago</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="simplebar-placeholder" style={{ width: "auto", height: "388px" }}></div>
                                        </div>
                                        <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                                            <div className="simplebar-scrollbar"
                                                style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}></div>
                                        </div>
                                        <div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                                            <div className="simplebar-scrollbar"
                                                style={{ transform: "translate3d(0px, 0px, 0px)", display: "block", height: "143px" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 border-top d-grid">
                                        <Link className="btn btn-sm btn-link font-size-14 text-center" to="#">
                                            <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View
                                                More..</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Profile dropdown */}
                            {
                                token ?
                                    <div className="dropdown d-inline-block">
                                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img className="rounded-circle header-profile-user" src="/assets/imgs/avatar.png"
                                                alt="Header Avatar" />
                                            <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                                                {
                                                    user?.username ? user?.username
                                                        : user?.person_name ? user?.person_name
                                                            : user?.reporting_person_name ? user?.reporting_person_name
                                                                : "User"
                                                }
                                            </span>
                                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            {/* <!-- item--> */}
                                            <Link className="dropdown-item" to="#"><i className="bx bx-user font-size-16 align-middle me-1"></i>
                                                <span key="t-profile">Profile</span></Link>
                                            <Link className="dropdown-item d-block" to="#"><i
                                                className="bx bx-wrench font-size-16 align-middle me-1"></i> <span
                                                    key="t-settings">Settings</span></Link>
                                            <div className="dropdown-divider"></div>

                                            {/* Logout Button */}
                                            <Link
                                                onClick={logOut}
                                                className="dropdown-item text-danger"
                                                to="/"
                                            ><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span
                                                key="t-logout">Logout</span></Link>
                                        </div>
                                    </div>
                                    :
                                    <div className="dropdown d-inline-block">
                                        <Link className="btn header-item waves-effect" to={SIGNIN_URL} style={{ paddingTop: "20px" }}>
                                            <span className="d-none d-xl-inline-block ms-1 fw-bold fs-5" key="t-henry">Sign in</span>
                                            <i className="bx bx-log-in font-size-20 align-middle text-dark" style={{ marginBottom: "4px" }}></i>
                                        </Link>
                                    </div>
                            }
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default NavBar
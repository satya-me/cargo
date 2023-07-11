import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { clearVendorAuthError, fetchVendorLogin, forgotVendorPassword } from '../../services/slices/VENDOR/VendorAuthSlice';
import Loader from '../../util/Loader';

const VendorLogin = () => {
    const date = new Date();
    const { airline_name } = useParams();
    const AIRLINE_DATA = JSON.parse(window.localStorage.getItem("airline_data"));
    const filteredData = AIRLINE_DATA?.filter(item => item?.airline === airline_name);

    const [formData, setFormdata] = useState({
        email: "",
        password: "",
        airlineID: filteredData[0]?._id,
        isRemember: false
    });

    // console.log(filteredData[0]);

    const [emailData, setEmailData] = useState({ email: "", airline_name: filteredData[0]?.airline });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, loading } = useSelector(state => state.vendorAuthSlice)

    // onChange function
    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    // onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData };
        // console.log(data);
        dispatch(fetchVendorLogin({ data, navigate }));
    }


    // forgetPassSubmit func.
    const forgetPassSubmit = () => {
        dispatch(forgotVendorPassword(emailData));
        setEmailData({ email: "" })
    };


    // console.log(error);
    useEffect(() => {
        dispatch(clearVendorAuthError());
    }, [dispatch])


    // style
    const styles = {
        bodyWrapper: {
            background: `url('/assets/imgs/sebastian-grochowicz-flvyiQkkYYM-unsplash.jpg') no-repeat center`,
            backgroundSize: 'cover',
            position: 'relative',
            height: '100vh',
        },
        bodyWrapperAfter: {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100vh',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: -1,
        },
        padTop: {
            paddingTop: '30px',
        },
        airlineLogo: {
            width: '200px',
            height: '100px',
            margin: '0 auto',
        },
        airlineLogoImg: {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        },
    };

    const combinedStyles = {
        ...styles.bodyWrapper,
        ...styles.padTop,
    };

    return (
        <>
            {/* Loader */}
            {loading && <Loader />}

            <div style={combinedStyles} className="body_wrapper pad_top">
                <div className="account-pages pt-5 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="text-white py-3">
                                    <Link to="/" className='fs-5 fw-bold' style={{ color: "#fff" }}>
                                        <span><i className="fas fa-home mx-1"></i>Home</span>
                                    </Link>
                                </div>
                                <div className="card overflow-hidden">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-12">
                                                <div style={styles.airlineLogo}>
                                                    {
                                                        airline_name === "IndiGo" ?
                                                            <img style={styles.airlineLogoImg} src="/assets/imgs/airline.png" className="img-fluid" alt='img' />
                                                            : airline_name === "Air India" ?
                                                                <img style={styles.airlineLogoImg} src="/assets/imgs/airindia.png" className="img-fluid" alt='img' />
                                                                : airline_name === "AirAsia" ?
                                                                    <img style={styles.airlineLogoImg} src="/assets/imgs/airline2.png" className="img-fluid" alt='img' />
                                                                    : airline_name === "Air India Express" ?
                                                                        <img style={styles.airlineLogoImg} src="/assets/imgs/Air_India_Express.png" className="img-fluid" alt='img' />
                                                                        : airline_name === "SpiceJet" ?
                                                                            <img style={styles.airlineLogoImg} src="/assets/imgs/airline5.png" className="img-fluid" alt='img' />
                                                                            : airline_name === "Blue Dart" ?
                                                                                <img style={styles.airlineLogoImg} src="/assets/imgs/BlueDartAviation.png" className="img-fluid" alt='img' />
                                                                                : airline_name === "Vistara" ?
                                                                                    <img style={styles.airlineLogoImg} src="/assets/imgs/airline7.png" className="img-fluid" alt='img' />
                                                                                    : airline_name === "Quick Jet" ?
                                                                                        <img style={styles.airlineLogoImg} src="/assets/imgs/quickjet.jpg" className="img-fluid" alt='img' />
                                                                                        : airline_name === "Akasa Air" ?
                                                                                            <img style={styles.airlineLogoImg} src="/assets/imgs/akasa-air-logo.png" className="img-fluid" alt='img' />
                                                                                            : <img style={styles.airlineLogoImg} src="/assets/imgs/pradhan-air.png" className="img-fluid" alt='img' />
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        {/* Site logo to navigate to dashboard */}
                                        {/* <div className="auth-logo">
                                            <Link to="/" className="auth-logo-dark">
                                                <div className="avatar-md profile-user-wid mb-2">
                                                    <span className="avatar-title rounded-circle bg-light">
                                                        <img src="/assets/imgs/logo-icon.png" alt="img" height="35" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div> */}
                                        <div className="p-2">
                                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                                {/* Login error message */}
                                                {
                                                    (error?.success === false) ?
                                                        <div className='login_error'>
                                                            <p className='fw-bold text-dark'>{error?.message}</p>
                                                        </div>
                                                        :
                                                        null
                                                }

                                                {/* email */}
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Enter Email ID"
                                                        name='email'
                                                        value={formData?.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                {/* Password */}
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                        aria-label="Password"
                                                        aria-describedby="password-addon"
                                                        name='password'
                                                        value={formData?.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                {/* Remember me */}
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="remember-check"
                                                        name='isRemember'
                                                        checked={formData?.isRemember}
                                                        onChange={() => setFormdata({ ...formData, isRemember: formData?.isRemember ? false : true })}
                                                    />
                                                    <label className="form-check-label" htmlFor="remember-check">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <div className="mt-3 d-grid">
                                                    <button className="btn btn-primary btn-block">Log In</button>
                                                </div>

                                                {/* Forgot password link*/}
                                                <div className="mt-4 text-center">
                                                    <Link
                                                        to="#"
                                                        data-toggle="modal"
                                                        className="text-muted"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#myModal"
                                                    ><i className="mdi mdi-lock me-1"></i> Forgot your password?</Link >
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div className="mt-3 text-center text-white">
                                    <div>
                                        <p>© {new Date(date).toLocaleString('en-US', {
                                            year: 'numeric'
                                        })} CargoBooking. all rights reserved.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal"
                    className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Forgot Password ?</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body my-4">
                                <p>Enter your e-mail address below to reset your password.</p>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter Your Registered Email ID"
                                    autoComplete="off"
                                    className="form-control placeholder-no-fix"
                                    value={emailData?.email}
                                    onChange={(e) => setEmailData({ ...emailData, [e.target.name]: e.target.value })}
                                    required
                                />

                                {/* error message */}
                                {
                                    (error?.success === false) ?
                                        <div className='login_error'>
                                            <p className='fw-bold text-dark'>{error?.message}</p>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            <div className="modal-footer">
                                <button data-bs-dismiss="modal" className="btn btn-secondary" type="button">Cancel</button>
                                <button onClick={forgetPassSubmit} className="btn btn-primary" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VendorLogin
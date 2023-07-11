import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearError, fetchLogin, forgotPassword } from '../../services/slices/ADMIN/AuthSlice'
import { useEffect } from 'react'
import Loader from '../../util/Loader'

const Login = () => {
    const date = new Date()
    const [formData, setFormdata] = useState({
        username: "",
        password: "",
        isRemember: false
    });

    const [emailData, setEmailData] = useState({ email: "" });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, loading } = useSelector(state => state.authSlice)

    // onChange function
    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    // onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData };
        dispatch(fetchLogin({ data, navigate }));
    }


    // forgetPassSubmit func.
    const forgetPassSubmit = () => {
        dispatch(forgotPassword(emailData));
        setEmailData({ email: "" })
    };


    // console.log(error);
    useEffect(() => {
        dispatch(clearError())
    }, [dispatch])

    return (
        <>
            {/* Loader */}
            {loading && <Loader />}

            <div className="account-pages mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-primary">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-white p-4">
                                                <h5 className="text-white">Welcome Back !</h5>
                                                <p>Sign in to CargoBooking.</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="/assets/imgs/profile-img.png" alt="img" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">

                                    {/* Site logo to navigate to dashboard */}
                                    <div className="auth-logo">
                                        <Link to="/" className="auth-logo-dark">
                                            <div className="avatar-md profile-user-wid mb-2">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src="/assets/imgs/logo-icon.png" alt="img" height="35" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
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

                                            {/* Username */}
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter username"
                                                    name='username'
                                                    value={formData?.username}
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
                            <div className="mt-3 text-center">

                                <div>
                                    <p>© {new Date(date).toLocaleString('en-US', {
                                        year: 'numeric'
                                    })} CargoBooking. all rights reserved.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >

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
        </>
    )
}

export default Login
<div className="account-pages ">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                    <div className="bg-primary">
                        <div className="row">
                            <div className="col-7">
                                <div className="text-white p-4">
                                    <h5 className="text-white">Welcome Back !</h5>
                                    <p>Sign in to {airline_name}</p>
                                </div>
                                {/* <div className="airline_logo">
                                                    <img src="/assets/imgs/airline.png" alt="" />
                                                </div> */}
                            </div>

                            {/* Airline Logo */}
                            <div className="col-5 align-self-end">
                                {
                                    airline_name === "IndiGo" ?
                                        <img src="/assets/imgs/6E.png" className="img-fluid" alt='img' />
                                        : airline_name === "Air India" ?
                                            < img src="/assets/imgs/airindia.png" className="img-fluid" alt='img' />
                                            : airline_name === "AirAsia" ?
                                                < img src="/assets/imgs/I5.png" className="img-fluid" alt='img' />
                                                : airline_name === "Air India Express" ?
                                                    < img src="/assets/imgs/Air_India_Express.png" className="img-fluid" alt='img' />
                                                    : airline_name === "SpiceJet" ?
                                                        < img src="/assets/imgs/sg.png" className="img-fluid" alt='img' />
                                                        : airline_name === "Blue Dart" ?
                                                            < img src="/assets/imgs/BlueDartAviation.png" className="img-fluid" alt='img' />
                                                            : airline_name === "Vistara" ?
                                                                < img src="/assets/imgs/vistara-logo.png" className="img-fluid" alt='img' />
                                                                : airline_name === "Quick Jet" ?
                                                                    < img src="/assets/imgs/quickjet.jpg" className="img-fluid" alt='img' />
                                                                    : airline_name === "Akasa Air" ?
                                                                        < img src="/assets/imgs/akasa-air-logo.png" className="img-fluid" alt='img' />
                                                                        : < img src="/assets/imgs/pradhan-air.png" className="img-fluid" alt='img' />
                                }
                            </div>

                        </div>
                    </div>
                    <div className="card-body pt-0">

                        {/* Site logo to navigate to dashboard */}
                        <div className="auth-logo">
                            <Link to="/vendor" className="auth-logo-dark">
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
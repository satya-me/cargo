import React from 'react'

const Footer = () => {
    const date = new Date()

    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            © {new Date(date).toLocaleString('en-US', {
                                year: 'numeric'
                            })} CargoBooking. all rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
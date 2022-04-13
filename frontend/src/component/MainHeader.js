import React from "react";

const MainHeader = () => {

    return (
        <div>
        <header className="p-3 bg-dark text-white all-headers">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Homepage"><use href="#bootstrap" /></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                        {/* <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li> */}
                        <li><a href="/#" className="nav-link px-2 text-white">About us</a></li>
                    </ul>

                    <div className="text-end">
                        <a href="/login">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                        </a>
                        <a href="/register">
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </div>

    )

}
export default MainHeader; 
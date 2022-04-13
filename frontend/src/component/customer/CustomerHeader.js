import React from "react";

const CustomerHeader = ({ custName }) => {

    return (
        <div>
            <header className="p-3 bg-dark text-white all-headers">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/productListforCust" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Homepage"><use href="#bootstrap" /></svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/productListforCust" className="nav-link px-2 text-white">Home   </a></li>
                            <li><a href="/orderListForCust" className="nav-link px-2 text-white">   Orders    </a></li>
                            <li><a href="/cart" className="nav-link px-2 text-white">My Cart  </a></li>
                            <li><a href="/aboutus" className="nav-link px-2 text-white">About us</a></li>
                        </ul>

                        <div className="text-end">
                            <a href="/profile">
                                <button type="button" className="btn btn-dark me-2">{custName}</button>
                            </a>
                            <a href="/logout">
                                <button type="button" className="btn btn-danger me-2">Log Out</button>
                            </a>
    
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )

}
export default CustomerHeader; 
import React from "react";

const OwnerHeader = () => {

    return (
        <div>
            <header className="p-3 bg-dark text-white all-headers">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/todaysOrder" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Homepage"><use href="#bootstrap" /></svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/todaysOrder" className="nav-link px-2 text-white">Home  </a></li>
                            <li><a href="/product" className="nav-link px-2 text-white">Products List    </a></li>
                            <li><a href="/customerList" className="nav-link px-2 text-white">Customers List     </a></li>
                            <li><a href="/completedOrder" className="nav-link px-2 text-white">Completed-Orders</a></li>
                           
                        </ul>

                        <div className="text-end">
                            <a href="/login">
                                <button type="button" className="btn btn-danger me-2">Log Out</button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )

}
export default OwnerHeader; 
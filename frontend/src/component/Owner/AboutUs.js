import React, { Component } from "react";
import { Button, Form , Col } from 'react-bootstrap';
import { useState } from "react";
import Photo1 from "../Photo/1.jpg"
import Photo2 from "../Photo/2.jpg"
import CustomerHeader from "../customer/CustomerHeader";

class AboutUs extends React.Component {

    render(){
        return(
            <div>
            <CustomerHeader/>
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Photo1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={Photo2} className="d-block w-100" alt="..." />

                        </div>
                        </div>
            </div>
            </div>
        )
    }

}
export default AboutUs;
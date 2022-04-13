import React, { Component, useEffect, useState } from "react";
import { Form, Button, Row } from 'react-bootstrap';
import Moment from 'moment';
import Swal from "sweetalert2";
import ProductServices from "../../services/ProductServices";
import OwnerHeader from "../Owner/OwnerHeader";
import CustomerService from "../../services/CustomerService";

class UpdateCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
            cid1: "",
            name1: "",
            email1: "",
            password1: "",
            mob_no1: "",
            address1: "",
            address2: "",
            pincode1: "",
            city1: "",
          
        }
    }

    componentDidMount() {
        console.log("in custometr update compount didMount");
        var profile=JSON.parse(sessionStorage["custdata"]);
    let id=profile.cId;
        if (profile != null) {
           
            //to send get request to webservice and get the object which matches with id
            CustomerService.getCustomerById(id).then((response) => {
                console.log("elase   get data by id for update :" + response.data);
                let pObj = response.data;
                this.setState({
                    cid1: pObj.custId,
                    name1: pObj.name,
                    email1: pObj.email,
                    password1: pObj.password,
                    mob_no1: pObj.mobile_no,
                    address1: pObj.addr1,
                    address2: pObj.addr2,
                    city1: pObj.city,
                    pincode1: pObj.pincode

                });
            })
            console.log("Name : " + this.state.name1)
        }

        else {
            console.log("in add employee");
            return;
        }
    }



    addOrUpdate = (event) => {
        event.preventDefault(); // to stop the refreshing the page
        console.log(this.state)
        var profile=JSON.parse(sessionStorage["custdata"]);
        let customer = {
            custId: profile.cId,
            name: this.state.name1,
            email: this.state.email1,
            password: this.state.password1,
            mobile_no: this.state.mob_no1,
            addr1: this.state.address1,
            addr2: this.state.address2,
            city: this.state.city1,
            pincode: this.state.pincode1
        };


        if (customer != null) {
            CustomerService.updateCustomer(customer).then((response) => {
                


                let dummycust = {
                    "cId": response.data.custId,
                    "custName": response.data.name,
                    "emailId": response.data.email,
                    "mobileNo": response.data.mobile_no,
                    "city": response.data.city,
                    "pincode": response.data.pincode,
                    "address": response.data.addr1
                  }
            
                  sessionStorage.setItem("logId", response.data.custId);
                  let stringedobj = JSON.stringify(dummycust);
                  sessionStorage.setItem('custdata', stringedobj);
            
                  console.log(response.data.custId);
             
                  Swal.fire({ title: "Done", text: " Your profile has been updated", icon: "succes" })
                  this.props.history.push("/profile");

                }, (error) => {
                  sessionStorage.clear();
                  console.log("Error in login  cust data not recived from back end");
                  Swal.fire({ title: "Oops", text: " user might not exists in our system", icon: "error" })
                })
            
        }
        else {
           
                this.props.history.push("/updateProfile");

        }
    };

    render() {
        return (
            <div>
            <div><OwnerHeader/></div>

                <h1 className="alert alert-info">Update your profile</h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name1}
                                onChange={(event) => { this.setState({ name1: event.target.value }) }}
                            />
                        </Form.Group>

                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={this.state.email1}
                                onChange={(event) => { this.setState({ email1: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" value={this.state.password1}
                                onChange={(event) => { this.setState({ password1: event.target.value }) }}
                            />
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Movile No</Form.Label>
                            <Form.Control type="text" value={this.state.mob_no1}
                                onChange={(event) => { this.setState({ mob_no1: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text" value={this.state.address1}
                                onChange={(event) => { this.setState({ address1: event.target.value }) }}
                            />
                        </Form.Group>

                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text" value={this.state.address2}
                                onChange={(event) => { this.setState({ address2: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={this.state.city1}
                                onChange={(event) => { this.setState({ city1: event.target.value }) }}
                            />
                        </Form.Group>

                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>pincode</Form.Label>
                            <Form.Control type="text" value={this.state.pincode1}
                                onChange={(event) => { this.setState({ pincode1: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" onClick={this.addOrUpdate}>
                        Update
                    </Button>

                </Form>
            </div>
        )
    }
}
export default UpdateCustomer;
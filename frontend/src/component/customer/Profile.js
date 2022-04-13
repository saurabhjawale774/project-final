import React,{Component} from "react";
import {Form,Button,Row} from 'react-bootstrap';
import Swal from "sweetalert2";
import CustomerService from "../../services/CustomerService";
import CustomerHeader from "./CustomerHeader";
     function Profile (){
     var profile=JSON.parse(sessionStorage["custdata"]);

        return(
         <div>
           <CustomerHeader custName={profile.custName}/>
                     <div className="row">
           {/* <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/productListforCust">Home</Button></div>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profile">Update Profile</Button></div> 
                <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/orderListForCust">Orders</Button></div>  
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/cart">My Cart</Button></div>
                <div className="col-sm-1 col-md-2" > <Button variant="danger" href="/logout">Log Out</Button>
               </div>  */}
           </div>
<div> <hr></hr></div>

<div>
            <h1 className="alert alert-primary">Hello ..{profile.custName}</h1>
                <Form>
                <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Email Id   : {profile.emailId}</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Mobile_no   : {profile.mobileNo} </Form.Label>
                        </Form.Group>
                    </Row>
                <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Address Line 1   : {profile.address} </Form.Label>
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>City  : {profile.city} </Form.Label>
                        </Form.Group>
                </Row>

                <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Pincode  : {profile.pincode} </Form.Label>
                        </Form.Group>
                </Row>
                </Form>
                </div>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/updateProfile">Update Profile</Button></div> 
         </div>
        )
 
        }
        export default Profile;
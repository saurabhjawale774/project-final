import React,{Component} from "react";
import {Form,Button,Row} from 'react-bootstrap';
import Swal from "sweetalert2";
import CustomerService from "../../services/CustomerService";
import OwnerHeader from "./OwnerHeader";
     function ProfileOwner (){
    
      

        return(
         <div>
         <OwnerHeader/>
           {/* <div className="row">
                <div className="col-sm-1 col-md-2"> <Button variant="outline-primary" href="/todaysOrder">Home</Button></div> 
                <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/customerList">All Custmors</Button></div>  
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/product">Product List</Button></div>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/completedOrder">Completed Order</Button></div>
                <div className="col-sm-2 col-md-2" > <Button variant="danger" href="/login">Log Out</Button> </div> 
             
            <div> <hr className="style = border-top: 1px solid red"/> <br></br>  </div>
            </div> */}
<div> <hr></hr></div>

<div>
            <h1 className="alert alert-primary">Hello ..Saurabh Jawale</h1>
                <Form>
                <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Email Id   :saurabh@gmail.com</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Mobile_no   : 9970867684</Form.Label>
                        </Form.Group>
                    </Row>
                <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Address   : Dattanagar Kopargaon </Form.Label>
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>City  : Kopargaon </Form.Label>
                        </Form.Group>
                </Row>

                <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Pincode  : 423605</Form.Label>
                        </Form.Group>
                </Row>
                </Form>
                </div>
         </div>
        )
 
        }
        export default ProfileOwner;
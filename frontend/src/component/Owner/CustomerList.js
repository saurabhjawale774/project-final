import React,{Component,useState} from "react";
import { Person, PersonCircle, Trash,TelephoneFill } from "react-bootstrap-icons";
import {Form,Button,Row,FormControl} from 'react-bootstrap';
import CustomerService from "../../services/CustomerService";
import OwnerHeader from "./OwnerHeader";

class CustomerList extends React.Component{
    constructor(props) {

        super(props);
        console.log("In Customer list constructor ");
       
        this.state={
            custArr:[]
        }
    }
    componentDidMount(){
       CustomerService.getCustomerList().then((response)=>{
            console.log("hiii"+response.data);
            this.setState({custArr:response.data})
        })
    }

    deleteById=(cid)=>{
   CustomerService.deleteCustomer(cid).then((resp)=>{
            window.location.reload(false);
            this.props.history.push("/customerList");
        })
     }
    


    render(){
        console.log("In Customer list render");

        return(
            <div>
            <OwnerHeader/>
            {/* <div className="row">
                            <div className="col-sm-1 col-md-2"> <Button variant="outline-primary" href="/todaysOrder">Home</Button></div>
                            <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profileOwner">My Profile</Button></div> 
                            <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/product">Product List</Button></div>
                            <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/completedOrder">Completed Order</Button></div>
                            <div className="col-sm-2 col-md-2" > <Button variant="danger" href="/login">Log Out</Button> </div> 
             
            <hr className="style = border-top: 1px solid red"/> <br></br>
      
            </div> */}
            <div>
               <h1 className="alert alert-primary">Customer List</h1>

             <Form className="d-flex col-sm-3 col-md-4">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                <Button variant="outline-success">Search</Button>
             </Form> 
         
               </div>
               <table className="table table-striped">
                <thead>
                <tr>
                  
               
                    <th className="col-sm-1 col-md-2" >Customer Name</th>
                    <th className="col-sm-1 col-md-2">Mobile_no</th>
                    <th className="col-sm-2 col-md-3">Address</th>
                    <th className="col-sm-1 col-md-1">City</th>
                    <th className="col-sm-1 col-md-2">Pincode</th>
                    {/* <th>Delete</th> */}
                </tr>
                </thead>
                <tbody>{
                    this.state.custArr.map((c)=>
                    <tr key={c.custId}>
                    <td ><PersonCircle/>  {c.name}</td>
                    <td ><TelephoneFill/>{c.mobile_no}</td>
                    <td >{c.addr1}</td>
                    <td >{c.city}</td>
                    <td >{c.pincode}</td>
                    {/* <td onClick={()=>{this.deleteById(c.cust)}}><Trash/></td> */}

                    </tr> )

                }</tbody>
                </table>
            </div>
        )
   
   
    }
}
export default CustomerList;
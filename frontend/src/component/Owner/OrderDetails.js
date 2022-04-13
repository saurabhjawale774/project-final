
import React,{Component} from "react";
import {useState,useEffect} from "react";
import {Button,Navbar,Container,Form,FormControl} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    useHistory,
    Route,
    Link
  } from "react-router-dom";
import Swal from "sweetalert2";
import { CaretRightFill,CartPlusFill, Trash} from "react-bootstrap-icons";
import ProductServices from "../../services/ProductServices";
import OrderServices from "../../services/OrderServices";
import OwnerHeader from "./OwnerHeader";
  function OrderDetails(){
    const history = useHistory();
    var [Order1, setOrder1] = useState();
    var [ProdArr, setProdArr] = useState([]);
  var  total=sessionStorage["totalBill"];
  var oId = sessionStorage.getItem("oid");
   
    useEffect(() => {
        getProd();
},[])

let getProd=()=>{
    OrderServices.getOrderDetail(oId).then((response)=>{
        console.log("hiii Home page get method :"+response.data);
        setProdArr(response.data);
}, []);
}

let placeOrder=()=>{
  OrderServices.CompleteOrder(oId).then((response)=>{
    console.log("hiii Home page get method :"+response.data);
    history.replace('/todaysOrder');
}, []);
}

    return(
        <div>

        <OwnerHeader/>
             {/* <div className="row">
                    <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/todaysOrder">Home</Button></div>
                            <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profileOwner">My Profile</Button></div> 
                            <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/product">Product List</Button></div>
                            <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/customerList">All Custmors</Button></div>  
                            <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/completedOrder">Completed Order</Button></div>
                            
                            <div className="col-sm-1 col-md-2" > <Button variant="danger" href="/login">Log Out</Button>
                        </div> 
                    </div> */}
            <div> <hr></hr></div>
            <div>
               <h1 className="alert alert-primary">Product List</h1>
               <Form className="d-flex col-sm-2 col-md-3">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                <Button variant="outline-success">Search</Button>
             </Form>
             <table className="table table-striped">
                <thead>
                <tr>
                    <th  className="col-sm-1 col-md-1"></th> 
                    <th className="col-sm-1 col-md-2" >Product Name</th>
                    <th className="col-sm-1 col-md-2">Brand</th>
                    <th className="col-sm-1 col-md-1">Wt</th>
                    <th className="col-sm-1 col-md-1">Rate</th>
                    <th className="col-sm-1 col-md-1">Qty</th>
                    <th className="col-sm-1 col-md-1">Amt</th>
                   
                </tr>
                </thead>
                <tbody>{
                    ProdArr.map((prod)=>
                    <tr key={prod.id}>
                    <td><CaretRightFill/></td>
                    <td >{prod.name}</td>
                    <td >{prod.company_name}</td>
                    <td >{prod.weight}
                    {prod.unit}</td>
                    <td >{prod.rate}Rs</td>
                    <td >{prod.qty}</td>
                    <td >{prod.amt}Rs</td>   
               
                                  
                    </tr> )

                }</tbody>
                </table>
            </div>

           <div>
            <h4>Total Bill : {total}  Rs</h4> </div>
            <div className="col-sm-1 col-md-2" > 
            <Button variant="success"  onClick={() => placeOrder()}>Done Order</Button> </div>
        </div>
    );
              }         
export default OrderDetails;
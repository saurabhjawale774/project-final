import React,{Component} from "react";
import {useState,useEffect} from "react";
import {
    BrowserRouter as Router,
    useHistory,
    Route,
    Link
  } from "react-router-dom";
import {Form,Button,Row} from 'react-bootstrap';
import { CurrencyBitcoin, CurrencyDollar,CaretRightFill } from "react-bootstrap-icons";
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";
import OrderServices from "../../services/OrderServices";
import OwnerHeader from "./OwnerHeader";

function CompletedOrder(){
 
    const history = useHistory();
    var [orderArr, setOrderArr] = useState([]);
    var [cancelArr,setCancelArr]= useState([]);
 

    useEffect(() => {
       let status1="COMPLETED";
        OrderServices.getOrderByStatus(status1).then((response)=>{
            console.log("hiii get All Orders  Use Effect 1 method :"+response.data);
            console.log("hiii get All Orders  Use Effect 1 method :"+response.data.itomCount);
            setOrderArr(response.data);
        })
        let sts="CANCEL";
        OrderServices.getOrderByStatus(sts).then((response)=>{
            console.log("hiii get All Orders  Use Effect 1 method :"+response.data);
            console.log("hiii get All Orders  Use Effect 1 method :"+response.data.itomCount);
            setCancelArr(response.data);
        })
    }, []);

   let viewOrderD=(o)=>{
       console.log("Oid : "+o.ordersId);
       sessionStorage["totalBill"] = o.totalAmt;
        sessionStorage.setItem("oid",o.ordersId);
        history.replace('/orderDetails');
    }
       
        

   
        return(
            <div>
            <OwnerHeader/>

           {/* <div className="row">
                <div className="col-sm-1 col-md-2"> <Button variant="outline-primary" href="/todaysOrder">Home</Button></div>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profileOwner">My Profile</Button></div> 
                <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/customerList">All Custmors</Button></div> 
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/product">Product List</Button></div> 
                <div className="col-sm-2 col-md-2" > <Button variant="danger" href="/login">Log Out</Button> </div> 
             
            <div>
             <hr className="style = border-top: 1px solid red"/> <br></br>
                        </div> 
                    </div> */}
            <div> <hr></hr></div>
            <h1 className="alert alert-primary">Completed and Cancel Orders</h1>
            <table className="table table-striped">
                        <thead>
                        <tr>
                          
                            <th className="col-md-1">Order Id</th>
                            <th className="col-sm-1 col-md-2" >Customer Name</th>
                            <th className="col-sm-1 col-md-2">Date</th>
                            <th className="col-sm-1 col-md-1">Itoms</th>
                            <th className="col-sm-1 col-md-1">Amount</th>
                            <th className="col-sm-1 col-md-1">Status</th>
                            <th  className="col-sm-1 col-md-2"></th>
                          
                        
                        </tr>
                        </thead>
                        <tbody>{
                            orderArr.map((o)=>
                    <tr key={o.ordersId}>
                    <td >{o.ordersId}</td>
                    <td>{o.customer.name}</td>
                    <td >{o.order_date}</td>
                    <td >{o.itomCount}</td>
                    <td >{o.totalAmt} Rs</td>
                    <td ><h4 >{o.status}</h4></td>
                   <td><Button variant="success"  onClick={()=>viewOrderD(o)}> view </Button></td>
                    </tr> )
                        }

                        {
                            cancelArr.map((o)=>
                    <tr key={o.ordersId}>
                    <td >{o.ordersId}</td>
                    <td>{o.customer.name}</td>
                    <td >{o.order_date}</td>
                    <td >{o.itomCount}</td>
                    <td >{o.totalAmt} Rs</td>
                    <td ><h4 >{o.status}</h4></td>
                   <td><Button variant="success"  onClick={()=>viewOrderD(o)}> view </Button></td>
                    </tr> )
                        }
                        
                        </tbody>
                        </table>
            </div>
    
        )
}
export default CompletedOrder;
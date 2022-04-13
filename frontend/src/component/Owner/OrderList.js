import React, { Component } from "react";
import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    useHistory,
    Route,
    Link
} from "react-router-dom";
import { Form, Button, Row } from 'react-bootstrap';
import { CurrencyBitcoin, CurrencyDollar, CaretRightFill } from "react-bootstrap-icons";
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";
import OrderServices from "../../services/OrderServices";
import OwnerHeader from "./OwnerHeader";

function OrderList() {
 
    const history = useHistory();
    var [orderArr, setOrderArr] = useState([]);
    var [acceptArr, setAcceptArr] = useState([]);

    const date = new Date().toJSON().slice(0, 10)
    useEffect(() => {
        let status1 = "PENDING";
        OrderServices.getOrderByStatus(status1).then((response) => {

            setOrderArr(response.data);
        })

        let status2 = "ACCEPT";
        OrderServices.getOrderByStatus(status2).then((response) => {

            setAcceptArr(response.data);
        })
    }, []);

    let getOrder = () => {
        console.log(orderArr[1])
        for (let i = 0; i < orderArr.length; i++) {
            console.log("OrderId  : " + orderArr[i].orderId);
        }
    }

    let acceptO = (o) => {
        // o.status="ACCEPT";

        sessionStorage["totalBill"] = o.totalAmt;
        o.status="ACCEPT";
        console.log("Order accept  method  : " + o.ordersId + "  " + o.totalAmt)
        OrderServices.updateOrder(o).then((response) => {
            console.log("hiii order ACCEPT method :" + response.data);
            sessionStorage.setItem("oid", o.ordersId);
            history.replace("/orderDetails");
        })

    }
    let CancelO = (o) => {
        console.log("Cancel Order");
        sessionStorage.setItem("oid", o.ordersId);
        o.status="CANCEL";
        OrderServices.updateOrder(o).then((response) => {
            console.log("hiii order CANCEL method :" + response.data);
            history.replace("/todaysOrder");
        })
    }



    return (

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
            <h1>  Todays Order : {date} </h1>

            <table className="table table-striped">
                <thead>
                    <tr>

                        <th className="col-md-1">Order Id</th>
                        <th className="col-md-1">Customer Name</th>
                        <th className="col-sm-1 col-md-2">Date</th>
                        <th className="col-sm-1 col-md-1">Itoms</th>
                        <th className="col-sm-1 col-md-1">Amount</th>
                        <th className="col-sm-1 col-md-1">Status</th>
                        <th className="col-sm-1 col-md-2"></th>


                    </tr>
                </thead>
                <tbody>{
                   
                    orderArr.map((o) =>
                        <tr key={o.ordersId}>
                            <td >{o.ordersId}</td>
                            <td>{o.customer.name}</td>
                            <td >{o.order_date}</td>
                            <td >{o.itomCount}</td>
                            <td >{o.totalAmt} Rs</td>
                            <td ><h4>{o.status}</h4></td>
                            <td ><Button variant="success" onClick={() => acceptO(o)}>Accept</Button>
                                <Button variant="danger" onClick={() => CancelO(o)}>Cancel</Button></td>

                        </tr>)
                }
                { acceptArr.map((o) =>
                        <tr key={o.ordersId}>
                            <td >{o.ordersId}</td>
                            <td>{o.customer.name}</td>
                            <td >{o.order_date}</td>
                            <td >{o.itomCount}</td>
                            <td >{o.totalAmt} Rs</td>
                            <td ><h4>{o.status}</h4></td>
                            <td ><Button variant="success" onClick={() => acceptO(o)}>Accept</Button>
                                <Button variant="danger" onClick={() => CancelO(o)}>Cancel</Button></td>

                        </tr>)}
                </tbody>
            </table>


        </div>

    )
}

export default OrderList;
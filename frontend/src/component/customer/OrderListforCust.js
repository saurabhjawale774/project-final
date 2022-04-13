import React from "react";
import {Button,FormControl,Form} from 'react-bootstrap';
import { CaretRightFill,CartPlusFill,Trash} from "react-bootstrap-icons";
import OrderServices from "../../services/OrderServices";
import CustomerHeader from "./CustomerHeader";

class OrderListforCust extends React.Component{
    constructor(props) {
        super(props)
        console.log("In orderList constructor ");
        
        this.state={
            orderArr:[],
            pendingArr:[],
            acceptArr:[],
            completeArr:[]
        }
    }
    componentDidMount(){
     
        // get by order  cust Id
        var profile=JSON.parse(sessionStorage["custdata"]);
        let cid=sessionStorage.getItem('logId');
        OrderServices.getOrderByCustId(profile.cId).then((response)=>{
            console.log("response.data");
            console.log(response.data);
            this.setState({orderArr:response.data})
        })
    }

    viewO=(o)=>{
           sessionStorage.setItem("oid",o.ordersId);
           this.props.history.push("/orderDetailsForCust");
    }
  


render(){
    var profile=JSON.parse(sessionStorage["custdata"]);
    return(

        <div>
          <CustomerHeader custName={profile.custName}/>
              <div>
                {/* <div className="row">
                <h3>Hello ..</h3>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/productListforCust">Home</Button></div>
                        <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profile">My Profile</Button></div> 
                        <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/cart">My Cart</Button></div>
                        <div className="col-sm-1 col-md-2" > <Button variant="danger" href="/logout">Log Out</Button>
                    </div> 
                </div> */}
<div> <hr></hr></div>

            <h1  className="alert alert-primary"> {profile.custName}  Your Orders </h1>
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
                    
                    <th className="col-sm-1 col-md-2" >Order Id</th>
                    <th className="col-sm-1 col-md-2">Order Date</th>
                    <th className="col-sm-1 col-md-2">Itom Count</th>
                    <th className="col-sm-1 col-md-1">Amount</th>
                    <th className="col-sm-1 col-md-1">Status</th>
                    <th className="col-sm-1 col-md-1"></th>
               
                </tr>
                </thead>
                <tbody>{
                    this.state.orderArr.map((o)=>
                    <tr key={o.ordersId}>
                    <td >{o.ordersId}</td>
                    <td >{o.order_date}</td>
                    <td >{o.itomCount}</td>
                    <td >{o.totalAmt} Rs</td>
                    <td ><h4>{o.status}</h4></td>
                    <td ><Button variant="success" onClick={()=>{this.viewO(o)}}>View</Button>
                    </td>

                    </tr> )
                        }</tbody>
                </table>
            </div>

        </div>
       
    )
}
}
export default OrderListforCust;




//    get All Order 

//  order get by cust Id 
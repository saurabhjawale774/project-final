
import React,{Component} from "react";
import {useState,useEffect} from "react";
import {Button,Navbar,Container,Form,FormControl} from 'react-bootstrap';
import Swal from "sweetalert2";
import { CaretRightFill,CartPlusFill, Trash} from "react-bootstrap-icons";
import ProductServices from "../../services/ProductServices";
import OrderServices from "../../services/OrderServices";
import CustomerHeader from "./CustomerHeader";
  function OrderDetailsForCust(){
    var profile=JSON.parse(sessionStorage["custdata"]);
    var [ProdArr, setProdArr] = useState([]);
   
    useEffect(() => {
     
        getProd();
},[])

let getProd=()=>{
            var oId=sessionStorage.getItem("oid");
            let id=JSON.parse(oId);
    OrderServices.getOrderDetail(id).then((response)=>{
        console.log("hiii  get ordere details method :"+response.data);
        setProdArr(response.data);
}, ).catch((error)=>{
    console.log("hiii  get ordere details method error  :"+error);
})

}

let totalAmt=(array)=>{
    console.log("cartArr1 :"+array)
        var total=0;
            for(var i=0; i<array.length;i++)
            {
                total = parseFloat(total)+parseFloat(array[i].amt);
                console.log("cartArr1 Total :"+total)
            }
            document.getElementById("totalButton").innerHTML=total;
        }

    return(
        <div>
          <CustomerHeader custName={profile.custName}/>
           {/* <div className="row">
           <h3>Hello ..{profile.custName}</h3>
           <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/productListforCust">Home</Button></div>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profile">My Profile</Button></div> 
                <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/orderListForCust">Orders</Button></div>  
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/cart">My Cart</Button></div>
                <div className="col-sm-1 col-md-2" > <Button variant="danger" href="/logout">Log Out</Button>
               </div> 
           </div> */}
<div> <hr></hr></div>
            <div>
               <h1 className="alert alert-primary">{profile.custName}  your Grocery List</h1>
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
                    <td >{prod.amt}Rs</td>     {/*  (amt==  qty * rate)   */} 
               
                                  
                    </tr> )

                }</tbody>
                </table>
            </div>
            <div>
            <Button className=" btn btn-primary" id="totalButton" onClick={()=>totalAmt(ProdArr)} >Total Bill</Button>
            </div><br/>
            <Button className=" btn btn-primary" href="/orderListForCust"> Back </Button>
        </div>
    )
            }
export default OrderDetailsForCust
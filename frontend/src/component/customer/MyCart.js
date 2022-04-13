
import React,{Component} from "react";
import {useState,useEffect} from "react";
import {Button,Navbar,Container,Form,FormControl} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";
import Swal from "sweetalert2";
import { CaretRightFill,CartPlusFill, Trash} from "react-bootstrap-icons";
import ProductServices from "../../services/ProductServices";
import OrderServices from "../../services/OrderServices";
import CustomerHeader from "./CustomerHeader";

  function MyCart(){
    var profile=JSON.parse(sessionStorage["custdata"]);
    const history = useHistory();
    var [cartArr1, setCartArr1] = useState([]);
    var [total, setTotal] = useState(0);
    var arr =  localStorage.getItem('cartArr');
    var totalamt1=0;
    useEffect(() => {
        console.log("arr  : "+arr);
       callMethod();
       setTotal(sessionStorage["totalBill"]);
    }, []);
    
   var callMethod=()=>{

        setCartArr1(JSON.parse(arr));
        console.log("Cart Arr last : "+cartArr1[(cartArr1.length-1)]);
        console.log("Cart Arr1[0] : "+cartArr1[0]);
        console.log("Cart Arr1 lenhth : "+cartArr1.length);
        // setTotal(sessionStorage["totalBill"]);
    }



         let  placeOrder=(cartArr1)=>{
           
                    //  customer id  products curr date status itomCount
            let cid=sessionStorage.getItem('logId');
            let order=cartArr1;
                OrderServices.addorder(order).then((response)=>{
                    console.log("Order Placer:"+response.data);
                    //Swal.fire({ title: "Done", text: "Order Plased !!!!!!", icon: "success" })
                    Swal.fire({ title: "Done", text: "Order Plased !!!!!!", icon: "success" })
                     localStorage.clear();
                     history.replace("/orderListForCust");
                }).catch((err)=>{
                         //Swal.fire({ title: "OOps", text: "Sorry   Pls try again", icon: "error" })
                         localStorage.clear();
                      
                });
      
           }
    
        
          let removeToCart =(p)=>{

            for(let i=0;i<cartArr1.length;i++)
            {
                if(p.pId== cartArr1[i].pId)
                {
                    console.log("Prod1 : "+p+"    total1 : "+total+"------>"+cartArr1[i]);
                    // cartArr1[i];
                    total=total-cartArr1.amt;
                    console.log("Prod2 : "+p+"    total2 : "+total);
                }
                console.log("Prod 3= : "+p+"    total 3= : "+total);
            }

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
               <h1 className="alert alert-primary">Cart List</h1>
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
                    cartArr1.map((prod)=>
                    <tr key={prod.pId}>
                    <td><CaretRightFill/></td>
                    <td >{prod.name}</td>
                    <td >{prod.company_name}</td>
                    <td >{prod.weight}
                    {prod.unit}</td>
                    <td >{prod.rate}Rs</td>
                    <td >{prod.qty}</td>
                    <td >{prod.amt}Rs</td>     {/*  (amt==  qty * rate)   */} 
               
                  <td onClick={()=>{removeToCart(prod)}} ><Trash/></td>                   
                    </tr> )

                }</tbody>
                </table>
            </div>
            <textarea id='txtid' rows='3' cols='50' placeholder="Customize Your Order ..."></textarea>
            <div>
            <Button className=" btn btn-primary" id="totalButton" onClick={()=>totalAmt(cartArr1)} >Total Bill</Button>
            </div><br/>
            <div className="col-sm-1 col-md-2" > <Button className=" btn btn-primary" onClick={()=>placeOrder(cartArr1)} >Place Order</Button></div>
        </div>
    )
}
    
export default MyCart;
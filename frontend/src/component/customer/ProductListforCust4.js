
import React,{Component} from "react";
import {useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button,Navbar,Container,Nav,NavDropdown,FormControl,Form,Tabs,Tab,Sonnet} from 'react-bootstrap';
import { CaretRightFill,CartPlusFill,CurrencyDollar} from "react-bootstrap-icons";
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";



//import React from 'react'
toast.configure()
function ProductListforCust() {
    var profile=JSON.parse(sessionStorage["custdata"]);
    let [prodArr, setProdArr] = useState([]);
    let [cartArr, setCartArr] = useState([]);
    let [qty1 , setQty1]=useState("1");
    let qtySet = (q) => setQty1(q.target.value);
    var [amt1 , setAmt1]=useState(1);
    useEffect(() => {
       
        ProductServices.getProduct().then((response)=>{
            console.log("hiii Home page get method :"+response.data);
            setProdArr(response.data);
        });
        return () => {

        };
    }, []);

  let addToCart=(prod)=>{
    console.log("   Add to cart  :"+prod);
    prod.qty=qty1;
    let a=parseFloat(qty1)*parseFloat(prod.rate);
    console.log("Prodct Amt : "+a);
    setAmt1(a);
    prod.amt=amt1;
    console.log("Prodct Amt : "+ prod.amt);
    //let newprodarr=[...cartArr,{...p}];
    cartArr.push(prod);
    
        localStorage.setItem('cartArr',JSON.stringify(cartArr));
        toast.success("Added :"+prod.name);
    }

    return (
        <div>
        <div className="row">
        <h3>Hello ..{profile.custName}</h3>
        <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/productListforCust">Home</Button></div>
             <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profile">My Profile</Button></div> 
             <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/orders">Orders</Button></div>  
             <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/cart">My Cart</Button></div>
             <div className="col-sm-1 col-md-2" > <Button variant="danger" href="/logout">Log Out</Button>
            </div> 
        </div>
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
               
                 <th className="col-sm-1 col-md-2" >Product Name</th>
                 <th className="col-sm-1 col-md-2">Brand</th>
                 <th className="col-sm-1 col-md-1">Wt</th>
                 <th className="col-sm-1 col-md-1">MRP</th>
                 <th className="col-sm-1 col-md-1">Rate</th>
                 <th className="col-sm-1 col-md-1">Mfg_Date</th>
                 <th className="col-sm-1 col-md-1">Qty</th>
             </tr>
             </thead>
             <tbody>{
                prodArr.map((prod)=>
                 <tr key={prod.id}>
                 <td ><CaretRightFill/>{prod.name}</td>
                 <td >{prod.company_name}</td>
                 <td >{prod.weight}
                 {prod.unit}</td>
                 <td >{prod.mrp}<CurrencyDollar/></td>
                 <td >{prod.rate}<CurrencyDollar/></td>
                 <td >{prod.mfg_date}</td>
                 <td ><input type="number" name="qty" value={qtySet} placeholder="1"></input> </td>
               <td onClick={()=> addToCart(prod)} ><CartPlusFill/></td>                   
                 </tr> )

             }</tbody>
             </table>
         </div>
     </div>

    )
     
}

export default ProductListforCust;



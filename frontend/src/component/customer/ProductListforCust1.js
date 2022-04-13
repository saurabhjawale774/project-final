
import React,{Component} from "react";
import {useState,useEffect} from "react";
import {Button,Navbar,Container,Nav,NavDropdown,FormControl,Form,Tabs,Tab,Sonnet} from 'react-bootstrap';
import { CaretRightFill,CartPlusFill} from "react-bootstrap-icons";
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";

    class ProductListforCust extends React.Component{
        constructor(props) {
            super(props)
            console.log("In product constructor ");
            // const LOCAL_STORAGE_CART="cartArr";        //    Initialize Local storage Veriable
            // const [cartArr,setCartArr]=useState([]);   //  intialize Empty Array 
            this.state={
                prodArr:[],cartArr:[]
            }
        }
        componentDidMount(){
           
            ProductServices.getProduct().then((response)=>{
                console.log("hiii Home page get method :"+response.data);
                this.setState({prodArr:response.data})
            })
        }

    //      //useEffect hook will get called when the state changes
    //   //this function will get the value from localStorage object from key LOCAL_STORAGE_EMPARR
    //    //and assign it to emparr array
    // useEffect=()=>{
    //     const arr=JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART));
    //     if(arr)
    //        setCartArr(arr);
    // },[];

    //   //useEffect hook will get called when the state changes
    // //this function will set the value to localStorage object with LOCAL_STORAGE_EMPARR
    // useEffect(()=>{
    //     localStorage.setItem(LOCAL_STORAGE_CART,JSON.stringify(cartArr));
    // },[cartArr]);

        addToCart(p){
            console.log("addto cart get p :"+p);
            
            let newprodarr=[...cartArr,{...p}];
            console.log(newprodarr);
            setEmparr(newprodarr);



            // this.setState({cartArr:p})
            // console.log("add p in cart :");
        }
      
render(){
    return(
        <div>
           <div className="row">
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
               <Form className="d-flex">
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
                    {/* <th className="col-md-1">Pid</th> */}
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
                    this.state.prodArr.map((prod)=>
                    <tr key={prod.id}>
                    <td><CaretRightFill/></td>
                    {/* <td >{prod.id}</td> */}
                    <td >{prod.name}</td>
                    <td >{prod.company_name}</td>
                    <td >{prod.weight}
                    {prod.unit}</td>
                    <td >{prod.mrp}</td>
                    <td >{prod.rate}</td>
                    <td >{prod.mfg_date}</td>
                  <td onClick={()=>{this.addToCart(prod)}} ><CartPlusFill/></td>                   
                    </tr> )

                }</tbody>
                </table>
            </div>
        </div>
    )
}
    }
export default ProductListforCust;
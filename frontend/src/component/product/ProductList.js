import React,{Component,useState} from "react";
import { CaretRightFill, Hr, PencilSquare, Trash,CurrencyDollar } from "react-bootstrap-icons";
import {Form,Button,Row,FormControl} from 'react-bootstrap';
import ProductService from "../../services/ProductServices";
import OwnerHeader from "../Owner/OwnerHeader";

class ProductList extends React.Component{
    constructor(props) {

        super(props);
        console.log("In product constructor ");
       
        this.state={
            prodArr:[]
        }
    }
    componentDidMount(){
        ProductService.getProduct().then((response)=>{
            console.log("hiii"+response.data);
            this.setState({prodArr:response.data})
        })
    }

       addProduct=()=>{
        console.log("Add Product call")
        this.props.history.push("/addProduct/_add")
    }

    editProduct=(pid)=>{
        sessionStorage["pId"] = pid
        console.log("in edit product")
        this.props.history.push(`/addProduct/${pid}`);
    }

    

    deleteById=(pid)=>{
        ProductService.deleteProduct(pid).then((resp)=>{
            window.location.reload(false);
            this.props.history.push("/productList");
        })
     }
    


    render(){
        console.log("In product list render");

        return(
            <div>
         <OwnerHeader/>
         <div className="col-sm-2 col-md-2"> <Button className=" btn btn-primary" onClick={this.addProduct} > Add Product</Button> </div>
            {/* <div className="row">
                <div className="col-sm-1 col-md-2"> <Button variant="outline-primary" href="/todaysOrder">Home</Button></div>
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/profileOwner">My Profile</Button></div> 
                <div className="col-sm-2 col-md-2"><Button variant="outline-primary" href="/customerList">All Custmors</Button></div>  
                <div className="col-sm-2 col-md-2"> <Button variant="outline-primary" href="/completedOrder">Completed Order</Button></div>
                <div className="col-sm-2 col-md-2"> <Button className=" btn btn-primary" onClick={this.addProduct} > Add Product</Button> </div>
                <div className="col-sm-2 col-md-2" > <Button variant="danger" href="/login">Log Out</Button> </div> 
             
           <hr className="style = border-top: 1px solid red"/> <br></br>
      
            </div> */}
            <div>
               <h1 className="alert alert-primary">Product List</h1>
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
                  
                    {/* <th className="col-md-1">Pid</th> */}
                    <th className="col-sm-1 col-md-2" >Product Name</th>
                    <th className="col-sm-1 col-md-2">Brand</th>
                    <th className="col-sm-1 col-md-1">Wt (Unit)</th>
                    <th className="col-sm-1 col-md-1">MRP</th>
                    <th className="col-sm-1 col-md-1">Rate</th>
                    <th className="col-sm-1 col-md-1">Mfg_Date</th>
                    <th className="col-sm-1 col-md-1">Expiry Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>{
                    this.state.prodArr.map((prod)=>
                    <tr key={prod.pId}>
                    <td ><CaretRightFill/>  {prod.name}</td>
                    <td >{prod.company_name}</td>
                    <td >{prod.weight}
                    {prod.unit}</td>
                    <td >{prod.mrp} Rs</td>
                    <td >{prod.rate} Rs</td>
                    <td >{prod.mfg_date}</td>
                    <td >{prod.expire_date}</td>
                    <td  onClick={()=>this.editProduct(prod.pId)}><PencilSquare/></td>
                    <td onClick={()=>{this.deleteById(prod.pId)}}><Trash/></td>

                    </tr> )

                }</tbody>
                </table>
            </div>
        )
   
   
    }
}
export default ProductList;
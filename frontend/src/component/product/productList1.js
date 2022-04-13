import React,{Component,useState} from "react";
import { CaretRightFill, PencilSquare, Trash } from "react-bootstrap-icons";
import {
    BrowserRouter as Router,
    useHistory,
  } from "react-router-dom";
import ProductService from "../../services/ProductServices";


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
    deleteById=(pid)=>{
        ProductService.deleteProduct(pid).then((resp)=>{
            this.props.history.push("/productlist");
        })
     }
    


     add(){
        let history = useHistory();
        // this.props.history.push("/addProduct");
        history.replace("/productlist");
     }

     UpdateProduct(){
         console.log("on click In update product method")
         this.props.history.push("/updateProd")
     }
    render(){
        console.log("In product list render");

        return(
            <div>
               <h1 className="alert alert-primary">Product List</h1>
               <div> <button className="btn btn-primary" onClick={this.add} > Add Product</button>
                {/* search box */}
               </div>
               <table className="table table-striped">
                <thead>
                <tr>
                    <th></th> 
                    {/* <th className="col-md-1">Pid</th> */}
                    <th className="col-sm-1 col-md-2" >Product Name</th>
                    <th className="col-sm-1 col-md-2">Brand</th>
                    <th className="col-sm-1 col-md-1">Wt (Unit)</th>
                    <th className="col-sm-1 col-md-1">MRP</th>
                    <th className="col-sm-1 col-md-1">Rate</th>
                    <th className="col-sm-1 col-md-1">Mfg_Date</th>
                    <th className="col-sm-1 col-md-1">Expire after(days)</th>
                    <th>Update</th>
                    <th>Delete</th>
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
                    <td >{prod.expire_days}</td>
                    <td ><PencilSquare onClick={this.UpdateProduct}/></td>
                    <td onClick={()=>{this.deleteById(prod.id)}}><Trash/></td>

                    </tr> )

                }</tbody>
                </table>
            </div>
        )
   
   
    }
}
export default ProductList;
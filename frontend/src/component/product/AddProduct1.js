import React,{Component,useEffect, useState } from "react";
import {Form,Button,Row} from 'react-bootstrap';
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";


class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // op:this.props.match.params.id,
            // pid:"",
            name:"",
            company_name:"",
            weight:"",
            unit:"",
            mrp:"",
            rate:"",
            mfg_date:"",
            expire_days:""
        }
    }
Add=(event)=>{
    event.preventDefault();
    console.log("In addProd:"+this.state);
    // this.props.history.push("/product");
   //Moment(this.state.mfg_date).format('YYYY-MM-DD')
    let prod={name:this.state.name,
              company_nam:this.state.company_nam,
              weight:this.state.weight,
              unit:this.state.unit,
              mrp:this.state.mrp,
              rate:this.state.rate,
             mfg_date:this.state.mfg_date,
            //  mfg_date: Moment(this.state.mfg_date).format('YYYY-MM-DD'),
              expire_days:this.state.expire_days  
    
    };
    //https://www.itsolutionstuff.com/post/how-to-change-date-format-in-reactexample.html
    ProductServices.addProduct(prod).then((resp)=>{
        console.log("Add product :"+resp.data)
        this.props.history.push("/productlist");
    })


/*
 event.preventDefault();
        console.log(this.state)
        let prod={name:this.state.name,company_name:this.state.company_name,weight:this.state.weight,
            unit:this.state.unit,mrp:this.state.mrp,rate:this.state.rate,mfg_date:this.state.mfg_date,expire_days:this.state.expire_days}
            console.log("In add prod 1")
         if(this.state.op=="_add"){
             ProductServices.addProduct(prod).then((result)=>{
                 
                 console.log("send req to addproduct2"+result.data);
                 this.props.history.push("/productList");
             })
         }
         else{
             ProductServices.updateProduct(prod).then((resp)=>{
                console.log(response.data);
                this.props.history.push("/productList");
             }).catch((err)=>{
                console.log("error occured",err);
            })
         }



         
     componentDidMount(){
        console.log("in Addproduct ComponentdidMount"+this.state.op);
        if(this.state.op==="_add"){
            console.log("in addProduct");
            return;
        }
        else{
           ProductServices.getById(this.state.op).then((response)=>{
                let prodob=response.data;
                this.setState({pid:prodob.pid,name:prodob.name,company_name:prodob.company_name,weight:prodob.weight,
                    unit:prodob.unit,mrp:prodob.mrp,rate:prodob.rate,mfg_date:prodob.mfg_date,expire_days:prodob.expire_days
                });
            })
    
        }
    }
*/




}
    render(){
        return(
            <div>
    <h1 className="alert alert-info">Add New Product</h1>
        <Form>
  <Row className="mb-3">
                     <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="product name" value={this.state.name} 
                            onChange={(event)=>{this.setState({name:event.target.value})}}
                        />
                    </Form.Group>

                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>company_name</Form.Label>
                        <Form.Control type="text"  value={this.state.company_name} 
                        onChange={(event)=>{this.setState({company_name:event.target.value})}}                            
                        />
                    </Form.Group>
         </Row>

         <Row className="mb-3">
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>weight</Form.Label>
                        <Form.Control type="number"  value={this.state.weight} 
                        onChange={(event)=>{this.setState({weight:event.target.value})}}                            
                        />
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>unit</Form.Label>
                        <Form.Control type="text" value={this.state.unit} 
                        onChange={(event)=>{this.setState({unit:event.target.value})}}                            
                        />
                    </Form.Group>
</Row>
<Row className="mb-3">
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>mrp</Form.Label>
                        <Form.Control type="number" value={this.state.mrp} 
                        onChange={(event)=>{this.setState({mrp:event.target.value})}}                            
                        />
                    </Form.Group>

                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type="number" value={this.state.rate} 
                        onChange={(event)=>{this.setState({rate:event.target.value})}}                            
                        />
                    </Form.Group>
</Row>
<Row className="mb-3">
                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Mfg Date</Form.Label>
                        <Form.Control type="Date" value={this.state.mgf_date} 
                        onChange={(event)=>{this.setState({mgf_date:event.target.value})}}                            
                        />
                    </Form.Group>

                    <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Expair Days</Form.Label>
                        <Form.Control type="number" value={this.state.expire_days} 
                        onChange={(event)=>{this.setState({expire_days:event.target.value})}}                            
                        />
                    </Form.Group>
</Row>
                    <Button variant="primary" type="submit" onClick={this.Add}>
                         Add Product
                    </Button>
                  
                </Form>
    </div>
        )
    }
}
export default AddProduct;
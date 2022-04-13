import React,{Component,useEffect, useState } from "react";
import {Form,Button,Row} from 'react-bootstrap';
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";


class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // op:this.props.match.params.id,
            pId:"",
            name:"",
            company_name:"",
            weight:"",
            unit:"",
            mrp:"",
            rate:"",
            mfg_date:"",
            expire_days:0
        }
    }
   
    componentDidMount(){
        console.log("in Product AddComponentdidMount");
        let sessionPId=sessionStorage["pId"]
        if(sessionPId != null){
            console.log("in Product AddComponentdidMount"+sessionPId);
            //to send get request to webservice and get the object which matches with id
            ProductServices.getProductById(sessionPId).then((response)=>{
                console.log("elase   get data by id for update :"+response.data);
                let pObj=response.data;
                this.setState({pId:pObj.pId,
                                name:pObj.name,
                                company_name:pObj.company_name,
                                weight : pObj.weight,
                                unit:pObj.unit,
                                mrp:pObj.mrp,
                                rate:pObj.rate,
                                mfg_date:pObj.mfg_date,
                                expire_days:pObj.expire_day
                
                });
            })
         
        }
        
        else{
            console.log("in add employee");
            return;
        }
    }

   

    addOrUpdate=(event)=>{
        event.preventDefault(); // to stop the refreshing the page
        console.log(this.state)
        //create a objevct using form data to send it nodejs sertvice to add in the databse
        let p={pId:4,
                                    name:this.state.name, 
                                    company_name:this.state.company_name,
                                    weight : this.state.weight,
                                    unit:this.state.unit,
                                    mrp:this.state.mrp,
                                    rate:this.state.rate,
                                    mfg_date:this.state.mfg_date,
                                    expire_days:this.state.expire_day
                                };

         let sessionPId=sessionStorage["pId"]
             if(sessionPId != null){
            ProductServices.updateP(p).then((result)=>{
                console.log(result.data);
                this.props.history.push("/productlist")
            }).catch((err)=>{
                console.log("error occured",err);
            })

            sessionStorage.clear();
        }
        else{
            ProductServices.addProduct(p).then((result)=>{
                console.log(result.data);
                this.props.history.push("/productlist");
           })
           
        }
    };

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
                    <Button variant="primary" type="submit" onClick={this.addOrUpdate}>
                         Add Product
                    </Button>
                  
                </Form>
    </div>
        )
    }
}
export default AddProduct;
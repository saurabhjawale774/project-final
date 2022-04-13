import React,{Component} from "react";
import {Form,Button,Row} from 'react-bootstrap';
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";


class UpdateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // op:this.props.match.params.id,
            // pid:"",
            name:props.name,
            company_name:props.company_name,
            weight:props.weight,
            unit:props.unit,
            mrp:props.mrp,
            rate:props.rate,
            mfg_date:props.mfg_date,
            expire_days:props.expire_days
        }
    }
updateprod =(event)=>{
    event.preventDefault();
    console.log("In updateProd:"+this.state);

    let prod={
        name:this.state.name,
        company_nam:this.state.company_nam,
        weight:this.state.weight,
        unit:this.state.unit,
        mrp:this.state.mrp,
        rate:this.state.rate,
       mfg_date:this.state.mfg_date,
      //  mfg_date: Moment(this.state.mfg_date).format('YYYY-MM-DD'),
        expire_days:this.state.expire_days  
    };
    ProductServices.updateP(prod).then((resp)=>{
        console.log("update product :"+resp.data)
        this.props.history.push("/productlist");
    })
}
    render(){
        return(
            <div>
    <h1 className="alert alert-info">Update Product</h1>
        <Form>
  <Row className="mb-3">
                     <Form.Group className="col-md-4 mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text"  value={this.state.name} onChange={(event)=>{this.setState({company_name:event.target.value})}}
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
                    <Button variant="primary" type="submit" onClick={this.updateprod}>
                        Update Product
                    </Button>
                  
                </Form>
    </div>
        )
    }
}
export default UpdateProduct;
import React,{Component} from "react";
import {Form,Button,Row} from 'react-bootstrap';
import Swal from "sweetalert2";
import CustomerService from "../../services/CustomerService";

    class RegisterCust extends React.Component{

    constructor(props){
        super(props)
        this.state={
            // it will retrive _add or employee id receiving via url
            ///either _add or actual empid
       
            name:"",
            email:"",
            password:"",
            mobile_no:"",
            addr1:"",
            addr2:"",
            city:"",
            pincode:"",
            cpwd:""
        }
     
    }

    checkPwd=()=>{
        console.log("cpwd :"+this.state.cpwd+ " pwd : "+this.state.password)
           if(this.state.cpwd==this.state.password)
           {
               return;
           }
           else{
            Swal.fire({ title: "OOPs", text: "Plz Enter Correct Password", icon: "error" })
           }
    }
 
     add=(event)=>{
        // console.log(this.state)
        event.preventDefault()   // to stop the refreshing the page
        //create a objevct using form data to send it nodejs sertvice to add in the databse
        let cust={
                 name:this.state.name,
                 email:this.state.email,
                 password:this.state.password,
                 mobile_no:this.state.mobile_no,
                 addr1:this.state.addr1,
                 addr2:this.state.addr2,
                 city:this.state.city,
                 pincode:this.state.pincode
            };
        
        if(cust.name !=="" && cust.email !=="" && cust.password !="" && this.state.cpwd !="" &&cust.mobile_no !="" && 
            cust.addr1 !="" && cust.pincode !=""){
            CustomerService.addCustomer(cust).then((result)=>{
                 console.log(result.data);
                 Swal.fire({ title: "Done", text: " Welcome  C T MART  Apka Swagat karata he !!!!!!", icon: "success" })
                 this.props.history.push("/login");
            }).catch((err)=>{
                console.log("error occured",err);
            })
        }
        else{
            Swal.fire({ title: "OOps", text: "Somthing Missing", icon: "error" })
              // this.props.history.push("/register");
        }
    }
    render(){
        return(
            <div>
                <h1>Add Your Details</h1>
           <Form>
           <Row className="mb-3">
                 <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Enter Your Name" 
                    value={this.state.name} 
                    onChange={(event)=>this.setState({name:event.target.value})}/>
                </Form.Group>
                <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Enter Email" 
                    value={this.state.email} 
                    onChange={(event)=>this.setState({email:event.target.value})}/>
                </Form.Group>
           </Row>
        
           <Row className="mb-3">
                 <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Password" 
                    value={this.state.password} 
                    onChange={(event)=>this.setState({password:event.target.value})}/>
                </Form.Group>
                <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Comfirm password" 
                    value={this.state.cpwd} 
                    onChange={(event)=>this.setState({cpwd:event.target.value})}
                    onMouseLeave={()=>this.checkPwd()}
                    />
                </Form.Group>
           </Row>

           <Row className="mb-3">
                 <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Mobile_no" 
                    value={this.state.mobile_no} 
                    onChange={(event)=>this.setState({mobile_no:event.target.value})}/>
                </Form.Group>
                <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Address Line 1" 
                    value={this.state.addr1} 
                    onChange={(event)=>this.setState({addr1:event.target.value})}/>
                </Form.Group>
           </Row>

           <Row className="mb-3">
                 <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Address Line 2" 
                    value={this.state.addr2} 
                    onChange={(event)=>this.setState({addr2:event.target.value})}/>
                </Form.Group>
                <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="City" 
                    value={this.state.city} 
                    onChange={(event)=>this.setState({city:event.target.value})}/>
                </Form.Group>
           </Row>

           <Row className="mb-3">
                 <Form.Group className="col-md-4 mb-3">
                    <Form.Control type="text" placeholder="Pincode" 
                    value={this.state.pincode} 
                    onChange={(event)=>this.setState({pincode:event.target.value})}/>
                </Form.Group>
               
           </Row>
           <Button variant="primary" type="submit" onClick={this.add}>
               Submit
           </Button>
           </Form>
            </div>
        )
    
    }
    }
 

export default RegisterCust;
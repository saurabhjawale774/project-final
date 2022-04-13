
import React,{Component} from "react";
import {Button, Card} from 'react-bootstrap';
import { CaretRightFill,CartPlusFill} from "react-bootstrap-icons";
import Moment from 'moment';
import ProductServices from "../services/ProductServices";
import MainHeader from "./MainHeader";
import photo3 from "./Photo/10.jpeg";
    class HomePage extends React.Component{
        constructor(props) {
            super(props)
            console.log("In product constructor ");
            this.state={
                prodArr:[]
            }
        }
        componentDidMount(){
           
            ProductServices.getProduct().then((response)=>{
                console.log("hiii Home page get method :"+response.data);
                this.setState({prodArr:response.data})
            })
        }
        loginp=()=>{
            this.props.history.push("/login");
        }

render(){
    return(
 <div>
<MainHeader/>
        <Card className="bg-dark text-white">
            {/* <Card.Img src={photo3} alt="Card img"/> */}
            <Card.ImgOverlay>
            <Card.Body>
            <div >
               <h1 className="alert alert-primary">Product List</h1>
               <table className="table table-striped ">
                <thead>
                <tr>
                    <th className="col-sm-1 col-md-1"></th> 
                    {/* <th className="col-md-1">Pid</th> */}
                    <th className="col-sm-1 col-md-2" >Product Name</th>
                    <th className="col-sm-1 col-md-2">Brand</th>
                    <th className="col-sm-1 col-md-1">Wt</th>
                    <th className="col-sm-1 col-md-1">MRP</th>
                    <th className="col-sm-1 col-md-1">Rate</th>
                    <th className="col-sm-1 col-md-1">Mfg_Date</th>
                
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
                  <td onClick={()=>{this.loginp()}} ><CartPlusFill/></td>                   
                    </tr> )

                }</tbody>
                </table>
            </div>
            </Card.Body>
         
            </Card.ImgOverlay>
        </Card>
           
        </div>
    )
}
    }
export default HomePage;

import React, { Component } from "react";
import { Button, Form , Col } from 'react-bootstrap';
import { useState } from "react";
import Photo1 from "../Photo/1.jpg"
import Photo2 from "../Photo/2.jpg"
import Photo3 from "../Photo/3.jpg"

import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Link
} from "react-router-dom";
import Swal from "sweetalert2";
import { CaretRightFill, CartPlusFill, TextCenter } from "react-bootstrap-icons";
import Moment from 'moment';
import CustomerService from "../../services/CustomerService";



export default function Login() {
  const history = useHistory();
  let [custId, setcustId] = useState();
  let [name, setname] = useState("");
  let [email, setemail] = useState();
  let [password, setpassword] = useState("");
  let [mobile_no, setmobile_no] = useState();
  let [addr1, setaddr1] = useState();
  let [addr2, setaddr2] = useState();
  let [city, setcity] = useState();
  let [pincode, setpincode] = useState();
  let [orders, setorders] = useState();


  let cemailinput = (e) => setemail(e.target.value);
  let passwordinput = (e) => setpassword(e.target.value);

  let validate = () => {
    console.log("In validate fun on click");
    if (email === "" && password === "") { Swal.fire({ text: "Empty fields are not allowed", icon: "error" }) }
    else {

      if (email == "saurabh@gmail.com" && password == "saurabh") {

        let dummycust = {
          "custName": "Saurabh Jawale",
          "emailId": "saurabh@gmail.com",
          "mobileNo": "9970867684",
          "city": "Shirdi",
          "pincode": "423605",
          "address": "Dattanagr Shirdi"
        }
        let stringedobj = JSON.stringify(dummycust);
        sessionStorage.setItem('custdata', stringedobj);
        history.replace("/todaysOrder");
      }
      else {
        login();
      }

    }
  }

  let login = () => {

    console.log("login fun call");
    let customer = {
      "email": email,
      "password": password
    }

    CustomerService.postCustomer(customer).then((response) => {
      // axios.post(`${baseurl}/login`, user).then((response) => {

      console.log("in respomce get cust :" + response.data);
      // setcustId(response.custId);
      console.log("in respomce get cust :" + response.data.custId);

      let dummycust = {
        "cId": response.data.custId,
        "custName": response.data.name,
        "emailId": response.data.email,
        "mobileNo": response.data.mobile_no,
        "city": response.data.city,
        "pincode": response.data.pincode,
        "address": response.data.addr1,
        "address2": response.data.addr2,
        "password1": response.data.password
      }

      sessionStorage.setItem("logId", response.data.custId);
      let stringedobj = JSON.stringify(dummycust);
      sessionStorage.setItem('custdata', stringedobj);

      console.log(response.data.custId);


      history.replace("/productListforCust");
      // window.location = "/contractor";


    }, (error) => {
      sessionStorage.clear();
      console.log("Error in login  cust data not recived from back end");
      Swal.fire({ title: "Oops", text: " user might not exists in our system", icon: "error" })
    })


  }

  // render(){
  return (
    <div>

    <Col>
      <Form >
        <Form.Group className="col-md-4 mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={cemailinput} value={email} />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="col-md-4 mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={passwordinput} value={password} />
        </Form.Group>
        <Form.Group className="col-md-4 mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Show Password" />
        </Form.Group>

        <Form.Group className="col-md-4 mb-3" controlId="formBasicButton">
          <>
            <Button variant="primary" type="button" onClick={() => validate()} >Submit</Button>
            <Button variant="info" href="/register"> Create New Account</Button>

          </>
        </Form.Group>
      </Form>
    </Col>
    <Col>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Photo1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{height:250,width:250}} src={Photo2} className="d-block w-100" alt="..." />
          </div>
         
      
          </div>
      </div>
    </Col>
    </div>
  )
  // }
}
// export default Login;
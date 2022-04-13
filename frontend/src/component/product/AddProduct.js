import React, { Component, useEffect, useState } from "react";
import { Form, Button, Row } from 'react-bootstrap';
import Moment from 'moment';
import ProductServices from "../../services/ProductServices";
import OwnerHeader from "../Owner/OwnerHeader";

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // op:this.props.match.params.id,
            pId1: "",
            name1: "",
            company_name1: "",
            weight1: "",
            unit1: "",
            mrp1: "",
            rate1: "",
            mfg_date1: "",
            expire_date1: ""
        }
    }

    componentDidMount() {
        console.log("in Product AddComponentdidMount");
        let sessionPId = sessionStorage["pId"]
        if (sessionPId != null) {
            console.log("in Product AddComponentdidMount" + sessionPId);
            //to send get request to webservice and get the object which matches with id
            ProductServices.getProductById(sessionPId).then((response) => {
                console.log("elase   get data by id for update :" + response.data);
                let pObj = response.data;
                this.setState({
                    pId1: pObj.pId,
                    name1: pObj.name,
                    company_name1: pObj.company_name,
                    weight1: pObj.weight,
                    unit1: pObj.unit,
                    mrp1: pObj.mrp,
                    rate1: pObj.rate,
                    mfg_date1: pObj.mfg_date,
                    expire_date1: pObj.expire_date

                });
            })
            console.log("Name : " + this.state.name1)
        }

        else {
            console.log("in add employee");
            return;
        }
    }



    addOrUpdate = (event) => {
        event.preventDefault(); // to stop the refreshing the page
        console.log(this.state)
        //create a objevct using form data to send it nodejs sertvice to add in the databse
       // const mgfdate = new Date().toJSON(this.state.mfg_date1).slice(0, 10)
        //console.log("mgf DAte +" + mgfdate);
        //const exdate = new Date().toJSON(this.state.expire_date1).slice(0, 10)
        //console.log(" Exp DAte +" + exdate);
        var sessionPId = sessionStorage["pId"]
        let p = {
            pId: sessionPId,
            name: this.state.name1,
            company_name: this.state.company_name1,
            weight: this.state.weight1,
            unit: this.state.unit1,
            mrp: this.state.mrp1,
            rate: this.state.rate1,
            mfg_date: this.state.mfg_date1,
            expire_date: this.state.expire_date1
        };


        if (sessionPId != null) {
            ProductServices.updateP(p).then((result) => {
                console.log(result.data);
                this.props.history.push("/productlist")
            }).catch((err) => {
                console.log("error occured", err);
            })

            sessionStorage.clear();
        }
        else {
            ProductServices.addProduct(p).then((result) => {
                console.log(result.data);
                this.props.history.push("/productlist");
            })

        }
    };

    render() {
        return (
            <div>
            <div><OwnerHeader/></div>

                <h1 className="alert alert-info">Add New Product</h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" value={this.state.name1}
                                onChange={(event) => { this.setState({ name1: event.target.value }) }}
                            />
                        </Form.Group>

                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>company_name</Form.Label>
                            <Form.Control type="text" value={this.state.company_name1}
                                onChange={(event) => { this.setState({ company_name1: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>weight</Form.Label>
                            <Form.Control type="number" value={this.state.weight1}
                                onChange={(event) => { this.setState({ weight1: event.target.value }) }}
                            />
                        </Form.Group>
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>unit</Form.Label>
                            <Form.Control type="text" value={this.state.unit1}
                                onChange={(event) => { this.setState({ unit1: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>mrp</Form.Label>
                            <Form.Control type="number" value={this.state.mrp1}
                                onChange={(event) => { this.setState({ mrp1: event.target.value }) }}
                            />
                        </Form.Group>

                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control type="number" value={this.state.rate1}
                                onChange={(event) => { this.setState({ rate1: event.target.value }) }}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Mfg Date</Form.Label>
                            <Form.Control type="Date" value={this.state.mfg_date1}
                                onChange={(event) => { this.setState({ mfg_date1: event.target.value }) }}
                            />
                        </Form.Group>

                        <Form.Group className="col-md-4 mb-3">
                            <Form.Label>Expairy Date</Form.Label>
                            <Form.Control type="Date" value={this.state.expire_date1}
                                onChange={(event) => { this.setState({ expire_date1: event.target.value }) }}
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
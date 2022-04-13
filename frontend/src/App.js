import React,{Component} from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './component/Header';
import HomePage from './component/HomePage';
import Login from './component/customer/LoginPage';
import LogOut from "./component/customer/LogOut";
import AboutUs from "./component/Owner/AboutUs";
import RegisterCust from './component/customer/RegisterCust';
import ProductListforCust from './component/customer/ProductListforCust';
import Profile from "./component/customer/Profile";
import UpdateCustomer from "./component/customer/UpdateCustomer";
import MyCart from "./component/customer/MyCart";
import OrderListforCust from "./component/customer/OrderListforCust";
import OrderDetailsForCust from "./component/customer/OrderDetailsForCust";
import OrderList from "./component/Owner/OrderList";
import OrderDetails from "./component/Owner/OrderDetails";
import ProductList from './component/product/ProductList';
import CustomerList from "./component/Owner/CustomerList";
import AddProduct from './component/product/AddProduct';
import CompletedOrderList from "./component/Owner/CompletedOrderList";
import ProfileOwner from "./component/Owner/Profile";


function App() {
  return (
    
    <div className="App">
       <Header/>
     <Router>
          <Switch>
             <Route path="/" exact component={HomePage} />
             <Route path="/login" exact component={Login} />
             <Route path="/logout" exact component={LogOut} />
             <Route path="/aboutus" exact component={AboutUs} />
             <Route path="/register" exact component={RegisterCust} />
             <Route path="/productListforCust" exact component={ProductListforCust}/>
             <Route path="/profile" exact component={Profile} />
             <Route path="/updateProfile" exact component={UpdateCustomer} />
             <Route path="/cart" exact component={MyCart} />
             <Route path="/orderListForCust" exact component={OrderListforCust} />
             <Route path="/orderDetailsForCust" exact component={OrderDetailsForCust} />
             <Route path="/todaysOrder" exact component={OrderList} />
             <Route path="/orderDetails" exact component={OrderDetails} />
             <Route path="/product" exact component={ProductList} />
             <Route path="/customerList" exact component={CustomerList} />
             <Route path="/productlist" exact component={ProductList}/>
             <Route path="/addProduct" component={AddProduct}/>
             <Route path="/profileOwner" component={ProfileOwner}/>
             <Route path="/completedOrder" component={CompletedOrderList}/>

              
        </Switch>
     </Router>
    </div>
  );
}

export default App;

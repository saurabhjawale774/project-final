import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    useHistory,
    Route,
    Link
  } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';


export default function LogOut() {
    const history = useHistory();
    var profile=JSON.parse(sessionStorage["custdata"]);
   let clear=()=>{
        console.log(profile.custName);
        sessionStorage.clear();
        history.replace("/login");
    }
      

    return (
        <div>
          <div> <h1> Succefully Logged out   !!!!!!</h1></div> 
          <h2> {profile.custName} </h2> 

          <h3>Thank You  ........Visit Again</h3>
            <Button variant="primary" type="button" onClick={clear} >Back</Button>
        </div>
    )
}

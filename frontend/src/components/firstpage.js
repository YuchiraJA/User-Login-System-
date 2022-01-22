import React,{useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import './landingPage.css';
import {Link} from 'react-router-dom';

export default function Firstpage(){
    return(
        <>
     
           <center>
               <h1 className="header1">User Login System</h1>
               <br></br><Link to={"/public/login"}><button type="button" className="btnregister">View Login Page</button></Link> </center>
        </>
    )
}
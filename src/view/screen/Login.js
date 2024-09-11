import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const nav = useNavigate()
    const [Email,setEmail]=useState("");
    const [Password,setpass]=useState("");

    async function Login(){
        // console.log(Email);
        // console.log(Password);
        
        const para={
            "email":Email,
            "pass": Password
        }
        console.log(para);
        const mes= await axios("http://ankursingh.xyz/api/Employeelogin.php",para)
        console.log(mes.data);

        const {message,success}=mes.data
        if (success) {
            alert(message)
            localStorage.setItem("email",Email)//localstorage helps to store the values in the brower three functions in it setItem,getItem,clear and remove 
            nav("/")
            window.location.reload()
        }
        else{
            alert(message)
        }
    }
    return(
        <>
        <body className="background">
            
        <div className="register">
        <h1>Login</h1>
        <input value={Email} onChange={(d=>setEmail(d.target.value))} placeholder="Email Address" className="login"></input><br></br>
        <input value={Password} onChange={(d=>setpass(d.target.value))} placeholder="Password" className="login"></input><br></br>
        <button onClick={Login}style={{cursor:"pointer"}}>Login</button>            
        </div>
        </body>
        </>
    )
}
export default  Login;
import { useContext, useRef } from "react";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";



export default function Confirm(){
    // const data1 = useContext(AuthContext)
    // console.log(data1);
    const nav = useNavigate();
    const MOB = useRef("");

    function otp(){
        if(MOB.current.value){

            nav ("/otp");
        }
        else{
            alert("Please fill out the required field")
        }
    }
    return(
        <>
        <body className="background">
            
        <div style={{textAlign:"center"}}>
            <h1 for="phone">Enter a mobile number:</h1>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" ref={MOB}/><br></br>
            <small>Format: 123-45-678</small><br></br>
            
            <button onClick={otp} style={{cursor:"pointer",borderRadius:5}}>Confirm</button>
            
        </div>
        </body>
        </>
    )
}
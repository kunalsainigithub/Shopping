import { useRef, useState } from "react";
import Confirm from "./Confirm";
import { useNavigate } from "react-router-dom";
export default function Order() {
    const [select, setSelect] = useState("");
    const [select1, setSelect1] = useState("form");
    const [online, setOnline] = useState("on");
    const [online1, setOnline1] = useState("false");
    const UPI = useRef("");
    const nav = useNavigate();
    function method1() {
        (online === "on") ? setOnline1("on") : alert("select on or off")
    }
    function Confirm(){
        if(UPI.current.value){
            nav("/Confirm");
        }
        else{
            alert("Please fill out the required field");
        }
    }
    function Confirm1() {
        nav("/Confirm");
    }

    function UPIid() {
        return (

            <div>
                UPI_ID 
                <br></br>
                
                <input type="text" placeholder="Enter UPI id" ref={UPI} />
                <button onClick={Confirm}style={{cursor:"pointer",borderRadius:5}}>Confirm</button>
            </div>
        )

    }
    function OnlinePayment() {

        return (
            
            <>
            <fieldset className="online" >
            
                <legend>Select a Payment Mode</legend>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}style={{cursor:"pointer",marginRight:50,height:40,borderRadius:5}}>GooglePay</button>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}style={{cursor:"pointer",marginRight:50,height:40,borderRadius:5}}>PhonePay</button>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}style={{cursor:"pointer",marginRight:50,height:40,borderRadius:5}}>Paytm</button>
                <button type="radio" value="on" checked={online === "on"} onChange={d => setOnline(d.currentTarget.value)} onClick={method1}style={{cursor:"pointer",marginRight:50,height:40,borderRadius:5}}>NetBanking</button>
                {
                    online1 === "on" ? UPIid() : null
                    
                }
            </fieldset>
           
        </>
              
        )
    }

    function OffLinePayment() {
        return (
            <div style={{textAlign:"center"}}>

                
                <h1>Cash On Delievery</h1>
                <button onClick={Confirm1} style={{cursor:"pointer",borderRadius:5}}>Confirm</button>
            </div>

        )
    }
    function method() {
      
        (select === "on") ? setSelect1("on") : (select === "off") ? setSelect1("off") : alert("select on or off")
        setOnline1(false)
    }


    return (
        <>
        <body className="background">
            
            <div className="order">
                <div>
                    <h1> Select Payment  Mode</h1>
                </div>
                <div>
                    <input type="radio" value="on" checked={select === "on"} onChange={d => setSelect(d.currentTarget.value)} />Online
                </div>
                <div> 
                    <input type="radio" value="off" checked={select === "off"} onChange={d => setSelect(d.currentTarget.value)} />OffLine
                </div>

                <div>
                    <button onClick={method} style={{cursor:"pointer",borderRadius:5}}>Order Now</button>
                </div>
            </div>
            {
                select1 === "on" ? OnlinePayment() : select1 === "off" ? OffLinePayment() : null
            }
            </body>
        </>
    )


}
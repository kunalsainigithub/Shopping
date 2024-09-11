import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Addtocart from "./Addtocart";
import { addcart, data } from "../Data/data";
import { AuthContext } from "../Context/Context";
export default function Payment() {


    var data1 = useContext(AuthContext)
    var {addcart,total} = data1;

    console.log(data1);
    const nav = useNavigate();
    const loc = useLocation();
    const [data, setData] = useState(loc.state);
    const [Name, setName] = useState("");
    const [mobile_no, setmob_no] = useState("");
    const [pin_code, setpincode] = useState("");
    const [locality, locality_town] = useState("");
    const [city_district, setcity] = useState("");
    const [state, setstate] = useState("");
    const [address, setaddress] = useState(null);
    const [address1, setaddress1] = useState(null);
    const [address2, setaddress2] = useState(null);
    const [address3, setaddress3] = useState(null);
    const [address4, setaddress4] = useState(null);
    const [address5, setaddress5] = useState(null);
    const [address6, setaddress6] = useState(null);
    const [isForm, setIsForm] = useState(false);
    console.log(data);
    function Addtocart() {
        alert("Add to Cart");
        setaddress(Name);
        setaddress1(mobile_no);
        setaddress2(pin_code);
        setaddress3(address);
        setaddress4(locality);
        setaddress5(city_district);
        setaddress6(state);
        setIsForm(!isForm);

    };

    function AddAddressFrom() {
        return (
            <>
                <div className="payment">

                    <div>
                        <h3>ADD NEW ADDRESS</h3>
                    </div>
                    <div className="contact_details">
                        <div>

                            <h3>CONTACT DETAILS</h3>
                            <input value={Name} onChange={(d => setName(d.target.value))} placeholder="Name" className="regis"></input> <br></br>
                            <input value={mobile_no} onChange={(d => setmob_no(d.target.value))} placeholder="Mobile Number" className="regis"></input><br></br>
                        </div>
                        <div className="address">

                            <h3>ADDRESS</h3>
                            <input value={pin_code} onChange={(d => setpincode(d.target.value))} placeholder="Pin Code" className="regis"></input><br></br>
                            <input value={address} onChange={(d => setaddress(d.target.value))} placeholder="Address" className="regis"></input><br></br>
                            <input value={locality} onChange={(d => locality_town(d.target.value))} placeholder="Locality/Town" className="regis"></input><br></br>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <input value={city_district} onChange={(d => setcity(d.target.value))} style={{ width: 162 }} placeholder="City/District" className="regis"></input><br></br>
                            <input value={state} onChange={(d => setstate(d.target.value))} style={{ width: 162 }} placeholder="State" className="regis"></input><br></br>
                        </div>
                        <div>
                            <button onClick={Addtocart} style={{ width: 100, height: 40, margin: 10 ,cursor:"pointer"}}>Add Address</button>
                            <button onClick={Addtocart} style={{ width: 100, height: 40, margin: 10 ,cursor:"pointer"}} >Cancel</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    function addaddress() {
        setIsForm(!isForm)
    }
    function paymentform() {
        const params = {
            add: address,
            ...data
        }
        console.log(params);
        nav("/order", { state: params })
    }

    return (
        <>
            {
                isForm ? AddAddressFrom() :

                    <div>
                        <div className="change_address">
                            <div className="change_address1">
                                <p className="word">
                                    Name : {address ? address : " " } <br></br>
                                    Mobile Number : {address1 ? address1 : " "} <br></br> 
                                    Pin Code : {address2 ? address2 : " "} <br></br>
                                    Address : {address3 ? address3 : " "} <br></br>
                                    Locality : {address4 ? address4 : " "} <br></br>
                                    City/District : {address5 ? address5 : " "} <br></br>
                                    State : {address6 ? address6 : " "} <br></br>
                                </p>
                                <button onClick={addaddress} style={{ width: 200, height: 40, margin: 20, borderRadius: 10 ,position:"fixed",right:350,cursor:"pointer"}}>Address</button>
                            </div>
                        </div>
                        <div className="change_address2">
                            <p style={{marginLeft:30,fontSize:30,fontWeight:500}}>Payment : {data.rate} pay done</p>
                            <button onClick={paymentform} style={{ width: 200, height: 40, margin: 20, borderRadius: 10, position:"fixed",right:350 ,cursor:"pointer"}}>Order Now</button>
                        </div>
                    </div>

            }
        </>
    )
}




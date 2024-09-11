
import { useContext, useRef, useState } from "react"
import OTPInput from "react-otp-input"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";

export default function OTP() {
    // const data1 = useContext(AuthContext)
    // console.log(data1);
    const [otp, setOtp] = useState('')
    const nav = useNavigate();
    // const OTp=useRef("");
    function OTP() {
       

            nav("/final")
            alert(otp);
       
    }
    return (
            <body className="background">
                
        <div style={{textAlign:"center"}}>
            <h1>Enter the OTP</h1>
            <div style={{textAlign:"center",marginLeft:720}}>
                
            <OTPInput 
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={ (props) => <input {...props} />}
                
                />
                </div>
            <div style={{marginTop:20}}>
                <button onClick={OTP} style={{cursor:"pointer",borderRadius:5}} required>Confirm</button>
            </div>
        </div>
                </body>

    )
}
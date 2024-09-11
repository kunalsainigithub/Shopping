import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const nav = useNavigate()

    const [Firstname, setName] = useState("");
    const [Lastname, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpass] = useState("");
    const [conpass, confirm] = useState("");


    async function Register() {
        // console.log(Firstname);
        // console.log(Lastname);
        // console.log(email);
        // console.log(password);
        // console.log(conpass);

        const params = {
            "fname": Firstname,
            "lname": Lastname,
            "email": email,
            "pass": password,
            "cpass": conpass
        }
        const res = await axios("http://ankursingh.xyz/api/registerUser.php", params)
        console.log(res.data);
        const { message, success } = res.data

        if (success) {
            alert(message)
            nav("/Login")
        }
        else {
            alert(message)
        }


    }
    return (
        <>  
            <body className="background">
     <div className="register">
                <h1>Register</h1>
                <input value={Firstname} onChange={(d => setName(d.target.value))} placeholder="First Name" className="regis"></input> <br></br>
                <input value={Lastname} onChange={(d => setname(d.target.value))} placeholder="Last Name" className="regis"></input><br></br>
                <input value={email} onChange={(d => setEmail(d.target.value))} placeholder="Email Address" className="regis"></input><br></br>
                <input value={password} onChange={(d => setpass(d.target.value))} placeholder="Password" className="regis"></input><br></br>
                <input value={conpass} onChange={(d => confirm(d.target.value))} placeholder="Confirm Password" className="regis"></input><br></br>
                <button onClick={Register} style={{ cursor: "pointer" }}>Submit</button>
            </div>
            </body>
        </>
    )
}
export default Register;
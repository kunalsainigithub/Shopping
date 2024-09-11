
import { Link, Route, Routes } from "react-router-dom";
import Home from "../screen/home";
import Detail from "../screen/Detail";
import Login from "../screen/Login";
import Product from "../screen/Product";
import Register from "../screen/Register";
import { useState } from "react";
import DetailsScreen from "../screen/detailsScreen";
import Addtocart from "../screen/Addtocart";
import Payment from "../screen/Payment";
import Order from "../screen/Order";
import Confirm from "../screen/Confirm";
import OTP from "../screen/otp";
import Final from "../screen/Final";
import { data } from "../Data/data";
export default function Router() {
    const [user, setUser] = useState(localStorage.getItem('email'))

    console.log(user);

    function logout() {
        localStorage.clear()
        window.location.reload();//reloads the current url,like the refresh button
    }
    return (
        <>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                {user ?
                    <>
                        <Link to="/product" className="link">Product</Link>
                        <Link to="/Detail" className="link">Details</Link>
                        <button onClick={logout} style={{cursor:"pointer",borderRadius:5}}>Logout</button>
                    </>
                    : <>

                        <Link to="/register" className="link">Register</Link>
                        <Link to="/login" className="link">Login</Link>

                    </>
                }
            </div>

            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/Product" Component={Product} />
                <Route path="/Register" Component={Register} />
                <Route path="/Login" Component={Login} />
                <Route path="/Details" Component={DetailsScreen}/>
                <Route path="/Detail" Component={Detail} />
                <Route path="/Addtocart" Component={Addtocart}/>
                <Route path="/Payment" Component={Payment}/>
                <Route path="/Order" Component={Order}/>
                <Route path="/Confirm" Component={Confirm}/>
                <Route path="/otp" Component={OTP}/>
                <Route path="/final" Component={Final}/>


            </Routes>

        </>
    )
}
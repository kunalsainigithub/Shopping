import { useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Payment } from "./Payment";
import Product from "./Product";
import { total } from "../Data/data";
import { AuthContext } from "../Context/Context";
export default function Addtocart() {

    var data1 = useContext(AuthContext)
    var {addcart,total} = data1;

console.log(data1);

    const loc = useLocation();
    const nav = useNavigate();
    const [Product, setProduct] = useState(addcart)
    const [cart, setCart] = useState(addcart);
    const [rate, setRate] = useState(0)

    console.log(cart);
    useEffect(() => {
        var rate1 = 0;
       
        function show() {
            cart.map((d) => {
                rate1 += d.product_rate * d.qty;
            })
        }
        show();
        setRate(rate1);
    }, []);
    
    function productOrder() {

        total[0] = rate
        // total.push(rate)
        console.log(total);

        alert("Payment");
        const params = {
            cart : cart,
            rate : rate
        }

        console.log(params);

        nav('/Payment',{state:params});
    }

    function Payment() {
        alert("Payment");
       nav("/Payment");
        };

    return (
        <>
            <h1 style={{textAlign:"center"}}>Add to Cart</h1>
                    
                <div className="cart">
                <div className="addcart_left">
                    {
                        cart.map((d) => (
                            <div className="cart_product">
                                <div className="product_image">
                                    <img src={d.image} style={{ width: 200, height: 160, margin: 20 }} />
                                </div>
                                <div className="product_text">
                                    <p>Product Name: {d.product_name}</p>
                                    <p>Product Rate: {d.product_rate}</p>
                                    <p>Product Quantity: {d.qty}</p>
                                </div>

                                <button style={{marginTop:10,marginLeft:30,width:25,height:20,cursor:"pointer",borderRadius:5}}>X</button>
                            </div>
                        ))
                    }
                </div>
                <div className="addcart_right">
                    <p style={{ textDecorationColor:"blueviolet"}}> Total Rate: {rate}</p>
                    <button onClick={productOrder} style={{width:200,height:40,fontSize:20,borderRadius:5,cursor:"pointer"}}>Place Order</button>
                </div>
            </div>

            </>

            )
}  
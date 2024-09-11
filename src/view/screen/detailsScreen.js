import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { data } from "../Data/data";
export default function DetailsScreen() {
const data1 = useContext(AuthContext)
//console.log(data1);
const {addcart,total}=data1



    const nav = useNavigate()
    const loc = useLocation()
    const [product, setProduct] = useState(loc.state)
    const [qty, setQty] = useState(1)
    const [image, setimage] = useState()
    //console.log(product)
    const {data}  = product;
    function addqty() {
        var q = qty;
        if (q < 9) {
            setQty(++q);
        }
    }
    function subqty() {
        var q = qty;
        if (q > 1) {
            setQty(--q);
        }
    }

    function addtocart() {
        alert("Add to Cart");
        //console.log(product);
        const params = {
            ...product,
            qty:qty,
            
        };
       addcart.push(params)
       //console.log(addcart);
        nav("/Addtocart")
    }
    return (
        <>

            <div className="cartdiv">
                <div className="cartimage">
                    <div className="cartimagemain">
                        <img src={product.image} className="cartimageshow" />
                    </div>
                </div>
                <div className="smallimage">
                    <img src={product.image} className="cartimagemore" />
                    <img src={product.image} className="cartimagemore" />
                    <img src={product.image} className="cartimagemore" />
                    <img src={product.image} className="cartimagemore" />
                    <img src={product.image} className="cartimagemore" />
                </div>
                <div className="prodDetails">
                    <div className="prodDetails1">

                        <p className="text1"> Product Name : {product.product_name}</p>
                        <p className="text2"> Product Rate : {product.product_rate}</p>

                    </div>
                    <div className="addqty">
                        <img onClick={subqty} src={require("../images/icons8-minus-50.png")} style={{ width: 50, height: 50, marginLeft: 75, marginTop: 35, cursor: "pointer" }} />
                        <p className="textqty">{qty}</p>
                        <img onClick={addqty} src={require("../images/icons8-add-50.png")} style={{ width: 50, height: 50, marginLeft: 45, marginTop: 35, cursor: "pointer" }} />
                    </div>
                    <div className="prodDetails1">
                        <p className="text1"> Product Quantity : {product.product_qty}</p>
                        <p className="text2"> Product Color : {product.product_color}</p>

                    </div>
                </div>
                <div className="addtocart">
                    <div className="pay">

                        <p> Total Pay :{product.product_rate * qty}</p>
                        <button onClick={addtocart} style={{cursor:"pointer"}}>Add to Cart</button>
                    </div>
                </div>

            </div>
        </>
    )

}



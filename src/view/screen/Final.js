import { useContext, useState } from "react"
import { AuthContext } from "../Context/Context";

export default function Final() {
    const data1 = useContext(AuthContext)
    console.log(data1);
    const { addcart, total } = data1

    return (
        <body className="background1">
            <div className="final">
                <h1 style={{ display: "inline-flex" }}>Ordered Confirm</h1> 
                <img src={require("../images/Tick_Mark_Dark_icon-icons.com_69147.png")} style={{ width: 50, height: 70, marginLeft: 50 ,marginTop:10}} />
                <h1>Total Payed : {total[0]}</h1>
                {
                    addcart.map((d) => (
                        <>
                            <h4>{d.product_name}</h4>
                            <h4>{d.qty}</h4>
                            <img src={d.image} style={{ width: 250, height: 220 }} />
                        </>))
                }
            </div>
        </body>
    )
}       
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { banner, data } from "../Data/data";
import ImageSlider from "../component/Imageslider";
export default function Home() {
    const nav = useNavigate()
    const [product, setProduct] = useState('')
    const [cart, setcart] = useState('')
    useEffect(() => {
        function showProduct() {
            setProduct(data)
        }
        showProduct()
    }, [])


    // const [product, setProduct] = useState('')
    // useEffect(() => {
    //     async function showProduct() {
    //         const res = await axios.get("http://ankursingh.xyz/api/productshow.php")
    //         setProduct(res.data.body)
    //     }
    //     showProduct()
    // }, [])

    console.log(banner);
    console.log(product);
    function productdetails(d) {
        const data = {
            ...d,
            // cart,addcart
        }
        nav("/details", { state: data });
    }
    return (
        <>
            <div style={{backgroundColor:"light-grey"}}>

            
            <ImageSlider slides={banner} />;
            </div>

            <div style={{ padding: 30 ,backgroundColor:"light-grey"  ,color:""}}>
                {
                    product && product.map(d => (
                        <>
                            <div onClick={() => productdetails(d)}
                                style={{
                                    padding: 0,
                                    width: 250,
                                    height: 250,
                                    backgroundColor: "gray",
                                    margin: 50,
                                    display: "inline-flex"
                                }}>

                                <div>
                                <img src={d.image} style={{ width: 250, height: 250,cursor:"pointer" }} />
                                    <h5 className="label">{d.product_name}</h5>
                                </div>
                            </div>
        
                        </>
                    ))
                }
            </div>
        </>
    )
}
import Router from "./view/Router";
//import Product from "./view/screen/Product";
//import Home from "./view/screen/home";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./view/Context/Context";
import { addcart, data, total } from "./view/Data/data";
import "./view/style/style.css";
const App = () => {
  console.log(data);
  var data1 = {
    addcart, total
  }
  return (
    <div>
      <AuthContext.Provider value={data1}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContext.Provider>

    </div>

  )
}
export default App;
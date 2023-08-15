import Cart from "./ECOMMERCE/Cart";
import Ecom from "./ECOMMERCE/Ecom";
import Navbar from "./ECOMMERCE/Navbar";
import SignIn from "./ECOMMERCE/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ecom/>} />
          {/* <Route path="/" element={<Navbar/>} /> */}
          <Route path="/f" element={<SignIn/>} />
          <Route path="/c" element={<Cart/>} />
          {/* <Route path="/c" element={<Cart image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" 
            title="Laptop Bag" price="$11.96" model="HP" qty="Qty-1"/> */}

            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

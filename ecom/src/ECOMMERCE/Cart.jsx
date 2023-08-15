import React from "react";
import "./Ecom.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Cards02 from "./Cards02";

function Cart(props) {
  return (
    <>
      <Navbar />
      <Cards02
        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        title="Laptop Bag"
        price="$11.96"
        model="HP"
        qty="Qty-1"
      />
      <Cards02
        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        title="Laptop Bag"
        price="$11.96"
        model="HP"
        qty="Qty-1"
      />
      <Cards02
        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        title="Laptop Bag"
        price="$11.96"
        model="HP"
        qty="Qty-1"
      />

      <Link to="/">
        <button className="btn btn-primary" style={{ marginLeft: "48%" }}>
          Back
        </button>
      </Link>
    </>
  );
}

export default Cart;

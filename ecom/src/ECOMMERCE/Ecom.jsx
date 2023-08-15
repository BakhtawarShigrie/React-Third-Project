import React from "react";
import "./Ecom.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Ecom() {
  return (
    <>

      <Navbar/>
     
      <header className="header">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home-image"/>
        
      <div className="cards">
        <Cards desc="Laptop Bag" price="$11.96" img="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" stars="⭐⭐⭐⭐⭐"/>
        <Cards desc="Microwave Oven" price="$11.96" img="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
        stars="⭐⭐⭐⭐"/>
        <Cards desc="Book" price="$11.96" img="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        stars="⭐⭐⭐⭐⭐"/>
      </div>

      <div className="cards">
        <Cards desc="Smart speaker" price="$11.96" img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" stars="⭐⭐⭐⭐⭐"/>
        <Cards desc="Apple iPad Pro" price="$11.96" img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        stars="⭐⭐⭐⭐"/>
        <Cards desc="Curved LED Gaming Monitor" price="$11.96" img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" stars="⭐⭐⭐⭐⭐"/>

      </div>

      </header>
        
        

    </>
  );
}

export default Ecom;

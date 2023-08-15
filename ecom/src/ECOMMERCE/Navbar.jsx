import React from 'react';
import { Link } from 'react-router-dom';
import "./Ecom.css";


function Navbar() {
  return (
    <>
        <nav>
        <i className="bi bi-shop"></i>
        <span className="text1">eSHOP</span>
        <div
          className="input-group mb-3"
          id="search-bar"
          style={{ height: "5vh", width: "60vw" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ height: "5vh", width: "56.7vw" }}
          />
          <span
            className="input-group-text"
            id="basic-addon1"
            style={{ height: "5vh" }}
          >
            <i
              className="bi bi-search"
              style={{ height: "5vh", width: "1vw", color: "black" }}
            ></i>
          </span>
        </div>
        <div className="nav-right">
          <div className="one">
            <p>
              <Link to="/f">
                <button>Hello Guest</button> <br />
                <span>Sign In</span>
              </Link>
            </p>
          </div>
          <div className="one">
            <p>
              Your
              <br />
              <span>Shop</span>
            </p>
          </div>
          <div>
            <Link to="/c">
              <i className="bi bi-cart"></i>
            </Link>
            <span className="zero">0</span>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar;

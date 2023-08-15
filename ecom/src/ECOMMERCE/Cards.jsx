import React from 'react';
import "./Ecom.css";

function Cards(props) {
  return (
    <>

        <div className="card-main">
          <div className="card card-display">
            <div className="card-body d-flex flex-col items-center">
              <h5 className="card-title">
                {props.desc}
              </h5>
              <p className="card-text">
                <small className="text-body-secondary">{props.price}</small>
              </p>
              <p>{props.stars}</p>
            </div>
            <img
              src={props.img}
              className="card-img-left"
              alt="#"
            />
          </div>
        </div>


      
    </>
  )
}

export default Cards;

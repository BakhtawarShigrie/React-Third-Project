import React from 'react'

function Cards02(props) {
  return (
<>
  <div className="cart">
        <li className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={props.image}
              alt="#"
              className="h-full w-full object-cover object-center"/>
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base ml-11 font-medium text-gray-900">
                <h3>
                  <a href="#">{props.title}</a>
                </h3>
                <p className="ml-4 text-gray-500">{props.price}</p>
              </div>
              <p className="mt-1 ml-11 text-sm text-gray-500">{props.model}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500 ml-11">{props.qty}</p>
              <button className="btn btn-primary">
                Buy
              </button>

              
            </div>
          </div>
        </li>
      </div>
</>
  )
}

export default Cards02

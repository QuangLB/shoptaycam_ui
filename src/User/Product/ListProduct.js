import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState,useEffect  } from "react";
import axios from "axios";
import {CartContext} from "../Cart/CartService"
export default function ProductUser(props) {

  const [items, setItems] = useState([]);
    useEffect(() => {axios.get('http://localhost:8080/api/product').then(resp => {
      setItems(resp.data);
  })}, []);
  return (
    
    <div className="table-responsive container">
      <h1>List Product</h1>
      <CartContext.Consumer>
                    {({ cartItems }) => (
                      <a>Cart ({localStorage.length})</a>
                    )}
                  </CartContext.Consumer>
     
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {items.map((items) => 
  <div className="card mb-4 rounded-3 shadow-sm">
    <div className="card-header py-3">
      <h4 className="my-0 fw-normal">{items.name}</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">$</small>{items.price}</h1>
      <img src={items.img} className="img-thumbnail" alt="..." />
      <CartContext.Consumer>
        {({addToCart}) =>  <button className="w-100 btn btn-lg btn-primary"
        onClick={() => addToCart(items)}
        >Add to cart</button>}
     
      </CartContext.Consumer>
    </div>
  </div>
  )} 
</div>

    </div>
  );
 
}
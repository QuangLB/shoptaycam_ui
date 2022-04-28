import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState,useEffect  } from "react";
export default function Cart(props) {
  const [items, setItems] = useState([]);
    useEffect(() => {
      let cart = localStorage.getItem("cart1") ? JSON.parse(localStorage.getItem("cart1")) :  [];
      setItems(cart)
  }, []);
  console.log(items)

  return (
    <div className="table-responsive container">
      <h1>List cart</h1>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{items.name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">$</small>{items.price}</h1>
        <img src={items.img} className="img-thumbnail" alt="..." />
        <button type="button" className="w-100 btn btn-lg btn-primary">Buy</button>
      </div>
    </div>


</div>
    </div>
  );
}

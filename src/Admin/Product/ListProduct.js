import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState,useEffect  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Product(props) {
  const [items, setItems] = useState([]);
  const remove = async (id) => {
      console.log(id);
      try {
        axios.delete(
          "http://localhost:8080/api/product/" + id
        );
        alert("Remove success!" + id);
        window.location.reload(true);
      } catch (error) {}
    };
    useEffect(() => {axios.get('http://localhost:8080/api/product').then(resp => {
      setItems(resp.data);
  })}, []);
  

  return (
    <div className="table-responsive container">
      <h1>List Product</h1>
      <table className="table table-light table-striped table-sm table-hover">
      <thead>
        <tr>
        <th></th>
          <th >ID</th>
          <th >Name</th>
          <th >Price</th>
          <th >Create Date</th>
          <th >Brand</th>
          <th >Remove</th>
          <th >Edit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((items) => (        
            <tr table-active key={items.id}>
                <td></td>
              <td>{items.id}</td>
              <td>
                {items.name}
              </td>
              <td>
                {items.price}
              </td>
              <td>
                {items.createDate}
              </td>
              <td>
                {items.brand.name}
              </td>
              <td>
                <button className="btn btn-outline-danger" onClick={() =>remove(items.id)}>
                  Remove
                </button>
              </td>
              <td> <Link to={"/edit-product/" + items.id} className="btn btn-outline-primary">
                  Edit
                </Link></td>
            </tr>
        ))}       
      </tbody>
      </table>

    </div>
  );
}
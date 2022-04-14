import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState,useEffect  } from "react";
import axios from "axios";
import { getAll } from "../API/brandAPI";
export default function Brand(props) {
  const [items, setItems] = useState([]);
  const remove = async (id) => {
      console.log(id);
      try {
        axios.delete(
          "http://localhost:8080/api/brand/" + id
        );
        alert("Remove success!" + id);

        window.location.reload(true);
      } catch (error) {}
    };
    useEffect(() => {
        axios.get('http://localhost:8080/api/brand').then(resp => {
      setItems(resp.data);
  })
}, []);
  

  return (
    <div className="table-responsive container">
        <h1>List brand</h1>
      <table className="table table-light table-striped table-sm table-hover">
      <thead>
        <tr>   
            <th></th>  
          <th >Id</th>
          <th >Name</th>
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
                <button className="btn btn-outline-danger">
                  Remove
                </button>
              </td>
              <td> <button className="btn btn-outline-primary">
                  Edit
                </button></td>
            </tr>
        ))}       
      </tbody>
      </table>
    </div>
  );
}
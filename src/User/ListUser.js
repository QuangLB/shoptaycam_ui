import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState,useEffect  } from "react";
import axios from "axios";
export default function Users(props) {
  const [items, setItems] = useState([]);
  const remove = async (id) => {
      console.log(id);
      try {
        axios.delete(
          "http://localhost:8080/api/users/" + id
        );
        alert("Remove success!" + id);

        window.location.reload(true);
      } catch (error) {}
    };
    useEffect(() => {axios.get('http://localhost:8080/api/users').then(resp => {
      setItems(resp.data);
  })}, []);
  

  return (
    <div className="table-responsive container">

      <table className="table table-light table-striped table-sm table-hover">
      <thead>
        <tr>
        <th></th>
          <th >Username</th>
          <th >Fullname</th>
          <th >Role</th>
          <th >Remove</th>
          <th >Edit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((items) => (        
            <tr table-active key={items.id}>
                <td></td>
              <td>{items.username}</td>
              <td>
                {items.fullname}
              </td>
              <td>
                {items.role === true ? "Admin" : "User"} 
              </td>
              <td>
                <button className="btn btn-outline-danger" onClick={() =>remove(items.username)}>
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
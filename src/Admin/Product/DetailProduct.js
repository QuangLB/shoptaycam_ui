import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DetailProduct() {
  const { id } = useParams();
  const [item, setItems] = useState({});
  // useEffect(() => {
  //     console.log(id);
  //   fetch("http://localhost:8080/api/product/" + id)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setItems(data);
  //     });
  // }, []);

  useEffect(() =>
   {axios.get('http://localhost:8080/api/product/',{
    params: {
      id: id
    }}).then(resp => {
    setItems(resp.data);
    console.log(resp.data);
})}, []);
  return (

    <div className="detail" align="center">
      <div style={{ height: "5rem" }}></div>
      <div className="card" style={{ width: "70%" }}>
        <div className="card-body">
          <h5 className="card-title">Detail Product</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> ID : {item.id}</li>
          <li className="list-group-item">Name : {item.name}</li>
          <li className="list-group-item">Age : {item.price}</li>
          <li className="list-group-item">Club : {item.createDate}</li>
          <li className="list-group-item">Club : {item.brand}</li>
        </ul>
      </div>
      <div style={{ height: "5rem" }}></div>
    </div>
  );
}
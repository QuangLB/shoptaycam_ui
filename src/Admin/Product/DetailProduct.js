import { useParams } from "react-router";
import { useEffect, useState } from "react";
export default function DetailProduct() {
  const { id } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
      console.log(id);
    fetch("http://localhost:8080/api/product/1")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (

    <div className="detail" align="center">
      <div style={{ height: "5rem" }}></div>
      <div className="card" style={{ width: "70%" }}>
        <div className="card-body">
          <h5 className="card-title">Detail Product</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> ID : {items.id}</li>
          <li className="list-group-item">Name : {items.name}</li>
          <li className="list-group-item">Age : {items.price}</li>
          <li className="list-group-item">Club : {items.createDate}</li>
          <li className="list-group-item">Club : {items.brand}</li>
        </ul>
      </div>
      <div style={{ height: "5rem" }}></div>
    </div>
  );
}
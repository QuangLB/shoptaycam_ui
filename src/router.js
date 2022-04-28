import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddBrand from "./Admin/Brand/AddBrand";
import EditBrand from "./Admin/Brand/EditBrand";
import Brand from "./Admin/Brand/ListBrand";
import AddProduct from "./Admin/Product/AddProduct";
import DetailProduct from "./Admin/Product/DetailProduct";
import Product from "./Admin/Product/ListProduct";
import AddUsers from "./Admin/UserAccount/AddUser";
import Edit from "./Admin/UserAccount/EditUser";
import Users from "./Admin/UserAccount/ListUser";
import Cart from "./User/Cart/ListCart";
import ProductUser from "./User/Product/ListProduct";

export default function AppRouter(props) {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Product />}>
        </Route>
        <Route path="/detail-brand/:id" element={<DetailProduct />}>
        </Route>
        <Route path="/list-brand" element={<Brand />}>
        </Route>
        <Route path="/add-brand" element={<AddBrand />}>
        </Route>
        <Route path="/edit-brand/:id" element={<EditBrand />}>
        </Route>
        <Route path="/admin/list-product" element={<Product />}>
        </Route>
        <Route path="/admin/add-product" element={<AddProduct />}>
        </Route>
        <Route path="admin/edit-user/:id" element={<Edit />}>
        </Route>
        <Route path="/admin/list-user" element={<Users />}>
        </Route>
        <Route path="/admin/add-user" element={<AddUsers />}>
        </Route>
        <Route path="/edit-users/:id" element={<Edit />}>
        </Route>
        <Route path="/list-product-users" element={<ProductUser />}>
        </Route>
        <Route path="/product-detail-users/:id" element={<DetailProduct />}>
        </Route>
        <Route path="/list-card" element={<Cart />}>
        </Route>
      </Routes >
    </Router>
  );

}
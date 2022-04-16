import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import AddBrand from "./Admin/Brand/AddBrand";
import Brand from "./Admin/Brand/ListBrand";
import AddProduct from "./Admin/Product/AddProduct";
import Product from "./Admin/Product/ListProduct";
import AddUsers from "./Admin/UserAccount/AddUser";
import Edit from "./Admin/UserAccount/EditUser";
import Users from "./Admin/UserAccount/ListUser";

export default function AppRouter(props) {
    return (
            <Router>
                <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
              <Routes >
                <Route path="/" exact>
                <Product />
                </Route>
                <Route path="/list-brand">
                  <Brand />
                </Route>
                <Route path="/add-brand">
                  <AddBrand />
                </Route>
                <Route path="/admin/list-product">
                  <Product />
                </Route>
                <Route path="/admin/add-product">
                  <AddProduct />
                </Route>
                <Route path="/admin/list-user">
                  <Users />
                </Route>
                <Route path="/admin/add-user">
                  <AddUsers />
                </Route>
                <Route path="/editplayers/:id">
                  <Edit />
                </Route>
              </Routes >
              </div>
            </Router>
          );

  }
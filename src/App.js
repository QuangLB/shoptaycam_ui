import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Product from "./Admin/Product/ListProduct";
import Header from "./component/Header";
import AddProduct from "./Admin/Product/AddProduct";
import DetailProduct from "./Admin/Product/DetailProduct";

function App() {

  return (
    <div className="App">
    <Header />
    {/* <Product /> */}
    <DetailProduct />
      </div>
  );
}

export default App;

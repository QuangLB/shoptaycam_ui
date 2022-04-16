import { useForm } from "react-hook-form";
import axios from "axios";
import { useState,useEffect  } from "react";
const AddProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (products) => {
    console.log(products);
    try {
      const { data } = await axios.post("http://localhost:8080/api/product", products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/brand').then(resp => {
  setItems(resp.data);
})
}, []);
// const [product, setProducts] = useState([]);
// useEffect(() => {
//   axios.get('http://localhost:8080/api/product').then(resp => {
//     setProducts(resp.data);
// })
// }, []);



  return (
      
    <div align="center">
      <h2 style={{ color:"#426ec7"}}>Add product</h2>
      <br/>
    <form style={{ width: "32%" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label htmlFor="formGroupExampleInput" className="form-label">
            Id
          </label>
      <input
            type="number"
            {...register("id", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input id"
       
          />
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Input name"
          />
          {errors.name && <span>Field name is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Img
          </label>
          <input
            type="text"
            {...register("img", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input img"
          />
          {errors.img && <span>Field img is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
          Price
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input price"
          />
          {errors.price && <span>Field price is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
          createDate
          </label>
          <input
            type="date"
            {...register("createdate", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
          />
          {errors.createDate && <span>Field createDate is require</span>}
        </div>
        <div>
        <label htmlFor="formGroupExampleInput2" className="form-label">
            Brand
          </label>              
            <select {...register("brandId", { required: true })} class="form-select" aria-label="Default select example">
            {items.map((item) =>(
              <option value={item.id}>{item.name}</option>
            ))}
          </select>         
        </div>
        {errors.brandId && <span>Field brandId is require</span>}
        <hr></hr>
        <button type="submit" className="btn btn-outline-warning">
          Add
        </button>
      </div>
    </form>
    </div>
  );
};
export default AddProduct;
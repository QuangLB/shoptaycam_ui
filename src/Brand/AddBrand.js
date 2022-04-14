import { useForm } from "react-hook-form";
import { add } from "../API/brandAPI";
const AddBrand = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (brand) => {
    try {
      const { data } = await add(brand);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div align="center">
      <h2 style={{ color:"#426ec7"}}>Add users</h2>
      <br/>
    <form style={{ width: "32%" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
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
      
   
   
        
        <hr></hr>
        <button type="submit" className="btn btn-outline-warning">
          Add
        </button>
      </div>
    </form>
    </div>
  );
};
export default AddBrand;
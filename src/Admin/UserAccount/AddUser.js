import { useForm } from "react-hook-form";
import { add } from "../../API/userAPI";
const AddUsers = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (users) => {
    try {
      const { data } = await add(users);
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
            Username
          </label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Input username"
          />
          {errors.username && <span>Field username is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Fullname
          </label>
          <input
            type="text"
            {...register("fullname", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input fullname"
          />
          {errors.fullname && <span>Field fullname is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input password"
          />
          {errors.password && <span>Field password is require</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="text"
            {...register("email", { required: true })}
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Input email"
          />
          {errors.email && <span>Field email is require</span>}
        </div>
        <div>
        <label htmlFor="formGroupExampleInput2" className="form-label">
            Role
          </label>
            <select {...register("role", { required: true })} class="form-select" aria-label="Default select example">
                <option value={"true"} >Admin</option>
                <option value={"false"} selected>User</option>
            </select>
        </div>
        {errors.role && <span>Field role is require</span>}
        <hr></hr>
        <button type="submit" className="btn btn-outline-warning">
          Add
        </button>
      </div>
    </form>
    </div>
  );
};
export default AddUsers;
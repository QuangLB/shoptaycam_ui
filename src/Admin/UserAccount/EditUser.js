import { useParams  } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { get } from "../../API/userAPI";
export default function Edit(props) {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [user, setUser] = useState({});
  useEffect(() => {
    get(id).then((response) => {
        setUser(response.data);
      reset(response.data);
    });
  }, [reset]);

  const onSubmit = (data) => {
    const user = {
      id: id,
      ...data
    };
    console.log(data)
    try {
      axios.put(
        "http://localhost:8080/api/users/" + id,
        data
      );
      alert("Sửa đổi thành công");
    } catch (error) {}
  };

  return (
    <div align="center">
    <form style={{ width: "32%" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={user.fullname}
            {...register("fullname")}
            id="formGroupExampleInput"
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
          </label>
          <input
            type="text"
            defaultValue={user.email}
            {...register("email")}
            className="form-control"
            id="formGroupExampleInput2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Club
          </label>
          <input
            type="text"
            defaultValue={user.club}
            {...register("club")}
            className="form-control"
            id="formGroupExampleInput2"
          />
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
        <hr></hr>
        <button type="submit" className="btn btn-outline-warning">
          Edit
        </button>
      </div>
    </form>
    </div>
  );
}
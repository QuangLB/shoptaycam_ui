import { useParams  } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { get } from "../../API/brandAPI";
export default function EditBrand(props) {
    let navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [brand, setBrands] = useState({});
  useEffect(() => {
    get(id).then((response) => {
        setBrands(response.data);
      reset(response.data);
    });
  }, [reset]);

  const onSubmit = (data) => {
    const brand = {
      id: id,
      ...data
    };
    console.log(data)
    try {
      axios.put(
        "http://localhost:8080/api/brand/" + id,
        data
      );
      
      alert("Sửa đổi thành công");
      navigate('/list-brand');
    } catch (error) {}
  };

  return (
    <div align="center">
    <form style={{ width: "32%" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={brand.name}
            {...register("name")}
            id="formGroupExampleInput"
          />
          <br />
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
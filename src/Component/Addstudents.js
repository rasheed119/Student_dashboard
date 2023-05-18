import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "../Base/Base"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from 'yup';
import { useFormik } from "formik";

export const fieldValidationScheme = yup.object({
  name : yup.string().required("Please fill in students name"),
  batch : yup.string().required("Please fill in the student batch").min(5,"Please fill the valid batch name"),
  qualification : yup.string().required("Please fill the student qualification"),
  gender : yup.string().required("Please fill in the gender")
})

function Addstudents({student,setstudent}){

  const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
    initialValues :{
      name : "",
      batch : "",
      qualification : "",
      gender : ""
    },
    validationSchema : fieldValidationScheme,
    onSubmit : (new_data)=>{
      add_data(new_data)
    }
  })

  const history = useHistory();



  async function add_data(new_data){

    const responce = await fetch("https://644e27f41b4567f4d580f5c6.mockapi.io/users",{
      method : "POST",
      body : JSON.stringify(new_data),
      headers : {
        "Content-Type" : "application/json"
      }
    })

    const data = await responce.json();

    setstudent([...student,data]);

    return history.push("/homepage");
  }

  return(
    <Base
    Title={"Add Student"}
    Description={"Enter details to add Students"}
    >
    <div className="addstudents">
      <form onSubmit={handleSubmit}>
        
      <input
      type="name"
      placeholder="Enter name"
      onBlur={handleBlur}
      name="name"
      value={values.name}
      onChange={handleChange}
      />

      <input
      type="qualification"
      placeholder="Enter qualification"
      onBlur={handleBlur}
      name="qualification"
      value={values.qualification}
      onChange={handleChange}
      />

      <input
      type="batch"
      name="batch"
      placeholder="Enter Batch"
      onBlur={handleBlur}
      value={values.batch}
      onChange={handleChange}
      />

      <input
      type="gender"
      name="gender"
      onBlur={handleBlur}
      placeholder="Enter Gender"
      value={values.gender}
      onChange={handleChange}
      />

      <span>
      <Button variant="primary"
      type="submit"
      >Add Student</Button>
      </span>
      </form>

    </div>
    </Base>
  );
}
export default Addstudents;


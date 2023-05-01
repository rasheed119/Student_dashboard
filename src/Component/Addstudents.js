import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "../Base/Base"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Addstudents({student,setstudent}){


  const [name,setname] = useState("");
  const [qualification,setqualification] = useState("");
  const [gender,setgender] = useState("");
  const [batch,setbatch] = useState("");

  const history = useHistory();

  function add_data(){
    const new_data = {
      name,
      batch,
      qualification,
      gender
    };
    setstudent([...student,new_data]);
    setname("");
    setbatch("")
    setgender("");
    setqualification("");

    return history.push("/homepage");
  }

  return(
    <Base
    Title={"Add Student"}
    Description={"Enter details to add Students"}
    >
    <div className="addstudents">

      <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />

      <input
      type="text"
      placeholder="Enter qualification"
      value={qualification}
      onChange={(e)=>setqualification(e.target.value)}
      />

      <input
      type="text"
      placeholder="Enter Batch"
      value={batch}
      onChange={(e)=>setbatch(e.target.value)}
      />

      <input
      type="text"
      placeholder="Enter Gender"
      value={gender}
      onChange={(e)=>setgender(e.target.value)}
      />

      <span>
      <Button variant="primary"
      onClick={add_data}
      >Add Student</Button>
      </span>
    </div>
    </Base>
  );
}
export default Addstudents;


import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Addstudents({student,setstudent}){
  const [name,setname] = useState("");
  const [qualification,setqualification] = useState("");
  const [gender,setgender] = useState("");
  const [batch,setbatch] = useState("");

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
  }

  return(
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

      <Button variant="primary"
      onClick={add_data}
      >Add Student</Button>
      
    </div>
  );
}
export default Addstudents;

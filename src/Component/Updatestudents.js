import React, { useEffect } from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import Base from "../Base/Base"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Updatestudents({student, setstudent}) {

  const {id} = useParams();

  const editstudent = student[id];

  const [name,setname] = useState("");
  const [qualification,setqualification] = useState("");
  const [gender,setgender] = useState("");
  const [batch,setbatch] = useState("");

  const history = useHistory();

  useEffect(()=>{
    setname(editstudent.name);
    setgender(editstudent.gender);
    setqualification(editstudent.qualification);
    setbatch(editstudent.batch);
  },[student]);

  function updatestudent(){
    const updatedstudent = {
      name,
      qualification,
      batch,
      gender
    };
    student[id] = updatedstudent;
    setstudent([...student]);
    setname("");
    setbatch("")
    setgender("");
    setqualification("");
    return history.push("/");
  }

  return (
    <Base
    Title={"Update Students"}
    Description={"Enter student details to update"}
    >
    <div className='addstudents'>
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
      onClick={updatestudent}
      >Update Student</Button>
      </span>
    </div>
    </Base>
  )
}

export default Updatestudents
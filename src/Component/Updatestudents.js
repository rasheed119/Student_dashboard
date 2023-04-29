import React, { useEffect } from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Updatestudents({student, setstudent, index}) {
  const editstudent  = student[index];
  const [name,setname] = useState("");
  const [qualification,setqualification] = useState("");
  const [gender,setgender] = useState("");
  const [batch,setbatch] = useState("");

  useEffect(()=>{
    setname(editstudent.name);
    setbatch(editstudent.batch);
    setqualification(editstudent.qualification);
    setgender(editstudent.gender);
  },[editstudent]);

  function updatestudent(){
    const updatedstudent = {
      name,
      qualification,
      batch,
      gender
    };
    student[index] = updatedstudent;
    setstudent([...student]);
  }

  return (
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
  )
}

export default Updatestudents
import React from "react";
import Base from "../Base/Base";
import data from "../Data/Data";
import Addstudents from "./Addstudents"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Updatestudents from "./Updatestudents";

export default function Students(){
  const [student , setstudent] = useState(data);
  const [index , setindex] = useState();

  const deletestudent = (studidx)=>{
    const remainingstudent = student.filter((stdobj,idx)=> idx !== studidx);
    setstudent(remainingstudent);
  }

  return(
    <Base
    Title = {"Students Dashboard"}
    Description = {"This page contains Students data"}
    >

      <div className="container">
        <div>
          <Addstudents
          student = {student}
          setstudent = {setstudent}
          />

          <br/>

          <Updatestudents
          student = {student}
          setstudent = {setstudent}
          index = {index}
          />

          <br/>

        </div>
        <div className="row">
          
        {student.map((stud,idx)=>(
        <Card style={{ width: '18rem' }} key={idx}>
      <Card.Body>
        <Card.Text>
          Name : {stud.name}
        </Card.Text>
        <Card.Text>
          Qualification : {stud.qualification}
        </Card.Text>
        <Card.Text>
          Batch : {stud.batch}
        </Card.Text>
        <Card.Text>
          Gender : {stud.gender}
        </Card.Text>
        <div>
        <Button variant="primary"
        onClick={()=>setindex(idx)}
        >Edit</Button>

        <Button variant="danger"
        onClick = {()=>deletestudent(idx)}
        >Delete</Button>

        </div>
      </Card.Body>
    </Card>
    ))}
        </div>
      </div>
    </Base>
  )
}
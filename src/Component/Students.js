import React from "react";
import Base from "../Base/Base";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function Students({student,setstudent}){
  const [index , setindex] = useState();
  const history = useHistory();

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
        onClick={()=>history.push(`/update/${idx}`)}
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
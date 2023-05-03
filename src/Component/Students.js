import React from "react";
import Base from "../Base/Base";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState,useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Students({student,setstudent}){
  const history = useHistory();

  const [count, setcount] = useState()

  useEffect(()=>{
    const getstudents = async() => {
      const responce =  await fetch("https://644e27f41b4567f4d580f5c6.mockapi.io/users",{
        method : "GET"
      });
      const students_count = await responce.json();
      setcount(students_count.length);
    }
    getstudents();
  },[])

  const deletestudent = async(studidx)=>{
    
    const responce = await fetch(`https://644e27f41b4567f4d580f5c6.mockapi.io/users/${studidx}`,{
      method : "DELETE"
    })
    const data = await responce.json();

    if(data){
      const remainingstudent = student.filter((stdobj,idx)=> stdobj.id !== studidx);
      setstudent(remainingstudent);
      setcount(remainingstudent.length);
    }
  }

  return(
    <Base
    Title = {"Students Dashboard"}
    Description = {"This page contains Students data"}
    >

      <div className="container">

        <div>
          <h4>Total Students : {count}</h4>
        </div>

        <Row>
          
        {student.map((stud,idx)=>(
          <Col>
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
        onClick={()=>history.push(`/update/${stud.id}`)}
        >Edit</Button>

        <Button variant="danger"
        onClick = {()=>deletestudent(stud.id)}
        >Delete</Button>

        </div>
      </Card.Body>
    </Card>
    </Col>
    ))}
      </Row>
      </div>
    </Base>
  )
}
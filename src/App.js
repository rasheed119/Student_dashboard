import { Route, Switch } from 'react-router-dom';
import './App.css';
import Students from "./Component/Students"
import Addstudents from './Component/Addstudents';
import { useEffect, useState } from "react";
import Updatestudents from "./Component/Updatestudents";
import Nopage from './Component/Nopage';
import Welcome from './Component/Welcome';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [student , setstudent] = useState([]);
  useEffect(()=>{
    const getstudents = async() => {
      const responce =  await fetch("https://644e27f41b4567f4d580f5c6.mockapi.io/users",{
        method : "GET"
      });
      const data = await responce.json();
      if(data){
        setstudent(data);
      }
    }
    getstudents();
  },[])
  return (
    <div className="App bg-secondary">
      <Switch>
        //Exact path first page to load

        <Route exact path = "/">
          <Welcome/>
        </Route>

        <Route path = "/details">
          <Redirect to = "/" />
        </Route>

        <Route path = "/homepage">
          <Students
          student = {student}
          setstudent = {setstudent}
          />
        </Route>

        <Route path = "/add">
          <Addstudents
          student={student}
          setstudent={setstudent}
          />
        </Route>

        <Route path = "/update/:id">
          <Updatestudents
            student = {student}
            setstudent = {setstudent}
            />
        </Route>

        <Route path = "**">
          <Nopage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import './App.css';
import Students from "./Component/Students"
import Addstudents from './Component/Addstudents';
import data from "./Data/Data";
import { useState } from "react";
import Updatestudents from "./Component/Updatestudents";

function App() {
  const [student , setstudent] = useState(data);
  return (
    <div className="App bg-secondary">
      <Switch>
        //Exact path first page to load

        <Route exact path = "/">
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

      </Switch>
    </div>
  );
}

export default App;

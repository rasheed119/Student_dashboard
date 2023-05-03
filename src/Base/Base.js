
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Base = ({Title,Description,children})=>{
  const history = useHistory();

  return(
    <div className="main-component base component">
      <div className="button">

      <Button className="primary"
      onClick={()=>history.push("/homepage")}
      >Dashboard</Button>

      <Button className="primary"
      onClick={()=>history.push("/add")}
      >Add Students</Button>

      <Button
      onClick={()=>history.push("/")}
      >Welcome page</Button>

      </div>
      <header className="heading">
        <h1>{Title}</h1>
      </header>
      <main className="main-segment">
        <h2>{Description}</h2>
      <div>
        {children}
      </div>
      </main>
    </div>
  )
}
export default Base;
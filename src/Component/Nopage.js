import React from 'react'
import Base from '../Base/Base'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Nopage() {
  const history = useHistory();
  return (
    <Base
    Title={"Error Code  404 Page Not Found"}
    Description={"Please Click the below button to go to dashboard"}
    >
      <Button
      onClick={()=>history.push("/")}
      >Go to Dashboard</Button>
    </Base>
  )
}

export default Nopage
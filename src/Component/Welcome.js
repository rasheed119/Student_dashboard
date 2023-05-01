import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Welcome() {
  const history = useHistory();
  return (
    <div className='Welcome'>
      <h1>Welcome to the Student Dashboard</h1>
      <h3><Button onClick={()=>history.push("/homepage")}>Click Here</Button> to go to Student Dashboard</h3>
    </div>
  )
}

export default Welcome
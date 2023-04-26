import React from "react";

const Base = ({Title,Description,children})=>{
  return(
    <div className="main-component base component">
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
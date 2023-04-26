import React from "react"
import Base from "../Base/Base";
import data from "../Data/Data";
import { useState } from "react"

export default function Students(){
  const [students , setstudents] = useState(data);
  console.log(students);
  return(
    <Base
    Title = {"Students Dashboard"}
    Description = {"This page contains Students data"}
    >
    </Base>
  )
}
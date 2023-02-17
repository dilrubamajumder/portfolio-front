import Register from "../Components/Register/Register";
import Moving from "./Movingimages/Moving";
import React from 'react'

function Signup() {
  return (
    <div className="registerpg">
       <div><Register /></div> 
        <div>
        <Moving />
      </div>
    </div>
  )
}

export default Signup
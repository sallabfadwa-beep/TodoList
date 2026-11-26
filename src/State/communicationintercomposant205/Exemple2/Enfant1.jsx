import React from 'react'

function Enfant1(props) {
  const {setState} = props
  return (
    <div style={{backgroundColor:'yellow',padding:'5px'}}>
        <input type="text" 
        placeholder='saisir la valeur de state ' 
        onChange={(e)=>setState(e.target.value)}/>
    </div>
  )
}

export default Enfant1
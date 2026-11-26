import React from 'react'

function Card(props) {
    const {title,children} = props
  return (
    <div style ={{backgroundColor:'pink',margin:'5px',padding:'5px'}}>
        <h3> {title} </h3>
        <div style ={{backgroundColor:'yellow',padding:'10px'}}>
            {children}
        </div>
    </div>
  )
}

export default Card
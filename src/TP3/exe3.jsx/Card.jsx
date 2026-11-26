import React from 'react'
import './Card.css'
function Card(props) {
    const {title, children}=props
  return (
    <div> 
        <h3>{title}</h3>
        <p>{children}</p>
    </div>
  )
}

export default Card
import React from 'react'

function EtudiantLi(props) {
    const{nom,email} = props

  return (
    <li >{nom} | {email} </li>
  )
}

export default EtudiantLi
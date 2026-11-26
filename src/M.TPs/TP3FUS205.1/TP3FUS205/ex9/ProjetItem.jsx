import React from 'react'

function ProjetItem(props) {
    const {nom, type,  budget} = props
  return (
    <li>
           {nom} -- {type} -- {budget} DHs
    </li>
  )
}

export default ProjetItem
import React from 'react'
import './EtudiantRow.css'

function EtudiantRow(props) {
  const {code,nom,moyenne} = props
  return (
    <tr className={moyenne>=15?'excellent':'normal'}>
         <td> {code} </td>
         <td> {nom}</td>
         <td>{moyenne}</td>        
    </tr>
  )
}

export default EtudiantRow
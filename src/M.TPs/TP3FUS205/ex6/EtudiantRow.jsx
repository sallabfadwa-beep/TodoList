import React from 'react'
import './EtudiantRow.css'

function EtudiantRow({code,nom,moyenne}) {
  return (
    <tr className={moyenne>=15?'excellent':'normal'}>
         <td> {code} </td>
         <td> nom : {nom}</td>
         <td>{moyenne}</td>        
    </tr>
  )
}

export default EtudiantRow
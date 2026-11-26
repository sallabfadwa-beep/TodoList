import React from 'react'
import ProjetItem from './ProjetItem'

function ProjetItems(props) {
    const {projets} = props
  return (
    <div>
            <h2>liste des projets : </h2>
            <ul>
                {projets.map((projet,index)=>
                         <ProjetItem key={index}  {...projet} />)}
            </ul>
    </div>
  )
}

export default ProjetItems
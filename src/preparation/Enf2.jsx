import React from 'react'

export default function Enf2(props) {
    const {setState}= props
  return (
    <div style={{backgroundColor:'pink', padding:'10px'}}>
        <input type="text" placeholder='saisir la valeur de state' onChange={(e)=>setState(e.target.value)} />
    </div>
  )
}

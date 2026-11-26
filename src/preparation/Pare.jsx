import React, { useState } from 'react'
import Enf2 from './Enf2'
import Enf1 from './Enf1'


export default function Pare() {
    const [state,setState] = useState('')
  return (
    <div style={{backgroundColor:'gray', padding:'5px'}}>
        <Enf2 setState={setState}/>
        <Enf1 state={state} />
    </div>
  )
}

import React,{useState} from 'react'
import Enfant1 from './Enfant1'
import Enfant2 from './Enfant2'

function Parent() {
  const [state,setState] = useState('')

  return (
    <div style={{backgroundColor:'gray',padding:'5px'}}>
          
          <Enfant1 setState={setState} /> <br />
          <Enfant2 state = {state} /> <br />
    </div>
  )
}

export default Parent
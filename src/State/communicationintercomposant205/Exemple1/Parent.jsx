import React,{useState} from 'react'
import Enfant1 from './Enfant1'
import Enfant2 from './Enfant2'


function Parent() {
  const [state1,setState1] = useState('');
  const [state2,setState2] = useState('')

  function afficher(msg)
  {
    alert(msg)
  }
  return (
    <div>
        <Enfant1 nom="ali" prenom="kamal" setState1 = {setState1} afficher = {afficher} /> <br />
        <Enfant2 nom="alaoui" prenom="hind" setState2={setState2}  afficher = {afficher}/> <br />
        state1 : {state1} | state2 : {state2} <br />
        <button onClick={()=>afficher('je suis le parent')}>afficher parent</button>
    </div>
  )
}

export default Parent
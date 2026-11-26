import React from 'react'
import {greenData} from './data'
import ListeQuartiers from './ListeQuartiers'

function App() {
    const {ville,responsable: {nom,poste,email},quartiers} = greenData
  return (
    <div style={{backgroundColor:'yellow',margin:'5px',padding :'10px'}}>
         <h1>Application : Green Data</h1>
         <p>ville : {ville} </p>
         <p> {nom} -- {poste} -- {email} </p>
         <ListeQuartiers quartiers = {quartiers}/>
    </div>
  )
}

export default App
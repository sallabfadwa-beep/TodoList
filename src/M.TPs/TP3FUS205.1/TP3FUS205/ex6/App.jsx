import React from 'react' 
import { groupeInfo } from './data'
import TableEtudiants from './TableEtudiants';
import './App.css'

function App() {
    const {nomGroupe,filiere,responsable:{nom,module,email},listeEtudiants} = groupeInfo;
  return (
    <div className='app'>
          <p>{nomGroupe}</p>
          <p>{filiere}</p>
          <p>{nom} | {module} | {email}</p>
          <TableEtudiants listeEtudiants = {listeEtudiants} />
    </div>
  )
}

export default App
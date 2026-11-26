import React from 'react'
import Card from './Card'

function App() {
  function afficher()
  {
    alert('Rebonjour')
  }
  return (
    <div>
        <h2>App exercice 3</h2>
        <Card title ="Présentation">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus omnis reprehenderit quam vel quae eum, harum minima earum cumque autem, voluptas tenetur dolorem facilis nihil ex neque a repudiandae provident.</p>
        </Card>

        <Card title ="liste">
               <ul>
                   <li>POO</li>
                   <li>JS</li>
                   <li>MYSQL</li>
               </ul>
        </Card>
        <Card title ='Alerte'>
            <button onClick={afficher}>Supprimer</button>
        </Card>
    </div>
  )
}

export default App
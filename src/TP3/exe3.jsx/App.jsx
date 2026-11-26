import Card from "./Card";
import React from 'react'

function App() {
    function button(){
        alert ('Bonjour')
    }
  return (
    <div >
        <Card title="Présentation">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id debitis odit ipsa distinctio impedit reiciendis illo quos cupiditate officia excepturi eos laboriosam ipsam non quae quasi facere, ut expedita.</p>
    </Card>
    <Card title="Liste">
        <ul>
            <li>JSX</li>
            <li>HTML</li>
        </ul>      
    </Card>
    <Card title="Alerte">

        <button onClick={button}>Supprimer</button>      
    </Card>
    </div>
  )
}

export default App
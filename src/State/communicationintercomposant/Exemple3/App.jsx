import React from 'react'

function App() {
    const [panier,setPanier] = useState([
                                                {nom:'p1',prix:3000,quantite:50,categorie:'PC'},
                                                {nom:'p2',prix :5000,quantite :10,categorie:'TV'},
                                                {nom:'p3',prix :4000,quantite :2,categorie:'TV'}
                                           ])
  return (
    <div>App</div>
  )
}

export default App
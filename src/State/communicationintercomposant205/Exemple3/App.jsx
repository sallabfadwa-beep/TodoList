import React,{useState} from 'react'
import ListeProduit from './ListeProduit'
import AddProduit from './AddProduit'

function App() {
    const [panier,setPanier] = useState([
                                            {nom:'p1',prix:3000,quantite:50,categorie:'PC'},
                                            {nom:'p2',prix :5000,quantite :10,categorie:'TV'},
                                            {nom:'p3',prix :4000,quantite :2,categorie:'TV'}
                                       ])
    function addProduit(newproduit)
    {
        setPanier([...panier,newproduit])
        alert('bien ahjouté')
    }
  return (
    <div>
         <h2>application de gestion de panier : </h2>
         <AddProduit addProduit = {addProduit}/> <br /><br />
         <ListeProduit panier = {panier}/> <br />
         effectif : {panier.length}

         
    </div>
  )
}

export default App
import React ,{useState} from 'react'

function AddProduit(props) {
    const {addProduit} = props
    const [nom,setNom] = useState('')
    const [prix,setPrix] = useState('')
    const [quantite,setQuantite] = useState('')
    const [categorie,setCategorie] = useState('')
   function ajouterproduit()
   {
     if(nom.trim()===''|| prix.trim()===''||quantite.trim()===''||categorie.trim()==='')
      {
        alert('tous les champs sont obligatoires !!')
        return
      }
      let newProduit = {nom:nom,prix:prix,quantite:quantite,categorie:categorie}
      addProduit(newProduit)
    }
  return (
    <div  style={{backgroundColor:'yellow',padding:'5px'}}>
        nom : <input type="text" value= {nom}
        onChange={(e)=>setNom(e.target.value)} />  <br />
        prix : <input type="number" name="" id="" value= {prix}
        onChange={(e)=>setPrix(e.target.value)} /> <br />
        quantité : <input type="number" name="" id="" value= {quantite}
        onChange={(e)=>setQuantite(e.target.value)} /> <br />
        catégorie : <select name="" id="" value= {categorie}
        onChange={(e)=>setCategorie(e.target.value)}>
            <option value="">choisir une catégorie</option>
            <option  value="TV">TV</option>
            <option value="PC">PC</option>
            <option value="Smartphone">Smartphone</option>
        </select> <br />
        <button onClick={ajouterproduit}>Ajouter au panier</button>

    </div>
  )
}

export default AddProduit
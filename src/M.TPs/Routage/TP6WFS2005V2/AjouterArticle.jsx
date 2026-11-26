import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const categories = [
  "CPU","GPU","RAM","PSU","Motherboard",
  "Storage", "Case", "Monitor", "Accessories"
]
function AjouterArticle(props) {
  const {ajouterArticle} = props

  const [form, setForm] = useState({id:Date.now(),name:"", price:"", category:"", description:""})
  const navigate = useNavigate()

  function handleChange(e){
    setForm({...form, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    const {name, price, category, description} = form

    if (!name.trim() || !price.trim() || !category || !description.trim()){
      alert("All inputs Must be Filled !") 
      return
    }
    // d'autre conditions de verefication
    ajouterArticle(form)
    alert("Article has been added succesfully !!")
    navigate("/liste")



    // setArticles((previous)=> [...previous, form])
    
  }

  return (
    <>
    <h2>Ajouter Article Page</h2>
    <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" name='name' id='name' value={form.name} onChange={handleChange}/> 

        <label htmlFor="price">Price:</label> 
        <input type="number" name="price" id='price' step="0.01" min="0" value={form.price} onChange={handleChange}/> 
      
        <label htmlFor="category">Category:</label>
        <select name="category" value={form.category} id='category' onChange={handleChange}>

          <option value="">select a category</option>
          {categories.map((c, index) => 
            <option key={index}>{c}</option>
          )}
        </select> 
      
        <label htmlFor="description">Description: </label>
        <textarea name="description" value={form.description} id='description' onChange={handleChange}/>

      <button>Ajouter</button>
    </form>
    </>
  )
}

export default AjouterArticle


/*
now the questions
why didnt you use async function right after useeffect as a parametre
why we put in in another function, is it beacause it will stop the work of useEffect cause each render it has to wat for the last to finish then use the new one ??

*/
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const categories = [
  "CPU","GPU","RAM","PSU","Motherboard",
  "Storage", "Case", "Monitor", "Accessories"
]
function EditArticle({articles, modifierArticle}) {
  const {id} = useParams()
  const targetArticle = articles.find((article)=> article.id == id)
  const [form, setForm] = useState(targetArticle)
  const navigate = useNavigate()


  function handleChange(e){
    setForm({...form, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
    const { name, price, category, description} = form
    if (!name.trim() || !price.trim() || !category || !description.trim()){
      alert("All inputs Must be Filled !") 
      return
    }
    modifierArticle(form)
    alert("article has been Updated succesfully !!")
    navigate("/liste")
  }

  return (
    <div>
      {!targetArticle ? <h2>Article Not Found !</h2> :(
      <>
      <h2>Detail Article Page</h2>
      <Link to={"/liste"}>&lt;== Back</Link>
      <form className='detailCard' onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input type="text" name='name' defaultValue={targetArticle.name} onChange={handleChange} /> 
        
            <label htmlFor="price">Price:</label>
            <input type="number" name='price'  defaultValue={targetArticle.price} onChange={handleChange} /> 
        
            <label htmlFor="category">Category:</label>
            <select name="category" defaultValue={targetArticle.category} onChange={handleChange} >
              <option value="">select a category</option>
              {categories.map((category, index)=> (
                <option key={index} >{category}</option>
              ))}
            </select>
        
            <label htmlFor="description">Description:</label>
            <textarea  defaultValue={targetArticle.description} name='description' onChange={handleChange} />

            <button>Sauvegarder</button>
      </form>
      </>
        )
      }
    </div>
  )
}

export default EditArticle
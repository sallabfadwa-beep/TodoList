import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import RechercheArticle from './RechercheArticle'

const categories = [
    "CPU","GPU","RAM","PSU","Motherboard",
    "Storage", "Case", "Monitor", "Accessories"
]
function ListeArticles({articles, supprimerArticle}) {

  const [category, setCategory] = useState("")
  const filteredArticles = category === "" ? articles :
                          articles.filter((article)=> article.category == category)

  return (
    <div>
        <div className='recherche'>
            <select name="category"  onChange={(e)=> setCategory(e.target.value)}>
              <option value="">select a category</option>
              {categories.map((category, index) => 
                <option key={index}>{category}</option>
              )}
            </select> 
        </div>
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Details</th>
              <th>Modifier</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredArticles.map((article, index) => (
              <tr key={index}>
                <td>{article.name}</td>
                <td>{article.price} DH</td>
                <td>{article.category}</td>
                <td><Link to={`/liste/detail/${article.id}`} className='detailBtn'>Detail</Link></td>
                <td><Link  className='modifierBtn' to={`/liste/edit/${article.id}`}>Edit</Link></td>
                <td><Link  className='deleteBtn' onClick={()=> supprimerArticle(article.id)}>Delete</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ListeArticles
import React from 'react'
import { categories } from './categories'

function ChercherBar({handleCategorieChange}) {
  // const {handleCategorieChange} = props 
  return (
    <div className='chercherBar'>
      
        <select  onChange={(e)=> handleCategorieChange(e.target.value)}>
          <option value="">choisir une categorie</option>
            {categories.map((categorie, index)=> 
              <option key={index}>{categorie}</option>)
            }
        </select>
    </div>
  )
}

export default ChercherBar
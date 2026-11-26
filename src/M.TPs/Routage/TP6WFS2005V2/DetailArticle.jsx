import React from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailArticle({articles}) {
  const {id} = useParams()
  const targetArticle = articles.find((article)=> article.id == id)
  // const targetArticle = articles.find((article)=> article.id === Number(id))
  const { name, price, category, description} = targetArticle

  return (
    <div>
      {!targetArticle ? <h2>Article Not Found !</h2> :(
      <>
      <h2>Detail Article Page</h2>
      <Link to={"/liste"}>&lt;== Back</Link>
      <form className='detailCard'>

            <label htmlFor="id">ID:</label>
            <input type="text" id='id' value={id} readOnly={true}/> 

            <label htmlFor="name">Name:</label>
            <input type="text" id='name' value={name} readOnly={true}/> 
        
            <label htmlFor="price">Price:</label>
            <input type="text" id='price'  value={price+" DH"} readOnly={true}/> 
        
            <label htmlFor="category">Category:</label>
            <input type="text" value={category} id='category' readOnly={true} />
        
            <label htmlFor="description">Description:</label>
            <textarea  value={description} id='description' readOnly={true}/>
      </form>
      </>
        )
      }
    </div>
  )
}

export default DetailArticle
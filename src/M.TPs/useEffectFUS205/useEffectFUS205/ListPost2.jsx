import React,{useState,useEffect} from 'react'
import axios from 'axios'
function ListPost2() {
  const [userId,setUserId] = useState('')
  const [posts,setPosts] = useState([])
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
                   const url = (userId ==='') ? 'https://jsonplaceholder.typicode.com/posts' : 
                                               `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
                   axios.get(url)
                         .then(response => setPosts(response.data))
                         .catch(error => setError(error.message))
                         .finally(()=>setLoading(false))
  },[userId])
  if(loading) return <p>en cours de chargement ....</p>
  if (error)  return <p>{error}</p>
  return (
    <div> 
        <h2>liste des posts : </h2>
         userId : <input type="number" name="" id=""
                    value={userId}  onChange={(e)=>setUserId(e.target.value)}/>
        <ul>
            {posts.map((post,index)=> <li>id: {post.id} | title : {post.title} | body : {post.body} </li>)}
        </ul>
        nombre de post : {posts.length}
        
    </div>
  )
}
export default ListPost2
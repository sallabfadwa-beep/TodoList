import React, { useEffect, useState } from 'react'

export default function ListPost() {
    const [posts, setPosts] = useState([])
    // const [error, setError] = useState('')
    // const [loading,setLoading] = useState(true)
    useEffect(()=> {
         fetch ('https://jsonplaceholder.typicode.com/posts')
               .then(response => response.json())
               .then(response => setPosts(response))
               .catch(response => console.log(error))
            //    .catch(response => setError('probleme de communication avec API'))
            //    .finally(() => setLoading(false))

    },[])

    // if (loading) return <p>en cours de chargement ...</p>
    // if (error) return <p>{error} </p>
  return (
    <div>
        <h2>Liste des posts</h2>
        <ul> 
            {posts.map ((post,index) =><li> id : {post.id} | title: {post.title} | body {post.body} </li>) }
        </ul>
        nombre de post : {posts.length}
    </div>
  )
}

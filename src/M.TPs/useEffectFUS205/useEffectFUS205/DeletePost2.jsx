import React,{useState} from 'react'
import axios from 'axios'

function DeletePost2() {
    const [idPost,setIdPost] = useState('')
    function supprimerPost(e)
    {
        e.preventDefault();
        let url = `https://jsonplaceholder.typicode.com/posts/${idPost}`
        axios.delete(url)
            .then(response => { alert('bien supprimé')})
            .catch(error => console.log(error.message))              
        
    }
  return (
    <div>
        <h2>suppression post : </h2>
        <form action="" onSubmit={supprimerPost}>
                        id post :  <input type="text" 
                            value={idPost} onChange={(e)=>setIdPost(e.target.value)} />
                        <button>supprimer</button>
       </form>
    </div>
  )
}

export default DeletePost2
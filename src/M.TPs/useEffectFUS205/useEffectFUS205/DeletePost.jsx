import React,{useState} from 'react'

function DeletePost() {
    const [idPost,setIdPost] = useState('')
    function supprimerPost(e)
    {
        e.preventDefault();
        let url = `https://jsonplaceholder.typicode.com/posts/${idPost}`
        fetch(url, { method: 'DELETE'})
            .then(response => response.json())
            .then(response => {
                 alert('post bien supprimé')
                 
            })
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

export default DeletePost
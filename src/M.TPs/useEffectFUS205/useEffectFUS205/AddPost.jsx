import React,{useState} from 'react'

function AddPost() {

   const [userId,setUserId] = useState('')
   const [title,setTitle] = useState('')
   const [body,setBody] = useState('')
   function ajouterPost(e)
   {
      e.preventDefault();
      let newpost = {userId:userId,title:title,body:body}
      fetch('https://jsonplaceholder.typicode.com/posts',
                                                           {
                                                            method: 'POST',
                                                            body: JSON.stringify(newpost),
                                                            headers: {
                                                                'Content-type': 'application/json; charset=UTF-8',
                                                            },
                                                            })
            .then(response => response.json())
            .then(response => alert('post bien ajouté : ' + response.id))

   }
  return (
    <div>
        <h2>ajout d'un nouveau post : </h2>
        <form action="" onSubmit={ajouterPost}  method='POST'>
            user id : <input type="text" value={userId}  onChange={(e)=>setUserId(e.target.value)}/> <br />
            title : <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} /> <br />
            body : <input type="text"  value={body}  onChange={(e)=>setBody(e.target.value)}/> <br />
            <input type="submit" value="ajouter" />
        </form>
    </div>
  )
}

export default AddPost
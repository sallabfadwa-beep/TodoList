import React,{useState} from 'react'
import axios   from 'axios'
import { useNavigate } from 'react-router-dom'


function AddPost2() {

   const [userId,setUserId] = useState('')
   const [title,setTitle] = useState('')
   const [body,setBody] = useState('')
   const navigate = useNavigate()
   function ajouterPost(e)
   {
      e.preventDefault();
      let newpost = {userId:userId,title:title,body:body}
      axios.post('https://jsonplaceholder.typicode.com/posts', newpost)
                                .then(response => { 
                                                    alert('post bien ajouté id :' +response.data.id)
                                                     navigate('/postsaxios')
                                                  })
                                .catch(err => console.log(err.message));


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

export default AddPost2
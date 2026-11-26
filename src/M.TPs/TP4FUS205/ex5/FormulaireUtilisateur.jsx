import React,{useState} from 'react'

function FormulaireUtilisateur() {
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const [user,setUser] = useState(null)
    function Afficher(e)
    {
        e.preventDefault()
        setUser(null)
        if(nom.trim()=='' || prenom.trim()=='' || email.trim()=='' || age.trim()=='')
        {
            alert('tous les champs sont obligatoire')
            return
        }
        /*let regex = /^modèle_regex$/
        if(!regex.test(email))
        {

        }*/
       if(email.indexOf('@')==-1)
       {
        alert("l'email doit contenir @")
        return
       }

       setUser({nom : nom,prenom : prenom,age: age , email : email})
       setNom('')
       setPrenom('')
       setEmail('')
       setAge('')
    }

  return (
    <div>
        <h2>forumlaire utilisateur :</h2>
        <form action="" onSubmit={Afficher}>
        <table>
            <tbody>
                    <tr>
                <td>nom :</td>
                <td><input type="text" 
                     value={nom} onChange={(e)=>setNom(e.target.value)} /></td>
            </tr>
             <tr>
                <td>prénom :</td>
                <td><input type="text"
                    value={prenom} onChange={(e)=>setPrenom(e.target.value)}  /></td>
            </tr>
             <tr>
                <td>email :</td>
                <td><input type="text"
                         value={email} onChange={(e)=>setEmail(e.target.value)}  /></td>
            </tr>
             <tr>
                <td>age :</td>
                <td><input type="number"
                         value={age} onChange={(e)=>setAge(e.target.value)}  /></td>
            </tr>
             <tr>
                <td colSpan={2}> <input type="submit"  value="envoyer" /></td>                
            </tr>
            </tbody>            
        </table>
        </form>
        {
            user !== null && <div style={{backgroundColor:'pink',margin:'10px',padding:'10px'}}> 
                                        <p> nom : {user.nom} </p>
                                        <p> prénom  : {user.prenom} </p>
                                        <p> email : {user.email} </p>
                                        <p>age  : {user.age} </p>
                                 </div>
        }
        
    </div>
  )
}

export default FormulaireUtilisateur
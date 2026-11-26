import React,{useState} from 'react'
import {users} from './users'

function FormulaireConnexion() {
  const [nom,setNom] = useState('')
  const [password,setPassword] = useState('')
  const [seSouvenir,setSeSouvenir] = useState(false)
  const [message,setMessage] = useState('')

  function handleSubmit(e)
  {
      e.preventDefault()
      setMessage('')
      if(!nom || !password )
      {
        alert('tous les champs sont obligatoire !!!')
        return
      }
      if(password.length < 6)
      {
         alert('le mot de passe doit contenir au moins 6 caractères')
         return
      }
      const monUser= users.find((user,index)=>user.nom ===nom && user.password ===password)
      if(monUser === undefined)
      {
        alert("erreur d'authentification !!! ")
        return
      }
      else
      { 
        let msg = 'bienvenu : ' + nom ;
        if(seSouvenir === true)
        {
            msg += ' vous serez connecter automatiquement la prochaine fois !!!'
        }
        setMessage(msg)
      }
  }
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            
               <fieldset>
                   <legend>Formulaire de connexion  : </legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>nom : </td>
                                <td><input type="text" value={nom} 
                                   onChange={(e)=>setNom(e.target.value)} /></td>
                            </tr>
                             <tr>
                                <td>password : </td>
                                <td><input type="password" value={password} 
                                onChange={(e)=>setPassword(e.target.value)}/></td>
                            </tr>
                             <tr>
                                <td>se souvenir de moi </td>
                                <td><input type="checkbox" checked={seSouvenir} 
                                onChange={(e)=>setSeSouvenir(e.target.checked)}  /></td>
                            </tr>
                             <tr>
                                <td> </td>
                                <td><input type="submit" value="se connecter" /></td>
                            </tr>
                        </tbody>
                    </table>
               </fieldset>
        </form>
        <div>
            {message !=='' && <p style={{color:'red'}}>{message}</p>}
        </div>
    </div>
  )
}

export default FormulaireConnexion
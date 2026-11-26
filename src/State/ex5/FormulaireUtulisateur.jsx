import React, { useState } from 'react'

function FormulaireUtulisateur() {
    const [nom,setNom]= useState('')
    const [prenom,setPrenom]= useState('')
    const [email,setEmail]= useState('')
    const [age,setAge]= useState('')
    const [user,setUser]= useState(null)
    function Afficher(e){
        e.preventDefault()
        setUser(null)
        if(nom.trim()=='' || prenom.trim()=='' || email.trim()=='' || age.trim()==''){
            alert('Tous les champs sont obligatoire')
            return
        }
        /*let regex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/
        if (!regex.test(email))*/
        if (email.indexOf('@')== -1){
            alert ("l'eamil doit contenir @")
            return
        }
        setUser({nom: nom , prenom: prenom, age:age, email:email})
        setNom('')
        setPrenom('')
        setEmail('')
        setAge('')
    }
  return (
    <div>
        <h2>Formulaire utilusateur :</h2>
        <form action="" onSubmit={Afficher}>
            <table>
                <tbody>
                    <tr>
                        <td>nom:</td>
                        <td><input type="text" value={nom} onChange={(e)=> setNom(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>prenom:</td>
                        <td><input type="text" value={prenom} onChange={(e)=> setPrenom(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>email:</td>
                        <td><input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>age:</td>
                        <td><input type="number" value={age} onChange={(e)=> setAge(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="submit" value="envoyer" /> </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <div>
          {error!==''&& <p>{error}</p>}
        </div>
    </div>
  )
}

export default FormulaireUtulisateur

/*import { useState } from "react";

function FormulaireUtilisateur() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [utilisateur, setUtilisateur] = useState(null);
  const [erreur, setErreur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si un champ est vide
    if (nom === "" || prenom === "" || email === "" || age === "") {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    // Vérifier l'email
    if (!email.includes("@")) {
      setErreur("L'email doit contenir @.");
      return;
    }

    // Afficher les données
    setUtilisateur({
      nom: nom,
      prenom: prenom,
      email: email,
      age: age
    });

    setErreur("");

    // Réinitialiser les champs
    setNom("");
    setPrenom("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>Formulaire utilisateur</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Envoyer</button>
      </form>

      {erreur && <p>{erreur}</p>}

      {utilisateur && (
        <div>
          <h3>Informations saisies :</h3>
          <p>Nom : {utilisateur.nom}</p>
          <p>Prénom : {utilisateur.prenom}</p>
          <p>Email : {utilisateur.email}</p>
          <p>Âge : {utilisateur.age}</p>
        </div>
      )}
    </div>
  );
}

export default FormulaireUtilisateur;*/
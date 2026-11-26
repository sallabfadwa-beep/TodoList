import React, { useState } from 'react'

function Somme() {
    const [a,setA]= useState('')
    const[b,setB]= useState('')
    const [error,setError]= useState('')
    const [result,setResult]= useState(null)
    const [operation,setOperation]= useState('+')

    function afficher(){
        setError('') //kaymas7 message d'erreur l9dim
        setResult(null)

        if (a.trim()==='' || b.trim()===''){
            setError('Tous les champs sont obligatoires!!!')
            return
        }
        if (isNaN(a.trim()) || isNaN(b.trim())){
            setError('Tous les champs doivent etre numeriques!!!')
            return
        }

        if (operation=== '+'){
            setResult(Number(a)+Number(b))
        }
        if (operation=== '-'){
            setResult(Number(a)-Number(b))
        }
        if (operation=== '*'){
            setResult(Number(a)*Number(b))
        }
        if (operation=== '/'){
            setResult(Number(a)/Number(b))
        }

        setA('')  //kaykhw les deux inputs après un calcul réussi
        setB('')
        
    }
  return (
    <div>
        Saisir a: <input type="text" value={a} onChange={(e)=> setA(e.target.value)}/> <br />
        Saisir b: <input type="text" value={b} onChange={(e)=> setB(e.target.value)}/> <br />
        <select value={operation} onChange={(e)=>setOperation(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select> <br />
        <button onClick={afficher}> Calculer</button>
        {error !=='' && <p style={{color:" #bf3444"}}>{error}</p>}
        {result !==null &&<p style={{color:"#82cf82", border:"1px solid #E8DCC8", backgroundColor:"#f2eee8"}}>Le resultat est: {result}</p>}
    </div>
  )
}

export default Somme
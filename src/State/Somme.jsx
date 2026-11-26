import React, { useState } from 'react'

function Somme() {
    const [a,setA]= useState('')
    const[b,setB]= useState('')
    const [error,setError]= useState('')
    const [result,setResult]= useState(null)
    function afficher(){
        if (a.trim()==='' || b.trim()===''){
            setError('Tous les champs sont obligatoires!!!')
            return
        }
        if (isNaN(a.trim()) || isNaN(b.trim())){
            setError('Tous les champs doivent etre numeriques!!!')
            return
        }
        setResult(Number(a) + Number(b))
        
    }
  return (
    <div>
        Saisir a: <input type="text" value={a} onChange={(e)=> setA(e.target.value)}/> <br />
        Saisir b: <input type="text" value={b} onChange={(e)=> setB(e.target.value)}/> <br />
        <button onClick={afficher}> Calculer</button>
        {error !=='' && <p style={{color:"red"}}>{error}</p>}
        {result !== null &&<p>La somme est: {result}</p>}
    </div>
  )
}

export default Somme
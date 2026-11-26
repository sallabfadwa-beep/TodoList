import React, { useState } from 'react'

function ListeDeTaches() {
    const [newtask,setNewTask]=useState('')
    const [tasks,setTasks]= useState([])
    function ajouter(){
        //verification
        if (newtask.trim() === ''){
            alert('Tous les champs sont obligatoire')
            return;
        }
       /* const mytask = tasks.find(task)=>task ===newtask)
        if(mytask !== undefined){
            alert ("Veuillez changer le nom de la tache")
            return
        }*/
       if (tasks.includes(newtask) == true){
        alert("Veuillez changer le nom de la tache")
        return;      
       }
       setTasks ([...tasks,newtask])
       setNewTask ('')
        }

       function supprimer (taskasupprimer){
          let newtasks = tasks.filter((task)=> task !== taskasupprimer)
          setTasks(newtasks)
       }
  return (
    <div>
        saisir votre tache : <input type="text" value={newtask} 
        onChange={(e)=> setNewTask(e.target.value)} />
        <button onClick={ajouter}>Ajouter</button>
        <h2>Liste des taches :</h2>
        <ul>
            {tasks.map((task,index)=><li key={index}> 
                {task}  <button onClick={()=>supprimer(task)}>supprimer</button> </li> )}
        </ul>
        <p>
            Le nombre de tache trouve est : {tasks.length}
        </p>
    </div>
  )
}

export default ListeDeTaches
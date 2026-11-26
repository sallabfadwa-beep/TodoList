import React,{useState} from 'react'
function ListeDeTaches() {
    const [newtask,setNewTask]= useState('')
    const [tasks,setTasks] = useState([])
    function ajouter()
    {
        // vérification 
        if(newtask.trim()  === '')
        {
            alert('le champs est obligatoire')
            return;
        }
        /*const mytask = tasks.find((task)=>task === newtask)
        if(mytask !== undefined)
        {
            alert("veuillez changer le nom de la tache ")
            return;
        }*/
       if(tasks.includes(newtask) == true)
       {
            alert("veuillez changer le nom de la tache ")
            return;
       }
        setTasks([...tasks,newtask])
        setNewTask('')
    }
    function Supprimer(taskasupprimer)
    {
        let newtasks = tasks.filter((task) => task !== taskasupprimer)
        setTasks(newtasks)
    }
  return (
    <div>
       saisir votre tache : <input type="text" value={newtask} 
          onChange={(e)=>setNewTask(e.target.value)} /> 
       <button onClick={ajouter}>ajouter</button>
       <h2>liste des taches : </h2>
       <ul>
           {tasks.map((task,index)=>
             <li key = {index}>
                      {task} - <button onClick={()=>Supprimer(task)}>supprimer</button>
           </li>)}
       </ul>
       <p>
        le nombre de tache trouvé est : {tasks.length}
       </p>
    </div>
  )
}

export default ListeDeTaches
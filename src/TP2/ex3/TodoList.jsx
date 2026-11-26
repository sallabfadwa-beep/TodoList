import React from 'react'
import './TodoList.css'

function TodoList() {
   
  const tasks = [
                    { id: 1, titre: "Réviser React", fait: true },
                    { id: 2, titre: "Faire les exercices", fait: false },
                    { id: 3, titre: "Lire la doc JSX", fait: false },
                    { id: 4, titre: "Préparer l'exposé", fait: true },
                    {id : 5, titre : "apprendre composant réact",fait : true}
                ];
  const tasksfaitfalse = tasks.filter(task => task.fait === false)

  {/*jsx */}
  return (
    <div>
        <h2>liste des taches : </h2>
        nombre de tache est : <span style = {{fontStyle:'italic'}}> {tasks.length}</span>
        <ul>
            {tasks.map((task,index)=> 
              <li className={task.fait? "done":"todo-item"} key={task.id}>
                {task.titre} - {task.fait ? "✅" : "⏳"}
              </li> )}
        </ul>
        <h2>taches non faites : </h2>
        <ol>
            {tasksfaitfalse.map((task,index)=> <li> {task.titre}</li>)}
        </ol>
    </div>
  )
}

export default TodoList
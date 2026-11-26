import React from 'react'
import './StudentsTable.css'

function StudentsTable() {
  const students = [
                    { id: 1, nom: "Ali", filiere: "Développement Digital", note: 15 },
                    { id: 2, nom: "Sara", filiere: "Gestion", note: 12 },
                    { id: 3, nom: "Omar", filiere: "Développement Digital", note: 8 },
                    { id: 4, nom: "Lina", filiere: "Droit", note: 17 }
            ];
  const moyenne = (students.reduce((acc,student)=>acc + student.note,0)/students.length).toFixed(2)
  return (
    <div className='studentsTable'>
        <h2>liste des étudiants : </h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th><th>Nom</th><th>Filière</th><th>Note</th><th>Résultat</th><th>Mention</th><th>Observation</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student,index)=> 
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.nom}</td>
                        <td>{student.filiere}</td>
                        <td>{student.note}</td>
                        <td className={student.note>=10? 'admis':'ajourné'}>{student.note >= 10 ? "Admis":"Ajourné"}</td>
                        <td>{student.note >= 16 ? "Trés bien":student.note>=14 ? "bien" : student.note >=10 ? "passable":"insuffisant"}</td>
                        <td>{student.note < 10 && 'à améliorer'}</td>
                    </tr>)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={7}>moyenne classe : {moyenne}</td>
                </tr>
            </tfoot>
        </table>
        <p>nombre d'etudiant : {students.length}</p>
    </div>
  )
}

export default StudentsTable
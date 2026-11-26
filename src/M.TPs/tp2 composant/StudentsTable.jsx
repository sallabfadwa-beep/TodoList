import "./StudentsTable.css"
export default function StudentsTable(){
    const students = [ 
                    { id: 1, nom: "Ali", filiere: "Développement Digital", note: 15 }, 
                    { id: 2, nom: "Sara", filiere: "Gestion", note: 12 }, 
                    { id: 3, nom: "Omar", filiere: "Développement Digital", note: 8 }, 
                    { id: 4, nom: "Lina", filiere: "Droit", note: 17 } 
                    ];
    const moyenne = students.reduce((total, student) => total + student.note, 0) /
  students.length;
    return(
        <div>
            <h2> Liste des etudiants </h2>
            <table className="table">          
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Filiere</th>
                        <th>Note</th>
                        <th>Résultat</th>
                        <th>Mention</th>
                        <th> Observation</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student,index)=>
                    <tr key={student.id}>
                        <td>{student.id}</td> 
                        <td>{student.nom}</td>  
                        <td>{student.filiere}</td> 
                        <td>{student.note}</td>
                        <td className={student.note >=10 ? "admis":"ajourne"}>
                            {student.note >= 10?"Admis" : "Ajourné"}
                        </td>

                        <td>{student.note >= 16 ? "Très bien" :
                        student.note >= 14 ? "Bien":
                        student.note >= 10 ? "Passable":
                        "Insuffisant"}</td> 
                        <td>{student.note < 10 && "À améliorer"}</td>
                    </tr>
                    )}                  
                </tbody>
                <tfoot> 
                    <td colSpan={7}>Moyenne générale {moyenne.toFixed(2)} </td>
                </tfoot>
            </table> 

            <p> Nombre total d'étudiants : {students.length}</p>
        </div>
    );
}
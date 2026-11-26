import { useState } from "react";
import Etudiants from "./Etudiants";
import './App.css'

function Etudiants({ etudiants, setEtudiants }) {

  // 1. L'etat dyal form
  const [form, setForm] = useState({code: "", nom: "", prenom: "", note1: "", note2: "", note3: ""});

  // 2. handleChange : hia li katbdl form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,          // khli l9dim kaml
      [name]: value,    // bdl ghir li tbeddel
    });
  };

  // 3. Submit : zid etudiant jdid l liste
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEtudiant = {
      code: form.code,
      nom: form.nom,
      prenom: form.prenom,
      note1: Number(form.note1),
      note2: Number(form.note2),
      note3: Number(form.note3),
    };

    setEtudiants([...etudiants, newEtudiant]);

    // vider form
    setForm({
      code: "",
      nom: "",
      prenom: "",
      note1: "",
      note2: "",
      note3: "",
    });
  };

  return (
    <div className="etudiants">
      <h2>Liste des Étudiants</h2>
      <p>Nombre total d'étudiants : {etudiants.length}</p>

  
      <form onSubmit={handleSubmit} className="form-ajout">
        <h3>Ajouter un étudiant</h3>

        <input type="text" name="code" value={form.code} onChange={handleChange} placeholder="Code" required />
        <input type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Nom" required />
        <input type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom" required />
        <input type="number" name="note1" value={form.note1} onChange={handleChange} placeholder="Note 1" required />
        <input type="number" name="note2" value={form.note2} onChange={handleChange} placeholder="Note 2" required />
        <input type="number" name="note3" value={form.note3} onChange={handleChange} placeholder="Note 3" required />

        <button type="submit">Ajouter</button>
      </form>

    </div>
  );
}

export default Etudiants;
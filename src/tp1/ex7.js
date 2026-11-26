function ex7() {
  const couleurs = ["Rouge", "Vert", "Bleu", "Jaune"];
   
  const mesCouleurs ={
    "Rouge" : "red", 
    "Vert": "green",
    "Bleu": "bleu",
    "Jaune": "yellow"
  };
  return (
    <ul>
      {couleurs.map((couleur) => (
        <li
          key={couleur}
          style={{
            color: mesCouleurs[couleur]
          }}
        >
          {couleur}
        </li>
      ))}
    </ul>
  );
}
export default ex7;

function ex4(){
  const estConnecte= false;
  return(
    <div>
      {estConnecte? (
        <p style={{color: "green"}}>Bienvenue, utilisateur !</p>):(<p style={{color: "gray"}}>Veuillez vous connecter pour accéder au contenu.</p>)}
    </div>
  );
}
export default ex4;
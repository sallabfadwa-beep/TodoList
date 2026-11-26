import "./Menu.css";
export default function Menu(){
    const plats = [ 
                { id: 1, nom: "Salade", prix: 30 }, 
                { id: 2, nom: "Tajine", prix: 80 }, 
                { id: 3, nom: "Couscous", prix: 70 }, 
                { id: 4, nom: "Glace", prix: 25 } 
            ];
    
    return(
        <div className="menu">
            <h2>Notre menu</h2>
            <ul className="liste">
                {plats.map((plat)=><li key={plat.id}>
                    {plat.nom} - {plat.prix}DH{" "}
                    {plat.prix > 50 ? "⭐" : null} 
                </li>
                )}
            </ul>
            <h3>Le nombre de plats: {plats.length}</h3>

        </div>
    );
}
import './PhotoCard.css'
export default function PhotoCard(){
    const prix= 250
    const x= prix > 200 ? "Premium" : "Standard"
    const titreStyle= { color: "green", fontSize: "24px" }
    const obj={a:1,b:2}
    const {a,b}=obj

    return(
        <div className="card">
        <img src="logo192.png" alt="" />
        <h2 style={titreStyle}>Mon Image</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, possimus itaque? Aut id pariatur ea quos minus, cum suscipit iure quasi voluptates sint ex non placeat nam magni quae iste!</p>
        <h3>Prix: {prix}</h3>
        <h4>Prix TTC: {(prix * 1.2).toFixed(2)}DH</h4>
        <p>{x}</p>
        <h3>{"Bonjour".toUpperCase()}</h3>
        <h3>a={a} b={b}</h3>
        <button>Ajouter au panier</button>
        </div>
    );
}
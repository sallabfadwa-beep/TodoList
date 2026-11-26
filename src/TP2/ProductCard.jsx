import './ProductCard.css'
export default function ProductCard() {
    const prix = 170;
    const x = prix > 200 ? "Premium":"standard"
    const styleTitre = {color:'yellow',fontSize:'24px'}
    const ch = 'bonjour'.toUpperCase()
    const obj = {a : 1 , b : 2}
    const {a,b} = obj   
    return (
        <div className="card">
            <img src="/logo192.png" alt="" /> 
            <h2 style = {styleTitre}>image soleil</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolore nemo voluptate voluptatibus tempore cupiditate quos. Quae accusantium ipsa eius eum atque? Laboriosam quibusdam sint neque, voluptatibus tempore odio a?</p>
            <h3>prix : {prix} DH</h3>
            <h3>prix TTC : {(prix * 1.2).toFixed(2)} DH</h3>
            <h4>{prix > 200 ? "Premium" : "Standard"}</h4>
            <p>{ch}</p>
            a = {a} , b = {b}
            <button>Ajouter au panier</button>
        </div>
    )
}
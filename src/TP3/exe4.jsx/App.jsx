import ListProduct from './ListProduct';
function App(){
    const products = [ 
                        { 
                            title: "Ordinateur Portable Gamer", 
                            image: "/image/pc1.jpeg", 
                            description: "PC portable hautes performances pour le gaming et le multimédia.", 
                            price: 12000 
                        }, 
                        { 
                            title: "Ordinateur de Bureau", 
                            image: "/image/pc2.jpeg", 
                            description: "PC de bureau puissant pour le travail et les jeux.", 
                            price: 8500 
                        }, 
                        { 
                            title: "Ultrabook", 
                            image: "/image/pc3.jpeg", 
                            description: "Ordinateur léger et rapide, idéal pour les déplacements.", 
                            price: 9500 
                        }, 
                        { 
                            title: "Station de Travail", 
                            image: "/image/pc4.jpeg", 
                            description: "PC performant pour le montage vidéo et le graphisme.", 
                            price: 15000 
                        } 
                    ]; 

    
    return(
        <div>
            <ListProduct products={products}></ListProduct>
        </div>
    )

}
export default App;
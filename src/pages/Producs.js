import { Link } from "react-router-dom";


function Products() {

    return (
        <section>
            <div>
                <img src="./Bilder/Tisch.png" alt="Tisch"></img>
                <Link to="./productpage/Tisch">Zum Produkt</Link>
            </div>
            <div>
                <img src="./Bilder/Stuhl.png" alt="Tisch"></img>
                <Link to="./productpage/Stuhl">Zum Produkt</Link>
            </div>
            <div>
                <img src="./Bilder/Schuesseln.png" alt="Tisch"></img>
                <Link to="./productpage/Schuesseln">Zum Produkt</Link>
            </div>
        </section>
    );
}


export default Products;
import { Link } from "react-router-dom";

function Navigation() {

    return (
        <div>
            <h1>Woodies</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}


export default Navigation;
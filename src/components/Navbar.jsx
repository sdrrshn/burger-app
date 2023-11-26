import {Link} from "react-router-dom";
import "../styles/Navbar.css"

export function Navbar() {
    return (
        <div className="navbar">
            <div className="main">
                <img src="/src/assets/img/burgerlogo.png" alt="logo"/>
                <div className="mainLink">
                    <Link to="/">Anasayfa</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Hakkımızda</Link>
                    <Link to="/contact">İletişim</Link>
                </div>
            </div>

        </div>
    )
}
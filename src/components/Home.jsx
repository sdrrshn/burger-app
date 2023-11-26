import {Link} from "react-router-dom";
import '../styles/Home.css'
import backgroundPhoto from '../assets/img/banneryeni.jpg'
export function Home() {
    return (
        <div className="mainPage" style={{backgroundImage:`url(${backgroundPhoto})`}}>

            <div className="order">
                <Link to="/menu">
                    <button>Sipraiş Ver</button>
                </Link>
            </div>
        </div>

    )
}

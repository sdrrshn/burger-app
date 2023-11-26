import BurgerImage from '../assets/img/burger.png'
import '../styles/Contact.css'

export function Contact() {
    return (

        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${BurgerImage})`}}></div>
            <div className="rightSide">
                <h1>Bizimle iltişime Geçin</h1>
                <form>
                    <label>İsim Soyisim</label>
                    <input name="name" type="text"/>
                    <label>Email</label>
                    <input name="email" type="text"/>
                    <label>Mesajınız</label>
                    <textarea name="message"  rows="6"></textarea>
                </form>
            </div>
        </div>

    )
}
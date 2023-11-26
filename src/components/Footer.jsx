import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '/src/styles/Footer.css';

export function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
            <p>Tüm hakları saklıdır | BurgerYiyelim</p>
        </div>
    )
}
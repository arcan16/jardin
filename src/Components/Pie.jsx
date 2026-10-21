import facebook from "/logos/facebook.png"
import youtube from "/logos/youtube.png"
import instagram from "/logos/instagram.png"
import mylogo from "/logo.jpg";

export function Pie(){
    return(
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-marca">
                    <img src={mylogo} className="footer-logo" alt=""></img>
                    <p className="footer-nombre">Jardín de Niños Anáhuac</p>
                    <p className="footer-lema">Educación preescolar acreditada por la SEP.</p>
                </div>
                <div className="direccion">
                    <h2>Dirección</h2>
                    <p>C. Cuarta, El Pedregal, 31600 Col. Anáhuac, Chih.</p>
                    <a href="https://maps.app.goo.gl/p5G6u8zrzXggQngDA" rel="noreferrer" target="_blank">Ver en Google Maps</a>
                </div>
                <div className="contacto">
                    <h2>Contacto</h2>
                    <p>Cel: <a href="tel:6251232525">625-123-25-25</a></p>
                    <p><a href="mailto:jadrindeninosanahuac@gmail.com">jadrindeninosanahuac@gmail.com</a></p>
                </div>
                <div className="redes-sociales">
                    <h2>Síguenos</h2>
                    <div className="redes-container">
                        <a href="#" aria-label="Facebook">
                            <img className="social-icon" src={facebook} alt=""></img>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <img className="social-icon" src={youtube} alt=""></img>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img className="social-icon" src={instagram} alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
            <p className="footer-copy">© {new Date().getFullYear()} Jardín de Niños Anáhuac</p>
        </footer>
    );
}

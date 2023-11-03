import facebook from "/logos/facebook.png"
import youtube from "/logos/youtube.png"
import instagram from "/logos/instagram.png"
export function Pie(){
    return(
        <footer className="">
                <div className="direccion">
                    <h2>Direccion</h2>
                    <p>C. Cuarta, El Pedregal, 31600 Col Anáhuac, Chih.</p>
                    <a href="https://maps.app.goo.gl/p5G6u8zrzXggQngDA" rel="noreferrer" target="_blank">Ver en Google</a>
                </div>
                <div className="contacto">
                    <h2>Contacto</h2>
                    <h2>Cel: 625-123-25-25</h2>
                    <a href="mailto:jadrindeninosanahuac@gmail.com">Email</a>
                </div>
                <div className="redes-sociales">
                    <h2>SÍGUENOS</h2>
                    <div className="redes-container">
                        <a href="#">
                            <img className="social-icon" src={facebook} alt="Redes sociales"></img>
                        </a>
                        <a href="#">
                            <img className="social-icon" src={youtube} alt="Redes sociales"></img>
                        </a>
                        <a href="#">
                            <img className="social-icon" src={instagram} alt="Redes sociales"></img>
                        </a>
                        
                    </div>
                </div>
            </footer>
    );
}
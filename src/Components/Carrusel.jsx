import { NavLink } from "react-router-dom";

export function Carrusel(){
    return(
        <>
            <div className="slider-container">
                <div className="slider position" aria-hidden="true"></div>
                <div className="slider-overlay">
                    <p className="slider-eyebrow">Preescolar · 3 a 5 años</p>
                    <h1 className="slider-title">Aprender jugando, crecer con confianza</h1>
                    <p className="slider-text">Más de 33 años acompañando a los niños de Anáhuac en sus primeros pasos escolares.</p>
                    <div className="slider-actions">
                        <NavLink to="/inscripciones" className="btn btn-primary">Inscripciones</NavLink>
                        <NavLink to="/contacto" className="btn btn-light">Contáctanos</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

import { NavLink } from "react-router-dom";
import mylogo from "/logo.jpg";

export function Menu(){
    return(
        <header>
            <div className="logo-container">
                <img src={mylogo} className="logo-principal"></img>
                <h2 className="logo-titulo">Jardin de niños Anahuac</h2>
            </div>
            <nav className="menu">
                <NavLink to="/" className={({isActive})=>(isActive?"active-link":null)}>Home</NavLink>
                <NavLink to="/nosotros" className={({isActive})=>(isActive?"active-link":null)}>Quienes somos?</NavLink>
                <NavLink to="/inscripciones" className={({isActive})=>(isActive?"active-link":null)}>Inscripciones</NavLink>
                <NavLink to="/calendario" className={({isActive})=>(isActive?"active-link":null)}>Calendario</NavLink>
                <NavLink to="/contacto" className={({isActive})=>(isActive?"active-link":null)}>Contacto</NavLink>
            </nav>
        </header>
    );
}
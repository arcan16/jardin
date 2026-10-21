import {useState} from 'react'
import { BurguerButton } from './BurguerButton';
import mylogo from "/logo.jpg";
import { NavLink } from 'react-router-dom';

export function NavBar(){
    const [clicked, setClicked] = useState(false);

    const handleClick=()=>{
        if(window.innerWidth<768){
            setClicked(!clicked);
        }
    }
    const linkClass=({isActive})=>(isActive?"active-link":null);
    return(
        <>
            <nav className='nav-container' aria-label="Principal">
                <NavLink to="/" className="logo-container">
                    <img src={mylogo} className="logo-principal" alt=""></img>
                    <span className="logo-titulo">Jardín de Niños <strong>Anáhuac</strong></span>
                </NavLink>
                <div className={`links ${clicked ? 'active':''}`}>
                    <NavLink onClick={handleClick} to="/" end className={linkClass}>Inicio</NavLink>
                    <NavLink onClick={handleClick} to="/nosotros" className={linkClass}>¿Quiénes somos?</NavLink>
                    <NavLink onClick={handleClick} to="/inscripciones" className={linkClass}>Inscripciones</NavLink>
                    <NavLink onClick={handleClick} to="/calendario" className={linkClass}>Calendario</NavLink>
                    <NavLink onClick={handleClick} to="/contacto" className={({isActive})=>`nav-cta ${isActive?"active-link":""}`}>Contacto</NavLink>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <div className={`bg-div ${clicked ?'active':''}`} onClick={handleClick}></div>
            </nav>
        </>
    );
}

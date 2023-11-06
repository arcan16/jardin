import {useState} from 'react'
import { BurguerButton } from './BurguerButton';
import mylogo from "/logo.jpg";
import { NavLink } from 'react-router-dom';

export function NavBar(){
    const [clicked, setClicked] = useState(false);

    const handleClick=()=>{
        if(window.screen.width<768){
            setClicked(!clicked);
            console.log(clicked);
            console.log(window.screen.width);
        }
    }
    return(
        <>
            <nav className='nav-container'>
                {/* <h2>NavBar <span>Responsive</span></h2> */}
                <div className="logo-container">
                <img src={mylogo} className="logo-principal"></img>
                <h2 className="logo-titulo">Jardin de niños Anahuac</h2>
                </div >
                <div className={`links ${clicked ? 'active':''}`}>
                {/* <div className={`links active`}> */}
                    <NavLink onClick={handleClick} to="/" className={({isActive})=>(isActive?"active-link":null)}>Home</NavLink>
                    <NavLink onClick={handleClick} to="/nosotros" className={({isActive})=>(isActive?"active-link":null)}>Quienes somos?</NavLink>
                    <NavLink onClick={handleClick} to="/inscripciones" className={({isActive})=>(isActive?"active-link":null)}>Inscripciones</NavLink>
                    <NavLink onClick={handleClick} to="/calendario" className={({isActive})=>(isActive?"active-link":null)}>Calendario</NavLink>
                    <NavLink onClick={handleClick} to="/contacto" className={({isActive})=>(isActive?"active-link":null)}>Contacto</NavLink>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <div className={`bg-div initial ${clicked ?'active':''}`}></div>
            </nav>
        </>
    );
}
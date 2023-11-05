import { Hero } from "./Hero";

export function Formulario(){
    // let estilos={
    //     backgroundImage:"url('/heros/contacto.jpeg')"
    // }
    return(
        <>
            {/* <Hero titulo="Contacto" estilo={estilos}/>   */}
            <div className="hero-container">
                <div className="hero-div img-hero img-contacto" ></div>
                <h1 className="hero-title" >Contacto</h1>
            </div>
            <form action="https://formsubmit.co/sergio.p.ar.spa@gmail.com" method="POST" className="contact-form">
                <legend>
                    Contactanos
                    <p className="legend-formulario">En breve le responderemos</p>
                </legend>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" autoFocus required/>
                <input type="email" id="email" name="email" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" placeholder="Email" required/>
                <input type="number" id="telefono" name="telefono" pattern="^[0-9]{10}$"placeholder="Numero Telefónico" required/>
                <textarea id="mensaje" name="mensaje" cols="50" rows="5" placeholder="Escribe tu mensaje" required
                ></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}
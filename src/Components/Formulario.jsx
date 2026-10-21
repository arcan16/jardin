import { Hero } from "./Hero";

export function Formulario(){
    return(
        <>
            <Hero titulo="Contacto" subtitulo="Escríbenos y con gusto resolvemos tus dudas" imagen="img-contacto"/>
            <form action="https://formsubmit.co/sergio.p.ar.spa@gmail.com" method="POST" className="contact-form">
                <legend>
                    Contáctanos
                    <p className="legend-formulario">En breve te responderemos</p>
                </legend>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" autoFocus required/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" placeholder="tucorreo@ejemplo.com" required/>
                <label htmlFor="telefono">Número telefónico</label>
                <input type="tel" id="telefono" name="telefono" pattern="^[0-9]{10}$" placeholder="10 dígitos" required/>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" cols="50" rows="5" placeholder="Escribe tu mensaje" required
                ></textarea>
                <input type="submit" value="Enviar mensaje"/>
            </form>
        </>
    );
}

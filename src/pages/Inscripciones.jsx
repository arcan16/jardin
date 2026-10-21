import { Hero } from "../Components/Hero";
import { Pie } from "../Components/Pie";

export function Inscripciones(){
    return(
        <>
            <Hero titulo="Inscripciones" subtitulo="Únete a nuestra comunidad escolar" imagen="img-inscripciones"/>
            <div className="inscripciones-container section">
                <div className="inscripciones-intro">
                    <h2 className="inscripciones-top titulo">Jornada de <u>inscripción</u></h2>
                    <h3 className="inscripciones-top">Apreciada familia aspirante</h3>
                    <p className="inscripciones-top">Para nuestro preescolar es un honor tener su interés y será un placer atenderlo e iniciar el proceso de admisión a nuestra comunidad escolar.</p>
                    <p className="periodo-badge">Periodo de inscripción 2024-2025: del 1 al 14 de febrero del 2024</p>
                </div>

                <div className="proceso-container">
                    <h2>Alumnos de nuevo ingreso</h2>
                    <h3>Elige la modalidad que prefieras</h3>
                    <section className="online-presencial-container">
                        <div className="online-process">
                            <h3>Inscripción en línea</h3>
                            <ul>
                                <li>Llenar y enviar la solicitud de ingreso con la documentación adjunta antes del 14 de febrero de 2024.</li>
                                <li>Se les enviará un correo de confirmación con la fecha de inicio de clases.</li>
                                <li>Asignación de grupo.</li>
                            </ul>
                        </div>
                        <div className="presencial-process">
                            <h3>Inscripción presencial</h3>
                            <ul>
                                <li>Acudir a las instalaciones en un horario de 8:30 a. m. a 1:00 p. m.</li>
                                <li>Entregar copia de la documentación requerida.</li>
                                <li>Asignación de grupo.</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="requisitos-container">
                    <h2>Requisitos</h2>
                    <ul>
                        <li>Acta de nacimiento</li>
                        <li>CURP</li>
                        <li>Cartilla de vacunación</li>
                        <li>Comprobante de domicilio</li>
                        <li>Credencial de elector</li>
                    </ul>
                    <article>En caso de no tener espacio disponible, se pondrá al solicitante en lista de espera y se pedirá el teléfono del padre o tutor para contactarlo en caso de que se abra algún espacio.</article>
                </div>
            </div>
            <Pie/>
        </>
    );
}

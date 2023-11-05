import { Pie } from "../Components/Pie";

export function Inscripciones(){
    return(
        <>
            <div className="hero-container">
                <div className="hero-div img-hero img-inscripciones" ></div>
                <h1 className="hero-title" >Inscripciones</h1>
            </div>
            <div className="inscripciones-container">
                <h1 className="inscripciones-top titulo">JORNADA DE <u>INSCRIPCION</u></h1>
                <h3 className="inscripciones-top">Apreciada Famila Aspirante</h3>
                <p className="inscripciones-top">Para nuestro preescolar es un honor tener su interes y será un placer atenderlo e iniciar el proceso de admisión a nuestra comunidad escolar </p>
                <h2 className="inscripciones-top">Periodo de inscripción 2024-2025: del 1 al 14 de febrero del 2024</h2>

                <div className="proceso-container">
                    <h2>ALUMNOS DE NUEVO INGRESO</h2>
                    <h3>Este proceso consta de X etapas</h3>
                    <section className="online-presencial-container">
                        <div className="online-process">
                            <h3>Inscripción Online</h3>
                            <p>- Llenar y enviar la solicitud de ingreso con documentacion adjunta antes del 14 de febrero 2024</p>
                            <p>- Se les enviara un correo de confirmacion con fecha de inicio de clases</p>
                            <p>- Asignación de grupo</p>
                        </div>
                        <div className="presencial-process">
                            <h3>Inscripción Presencial</h3>
                            <p>- Acudir a instalaciones educativas en un horario de 8:30am a 1:00pm</p>
                            <p>- Entregar Copia de la documentacion requerida</p>
                            <p>- Asignación de grupo</p>
                        </div>
                    </section>
                </div>

                <div className="requisitos-container">
                    <h2>REQUISITOS:</h2>
                    <ul>
                        <li>Acta de nacimiento</li>
                        <li>CURP</li>
                        <li>Cartilla de vacunación</li>
                        <li>Comprobante de domicilio</li>
                        <li>Credencial de elector</li>
                    </ul>
                    <article>En caso de no tener espacio disponible, se pondrá al solicitante en lista de espera y se pedirá el teléfono de padre o tutor para contactarlo en caso de que se abra algún espacio.</article>
                </div>
            </div>
            <Pie/>
        </>
    );
}
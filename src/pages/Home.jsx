import { Carrusel } from "../Components/Carrusel";
import maestra from "/maestras/maestra5.png"
import { Pie } from "../Components/Pie";
export default function Home(){
    return(
        <section className="slides">
            <section className="slide">
                <Carrusel/>
            </section>
            <section className="contenido-dividido slide">
                <div className="contenido-izquierdo">
                    <h2>Aprendizaje inovador</h2>
                    <p>El descubrimiento a través de la curiosidad sustenta todas las experiencias de aprendizaje de nuestros estudiantes, desde los más pequeños hasta los mayores. Al comprender conceptos y cuestiones importantes, exploran perspectivas locales y desarrollan los atributos de un estudiante responsable. </p>
                    <div className="dato-resaltado">
                        <h3>Edades</h3>
                        <h3>De 3 a 5 años</h3>
                    </div>
                </div>
                <div className="contenido-derecho">
                    {/* <img src={didactico} alt="aula didactica"/> */}
                </div>
            </section>
            <section className="contenido-completo slide">
                
                <h2 className="titulo">Personal con experiencia</h2>
                <div className="cards-container">
                    <div className="teacher-card">
                        <img src={maestra} alt="profesora" className="img-teacher"></img>
                        <div className="teacher-details">
                            <h4 className="card-title">Marvin Ibarra</h4>
                            <p className="card-expertise">7 años de experiencia</p>
                            <h2 className="card-puesto">Dirección</h2>
                        </div>
                    </div>
                    <div className="teacher-card">
                        <img src={maestra} alt="profesora" className="img-teacher"></img>
                        <div className="teacher-details">
                            <h4 className="card-title">Marifeli Rivera</h4>
                            <p className="card-expertise">34 años de experiencia</p>
                            <h2 className="card-puesto">Maestra de 1 año</h2>
                        </div>
                    </div>
                    <div className="teacher-card">
                        <img src={maestra} alt="profesora" className="img-teacher"></img>
                        <div className="teacher-details">
                            <h4 className="card-title">Citlalli M. del Campo</h4>
                            <p className="card-expertise">9 años de experiencia</p>
                            <h2 className="card-puesto">Maestra de 2 año</h2>
                        </div>
                    </div>
                    <div className="teacher-card">
                        <img src={maestra} alt="profesora" className="img-teacher"></img>
                        <div className="teacher-details">
                            <h4 className="card-title">Gregoria Gutierrez</h4>
                            <p className="card-expertise">15 años de experiencia</p>
                            <h2 className="card-puesto">Maestra de 3 año</h2>
                        </div>
                    </div>
                    <div className="teacher-card">
                        <img src={maestra} alt="profesora" className="img-teacher"></img>
                        <div className="teacher-details">
                            <h4 className="card-title">Gabriela Arellano</h4>
                            <p className="card-expertise">16 años de experiencia</p>
                            <h2 className="card-puesto">Limpieza(todologa)</h2>
                        </div>
                    </div>
                    <div className="teacher-plus">
                        Nuestro personal recibe formación constante dentro y fuera de la institución, por lo que están a la vanguardia en lo relacionado al trabajo con niños.
                    </div>
                </div>
                <Pie/>
            </section>
        </section>
    );
}
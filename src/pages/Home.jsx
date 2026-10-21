import { Carrusel } from "../Components/Carrusel";
import maestra from "/maestras/maestra5.png"
import didactico from "/escuela/didactico.jpg"
import { Pie } from "../Components/Pie";

const personal = [
    { nombre: "Maria Janeth Burrola", experiencia: "7 años de experiencia", puesto: "Dirección" },
    { nombre: "Marifeli Rivera", experiencia: "34 años de experiencia", puesto: "Maestra de 1.er año" },
    { nombre: "Citlalli M. del Campo", experiencia: "9 años de experiencia", puesto: "Maestra de 2.º año" },
    { nombre: "Angelica Cortes", experiencia: "15 años de experiencia", puesto: "Maestra de 3.er año" },
    { nombre: "Gabriela Arellano", experiencia: "16 años de experiencia", puesto: "Limpieza (todóloga)" },
];

export default function Home(){
    return(
        <section className="slides">
            <section className="slide">
                <Carrusel/>
            </section>
            <section className="contenido-dividido section">
                <div className="contenido-izquierdo">
                    <p className="eyebrow">Nuestra propuesta</p>
                    <h2 className="section-title">Aprendizaje innovador</h2>
                    <p>El descubrimiento a través de la curiosidad sustenta todas las experiencias de aprendizaje de nuestros estudiantes, desde los más pequeños hasta los mayores. Al comprender conceptos y cuestiones importantes, exploran perspectivas locales y desarrollan los atributos de un estudiante responsable. </p>
                    <div className="dato-resaltado">
                        <span className="dato-label">Edades</span>
                        <span className="dato-valor">De 3 a 5 años</span>
                    </div>
                </div>
                <div className="contenido-derecho">
                    <img src={didactico} alt="Aula didáctica del jardín de niños"/>
                </div>
            </section>
            <section className="contenido-completo section section-alt">
                <p className="eyebrow">Nuestro equipo</p>
                <h2 className="section-title titulo">Personal con experiencia</h2>
                <div className="cards-container">
                    {personal.map((p) => (
                        <article className="teacher-card" key={p.nombre}>
                            <img src={maestra} alt="" className="img-teacher"></img>
                            <div className="teacher-details">
                                <h3 className="card-title">{p.nombre}</h3>
                                <p className="card-puesto">{p.puesto}</p>
                                <p className="card-expertise">{p.experiencia}</p>
                            </div>
                        </article>
                    ))}
                    <div className="teacher-plus">
                        Nuestro personal recibe formación constante dentro y fuera de la institución, por lo que están a la vanguardia en lo relacionado al trabajo con niños.
                    </div>
                </div>
            </section>
            <Pie/>
        </section>
    );
}

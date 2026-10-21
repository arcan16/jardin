import { Hero } from "../Components/Hero";
import { Pie } from "../Components/Pie";

export function Nosotros(){
    return(
        <section className="nosotros-main">
            <Hero titulo="¿Qué nos hace diferentes?" imagen="img-nosotros"/>
            <div className="contenido-nosotros section">
                <blockquote className="left-box">
                    <p className="parrafo-izquierdo">“Nuestra tarea en cuanto a la creatividad es ayudar a que los niños suban sus propias montañas, lo más alto posible.”</p>
                </blockquote>
                <div className="nosotros-descripcion">
                    <p className="eyebrow">Conócenos</p>
                    <h2 className="section-title sub-nosotros">¿Quiénes somos?</h2>
                    <p>Somos una institución con 33 años de experiencia en el cuidado y educación de estudiantes de nivel preescolar. Jardín de Niños Anáhuac es una escuela de alta calidad educativa acreditada por la Secretaría de Educación Pública.</p>
                    <p>Nuestro colegio es un ecosistema educativo diseñado especialmente para estimular la inteligencia, el aprendizaje y la creatividad, brindando a los niños las más variadas oportunidades para ir empezando a entender la vida.</p>
                    <p>Consideramos de gran importancia brindar una sólida educación para que el alumno pueda desarrollar una actitud positiva y abierta al conocimiento y al aprendizaje, que estimule el juego, la creatividad, el amor por el deporte y la naturaleza, aspectos básicos para el éxito en las siguientes etapas de su vida y educación.</p>
                </div>
            </div>
            <div className="mision-vision-valores section">
                <div className="box-mvv mision">
                    <h2 className="mvv-title mision-t">Misión</h2>
                    <p>Proporcionar un ecosistema de calidad, para la formación de alumnos felices de aprender, reflexivos, innovadores, creativos, protagonistas de su aprendizaje, con alta sensibilidad social y capacidad para adaptarse a los constantes retos del presente y del futuro.</p>
                </div>
                <div className="box-mvv vision">
                    <h2 className="mvv-title vision-t">Visión</h2>
                    <p>Ser una institución educativa, líder en la aplicación de innovadoras metodologías de enseñanza, aprendizaje, excelencia académica y sólido compromiso de sus integrantes, constituyéndose en un programa educativo de calidad.</p>
                </div>
                <div className="box-mvv valores">
                    <h2 className="mvv-title valores-t">Valores</h2>
                    <ul className="lista-valores">
                        <li>Profesionalismo</li>
                        <li>Respeto</li>
                        <li>Amor y pasión</li>
                        <li>Comunicación</li>
                        <li>Creatividad</li>
                        <li>Innovación</li>
                    </ul>
                </div>
            </div>
            <Pie/>
        </section>
    );
}

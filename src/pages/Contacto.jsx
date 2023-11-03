import { Formulario } from "../Components/Formulario";
import { Pie } from "../Components/Pie";

export function Contacto(){
    return(
        <section className="page-contacto">
                <Formulario/>
                <br/>
                <Pie/>
        </section>
        
    );
}
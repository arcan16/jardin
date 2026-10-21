import { CalendarioGoogle } from "../Components/CalendarioGoogle";
import { Hero } from "../Components/Hero";
import { Pie } from "../Components/Pie";

export function Calendario(){
    return(
        <>
            <Hero titulo="Calendario" subtitulo="Fechas importantes del ciclo escolar" imagen="img-calendario"/>
            <CalendarioGoogle/>
            <Pie/>
        </>
    );
}

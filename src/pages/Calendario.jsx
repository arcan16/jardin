import { CalendarioGoogle } from "../Components/CalendarioGoogle";
import { Hero } from "../Components/Hero";
import { Pie } from "../Components/Pie";

export function Calendario(){
    let estilos={
        backgroundImage:"url('/heros/cal.jpg')",
         backgroundPosition:"center 65%",
         backgroundSize:"cover"
    }
    return(
        <>
            <Hero titulo="Calendario" estilo={estilos}/> 
            <CalendarioGoogle/>
            <Pie/>
        </>
    );
}
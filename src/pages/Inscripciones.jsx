import { Hero } from "../Components/Hero";

export function Inscripciones(){
    let estilos={
        backgroundImage:"url('/heros/admision.jpg')",
        backgroundPosition:"center 50%",
        backgroundSize:"auto 250%"
    }
    return(
        <>
            <Hero titulo="Inscripciones" estilo={estilos}/>
        </>
    );
}
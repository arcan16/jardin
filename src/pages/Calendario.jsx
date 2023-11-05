import { CalendarioGoogle } from "../Components/CalendarioGoogle";
import { Hero } from "../Components/Hero";
import { Pie } from "../Components/Pie";

export function Calendario(){
    // let estilos={
    //     backgroundImage:"url('/heros/cal.jpg')",
    //      backgroundPosition:"center 65%",
    //      backgroundSize:"cover"
    // }
    return(
        <>
            {/* <Hero titulo="Calendario" estilo={estilos}/>  */}
            <div className="hero-container">
                <div className="hero-div img-hero img-calendario" ></div>
                <h1 className="hero-title" >Calendario</h1>
            </div>
            <CalendarioGoogle/>
            <Pie/>
        </>
    );
}
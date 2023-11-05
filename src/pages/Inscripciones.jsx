import { Hero } from "../Components/Hero";

export function Inscripciones(){
    // let estilos={
    //     backgroundImage:"url('/heros/admision.jpg')",
    //     backgroundPosition:"center 50%",
    //     backgroundSize:"auto 250%"
    // }
    return(
        <>
            {/* <Hero titulo="Inscripciones" estilo={estilos}/> */}
            <div className="hero-container">
                <div className="hero-div img-hero img-inscripciones" ></div>
                <h1 className="hero-title" >Inscripciones</h1>
            </div>
        </>
    );
}
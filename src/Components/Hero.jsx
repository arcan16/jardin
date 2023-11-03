export function Hero(props){
    return(
        <div className="hero-container">
                <div className="hero-div img-contacto" style={props.estilo}></div>
                <h1 className="hero-title" >{props.titulo}</h1>
        </div>
    );
}
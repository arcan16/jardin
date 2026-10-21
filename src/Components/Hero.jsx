// Encabezado con imagen de fondo para las páginas internas.
// "imagen" es la clase que define la foto (img-nosotros, img-inscripciones, etc.)
export function Hero(props){
    return(
        <header className={`hero-container ${props.imagen}`}>
            <div className="hero-content">
                <h1 className="hero-title">{props.titulo}</h1>
                {props.subtitulo && <p className="hero-subtitle">{props.subtitulo}</p>}
            </div>
        </header>
    );
}

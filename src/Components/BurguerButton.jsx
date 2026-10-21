export function BurguerButton(props) {
  return (
    <>
        <button
          type="button"
          onClick={props.handleClick}
          className={`icon nav-icon-5 ${props.clicked?'open':''}`}
          aria-label={props.clicked ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={props.clicked}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </>
  )
}

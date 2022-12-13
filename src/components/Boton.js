import Reproductor from "./Reproductor"

function Boton({ children , estaPulsada , fuente , play , mouseDown , mouseUp }){
    return(
        <button 
      id={`id-${children}`}
      className='drum-pad bg-red-500 px-3 py-3 m-4 text-xs rounded-md self-center hover:w-20 font-serif'
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
     >
      <Reproductor 
        child={children}
        fnt={fuente}
        />{children}
    </button>
    )
}

export default Boton
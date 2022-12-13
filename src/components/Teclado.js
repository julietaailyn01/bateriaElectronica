import Boton from "./Boton";

function Teclado({ estadoBoton , fuentes , pulsar , soltar }){
    let {estado, letra} = estadoBoton;
    return(
        <div className="columns-3  text-xl py-10">
         <Boton
        fuente={fuentes[0].url}
        estaPulsada={/[qQ]/.test(letra)? estado:false}
        play={/[qQ]/.test(letra)? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        Q</Boton>
      <Boton
        fuente={fuentes[1].url}
        estaPulsada={/[wW]/.test(letra) ? estado:false}
        play={/[wW]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        W</Boton>
      <Boton
        fuente={fuentes[2].url}
        estaPulsada={/[eE]/.test(letra) ? estado:false}
        play={/[eE]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        E</Boton>
      <Boton
        fuente={fuentes[3].url}
        estaPulsada={/[aA]/.test(letra) ? estado:false}
        play={/[aA]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        A</Boton>
      <Boton
        fuente={fuentes[4].url}
        estaPulsada={/[sS]/.test(letra) ? estado:false}
        play={/[sS]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        S</Boton>
      <Boton
        fuente={fuentes[5].url}
        estaPulsada={/[dD]/.test(letra) ? estado:false}
        play={/[dD]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        D</Boton>
      <Boton
        fuente={fuentes[6].url}
        estaPulsada={/[zZ]/.test(letra) ? estado:false}
        play={/[zZ]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        Z</Boton>
      <Boton
        fuente={fuentes[7].url}
        estaPulsada={/[xX]/.test(letra) ? estado:false}
        play={/[xX]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        X</Boton>
      <Boton
        fuente={fuentes[8].url}
        estaPulsada={/[cC]/.test(letra) ? estado:false}
        play={/[cC]/.test(letra) ? estado:false}
        mouseDown={pulsar}
        mouseUp={soltar}
      >
        C</Boton>        
        </div>
    )
}

export default Teclado
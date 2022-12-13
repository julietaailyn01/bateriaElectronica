import React from "react";
import { useState } from "react";
import Display from "./components/Display";
import Teclado from "./components/Teclado";



function App(){

  const bass1 = 'https://freewavesamples.com/files/Bass-Drum-1.wav';
  const bass2 = 'https://freewavesamples.com/files/Bass-Drum-2.wav';
  const bamboo = 'https://freewavesamples.com/files/Bamboo.wav';
  const kick = 'https://freewavesamples.com/files/Boom-Kick.wav';
  const clap1 = 'https://freewavesamples.com/files/Clap-1.wav';
  const cowbell = 'https://freewavesamples.com/files/Cowbell-2.wav';
  const tom = 'https://freewavesamples.com/files/Electro-Tom.wav';
  const clap2 = 'https://freewavesamples.com/files/Clap-2.wav';
  const emu = 'https://freewavesamples.com/files/E-Mu-Proteus-FX-Wacky-Snare.wav';

  const efectos = [
  {
    nombre: 'bass 1',
    url: bass1
  },
  {
    nombre: 'bass 2',
    url: bass2
  },
  {
    nombre: 'bamboo',
    url: bamboo
  },
  {
    nombre: 'kick',
    url: kick
  },
  {
    nombre: 'clap 1',
    url: clap1
  },
  {
    nombre: 'cowbell',
    url: cowbell
  },
  {
    nombre: 'tom',
    url: tom
  },
  {
    nombre: 'clap 2',
    url: clap2
  },
  {
    nombre: 'emu',
    url: emu
  }
]

  const [pulsada, setPulsada] = useState({estado:false, letra: null});
  const [nombre, setNombre] = useState('');
  const exp = /[qweaszxcdQWEASDZXC]/;  
  const nombreSelect = n => {
    /[qQ]/.test(n)? setNombre(efectos[0].nombre):
    /[wW]/.test(n)? setNombre(efectos[1].nombre):
    /[eE]/.test(n)? setNombre(efectos[2].nombre):
    /[aA]/.test(n)? setNombre(efectos[3].nombre):
    /[sS]/.test(n)? setNombre(efectos[4].nombre):
    /[dD]/.test(n)? setNombre(efectos[5].nombre):
    /[zZ]/.test(n)? setNombre(efectos[6].nombre):
    /[xX]/.test(n)? setNombre(efectos[7].nombre):
    /[cC]/.test(n)? setNombre(efectos[8].nombre):
    setNombre('');
  }

  function playSound(s) {    
    const sound = document.getElementById(s);    
    sound.play();
  }
  const mouseDown = e => {
    if(exp.test(e.target.textContent)){
      setPulsada({estado:true, letra: e.target.textContent})
      nombreSelect(e.target.textContent);
      playSound(e.target.textContent)
    }
  }
  const mouseUp = e => {
    if(exp.test(e.target.textContent))
      setPulsada({estado:false, letra: e.target.textContent});         
  }
  const teclaPulsada = e => {
    if (exp.test(e.key)) {
      setPulsada({estado:true, letra: e.key});
      nombreSelect(e.key);
      playSound(e.key);
    }
  }      
  const teclaLiberada = e => {
    if (exp.test(e.key))
       setPulsada({estado:false, letra: e.key});    
  } 
  
  const efectoDown = (event) => teclaPulsada(event);
  const efectoUp = (event) => teclaLiberada(event);
  
  return (
    <div className="bg-gray-800 h-screen text-white flexjustify-center items-center">
      <div
      id='drum-machine'
      className=''
      tabIndex="1"
      onKeyDown={ efectoDown }
      onKeyUp={ efectoUp }>
      <div className='flex items-center justify-center '>
        <div className='bg-zinc-800 max-w-sm p-4 rounded-md my-20'>
          <div 
            id='drum-pad-contenedor'
            className=' items-center justify-center text-center'>
            <Teclado
              pulsar={mouseDown}
              soltar={mouseUp}
              fuentes={efectos}
              estadoBoton={pulsada}
            />
          </div>
          <div
            className=''> 
            <Display
              nombre={nombre}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}


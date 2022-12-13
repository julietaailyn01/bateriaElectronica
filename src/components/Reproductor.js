function Reproductor({ fnt , child}){
  return(
    <audio
        id={child}
        className='clip'
        src={fnt}
        type='audio/wav'
        preload
      ></audio>
  )

}

export default Reproductor
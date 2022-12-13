function Display({nombre}){
    return(
        <div             
      id='display'
      className='drum-display w-full p-2 rounded-md bg-zinc-600 mb-2 text-center'
    >
      {nombre}
    </div>
  );
}

export default Display
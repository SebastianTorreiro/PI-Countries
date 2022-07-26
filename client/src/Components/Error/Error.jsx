import React from 'react'

export default function Error() {

    const reload = ()=>{
        window.location.reload()
    }
    
  return (
    <div>

    <div className='error-forzado'>Hubo un error inseperado</div>
    <button onClick={reload}>haz click aqui para recargar la pagina!</button>

    </div>
  )
}

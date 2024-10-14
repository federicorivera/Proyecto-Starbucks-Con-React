import React from 'react'
import "../css/formulario.css"

const Formulario = () => {
  return (
  
    <section className="formulario">
    <h2 className="formulario__h2">CONTACTANOS</h2>

    <form action="" className="formulario__form">
        <label className="formulario__form-label">correo electronico</label>
        <input className="formulario__form-input" type="text" required placeholder="coloque su correo electronico" />
        <label className="formulario__form-label">comentario</label>
        <input  className="formulario__form-input-2" type="text" required placeholder="coloque su comentario"b/>

        <div className="formulario__contenedor">
        <input className="formulario__contenedor-button"  type="submit" />
    </div>
    
    </form>
</section>

  )
}

export default Formulario;

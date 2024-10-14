import React from 'react'
import "../css/galeria.css"
import imagenUno from "../imagenes/galeria-1.png"
import imagenDos from "../imagenes/galeria-2.png"
import imagenTres from "../imagenes/galeria-3.png"

const Galeria = () => {
  return (
    <section className="galeria">
    <div className="galeria__contenedor-img">
        <img src={imagenUno} alt="un cafe" className="galeria__img" />
        <img src={imagenDos} alt="dos manos teniendo dos cafe" className="galeria__img" />
        <img src={imagenTres} alt="una mano teniendo un cafe" className="galeria__img" />
    </div>
</section>
  )
}

export default Galeria

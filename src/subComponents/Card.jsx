import React from 'react'

const Card = ({image, tittle, subTittle, description, textContentValue, textContentValueDos, btnEstado, circle, estado}) => {
  return (
    <div className="cards__card">
    <img src={image} alt="card 2 de la pagina" className="cards__card-img" />

    <div className="cards__contenedor-texto">
        <h3 className="cards__card-h3">{tittle + " "} <span className="cards__card-span">{subTittle}</span></h3>
        <p className="cards__card-descripcion">{description}</p><br></br>
        <input className="cards__card-button" type="button" value={textContentValue} />
       
       {btnEstado ? <input className="cards__card-button-2" type="button" value={textContentValueDos} /> : null}
    </div>
   {estado ? <div className="cards__circle">{circle}</div> : null}
</div> 
  )
}

export default Card

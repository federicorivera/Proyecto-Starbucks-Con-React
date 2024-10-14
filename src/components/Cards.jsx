import React from 'react'
import Card from '../subComponents/Card';
import "../css/cards.css";
import cardUno from "../imagenes/card-1.png";
import cardDos from "../imagenes/card-2.png";
import cardTres from "../imagenes/card-3.png";
import cardCuatro from "../imagenes/card-4.png";


const Cards = () => {
  return (
    <section className="cards">

      {/* CARD 1 */}

      <Card
          image={cardUno}
          tittle={"Aplicacion de"} 
          subTittle={"Starbucks"} 
          description={"Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca ha sido tan facil."} 
          circle={"5%"} 
          textContentValue={"Pruebalo"}
          estado={true}
         />


         {/* CARD 2 */}
      <Card 
          image={cardDos}
          tittle={"Starbucks"} 
          subTittle={"Delivery"}
          description={"Starbucks entrega su comida y bebida favorita en la puerta de su casa."}
          circle={"10%"}
          textContentValue={"Entrega por UberEat"}
          textContentValueDos={"Entrega por PedidoYa"}
          estado={true}
          btnEstado={true}
      />

      {/* CARD 3 */}
      <Card
          image={cardTres}
          tittle={"Novedades"} 
          subTittle={"Starbucks"} 
          description={"Mantengase informado de nuestras ultimas novedades y actualizaciones."} 
          textContentValue={"Mas informacion"}
      />


      {/* CARD 4 */}
      <Card 
          image={cardCuatro}
          tittle={"Historias de"}
          subTittle={"Starbucks"}
          description={"Descrubra nuestra empresa y nuestra historia."} 
          textContentValue={"Mas informacion"}
      />

    </section>
  )
}

export default Cards;

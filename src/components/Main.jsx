import React from 'react'
import LOGO from "../imagenes/Logo.png"
import "../css/main.css";

const Main = () => {
  return (
    <section className="main">

        <div className="main__contenedor-texto">
            <h1 className="main__titulo-principal">No solo es Cafe es <span className="main__span">Starbucks</span></h1>
            <p className="main__texto">
                Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas: compartir el mejor
                café con nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando
                abrió la primera tienda Starbucks en 1971, y así continúa siendo hoy.
            </p>
        </div>

        <div className="main__contenedor-img">
            <img className="main__img" src={LOGO} alt="Imagen principal" />
        </div>

        </section>

  )
}

export default Main;

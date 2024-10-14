import LOGO from "../imagenes/Logo.png"
import BtnHeader from "../subComponents/BtnHeader";
import "../css/header.css"

const Header = () => {
  return (
    <header className="header">

    <div className="header__contenedor">
    <img className="header__logo" src={LOGO} alt="Logo principal de la pagina web" />
    </div>

    <nav className="header__nav">
        <BtnHeader content={"INICIO"}/>
        <BtnHeader content={"CAFE"}/>
        <BtnHeader content={"SOBRE NOSOTROS"}/>
        <BtnHeader content={"DELIVERY"}/>
      
    </nav>

    <div className="header__login">
        <i id="icon" className="header__login-icon  bi bi-person-circle"></i>
        <i className="header__icon bi bi-list"></i>
    </div>

</header>

  )
}

export default Header;
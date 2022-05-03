import React from "react";
import "./footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';

import { Link as LinkRouter } from "react-router-dom"
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Footer = () => {
  return (
    <footer>
      <div className="divNavFooter">
        <ul>
          <li className=""><LinkRouter className="footerNav" aria-current="page" to={"/"}>Inicio</LinkRouter></li>
          <li className=""><LinkRouter className="footerNav " to={"/portfolio"}>Portafolio</LinkRouter></li>
          <li><LinkRouter className="footerNav" to={"/services"}>Servicios</LinkRouter></li>
          <li><LinkRouter className="footerNav" to={"/signUp"}>Contacto</LinkRouter></li>

        </ul>
      </div>
      <div className="diVFooter">

      </div>
      <div className="divIcon">
        <ul>

          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.google.es/maps/place/ONI+Coffee+Shop/@48.8688602,2.3555228,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e0e33f60c7b:0x509e16fe7178f322!8m2!3d48.8688567!4d2.3577115?hl=es"><RoomIcon className="iconFooter" /></a></li>

          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.instagram.com/"><InstagramIcon className="iconFooter" /></a></li>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="mailto:macchiatoweb10@gmail.com"><MailOutlineIcon className="iconFooter" /></a></li>
        </ul>

      </div>
      <div className="divCopy">
        <h6 className="copy">Copyrigth&copy; 2022 Derechos reservados</h6>
      </div>
    </footer>
  )
}
export default Footer
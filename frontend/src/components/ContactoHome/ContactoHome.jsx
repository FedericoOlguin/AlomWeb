import React from 'react'
import './contactoHome.css'
import Contact from '../../Media/contact.svg'
import { Link as LinkRouter } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";


function contactohome(){
  return (
    <section className="section__contacto">
      <div className="contenedor__contacto">
        <img src={Contact} alt="imagen de contacto" className="img-contact" />
      </div>
      <div className="contenedor__contacto">
        <LinkRouter to={"/"}>
          <button className="boton-contact">Contacto</button>
        </LinkRouter>
        <h2 className="subtitulo-contact">
          <LocalPhoneIcon />
          <span> Colombia:(+57) 3104258723</span>
        </h2>
        <h2 className="subtitulo-contact">
          <LocalPhoneIcon />
          <span> Argentina:(+54) 3513592220</span>
        </h2>
        <h2>
          <a
            className="link-contact"
            target="_blank"
            rel="noreferrer nopener"
            href="mailto: alom.web.services@gmail.com"
          >
            <MailOutlineIcon /> alom.web.services@gmail.com
          </a>
        </h2>
      </div>
    </section>
  );
}

export default contactohome
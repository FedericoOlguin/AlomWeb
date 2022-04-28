import React from "react";
import "./portfolio.css";
import SvgService from "../../Media/services.svg";

function Portfolio() {
  return (
    <>
      <div className="div__portfolio-titulo">
        <h1 className="portfolio__titulo">Nuestro Portafolio</h1>
      </div>

      <div id="div__portfolio-ppal">
        <img src={SvgService} alt="Equipo de trabajo álom" />
        <div className="div__portfolio-logo">
          <img src="" alt="" />
        </div>
      </div>

      <div className="div__portfolio-parrafo">
        <h2 className="portfolio_subtitulo">
          Álom
        </h2>
        <p className="portfolio__parrafo">
          Somos una empresa que nace como idea de emprendimiento de un grupo de
          amigos y forma soluciones de software a nivel internacional. Como
          parte de nuestra experiencia hemos desarrollado aplicaciones desde la
          conformación de su manejo de datos (backend) hasta la visualización
          que va a experimentar el usuario (frontend y UI), tanto a nivel web
          como mobile.
        </p>
      </div>
    </>
  );
}
export default Portfolio;

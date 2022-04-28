import React from "react";
import "./portfolio.css";
import SvgService from "../../Media/services.svg";

function Portfolio() {
  return (
    <>
      <div className="div__portfolio-titulo">
        <h1>Nuestro Portafolio</h1>
      </div>

      <div id="div__portfolio-ppal">
        <img src={SvgService} alt="Equipo de trabajo álom" />
        <div className="div__portfolio-logo">
          <img src="" alt="" />
        </div>
      </div>

      <div className="div__portfolio-parrafo">

      </div>
    </>
  );
}
export default Portfolio;
